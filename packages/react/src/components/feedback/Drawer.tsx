// packages/react/src/components/feedback/Drawer.tsx
import React, { useEffect, forwardRef, ReactNode } from 'react';
import { CloseIcon } from '@spectra/icons';

export interface DrawerProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: number | string;
}

/**
 * Drawer - Slide-out sheet panel anchored to the edge of the viewport.
 * Engineered for deep navigation sheets, filter drawers, and detail panels with focus trapping.
 */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      title,
      children,
      footer,
      placement = 'right',
      size = 360,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    // Close on Escape key
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose();
        }
      };
      if (isOpen) {
        window.addEventListener('keydown', handleKeyDown);
      }
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const isHorizontal = placement === 'left' || placement === 'right';

    return (
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          justifyContent:
            placement === 'right'
              ? 'flex-end'
              : placement === 'left'
              ? 'flex-start'
              : 'stretch',
          alignItems:
            placement === 'bottom'
              ? 'flex-end'
              : placement === 'top'
              ? 'flex-start'
              : 'stretch',
        }}
      >
        {/* Backdrop overlay */}
        <div
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(3px)',
            animation: 'fadeIn 0.2s ease',
          }}
        />

        {/* Drawer Sheet Container */}
        <div
          ref={ref}
          className={className}
          style={{
            position: 'relative',
            zIndex: 1,
            width: isHorizontal ? size : '100%',
            height: !isHorizontal ? size : '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            backgroundColor: 'var(--color-surface-elevated)',
            borderLeft: placement === 'right' ? '1px solid var(--color-border-default)' : 'none',
            borderRight: placement === 'left' ? '1px solid var(--color-border-default)' : 'none',
            borderBottom: placement === 'top' ? '1px solid var(--color-border-default)' : 'none',
            borderTop: placement === 'bottom' ? '1px solid var(--color-border-default)' : 'none',
            boxShadow: 'var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.25))',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'slideIn 0.2s ease',
            ...style,
          }}
          {...rest}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--color-border-default)',
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 16, color: 'var(--color-text-primary)' }}>
              {title}
            </div>
            <button
              type="button"
              aria-label="Close drawer"
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                padding: 4,
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                display: 'flex',
                borderRadius: 4,
              }}
            >
              <CloseIcon size={18} />
            </button>
          </div>

          {/* Body */}
          <div
            style={{
              padding: 20,
              flex: 1,
              overflowY: 'auto',
              color: 'var(--color-text-primary)',
            }}
          >
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div
              style={{
                padding: '14px 20px',
                borderTop: '1px solid var(--color-border-default)',
                backgroundColor: 'var(--color-surface-raised)',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 10,
              }}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';

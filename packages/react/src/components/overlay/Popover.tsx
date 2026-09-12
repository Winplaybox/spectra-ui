// packages/react/src/components/overlay/Popover.tsx
import React, { forwardRef, ReactNode, useState, useRef, useEffect } from 'react';
import { CloseIcon } from '@spectra/icons';

export interface PopoverProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  trigger: ReactNode;
  title?: ReactNode;
  children: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * Popover - Anchored card overlay displaying rich contextual content.
 * Benchmarked against Google Material UI Popover & Microsoft Fluent UI 2 Popover.
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      trigger,
      title,
      children,
      placement = 'bottom',
      isOpen: controlledOpen,
      onOpenChange,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledOpen !== undefined;
    const [internalOpen, setInternalOpen] = useState(false);
    const open = isControlled ? controlledOpen : internalOpen;

    const containerRef = useRef<HTMLDivElement>(null);

    const toggle = () => {
      const next = !open;
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    };

    const close = () => {
      if (!isControlled) setInternalOpen(false);
      onOpenChange?.(false);
    };

    // Close on click outside
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          close();
        }
      };
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (
      <div
        ref={(node) => {
          (containerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={className}
        style={{
          position: 'relative',
          display: 'inline-block',
          ...style,
        }}
        {...rest}
      >
        <div onClick={toggle} style={{ display: 'inline-block', cursor: 'pointer' }}>
          {trigger}
        </div>

        {open && (
          <div
            role="dialog"
            style={{
              position: 'absolute',
              top: placement === 'bottom' ? 'calc(100% + 8px)' : undefined,
              bottom: placement === 'top' ? 'calc(100% + 8px)' : undefined,
              left: placement === 'right' ? 'calc(100% + 8px)' : 0,
              right: placement === 'left' ? 'calc(100% + 8px)' : undefined,
              width: 280,
              backgroundColor: 'var(--color-surface-elevated, #1e293b)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
              borderRadius: 'var(--radius-component-md, 8px)',
              boxShadow: 'var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.4))',
              zIndex: 1000,
              padding: '14px 16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: title ? 8 : 4,
              }}
            >
              {title && (
                <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary, #f8fafc)' }}>
                  {title}
                </div>
              )}
              <button
                type="button"
                aria-label="Close popover"
                onClick={close}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 2,
                  cursor: 'pointer',
                  color: 'var(--color-text-muted, #94a3b8)',
                  display: 'flex',
                  marginLeft: 'auto',
                }}
              >
                <CloseIcon size={14} />
              </button>
            </div>

            <div style={{ fontSize: 12, color: 'var(--color-text-secondary, #94a3b8)', lineHeight: 1.5 }}>
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';

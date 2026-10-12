// packages/react/src/components/overlay/BottomSheet.tsx
import React, { useEffect, forwardRef, ReactNode } from 'react';
import { CloseIcon } from '@winplaybox/icons';

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
  ({ isOpen, onClose, title, children, height = 'auto', className, style }, ref) => {
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) onClose();
      };
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
      }
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* Backdrop */}
        <div
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(3px)',
            transition: 'opacity 0.2s ease',
          }}
        />

        {/* Sheet Content */}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={className}
          style={{
            position: 'relative',
            backgroundColor: 'var(--color-surface-elevated, #FFFFFF)',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.2)',
            maxHeight: '90vh',
            height,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'spectra-slide-up 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
            ...style,
          }}
        >
          {/* Drag Handle Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 4px 0' }}>
            <div
              style={{
                width: 36,
                height: 4,
                borderRadius: 2,
                backgroundColor: 'var(--color-border-strong, #D1D5DB)',
              }}
            />
          </div>

          {/* Header */}
          {title && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 20px 14px 20px',
                borderBottom: '1px solid var(--color-border-subtle)',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 4,
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CloseIcon size={16} />
              </button>
            </div>
          )}

          {/* Body Content */}
          <div style={{ padding: 20, overflowY: 'auto', flex: 1 }}>
            {children}
          </div>
        </div>
      </div>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

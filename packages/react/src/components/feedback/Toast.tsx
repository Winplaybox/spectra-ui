// packages/react/src/components/feedback/Toast.tsx
import React, { forwardRef, ReactNode } from 'react';
import { CloseIcon, CheckIcon, AlertCircleIcon, InfoIcon } from '@spectra/icons';

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger';

export interface ToastProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title?: ReactNode;
  children: ReactNode;
  variant?: ToastVariant;
  onClose?: () => void;
  action?: ReactNode;
}

/**
 * Toast - Ephemeral floating alert notification banner.
 * Engineered for contextual system feedback with configurable durations and dismissal actions.
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      title,
      children,
      variant = 'info',
      onClose,
      action,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const getIcon = () => {
      switch (variant) {
        case 'success': return <CheckIcon size={16} color="#22c55e" />;
        case 'warning': return <AlertCircleIcon size={16} color="#f59e0b" />;
        case 'danger': return <AlertCircleIcon size={16} color="#ef4444" />;
        default: return <InfoIcon size={16} color="#007FFF" />;
      }
    };

    const getBorderColor = () => {
      switch (variant) {
        case 'success': return 'rgba(34, 197, 94, 0.4)';
        case 'warning': return 'rgba(245, 158, 11, 0.4)';
        case 'danger': return 'rgba(239, 68, 68, 0.4)';
        default: return 'rgba(0, 127, 255, 0.4)';
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        className={className}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
          padding: '12px 16px',
          borderRadius: 'var(--radius-component-md, 8px)',
          backgroundColor: 'var(--color-surface-elevated, #1e293b)',
          border: `1px solid ${getBorderColor()}`,
          boxShadow: 'var(--shadow-lg, 0 10px 25px -5px rgba(0, 0, 0, 0.3))',
          minWidth: 280,
          maxWidth: 420,
          ...style,
        }}
        {...rest}
      >
        <span style={{ marginTop: 2, display: 'inline-flex', flexShrink: 0 }}>
          {getIcon()}
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          {title && (
            <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary, #f8fafc)' }}>
              {title}
            </div>
          )}
          <div style={{ fontSize: 12, color: 'var(--color-text-secondary, #94a3b8)', lineHeight: 1.4 }}>
            {children}
          </div>
          {action && <div style={{ marginTop: 8 }}>{action}</div>}
        </div>

        {onClose && (
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 2,
              cursor: 'pointer',
              color: 'var(--color-text-muted, #64748b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}
          >
            <CloseIcon size={14} />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

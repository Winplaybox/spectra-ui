import React, { forwardRef, ReactNode } from 'react';
import * as styles from './Alert.css';
import { CloseIcon, SparklesIcon, CheckIcon } from '@spectra/icons';

export type AlertSeverity = 'info' | 'success' | 'warning' | 'error' | 'danger';

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  severity?: AlertSeverity;
  variant?: AlertSeverity;
  title?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  onDismiss?: () => void;
  dismissible?: boolean;
  children?: ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      severity,
      variant = 'info',
      title,
      icon,
      action,
      onClose,
      onDismiss,
      dismissible,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const rawSev = severity || variant || 'info';
    const activeSev: 'info' | 'success' | 'warning' | 'error' = rawSev === 'danger' ? 'error' : rawSev;
    const handleDismiss = onClose || onDismiss;

    const defaultIcon = () => {
      switch (activeSev) {
        case 'success':
          return <CheckIcon size={18} color="var(--color-feedback-success, currentColor)" />;
        case 'warning':
          return <span style={{ color: 'var(--color-feedback-warning, currentColor)', fontWeight: 700 }}>⚠</span>;
        case 'error':
          return <span style={{ color: 'var(--color-feedback-danger, currentColor)', fontWeight: 700 }}>✕</span>;
        default:
          return <SparklesIcon size={18} color="var(--color-feedback-info, currentColor)" />;
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={`${styles.alert} ${styles[activeSev]} spectra-alert spectra-alert--${activeSev} ${className || ''}`}
        {...rest}
      >
        <div className={`${styles.iconWrapper} spectra-alert__icon`}>
          {icon !== undefined ? icon : defaultIcon()}
        </div>

        <div className={`${styles.content} spectra-alert__content`}>
          {title && <div className={`${styles.title} spectra-alert__title`}>{title}</div>}
          <div className={`${styles.description} spectra-alert__description`}>{children}</div>
        </div>

        {(action || handleDismiss || dismissible) && (
          <div className={`${styles.actions} spectra-alert__actions`}>
            {action}
            {(handleDismiss || dismissible) && (
              <button
                type="button"
                onClick={handleDismiss}
                aria-label="Dismiss alert"
                className={`${styles.dismissButton} spectra-alert__dismiss`}
              >
                <CloseIcon size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

import React, { forwardRef } from 'react';
import * as styles from './LiveIndicator.css';

export type LiveIndicatorVariant = 'static' | 'pulse' | 'beacon' | 'lottie';
export type LiveIndicatorStatus = 'online' | 'offline' | 'busy' | 'connecting';
export type LiveIndicatorSize = 'sm' | 'md' | 'lg';

export interface LiveIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Motion animation variant. Defaults to 'pulse' with subtle scaling.
   */
  variant?: LiveIndicatorVariant;
  /**
   * Semantic status determining color (online = green, busy = red, connecting = amber).
   */
  status?: LiveIndicatorStatus;
  /**
   * Accessible display label text. Defaults to 'LIVE'. Set to null/empty for dot-only.
   */
  label?: string | null;
  /**
   * Component sizing scale. Defaults to 'md'.
   */
  size?: LiveIndicatorSize;
  /**
   * Optional custom color override for the indicator dot.
   */
  color?: string;
}

const statusColors: Record<LiveIndicatorStatus, string> = {
  online: 'var(--color-status-success, #10b981)',
  offline: 'var(--color-status-neutral, #94a3b8)',
  busy: 'var(--color-status-danger, #ef4444)',
  connecting: 'var(--color-status-warning, #f59e0b)',
};

/**
 * LiveIndicator - Reusable subtle status beacon and live broadcast indicator.
 * Engineered for low distraction, accessible screen reader announcements, and reduced-motion compliance.
 */
export const LiveIndicator = forwardRef<HTMLDivElement, LiveIndicatorProps>(
  (
    {
      variant = 'pulse',
      status = 'online',
      label = 'LIVE',
      size = 'md',
      color,
      className,
      style: customStyle,
      ...rest
    },
    ref
  ) => {
    const dotColor = color || statusColors[status];
    const isPulse = variant === 'pulse';
    const isBeacon = variant === 'beacon';

    const dotStyle: React.CSSProperties = {
      backgroundColor: dotColor,
      ...(size === 'sm' ? { width: 6, height: 6 } : size === 'lg' ? { width: 10, height: 10 } : {}),
    };

    return (
      <div
        ref={ref}
        className={`${styles.container} ${className || ''}`}
        style={customStyle}
        role="status"
        aria-live="polite"
        {...rest}
      >
        <span className={styles.dotWrapper}>
          {isBeacon && (
            <span
              className={styles.beaconRing}
              style={{ backgroundColor: dotColor }}
              aria-hidden="true"
            />
          )}
          <span
            className={`${styles.dot} ${isPulse ? styles.dotPulse : ''}`}
            style={dotStyle}
            aria-hidden="true"
          />
        </span>
        {label && (
          <span className={`${styles.label} ${styles[size]}`}>
            {label}
          </span>
        )}
      </div>
    );
  }
);

LiveIndicator.displayName = 'LiveIndicator';

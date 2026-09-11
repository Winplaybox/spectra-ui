import React, { forwardRef } from 'react';
import * as styles from './Spinner.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  color?: string;
  trackColor?: string;
  label?: string;
}

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      size = 'md',
      color = 'currentColor',
      trackColor = 'rgba(0, 0, 0, 0.15)',
      label = 'Loading...',
      className,
      ...rest
    },
    ref
  ) => {
    const dimension = size === 'sm' ? 16 : size === 'lg' ? 36 : 24;
    const strokeWidth = size === 'sm' ? 2.5 : size === 'lg' ? 3.5 : 3;

    return (
      <span
        ref={ref}
        role="status"
        aria-live="polite"
        className={`${styles.spinner} ${styles[size]} spectra-spinner spectra-spinner--${size} ${className || ''}`}
        {...rest}
      >
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 3a9 9 0 0 1 9 9"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
        <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
          {label}
        </span>
      </span>
    );
  }
);

Spinner.displayName = 'Spinner';

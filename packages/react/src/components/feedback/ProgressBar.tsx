// packages/react/src/components/feedback/ProgressBar.tsx
import React, { forwardRef } from 'react';

export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface ProgressBarProps extends React.ComponentPropsWithoutRef<'div'> {
  value?: number;
  max?: number;
  variant?: ProgressBarVariant;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showValue?: boolean;
  indeterminate?: boolean;
  striped?: boolean;
}

/**
 * ProgressBar - Linear progress indicator for loading states and multi-step tasks.
 * Engineered for deterministic progress tracking and indeterminate loading states.
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      max = 100,
      variant = 'primary',
      size = 'md',
      label,
      showValue = false,
      indeterminate = false,
      striped = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const height = size === 'sm' ? 4 : size === 'lg' ? 12 : 8;

    const getColor = () => {
      switch (variant) {
        case 'success': return 'var(--color-feedback-success, #22c55e)';
        case 'warning': return 'var(--color-feedback-warning, #f59e0b)';
        case 'danger': return 'var(--color-feedback-danger, #ef4444)';
        case 'info': return '#0ea5e9';
        default: return 'var(--color-action-primary, #007FFF)';
      }
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          width: '100%',
          ...style,
        }}
        {...rest}
      >
        {(label || showValue) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--color-text-secondary, #94a3b8)',
            }}
          >
            {label && <span>{label}</span>}
            {showValue && !indeterminate && (
              <span style={{ fontVariantNumeric: 'tabular-nums' }}>{Math.round(percentage)}%</span>
            )}
          </div>
        )}

        {/* Track rail */}
        <div
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          style={{
            width: '100%',
            height,
            borderRadius: height / 2,
            backgroundColor: 'var(--color-surface-raised, rgba(255,255,255,0.12))',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Progress bar fill */}
          <div
            style={{
              height: '100%',
              width: indeterminate ? '40%' : `${percentage}%`,
              borderRadius: height / 2,
              backgroundColor: getColor(),
              transition: indeterminate ? 'none' : 'width 0.25s ease',
              animation: indeterminate ? 'spectra-indeterminate 1.5s infinite ease-in-out' : 'none',
              backgroundImage: striped
                ? 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)'
                : 'none',
              backgroundSize: striped ? '1rem 1rem' : undefined,
            }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

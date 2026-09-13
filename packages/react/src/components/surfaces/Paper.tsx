// packages/react/src/components/surfaces/Paper.tsx
import React, { forwardRef, ReactNode } from 'react';

export type PaperElevation = 0 | 1 | 2 | 3 | 4;

export interface PaperProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  elevation?: PaperElevation;
  variant?: 'elevation' | 'outlined';
  rounded?: boolean;
}

/**
 * Paper - Elevated container surface providing background contrast and elevation depth.
 * Engineered for card backdrops, elevated sections, and structured grouping containers.
 */
export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      children,
      elevation = 1,
      variant = 'elevation',
      rounded = true,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const getShadow = () => {
      if (variant === 'outlined') return 'none';
      switch (elevation) {
        case 0: return 'none';
        case 1: return '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';
        case 2: return '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)';
        case 3: return '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)';
        case 4: return '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
        default: return 'none';
      }
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{
          backgroundColor: 'var(--color-surface-elevated, #1e293b)',
          color: 'var(--color-text-primary, #f8fafc)',
          borderRadius: rounded ? 'var(--radius-component-md, 8px)' : 0,
          border:
            variant === 'outlined' || elevation === 0
              ? '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))'
              : 'none',
          boxShadow: getShadow(),
          padding: '16px 20px',
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Paper.displayName = 'Paper';

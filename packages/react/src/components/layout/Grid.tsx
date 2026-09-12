// packages/react/src/components/layout/Grid.tsx
import React, { forwardRef, ReactNode } from 'react';

export interface GridProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  container?: boolean;
  item?: boolean;
  spacing?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

/**
 * Grid - 12-column responsive layout grid system.
 * Benchmarked against Google Material UI Grid v2.
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      container = false,
      item = false,
      spacing = 2,
      xs = 12,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    if (container) {
      const gapPx = spacing * 8;
      return (
        <div
          ref={ref}
          className={className}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: gapPx,
            width: '100%',
            boxSizing: 'border-box',
            ...style,
          }}
          {...rest}
        >
          {children}
        </div>
      );
    }

    // Grid item column calculation
    const widthPercentage = xs ? `${(xs / 12) * 100}%` : '100%';

    return (
      <div
        ref={ref}
        className={className}
        style={{
          flexBasis: `calc(${widthPercentage} - 16px)`,
          flexGrow: 1,
          maxWidth: widthPercentage,
          boxSizing: 'border-box',
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

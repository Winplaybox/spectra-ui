// packages/react/src/components/layout/Box.tsx
import React, { forwardRef, ElementType, ReactNode } from 'react';

export interface BoxProps extends React.ComponentPropsWithoutRef<'div'> {
  as?: ElementType;
  children?: ReactNode;
}

/**
 * Box - Fundamental polymorphic wrapper component with full access to tokens and layout styles.
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = 'div', children, style, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        style={{
          boxSizing: 'border-box',
          ...style,
        }}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';

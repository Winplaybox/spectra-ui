// packages/react/src/components/actions/ButtonGroup.tsx
import React, { forwardRef, ReactNode } from 'react';
import { ButtonVariant, ButtonSize } from './Button';

export interface ButtonGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
  attached?: boolean;
}

/**
 * ButtonGroup - Container that joins a group of buttons into a contiguous segmented bar.
 * Benchmarked against Google Material UI (MUI v5/v6) & Microsoft Fluent UI 2.
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      variant,
      size,
      orientation = 'horizontal',
      disabled = false,
      attached = true,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal';

    // Clone child buttons to propagate variant, size, and disabled props if defined
    const mappedChildren = React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;

      const total = React.Children.count(children);
      const isFirst = index === 0;
      const isLast = index === total - 1;

      const attachedStyles: React.CSSProperties = attached
        ? {
            borderRadius: isHorizontal
              ? `${isFirst ? 'var(--radius-component-md, 8px)' : '0'} ${
                  isLast ? 'var(--radius-component-md, 8px)' : '0'
                } ${isLast ? 'var(--radius-component-md, 8px)' : '0'} ${
                  isFirst ? 'var(--radius-component-md, 8px)' : '0'
                }`
              : `${isFirst ? 'var(--radius-component-md, 8px)' : '0'} ${
                  isFirst ? 'var(--radius-component-md, 8px)' : '0'
                } ${isLast ? 'var(--radius-component-md, 8px)' : '0'} ${
                  isLast ? 'var(--radius-component-md, 8px)' : '0'
                }`,
            marginLeft: isHorizontal && !isFirst ? -1 : 0,
            marginTop: !isHorizontal && !isFirst ? -1 : 0,
            zIndex: 1,
          }
        : {};

      return React.cloneElement(child as React.ReactElement<any>, {
        variant: (child.props as any).variant || variant,
        size: (child.props as any).size || size,
        disabled: (child.props as any).disabled !== undefined ? (child.props as any).disabled : disabled,
        style: {
          ...attachedStyles,
          ...(child.props as any).style,
        },
      });
    });

    return (
      <div
        ref={ref}
        role="group"
        className={className}
        style={{
          display: 'inline-flex',
          flexDirection: isHorizontal ? 'row' : 'column',
          alignItems: 'stretch',
          ...style,
        }}
        {...rest}
      >
        {mappedChildren}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

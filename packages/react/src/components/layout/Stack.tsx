// packages/react/src/components/layout/Stack.tsx
import React, { forwardRef, ReactNode } from 'react';
import * as styles from './Stack.css';

type StackDirection = 'row' | 'column';
type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'flex-start' | 'flex-end';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'space-between' | 'space-around';
type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface StackProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  direction?: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
  gap?: StackGap;
  wrap?: boolean;
  flex?: boolean;
}

const alignMap: Record<string, string> = {
  start: styles.alignStart,
  'flex-start': styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  'flex-end': styles.alignEnd,
  stretch: styles.alignStretch,
};

const justifyMap: Record<string, string> = {
  start: styles.justifyStart,
  'flex-start': styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  'flex-end': styles.justifyEnd,
  between: styles.justifyBetween,
  'space-between': styles.justifyBetween,
  around: styles.justifyAround,
  'space-around': styles.justifyAround,
};

const gapMap: Record<StackGap, string> = {
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
};

/**
 * Stack - Flexbox layout component with tokenized gap and alignment
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      direction = 'column',
      align = 'start',
      justify = 'start',
      gap = 'md',
      wrap = false,
      flex = false,
      className,
      ...rest
    },
    ref
  ) => {
    const stackClass = [
      styles.stack,
      direction === 'row' ? styles.row : styles.column,
      alignMap[align],
      justifyMap[justify],
      gapMap[gap],
      direction,
      align,
      justify,
      gap,
      wrap ? styles.wrap : '',
      flex ? styles.flex : '',
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={stackClass} {...rest}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childProps = child.props as any;
            const mergedChildClass = [
              childProps.className,
              direction,
              align,
              justify,
              gap,
            ]
              .filter(Boolean)
              .join(' ');
            return React.cloneElement(child as any, {
              className: mergedChildClass,
            });
          }
          return child;
        })}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

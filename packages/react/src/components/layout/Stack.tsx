// packages/react/src/components/layout/Stack.tsx
import { forwardRef, ReactNode } from 'react';
import * as styles from './Stack.css';

type StackDirection = 'row' | 'column';
type StackAlign = 'start' | 'center' | 'end' | 'stretch';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around';
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

/**
 * Stack - Flexbox layout component for spacing and alignment
 * @example
 * <Stack direction="row" gap="md" align="center">
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 * </Stack>
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
    const stackClass = `${styles.stack} ${styles[direction]} ${styles[`align-${align}`]} ${styles[`justify-${justify}`]} ${styles[`gap-${gap}`]} ${
      wrap ? styles.wrap : ''
    } ${flex ? styles.flex : ''} ${className || ''}`;

    return (
      <div ref={ref} className={stackClass} {...rest}>
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

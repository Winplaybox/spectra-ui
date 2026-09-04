// packages/react/src/components/surfaces/Card.tsx
import { forwardRef, ReactNode } from 'react';
import * as styles from './Card.css';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'elevated';
  interactive?: boolean;
  onClick?: () => void;
}

/**
 * Card - Surface container for content grouping
 * @example
 * <Card padding="md">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      padding = 'md',
      variant = 'default',
      interactive = false,
      onClick,
      className,
      ...rest
    },
    ref
  ) => {
    const cardClass = `${styles.card} ${styles[padding]} ${styles[variant]} ${
      interactive ? styles.interactive : ''
    } ${className || ''}`;

    return (
      <div
        ref={ref}
        className={cardClass}
        onClick={onClick}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// packages/react/src/components/surfaces/Card.tsx
import { forwardRef } from 'react';
import * as styles from './Card.css';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

/**
 * Card - Structural surface container
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      interactive = false,
      className,
      ...rest
    },
    ref
  ) => {
    const variantStyle =
      variant === 'bordered'
        ? styles.bordered
        : variant === 'elevated'
        ? styles.elevated
        : styles.defaultVariant;

    const paddingStyle =
      padding === 'none'
        ? styles.paddingNone
        : padding === 'sm'
        ? styles.paddingSm
        : padding === 'lg'
        ? styles.paddingLg
        : styles.paddingMd;

    const cardClass = [
      styles.card,
      variantStyle,
      paddingStyle,
      variant,
      padding,
      interactive ? `${styles.interactive} interactive` : '',
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        tabIndex={interactive ? 0 : undefined}
        role={interactive ? 'button' : undefined}
        className={cardClass}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`${styles.header} ${className || ''}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => (
  <h3 className={`${styles.title} ${className || ''}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, children, ...props }) => (
  <p className={`${styles.description} ${className || ''}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`${styles.body} ${className || ''}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`${styles.footer} ${className || ''}`} {...props}>
    {children}
  </div>
);

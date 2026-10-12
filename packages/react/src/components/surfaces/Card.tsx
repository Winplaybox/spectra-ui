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

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading avatar, icon, or media slot */
  image?: React.ReactNode;
  /** Primary title or heading slot */
  header?: React.ReactNode;
  /** Secondary subtitle or description slot */
  description?: React.ReactNode;
  /** Trailing action button or menu slot */
  action?: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, image, header, description, action, style, ...props }, ref) => {
    if (image || header || description || action) {
      return (
        <div
          ref={ref}
          className={`${styles.header} ${className || ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-component-gap-sm, 12px)',
            ...style,
          }}
          {...props}
        >
          {image && (
            <div style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
              {image}
            </div>
          )}
          {(header || description) && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                minWidth: 0,
                flex: 1,
              }}
            >
              {header}
              {description}
            </div>
          )}
          {action && (
            <div
              style={{
                marginLeft: 'auto',
                display: 'inline-flex',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              {action}
            </div>
          )}
          {children}
        </div>
      );
    }

    return (
      <div ref={ref} className={`${styles.header} ${className || ''}`} style={style} {...props}>
        {children}
      </div>
    );
  }
);
CardHeader.displayName = 'CardHeader';

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

export const CardPreview: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, style, ...props }) => (
  <div
    className={className}
    style={{
      borderRadius: 'calc(var(--radius-component-md, 8px) - 2px)',
      overflow: 'hidden',
      marginBottom: 12,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);


// packages/react/src/components/actions/Button.tsx
import { forwardRef, ReactNode } from 'react';
import * as styles from './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

/**
 * Button - Primary action component with multiple variants and sizes
 * @example
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * @example
 * <Button variant="secondary" disabled>
 *   Disabled
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      isLoading = false,
      fullWidth = false,
      icon,
      iconPosition = 'left',
      type = 'button',
      className,
      ...rest
    },
    ref
  ) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${
      fullWidth ? styles.fullWidth : ''
    } ${className || ''}`;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={buttonClass}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...rest}
      >
        {isLoading && <span className={styles.spinner}>⟳</span>}
        {icon && iconPosition === 'left' && (
          <span className={styles.icon}>{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className={styles.icon}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

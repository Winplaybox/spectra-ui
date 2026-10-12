// packages/react/src/components/actions/Button.tsx
import { forwardRef, ReactNode, MouseEvent } from 'react';
import * as styles from './Button.css';

export type ButtonAppearance = 'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonShape = 'rounded' | 'circular' | 'square';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  /** Spectra appearance variant */
  appearance?: ButtonAppearance;
  /** Classic variant prop for backward compatibility */
  variant?: ButtonVariant;
  /** Shape silhouette */
  shape?: ButtonShape;
  /** Sizing scale */
  size?: ButtonSize;
  /** Standard disabled state */
  disabled?: boolean;
  /** Focusable disabled state adhering to WCAG 2.1 AA keyboard discovery */
  disabledFocusable?: boolean;
  /** Loading spinner active */
  isLoading?: boolean;
  /** Loading alias */
  loading?: boolean;
  /** Expand across parent width */
  fullWidth?: boolean;
  /** Vector icon */
  icon?: ReactNode;
  /** Icon placement */
  iconPosition?: 'left' | 'right';
}

/**
 * Button - Action component conforming to Spectra UI specifications
 * and WCAG 2.1 AA dual focus standards.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      appearance,
      variant,
      shape = 'rounded',
      size = 'md',
      disabled = false,
      disabledFocusable = false,
      isLoading = false,
      loading = false,
      fullWidth = false,
      icon,
      iconPosition = 'left',
      type = 'button',
      className,
      onClick,
      style,
      ...rest
    },
    ref
  ) => {
    const isSpinnerActive = isLoading || loading;
    const isEffectiveDisabled = disabled || isSpinnerActive;

    // Resolve variant vs appearance
    // If appearance is provided, use appearance; if variant is provided, use variant; defaults to 'primary'
    const visualKey = appearance || variant || 'primary';
    const visualClass = (styles as Record<string, string>)[visualKey] || styles.primary;

    // Resolve size (map small/medium/large to sm/md/lg)
    const normalizedSize = size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : size;
    const sizeClass = (styles as Record<string, string>)[normalizedSize] || styles.md;
    const shapeClass = (styles as Record<string, string>)[shape] || styles.rounded;

    const buttonClasses = [
      styles.button,
      visualClass,
      visualKey, // For CSS selector backward-compatibility tests (.primary, .secondary, etc.)
      sizeClass,
      normalizedSize, // For CSS selector tests (.sm, .md, .lg)
      shapeClass,
      shape,
      fullWidth ? `${styles.fullWidth} fullWidth` : '',
      disabledFocusable ? `${styles.disabledFocusable} disabledFocusable` : '',
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (isEffectiveDisabled || disabledFocusable) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={isEffectiveDisabled}
        className={buttonClasses}
        aria-disabled={isEffectiveDisabled || disabledFocusable ? true : undefined}
        aria-busy={isSpinnerActive ? true : undefined}
        tabIndex={disabledFocusable && !isEffectiveDisabled ? 0 : undefined}
        onClick={handleClick}
        style={style}
        {...rest}
      >
        {isSpinnerActive && (
          <span className={styles.spinner} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
          </span>
        )}
        {!isSpinnerActive && icon && iconPosition === 'left' && (
          <span className={styles.icon}>{icon}</span>
        )}
        {children && <span className={styles.content}>{children}</span>}
        {!isSpinnerActive && icon && iconPosition === 'right' && (
          <span className={styles.icon}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

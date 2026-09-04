// packages/react/src/components/form/TextInput.tsx
import { forwardRef } from 'react';
import { useFormField } from '@spectra/primitives';
import * as styles from './TextInput.css';

export interface TextInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

/**
 * TextInput - Accessible text input field with label, error, and description wiring
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      description,
      error,
      required = false,
      size = 'md',
      variant = 'default',
      leftIcon,
      rightIcon,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      disabled = false,
      className,
      id: idProp,
      ...rest
    },
    ref
  ) => {
    const effectiveLeftIcon = leftIcon || (icon && iconPosition === 'left' ? icon : null);
    const effectiveRightIcon = rightIcon || (icon && iconPosition === 'right' ? icon : null);

    const {
      labelId,
      errorId,
      descriptionId,
      hasError,
      errorText,
      labelProps,
      inputProps,
      errorProps,
      descriptionProps,
    } = useFormField({
      id: idProp,
      label,
      error,
      description,
      required,
      disabled,
    });

    const variantStyle =
      variant === 'filled' ? styles.filled : variant === 'outlined' ? styles.outlined : styles.defaultVariant;

    const inputClass = [
      styles.input,
      styles[size],
      variantStyle,
      variant,
      size,
      hasError ? styles.errorInput : '',
      effectiveLeftIcon ? styles.hasIconLeft : '',
      effectiveRightIcon ? styles.hasIconRight : '',
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={`${styles.wrapper} ${fullWidth ? `${styles.fullWidth} fullWidth` : ''}`}>
        {label && (
          <label {...labelProps} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={styles.inputWrapper}>
          {effectiveLeftIcon && <span className={`${styles.icon} ${styles.iconLeft}`}>{effectiveLeftIcon}</span>}
          <input
            ref={ref}
            {...inputProps}
            required={required}
            disabled={disabled}
            className={inputClass}
            {...rest}
          />
          {effectiveRightIcon && <span className={`${styles.icon} ${styles.iconRight}`}>{effectiveRightIcon}</span>}
        </div>

        {description && !hasError && (
          <span {...descriptionProps} className={styles.description}>
            {description}
          </span>
        )}

        {hasError && errorText && (
          <span {...errorProps} className={styles.error}>
            {errorText}
          </span>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

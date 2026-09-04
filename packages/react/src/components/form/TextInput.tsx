// packages/react/src/components/form/TextInput.tsx
import { forwardRef } from 'react';
import { useFormField } from '@spectra/primitives';
import * as styles from './TextInput.css';

export interface TextInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'flushed';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * TextInput - Text input field with label, error, and description
 * @example
 * <TextInput
 *   label="Email"
 *   type="email"
 *   placeholder="user@example.com"
 *   required
 * />
 * @example
 * <TextInput
 *   label="Password"
 *   type="password"
 *   error="Password is required"
 * />
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      description,
      error,
      required,
      size = 'md',
      variant = 'default',
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const { labelId, descriptionId, errorId, ariaDescribedBy } =
      useFormField({ label, description, error, required });

    const inputClass = `${styles.input} ${styles[size]} ${styles[variant]} ${
      error ? styles.error : ''
    } ${leftIcon ? styles.withLeftIcon : ''} ${rightIcon ? styles.withRightIcon : ''} ${
      fullWidth ? styles.fullWidth : ''
    } ${className || ''}`;

    return (
      <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ''}`}>
        {label && (
          <label htmlFor={rest.id} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={styles.inputWrapper}>
          {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
          <input
            ref={ref}
            className={inputClass}
            aria-invalid={!!error}
            aria-describedby={ariaDescribedBy}
            aria-required={required}
            disabled={disabled}
            {...rest}
          />
          {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </div>

        {description && !error && (
          <div id={descriptionId} className={styles.description}>
            {description}
          </div>
        )}

        {error && (
          <div id={errorId} className={styles.errorText}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

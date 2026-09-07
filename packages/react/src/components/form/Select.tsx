import React, { forwardRef } from 'react';
import { useId } from '@spectra/primitives';
import { ChevronDownIcon } from '@spectra/icons';
import * as styles from './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
  options?: SelectOption[];
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      description,
      error,
      options = [],
      placeholder,
      size = 'md',
      disabled = false,
      id: customId,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = useId('select');
    const id = customId || generatedId;
    const descId = description ? `${id}-desc` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [descId, errorId].filter(Boolean).join(' ') || undefined;

    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

    return (
      <div className={`${styles.wrapper} ${className || ''}`}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.selectContainer}>
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            data-error={!!error ? 'true' : 'false'}
            className={`${styles.select} ${styles[size]}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
            {children}
          </select>
          <div className={styles.icon} aria-hidden="true">
            <ChevronDownIcon size={iconSize} color="currentColor" />
          </div>
        </div>
        {description && !error && (
          <span id={descId} className={styles.description}>
            {description}
          </span>
        )}
        {error && (
          <span id={errorId} className={styles.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

import React, { forwardRef } from 'react';
import { useControllableState, useId } from '@spectra/primitives';
import { CheckIcon, MinusIcon } from '@spectra/icons';
import * as styles from './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      indeterminate = false,
      onChange,
      label,
      description,
      error,
      size = 'md',
      disabled = false,
      id: customId,
      className,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useControllableState({
      value: controlledChecked,
      defaultValue: defaultChecked,
      onChange,
    });

    const generatedId = useId('checkbox');
    const id = customId || generatedId;
    const descId = description ? `${id}-desc` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [descId, errorId].filter(Boolean).join(' ') || undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      setIsChecked(e.target.checked);
    };

    const iconSize = size === 'sm' ? 12 : size === 'lg' ? 18 : 14;

    return (
      <label
        htmlFor={id}
        className={`${styles.wrapper} ${className || ''}`}
        data-disabled={disabled ? 'true' : 'false'}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={styles.input}
          {...props}
        />
        <div
          className={`${styles.box} ${styles[size]}`}
          data-checked={isChecked ? 'true' : 'false'}
          data-indeterminate={indeterminate ? 'true' : 'false'}
          data-error={!!error ? 'true' : 'false'}
          aria-hidden="true"
        >
          {indeterminate ? (
            <MinusIcon size={iconSize} color="currentColor" />
          ) : isChecked ? (
            <CheckIcon size={iconSize} color="currentColor" />
          ) : null}
        </div>
        {(label || description || error) && (
          <div className={styles.labelContent}>
            {label && <span className={styles.label}>{label}</span>}
            {description && (
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
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

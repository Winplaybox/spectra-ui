import React, { createContext, useContext, forwardRef } from 'react';
import { useControllableState, useId } from '@spectra/primitives';
import * as styles from './Radio.css';

interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name: customName,
  value: controlledValue,
  defaultValue,
  onChange,
  orientation = 'vertical',
  size = 'md',
  disabled = false,
  children,
  className,
}) => {
  const generatedName = useId('radio-group');
  const name = customName || generatedName;

  const [value, setValue] = useControllableState({
    value: controlledValue,
    defaultValue,
    onChange,
  });

  return (
    <RadioGroupContext.Provider value={{ name, value, onChange: setValue, size, disabled }}>
      <div
        role="radiogroup"
        aria-orientation={orientation}
        className={`${styles.group} ${orientation === 'horizontal' ? styles.groupHorizontal : ''} ${className || ''}`}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  value: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      value,
      label,
      description,
      size: explicitSize,
      disabled: explicitDisabled,
      name: explicitName,
      checked: explicitChecked,
      id: customId,
      className,
      onChange: customOnChange,
      ...props
    },
    ref
  ) => {
    const groupContext = useContext(RadioGroupContext);
    const size = explicitSize || groupContext?.size || 'md';
    const disabled = explicitDisabled !== undefined ? explicitDisabled : groupContext?.disabled ?? false;
    const name = explicitName || groupContext?.name;
    const isChecked = explicitChecked !== undefined ? explicitChecked : groupContext ? groupContext.value === value : false;

    const generatedId = useId('radio');
    const id = customId || generatedId;
    const descId = description ? `${id}-desc` : undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      groupContext?.onChange?.(value);
      customOnChange?.(e);
    };

    return (
      <label
        htmlFor={id}
        className={`${styles.wrapper} ${className || ''}`}
        data-disabled={disabled ? 'true' : 'false'}
      >
        <input
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          aria-describedby={descId}
          className={styles.input}
          {...props}
        />
        <div
          className={`${styles.circle} ${styles[size]}`}
          data-checked={isChecked ? 'true' : 'false'}
          aria-hidden="true"
        >
          <div className={`${styles.dot} ${styles[`${size}Dot` as keyof typeof styles]}`} />
        </div>
        {(label || description) && (
          <div className={styles.labelContent}>
            {label && <span className={styles.label}>{label}</span>}
            {description && (
              <span id={descId} className={styles.description}>
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

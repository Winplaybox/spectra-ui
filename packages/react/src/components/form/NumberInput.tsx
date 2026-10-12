// packages/react/src/components/form/NumberInput.tsx
import React, { forwardRef } from 'react';
import { PlusIcon, MinusIcon } from '@winplaybox/icons';
import { useId } from '@winplaybox/primitives';

export interface NumberInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (val: number) => void;
  label?: string;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value: controlledVal,
      defaultValue = 0,
      min,
      max,
      step = 1,
      onChange,
      label,
      description,
      error,
      size = 'md',
      disabled = false,
      style,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const [internalVal, setInternalVal] = React.useState(defaultValue);
    const isControlled = controlledVal !== undefined;
    const currentVal = isControlled ? controlledVal : internalVal;

    const clamp = (val: number) => {
      let res = val;
      if (min !== undefined) res = Math.max(min, res);
      if (max !== undefined) res = Math.min(max, res);
      return res;
    };

    const update = (next: number) => {
      const clamped = clamp(next);
      if (!isControlled) setInternalVal(clamped);
      onChange?.(clamped);
    };

    const handleIncrement = () => update(currentVal + step);
    const handleDecrement = () => update(currentVal - step);

    const height = size === 'sm' ? 32 : size === 'lg' ? 44 : 38;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
        {label && (
          <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {label}
          </label>
        )}

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height,
            border: `1px solid ${error ? 'var(--color-feedback-error)' : 'var(--color-border-default)'}`,
            borderRadius: 'var(--radius-component-md, 8px)',
            backgroundColor: 'var(--color-surface)',
            overflow: 'hidden',
            opacity: disabled ? 0.6 : 1,
          }}
        >
          <button
            type="button"
            disabled={disabled || (min !== undefined && currentVal <= min)}
            onClick={handleDecrement}
            style={{
              width: height,
              height: '100%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              borderRight: '1px solid var(--color-border-subtle)',
              cursor: disabled ? 'not-allowed' : 'pointer',
              color: 'var(--color-text-primary)',
            }}
          >
            <MinusIcon size={14} style={{ display: 'block', verticalAlign: 'middle' }} />
          </button>

          <input
            ref={ref}
            id={id}
            type="number"
            disabled={disabled}
            value={currentVal}
            min={min}
            max={max}
            step={step}
            onChange={(e) => update(parseFloat(e.target.value) || 0)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              textAlign: 'center',
              fontSize: 14,
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
              minWidth: 48,
            }}
            {...rest}
          />

          <button
            type="button"
            disabled={disabled || (max !== undefined && currentVal >= max)}
            onClick={handleIncrement}
            style={{
              width: height,
              height: '100%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              borderLeft: '1px solid var(--color-border-subtle)',
              cursor: disabled ? 'not-allowed' : 'pointer',
              color: 'var(--color-text-primary)',
            }}
          >
            <PlusIcon size={14} style={{ display: 'block', verticalAlign: 'middle' }} />
          </button>
        </div>

        {error ? (
          <span style={{ fontSize: 12, color: 'var(--color-feedback-error)' }}>{error}</span>
        ) : description ? (
          <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{description}</span>
        ) : null}
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';
export const SpinButton = NumberInput;

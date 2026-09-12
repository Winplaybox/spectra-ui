// packages/react/src/components/form/Textarea.tsx
import React, { forwardRef, useState } from 'react';

export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  description?: string;
  error?: string;
  showCount?: boolean;
  maxLength?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

/**
 * Textarea - Multi-line text field with field labels, validation messaging, and live capacity counters.
 * Benchmarked against Microsoft Fluent UI 2 & Google Material UI.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      description,
      error,
      showCount = false,
      maxLength,
      resize = 'vertical',
      value: controlledValue,
      defaultValue,
      onChange,
      disabled,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalVal, setInternalVal] = useState<string>(
      defaultValue ? String(defaultValue) : ''
    );

    const currentVal = isControlled ? String(controlledValue || '') : internalVal;
    const charCount = currentVal.length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalVal(e.target.value);
      }
      onChange?.(e);
    };

    return (
      <div
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          width: '100%',
          fontFamily: 'inherit',
          ...style,
        }}
      >
        {label && (
          <label
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: error ? 'var(--color-feedback-danger, #ef4444)' : 'var(--color-text-primary, #f8fafc)',
            }}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          value={currentVal}
          onChange={handleChange}
          disabled={disabled}
          maxLength={maxLength}
          style={{
            width: '100%',
            minHeight: 80,
            padding: '10px 12px',
            fontSize: 14,
            fontFamily: 'inherit',
            lineHeight: 1.5,
            borderRadius: 'var(--radius-component-md, 8px)',
            backgroundColor: 'var(--color-surface-raised, #0f172a)',
            color: 'var(--color-text-primary, #f8fafc)',
            border: `1px solid ${
              error
                ? 'var(--color-feedback-danger, #ef4444)'
                : 'var(--color-border-default, rgba(255,255,255,0.15))'
            }`,
            outline: 'none',
            resize,
            boxSizing: 'border-box',
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            opacity: disabled ? 0.6 : 1,
            cursor: disabled ? 'not-allowed' : 'text',
          }}
          {...rest}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            fontSize: 12,
            minHeight: 18,
          }}
        >
          {error ? (
            <span style={{ color: 'var(--color-feedback-danger, #ef4444)' }}>{error}</span>
          ) : description ? (
            <span style={{ color: 'var(--color-text-muted, #94a3b8)' }}>{description}</span>
          ) : (
            <span />
          )}

          {showCount && (
            <span
              style={{
                color:
                  maxLength && charCount >= maxLength
                    ? 'var(--color-feedback-danger, #ef4444)'
                    : 'var(--color-text-muted, #94a3b8)',
                fontVariantNumeric: 'tabular-nums',
                marginLeft: 'auto',
              }}
            >
              {charCount}
              {maxLength ? ` / ${maxLength}` : ''}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

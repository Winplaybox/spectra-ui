// packages/react/src/components/form/Rating.tsx
import React, { useState, forwardRef } from 'react';

export interface RatingProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value?: number;
  defaultValue?: number;
  max?: number;
  readOnly?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (value: number) => void;
  label?: string;
}

/**
 * Rating - Interactive and read-only rating indicator using vector star icons.
 * Strict Zero Emoji Policy: Utilizes authentic SVG path vectors exclusively.
 */
export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value: controlledValue,
      defaultValue = 0,
      max = 5,
      readOnly = false,
      disabled = false,
      size = 'md',
      onChange,
      label,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [hoverValue, setHoverValue] = useState<number | null>(null);

    const currentValue = hoverValue !== null ? hoverValue : isControlled ? controlledValue : internalValue;

    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 26 : 20;

    const handleClick = (starIndex: number) => {
      if (readOnly || disabled) return;
      if (!isControlled) setInternalValue(starIndex);
      onChange?.(starIndex);
    };

    return (
      <div
        ref={ref}
        role={readOnly ? 'img' : 'radiogroup'}
        aria-label={label || `Rating: ${currentValue} out of ${max} stars`}
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: size === 'sm' ? 4 : size === 'lg' ? 8 : 6,
          opacity: disabled ? 0.5 : 1,
          ...style,
        }}
        {...rest}
      >
        {Array.from({ length: max }, (_, i) => {
          const starIndex = i + 1;
          const isFilled = starIndex <= currentValue;

          return (
            <button
              key={i}
              type="button"
              disabled={disabled || readOnly}
              aria-label={`${starIndex} of ${max} stars`}
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => !readOnly && !disabled && setHoverValue(starIndex)}
              onMouseLeave={() => !readOnly && !disabled && setHoverValue(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                padding: 2,
                cursor: readOnly || disabled ? 'default' : 'pointer',
                color: isFilled ? 'var(--color-feedback-warning, #f59e0b)' : 'var(--color-border-default, #475569)',
                transition: 'transform 0.12s ease, color 0.12s ease',
                transform: !readOnly && !disabled && hoverValue === starIndex ? 'scale(1.15)' : 'none',
                outline: 'none',
              }}
            >
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill={isFilled ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </button>
          );
        })}
      </div>
    );
  }
);

Rating.displayName = 'Rating';

// packages/react/src/components/form/Slider.tsx
import React, { useState, useRef, useEffect, forwardRef } from 'react';

export interface SliderProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  label?: string;
  showValue?: boolean;
  valueFormatter?: (val: number) => string;
}

/**
 * Slider - Continuous and discrete range input component.
 * Benchmarked against Google Material UI (MUI v5/v6) & Microsoft Fluent UI 2.
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value: controlledValue,
      defaultValue = 50,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      onChange,
      label,
      showValue = true,
      valueFormatter = (val) => `${val}`,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = isControlled ? controlledValue : internalValue;

    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);

    const updateValueFromPosition = (clientX: number) => {
      if (!trackRef.current || disabled) return;
      const rect = trackRef.current.getBoundingClientRect();
      const rawPct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const rawVal = min + rawPct * (max - min);
      const steppedVal = Math.round(rawVal / step) * step;
      const clampedVal = Math.max(min, Math.min(max, steppedVal));

      if (!isControlled) {
        setInternalValue(clampedVal);
      }
      onChange?.(clampedVal);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      if (disabled) return;
      isDragging.current = true;
      updateValueFromPosition(e.clientX);

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (isDragging.current) {
          updateValueFromPosition(moveEvent.clientX);
        }
      };

      const handleMouseUp = () => {
        isDragging.current = false;
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      let nextVal = value;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        nextVal = Math.min(max, value + step);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        nextVal = Math.max(min, value - step);
      } else if (e.key === 'Home') {
        nextVal = min;
      } else if (e.key === 'End') {
        nextVal = max;
      } else {
        return;
      }
      e.preventDefault();
      if (!isControlled) setInternalValue(nextVal);
      onChange?.(nextVal);
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          width: '100%',
          userSelect: 'none',
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer',
          ...style,
        }}
        {...rest}
      >
        {(label || showValue) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--color-text-primary, #f8fafc)',
            }}
          >
            {label && <span>{label}</span>}
            {showValue && (
              <span
                style={{
                  fontVariantNumeric: 'tabular-nums',
                  fontSize: 12,
                  color: 'var(--color-text-muted, #94a3b8)',
                }}
              >
                {valueFormatter(value)}
              </span>
            )}
          </div>
        )}

        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          style={{
            position: 'relative',
            height: 24,
            display: 'flex',
            alignItems: 'center',
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          {/* Background rail */}
          <div
            style={{
              width: '100%',
              height: 4,
              borderRadius: 2,
              backgroundColor: 'var(--color-surface-raised, rgba(255,255,255,0.15))',
            }}
          />

          {/* Active track bar */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              width: `${percentage}%`,
              height: 4,
              borderRadius: 2,
              backgroundColor: 'var(--color-action-primary, #007FFF)',
              transition: isDragging.current ? 'none' : 'width 0.1s ease',
            }}
          />

          {/* Draggable thumb */}
          <div
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-label={label || 'Slider range input'}
            onKeyDown={handleKeyDown}
            style={{
              position: 'absolute',
              left: `${percentage}%`,
              transform: 'translateX(-50%)',
              width: 18,
              height: 18,
              borderRadius: '50%',
              backgroundColor: 'var(--color-surface-elevated, #ffffff)',
              border: '2px solid var(--color-action-primary, #007FFF)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
              cursor: disabled ? 'not-allowed' : 'grab',
              outline: 'none',
              transition: isDragging.current ? 'none' : 'left 0.1s ease',
            }}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

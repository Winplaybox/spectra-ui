import React, { forwardRef, useState, useEffect } from 'react';
import { CheckIcon } from '@spectra/icons';

export interface ColorPickerProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'defaultValue'> {
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  label?: string;
  description?: string;
  error?: string;
  presets?: string[];
  disabled?: boolean;
}

const DEFAULT_PRESETS = [
  '#2563EB', // Spectra Primary Blue
  '#0EA5E9', // Sky
  '#10B981', // Emerald Success
  '#F59E0B', // Amber Warning
  '#EF4444', // Red Danger
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#64748B', // Slate Neutral
  '#0F172A', // Dark Obsidian
  '#FFFFFF', // Pure White
];

/**
 * ColorPicker - Interactive color selection component with swatch presets and hexadecimal input.
 */
export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      value,
      defaultValue = '#2563EB',
      onChange,
      label,
      description,
      error,
      presets = DEFAULT_PRESETS,
      disabled = false,
      style,
      className,
      ...rest
    },
    ref
  ) => {
    const [currentColor, setCurrentColor] = useState<string>(value ?? defaultValue);

    useEffect(() => {
      if (value !== undefined) {
        setCurrentColor(value);
      }
    }, [value]);

    const handleColorChange = (newColor: string) => {
      if (disabled) return;
      setCurrentColor(newColor);
      onChange?.(newColor);
    };

    return (
      <div
        ref={ref}
        role="group"
        aria-label={label ?? 'Color Picker'}
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          opacity: disabled ? 0.6 : 1,
          pointerEvents: disabled ? 'none' : 'auto',
          ...style,
        }}
        {...rest}
      >
        {label && (
          <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary, #0f172a)' }}>
            {label}
          </label>
        )}

        {/* Selected Color & Hex Input Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              backgroundColor: currentColor,
              border: '2px solid var(--color-border-subtle, rgba(0,0,0,0.15))',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              flexShrink: 0,
            }}
          />
          <input
            type="text"
            value={currentColor.toUpperCase()}
            onChange={(e) => handleColorChange(e.target.value)}
            disabled={disabled}
            style={{
              width: 110,
              padding: '8px 12px',
              fontFamily: 'monospace',
              fontSize: 13,
              fontWeight: 600,
              borderRadius: 6,
              border: `1px solid ${error ? 'var(--color-feedback-danger, #ef4444)' : 'var(--color-border-subtle, rgba(255,255,255,0.15))'}`,
              backgroundColor: 'var(--color-surface, #1e293b)',
              color: 'var(--color-text-primary, #ffffff)',
              outline: 'none',
            }}
          />
          <input
            type="color"
            value={currentColor.startsWith('#') && currentColor.length === 7 ? currentColor : '#2563EB'}
            onChange={(e) => handleColorChange(e.target.value)}
            disabled={disabled}
            style={{
              width: 38,
              height: 38,
              padding: 0,
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              backgroundColor: 'transparent',
            }}
          />
        </div>

        {/* Preset Palette Swatches */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
          {presets.map((preset) => {
            const isSelected = currentColor.toLowerCase() === preset.toLowerCase();
            return (
              <button
                key={preset}
                type="button"
                aria-label={`Select color ${preset}`}
                aria-pressed={isSelected}
                onClick={() => handleColorChange(preset)}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  backgroundColor: preset,
                  border: isSelected ? '2px solid var(--color-action-primary, #2563eb)' : '2px solid transparent',
                  boxShadow: isSelected ? '0 0 0 2px var(--color-surface, #ffffff)' : '0 1px 3px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  transition: 'transform 0.15s ease',
                  transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {isSelected && (
                  <CheckIcon
                    size={14}
                    style={{
                      color: preset.toLowerCase() === '#ffffff' ? '#000000' : '#ffffff',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {description && !error && (
          <span style={{ fontSize: 12, color: 'var(--color-text-muted, #64748b)' }}>
            {description}
          </span>
        )}

        {error && (
          <span style={{ fontSize: 12, color: 'var(--color-feedback-danger, #ef4444)', fontWeight: 500 }}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';

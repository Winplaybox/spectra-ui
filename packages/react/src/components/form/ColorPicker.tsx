import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { CheckIcon } from '@spectra/icons';

export interface ColorPickerProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'defaultValue'> {
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  label?: string;
  description?: string;
  error?: string;
  presets?: string[];
  customColors?: string[];
  defaultCustomColors?: string[];
  onCustomColorsChange?: (colors: string[]) => void;
  showDefaultMatrix?: boolean;
  showCustomSection?: boolean;
  disabled?: boolean;
}

// Exact 80-color palette matching Google Fonts / Spectra curated matrix (10 columns x 8 rows)
export const GOOGLE_PALETTE_COLORS = [
  // Row 1 (Greys & Monochrome)
  '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
  // Row 2 (Pure Primaries & Hues)
  '#990000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff',
  // Row 3 (Light Tints / Pastels)
  '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc', '#f4c7c3',
  // Row 4 (Soft Mid-Tints)
  '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#9fc5e8', '#b4a7d6', '#d5a6bd', '#f7a8b8',
  // Row 5 (Medium Vibrancy)
  '#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6d9eeb', '#6fa8dc', '#8e7cc3', '#c27ba0', '#f06292',
  // Row 6 (Deep Shades)
  '#cc0000', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3c78d8', '#3d85c6', '#674ea7', '#a64d79', '#e91e63',
  // Row 7 (Darker Tones)
  '#900000', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#1155cc', '#0b5394', '#351c75', '#741b47', '#c2185b',
  // Row 8 (Deepest Shades)
  '#5b0f00', '#783f04', '#7f6000', '#274e13', '#0c343d', '#1c4587', '#073763', '#20124d', '#4c1130', '#880e4f',
];

const PlusCircleIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block', flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

/**
 * ColorPicker - Interactive color selection component with default 80-swatch matrix,
 * dynamic custom colors, hex input, and native color picker support.
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
      presets = GOOGLE_PALETTE_COLORS,
      customColors: controlledCustomColors,
      defaultCustomColors = [],
      onCustomColorsChange,
      showDefaultMatrix = true,
      showCustomSection = true,
      disabled = false,
      style,
      className,
      ...rest
    },
    ref
  ) => {
    const [currentColor, setCurrentColor] = useState<string>(value ?? defaultValue);
    const [internalCustomColors, setInternalCustomColors] = useState<string[]>(defaultCustomColors);
    const [hexInput, setHexInput] = useState<string>(currentColor);
    const nativeColorInputRef = useRef<HTMLInputElement>(null);

    const activeCustomColors = controlledCustomColors ?? internalCustomColors;

    useEffect(() => {
      if (value !== undefined) {
        setCurrentColor(value);
        setHexInput(value);
      }
    }, [value]);

    const handleColorChange = (newColor: string) => {
      if (disabled) return;
      setCurrentColor(newColor);
      setHexInput(newColor);
      onChange?.(newColor);
    };

    const handleAddCustomColor = (colorToAdd: string) => {
      if (disabled || !colorToAdd) return;
      const formatted = colorToAdd.startsWith('#') ? colorToAdd : `#${colorToAdd}`;
      if (!activeCustomColors.some((c) => c.toLowerCase() === formatted.toLowerCase())) {
        const next = [...activeCustomColors, formatted];
        if (controlledCustomColors === undefined) {
          setInternalCustomColors(next);
        }
        onCustomColorsChange?.(next);
      }
      handleColorChange(formatted);
    };

    const handleHexSubmit = () => {
      if (/^#[0-9A-Fa-f]{6}$/.test(hexInput) || /^#[0-9A-Fa-f]{3}$/.test(hexInput)) {
        handleAddCustomColor(hexInput);
      }
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
          gap: 12,
          opacity: disabled ? 0.6 : 1,
          pointerEvents: disabled ? 'none' : 'auto',
          userSelect: 'none',
          ...style,
        }}
        {...rest}
      >
        {label && (
          <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {label}
          </label>
        )}

        {/* Selected Color & Hex Input Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: currentColor,
              border: '2px solid var(--color-border-subtle)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              flexShrink: 0,
            }}
          />
          <input
            type="text"
            value={hexInput.toUpperCase()}
            onChange={(e) => {
              setHexInput(e.target.value);
              if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
                handleColorChange(e.target.value);
              }
            }}
            onBlur={handleHexSubmit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleHexSubmit();
              }
            }}
            disabled={disabled}
            style={{
              width: 100,
              padding: '7px 10px',
              fontFamily: 'monospace',
              fontSize: 13,
              fontWeight: 600,
              borderRadius: 6,
              border: `1px solid ${error ? 'var(--color-feedback-danger)' : 'var(--color-border-default)'}`,
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              outline: 'none',
            }}
          />
          <button
            type="button"
            onClick={() => nativeColorInputRef.current?.click()}
            disabled={disabled}
            title="Open native color picker"
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              fontSize: 12,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <PlusCircleIcon size={14} />
            <span>Pick Color</span>
          </button>
          <input
            ref={nativeColorInputRef}
            type="color"
            value={currentColor.startsWith('#') && currentColor.length === 7 ? currentColor : '#2563EB'}
            onChange={(e) => handleAddCustomColor(e.target.value)}
            disabled={disabled}
            style={{ display: 'none' }}
          />
        </div>

        {/* 10x8 Default Swatches Matrix (Google Fonts / Spectra Matrix) */}
        {showDefaultMatrix && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)' }}>
              Default Colors
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gap: 5,
                padding: 4,
                backgroundColor: 'rgba(0,0,0,0.04)',
                borderRadius: 8,
              }}
            >
              {presets.map((preset, idx) => {
                const isSelected = currentColor.toLowerCase() === preset.toLowerCase();
                return (
                  <button
                    key={`${preset}-${idx}`}
                    type="button"
                    aria-label={`Select color ${preset}`}
                    aria-pressed={isSelected}
                    onClick={() => handleColorChange(preset)}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: preset,
                      border: isSelected ? '2px solid var(--color-action-primary)' : '1px solid rgba(0,0,0,0.15)',
                      outline: isSelected ? '2px solid #FFFFFF' : 'none',
                      outlineOffset: 1,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0,
                      transition: 'transform 0.1s ease',
                      transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = isSelected ? 'scale(1.15)' : 'scale(1)')}
                  >
                    {isSelected && (
                      <CheckIcon
                        size={12}
                        style={{
                          color: preset.toLowerCase() === '#ffffff' || preset.toLowerCase() === '#efefef' ? '#000000' : '#ffffff',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Custom Colors Section */}
        {showCustomSection && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, borderTop: '1px solid var(--color-border-subtle)', paddingTop: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)' }}>
              Custom
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              {/* Plus trigger to add dynamic color */}
              <button
                type="button"
                onClick={() => nativeColorInputRef.current?.click()}
                disabled={disabled}
                aria-label="Add custom color"
                title="Add custom color"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  border: '1px dashed var(--color-border-default)',
                  background: 'transparent',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  transition: 'color 0.15s ease, border-color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-action-primary)';
                  e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                  e.currentTarget.style.borderColor = 'var(--color-border-default)';
                }}
              >
                <PlusCircleIcon size={16} />
              </button>

              {/* Dynamic user custom color swatches */}
              {activeCustomColors.map((hex, idx) => {
                const isSelected = currentColor.toLowerCase() === hex.toLowerCase();
                return (
                  <button
                    key={`${hex}-${idx}`}
                    type="button"
                    aria-label={`Select custom color ${hex}`}
                    aria-pressed={isSelected}
                    onClick={() => handleColorChange(hex)}
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      backgroundColor: hex,
                      border: isSelected ? '2px solid var(--color-action-primary)' : '1px solid var(--color-border-default)',
                      outline: isSelected ? '2px solid #FFFFFF' : 'none',
                      outlineOffset: 1,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0,
                      transition: 'transform 0.1s ease',
                      transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = isSelected ? 'scale(1.15)' : 'scale(1)')}
                  >
                    {isSelected && (
                      <CheckIcon
                        size={12}
                        style={{
                          color: hex.toLowerCase() === '#ffffff' ? '#000000' : '#ffffff',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {description && !error && (
          <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
            {description}
          </span>
        )}

        {error && (
          <span style={{ fontSize: 12, color: 'var(--color-feedback-danger)', fontWeight: 500 }}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';


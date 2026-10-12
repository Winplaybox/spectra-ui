// packages/react/src/components/form/Combobox.tsx
import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { SearchIcon, ChevronDownIcon, CloseIcon } from '@winplaybox/icons';
import { useId } from '@winplaybox/primitives';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      options = [],
      value: controlledValue,
      defaultValue = '',
      onChange,
      placeholder = 'Select or type...',
      label,
      description,
      error,
      disabled = false,
      clearable = true,
      className,
      style,
    },
    ref
  ) => {
    const id = useId();
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedValue, setSelectedValue] = useState(controlledValue ?? defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);

    const isControlled = controlledValue !== undefined;
    const activeValue = isControlled ? controlledValue : selectedValue;

    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (val: string) => {
      if (!isControlled) {
        setSelectedValue(val);
      }
      onChange?.(val);
      setIsOpen(false);
      const opt = options.find((o) => o.value === val);
      if (opt) setSearch(opt.label);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isControlled) {
        setSelectedValue('');
      }
      setSearch('');
      onChange?.('');
    };

    const currentLabel = options.find((o) => o.value === activeValue)?.label || search;

    return (
      <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', position: 'relative', ...style }}>
        {label && (
          <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {label}
          </label>
        )}

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--color-surface)',
            border: `1px solid ${error ? 'var(--color-feedback-error)' : 'var(--color-border-default)'}`,
            borderRadius: 'var(--radius-component-md, 8px)',
            transition: 'border-color 0.15s ease',
            opacity: disabled ? 0.6 : 1,
          }}
        >
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            value={isOpen ? search : currentLabel}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!isOpen) setIsOpen(true);
            }}
            onFocus={() => {
              setIsOpen(true);
              setSearch('');
            }}
            placeholder={placeholder}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              padding: '10px 12px',
              fontSize: 14,
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingRight: 10 }}>
            {clearable && activeValue && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 2,
                }}
              >
                <CloseIcon size={14} />
              </button>
            )}

            <button
              type="button"
              disabled={disabled}
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
              }}
            >
              <ChevronDownIcon
                size={14}
                style={{
                  display: 'block',
                  verticalAlign: 'middle',
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.15s ease',
                }}
              />
            </button>
          </div>
        </div>

        {/* Dropdown Options Flyout */}
        {isOpen && !disabled && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              right: 0,
              backgroundColor: 'var(--color-surface-elevated, #FFFFFF)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-component-md, 8px)',
              boxShadow: 'var(--shadow-lg, 0 10px 25px rgba(0,0,0,0.15))',
              maxHeight: 220,
              overflowY: 'auto',
              zIndex: 100,
              padding: 4,
            }}
          >
            {filteredOptions.length === 0 ? (
              <div style={{ padding: '10px 12px', fontSize: 13, color: 'var(--color-text-muted)', textAlign: 'center' }}>
                No options match &quot;{search}&quot;
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === activeValue;
                return (
                  <div
                    key={opt.value}
                    onClick={() => !opt.disabled && handleSelect(opt.value)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 6,
                      fontSize: 13,
                      cursor: opt.disabled ? 'not-allowed' : 'pointer',
                      opacity: opt.disabled ? 0.5 : 1,
                      backgroundColor: isSelected ? 'rgba(0, 127, 255, 0.1)' : 'transparent',
                      color: isSelected ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
                      fontWeight: isSelected ? 600 : 400,
                      transition: 'background-color 0.1s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!opt.disabled && !isSelected) {
                        e.currentTarget.style.backgroundColor = 'var(--color-surface-hover, rgba(128, 128, 128, 0.12))';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {opt.label}
                  </div>
                );
              })
            )}
          </div>
        )}

        {error ? (
          <span style={{ fontSize: 12, color: 'var(--color-feedback-error)' }}>{error}</span>
        ) : description ? (
          <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{description}</span>
        ) : null}
      </div>
    );
  }
);

Combobox.displayName = 'Combobox';

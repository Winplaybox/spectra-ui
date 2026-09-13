// packages/react/src/components/form/Autocomplete.tsx
import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { SearchIcon, ChevronDownIcon, CloseIcon } from '@spectra/icons';

export interface AutocompleteOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface AutocompleteProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onSelect' | 'onChange'> {
  options: AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: AutocompleteOption) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  clearable?: boolean;
}

/**
 * Autocomplete / Combobox - Text input with filterable dropdown list.
 * Engineered for dynamic query filtering, option highlighting, and accessible listbox navigation.
 */
export const Autocomplete = forwardRef<HTMLDivElement, AutocompleteProps>(
  (
    {
      options = [],
      value: controlledValue,
      defaultValue = '',
      onChange,
      onSelect,
      placeholder = 'Type to search...',
      label,
      disabled = false,
      clearable = true,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [inputValue, setInputValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const currentQuery = isControlled ? controlledValue : inputValue;
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(currentQuery.toLowerCase())
    );

    // Click outside to close
    useEffect(() => {
      const handleOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleOutside);
      return () => document.removeEventListener('mousedown', handleOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!isControlled) setInputValue(val);
      onChange?.(val);
      setIsOpen(true);
      setHighlightedIndex(0);
    };

    const handleSelectOption = (opt: AutocompleteOption) => {
      if (opt.disabled) return;
      if (!isControlled) setInputValue(opt.label);
      onChange?.(opt.label);
      onSelect?.(opt);
      setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
          setIsOpen(true);
          e.preventDefault();
        }
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % (filteredOptions.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev - 1 + (filteredOptions.length || 1)) % (filteredOptions.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredOptions[highlightedIndex]) {
          handleSelectOption(filteredOptions[highlightedIndex]);
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClear = () => {
      if (!isControlled) setInputValue('');
      onChange?.('');
      inputRef.current?.focus();
    };

    return (
      <div
        ref={(node) => {
          (containerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          width: '100%',
          position: 'relative',
          ...style,
        }}
        {...rest}
      >
        {label && (
          <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary, #f8fafc)' }}>
            {label}
          </label>
        )}

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 12,
              display: 'flex',
              color: 'var(--color-text-muted, #94a3b8)',
              pointerEvents: 'none',
            }}
          >
            <SearchIcon size={16} />
          </span>

          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={isOpen}
            disabled={disabled}
            value={currentQuery}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            style={{
              width: '100%',
              padding: '10px 36px 10px 36px',
              fontSize: 14,
              borderRadius: 'var(--radius-component-md, 8px)',
              backgroundColor: 'var(--color-surface-raised, #0f172a)',
              color: 'var(--color-text-primary, #f8fafc)',
              border: '1px solid var(--color-border-default, rgba(255,255,255,0.15))',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          <div
            style={{
              position: 'absolute',
              right: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {clearable && currentQuery && (
              <button
                type="button"
                aria-label="Clear input"
                onClick={handleClear}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 2,
                  cursor: 'pointer',
                  color: 'var(--color-text-muted, #94a3b8)',
                  display: 'flex',
                }}
              >
                <CloseIcon size={14} />
              </button>
            )}

            <button
              type="button"
              aria-label="Toggle options"
              onClick={() => setIsOpen((prev) => !prev)}
              style={{
                background: 'none',
                border: 'none',
                padding: 2,
                cursor: 'pointer',
                color: 'var(--color-text-muted, #94a3b8)',
                display: 'flex',
              }}
            >
              <ChevronDownIcon
                size={14}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.15s ease',
                }}
              />
            </button>
          </div>
        </div>

        {/* Dropdown Options Panel */}
        {isOpen && (
          <div
            role="listbox"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: 4,
              maxHeight: 220,
              overflowY: 'auto',
              backgroundColor: 'var(--color-surface-elevated, #1e293b)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
              borderRadius: 'var(--radius-component-md, 8px)',
              boxShadow: 'var(--shadow-lg, 0 10px 25px -5px rgba(0, 0, 0, 0.3))',
              zIndex: 1000,
              padding: '4px 0',
            }}
          >
            {filteredOptions.length === 0 ? (
              <div
                style={{
                  padding: '10px 14px',
                  fontSize: 13,
                  color: 'var(--color-text-muted, #64748b)',
                  textAlign: 'center',
                }}
              >
                No matching results
              </div>
            ) : (
              filteredOptions.map((opt, index) => {
                const isSelected = opt.label === currentQuery;
                const isHighlighted = highlightedIndex === index;

                return (
                  <div
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectOption(opt)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    style={{
                      padding: '8px 14px',
                      cursor: opt.disabled ? 'not-allowed' : 'pointer',
                      fontSize: 13,
                      backgroundColor: isHighlighted
                        ? 'var(--color-surface-raised, rgba(255,255,255,0.08))'
                        : 'transparent',
                      color: opt.disabled
                        ? 'var(--color-text-muted, #64748b)'
                        : isSelected
                        ? 'var(--color-action-primary, #007FFF)'
                        : 'var(--color-text-primary, #f8fafc)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <span style={{ fontWeight: isSelected ? 600 : 400 }}>{opt.label}</span>
                    {opt.description && (
                      <span style={{ fontSize: 11, color: 'var(--color-text-muted, #94a3b8)' }}>
                        {opt.description}
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
export const Combobox = Autocomplete;

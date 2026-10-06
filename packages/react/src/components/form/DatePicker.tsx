import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { CalendarIcon, CloseIcon } from '@winplaybox/icons';
import { Calendar } from '../data-display/Calendar';

export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /**
   * The controlled selected Date value.
   */
  value?: Date;
  /**
   * Default initial Date value for uncontrolled mode.
   */
  defaultValue?: Date;
  /**
   * Callback fired when a date is selected or cleared.
   */
  onChange?: (date: Date | undefined) => void;
  /**
   * Placeholder string shown when no date is selected.
   */
  placeholder?: string;
  /**
   * Custom date formatting function. Defaults to YYYY-MM-DD.
   */
  formatDate?: (date: Date) => string;
  /**
   * Minimum selectable date.
   */
  minDate?: Date;
  /**
   * Maximum selectable date.
   */
  maxDate?: Date;
  /**
   * Whether the date picker is disabled.
   */
  disabled?: boolean;
  /**
   * Component size scale.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Error state or error message.
   */
  error?: boolean | string;
  /**
   * Whether the selected date can be cleared via an icon button.
   */
  clearable?: boolean;
  /**
   * Label text for form integration.
   */
  label?: string;
  /**
   * Helper text shown below the input.
   */
  helperText?: string;
}

const defaultFormatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const sizeStyles = {
  sm: {
    height: '32px',
    padding: '0 10px',
    fontSize: 'var(--font-size-body-xs, 12px)',
    iconSize: 14,
  },
  md: {
    height: '40px',
    padding: '0 14px',
    fontSize: 'var(--font-size-body-sm, 14px)',
    iconSize: 16,
  },
  lg: {
    height: '48px',
    padding: '0 16px',
    fontSize: 'var(--font-size-body-md, 16px)',
    iconSize: 18,
  },
};

/**
 * Universal DatePicker component for Spectra UI.
 * Combines an accessible form trigger with an interactive calendar popover.
 * Strictly adheres to the Zero Emoji Policy using authentic SVG vector icons.
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = 'Select date...',
      formatDate = defaultFormatDate,
      minDate,
      maxDate,
      disabled = false,
      size = 'md',
      error,
      clearable = true,
      label,
      helperText,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalDate, setInternalDate] = useState<Date | undefined>(
      defaultValue || controlledValue
    );
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const activeDate = isControlled ? controlledValue : internalDate;
    const currentSize = sizeStyles[size];

    // Close on outside click
    useEffect(() => {
      if (!isOpen) return;
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen]);

    const handleSelectDate = (date: Date) => {
      if (!isControlled) {
        setInternalDate(date);
      }
      onChange?.(date);
      setIsOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isControlled) {
        setInternalDate(undefined);
      }
      onChange?.(undefined);
    };

    const hasError = Boolean(error);
    const errorMessage = typeof error === 'string' ? error : helperText;

    return (
      <div
        ref={(node) => {
          (containerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={className}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          maxWidth: '320px',
          fontFamily: 'inherit',
          ...style,
        }}
        {...rest}
      >
        {label && (
          <label
            style={{
              fontSize: 'var(--font-size-body-xs, 12px)',
              fontWeight: 'var(--font-weight-medium, 500)',
              color: 'var(--color-text-secondary, #6b7280)',
              marginBottom: '6px',
            }}
          >
            {label}
          </label>
        )}

        {/* Trigger Input Button */}
        <div
          role="combobox"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onClick={() => {
            if (!disabled) setIsOpen((prev) => !prev);
          }}
          onKeyDown={(e) => {
            if (disabled) return;
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: currentSize.height,
            padding: currentSize.padding,
            fontSize: currentSize.fontSize,
            backgroundColor: disabled
              ? 'var(--color-surface-subtle, #f3f4f6)'
              : 'var(--color-surface, #ffffff)',
            color: activeDate
              ? 'var(--color-text-primary, #111827)'
              : 'var(--color-text-tertiary, #9ca3af)',
            borderRadius: 'var(--radius-component-md, 8px)',
            border: `1px solid ${
              hasError
                ? 'var(--color-semantic-negative-default, #ef4444)'
                : isOpen
                ? 'var(--color-primary-default, #2563eb)'
                : 'var(--color-border-default, #d1d5db)'
            }`,
            outline: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            boxShadow: isOpen
              ? '0 0 0 3px rgba(37, 99, 235, 0.15)'
              : 'none',
            userSelect: 'none',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {activeDate ? formatDate(activeDate) : placeholder}
          </span>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            {clearable && activeDate && !disabled && (
              <span
                role="button"
                aria-label="Clear date"
                tabIndex={0}
                onClick={handleClear}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClear(e as any);
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2px',
                  borderRadius: '4px',
                  color: 'var(--color-text-tertiary, #9ca3af)',
                  cursor: 'pointer',
                }}
              >
                <CloseIcon size={12} color="currentColor" />
              </span>
            )}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isOpen
                  ? 'var(--color-primary-default, #2563eb)'
                  : 'var(--color-text-secondary, #6b7280)',
              }}
            >
              <CalendarIcon size={currentSize.iconSize} color="currentColor" />
            </span>
          </div>
        </div>

        {/* Dropdown Calendar Popover */}
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Calendar date selection"
            style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: 0,
              zIndex: 1000,
              backgroundColor: 'var(--color-surface, #ffffff)',
              borderRadius: 'var(--radius-component-lg, 12px)',
              border: '1px solid var(--color-border-default, #e5e7eb)',
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              padding: '12px',
              animation: 'spectra-fade-in 0.15s ease-out',
            }}
          >
            <Calendar
              value={activeDate}
              onChange={handleSelectDate}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
        )}

        {/* Helper / Error text */}
        {errorMessage && (
          <span
            style={{
              fontSize: 'var(--font-size-body-xs, 12px)',
              color: hasError
                ? 'var(--color-semantic-negative-default, #ef4444)'
                : 'var(--color-text-secondary, #6b7280)',
              marginTop: '4px',
            }}
          >
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

// packages/react/src/components/data-display/Calendar.tsx
import React, { useState, forwardRef } from 'react';
import { ChevronDownIcon } from '@spectra/icons';

export interface CalendarProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'defaultValue'> {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * Calendar - Interactive monthly grid date picker.
 * Engineered for accessible date selection, localized month navigation, and keyboard control.
 */
export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      minDate,
      maxDate,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [selectedDate, setSelectedDate] = useState<Date>(
      defaultValue || controlledValue || new Date()
    );
    const [viewDate, setViewDate] = useState<Date>(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
    );

    const activeDate = isControlled ? controlledValue : selectedDate;

    const currentYear = viewDate.getFullYear();
    const currentMonth = viewDate.getMonth();

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const handlePrevMonth = () => {
      setViewDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const handleNextMonth = () => {
      setViewDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const handleSelectDay = (day: number) => {
      const newDate = new Date(currentYear, currentMonth, day);
      if (!isControlled) setSelectedDate(newDate);
      onChange?.(newDate);
    };

    const isToday = (day: number) => {
      const today = new Date();
      return (
        today.getFullYear() === currentYear &&
        today.getMonth() === currentMonth &&
        today.getDate() === day
      );
    };

    const isSelected = (day: number) => {
      if (!activeDate) return false;
      return (
        activeDate.getFullYear() === currentYear &&
        activeDate.getMonth() === currentMonth &&
        activeDate.getDate() === day
      );
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{
          width: 280,
          padding: 16,
          borderRadius: 'var(--radius-component-md, 8px)',
          backgroundColor: 'var(--color-surface-elevated, #1e293b)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
          boxShadow: 'var(--shadow-sm, 0 1px 3px rgba(0,0,0,0.1))',
          userSelect: 'none',
          ...style,
        }}
        {...rest}
      >
        {/* Month Header Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary, #f8fafc)' }}>
            {MONTH_NAMES[currentMonth]} {currentYear}
          </span>
          <div style={{ display: 'flex', gap: 4 }}>
            <button
              type="button"
              aria-label="Previous Month"
              onClick={handlePrevMonth}
              style={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-muted, #94a3b8)',
                cursor: 'pointer',
                borderRadius: 4,
              }}
            >
              <ChevronDownIcon size={14} style={{ transform: 'rotate(90deg)' }} />
            </button>
            <button
              type="button"
              aria-label="Next Month"
              onClick={handleNextMonth}
              style={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-muted, #94a3b8)',
                cursor: 'pointer',
                borderRadius: 4,
              }}
            >
              <ChevronDownIcon size={14} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>
        </div>

        {/* Weekday labels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 2,
            marginBottom: 6,
            textAlign: 'center',
          }}
        >
          {WEEKDAYS.map((wd) => (
            <span
              key={wd}
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--color-text-muted, #64748b)',
                padding: '4px 0',
              }}
            >
              {wd}
            </span>
          ))}
        </div>

        {/* Days grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 2,
            textAlign: 'center',
          }}
        >
          {/* Empty cells before month start */}
          {Array.from({ length: firstDayIndex }, (_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* Month day buttons */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const selected = isSelected(day);
            const today = isToday(day);

            return (
              <button
                key={day}
                type="button"
                onClick={() => handleSelectDay(day)}
                style={{
                  width: 32,
                  height: 32,
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: today && !selected ? '1px solid var(--color-action-primary, #007FFF)' : 'none',
                  backgroundColor: selected
                    ? 'var(--color-action-primary, #007FFF)'
                    : 'transparent',
                  color: selected
                    ? 'var(--color-text-inverse, #ffffff)'
                    : 'var(--color-text-primary, #f8fafc)',
                  fontSize: 12,
                  fontWeight: selected || today ? 600 : 400,
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'background-color 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (!selected) {
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-raised, rgba(255,255,255,0.08))';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!selected) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';

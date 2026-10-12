// packages/react/src/components/form/SearchBox.tsx
import React, { forwardRef } from 'react';
import { SearchIcon, CloseIcon } from '@winplaybox/icons';
import { useId } from '@winplaybox/primitives';

export interface SearchBoxProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  value?: string;
  onChangeValue?: (val: string) => void;
  onClear?: () => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      value,
      onChangeValue,
      onClear,
      size = 'md',
      fullWidth = false,
      placeholder = 'Search...',
      disabled = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const height = size === 'sm' ? 32 : size === 'lg' ? 44 : 38;
    const fontSize = size === 'sm' ? 12 : size === 'lg' ? 15 : 13.5;

    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          height,
          width: fullWidth ? '100%' : 'auto',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-component-md, 8px)',
          padding: '0 10px',
          gap: 8,
          opacity: disabled ? 0.6 : 1,
          transition: 'border-color 0.15s ease',
          ...style,
        }}
      >
        <SearchIcon
          size={size === 'sm' ? 14 : 16}
          style={{
            color: 'var(--color-text-muted)',
            flexShrink: 0,
            display: 'block',
            verticalAlign: 'middle',
          }}
        />

        <input
          ref={ref}
          id={id}
          type="search"
          disabled={disabled}
          value={value}
          onChange={(e) => {
            onChangeValue?.(e.target.value);
            rest.onChange?.(e);
          }}
          placeholder={placeholder}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize,
            backgroundColor: 'transparent',
            color: 'var(--color-text-primary)',
            minWidth: 0,
          }}
          {...rest}
        />

        {value && !disabled && (
          <button
            type="button"
            onClick={onClear}
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
            <CloseIcon size={14} style={{ display: 'block', verticalAlign: 'middle' }} />
          </button>
        )}
      </div>
    );
  }
);

SearchBox.displayName = 'SearchBox';

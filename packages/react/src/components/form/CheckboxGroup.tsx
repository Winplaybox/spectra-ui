// packages/react/src/components/form/CheckboxGroup.tsx
import React, { forwardRef, ReactNode } from 'react';

export interface CheckboxGroupProps extends React.ComponentPropsWithoutRef<'fieldset'> {
  label?: string;
  description?: string;
  error?: string;
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

/**
 * CheckboxGroup - Groups multiple checkboxes under a shared accessible fieldset and legend.
 * Engineered for coordinated multi-select options and accessible form fieldsets.
 */
export const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      label,
      description,
      error,
      children,
      orientation = 'vertical',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <fieldset
        ref={ref}
        className={className}
        style={{
          border: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          ...style,
        }}
        {...rest}
      >
        {label && (
          <legend
            style={{
              padding: 0,
              fontSize: 13,
              fontWeight: 600,
              color: error ? 'var(--color-feedback-danger, #ef4444)' : 'var(--color-text-primary, #f8fafc)',
              marginBottom: 4,
            }}
          >
            {label}
          </legend>
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: orientation === 'horizontal' ? 'row' : 'column',
            gap: orientation === 'horizontal' ? 16 : 10,
            flexWrap: 'wrap',
          }}
        >
          {children}
        </div>

        {error ? (
          <span style={{ fontSize: 12, color: 'var(--color-feedback-danger, #ef4444)' }}>{error}</span>
        ) : description ? (
          <span style={{ fontSize: 12, color: 'var(--color-text-muted, #94a3b8)' }}>{description}</span>
        ) : null}
      </fieldset>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

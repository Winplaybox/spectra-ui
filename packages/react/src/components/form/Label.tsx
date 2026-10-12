// packages/react/src/components/form/Label.tsx
import React, { forwardRef } from 'react';

export type LabelSize = 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg';
export type LabelWeight = 'regular' | 'semibold';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Associated form control identifier (mapped to standard htmlFor attribute).
   */
  htmlFor?: string;
  /**
   * Whether the associated form field is required. Renders an accessible asterisk marker.
   * @default false
   */
  required?: boolean;
  /**
   * Size scale conforming to Spectra UI typography tokens.
   * @default 'medium'
   */
  size?: LabelSize;
  /**
   * Font weight variant.
   * @default 'semibold'
   */
  weight?: LabelWeight;
  /**
   * Disabled state: renders in muted text token color and not-allowed cursor.
   * @default false
   */
  disabled?: boolean;
  /**
   * Label text or custom content.
   */
  children?: React.ReactNode;
}

const sizeFontMap: Record<string, string> = {
  small: 'var(--fontSize-semantic-label-xs, 12px)',
  sm: 'var(--fontSize-semantic-label-xs, 12px)',
  medium: 'var(--fontSize-semantic-label-sm, 13px)',
  md: 'var(--fontSize-semantic-label-sm, 13px)',
  large: 'var(--fontSize-semantic-label-md, 14px)',
  lg: 'var(--fontSize-semantic-label-md, 14px)',
};

/**
 * Label — Foundational form control label conforming to Spectra UI specifications.
 * Ensures strict WAI-ARIA accessibility, tokenized typography, and accessible required markers.
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      htmlFor,
      required = false,
      size = 'medium',
      weight = 'semibold',
      disabled = false,
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const fontSize = sizeFontMap[size] || sizeFontMap.medium;
    const fontWeight = weight === 'semibold' ? 600 : 400;

    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontSize,
          fontWeight,
          lineHeight: '1.4',
          fontFamily: 'var(--font-primitive-family-sans, system-ui, -apple-system, sans-serif)',
          color: disabled ? 'var(--color-text-muted, #71717A)' : 'var(--color-text-primary, #18181B)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          userSelect: 'none',
          ...style,
        }}
        {...rest}
      >
        <span>{children}</span>
        {required && (
          <span
            aria-hidden="true"
            style={{
              color: 'var(--color-feedback-error, #DC2626)',
              fontWeight: 700,
              fontSize: '1em',
              lineHeight: 1,
            }}
          >
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = 'Label';

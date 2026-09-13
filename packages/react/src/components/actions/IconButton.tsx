// packages/react/src/components/actions/IconButton.tsx
import React, { forwardRef, ReactNode } from 'react';
import { ButtonVariant, ButtonSize } from './Button';

export interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  icon: ReactNode;
  'aria-label': string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: 'circle' | 'rounded' | 'square';
  disabled?: boolean;
  isLoading?: boolean;
}

/**
 * IconButton - High-precision compact button optimized specifically for single SVG vector icon triggers.
 * Requires an explicit aria-label for accessibility compliance (WCAG 2.1 AA).
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      'aria-label': ariaLabel,
      variant = 'secondary',
      size = 'md',
      shape = 'rounded',
      disabled = false,
      isLoading = false,
      type = 'button',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const dim = size === 'sm' ? 32 : size === 'lg' ? 44 : 38;
    const iconSize = size === 'sm' ? 16 : size === 'lg' ? 22 : 18;

    const borderRadius =
      shape === 'circle' ? '50%' : shape === 'rounded' ? 'var(--radius-component-md, 8px)' : '0';

    const getBgColor = () => {
      switch (variant) {
        case 'primary': return 'var(--color-action-primary)';
        case 'secondary': return 'var(--color-surface-raised)';
        case 'tertiary': return 'transparent';
        case 'danger': return 'var(--color-feedback-danger)';
        default: return 'var(--color-surface-raised)';
      }
    };

    const getTextColor = () => {
      switch (variant) {
        case 'primary':
        case 'danger':
          return 'var(--color-text-on-action, #ffffff)';
        default:
          return 'var(--color-text-primary)';
      }
    };

    const getBorderColor = () => {
      switch (variant) {
        case 'primary': return 'var(--color-action-primary)';
        case 'secondary': return 'var(--color-border-default)';
        case 'tertiary': return 'transparent';
        case 'danger': return 'var(--color-feedback-danger)';
        default: return 'var(--color-border-default)';
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        className={className}
        style={{
          width: dim,
          height: dim,
          minWidth: dim,
          minHeight: dim,
          padding: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius,
          backgroundColor: getBgColor(),
          color: getTextColor(),
          border: `1px solid ${getBorderColor()}`,
          cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          outline: 'none',
          transition: 'all 0.15s ease',
          ...style,
        }}
        {...rest}
      >
        {isLoading ? (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 1s linear infinite' }}>
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
            <path d="M12 2a10 10 0 0 1 10 10" />
          </svg>
        ) : (
          React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement<any>, { size: iconSize })
            : icon
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

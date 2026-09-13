// packages/react/src/components/actions/CompoundButton.tsx
import React, { forwardRef, ReactNode } from 'react';
import { ButtonVariant, ButtonSize } from './Button';

export interface CompoundButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  subtitle?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
}

/**
 * CompoundButton - High-prominence action button pairing a headline with explanatory secondary text.
 * Engineered for call-to-action cards and multi-line decision points.
 */
export const CompoundButton = forwardRef<HTMLButtonElement, CompoundButtonProps>(
  (
    {
      children,
      subtitle,
      variant = 'primary',
      size = 'md',
      disabled = false,
      isLoading = false,
      icon,
      type = 'button',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    // Dynamic styles based on variant
    const getBgColor = () => {
      switch (variant) {
        case 'primary': return 'var(--color-action-primary)';
        case 'secondary': return 'var(--color-surface-raised)';
        case 'tertiary': return 'transparent';
        case 'danger': return 'var(--color-feedback-danger)';
        default: return 'var(--color-action-primary)';
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
        default: return 'var(--color-action-primary)';
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: size === 'sm' ? 10 : size === 'lg' ? 16 : 14,
          padding: size === 'sm' ? '8px 14px' : size === 'lg' ? '16px 24px' : '12px 18px',
          borderRadius: 'var(--radius-component-md, 8px)',
          backgroundColor: getBgColor(),
          color: getTextColor(),
          border: `1px solid ${getBorderColor()}`,
          cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          textAlign: 'left',
          textDecoration: 'none',
          outline: 'none',
          transition: 'all 0.15s ease',
          boxShadow: variant === 'primary' ? 'var(--shadow-sm, 0 1px 2px rgba(0,0,0,0.1))' : 'none',
          ...style,
        }}
        {...rest}
      >
        {icon && (
          <span style={{ flexShrink: 0, display: 'inline-flex' }}>
            {icon}
          </span>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: size === 'sm' ? 13 : size === 'lg' ? 16 : 14,
              lineHeight: 1.2,
            }}
          >
            {children}
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: size === 'sm' ? 11 : size === 'lg' ? 13 : 12,
                opacity: 0.8,
                lineHeight: 1.3,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
      </button>
    );
  }
);

CompoundButton.displayName = 'CompoundButton';

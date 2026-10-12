// packages/react/src/components/actions/CompoundButton.tsx
import React, { forwardRef, ReactNode, MouseEvent } from 'react';
import { ButtonAppearance, ButtonVariant, ButtonShape, ButtonSize } from './Button';

export interface CompoundButtonProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'size'> {
  children: ReactNode;
  /** Secondary subtitle placed below primary label */
  secondaryContent?: ReactNode;
  /** Backward-compatible subtitle alias */
  subtitle?: ReactNode;
  /** Visual appearance */
  appearance?: ButtonAppearance;
  /** Classic variant prop */
  variant?: ButtonVariant;
  /** Sizing scale */
  size?: ButtonSize;
  /** Shape silhouette */
  shape?: ButtonShape;
  /** Disabled state */
  disabled?: boolean;
  /** Focusable disabled state adhering to WCAG 2.1 AA */
  disabledFocusable?: boolean;
  /** Loading spinner */
  isLoading?: boolean;
  /** Leading or trailing icon */
  icon?: ReactNode;
}

/**
 * CompoundButton - High-prominence action button pairing a headline with explanatory secondary text.
 * Engineered for call-to-action cards, setup wizards, and multi-line decision points (Spectra UI Web pattern).
 */
export const CompoundButton = forwardRef<HTMLButtonElement, CompoundButtonProps>(
  (
    {
      children,
      secondaryContent,
      subtitle,
      appearance,
      variant,
      size = 'md',
      shape = 'rounded',
      disabled = false,
      disabledFocusable = false,
      isLoading = false,
      icon,
      type = 'button',
      className,
      style,
      onClick,
      ...rest
    },
    ref
  ) => {
    const descriptionText = secondaryContent !== undefined ? secondaryContent : subtitle;
    const visualKey = appearance || variant || 'primary';
    const isEffectiveDisabled = disabled || isLoading;

    // Visual colors based on appearance/variant
    const getBgColor = () => {
      switch (visualKey) {
        case 'primary': return 'var(--color-action-primary, #0078d4)';
        case 'secondary': return 'var(--color-surface-raised, #ffffff)';
        case 'outline': return 'transparent';
        case 'subtle': return 'transparent';
        case 'transparent': return 'transparent';
        case 'tertiary': return 'transparent';
        case 'danger': return 'var(--color-feedback-danger, #d13438)';
        default: return 'var(--color-action-primary, #0078d4)';
      }
    };

    const getTextColor = () => {
      switch (visualKey) {
        case 'primary':
        case 'danger':
          return 'var(--color-text-on-action, #ffffff)';
        default:
          return 'var(--color-text-primary, #242424)';
      }
    };

    const getBorderColor = () => {
      switch (visualKey) {
        case 'primary': return 'var(--color-action-primary, #0078d4)';
        case 'secondary':
        case 'outline':
          return 'var(--color-border-default, #d1d1d1)';
        case 'subtle':
        case 'transparent':
        case 'tertiary':
          return 'transparent';
        case 'danger': return 'var(--color-feedback-danger, #d13438)';
        default: return 'var(--color-action-primary, #0078d4)';
      }
    };

    const getBorderRadius = () => {
      switch (shape) {
        case 'circular': return 9999;
        case 'square': return 0;
        default: return 'var(--radius-component-md, 8px)';
      }
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (isEffectiveDisabled || disabledFocusable) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={isEffectiveDisabled}
        aria-disabled={isEffectiveDisabled || disabledFocusable ? true : undefined}
        aria-busy={isLoading ? true : undefined}
        tabIndex={disabledFocusable && !isEffectiveDisabled ? 0 : undefined}
        onClick={handleClick}
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: size === 'sm' || size === 'small' ? 10 : size === 'lg' || size === 'large' ? 16 : 14,
          padding: size === 'sm' || size === 'small' ? '8px 14px' : size === 'lg' || size === 'large' ? '16px 24px' : '12px 18px',
          borderRadius: getBorderRadius(),
          backgroundColor: getBgColor(),
          color: getTextColor(),
          border: `1px solid ${getBorderColor()}`,
          cursor: isEffectiveDisabled || disabledFocusable ? 'not-allowed' : 'pointer',
          opacity: isEffectiveDisabled || disabledFocusable ? 0.6 : 1,
          textAlign: 'left',
          textDecoration: 'none',
          outline: 'none',
          transition: 'all 0.15s cubic-bezier(0.33, 1, 0.68, 1)',
          boxShadow: visualKey === 'primary' ? 'var(--shadow-sm, 0 1px 2px rgba(0,0,0,0.1))' : 'none',
          ...style,
        }}
        {...rest}
      >
        {isLoading && (
          <span style={{ display: 'inline-flex', alignItems: 'center' }} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
          </span>
        )}
        {!isLoading && icon && (
          <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center' }}>
            {icon}
          </span>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: size === 'sm' || size === 'small' ? 13 : size === 'lg' || size === 'large' ? 16 : 14,
              lineHeight: 1.25,
            }}
          >
            {children}
          </span>
          {descriptionText && (
            <span
              style={{
                fontSize: size === 'sm' || size === 'small' ? 11 : size === 'lg' || size === 'large' ? 13 : 12,
                opacity: visualKey === 'primary' || visualKey === 'danger' ? 0.85 : 0.7,
                lineHeight: 1.3,
              }}
            >
              {descriptionText}
            </span>
          )}
        </div>
      </button>
    );
  }
);

CompoundButton.displayName = 'CompoundButton';

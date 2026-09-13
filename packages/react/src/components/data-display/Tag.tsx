// packages/react/src/components/data-display/Tag.tsx
import React, { forwardRef, ReactNode } from 'react';
import { CloseIcon } from '@spectra/icons';

export type TagVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps extends React.ComponentPropsWithoutRef<'span'> {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  icon?: ReactNode;
  onClose?: (e: React.MouseEvent) => void;
  closable?: boolean;
}

/**
 * Tag - Compact label for categorizing, metadata attribution, or interactive filtering.
 * Engineered for taxonomy tags, entity badges, and interactive removal chips.
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      children,
      variant = 'neutral',
      size = 'md',
      icon,
      onClose,
      closable = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const getColors = () => {
      switch (variant) {
        case 'primary':
          return {
            bg: 'rgba(0, 127, 255, 0.12)',
            border: 'rgba(0, 127, 255, 0.35)',
            text: 'var(--color-action-primary, #007FFF)',
          };
        case 'success':
          return {
            bg: 'rgba(34, 197, 94, 0.12)',
            border: 'rgba(34, 197, 94, 0.35)',
            text: 'var(--color-feedback-success, #22c55e)',
          };
        case 'warning':
          return {
            bg: 'rgba(245, 158, 11, 0.12)',
            border: 'rgba(245, 158, 11, 0.35)',
            text: 'var(--color-feedback-warning, #f59e0b)',
          };
        case 'danger':
          return {
            bg: 'rgba(239, 68, 68, 0.12)',
            border: 'rgba(239, 68, 68, 0.35)',
            text: 'var(--color-feedback-danger, #ef4444)',
          };
        case 'info':
          return {
            bg: 'var(--color-feedback-info-light, rgba(14, 165, 233, 0.12))',
            border: 'rgba(14, 165, 233, 0.35)',
            text: 'var(--color-action-primary, #0ea5e9)',
          };
        default:
          return {
            bg: 'var(--color-surface-raised)',
            border: 'var(--color-border-default)',
            text: 'var(--color-text-primary)',
          };
      }
    };

    const colors = getColors();
    const padding = size === 'sm' ? '2px 6px' : size === 'lg' ? '6px 12px' : '4px 8px';
    const fontSize = size === 'sm' ? 11 : size === 'lg' ? 13 : 12;
    const closeIconSize = size === 'sm' ? 10 : size === 'lg' ? 14 : 12;

    return (
      <span
        ref={ref}
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding,
          fontSize,
          fontWeight: 500,
          borderRadius: 'var(--radius-component-sm, 4px)',
          backgroundColor: colors.bg,
          color: colors.text,
          border: `1px solid ${colors.border}`,
          userSelect: 'none',
          lineHeight: 1.2,
          ...style,
        }}
        {...rest}
      >
        {icon && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{icon}</span>}
        <span>{children}</span>
        {(closable || onClose) && (
          <button
            type="button"
            aria-label="Remove tag"
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              background: 'transparent',
              padding: 1,
              marginLeft: 2,
              cursor: 'pointer',
              color: 'inherit',
              opacity: 0.75,
              transition: 'opacity 0.12s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
          >
            <CloseIcon size={closeIconSize} />
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';

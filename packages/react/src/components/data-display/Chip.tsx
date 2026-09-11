import React, { forwardRef, ReactNode } from 'react';
import * as styles from './Chip.css';
import { CloseIcon } from '@spectra/icons';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md';
  icon?: ReactNode;
  avatar?: ReactNode;
  selected?: boolean;
  clickable?: boolean;
  onDelete?: () => void;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      variant = 'filled',
      size = 'md',
      icon,
      avatar,
      selected = false,
      clickable = false,
      onDelete,
      className,
      style: customStyle,
      onClick,
      ...rest
    },
    ref
  ) => {
    const isInteractive = clickable || !!onClick;

    const variantStyle =
      variant === 'outlined'
        ? {
            backgroundColor: selected ? 'var(--color-surface-raised)' : 'transparent',
            border: `1px solid ${selected ? 'var(--color-action-primary)' : 'var(--color-border-default)'}`,
            color: selected ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
          }
        : {};

    const sizeStyle =
      size === 'sm'
        ? { height: 24, padding: '0 8px', fontSize: 12 }
        : {};

    return (
      <div
        ref={ref}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        onClick={onClick}
        className={`${styles.chip} ${isInteractive ? styles.clickable : ''} ${
          selected ? styles.selected : ''
        } spectra-chip spectra-chip--${variant} spectra-chip--${size} ${selected ? 'spectra-chip--selected' : ''} ${className || ''}`}
        style={{ ...variantStyle, ...sizeStyle, ...customStyle }}
        {...rest}
      >
        {avatar && <span className="spectra-chip__avatar">{avatar}</span>}
        {icon && <span className="spectra-chip__icon">{icon}</span>}
        <span className="spectra-chip__label">{label}</span>
        {onDelete && (
          <button
            type="button"
            aria-label="Delete chip"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className={`${styles.deleteButton} spectra-chip__delete`}
          >
            <CloseIcon size={12} />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';

// packages/react/src/components/navigation/Menu.tsx
import React, { forwardRef, ReactNode } from 'react';

export interface MenuItemProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
}

/**
 * MenuItem - Individual actionable item inside a Menu container.
 */
export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      children,
      icon,
      shortcut,
      disabled = false,
      danger = false,
      onClick,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        role="menuitem"
        disabled={disabled}
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          width: '100%',
          padding: '8px 12px',
          border: 'none',
          background: 'transparent',
          color: disabled
            ? 'var(--color-text-muted)'
            : danger
            ? 'var(--color-feedback-danger)'
            : 'var(--color-text-primary)',
          fontSize: 13,
          cursor: disabled ? 'not-allowed' : 'pointer',
          borderRadius: 4,
          textAlign: 'left',
          transition: 'background-color 0.12s ease',
          outline: 'none',
          ...style,
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = danger
              ? 'var(--color-feedback-danger-light, rgba(239, 68, 68, 0.12))'
              : 'var(--color-surface-raised)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        {...rest}
      >
        {icon && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{icon}</span>}
        <span style={{ flex: 1 }}>{children}</span>
        {shortcut && (
          <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontVariantNumeric: 'tabular-nums' }}>
            {shortcut}
          </span>
        )}
      </button>
    );
  }
);
MenuItem.displayName = 'MenuItem';

export interface MenuProps extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

/**
 * Menu - Floating context menu container for commands and options.
 * Engineered for contextual command surfaces, grouped menu items, and accessible hotkeys.
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, className, style, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="menu"
        className={className}
        style={{
          minWidth: 180,
          padding: 4,
          borderRadius: 'var(--radius-component-md, 8px)',
          backgroundColor: 'var(--color-surface-elevated)',
          border: '1px solid var(--color-border-default)',
          boxShadow: 'var(--shadow-lg, 0 10px 25px -5px rgba(0, 0, 0, 0.15))',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
Menu.displayName = 'Menu';

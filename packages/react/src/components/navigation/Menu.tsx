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
            ? 'var(--color-text-muted, #64748b)'
            : danger
            ? 'var(--color-feedback-danger, #ef4444)'
            : 'var(--color-text-primary, #f8fafc)',
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
              ? 'rgba(239, 68, 68, 0.12)'
              : 'var(--color-surface-raised, rgba(255,255,255,0.08))';
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
          <span style={{ fontSize: 11, color: 'var(--color-text-muted, #64748b)', fontVariantNumeric: 'tabular-nums' }}>
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
 * Benchmarked against Google Material UI Menu & Microsoft Fluent UI 2 Menu.
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
          backgroundColor: 'var(--color-surface-elevated, #1e293b)',
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
          boxShadow: 'var(--shadow-lg, 0 10px 25px -5px rgba(0, 0, 0, 0.3))',
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

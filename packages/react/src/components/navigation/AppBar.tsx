// packages/react/src/components/navigation/AppBar.tsx
import React, { forwardRef, ReactNode } from 'react';

export interface AppBarProps extends React.ComponentPropsWithoutRef<'header'> {
  brand?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  sticky?: boolean;
}

/**
 * AppBar - Primary top-level application header bar.
 * Engineered for universal header bars, brand identity slots, search anchors, and global navigation.
 */
export const AppBar = forwardRef<HTMLElement, AppBarProps>(
  (
    {
      brand,
      children,
      actions,
      sticky = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        role="banner"
        className={className}
        style={{
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          backgroundColor: 'var(--color-surface-elevated, #1e293b)',
          borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
          position: sticky ? 'sticky' : 'relative',
          top: sticky ? 0 : undefined,
          zIndex: 100,
          ...style,
        }}
        {...rest}
      >
        {brand && <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{brand}</div>}
        {children && <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>{children}</div>}
        {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{actions}</div>}
      </header>
    );
  }
);
AppBar.displayName = 'AppBar';

export interface BottomNavItem {
  id: string;
  label: string;
  icon: ReactNode;
}

export interface BottomNavProps extends Omit<React.ComponentPropsWithoutRef<'nav'>, 'onChange'> {
  items: BottomNavItem[];
  activeId: string;
  onChange: (id: string) => void;
}

/**
 * BottomNav - Mobile-first persistent bottom navigation bar.
 */
export const BottomNav = forwardRef<HTMLElement, BottomNavProps>(
  ({ items, activeId, onChange, className, style, ...rest }, ref) => {
    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Bottom Navigation"
        className={className}
        style={{
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'var(--color-surface-elevated, #1e293b)',
          borderTop: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
          width: '100%',
          ...style,
        }}
        {...rest}
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: isActive
                  ? 'var(--color-action-primary, #007FFF)'
                  : 'var(--color-text-muted, #94a3b8)',
                fontSize: 11,
                fontWeight: isActive ? 600 : 400,
                transition: 'color 0.12s ease',
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    );
  }
);
BottomNav.displayName = 'BottomNav';

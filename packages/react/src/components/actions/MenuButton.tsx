// packages/react/src/components/actions/MenuButton.tsx
import React, { forwardRef, useState, useRef, useEffect, ReactNode } from 'react';
import { Button, ButtonProps } from './Button';
import { ChevronDownIcon } from '@winplaybox/icons';

export interface MenuButtonItem {
  id?: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface MenuButtonProps extends ButtonProps {
  /** Array of menu items */
  menuItems?: MenuButtonItem[];
  /** Trailing dropdown indicator icon */
  menuIcon?: ReactNode;
  /** Controlled open state */
  isOpen?: boolean;
  /** Default uncontrolled open state */
  defaultOpen?: boolean;
  /** Callback fired when menu open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Custom menu content */
  menuContent?: ReactNode;
}

/**
 * MenuButton - Action button paired with a dropdown chevron indicator that
 * displays a contextual flyout menu, conforming to Spectra UI specifications.
 */
export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      children,
      menuItems = [],
      menuIcon,
      isOpen: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      menuContent,
      appearance = 'secondary',
      disabled,
      disabledFocusable,
      onClick,
      style,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledOpen !== undefined;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const open = isControlled ? controlledOpen : internalOpen;

    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const setOpen = (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    };

    // Outside click dismiss
    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      if (open) {
        document.addEventListener('mousedown', handleOutsideClick);
      }
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [open]);

    // Escape key dismiss
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
        }
      };
      if (open) {
        window.addEventListener('keydown', handleKeyDown);
      }
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open]);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !disabledFocusable) {
        setOpen(!open);
      }
      onClick?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowDown' && !open) {
        e.preventDefault();
        setOpen(true);
      }
    };

    const trailingIcon = (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 4,
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.15s ease',
        }}
        aria-hidden="true"
      >
        {menuIcon || <ChevronDownIcon size={13} style={{ display: 'block', verticalAlign: 'middle' }} />}
      </span>
    );

    return (
      <div
        ref={containerRef}
        style={{
          display: 'inline-flex',
          position: 'relative',
          verticalAlign: 'middle',
        }}
      >
        <Button
          ref={ref}
          appearance={appearance}
          disabled={disabled}
          disabledFocusable={disabledFocusable}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={handleButtonClick}
          onKeyDown={handleKeyDown}
          style={style}
          {...rest}
        >
          {children}
          {trailingIcon}
        </Button>

        {open && (
          <div
            ref={menuRef}
            role="menu"
            aria-orientation="vertical"
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              minWidth: 180,
              zIndex: 1000,
              backgroundColor: 'var(--color-surface-raised, #ffffff)',
              borderRadius: 'var(--radius-component-md, 6px)',
              border: '1px solid var(--color-border-default, #d1d1d1)',
              boxShadow: 'var(--shadow-elevation-medium, 0 8px 16px rgba(0, 0, 0, 0.14))',
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              animation: 'spectra-fade-in 0.12s ease',
            }}
          >
            {menuContent ? (
              menuContent
            ) : (
              menuItems.map((item, idx) => (
                <button
                  key={item.id || idx}
                  role="menuitem"
                  type="button"
                  disabled={item.disabled}
                  onClick={() => {
                    if (!item.disabled) {
                      setOpen(false);
                      item.onClick?.();
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 10px',
                    borderRadius: 4,
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: item.disabled
                      ? 'var(--color-text-disabled, #a19f9d)'
                      : 'var(--color-text-primary, #242424)',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: item.disabled ? 'not-allowed' : 'pointer',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'background-color 0.1s ease, color 0.1s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!item.disabled) {
                      e.currentTarget.style.backgroundColor = 'var(--color-surface-hover, rgba(128, 128, 128, 0.12))';
                      e.currentTarget.style.color = 'var(--color-text-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = item.disabled
                      ? 'var(--color-text-disabled, #a19f9d)'
                      : 'var(--color-text-primary, #242424)';
                  }}
                >
                  {item.icon && (
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    );
  }
);

MenuButton.displayName = 'MenuButton';

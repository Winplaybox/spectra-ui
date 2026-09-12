// packages/react/src/components/actions/SplitButton.tsx
import React, { useState, useRef, useEffect, forwardRef, ReactNode } from 'react';
import { Button, ButtonVariant, ButtonSize } from './Button';
import { ChevronDownIcon } from '@spectra/icons';

export interface SplitButtonOption {
  label: string;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SplitButtonProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onClick'> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  options: SplitButtonOption[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabelDropdown?: string;
}

/**
 * SplitButton - Composite button pairing a primary action with a flyout options menu.
 * Benchmarked against Google Material UI (MUI v5/v6) & Microsoft Fluent UI 2.
 */
export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      isLoading = false,
      options = [],
      onClick,
      ariaLabelDropdown = 'Show options menu',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          setIsOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleToggle = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!disabled && !isLoading) {
        setIsOpen((prev) => !prev);
      }
    };

    const handleSelectOption = (opt: SplitButtonOption) => {
      if (!opt.disabled) {
        setIsOpen(false);
        opt.onClick?.();
      }
    };

    return (
      <div
        ref={(node) => {
          (containerRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={className}
        style={{
          display: 'inline-flex',
          position: 'relative',
          verticalAlign: 'middle',
          ...style,
        }}
        {...rest}
      >
        {/* Primary Action Button */}
        <Button
          variant={variant}
          size={size}
          disabled={disabled}
          isLoading={isLoading}
          onClick={onClick}
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {children}
        </Button>

        {/* Dropdown Menu Trigger Button */}
        <Button
          variant={variant}
          size={size}
          disabled={disabled || isLoading}
          onClick={handleToggle}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-label={ariaLabelDropdown}
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            paddingLeft: size === 'sm' ? 6 : size === 'lg' ? 12 : 8,
            paddingRight: size === 'sm' ? 6 : size === 'lg' ? 12 : 8,
          }}
        >
          <ChevronDownIcon
            size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16}
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.15s ease',
            }}
          />
        </Button>

        {/* Flyout Options Menu */}
        {isOpen && options.length > 0 && (
          <div
            ref={menuRef}
            role="menu"
            aria-orientation="vertical"
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 4,
              minWidth: 160,
              backgroundColor: 'var(--color-surface-elevated, #1e293b)',
              border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
              borderRadius: 'var(--radius-component-md, 8px)',
              boxShadow: 'var(--shadow-lg, 0 10px 25px -5px rgba(0, 0, 0, 0.3))',
              zIndex: 1000,
              overflow: 'hidden',
              padding: '4px 0',
            }}
          >
            {options.map((opt, index) => (
              <button
                key={index}
                role="menuitem"
                disabled={opt.disabled}
                onClick={() => handleSelectOption(opt)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  width: '100%',
                  padding: '8px 14px',
                  border: 'none',
                  background: 'transparent',
                  color: opt.disabled
                    ? 'var(--color-text-muted, #64748b)'
                    : 'var(--color-text-primary, #f8fafc)',
                  fontSize: size === 'sm' ? 12 : 13,
                  cursor: opt.disabled ? 'not-allowed' : 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.12s ease',
                }}
                onMouseEnter={(e) => {
                  if (!opt.disabled) {
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-raised, rgba(255,255,255,0.08))';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {opt.icon && <span style={{ flexShrink: 0 }}>{opt.icon}</span>}
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

SplitButton.displayName = 'SplitButton';

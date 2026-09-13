// packages/react/src/components/navigation/SpeedDial.tsx
import React, { useState, forwardRef, ReactNode } from 'react';
import { PlusIcon } from '@spectra/icons';

export interface SpeedDialAction {
  icon: ReactNode;
  name: string;
  onClick?: () => void;
}

export interface SpeedDialProps extends React.ComponentPropsWithoutRef<'div'> {
  actions: SpeedDialAction[];
  icon?: ReactNode;
  openIcon?: ReactNode;
  ariaLabel?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

/**
 * SpeedDial - Floating Action Button (FAB) that reveals quick action triggers when activated.
 * Benchmarked against Google Material UI SpeedDial.
 */
export const SpeedDial = forwardRef<HTMLDivElement, SpeedDialProps>(
  (
    {
      actions = [],
      icon = <PlusIcon size={20} />,
      openIcon,
      ariaLabel = 'Speed Dial Actions',
      direction = 'up',
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        ref={ref}
        role="presentation"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={className}
        style={{
          position: 'relative',
          display: 'inline-flex',
          flexDirection: direction === 'up' ? 'column-reverse' : 'column',
          alignItems: 'center',
          gap: 12,
          ...style,
        }}
        {...rest}
      >
        {/* Main Floating Action Button */}
        <button
          type="button"
          aria-label={ariaLabel}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: 'var(--color-action-primary)',
            color: 'var(--color-text-on-action, #ffffff)',
            border: 'none',
            boxShadow: 'var(--shadow-lg, 0 10px 25px -5px rgba(0, 0, 0, 0.25))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            transform: isOpen && !openIcon ? 'rotate(45deg)' : 'none',
            zIndex: 10,
          }}
        >
          {isOpen && openIcon ? openIcon : icon}
        </button>

        {/* Speed Dial Actions list */}
        {isOpen && (
          <div
            role="menu"
            aria-orientation="vertical"
            style={{
              display: 'flex',
              flexDirection: direction === 'up' ? 'column-reverse' : 'column',
              alignItems: 'center',
              gap: 10,
            }}
          >
            {actions.map((act, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <button
                  type="button"
                  aria-label={act.name}
                  onClick={() => {
                    act.onClick?.();
                    setIsOpen(false);
                  }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-surface-elevated)',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border-default)',
                    boxShadow: 'var(--shadow-md, 0 4px 6px -1px rgba(0,0,0,0.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  {act.icon}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

SpeedDial.displayName = 'SpeedDial';

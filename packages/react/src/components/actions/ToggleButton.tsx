// packages/react/src/components/actions/ToggleButton.tsx
import React, { forwardRef, useState } from 'react';
import { Button, ButtonProps } from './Button';
import * as styles from './Button.css';

export interface ToggleButtonProps extends ButtonProps {
  /** Controlled checked state */
  checked?: boolean;
  /** Uncontrolled default checked state */
  defaultChecked?: boolean;
  /** Callback fired when checked state toggles */
  onToggle?: (checked: boolean) => void;
}

/**
 * ToggleButton - Two-state action button with aria-pressed semantics,
 * conforming to Spectra UI specifications.
 */
export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    {
      children,
      checked: controlledChecked,
      defaultChecked = false,
      onToggle,
      appearance = 'secondary',
      disabled,
      disabledFocusable,
      onClick,
      className,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledChecked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !disabledFocusable) {
        const next = !isChecked;
        if (!isControlled) {
          setInternalChecked(next);
        }
        onToggle?.(next);
      }
      onClick?.(e);
    };

    const toggleClasses = [
      isChecked ? `${styles.toggleChecked} toggleChecked` : '',
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Button
        ref={ref}
        appearance={appearance}
        disabled={disabled}
        disabledFocusable={disabledFocusable}
        aria-pressed={isChecked}
        className={toggleClasses}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';

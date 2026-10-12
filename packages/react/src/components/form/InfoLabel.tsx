// packages/react/src/components/form/InfoLabel.tsx
import React, { forwardRef } from 'react';
import { InfoIcon } from '@winplaybox/icons';
import { Label, LabelProps } from './Label';
import { Tooltip } from '../overlay/Tooltip';

export interface InfoLabelProps extends LabelProps {
  /**
   * Explanatory contextual help content shown inside the tooltip.
   */
  info: React.ReactNode;
  /**
   * Tooltip placement.
   * @default 'top'
   */
  infoPlacement?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Optional custom info trigger element. Overrides the default InfoIcon button.
   */
  infoButton?: React.ReactNode;
  /**
   * Accessible aria-label for the info trigger button.
   */
  infoAriaLabel?: string;
}

const iconSizeMap: Record<string, number> = {
  small: 12,
  sm: 12,
  medium: 14,
  md: 14,
  large: 16,
  lg: 16,
};

/**
 * InfoLabel — High-level form control label conforming to Spectra UI specifications.
 * Pairs standard Label typography and required indicators with an authentic vector info trigger
 * launching an accessible contextual tooltip.
 */
export const InfoLabel = forwardRef<HTMLLabelElement, InfoLabelProps>(
  (
    {
      info,
      infoPlacement = 'top',
      infoButton,
      infoAriaLabel,
      htmlFor,
      required = false,
      size = 'medium',
      weight = 'semibold',
      disabled = false,
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const iconSize = iconSizeMap[size] || 14;
    const computedAriaLabel =
      infoAriaLabel ||
      (typeof children === 'string'
        ? `More information about ${children}`
        : 'More information');

    const defaultTrigger = (
      <button
        type="button"
        aria-label={computedAriaLabel}
        disabled={disabled}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          border: 'none',
          padding: 2,
          marginLeft: 2,
          borderRadius: 4,
          cursor: disabled ? 'not-allowed' : 'pointer',
          color: 'var(--color-action-primary, #007FFF)',
          outline: 'none',
          transition: 'color 0.12s ease, background-color 0.12s ease',
        }}
        onFocus={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-surface-hover, rgba(128, 128, 128, 0.12))';
        }}
        onBlur={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <InfoIcon size={iconSize} />
      </button>
    );

    const triggerElement = infoButton
      ? (infoButton as React.ReactElement)
      : defaultTrigger;

    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 2,
          lineHeight: 1,
        }}
      >
        <Label
          ref={ref}
          htmlFor={htmlFor}
          required={required}
          size={size}
          weight={weight}
          disabled={disabled}
          className={className}
          style={style}
          {...rest}
        >
          {children}
        </Label>

        {info && (
          <Tooltip content={info} placement={infoPlacement}>
            {triggerElement}
          </Tooltip>
        )}
      </span>
    );
  }
);

InfoLabel.displayName = 'InfoLabel';

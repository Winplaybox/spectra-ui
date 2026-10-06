// packages/react/src/components/actions/CopyButton.tsx
import React, { forwardRef } from 'react';
import { Button, ButtonVariant, ButtonSize, ButtonProps } from './Button';
import { useClipboard } from '@winplaybox/primitives';
import { CopyIcon, CheckIcon } from '@winplaybox/icons';

export interface CopyButtonProps extends Omit<ButtonProps, 'onClick'> {
  /**
   * Text value to be copied to system clipboard.
   */
  value: string;
  /**
   * Resting label text. Defaults to 'Copy'.
   */
  label?: string;
  /**
   * Feedback label text displayed when copied. Defaults to 'Copied!'.
   */
  copiedLabel?: string;
  /**
   * Timeout duration in milliseconds for feedback reset. Defaults to 2000ms.
   */
  timeout?: number;
  /**
   * Render icon only with accessible aria-label.
   */
  iconOnly?: boolean;
  /**
   * Callback fired upon successful copy operation.
   */
  onCopy?: (value: string) => void;
}

/**
 * CopyButton - Universal accessible clipboard trigger component for Spectra UI Web.
 * Automatically synchronizes with system clipboard and toggles feedback icon and label.
 */
export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      value,
      label = 'Copy',
      copiedLabel = 'Copied!',
      timeout = 2000,
      iconOnly = false,
      variant = 'secondary',
      size = 'md',
      onCopy,
      disabled = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const { copy, hasCopied } = useClipboard({ timeout });

    const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      const success = await copy(value);
      if (success && onCopy) {
        onCopy(value);
      }
    };

    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;
    const currentIcon = hasCopied ? (
      <CheckIcon size={iconSize} color="var(--color-feedback-success, #1fae7d)" />
    ) : (
      <CopyIcon size={iconSize} />
    );

    return (
      <Button
        ref={ref}
        variant={hasCopied ? 'primary' : variant}
        size={size}
        disabled={disabled}
        icon={currentIcon}
        onClick={handleCopy}
        aria-label={iconOnly ? (hasCopied ? copiedLabel : label) : undefined}
        title={iconOnly ? (hasCopied ? copiedLabel : label) : undefined}
        className={className}
        style={style}
        {...rest}
      >
        {!iconOnly && (hasCopied ? copiedLabel : label)}
      </Button>
    );
  }
);

CopyButton.displayName = 'CopyButton';

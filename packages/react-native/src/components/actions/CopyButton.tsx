import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { Button, NativeButtonVariant, NativeButtonSize } from './Button';
import { useClipboard } from '@winplaybox/primitives';
import { CopyIcon, CheckmarkDoneIcon } from '../data-display/Icon';

export interface NativeCopyButtonProps {
  /**
   * Text value to be copied to system clipboard.
   */
  value: string;
  /**
   * Resting button label. Defaults to 'Copy'.
   */
  label?: string;
  /**
   * Temporary feedback label when copied. Defaults to 'Copied!'.
   */
  copiedLabel?: string;
  /**
   * Visual style variant.
   */
  variant?: NativeButtonVariant;
  /**
   * Size scale.
   */
  size?: NativeButtonSize;
  /**
   * Timeout in ms for feedback state. Defaults to 2000ms.
   */
  timeout?: number;
  /**
   * Callback fired upon successful copy.
   */
  onCopy?: (value: string) => void;
  /**
   * Stretch button to 100% width.
   */
  fullWidth?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * CopyButton - Universal clipboard trigger component for Spectra UI Native.
 * Seamlessly interfaces with iOS, Android, and Desktop system clipboards.
 */
export const CopyButton: React.FC<NativeCopyButtonProps> = ({
  value,
  label = 'Copy',
  copiedLabel = 'Copied!',
  variant = 'secondary',
  size = 'md',
  timeout = 2000,
  onCopy,
  fullWidth = false,
  disabled = false,
  style,
}) => {
  const { copy, hasCopied } = useClipboard({ timeout });

  const handlePress = async () => {
    const success = await copy(value);
    if (success && onCopy) {
      onCopy(value);
    }
  };

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;
  const currentIcon = hasCopied ? (
    <CheckmarkDoneIcon size={iconSize} color="#1fae7d" />
  ) : (
    <CopyIcon size={iconSize} />
  );

  return (
    <Button
      variant={hasCopied ? 'primary' : variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      icon={currentIcon}
      onPress={handlePress}
      style={style}
    >
      {hasCopied ? copiedLabel : label}
    </Button>
  );
};

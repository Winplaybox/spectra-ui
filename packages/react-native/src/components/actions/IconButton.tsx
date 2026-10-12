// packages/react-native/src/components/actions/IconButton.tsx
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent,
  Platform,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export type NativeIconButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type NativeIconButtonSize = 'sm' | 'md' | 'lg';
export type NativeIconButtonShape = 'circle' | 'rounded' | 'square';

export interface NativeIconButtonProps {
  icon: React.ReactNode;
  accessibilityLabel: string;
  variant?: NativeIconButtonVariant;
  size?: NativeIconButtonSize;
  shape?: NativeIconButtonShape;
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}

/**
 * IconButton - High-precision native icon button adhering to Android 48dp and iOS 44pt touch targets.
 */
export const IconButton: React.FC<NativeIconButtonProps> = ({
  icon,
  accessibilityLabel,
  variant = 'secondary',
  size = 'md',
  shape = 'rounded',
  disabled = false,
  isLoading = false,
  onPress,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  // Platform standard dimensions
  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return Platform.OS === 'android' ? 48 : 36;
      case 'lg':
        return 56;
      case 'md':
      default:
        return Platform.OS === 'android' ? 48 : 44;
    }
  };

  const dim = getDimensions();

  const getBorderRadius = () => {
    if (shape === 'circle') return dim / 2;
    if (shape === 'square') return 0;
    return 8;
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: tokens['color-semantic-action-primary'],
          borderColor: tokens['color-semantic-action-primary'],
          borderWidth: 0,
        };
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        };
      case 'danger':
        return {
          backgroundColor: tokens['color-semantic-feedback-error'],
          borderColor: tokens['color-semantic-feedback-error'],
          borderWidth: 0,
        };
      case 'secondary':
      default:
        return {
          backgroundColor: tokens['color-semantic-surface-raised'],
          borderColor: tokens['color-semantic-border-default'],
          borderWidth: 1,
        };
    }
  };

  const variantStyle = getVariantStyles();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: disabled || isLoading, busy: isLoading }}
      activeOpacity={0.7}
      disabled={disabled || isLoading}
      onPress={onPress}
      hitSlop={size === 'sm' && Platform.OS === 'ios' ? { top: 4, bottom: 4, left: 4, right: 4 } : undefined}
      style={[
        styles.base,
        {
          width: dim,
          height: dim,
          borderRadius: getBorderRadius(),
          backgroundColor: variantStyle.backgroundColor,
          borderColor: variantStyle.borderColor,
          borderWidth: variantStyle.borderWidth,
          opacity: disabled ? 0.45 : 1,
        },
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' || variant === 'danger' ? '#FFFFFF' : tokens['color-semantic-text-primary']}
        />
      ) : (
        icon
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

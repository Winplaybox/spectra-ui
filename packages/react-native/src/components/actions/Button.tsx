import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  GestureResponderEvent,
} from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export type NativeButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type NativeButtonSize = 'sm' | 'md' | 'lg';

export interface NativeButtonProps {
  children?: React.ReactNode;
  variant?: NativeButtonVariant;
  size?: NativeButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onPress?: (event: GestureResponderEvent) => void;
  style?: any;
}

export const Button: React.FC<NativeButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onPress,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: tokens['color-semantic-surface-raised'],
          borderColor: tokens['color-semantic-border-default'],
          textColor: tokens['color-semantic-text-primary'],
        };
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          textColor: tokens['color-semantic-action-primary'],
        };
      case 'danger':
        return {
          backgroundColor: tokens['color-semantic-feedback-error'],
          borderColor: tokens['color-semantic-feedback-error'],
          textColor: tokens['color-semantic-text-inverse'],
        };
      case 'primary':
      default:
        return {
          backgroundColor: tokens['color-semantic-action-primary'],
          borderColor: tokens['color-semantic-action-primary'],
          textColor: tokens['color-semantic-text-inverse'],
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { paddingVertical: 6, paddingHorizontal: 12, fontSize: 12 };
      case 'lg':
        return { paddingVertical: 14, paddingHorizontal: 24, fontSize: 16 };
      case 'md':
      default:
        return { paddingVertical: 10, paddingHorizontal: 16, fontSize: 14 };
    }
  };

  const variantStyle = getVariantStyles();
  const sizeStyle = getSizeStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || isLoading}
      onPress={onPress}
      style={[
        styles.base,
        {
          backgroundColor: variantStyle.backgroundColor,
          borderColor: variantStyle.borderColor,
          paddingVertical: sizeStyle.paddingVertical,
          paddingHorizontal: sizeStyle.paddingHorizontal,
          width: fullWidth ? '100%' : 'auto',
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={variantStyle.textColor}
          style={styles.spinner}
        />
      )}
      {icon && iconPosition === 'left' && <View style={styles.iconLeft}>{icon}</View>}
      <Text
        style={[
          styles.text,
          {
            color: variantStyle.textColor,
            fontSize: sizeStyle.fontSize,
          },
        ]}
      >
        {children}
      </Text>
      {icon && iconPosition === 'right' && <View style={styles.iconRight}>{icon}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    fontWeight: '600',
  },
  spinner: {
    marginRight: 8,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

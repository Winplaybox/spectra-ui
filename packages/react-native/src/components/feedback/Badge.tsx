import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export type NativeBadgeVariant = 'solid' | 'subtle' | 'outline';
export type NativeBadgeColorScheme = 'primary' | 'neutral' | 'success' | 'warning' | 'error';
export type NativeBadgeSize = 'sm' | 'md';

export interface NativeBadgeProps {
  children?: React.ReactNode;
  variant?: NativeBadgeVariant;
  colorScheme?: NativeBadgeColorScheme;
  size?: NativeBadgeSize;
  dot?: boolean;
  testID?: string;
  style?: ViewStyle;
}

export const Badge: React.FC<NativeBadgeProps> = ({
  children,
  variant = 'solid',
  colorScheme = 'primary',
  size = 'md',
  dot = false,
  testID,
  style,
}) => {
  const { colorScheme: themeScheme } = useTheme();
  const tokens = getTokens(themeScheme);

  const getColorTheme = () => {
    switch (colorScheme) {
      case 'neutral':
        return {
          main: tokens['color-semantic-text-secondary'],
          bg: tokens['color-semantic-surface-raised'],
          border: tokens['color-semantic-border-default'],
          textOnSolid: tokens['color-semantic-text-primary'],
        };
      case 'success':
        return {
          main: tokens['color-semantic-feedback-success'],
          bg: tokens['color-semantic-surface-raised'],
          border: tokens['color-semantic-feedback-success'],
          textOnSolid: tokens['color-semantic-text-inverse'],
        };
      case 'warning':
        return {
          main: tokens['color-semantic-feedback-warning'],
          bg: tokens['color-semantic-surface-raised'],
          border: tokens['color-semantic-feedback-warning'],
          textOnSolid: tokens['color-semantic-text-inverse'],
        };
      case 'error':
        return {
          main: tokens['color-semantic-feedback-error'],
          bg: tokens['color-semantic-surface-raised'],
          border: tokens['color-semantic-feedback-error'],
          textOnSolid: tokens['color-semantic-text-inverse'],
        };
      case 'primary':
      default:
        return {
          main: tokens['color-semantic-action-primary'],
          bg: tokens['color-semantic-surface-raised'],
          border: tokens['color-semantic-action-primary'],
          textOnSolid: tokens['color-semantic-text-inverse'],
        };
    }
  };

  const themeColors = getColorTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'subtle':
        return {
          backgroundColor: themeColors.bg,
          borderColor: 'transparent',
          textColor: themeColors.main,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderColor: themeColors.border,
          textColor: themeColors.main,
        };
      case 'solid':
      default:
        return {
          backgroundColor: colorScheme === 'neutral' ? themeColors.bg : themeColors.main,
          borderColor: themeColors.border,
          textColor: colorScheme === 'neutral' ? themeColors.textOnSolid : tokens['color-semantic-text-inverse'],
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { paddingVertical: 2, paddingHorizontal: 6, fontSize: 11, dotSize: 5 };
      case 'md':
      default:
        return { paddingVertical: 4, paddingHorizontal: 8, fontSize: 12, dotSize: 6 };
    }
  };

  const variantStyle = getVariantStyles();
  const sizeStyle = getSizeStyles();

  return (
    <View
      testID={testID}
      style={[
        styles.badge,
        {
          backgroundColor: variantStyle.backgroundColor,
          borderColor: variantStyle.borderColor,
          paddingVertical: sizeStyle.paddingVertical,
          paddingHorizontal: sizeStyle.paddingHorizontal,
        },
        style,
      ]}
    >
      {dot && (
        <View
          style={[
            styles.dot,
            {
              width: sizeStyle.dotSize,
              height: sizeStyle.dotSize,
              borderRadius: sizeStyle.dotSize / 2,
              backgroundColor: variantStyle.textColor,
            },
          ]}
        />
      )}
      {typeof children === 'string' ? (
        <Text
          style={[
            styles.text,
            {
              fontSize: sizeStyle.fontSize,
              color: variantStyle.textColor,
            },
          ]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    borderRadius: 4,
    borderWidth: 1,
  },
  dot: {
    marginRight: 5,
  },
  text: {
    fontWeight: '600',
  },
});

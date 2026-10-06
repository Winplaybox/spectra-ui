import React from 'react';
import { View, ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export type BoxPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
export type BoxRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | number;
export type BoxBg = 'default' | 'raised' | 'elevated' | 'sunken' | 'overlay' | 'subtle' | 'transparent' | string;

export interface NativeBoxProps extends Omit<ViewProps, 'style'> {
  children?: React.ReactNode;
  padding?: BoxPadding;
  paddingHorizontal?: BoxPadding;
  paddingVertical?: BoxPadding;
  margin?: BoxPadding;
  marginHorizontal?: BoxPadding;
  marginVertical?: BoxPadding;
  bg?: BoxBg;
  radius?: BoxRadius;
  border?: boolean;
  borderColor?: 'default' | 'subtle' | 'strong' | string;
  borderWidth?: number;
  flex?: number;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: number;
  style?: StyleProp<ViewStyle>;
}

const resolveSpacing = (val?: BoxPadding): number | undefined => {
  if (val === undefined) return undefined;
  if (typeof val === 'number') return val;
  switch (val) {
    case 'none':
      return 0;
    case 'xs':
      return 4;
    case 'sm':
      return 8;
    case 'lg':
      return 24;
    case 'xl':
      return 32;
    case 'md':
    default:
      return 16;
  }
};

const resolveRadius = (val?: BoxRadius): number | undefined => {
  if (val === undefined) return undefined;
  if (typeof val === 'number') return val;
  switch (val) {
    case 'none':
      return 0;
    case 'xs':
      return 4;
    case 'sm':
      return 6;
    case 'lg':
      return 12;
    case 'xl':
      return 16;
    case 'full':
      return 9999;
    case 'md':
    default:
      return 8;
  }
};

/**
 * Box - Fundamental token-aware layout and surface primitive for Spectra UI Native.
 * Provides direct ergonomic access to design tokens without writing manual StyleSheets.
 */
export const Box: React.FC<NativeBoxProps> = ({
  children,
  padding,
  paddingHorizontal,
  paddingVertical,
  margin,
  marginHorizontal,
  marginVertical,
  bg,
  radius,
  border = false,
  borderColor = 'default',
  borderWidth = 1,
  flex,
  direction,
  align,
  justify,
  gap,
  style,
  ...rest
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const resolveBgColor = (): string | undefined => {
    if (!bg) return undefined;
    switch (bg) {
      case 'default':
        return tokens['color-semantic-surface'] || '#ffffff';
      case 'raised':
        return tokens['color-semantic-surface-raised'] || '#ffffff';
      case 'elevated':
        return tokens['color-semantic-surface-elevated'] || '#f3f4f6';
      case 'sunken':
        return tokens['color-semantic-surface-sunken'] || '#f8f9fa';
      case 'overlay':
        return tokens['color-semantic-surface-overlay'] || 'rgba(255, 255, 255, 0.95)';
      case 'subtle':
        return tokens['color-semantic-action-secondary'] || '#f3f4f6';
      case 'transparent':
        return 'transparent';
      default:
        return bg;
    }
  };

  const resolveBorderColor = (): string => {
    switch (borderColor) {
      case 'subtle':
        return tokens['color-semantic-border-subtle'] || '#f5f5f5';
      case 'strong':
        return tokens['color-semantic-border-strong'] || '#e5e7eb';
      case 'default':
      default:
        return tokens['color-semantic-border-default'] || '#f0f0f0';
    }
  };

  const computedStyle: ViewStyle = {
    ...(padding !== undefined && { padding: resolveSpacing(padding) }),
    ...(paddingHorizontal !== undefined && { paddingHorizontal: resolveSpacing(paddingHorizontal) }),
    ...(paddingVertical !== undefined && { paddingVertical: resolveSpacing(paddingVertical) }),
    ...(margin !== undefined && { margin: resolveSpacing(margin) }),
    ...(marginHorizontal !== undefined && { marginHorizontal: resolveSpacing(marginHorizontal) }),
    ...(marginVertical !== undefined && { marginVertical: resolveSpacing(marginVertical) }),
    ...(bg !== undefined && { backgroundColor: resolveBgColor() }),
    ...(radius !== undefined && { borderRadius: resolveRadius(radius) }),
    ...(border && {
      borderWidth,
      borderColor: resolveBorderColor(),
    }),
    ...(flex !== undefined && { flex }),
    ...(direction !== undefined && { flexDirection: direction }),
    ...(align !== undefined && { alignItems: align }),
    ...(justify !== undefined && { justifyContent: justify }),
    ...(gap !== undefined && { gap }),
  };

  return (
    <View style={[computedStyle, style]} {...rest}>
      {children}
    </View>
  );
};

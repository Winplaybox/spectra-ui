import React from 'react';
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  PressableStateCallbackType,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';
import { BoxRadius, BoxPadding } from '../layout/Box';

export interface NativePressableProps extends Omit<RNPressableProps, 'style'> {
  children?: React.ReactNode | ((state: PressableStateCallbackType) => React.ReactNode);
  variant?: 'default' | 'subtle' | 'raised' | 'bordered';
  radius?: BoxRadius;
  padding?: BoxPadding;
  feedback?: 'opacity' | 'none';
  activeOpacity?: number;
  style?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
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
 * Pressable - Token-aware interactive surface component for Spectra UI Native.
 * Features customizable active states, touch feedback, and seamless theme integration.
 */
export const Pressable: React.FC<NativePressableProps> = ({
  children,
  variant = 'default',
  radius,
  padding,
  feedback = 'opacity',
  activeOpacity = 0.7,
  disabled,
  style,
  ...rest
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const resolveVariantStyle = (): ViewStyle => {
    switch (variant) {
      case 'subtle':
        return {
          backgroundColor: tokens['color-semantic-action-secondary'] || '#f3f4f6',
        };
      case 'raised':
        return {
          backgroundColor: tokens['color-semantic-surface-raised'] || '#ffffff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.08,
          shadowRadius: 3,
          elevation: 2,
        };
      case 'bordered':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: tokens['color-semantic-border-default'] || '#f0f0f0',
        };
      case 'default':
      default:
        return {};
    }
  };

  return (
    <RNPressable
      disabled={disabled}
      style={(state) => {
        const baseStyle: ViewStyle = {
          ...resolveVariantStyle(),
          ...(radius !== undefined && { borderRadius: resolveRadius(radius) }),
          ...(padding !== undefined && { padding: resolveSpacing(padding) }),
          ...(disabled && { opacity: 0.5 }),
          ...(state.pressed && feedback === 'opacity' && !disabled && { opacity: activeOpacity }),
        };

        const userStyle = typeof style === 'function' ? style(state) : style;
        return [baseStyle, userStyle];
      }}
      {...rest}
    >
      {typeof children === 'function' ? (state) => children(state) : children}
    </RNPressable>
  );
};

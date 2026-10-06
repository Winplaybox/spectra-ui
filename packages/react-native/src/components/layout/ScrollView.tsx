import React from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';
import { BoxPadding, BoxBg } from './Box';

export interface NativeScrollViewProps extends RNScrollViewProps {
  children?: React.ReactNode;
  padding?: BoxPadding;
  paddingHorizontal?: BoxPadding;
  paddingVertical?: BoxPadding;
  bg?: BoxBg;
  contentContainerStyle?: StyleProp<ViewStyle>;
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

/**
 * ScrollView - Design-token aware scrolling surface for Spectra UI Native.
 * Automatically respects theme surfaces and standardizes content spacing.
 */
export const ScrollView = React.forwardRef<any, NativeScrollViewProps>(
  (
    {
      children,
      padding,
      paddingHorizontal,
      paddingVertical,
      bg,
      contentContainerStyle,
      style,
      ...rest
    },
    ref
  ) => {
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

    const containerSpacingStyle: ViewStyle = {
      ...(padding !== undefined && { padding: resolveSpacing(padding) }),
      ...(paddingHorizontal !== undefined && { paddingHorizontal: resolveSpacing(paddingHorizontal) }),
      ...(paddingVertical !== undefined && { paddingVertical: resolveSpacing(paddingVertical) }),
    };

    const rootStyle: ViewStyle = {
      ...(bg !== undefined && { backgroundColor: resolveBgColor() }),
    };

    return (
      <RNScrollView
        ref={ref}
        style={[rootStyle, style]}
        contentContainerStyle={[containerSpacingStyle, contentContainerStyle]}
        {...rest}
      >
        {children}
      </RNScrollView>
    );
  }
);

ScrollView.displayName = 'ScrollView';

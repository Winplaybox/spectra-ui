import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export type NativeSkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export interface NativeSkeletonProps {
  variant?: NativeSkeletonVariant;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: ViewStyle;
}

export const Skeleton: React.FC<NativeSkeletonProps> = ({
  variant = 'text',
  width,
  height,
  borderRadius,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const opacityAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.7,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.3,
          duration: 750,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [opacityAnim]);

  const defaultHeight = variant === 'text' ? 14 : variant === 'circular' ? (typeof width === 'number' ? width : 40) : 100;
  const defaultWidth = variant === 'circular' ? (typeof height === 'number' ? height : 40) : '100%';
  const defaultRadius = variant === 'circular' ? 999 : variant === 'rounded' ? 8 : variant === 'rectangular' ? 0 : 4;

  return (
    <Animated.View
      accessibilityElementsHidden={true}
      importantForAccessibility="no"
      style={[
        {
          width: width !== undefined ? width : defaultWidth,
          height: height !== undefined ? height : defaultHeight,
          borderRadius: borderRadius !== undefined ? borderRadius : defaultRadius,
          backgroundColor: tokens['color-semantic-surface-raised'],
          opacity: opacityAnim,
          marginVertical: variant === 'text' ? 4 : 0,
        },
        style,
      ]}
    />
  );
};

import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing, ViewStyle } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export type NativeSpinnerSize = 'sm' | 'md' | 'lg';

export interface NativeSpinnerProps {
  size?: NativeSpinnerSize;
  color?: string;
  style?: ViewStyle;
}

export const Spinner: React.FC<NativeSpinnerProps> = ({
  size = 'md',
  color,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    animation.start();
    return () => animation.stop();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const dimension = size === 'sm' ? 18 : size === 'lg' ? 36 : 24;
  const stroke = size === 'sm' ? 2 : size === 'lg' ? 4 : 3;
  const activeColor = color || tokens['color-semantic-action-primary'];

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel="Loading"
      style={[{ width: dimension, height: dimension }, style]}
    >
      <Animated.View
        style={[
          styles.spinner,
          {
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            borderWidth: stroke,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderTopColor: activeColor,
            transform: [{ rotate: spin }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

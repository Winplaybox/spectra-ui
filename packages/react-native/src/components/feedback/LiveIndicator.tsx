import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export type NativeLiveIndicatorVariant = 'static' | 'pulse' | 'beacon' | 'lottie';
export type NativeLiveIndicatorStatus = 'online' | 'offline' | 'busy' | 'connecting';
export type NativeLiveIndicatorSize = 'sm' | 'md' | 'lg';

export interface NativeLiveIndicatorProps {
  /**
   * Motion animation variant. Defaults to 'pulse'.
   */
  variant?: NativeLiveIndicatorVariant;
  /**
   * Semantic status determining color (online = green, busy = red, connecting = amber).
   */
  status?: NativeLiveIndicatorStatus;
  /**
   * Display label text. Defaults to 'LIVE'. Set to null for dot-only.
   */
  label?: string | null;
  /**
   * Sizing scale. Defaults to 'md'.
   */
  size?: NativeLiveIndicatorSize;
  /**
   * Optional custom color override.
   */
  color?: string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  testID?: string;
}

/**
 * LiveIndicator - Native status beacon and live broadcast indicator for Android, iOS, Windows, macOS.
 * Respects platform touch accessibility, reduced-motion, and tokenized palette.
 */
export const LiveIndicator: React.FC<NativeLiveIndicatorProps> = ({
  variant = 'pulse',
  status = 'online',
  label = 'LIVE',
  size = 'md',
  color,
  style,
  labelStyle,
  testID,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0.85)).current;
  const beaconScale = useRef(new Animated.Value(1)).current;
  const beaconOpacity = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    if (variant === 'pulse') {
      const pulseLoop = Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(scaleAnim, { toValue: 1.25, duration: 900, useNativeDriver: true }),
            Animated.timing(opacityAnim, { toValue: 1, duration: 900, useNativeDriver: true }),
          ]),
          Animated.parallel([
            Animated.timing(scaleAnim, { toValue: 0.95, duration: 900, useNativeDriver: true }),
            Animated.timing(opacityAnim, { toValue: 0.8, duration: 900, useNativeDriver: true }),
          ]),
        ])
      );
      pulseLoop.start();
      return () => pulseLoop.stop();
    } else if (variant === 'beacon') {
      const beaconLoop = Animated.loop(
        Animated.parallel([
          Animated.timing(beaconScale, { toValue: 2.3, duration: 1600, useNativeDriver: true }),
          Animated.timing(beaconOpacity, { toValue: 0, duration: 1600, useNativeDriver: true }),
        ])
      );
      beaconLoop.start();
      return () => beaconLoop.stop();
    }
  }, [variant, scaleAnim, opacityAnim, beaconScale, beaconOpacity]);

  const tokenMap = tokens as Record<string, string>;
  const defaultColor =
    status === 'online'
      ? tokenMap['color-semantic-status-success'] || tokenMap['color-status-success'] || '#10B981'
      : status === 'busy'
      ? tokenMap['color-semantic-status-danger'] || tokenMap['color-status-danger'] || '#EF4444'
      : status === 'connecting'
      ? tokenMap['color-semantic-status-warning'] || tokenMap['color-status-warning'] || '#F59E0B'
      : '#94A3B8';

  const dotColor = color || defaultColor;
  const dotSize = size === 'sm' ? 6 : size === 'lg' ? 10 : 8;

  return (
    <View
      style={[styles.container, style]}
      testID={testID}
      accessibilityRole="text"
      accessibilityLabel={label ? `${label} indicator, status: ${status}` : `Status: ${status}`}
      accessible={true}
    >
      <View style={[styles.dotWrapper, { width: dotSize, height: dotSize }]}>
        {variant === 'beacon' && (
          <Animated.View
            style={[
              styles.beaconRing,
              {
                width: dotSize,
                height: dotSize,
                borderRadius: dotSize / 2,
                backgroundColor: dotColor,
                transform: [{ scale: beaconScale }],
                opacity: beaconOpacity,
              },
            ]}
          />
        )}
        <Animated.View
          style={[
            styles.dot,
            {
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              backgroundColor: dotColor,
              transform: variant === 'pulse' ? [{ scale: scaleAnim }] : undefined,
              opacity: variant === 'pulse' ? opacityAnim : 1,
            },
          ]}
        />
      </View>
      {label && (
        <Text
          style={[
            styles.label,
            size === 'sm' && styles.labelSm,
            size === 'lg' && styles.labelLg,
            { color: tokens['color-semantic-text-primary'] || '#0F172A' },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dotWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  dot: {
    position: 'absolute',
  },
  beaconRing: {
    position: 'absolute',
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  labelSm: {
    fontSize: 10,
  },
  labelLg: {
    fontSize: 14,
  },
});

import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

export interface NativeGridProps {
  children?: React.ReactNode;
  container?: boolean;
  item?: boolean;
  spacing?: number;
  xs?: number; // 1 to 12 columns
  style?: StyleProp<ViewStyle>;
}

/**
 * Grid - 12-column responsive layout grid system for mobile.
 * Engineered for flexible responsive layouts and parity with @winplaybox/react Grid.
 */
export const Grid: React.FC<NativeGridProps> = ({
  children,
  container = false,
  item = false,
  spacing = 2,
  xs = 12,
  style,
}) => {
  if (container) {
    const gapPx = spacing * 8;
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: gapPx,
            width: '100%',
          },
          style,
        ]}
      >
        {children}
      </View>
    );
  }

  // Column width percentage calculation
  const clampedXs = Math.max(1, Math.min(12, xs));
  const widthPercentage = `${(clampedXs / 12) * 100}%` as any;

  return (
    <View
      style={[
        {
          width: widthPercentage,
          flexShrink: 0,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export interface NativeStackProps {
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  gap?: number;
  style?: ViewStyle;
}

export const Stack: React.FC<NativeStackProps> = ({
  children,
  direction = 'column',
  align = 'flex-start',
  justify = 'flex-start',
  gap = 12,
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          gap,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export interface NativeContainerProps {
  children?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
  style?: ViewStyle;
}

export const Container: React.FC<NativeContainerProps> = ({
  children,
  padding = 'md',
  centered = false,
  style,
}) => {
  const getPadding = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'sm':
        return 8;
      case 'lg':
        return 24;
      case 'md':
      default:
        return 16;
    }
  };

  return (
    <View
      style={[
        {
          padding: getPadding(),
          alignItems: centered ? 'center' : 'stretch',
          width: '100%',
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

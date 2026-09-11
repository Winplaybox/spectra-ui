import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeDividerProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export const Divider: React.FC<NativeDividerProps> = ({
  orientation = 'horizontal',
  label,
  children,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const borderColor = tokens['color-semantic-border-default'];
  const text = label || children;

  if (text && orientation === 'horizontal') {
    return (
      <View style={[styles.textRow, style]}>
        <View style={[styles.line, { backgroundColor: borderColor }]} />
        <Text style={[styles.label, { color: tokens['color-semantic-text-secondary'] }]}>
          {text}
        </Text>
        <View style={[styles.line, { backgroundColor: borderColor }]} />
      </View>
    );
  }

  return (
    <View
      style={[
        orientation === 'horizontal'
          ? { height: StyleSheet.hairlineWidth, width: '100%', backgroundColor: borderColor }
          : { width: StyleSheet.hairlineWidth, height: '100%', backgroundColor: borderColor },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  label: {
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

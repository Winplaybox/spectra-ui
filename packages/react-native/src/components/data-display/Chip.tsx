import React from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeChipProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md';
  selected?: boolean;
  onPress?: () => void;
  onDelete?: () => void;
  style?: ViewStyle;
}

export const Chip: React.FC<NativeChipProps> = ({
  label,
  variant = 'filled',
  size = 'md',
  selected = false,
  onPress,
  onDelete,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const isClickable = !!onPress;

  const content = (
    <View
      style={[
        styles.chip,
        {
          backgroundColor: selected
            ? 'rgba(56, 189, 248, 0.15)'
            : tokens['color-semantic-surface-raised'],
          borderColor: selected
            ? tokens['color-semantic-action-primary']
            : tokens['color-semantic-border-default'],
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: selected
              ? tokens['color-semantic-action-primary']
              : tokens['color-semantic-text-primary'],
          },
        ]}
      >
        {label}
      </Text>
      {onDelete && (
        <Pressable
          accessibilityLabel="Delete"
          accessibilityRole="button"
          onPress={onDelete}
          hitSlop={6}
          style={styles.deleteBtn}
        >
          <Text
            style={{
              color: selected
                ? tokens['color-semantic-action-primary']
                : tokens['color-semantic-text-secondary'],
              fontSize: 12,
              fontWeight: '700',
            }}
          >
            ✕
          </Text>
        </Pressable>
      )}
    </View>
  );

  if (isClickable) {
    return (
      <Pressable accessibilityRole="button" onPress={onPress}>
        {content}
      </Pressable>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 6,
    marginBottom: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
  },
  deleteBtn: {
    marginLeft: 6,
    padding: 2,
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme, useControllableState } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeSwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export const Switch: React.FC<NativeSwitchProps> = ({
  checked: checkedProp,
  defaultChecked = false,
  onChange,
  label,
  description,
  disabled = false,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const [checked, setChecked] = useControllableState({
    value: checkedProp,
    defaultValue: defaultChecked,
    onChange,
  });

  const toggle = () => {
    if (disabled) return;
    setChecked(!checked);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggle}
      disabled={disabled}
      style={styles.container}
    >
      <View
        style={[
          styles.track,
          {
            backgroundColor: checked
              ? tokens['color-semantic-action-primary']
              : tokens['color-semantic-border-default'],
            opacity: disabled ? 0.5 : 1,
          },
        ]}
      >
        <View
          style={[
            styles.thumb,
            {
              backgroundColor: tokens['color-semantic-text-inverse'],
              transform: [{ translateX: checked ? 20 : 0 }],
            },
          ]}
        />
      </View>

      {(label || description) && (
        <View style={styles.textContainer}>
          {label && (
            <Text style={[styles.label, { color: tokens['color-semantic-text-primary'] }]}>
              {label}
            </Text>
          )}
          {description && (
            <Text style={[styles.description, { color: tokens['color-semantic-text-muted'] }]}>
              {description}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  track: {
    width: 48,
    height: 28,
    borderRadius: 14,
    padding: 2,
    justifyContent: 'center',
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  textContainer: {
    marginLeft: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    marginTop: 2,
  },
});

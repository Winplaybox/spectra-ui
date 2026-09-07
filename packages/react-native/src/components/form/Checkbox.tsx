import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import { useTheme, useControllableState } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode | string;
  description?: React.ReactNode | string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  testID?: string;
  style?: ViewStyle;
}

export const Checkbox: React.FC<NativeCheckboxProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  indeterminate = false,
  onChange,
  label,
  description,
  error,
  size = 'md',
  disabled = false,
  testID,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const [isChecked, setIsChecked] = useControllableState({
    value: controlledChecked,
    defaultValue: defaultChecked,
    onChange,
  });

  const handlePress = (_e: GestureResponderEvent) => {
    if (disabled) return;
    setIsChecked(!isChecked);
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { boxSize: 16, radius: 3, fontSize: 12, checkSize: 10 };
      case 'lg':
        return { boxSize: 24, radius: 5, fontSize: 16, checkSize: 14 };
      case 'md':
      default:
        return { boxSize: 20, radius: 4, fontSize: 14, checkSize: 12 };
    }
  };

  const sizeStyle = getSizeStyles();
  const isActive = isChecked || indeterminate;

  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={handlePress}
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: indeterminate ? 'mixed' : isChecked,
        disabled,
      }}
      style={[
        styles.container,
        { opacity: disabled ? 0.5 : 1 },
        style,
      ]}
    >
      <View
        style={[
          styles.box,
          {
            width: sizeStyle.boxSize,
            height: sizeStyle.boxSize,
            borderRadius: sizeStyle.radius,
            borderColor: error
              ? tokens['color-semantic-feedback-error']
              : isActive
              ? tokens['color-semantic-action-primary']
              : tokens['color-semantic-border-default'],
            backgroundColor: isActive
              ? tokens['color-semantic-action-primary']
              : tokens['color-semantic-surface-raised'],
          },
        ]}
      >
        {indeterminate && (
          <View
            style={[
              styles.indeterminateBar,
              {
                width: sizeStyle.checkSize,
                backgroundColor: tokens['color-semantic-text-inverse'],
              },
            ]}
          />
        )}
        {!indeterminate && isChecked && (
          <Text
            style={[
              styles.checkIcon,
              {
                fontSize: sizeStyle.checkSize,
                color: tokens['color-semantic-text-inverse'],
              },
            ]}
          >
            ✓
          </Text>
        )}
      </View>

      {(label || description || error) && (
        <View style={styles.textWrapper}>
          {typeof label === 'string' ? (
            <Text
              style={[
                styles.label,
                {
                  fontSize: sizeStyle.fontSize,
                  color: tokens['color-semantic-text-primary'],
                },
              ]}
            >
              {label}
            </Text>
          ) : (
            label
          )}
          {typeof description === 'string' ? (
            <Text
              style={[
                styles.description,
                { color: tokens['color-semantic-text-muted'] },
              ]}
            >
              {description}
            </Text>
          ) : (
            description
          )}
          {error && (
            <Text
              style={[
                styles.error,
                { color: tokens['color-semantic-feedback-error'] },
              ]}
            >
              {error}
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
    alignItems: 'flex-start',
    marginVertical: 4,
  },
  box: {
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkIcon: {
    fontWeight: '800',
    lineHeight: 14,
    textAlign: 'center',
  },
  indeterminateBar: {
    height: 2,
    borderRadius: 1,
  },
  textWrapper: {
    marginLeft: 10,
    flex: 1,
  },
  label: {
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    marginTop: 2,
  },
  error: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '500',
  },
});

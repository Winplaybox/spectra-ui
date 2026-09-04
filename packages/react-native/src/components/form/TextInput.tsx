import React from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { useTheme, useFormField } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeTextInputProps extends RNTextInputProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const TextInput: React.FC<NativeTextInputProps> = ({
  label,
  description,
  error,
  required = false,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const { hasError, errorText } = useFormField({ label, description, error, required });

  return (
    <View style={styles.wrapper}>
      {label && (
        <View style={styles.labelRow}>
          <Text style={[styles.label, { color: tokens['color-semantic-text-primary'] }]}>
            {label}
          </Text>
          {required && (
            <Text style={{ color: tokens['color-semantic-feedback-error'], marginLeft: 4 }}>*</Text>
          )}
        </View>
      )}

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: tokens['color-semantic-surface'],
            borderColor: hasError
              ? tokens['color-semantic-feedback-error']
              : tokens['color-semantic-border-default'],
          },
        ]}
      >
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        <RNTextInput
          placeholderTextColor={tokens['color-semantic-text-muted']}
          style={[
            styles.input,
            {
              color: tokens['color-semantic-text-primary'],
            },
            style,
          ]}
          {...props}
        />
        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>

      {description && !hasError && (
        <Text style={[styles.helper, { color: tokens['color-semantic-text-muted'] }]}>
          {description}
        </Text>
      )}

      {hasError && errorText && (
        <Text style={[styles.helper, { color: tokens['color-semantic-feedback-error'] }]}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 12,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  helper: {
    fontSize: 12,
    marginTop: 4,
  },
});

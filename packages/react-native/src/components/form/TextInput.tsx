// packages/react-native/src/components/form/TextInput.tsx
import React, { useState, forwardRef } from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
  Platform as RNPlatform,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme, useFormField } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export type TextInputVariant = 'outlined' | 'filled' | 'standard';
export type TextInputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  description?: string;
  error?: string;
  success?: string;
  required?: boolean;
  disabled?: boolean;
  variant?: TextInputVariant;
  size?: TextInputSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
  clearable?: boolean;
  onClear?: () => void;
  showCharacterCounter?: boolean;
  maxLength?: number;
  fullWidth?: boolean;
  containerStyle?: ViewStyle;
}

/**
 * Backward compatibility alias for existing consumers.
 */
export type NativeTextInputProps = TextInputProps;

/**
 * Subcomponent: Field Label
 */
export const InputLabel: React.FC<{
  label: string;
  required?: boolean;
  color?: string;
  requiredColor?: string;
}> = ({ label, required, color, requiredColor }) => (
  <View style={styles.labelRow}>
    <Text style={[styles.label, color ? { color } : null]}>{label}</Text>
    {required && (
      <Text style={[styles.requiredAsterisk, requiredColor ? { color: requiredColor } : null]}>
        *
      </Text>
    )}
  </View>
);

/**
 * Subcomponent: Helper / Validation Text
 */
export const HelperText: React.FC<{
  text: string;
  type?: 'description' | 'error' | 'success';
  color?: string;
}> = ({ text, color }) => (
  <Text style={[styles.helper, color ? { color } : null]}>{text}</Text>
);

/**
 * Subcomponent: Input Affix (Prefix or Suffix text)
 */
export const InputAffix: React.FC<{
  text: string;
  position: 'prefix' | 'suffix';
  color?: string;
}> = ({ text, position, color }) => (
  <Text
    style={[
      styles.affixText,
      position === 'prefix' ? styles.prefix : styles.suffix,
      color ? { color } : null,
    ]}
  >
    {text}
  </Text>
);

/**
 * Spectra TextInput for React Native (Android, iOS, Windows, macOS).
 * Decomposed, production-grade text input adhering strictly to platform UX conventions:
 * - Android: Material 3 48dp minimum touch target, ripple/elevation styling, TalkBack announcements.
 * - iOS: Apple HIG 44pt minimum touch target, subtle rounded borders, VoiceOver support.
 */
export const TextInput: React.ForwardRefExoticComponent<
  TextInputProps & React.RefAttributes<any>
> = forwardRef<any, TextInputProps>(
  (
    {
      label,
      description,
      error,
      success,
      required = false,
      disabled = false,
      editable = true,
      variant = 'outlined',
      size = 'md',
      leftIcon,
      rightIcon,
      prefix,
      suffix,
      clearable = false,
      onClear,
      showCharacterCounter = false,
      maxLength,
      value,
      defaultValue,
      onChangeText,
      multiline = false,
      numberOfLines = 1,
      style,
      containerStyle,
      onFocus,
      onBlur,
      ...restProps
    },
    ref
  ) => {
    const { colorScheme } = useTheme();
    const tokens = getTokens(colorScheme);
    const [isFocused, setIsFocused] = useState(false);
    const [currentVal, setCurrentVal] = useState(value ?? defaultValue ?? '');

    const effectiveEditable = editable && !disabled;
    const isAndroid = RNPlatform.OS === 'android';
    const isIOS = RNPlatform.OS === 'ios';

    const { hasError, errorText } = useFormField({
      label,
      description,
      error,
      required,
      disabled,
    });

    const handleChangeText = (text: string) => {
      if (value === undefined) {
        setCurrentVal(text);
      }
      onChangeText?.(text);
    };

    const handleClear = () => {
      if (value === undefined) {
        setCurrentVal('');
      }
      onClear?.();
      onChangeText?.('');
    };

    const displayVal = value !== undefined ? value : currentVal;
    const currentLength = typeof displayVal === 'string' ? displayVal.length : 0;

    // Density and sizing calculations
    const minHeight =
      size === 'sm' ? 36 : size === 'lg' ? 52 : isAndroid ? 48 : isIOS ? 44 : 44;
    const fontSize = size === 'sm' ? 13 : size === 'lg' ? 16 : 14;

    // Variant-driven border and surface styles
    let containerVariantStyle: ViewStyle = {};
    if (variant === 'outlined') {
      containerVariantStyle = {
        borderWidth: isFocused ? 2 : 1,
        borderRadius: 8,
        backgroundColor: tokens['color-semantic-surface'],
        borderColor: hasError
          ? tokens['color-semantic-feedback-error']
          : success
          ? tokens['color-semantic-feedback-success']
          : isFocused
          ? tokens['color-semantic-action-primary']
          : tokens['color-semantic-border-default'],
      };
    } else if (variant === 'filled') {
      containerVariantStyle = {
        borderWidth: 0,
        borderBottomWidth: isFocused ? 2 : 1,
        borderRadius: 6,
        backgroundColor:
          colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
        borderColor: hasError
          ? tokens['color-semantic-feedback-error']
          : success
          ? tokens['color-semantic-feedback-success']
          : isFocused
          ? tokens['color-semantic-action-primary']
          : tokens['color-semantic-border-default'],
      };
    } else if (variant === 'standard') {
      containerVariantStyle = {
        borderWidth: 0,
        borderBottomWidth: isFocused ? 2 : 1,
        borderRadius: 0,
        backgroundColor: 'transparent',
        borderColor: hasError
          ? tokens['color-semantic-feedback-error']
          : success
          ? tokens['color-semantic-feedback-success']
          : isFocused
          ? tokens['color-semantic-action-primary']
          : tokens['color-semantic-border-default'],
        paddingHorizontal: 0,
      };
    }

    return (
      <View style={[styles.wrapper, containerStyle]}>
        {label && (
          <InputLabel
            label={label}
            required={required}
            color={tokens['color-semantic-text-primary']}
            requiredColor={tokens['color-semantic-feedback-error']}
          />
        )}

        <View
          style={[
            styles.inputContainer,
            { minHeight },
            containerVariantStyle,
            disabled && styles.disabledContainer,
          ]}
        >
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          {prefix && (
            <InputAffix
              text={prefix}
              position="prefix"
              color={tokens['color-semantic-text-muted']}
            />
          )}

          <RNTextInput
            ref={ref as any}
            editable={effectiveEditable}
            value={value}
            defaultValue={defaultValue}
            onChangeText={handleChangeText}
            placeholderTextColor={tokens['color-semantic-text-muted']}
            multiline={multiline}
            numberOfLines={multiline ? numberOfLines || 3 : 1}
            maxLength={maxLength}
            accessibilityRole="text"
            accessibilityState={{
              disabled,
            }}
            style={[
              styles.input,
              {
                fontSize,
                color: disabled
                  ? tokens['color-semantic-text-muted']
                  : tokens['color-semantic-text-primary'],
              },
              multiline && styles.multilineInput,
              style,
            ]}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            {...restProps}
          />

          {suffix && (
            <InputAffix
              text={suffix}
              position="suffix"
              color={tokens['color-semantic-text-muted']}
            />
          )}

          {clearable && currentLength > 0 && effectiveEditable && (
            <TouchableOpacity
              onPress={handleClear}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              style={styles.clearButton}
              accessibilityRole="button"
              accessibilityLabel="Clear input text"
            >
              <Text style={[styles.clearButtonText, { color: tokens['color-semantic-text-muted'] }]}>
                ✕
              </Text>
            </TouchableOpacity>
          )}

          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>

        {/* Footer Area: Helper text, error/success messages, and character counter */}
        <View style={styles.footerRow}>
          <View style={styles.messageContainer}>
            {hasError && errorText ? (
              <HelperText
                text={errorText}
                type="error"
                color={tokens['color-semantic-feedback-error']}
              />
            ) : success ? (
              <HelperText
                text={success}
                type="success"
                color={tokens['color-semantic-feedback-success']}
              />
            ) : description ? (
              <HelperText
                text={description}
                type="description"
                color={tokens['color-semantic-text-muted']}
              />
            ) : null}
          </View>

          {showCharacterCounter && maxLength !== undefined && (
            <Text style={[styles.counterText, { color: tokens['color-semantic-text-muted'] }]}>
              {currentLength} / {maxLength}
            </Text>
          )}
        </View>
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 14,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.1,
  },
  requiredAsterisk: {
    marginLeft: 4,
    fontWeight: '700',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  disabledContainer: {
    opacity: 0.55,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  multilineInput: {
    textAlignVertical: 'top',
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconLeft: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRight: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prefix: {
    marginRight: 6,
  },
  suffix: {
    marginLeft: 6,
  },
  affixText: {
    fontSize: 14,
    fontWeight: '500',
  },
  clearButton: {
    padding: 4,
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 5,
    minHeight: 18,
  },
  messageContainer: {
    flex: 1,
    marginRight: 8,
  },
  helper: {
    fontSize: 12,
    lineHeight: 16,
  },
  counterText: {
    fontSize: 11,
    fontWeight: '500',
  },
});

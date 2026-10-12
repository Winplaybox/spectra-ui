// packages/react-native/src/components/actions/SplitButton.tsx
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
  Platform,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';
import { NativeButtonVariant, NativeButtonSize } from './Button';

export interface NativeSplitButtonProps {
  children?: React.ReactNode;
  onPress?: () => void;
  onPressDropdown?: () => void;
  variant?: NativeButtonVariant;
  size?: NativeButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  chevronIcon?: React.ReactNode;
  accessibilityLabel?: string;
  dropdownAccessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

/**
 * SplitButton - Dual-action native button pairing a primary trigger with a segmented dropdown chevron.
 */
export const SplitButton: React.FC<NativeSplitButtonProps> = ({
  children,
  onPress,
  onPressDropdown,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  chevronIcon,
  accessibilityLabel = 'Primary Action',
  dropdownAccessibilityLabel = 'Additional Options',
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const getVariantColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          bg: tokens['color-semantic-surface-raised'],
          border: tokens['color-semantic-border-default'],
          text: tokens['color-semantic-text-primary'],
          divider: tokens['color-semantic-border-default'],
        };
      case 'danger':
        return {
          bg: tokens['color-semantic-feedback-error'],
          border: tokens['color-semantic-feedback-error'],
          text: tokens['color-semantic-text-inverse'],
          divider: 'rgba(255, 255, 255, 0.25)',
        };
      case 'tertiary':
        return {
          bg: 'transparent',
          border: tokens['color-semantic-border-subtle'],
          text: tokens['color-semantic-action-primary'],
          divider: tokens['color-semantic-border-subtle'],
        };
      case 'primary':
      default:
        return {
          bg: tokens['color-semantic-action-primary'],
          border: tokens['color-semantic-action-primary'],
          text: tokens['color-semantic-text-inverse'],
          divider: 'rgba(255, 255, 255, 0.25)',
        };
    }
  };

  const colors = getVariantColors();
  const minHeight = Platform.OS === 'android' ? 48 : size === 'sm' ? 36 : size === 'lg' ? 52 : 44;

  return (
    <View
      style={[
        styles.container,
        {
          minHeight,
          backgroundColor: colors.bg,
          borderColor: colors.border,
          opacity: disabled ? 0.45 : 1,
        },
        style,
      ]}
    >
      {/* Primary Action Button */}
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled: disabled || isLoading }}
        activeOpacity={0.75}
        disabled={disabled || isLoading}
        onPress={onPress}
        style={styles.primaryAction}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.text} />
        ) : typeof children === 'string' ? (
          <Text style={[styles.label, { color: colors.text }]}>{children}</Text>
        ) : (
          children
        )}
      </TouchableOpacity>

      {/* Segment Divider */}
      <View style={[styles.divider, { backgroundColor: colors.divider }]} />

      {/* Dropdown Chevron Trigger */}
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={dropdownAccessibilityLabel}
        accessibilityState={{ disabled: disabled || isLoading }}
        activeOpacity={0.75}
        disabled={disabled || isLoading}
        onPress={onPressDropdown}
        style={styles.dropdownAction}
      >
        {chevronIcon ? (
          chevronIcon
        ) : (
          <Text style={[styles.defaultChevron, { color: colors.text }]}>▼</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  primaryAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    width: 1,
  },
  dropdownAction: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  defaultChevron: {
    fontSize: 10,
  },
});

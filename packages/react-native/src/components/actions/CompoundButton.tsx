// packages/react-native/src/components/actions/CompoundButton.tsx
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Platform,
} from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export interface NativeCompoundButtonProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'subtle';
  disabled?: boolean;
  onPress?: () => void;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

/**
 * CompoundButton - Prominent card-style native button featuring a prominent title, secondary narrative, and icon.
 */
export const CompoundButton: React.FC<NativeCompoundButtonProps> = ({
  title,
  description,
  icon,
  variant = 'secondary',
  disabled = false,
  onPress,
  accessibilityLabel,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: tokens['color-semantic-action-primary'],
          border: tokens['color-semantic-action-primary'],
          titleColor: tokens['color-semantic-text-inverse'],
          descColor: 'rgba(255, 255, 255, 0.8)',
        };
      case 'subtle':
        return {
          bg: 'transparent',
          border: 'transparent',
          titleColor: tokens['color-semantic-text-primary'],
          descColor: tokens['color-semantic-text-secondary'],
        };
      case 'secondary':
      default:
        return {
          bg: tokens['color-semantic-surface-raised'],
          border: tokens['color-semantic-border-default'],
          titleColor: tokens['color-semantic-text-primary'],
          descColor: tokens['color-semantic-text-secondary'],
        };
    }
  };

  const v = getVariantStyles();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || `${title}, ${description || ''}`}
      accessibilityState={{ disabled }}
      activeOpacity={0.75}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: v.bg,
          borderColor: v.border,
          opacity: disabled ? 0.45 : 1,
        },
        style,
      ]}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: v.titleColor }]}>{title}</Text>
        {description && (
          <Text style={[styles.description, { color: v.descColor }]}>{description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    minHeight: Platform.OS === 'android' ? 56 : 52,
  },
  iconContainer: {
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
  },
});

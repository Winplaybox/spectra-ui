import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeCardProps {
  children?: React.ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onPress?: () => void;
  style?: any;
}

export const Card: React.FC<NativeCardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  onPress,
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

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

  const cardStyles = [
    styles.card,
    {
      backgroundColor: tokens['color-semantic-surface-raised'],
      borderColor:
        variant === 'bordered'
          ? tokens['color-semantic-border-default']
          : tokens['color-semantic-border-subtle'],
      padding: getPadding(),
    },
    variant === 'elevated' && styles.elevated,
    style,
  ];

  if (interactive) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={cardStyles}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 6,
  },
  elevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

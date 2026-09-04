import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { useTheme } from '@spectra/primitives';
import { getTokens } from '@spectra/tokens';

export interface NativeTextProps {
  children?: React.ReactNode;
  variant?: 'heading' | 'body' | 'label' | 'caption';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'muted' | 'inverse';
  style?: TextStyle;
}

export const Text: React.FC<NativeTextProps> = ({
  children,
  size = 'md',
  weight = 'regular',
  color = 'primary',
  style,
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);

  const getFontSize = () => {
    switch (size) {
      case 'xs':
        return 12;
      case 'sm':
        return 14;
      case 'lg':
        return 18;
      case 'xl':
        return 22;
      case 'md':
      default:
        return 16;
    }
  };

  const getFontWeight = () => {
    switch (weight) {
      case 'medium':
        return '500';
      case 'semibold':
        return '600';
      case 'bold':
        return '700';
      case 'regular':
      default:
        return '400';
    }
  };

  const getTextColor = () => {
    switch (color) {
      case 'secondary':
        return tokens['color-semantic-text-secondary'];
      case 'muted':
        return tokens['color-semantic-text-muted'];
      case 'inverse':
        return tokens['color-semantic-text-inverse'];
      case 'primary':
      default:
        return tokens['color-semantic-text-primary'];
    }
  };

  return (
    <RNText
      style={[
        {
          fontSize: getFontSize(),
          fontWeight: getFontWeight() as any,
          color: getTextColor(),
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

import React from 'react';
import { SafeAreaView as RNSafeAreaView, ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

export interface NativeSafeAreaViewProps extends ViewProps {
  children?: React.ReactNode;
  bg?: string;
  style?: StyleProp<ViewStyle>;
}

/**
 * SafeAreaView - Token-aware safe-area boundary layout for Spectra UI Native.
 * Automatically respects active theme surface backgrounds.
 */
export const SafeAreaView: React.FC<NativeSafeAreaViewProps> = ({
  children,
  bg,
  style,
  ...props
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const backgroundColor = bg || tokens['color-semantic-surface'] || '#ffffff';

  return (
    <RNSafeAreaView style={[{ flex: 1, backgroundColor }, style]} {...props}>
      {children}
    </RNSafeAreaView>
  );
};

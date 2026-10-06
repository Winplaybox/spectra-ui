import React from 'react';
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native';
import { useTheme } from '@winplaybox/primitives';

export interface NativeStatusBarProps extends StatusBarProps {
  backgroundColor?: string;
}

/**
 * StatusBar - Design-token aware status bar for Spectra UI Native.
 * Automatically synchronizes barStyle with active Spectra theme mode.
 */
export const StatusBar: React.FC<NativeStatusBarProps> = ({
  barStyle,
  backgroundColor,
  ...props
}) => {
  const { colorScheme } = useTheme();
  const activeBarStyle = barStyle || (colorScheme === 'dark' ? 'light-content' : 'dark-content');
  return <RNStatusBar barStyle={activeBarStyle} {...(backgroundColor ? { backgroundColor } : {})} {...(props as any)} />;
};

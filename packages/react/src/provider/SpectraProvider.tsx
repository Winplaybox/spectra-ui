import React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@spectra/primitives';
import '@spectra/tokens/css';

export interface SpectraProviderProps extends ThemeProviderProps {}

/**
 * SpectraProvider - Root context provider for Spectra UI components.
 * Configures the active style pack and color mode attributes and provides theme context.
 */
export const SpectraProvider: React.FC<SpectraProviderProps> = ({
  children,
  defaultPack = 'minimal',
  defaultColorScheme = 'light',
  defaultRTL = false,
}) => {
  return (
    <ThemeProvider
      defaultPack={defaultPack}
      defaultColorScheme={defaultColorScheme}
      defaultRTL={defaultRTL}
    >
      {children}
    </ThemeProvider>
  );
};

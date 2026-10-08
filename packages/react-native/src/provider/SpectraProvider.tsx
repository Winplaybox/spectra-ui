import React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@winplaybox/primitives';
import { ErrorBoundary, NativeErrorBoundaryProps } from '../components/feedback/ErrorBoundary';

export interface NativeSpectraProviderProps extends ThemeProviderProps {
  /**
   * Root ErrorBoundary protection. Enabled by default (true).
   * Prevents unhandled component exceptions from crashing the mobile screen or entire app.
   * Can be configured with custom ErrorBoundary options or disabled with false.
   */
  errorBoundary?: boolean | Omit<NativeErrorBoundaryProps, 'children'>;
}

/**
 * SpectraProvider - Root context provider for Spectra UI Native components.
 * Configures theme context, active colorScheme, and provides automated ErrorBoundary shielding.
 */
export const SpectraProvider: React.FC<NativeSpectraProviderProps> = ({
  children,
  defaultPack = 'minimal',
  defaultColorScheme = 'light',
  defaultRTL = false,
  errorBoundary = true,
}) => {
  const content = errorBoundary ? (
    <ErrorBoundary
      level="app"
      title="Application Error"
      description="Spectra UI Native caught an unhandled rendering error. The screen was preserved to prevent a crash."
      {...(typeof errorBoundary === 'object' ? errorBoundary : {})}
    >
      {children}
    </ErrorBoundary>
  ) : (
    children
  );

  return (
    <ThemeProvider
      defaultPack={defaultPack}
      defaultColorScheme={defaultColorScheme}
      defaultRTL={defaultRTL}
    >
      {content}
    </ThemeProvider>
  );
};

import React from 'react';
import { View, ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from '@winplaybox/primitives';
import { getTokens } from '@winplaybox/tokens';

// Safe dynamic resolution of react-native-safe-area-context
// 100% Cross-platform engine for Android, iOS, and Web without legacy RN deprecation warnings.
let RNSafeAreaProvider: any = null;
let rnUseSafeAreaInsets: any = null;
let rnUseSafeAreaFrame: any = null;
let ContextSafeAreaView: any = null;
let rnInitialWindowMetrics: any = null;

try {
  const safeAreaContext = require('react-native-safe-area-context');
  RNSafeAreaProvider = safeAreaContext.SafeAreaProvider;
  rnUseSafeAreaInsets = safeAreaContext.useSafeAreaInsets;
  rnUseSafeAreaFrame = safeAreaContext.useSafeAreaFrame;
  ContextSafeAreaView = safeAreaContext.SafeAreaView;
  rnInitialWindowMetrics = safeAreaContext.initialWindowMetrics;
} catch {
  // Graceful fallback for non-native test environments
}

export const initialWindowMetrics = rnInitialWindowMetrics || null;

export interface NativeSafeAreaProviderProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  initialMetrics?: any;
}

/**
 * SafeAreaProvider - Root safe area context boundary wrapper for Spectra UI Native.
 * Seamlessly resolves react-native-safe-area-context across Web, iOS, and Android.
 */
export const SafeAreaProvider: React.FC<NativeSafeAreaProviderProps> = ({
  children,
  style,
  initialMetrics = initialWindowMetrics,
}) => {
  if (RNSafeAreaProvider) {
    return (
      <RNSafeAreaProvider style={style} initialMetrics={initialMetrics}>
        {children}
      </RNSafeAreaProvider>
    );
  }
  return <View style={[{ flex: 1 }, style]}>{children}</View>;
};

export interface EdgeInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Hook to retrieve safe area insets (top, bottom, left, right).
 */
export const useSafeAreaInsets = (): EdgeInsets => {
  if (rnUseSafeAreaInsets) {
    try {
      return rnUseSafeAreaInsets();
    } catch {
      return { top: 0, bottom: 0, left: 0, right: 0 };
    }
  }
  return { top: 0, bottom: 0, left: 0, right: 0 };
};

/**
 * Hook to retrieve safe area frame rect dimensions.
 */
export const useSafeAreaFrame = (): Rect => {
  if (rnUseSafeAreaFrame) {
    try {
      return rnUseSafeAreaFrame();
    } catch {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  return { x: 0, y: 0, width: 0, height: 0 };
};

export interface NativeSafeAreaViewProps extends ViewProps {
  children?: React.ReactNode;
  bg?: string;
  edges?: readonly ('top' | 'right' | 'bottom' | 'left')[];
  mode?: 'padding' | 'margin';
  style?: StyleProp<ViewStyle>;
}

/**
 * SafeAreaView - Token-aware safe-area boundary layout for Spectra UI Native.
 * Built entirely on react-native-safe-area-context for all platforms (Web, iOS, Android).
 */
export const SafeAreaView: React.FC<NativeSafeAreaViewProps> = ({
  children,
  bg,
  edges,
  mode,
  style,
  ...props
}) => {
  const { colorScheme } = useTheme();
  const tokens = getTokens(colorScheme);
  const backgroundColor = bg || tokens['color-semantic-surface'] || '#ffffff';

  if (ContextSafeAreaView) {
    return (
      <ContextSafeAreaView
        edges={edges}
        mode={mode}
        style={[{ flex: 1, backgroundColor }, style]}
        {...props}
      >
        {children}
      </ContextSafeAreaView>
    );
  }

  return (
    <View style={[{ flex: 1, backgroundColor }, style]} {...props}>
      {children}
    </View>
  );
};

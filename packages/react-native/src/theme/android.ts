// packages/react-native/src/theme/android.ts
/**
 * Spectra UI — Material Design 3 / Android 15 Design Tokens
 * Benchmarked directly against Material 3 / Android 15 Figma UI Kit.
 */

export const m3Colors = {
  light: {
    primary: '#005AC1',
    onPrimary: '#FFFFFF',
    primaryContainer: '#D8E2FF',
    onPrimaryContainer: '#001A41',
    secondary: '#575E71',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#DBE2F9',
    onSecondaryContainer: '#141B2C',
    tertiary: '#715573',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FBD7FC',
    onTertiaryContainer: '#29132D',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#FEF7FF',
    onBackground: '#1D1B20',
    surface: '#FEF7FF',
    onSurface: '#1D1B20',
    surfaceVariant: '#E1E2EC',
    onSurfaceVariant: '#44474F',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F7F2FA',
    surfaceContainer: '#F3EDF7',
    surfaceContainerHigh: '#ECE6F0',
    surfaceContainerHighest: '#E6E0E9',
    outline: '#74777F',
    outlineVariant: '#C4C6D0',
    inverseSurface: '#313033',
    inverseOnSurface: '#F4EFF4',
    inversePrimary: '#ADC6FF',
    shadow: '#000000',
    surfaceTint: '#005AC1',
  },
  dark: {
    primary: '#ADC6FF',
    onPrimary: '#002E69',
    primaryContainer: '#004494',
    onPrimaryContainer: '#D8E2FF',
    secondary: '#BFC6DC',
    onSecondary: '#293041',
    secondaryContainer: '#3F4759',
    onSecondaryContainer: '#DBE2F9',
    tertiary: '#DEBCDF',
    onTertiary: '#402843',
    tertiaryContainer: '#583E5B',
    onTertiaryContainer: '#FBD7FC',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',
    background: '#141218',
    onBackground: '#E6E0E9',
    surface: '#141218',
    onSurface: '#E6E0E9',
    surfaceVariant: '#44474F',
    onSurfaceVariant: '#C4C6D0',
    surfaceContainerLowest: '#0F0D13',
    surfaceContainerLow: '#1D1B20',
    surfaceContainer: '#211F26',
    surfaceContainerHigh: '#2B2930',
    surfaceContainerHighest: '#36343B',
    outline: '#8E9099',
    outlineVariant: '#44474F',
    inverseSurface: '#E6E0E9',
    inverseOnSurface: '#313033',
    inversePrimary: '#005AC1',
    shadow: '#000000',
    surfaceTint: '#ADC6FF',
  },
};

export const m3Typography = {
  displayLarge: { fontSize: 57, lineHeight: 64, fontWeight: '400' as const, letterSpacing: -0.25 },
  displayMedium: { fontSize: 45, lineHeight: 52, fontWeight: '400' as const, letterSpacing: 0 },
  displaySmall: { fontSize: 36, lineHeight: 44, fontWeight: '400' as const, letterSpacing: 0 },
  headlineLarge: { fontSize: 32, lineHeight: 40, fontWeight: '400' as const, letterSpacing: 0 },
  headlineMedium: { fontSize: 28, lineHeight: 36, fontWeight: '400' as const, letterSpacing: 0 },
  headlineSmall: { fontSize: 24, lineHeight: 32, fontWeight: '400' as const, letterSpacing: 0 },
  titleLarge: { fontSize: 22, lineHeight: 28, fontWeight: '400' as const, letterSpacing: 0 },
  titleMedium: { fontSize: 16, lineHeight: 24, fontWeight: '500' as const, letterSpacing: 0.15 },
  titleSmall: { fontSize: 14, lineHeight: 20, fontWeight: '500' as const, letterSpacing: 0.1 },
  bodyLarge: { fontSize: 16, lineHeight: 24, fontWeight: '400' as const, letterSpacing: 0.5 },
  bodyMedium: { fontSize: 14, lineHeight: 20, fontWeight: '400' as const, letterSpacing: 0.25 },
  bodySmall: { fontSize: 12, lineHeight: 16, fontWeight: '400' as const, letterSpacing: 0.4 },
  labelLarge: { fontSize: 14, lineHeight: 20, fontWeight: '500' as const, letterSpacing: 0.1 },
  labelMedium: { fontSize: 12, lineHeight: 16, fontWeight: '500' as const, letterSpacing: 0.5 },
  labelSmall: { fontSize: 11, lineHeight: 16, fontWeight: '500' as const, letterSpacing: 0.5 },
};

export const m3Shapes = {
  none: 0,
  extraSmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  extraLarge: 28,
  full: 9999,
  touchTarget: {
    minimum: 48,
  },
};

export const m3Elevation = {
  level0: 0,
  level1: 1,
  level2: 3,
  level3: 6,
  level4: 8,
  level5: 12,
};

export const m3StateLayers = {
  hover: 0.08,
  focus: 0.12,
  pressed: 0.12,
  dragged: 0.16,
};

export function getM3Theme(mode: 'light' | 'dark' = 'light') {
  return {
    colors: m3Colors[mode],
    typography: m3Typography,
    shapes: m3Shapes,
    elevation: m3Elevation,
    stateLayers: m3StateLayers,
  };
}

export const getAndroidTheme = getM3Theme;
export const androidColors = m3Colors;
export const androidTypography = m3Typography;
export const androidShapes = m3Shapes;
export const androidElevation = m3Elevation;

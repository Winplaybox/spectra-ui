// packages/react-native/src/theme/ios.ts
/**
 * Spectra UI — Apple Human Interface Guidelines (iOS 16-18) Design Tokens
 * Benchmarked directly against Apple HIG & iOS 16 UI Kit.
 */

export const iosColors = {
  light: {
    systemBlue: '#007AFF',
    systemGreen: '#34C759',
    systemIndigo: '#5856D6',
    systemOrange: '#FF9500',
    systemPink: '#FF2D55',
    systemPurple: '#AF52DE',
    systemRed: '#FF3B30',
    systemTeal: '#5AC8FA',
    systemYellow: '#FFCC00',
    systemGray: '#8E8E93',
    systemGray2: '#AEAEB2',
    systemGray3: '#C7C7CC',
    systemGray4: '#D1D1D6',
    systemGray5: '#E5E5EA',
    systemGray6: '#F2F2F7',
    label: '#000000',
    secondaryLabel: 'rgba(60, 60, 67, 0.6)',
    tertiaryLabel: 'rgba(60, 60, 67, 0.3)',
    quaternaryLabel: 'rgba(60, 60, 67, 0.18)',
    systemBackground: '#FFFFFF',
    secondarySystemBackground: '#F2F2F7',
    tertiarySystemBackground: '#FFFFFF',
    systemGroupedBackground: '#F2F2F7',
    secondarySystemGroupedBackground: '#FFFFFF',
    tertiarySystemGroupedBackground: '#F2F2F7',
    separator: 'rgba(60, 60, 67, 0.29)',
    opaqueSeparator: '#C6C6C8',
    link: '#007AFF',
  },
  dark: {
    systemBlue: '#0A84FF',
    systemGreen: '#30D158',
    systemIndigo: '#5E5CE6',
    systemOrange: '#FF9F0A',
    systemPink: '#FF375F',
    systemPurple: '#BF5AF2',
    systemRed: '#FF453A',
    systemTeal: '#64D2FF',
    systemYellow: '#FFD60A',
    systemGray: '#8E8E93',
    systemGray2: '#636366',
    systemGray3: '#48484A',
    systemGray4: '#3A3A3C',
    systemGray5: '#2C2C2E',
    systemGray6: '#1C1C1E',
    label: '#FFFFFF',
    secondaryLabel: 'rgba(235, 235, 245, 0.6)',
    tertiaryLabel: 'rgba(235, 235, 245, 0.3)',
    quaternaryLabel: 'rgba(235, 235, 245, 0.18)',
    systemBackground: '#000000',
    secondarySystemBackground: '#1C1C1E',
    tertiarySystemBackground: '#2C2C2E',
    systemGroupedBackground: '#000000',
    secondarySystemGroupedBackground: '#1C1C1E',
    tertiarySystemGroupedBackground: '#2C2C2E',
    separator: 'rgba(84, 84, 88, 0.6)',
    opaqueSeparator: '#38383A',
    link: '#0984FF',
  },
};

export const iosTypography = {
  largeTitle: { fontSize: 34, lineHeight: 41, fontWeight: '700' as const, letterSpacing: 0.37 },
  title1: { fontSize: 28, lineHeight: 34, fontWeight: '700' as const, letterSpacing: 0.36 },
  title2: { fontSize: 22, lineHeight: 28, fontWeight: '700' as const, letterSpacing: 0.35 },
  title3: { fontSize: 20, lineHeight: 25, fontWeight: '600' as const, letterSpacing: 0.38 },
  headline: { fontSize: 17, lineHeight: 22, fontWeight: '600' as const, letterSpacing: -0.41 },
  body: { fontSize: 17, lineHeight: 22, fontWeight: '400' as const, letterSpacing: -0.41 },
  callout: { fontSize: 16, lineHeight: 21, fontWeight: '400' as const, letterSpacing: -0.32 },
  subhead: { fontSize: 15, lineHeight: 20, fontWeight: '400' as const, letterSpacing: -0.24 },
  footnote: { fontSize: 13, lineHeight: 18, fontWeight: '400' as const, letterSpacing: -0.08 },
  caption1: { fontSize: 12, lineHeight: 16, fontWeight: '400' as const, letterSpacing: 0 },
  caption2: { fontSize: 11, lineHeight: 13, fontWeight: '400' as const, letterSpacing: 0.07 },
};

export const iosShapes = {
  cornerRadius: {
    small: 8,
    regular: 10,
    large: 12,
    extraLarge: 16,
    insetGroupedCard: 12,
    button: 10,
    pill: 9999,
  },
  touchTarget: {
    minimum: 44,
  },
  layout: {
    screenMargin: 16,
    groupedCardMargin: 16,
    itemSpacing: 10,
  },
};

export function getIosTheme(mode: 'light' | 'dark' = 'light') {
  return {
    colors: iosColors[mode],
    typography: iosTypography,
    shapes: iosShapes,
  };
}

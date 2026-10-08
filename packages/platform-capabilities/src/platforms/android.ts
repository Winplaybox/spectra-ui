import { PlatformDefinition } from '../types';

export const androidPlatform: PlatformDefinition = {
  platform: 'android',
  name: 'Android',
  shortName: 'Android',
  badge: 'API 26+ / Material 3',
  icon: 'android',
  renderer: 'React Native (Android Fabric / Paper)',
  primaryUxParadigm: 'Android / Material-inspired native behavior',
  package: '@winplaybox/react-native',
  minOsVersion: 'Android 8.0 Oreo (API 26)+',
  touchStandard: '48×48 dp minimum touch targets (Material Design)',
  accessibilityStandard: 'Android Accessibility / TalkBack semantics',
  motionEngine: 'React Native Animated / Android native animator',
  description: 'Hardware elevation z-index depth, Material ripple surface feedback, BackHandler navigation integration, and 48dp touch targets.',
  themeCapabilities: ['System Night Mode sync', 'Dynamic Palette integration', 'Hardware ripple overlay', 'Light baseline mode'],
};

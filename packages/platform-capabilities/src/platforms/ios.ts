import { PlatformDefinition } from '../types';

export const iosPlatform: PlatformDefinition = {
  platform: 'ios',
  name: 'iOS',
  shortName: 'iOS',
  badge: 'iOS 15.0+ / Apple HIG',
  icon: 'ios',
  renderer: 'React Native (iOS Fabric / Paper)',
  primaryUxParadigm: 'Apple HIG / touch-first',
  package: '@winplaybox/react-native',
  minOsVersion: 'iOS 15.0+ (iPhone & iPad)',
  touchStandard: '44×44 pt minimum touch targets (Apple HIG)',
  accessibilityStandard: 'iOS UIAccessibility & VoiceOver traits',
  motionEngine: 'React Native Animated / iOS UIKit spring dynamics',
  description: 'UIImpactFeedbackGenerator haptic feedback, native SafeAreaInsets, Dynamic Type scaling, VoiceOver traits, and Apple HIG 44pt targets.',
  themeCapabilities: ['UIUserInterfaceStyle sync', 'System blurred vibrancy', 'Haptic feedback integration', 'Light baseline mode'],
};

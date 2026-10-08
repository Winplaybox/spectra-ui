import { PlatformDefinition } from '../types';

export const macosPlatform: PlatformDefinition = {
  platform: 'macos',
  name: 'macOS',
  shortName: 'macOS',
  badge: 'macOS 12.0+ / AppKit',
  icon: 'macos',
  renderer: 'React Native for macOS / AppKit / SwiftUI Mac',
  primaryUxParadigm: 'macOS / AppKit-style desktop behavior',
  package: '@winplaybox/react-native-macos',
  minOsVersion: 'macOS Monterey 12.0+, Ventura 13+, Sonoma 14+, Sequoia 15+',
  touchStandard: 'Desktop Cursor & Precision Trackpad (28×28 pt)',
  accessibilityStandard: 'macOS NSAccessibility & VoiceOver',
  motionEngine: 'CoreAnimation / NSAnimationContext / SwiftUI withAnimation',
  description: 'NSVisualEffectView Vibrancy materials, SF Symbols integration, cursor hover transformations, menu bar shortcuts (Cmd+Key), and window dragging.',
  themeCapabilities: ['NSVisualEffectView Vibrancy', 'System Accent Sync', 'Keyboard Shortcuts (Cmd+Key)', 'Light baseline mode'],
};

import { HookCapability } from '../types';

export const useReducedMotionCapability: HookCapability = {
  id: 'use-reduced-motion',
  name: 'useReducedMotion',
  category: 'Accessibility',
  description: 'Detects operating system accessibility preference for reduced motion animations across all 5 platforms.',
  inputContract: '() => boolean',
  outputContract: 'Returns boolean true if user requested reduced motion, false otherwise',
  platforms: {
    web: {
      platform: 'web',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'CSS media query (prefers-reduced-motion: reduce) with event listener.',
      testStatus: 'verified',
    },
    android: {
      platform: 'android',
      support: 'native',
      implementation: '@winplaybox/react-native',
      notes: 'AccessibilityInfo.isReduceMotionEnabled() listener.',
      testStatus: 'verified',
    },
    ios: {
      platform: 'ios',
      support: 'native',
      implementation: '@winplaybox/react-native',
      notes: 'AccessibilityInfo.isReduceMotionEnabled() with UIAccessibility notification.',
      testStatus: 'verified',
    },
    windows: {
      platform: 'windows',
      support: 'adapted',
      implementation: '@winplaybox/react-native-windows',
      notes: 'UISettings.AnimationsEnabled query mapping.',
      testStatus: 'verified',
    },
    macos: {
      platform: 'macos',
      support: 'adapted',
      implementation: '@winplaybox/react-native-macos',
      notes: 'NSWorkspaceAccessibilityDisplayOptions reduceMotion status.',
      testStatus: 'verified',
    },
  },
};

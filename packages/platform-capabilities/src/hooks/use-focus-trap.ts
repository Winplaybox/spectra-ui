import { HookCapability } from '../types';

export const useFocusTrapCapability: HookCapability = {
  id: 'use-focus-trap',
  name: 'useFocusTrap',
  category: 'Accessibility',
  description: 'Traps keyboard focus inside active modal dialog overlays to satisfy WCAG 2.1 modal requirements.',
  inputContract: '(ref: RefObject<HTMLElement>, isActive: boolean) => void',
  outputContract: 'void',
  platforms: {
    web: {
      platform: 'web',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'Intercepts Tab and Shift+Tab keydown events to wrap focus within boundary elements.',
      testStatus: 'verified',
    },
    android: {
      platform: 'android',
      support: 'unsupported',
      notes: 'Mobile Android uses Modal native container and TalkBack accessibility hierarchy instead of keyboard tab traps.',
      alternative: 'Native Modal container with accessibleViewIsModal={true}',
      testStatus: 'verified',
    },
    ios: {
      platform: 'ios',
      support: 'unsupported',
      notes: 'iOS VoiceOver uses native modal accessibility container semantics instead of DOM focus trapping.',
      alternative: 'Native Modal container with accessibilityViewIsModal={true}',
      testStatus: 'verified',
    },
    windows: {
      platform: 'windows',
      support: 'adapted',
      implementation: '@winplaybox/react-native-windows',
      notes: 'XAML / WinUI ContentDialog modal focus scoping.',
      testStatus: 'verified',
    },
    macos: {
      platform: 'macos',
      support: 'adapted',
      implementation: '@winplaybox/react-native-macos',
      notes: 'NSWindow modal session key-view loop.',
      testStatus: 'verified',
    },
  },
};

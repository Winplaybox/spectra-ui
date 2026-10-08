import { HookCapability } from '../types';

export const useClipboardCapability: HookCapability = {
  id: 'use-clipboard',
  name: 'useClipboard',
  category: 'System',
  description: 'Multi-platform clipboard read/write engine with feedback timeout state.',
  inputContract: '(options?: { timeout?: number }) => UseClipboardReturn',
  outputContract: '{ value, copy, copied, error, isSupported }',
  platforms: {
    web: {
      platform: 'web',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'navigator.clipboard.writeText with execCommand copy fallback.',
      testStatus: 'verified',
    },
    android: {
      platform: 'android',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'React Native Clipboard / Android ClipboardManager bridge.',
      testStatus: 'verified',
    },
    ios: {
      platform: 'ios',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'UIPasteboard native bridge with haptic feedback integration.',
      testStatus: 'verified',
    },
    windows: {
      platform: 'windows',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'Windows.ApplicationModel.DataTransfer.Clipboard integration.',
      testStatus: 'verified',
    },
    macos: {
      platform: 'macos',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'NSPasteboard general pasteboard integration.',
      testStatus: 'verified',
    },
  },
};

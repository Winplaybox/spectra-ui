import { HookCapability } from '../types';

export const useHoverCapability: HookCapability = {
  id: 'use-hover',
  name: 'useHover',
  category: 'Interactions',
  description: 'Headless pointer hover tracking hook for desktop pointer interactions.',
  inputContract: '() => [React.RefObject<T>, boolean]',
  outputContract: 'Returns a ref callback and boolean hover state',
  platforms: {
    web: {
      platform: 'web',
      support: 'native',
      implementation: '@winplaybox/primitives',
      notes: 'Native mouseenter / mouseleave event listeners with memory cleanup.',
      testStatus: 'verified',
    },
    android: {
      platform: 'android',
      support: 'unsupported',
      notes: 'Hover is not a primary interaction model on touch-first mobile devices.',
      alternative: 'usePressableState / onPressIn',
      testStatus: 'verified',
    },
    ios: {
      platform: 'ios',
      support: 'unsupported',
      notes: 'Touch screens do not support physical hover states without external trackpad.',
      alternative: 'usePressableState / onPressIn',
      testStatus: 'verified',
    },
    windows: {
      platform: 'windows',
      support: 'adapted',
      implementation: '@winplaybox/react-native-windows',
      notes: 'Mouse pointer enter and pointer exit event mappings on WinUI controls.',
      testStatus: 'verified',
    },
    macos: {
      platform: 'macos',
      support: 'adapted',
      implementation: '@winplaybox/react-native-macos',
      notes: 'NSView onMouseEnter / onMouseExit trackpad hover integration.',
      testStatus: 'verified',
    },
  },
};

import { HookCapability } from '../types';
import { useHoverCapability } from './use-hover';
import { useMediaQueryCapability } from './use-media-query';
import { useClipboardCapability } from './use-clipboard';
import { useReducedMotionCapability } from './use-reduced-motion';
import { useFocusTrapCapability } from './use-focus-trap';

// Additional headless hooks platform capabilities
export const useControllableStateCapability: HookCapability = {
  id: 'use-controllable-state',
  name: 'useControllableState',
  description: 'Seamlessly bridge controlled and uncontrolled state props with unified updater semantics.',
  category: 'State & Interaction',
  inputContract: '({ value?, defaultValue?, onChange? }) => [value, setValue]',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
  },
};

export const useDisclosureCapability: HookCapability = {
  id: 'use-disclosure',
  name: 'useDisclosure',
  description: 'Standard state machine for toggling visibility of modals, drawers, tooltips, and accordions.',
  category: 'State & Interaction',
  inputContract: '({ defaultIsOpen?, onOpen?, onClose? }) => { isOpen, onOpen, onClose, onToggle, setOpen }',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
  },
};

export const useDebounceCapability: HookCapability = {
  id: 'use-debounce',
  name: 'useDebounce',
  description: 'Debounce high-frequency value updates such as search queries or filter inputs.',
  category: 'State & Interaction',
  inputContract: '<T>(value: T, delayMs: number): T',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
  },
};

export const useThrottleCapability: HookCapability = {
  id: 'use-throttle',
  name: 'useThrottle',
  description: 'Throttle rapid state changes such as scroll positions, drags, and coordinates.',
  category: 'State & Interaction',
  inputContract: '<T>(value: T, intervalMs: number): T',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
  },
};

export const useFocusRingCapability: HookCapability = {
  id: 'use-focus-ring',
  name: 'useFocusRing',
  description: 'Distinguish keyboard focus-visible from pointer clicks for WCAG 2.1 AA focus outlines.',
  category: 'State & Interaction',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'unsupported', notes: 'Touch screens use soft keyboard focus directly.', alternative: 'onFocus / onBlur', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'unsupported', notes: 'Touch screens do not require keyboard focus rings.', alternative: 'onFocus / onBlur', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', testStatus: 'verified' },
  },
};

export const useOutsideClickCapability: HookCapability = {
  id: 'use-outside-click',
  name: 'useOutsideClick',
  description: 'Dismiss popovers, menus, or drawers when pointer interactions occur outside target element.',
  category: 'State & Interaction',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'adapted', implementation: '@winplaybox/react-native', notes: 'TouchableWithoutFeedback backdrop', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'adapted', implementation: '@winplaybox/react-native', notes: 'TouchableWithoutFeedback backdrop', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', testStatus: 'verified' },
  },
};

export const useColorSchemeCapability: HookCapability = {
  id: 'use-color-scheme',
  name: 'useColorScheme',
  description: 'Manage dark/light color schemes with automatic system detection and persistence.',
  category: 'Theme & Environment',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/react', testStatus: 'verified' },
    android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'native', implementation: '@winplaybox/react-native-windows', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'native', implementation: '@winplaybox/react-native-macos', testStatus: 'verified' },
  },
};

export const useIntersectionObserverCapability: HookCapability = {
  id: 'use-intersection-observer',
  name: 'useIntersectionObserver',
  description: 'Observe viewport element intersections for infinite scrolling and lazy-loaded assets.',
  category: 'Lifecycle & Measurement',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'unsupported', notes: 'DOM IntersectionObserver does not exist in React Native.', alternative: 'FlatList onEndReached / onViewableItemsChanged', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'unsupported', notes: 'DOM IntersectionObserver does not exist in React Native.', alternative: 'FlatList onEndReached / onViewableItemsChanged', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'unsupported', notes: 'Use virtualized List on RNW.', alternative: 'FlatList onViewableItemsChanged', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'unsupported', notes: 'Use virtualized List on RN macOS.', alternative: 'FlatList onViewableItemsChanged', testStatus: 'verified' },
  },
};

export const useElementSizeCapability: HookCapability = {
  id: 'use-element-size',
  name: 'useElementSize',
  description: 'Observe real-time bounding box measurements using ResizeObserver.',
  category: 'Lifecycle & Measurement',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'unsupported', notes: 'DOM ResizeObserver does not exist in React Native.', alternative: 'onLayout event callback', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'unsupported', notes: 'DOM ResizeObserver does not exist in React Native.', alternative: 'onLayout event callback', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'unsupported', notes: 'Use onLayout in RNW.', alternative: 'onLayout callback', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'unsupported', notes: 'Use onLayout in RN macOS.', alternative: 'onLayout callback', testStatus: 'verified' },
  },
};

export const useScrollLockCapability: HookCapability = {
  id: 'use-scroll-lock',
  name: 'useScrollLock',
  description: 'Lock background document scroll when modal dialogs or drawers are active.',
  category: 'Lifecycle & Measurement',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'unsupported', notes: 'React Native Modals manage view scroll isolation natively.', alternative: 'Modal view container', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'unsupported', notes: 'React Native Modals manage view scroll isolation natively.', alternative: 'Modal view container', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'unsupported', notes: 'ContentDialog provides modal isolation.', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'unsupported', notes: 'NSModalSession handles window isolation.', testStatus: 'verified' },
  },
};

export const useIdCapability: HookCapability = {
  id: 'use-id',
  name: 'useId',
  description: 'Generate unique, deterministic accessible element IDs safe across SSR and hydration.',
  category: 'Lifecycle & Measurement',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
  },
};

export const useToastCapability: HookCapability = {
  id: 'use-toast',
  name: 'useToast',
  description: 'Programmatic imperative dispatch for transient notification toasts.',
  category: 'Utilities & Feedback',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/react', testStatus: 'verified' },
    android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', testStatus: 'verified' },
  },
};

export const useAsyncCapability: HookCapability = {
  id: 'use-async',
  name: 'useAsync',
  description: 'Manage asynchronous promise lifecycle states (pending, loading, error, success).',
  category: 'Utilities & Feedback',
  platforms: {
    web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    android: { platform: 'android', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    windows: { platform: 'windows', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
    macos: { platform: 'macos', support: 'native', implementation: '@winplaybox/primitives', testStatus: 'verified' },
  },
};

export const hooksCapabilities: Record<string, HookCapability> = {
  'use-hover': useHoverCapability,
  'use-media-query': useMediaQueryCapability,
  'use-clipboard': useClipboardCapability,
  'use-reduced-motion': useReducedMotionCapability,
  'use-focus-trap': useFocusTrapCapability,
  'use-controllable-state': useControllableStateCapability,
  'use-disclosure': useDisclosureCapability,
  'use-debounce': useDebounceCapability,
  'use-throttle': useThrottleCapability,
  'use-focus-ring': useFocusRingCapability,
  'use-outside-click': useOutsideClickCapability,
  'use-color-scheme': useColorSchemeCapability,
  'use-intersection-observer': useIntersectionObserverCapability,
  'use-element-size': useElementSizeCapability,
  'use-scroll-lock': useScrollLockCapability,
  'use-id': useIdCapability,
  'use-toast': useToastCapability,
  'use-async': useAsyncCapability,
};

export function getHookCapability(hookId: string): HookCapability | undefined {
  const normalized = hookId.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return hooksCapabilities[normalized] || hooksCapabilities[hookId];
}

export {
  useHoverCapability,
  useMediaQueryCapability,
  useClipboardCapability,
  useReducedMotionCapability,
  useFocusTrapCapability,
};

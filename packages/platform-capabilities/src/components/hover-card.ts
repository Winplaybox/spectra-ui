import { ComponentCapability } from '../types';

export const hoverCardCapability: ComponentCapability = {
  id: 'hover-card',
  name: 'HoverCard',
  displayName: 'Hover Card',
  category: 'Overlays',
  description:
    'Desktop pointer-driven rich preview card that reveals contextual detail on pointer hover without taking focus.',
  slots: [
    { name: 'trigger', description: 'Interactive target that triggers hover card on pointer enter', platforms: ['web', 'windows', 'macos'] },
    { name: 'content', description: 'Rich card surface with author bio, link previews, or stats', platforms: ['web', 'windows', 'macos'] },
  ],
  recipes: [
    { id: 'user-profile', number: '01', title: 'User Profile Preview', description: 'Displays avatar, bio, and follow count on hovering author name.', platforms: ['web', 'windows', 'macos'] },
    { id: 'link-preview', number: '02', title: 'Rich URL Link Preview', description: 'Fetches title and thumbnail for external links on hover.', platforms: ['web', 'windows', 'macos'] },
  ],
  platforms: {
    web: {
      platform: 'web',
      support: 'native',
      implementation: '@winplaybox/react',
      variants: ['default', 'elevated'],
      recipes: ['user-profile', 'link-preview'],
      states: ['default', 'hover', 'open'],
      interactions: ['pointer-enter', 'pointer-leave', 'focus-visible'],
      accessibility: ['aria-haspopup="dialog"', 'aria-expanded'],
      testStatus: 'verified',
    },
    android: {
      platform: 'android',
      support: 'unsupported',
      limitations: ['Touch-first mobile devices do not possess physical pointer hover states.'],
      fallback: 'Use Popover, Dialog, or BottomSheet triggered on touch-press',
      testStatus: 'verified',
    },
    ios: {
      platform: 'ios',
      support: 'unsupported',
      limitations: ['Apple iOS touch screens do not support continuous pointer hover tracking.'],
      fallback: 'Use Popover, ContextMenu, or ActionSheet on long-press',
      testStatus: 'verified',
    },
    windows: {
      platform: 'windows',
      support: 'adapted',
      implementation: '@winplaybox/react-native-windows',
      variants: ['default'],
      recipes: ['user-profile', 'link-preview'],
      states: ['default', 'hover', 'open'],
      interactions: ['mouse-hover', 'keyboard-accelerator'],
      accessibility: ['UIAutomation ToolTip pattern'],
      testStatus: 'verified',
    },
    macos: {
      platform: 'macos',
      support: 'adapted',
      implementation: '@winplaybox/react-native-macos',
      variants: ['default'],
      recipes: ['user-profile', 'link-preview'],
      states: ['default', 'hover', 'open'],
      interactions: ['trackpad-hover', 'cursor-move'],
      accessibility: ['NSAccessibilityCustomRotor'],
      testStatus: 'verified',
    },
  },
};

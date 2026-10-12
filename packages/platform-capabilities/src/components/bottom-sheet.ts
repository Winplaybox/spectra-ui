import { ComponentCapability } from '../types';

export const bottomSheetCapability: ComponentCapability = {
  id: 'bottom-sheet',
  name: 'BottomSheet',
  displayName: 'Bottom Sheet',
  category: 'Overlays',
  description:
    'Mobile-first modal or persistent surface anchored to the bottom edge of the viewport, with gesture drag handles and snap points.',
  slots: [
    { name: 'handle', description: 'Gesture drag pill at top of sheet', platforms: ['android', 'ios'] },
    { name: 'content', description: 'Scrollable sheet payload', platforms: ['android', 'ios'] },
    { name: 'footer', description: 'Sticky action buttons at bottom of sheet', platforms: ['android', 'ios'] },
  ],
  recipes: [
    { id: 'modal-action', number: '01', title: 'Modal Action Sheet', description: 'Confirmatory quick actions anchored to screen bottom.', platforms: ['android', 'ios'] },
    { id: 'expandable', number: '02', title: 'Expandable Content Sheet', description: 'Multi-snap point draggable sheet (25%, 50%, 90% height).', platforms: ['android', 'ios'] },
  ],
  platforms: {
    web: {
      platform: 'web',
      support: 'unsupported',
      limitations: ['Desktop web browsers employ modal dialogs or popovers rather than full-width bottom dragging sheets.'],
      fallback: 'Use Dialog, Drawer, or Popover on Web',
      testStatus: 'verified',
    },
    android: {
      platform: 'android',
      support: 'native',
      implementation: '@winplaybox/react-native',
      variants: ['modal', 'persistent'],
      recipes: ['modal-action', 'expandable'],
      states: ['closed', 'peek', 'half-expanded', 'expanded'],
      interactions: ['vertical-drag', 'fling-down-dismiss', 'back-press-close'],
      accessibility: ['accessibilityRole="none"', 'accessibilityViewIsModal=true'],
      testStatus: 'verified',
    },
    ios: {
      platform: 'ios',
      support: 'native',
      implementation: '@winplaybox/react-native',
      variants: ['modal', 'persistent'],
      recipes: ['modal-action', 'expandable'],
      states: ['closed', 'peek', 'half-expanded', 'expanded'],
      interactions: ['interactive-drag', 'spring-settle', 'safe-area-inset'],
      accessibility: ['accessibilityViewIsModal=true', 'UIAccessibilityTraitModal'],
      testStatus: 'verified',
    },
    windows: {
      platform: 'windows',
      support: 'unsupported',
      limitations: ['Windows desktop conventions use Dialog or Flyout controls.'],
      fallback: 'Use Dialog or ContentDialog on Windows',
      testStatus: 'verified',
    },
    macos: {
      platform: 'macos',
      support: 'unsupported',
      limitations: ['macOS desktop apps use sheets anchored to the window titlebar or popovers, not bottom screens.'],
      fallback: 'Use Dialog sheet or Popover on macOS',
      testStatus: 'verified',
    },
  },
};

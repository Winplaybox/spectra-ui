import { ComponentCapability } from '../types';

export const datePickerCapability: ComponentCapability = {
  id: 'date-picker',
  name: 'DatePicker',
  displayName: 'Date Picker',
  category: 'Inputs',
  description:
    'Calendar date selection input with popover grid on Web and native modal dialog pickers on iOS and Android.',
  slots: [
    { name: 'input', description: 'Formatted date string display field', platforms: ['web', 'android', 'ios'] },
    { name: 'calendar-popover', description: 'Calendar grid popover for date navigation', platforms: ['web'] },
    { name: 'native-picker', description: 'Operating system native date modal dialog', platforms: ['android', 'ios'] },
  ],
  recipes: [
    { id: 'single-date', number: '01', title: 'Single Date Picker', description: 'Standard calendar day picker.', platforms: ['web', 'android', 'ios'] },
    { id: 'range', number: '02', title: 'Date Range Selector', description: 'Start and end date bracket range selection.', platforms: ['web'] },
  ],
  platforms: {
    web: {
      platform: 'web',
      support: 'native',
      implementation: '@winplaybox/react',
      variants: ['default', 'outlined'],
      recipes: ['single-date', 'range'],
      states: ['default', 'focus', 'open', 'disabled'],
      interactions: ['mouse-click', 'keyboard-grid-nav', 'esc-dismiss'],
      accessibility: ['role="grid"', 'aria-label="Calendar"', 'aria-selected'],
      testStatus: 'verified',
    },
    android: {
      platform: 'android',
      support: 'native',
      implementation: '@winplaybox/react-native',
      variants: ['default'],
      recipes: ['single-date'],
      states: ['default', 'pressed', 'disabled'],
      interactions: ['touch-tap', 'material-calendar-dialog'],
      accessibility: ['accessibilityRole="button"', '48dp touch target'],
      testStatus: 'verified',
    },
    ios: {
      platform: 'ios',
      support: 'native',
      implementation: '@winplaybox/react-native',
      variants: ['default'],
      recipes: ['single-date'],
      states: ['default', 'pressed', 'disabled'],
      interactions: ['touch-tap', 'uidatepicker-compact'],
      accessibility: ['accessibilityTraits=["startsMediaSession"]', '44pt touch target'],
      testStatus: 'verified',
    },
    windows: {
      platform: 'windows',
      support: 'unsupported',
      limitations: ['Dedicated Windows DatePicker awaiting WinUI CalendarDatePicker native bridge in RNW.'],
      fallback: 'Use TextInput with ISO date format mask on Windows',
      testStatus: 'verified',
    },
    macos: {
      platform: 'macos',
      support: 'unsupported',
      limitations: ['macOS AppKit NSDatePicker native binding scheduled for next minor release.'],
      fallback: 'Use TextInput with ISO date validation on macOS',
      testStatus: 'verified',
    },
  },
};

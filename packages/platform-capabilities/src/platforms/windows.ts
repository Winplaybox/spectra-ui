import { PlatformDefinition } from '../types';

export const windowsPlatform: PlatformDefinition = {
  platform: 'windows',
  name: 'Windows',
  shortName: 'Windows',
  badge: 'WinUI 3 / Fluent 2',
  icon: 'windows',
  renderer: 'React Native for Windows / WinUI 3',
  primaryUxParadigm: 'Windows / WinUI / keyboard + mouse',
  package: '@winplaybox/react-native-windows',
  minOsVersion: 'Windows 10 (19041+) / Windows 11',
  touchStandard: 'Precision Mouse & Keyboard navigation (32×32 px)',
  accessibilityStandard: 'Windows UIAutomation (UIA) & Narrator',
  motionEngine: 'WinUI Composition animations / Fluent motion',
  description: 'Mica / Acrylic desktop materials, Windows Accent sync, Tab/Shift+Tab focus visuals, right-click context menus, and keyboard accelerators.',
  themeCapabilities: ['Mica background material', 'System Accent color sync', 'High Contrast mode support', 'Light baseline mode'],
};

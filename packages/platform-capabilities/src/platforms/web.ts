import { PlatformDefinition } from '../types';

export const webPlatform: PlatformDefinition = {
  platform: 'web',
  name: 'Web (Browser & SSR)',
  shortName: 'Web',
  badge: 'DOM / SSR / RSC',
  icon: 'web',
  renderer: 'React DOM (v18 / v19)',
  primaryUxParadigm: 'Web / responsive / keyboard / ARIA',
  package: '@winplaybox/react',
  minOsVersion: 'Modern evergreen browsers (Chrome 90+, Safari 15+, Firefox 90+, Edge 90+)',
  touchStandard: '24×24px minimum touch targets (WCAG 2.1 AA)',
  accessibilityStandard: 'WAI-ARIA 1.2 & WCAG 2.1 AA',
  motionEngine: 'CSS Transitions / Web Animations API / Vanilla Extract',
  description: 'Browser-native DOM engine with strict semantic HTML5, keyboard roving tabIndex, WAI-ARIA live regions, and SSR hydration safety.',
  themeCapabilities: ['CSS Variables (--color-*)', 'System prefers-color-scheme', 'Light baseline mode', 'Data attribute theme switching'],
};

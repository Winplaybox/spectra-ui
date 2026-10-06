export interface VersionRelease {
  version: string;
  releaseDate: string;
  tag: string;
  status: 'latest' | 'maintenance' | 'legacy';
  title: string;
  description: string;
  highlights: string[];
  docsUrl: string;
  gitTagUrl: string;
}

export const CURRENT_VERSION = 'v0.2.0';

export const RELEASES_DATA: VersionRelease[] = [
  {
    version: 'v0.2.0',
    releaseDate: 'October 2026',
    tag: 'v0.2.0',
    status: 'latest',
    title: 'Spectra UI v0.2.0 — Universal Cross-Platform Expansion',
    description:
      'Major expansion of the Spectra UI design system: universal cross-platform Clipboard engine, native layout primitives, CopyButton components, synchronized MCP server, and isolated platform architectures.',
    highlights: [
      'Universal Multi-Platform Clipboard engine (Clipboard & useClipboard) supporting Modern Web, Legacy execCommand, Bare React Native, and Expo.',
      'New Universal CopyButton component across Web (@winplaybox/react) and Native (@winplaybox/react-native) with authentic SVG vector feedback.',
      'First-Class React Native Layout & Action Primitives: Box, Grid, ScrollView, Pressable, Image, and SvgIcon.',
      'Purged anti-pattern raw React Native and third-party re-exports from @winplaybox/react-native for strict design token fidelity.',
      '@winplaybox/mcp Server synchronization pipeline covering 62 components, 29 hooks, 56 color tokens, and curated vector icons.',
      'Zero Emoji Policy and strict SVG icon alignment across all documentation and platform chassis.',
    ],
    docsUrl: '/',
    gitTagUrl: 'https://github.com/Winplaybox/spectra-ui/releases/tag/v0.2.0',
  },
  {
    version: 'v0.1.0',
    releaseDate: 'Initial Release',
    tag: 'v0.1.0',
    status: 'legacy',
    title: 'Spectra UI v0.1.0 — Initial Release',
    description:
      'The initial release of the WinPlayBox Spectra UI Design System: 20 multi-platform components across Web and React Native, unified semantic design tokens, 12,253 icons, Algolia search database, and interactive documentation sandbox.',
    highlights: [
      '20 Multi-Platform Components across Web (@winplaybox/react) and React Native (@winplaybox/react-native).',
      'Algolia Search Database with 249 indexed records for CSS rules, component APIs, tokens, and hooks.',
      'Unified Semantic Design Token Engine with 100% contract enforcement and light/dark modes.',
      'Curated & Full Material Symbols Icon Catalog (12,253 icons) + 20 authentic brand SVGs.',
      'Interactive Sandbox with live in-place editable code, mobile device simulator, and accessibility audits.',
      'NPM Publishing Ready with dual CJS/ESM exports, TypeScript declarations, and public package access.',
    ],
    docsUrl: '/',
    gitTagUrl: 'https://github.com/Winplaybox/spectra-ui/releases/tag/v0.1.0',
  },
];

export const V020_NEW_COMPONENTS = ['copy-button', 'box', 'grid', 'scroll-view', 'pressable', 'image'];
export const V010_NEW_COMPONENTS = ['alert', 'spinner', 'skeleton', 'divider', 'chip', 'breadcrumbs'];

export function getComponentReleaseVersion(componentId: string): { version: string; isNew: boolean } {
  const isV020 = V020_NEW_COMPONENTS.includes(componentId);
  if (isV020) {
    return {
      version: 'v0.2.0',
      isNew: true,
    };
  }
  const isNew = V010_NEW_COMPONENTS.includes(componentId);
  return {
    version: 'v0.1.0',
    isNew,
  };
}

const COMPONENT_FOLDER_MAP: Record<string, string> = {
  button: 'actions/Button.tsx',
  'text-input': 'form/TextInput.tsx',
  select: 'form/Select.tsx',
  checkbox: 'form/Checkbox.tsx',
  radio: 'form/Radio.tsx',
  switch: 'form/Switch.tsx',
  divider: 'layout/Divider.tsx',
  accordion: 'data-display/Accordion.tsx',
  avatar: 'data-display/Avatar.tsx',
  chip: 'data-display/Chip.tsx',
  list: 'data-display/List.tsx',
  alert: 'feedback/Alert.tsx',
  badge: 'feedback/Badge.tsx',
  skeleton: 'feedback/Skeleton.tsx',
  spinner: 'feedback/Spinner.tsx',
  tooltip: 'overlay/Tooltip.tsx',
  breadcrumbs: 'navigation/Breadcrumbs.tsx',
  tabs: 'navigation/Tabs.tsx',
  card: 'surfaces/Card.tsx',
  dialog: 'overlay/Dialog.tsx',
};

export function getComponentGitHubUrl(
  componentId: string,
  platformOrVersion: 'web' | 'ios' | 'android' | 'windows' | 'macos' | 'headless' | 'native' | string = 'web',
  version: string = CURRENT_VERSION
): string {
  let platform = 'web';
  let targetVersion = version;

  if (
    platformOrVersion === 'web' ||
    platformOrVersion === 'ios' ||
    platformOrVersion === 'android' ||
    platformOrVersion === 'windows' ||
    platformOrVersion === 'macos' ||
    platformOrVersion === 'headless' ||
    platformOrVersion === 'native'
  ) {
    platform = platformOrVersion;
  } else if (typeof platformOrVersion === 'string') {
    // Legacy caller passed version as second argument
    targetVersion = platformOrVersion;
  }

  if (platform === 'headless') {
    return `https://github.com/Winplaybox/spectra-ui/blob/${targetVersion}/packages/primitives/src/index.ts`;
  }

  let pkg = 'react';
  if (platform === 'ios' || platform === 'android' || platform === 'native') {
    pkg = 'react-native';
  } else if (platform === 'windows') {
    pkg = 'react-native-windows';
  } else if (platform === 'macos') {
    pkg = 'react-native-macos';
  }

  const subpath = COMPONENT_FOLDER_MAP[componentId] || `components/${componentId}.tsx`;
  return `https://github.com/Winplaybox/spectra-ui/blob/${targetVersion}/packages/${pkg}/src/components/${subpath}`;
}

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

export const CURRENT_VERSION = 'v0.1.0';

export const RELEASES_DATA: VersionRelease[] = [
  {
    version: 'v0.1.0',
    releaseDate: 'Initial Release (In Development)',
    tag: 'v0.1.0',
    status: 'latest',
    title: 'Spectra UI v0.1.0 — Initial Release',
    description:
      'The initial release of the WinPlayBox Spectra UI Design System: 20 multi-platform components across Web and React Native, unified semantic design tokens, 12,253 icons, Algolia search database, and interactive documentation sandbox.',
    highlights: [
      '20 Multi-Platform Components across Web (@spectra/react) and React Native (@spectra/react-native).',
      'Algolia Search Database with 249 indexed records for CSS rules, component APIs, tokens, and hooks.',
      'Unified Semantic Design Token Engine with 100% contract enforcement and light/dark modes.',
      'Curated & Full Material Symbols Icon Catalog (12,253 icons) + 20 authentic brand SVGs.',
      'Interactive Sandbox with live in-place editable code, mobile device simulator, and accessibility audits.',
      'NPM Publishing Ready with dual CJS/ESM exports, TypeScript declarations, and public package access.',
    ],
    docsUrl: '/',
    gitTagUrl: 'https://github.com/Winplaybox/spectra-ui',
  },
];

export const V010_NEW_COMPONENTS = ['alert', 'spinner', 'skeleton', 'divider', 'chip', 'breadcrumbs'];

export function getComponentReleaseVersion(componentId: string): { version: string; isNew: boolean } {
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
  tooltip: 'feedback/Tooltip.tsx',
  breadcrumbs: 'navigation/Breadcrumbs.tsx',
  tabs: 'navigation/Tabs.tsx',
  card: 'surfaces/Card.tsx',
  dialog: 'overlay/Dialog.tsx',
};

export function getComponentGitHubUrl(componentId: string, version: string = CURRENT_VERSION): string {
  const subpath = COMPONENT_FOLDER_MAP[componentId] || `components/${componentId}.tsx`;
  return `https://github.com/Winplaybox/spectra-ui/blob/${version}/packages/react/src/components/${subpath}`;
}

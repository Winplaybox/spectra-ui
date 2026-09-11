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
    releaseDate: 'September 2026',
    tag: 'v0.2.0',
    status: 'latest',
    title: 'Spectra UI v0.2.0 — Extended Components & Algolia Agentic Search',
    description:
      'Major feature expansion introducing 6 new multi-platform components, Algolia agentic search index with 175 records, in-place live editable code, and React Native mobile parity.',
    highlights: [
      '6 New Multi-Platform Components: Alert, Spinner, Skeleton, Divider, Chip, Breadcrumbs across both Web and React Native.',
      'Algolia Agentic Search Engine: 175 records covering CSS rules, component APIs, tokens, hooks, and guidelines.',
      'Live In-Place Editable Code Editor: Powered by Sucrase with instant real-time TypeScript/JavaScript compilation.',
      'MUI-Benchmarked Architecture: 2-column curated navigation grid, categorized search results, and version selector.',
      'NPM Publishing Ready: Dual CJS/ESM exports, TypeScript declarations, and public package access.',
    ],
    docsUrl: '/',
    gitTagUrl: 'https://github.com/spectra-ui/spectra-ui/tree/v0.2.0',
  },
  {
    version: 'v0.1.0',
    releaseDate: 'August 2026',
    tag: 'v0.1.0',
    status: 'legacy',
    title: 'Spectra UI v0.1.0 — Initial Foundation',
    description:
      'Initial release of the WinPlayBox Spectra UI Design System with 14 core components, design tokens, and 12,253 icon catalog.',
    highlights: [
      '14 Core UI Components (Button, TextInput, Select, Checkbox, Radio, Switch, Accordion, Avatar, Badge, Card, Tabs, Dialog, Tooltip, List).',
      'Unified Design Token System across Light and Dark color schemes.',
      'Curated & Full Material Symbols Icon Catalog (12,253 icons).',
      'Interactive Dashboard Sandbox with Mobile Device Simulator.',
    ],
    docsUrl: 'https://github.com/spectra-ui/spectra-ui/releases/tag/v0.1.0',
    gitTagUrl: 'https://github.com/spectra-ui/spectra-ui/tree/v0.1.0',
  },
];

export const V020_COMPONENTS = ['alert', 'spinner', 'skeleton', 'divider', 'chip', 'breadcrumbs'];

export function getComponentReleaseVersion(componentId: string): { version: string; isNew: boolean } {
  const isNew = V020_COMPONENTS.includes(componentId);
  return {
    version: isNew ? 'v0.2.0' : 'v0.1.0',
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
  return `https://github.com/spectra-ui/spectra-ui/blob/${version}/packages/react/src/components/${subpath}`;
}

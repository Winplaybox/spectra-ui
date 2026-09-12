/**
 * Central Navigation Configuration Schema & Array
 * Benchmarked against Material UI & Microsoft Fluent UI 2
 * Enables data-driven, maintainable, and recursively consistent sidebar rendering.
 */

export interface NavLeafItem {
  id: string;
  name: string;
  path: string;
  badge?: string;
  badgeColor?: 'primary' | 'success' | 'warning' | 'neutral';
  isMonospace?: boolean;
}

export interface ComponentItem {
  id: string;
  name: string;
  category: string;
}

export interface ComponentCategory {
  id: string;
  name: string;
  components: ComponentItem[];
}

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    id: 'inputs',
    name: 'Inputs',
    components: [
      { id: 'button', name: 'Button', category: 'Inputs' },
      { id: 'text-input', name: 'TextInput', category: 'Inputs' },
      { id: 'select', name: 'Select', category: 'Inputs' },
      { id: 'checkbox', name: 'Checkbox', category: 'Inputs' },
      { id: 'radio', name: 'Radio', category: 'Inputs' },
      { id: 'switch', name: 'Switch', category: 'Inputs' },
    ],
  },
  {
    id: 'data-display',
    name: 'Data Display',
    components: [
      { id: 'accordion', name: 'Accordion', category: 'Data Display' },
      { id: 'avatar', name: 'Avatar', category: 'Data Display' },
      { id: 'badge', name: 'Badge', category: 'Data Display' },
      { id: 'chip', name: 'Chip', category: 'Data Display' },
      { id: 'divider', name: 'Divider', category: 'Data Display' },
      { id: 'list', name: 'List', category: 'Data Display' },
    ],
  },
  {
    id: 'feedback',
    name: 'Feedback',
    components: [
      { id: 'alert', name: 'Alert', category: 'Feedback' },
      { id: 'dialog', name: 'Dialog (Modal)', category: 'Feedback' },
      { id: 'skeleton', name: 'Skeleton', category: 'Feedback' },
      { id: 'spinner', name: 'Spinner', category: 'Feedback' },
      { id: 'tooltip', name: 'Tooltip', category: 'Feedback' },
    ],
  },
  {
    id: 'surfaces',
    name: 'Surfaces',
    components: [
      { id: 'card', name: 'Card', category: 'Surfaces' },
    ],
  },
  {
    id: 'navigation',
    name: 'Navigation',
    components: [
      { id: 'breadcrumbs', name: 'Breadcrumbs', category: 'Navigation' },
      { id: 'tabs', name: 'Tabs', category: 'Navigation' },
    ],
  },
];

export interface NavCategoryGroup {
  id: string;
  name: string;
  isCategoryHeader: true;
  items: NavLeafItem[];
}

export interface NavSection {
  id: string;
  title: string;
  path?: string;
  badge?: string | number;
  collapsible?: boolean;
  defaultOpen?: boolean;
  items: (NavLeafItem | NavCategoryGroup)[];
}

export const HOOK_CATEGORIES: NavCategoryGroup[] = [
  {
    id: 'state-interaction',
    name: 'State & Interaction',
    isCategoryHeader: true,
    items: [
      { id: 'use-controllable-state', name: 'useControllableState', path: '/hooks/use-controllable-state', isMonospace: true },
      { id: 'use-disclosure', name: 'useDisclosure', path: '/hooks/use-disclosure', isMonospace: true },
      { id: 'use-outside-click', name: 'useOutsideClick', path: '/hooks/use-outside-click', isMonospace: true },
      { id: 'use-focus-ring', name: 'useFocusRing', path: '/hooks/use-focus-ring', isMonospace: true },
    ],
  },
  {
    id: 'theme-environment',
    name: 'Theme & Environment',
    isCategoryHeader: true,
    items: [
      { id: 'use-color-scheme', name: 'useColorScheme', path: '/hooks/use-color-scheme', isMonospace: true },
      { id: 'use-media-query', name: 'useMediaQuery', path: '/hooks/use-media-query', isMonospace: true },
      { id: 'use-reduced-motion', name: 'useReducedMotion', path: '/hooks/use-reduced-motion', isMonospace: true },
      { id: 'use-rtl', name: 'useRTL', path: '/hooks/use-rtl', isMonospace: true },
    ],
  },
  {
    id: 'utilities-feedback',
    name: 'Utilities & Feedback',
    isCategoryHeader: true,
    items: [
      { id: 'use-id', name: 'useId', path: '/hooks/use-id', isMonospace: true },
      { id: 'use-toast', name: 'useToast', path: '/hooks/use-toast', isMonospace: true },
    ],
  },
];

export const HOOKS_LIST: NavLeafItem[] = HOOK_CATEGORIES.flatMap((cat) => cat.items);

export const SIDEBAR_NAVIGATION: NavSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      { id: 'overview', name: 'Overview & Quickstart', path: '/overview' },
      { id: 'installation', name: 'Installation', path: '/installation' },
      { id: 'cross-platform', name: 'Cross-Platform (Web & Native)', path: '/cross-platform' },
    ],
  },
  {
    id: 'design-tokens',
    title: 'Design Tokens',
    items: [
      { id: 'colors', name: 'Colors & Swatches', path: '/tokens/colors' },
      { id: 'typography', name: 'Typography Scale', path: '/tokens/typography' },
      { id: 'spacing', name: 'Spacing & 4px Grid', path: '/tokens/spacing' },
      { id: 'radii', name: 'Corner Radii Scale', path: '/tokens/radii' },
      { id: 'shadows', name: 'Elevation & Shadows', path: '/tokens/shadows' },
      { id: 'motion', name: 'Motion & Transitions', path: '/tokens/motion' },
    ],
  },
  {
    id: 'components',
    title: 'Components',
    path: '/components',
    badge: 20,
    collapsible: true,
    defaultOpen: true,
    items: [
      { id: 'all-components', name: 'All components', path: '/components' },
      {
        id: 'inputs',
        name: 'Inputs',
        isCategoryHeader: true,
        items: [
          { id: 'button', name: 'Button', path: '/components/button' },
          { id: 'text-input', name: 'TextInput', path: '/components/text-input' },
          { id: 'select', name: 'Select', path: '/components/select' },
          { id: 'checkbox', name: 'Checkbox', path: '/components/checkbox' },
          { id: 'radio', name: 'Radio', path: '/components/radio' },
          { id: 'switch', name: 'Switch', path: '/components/switch' },
        ],
      },
      {
        id: 'data-display',
        name: 'Data Display',
        isCategoryHeader: true,
        items: [
          { id: 'accordion', name: 'Accordion', path: '/components/accordion' },
          { id: 'avatar', name: 'Avatar', path: '/components/avatar' },
          { id: 'badge', name: 'Badge', path: '/components/badge' },
          { id: 'chip', name: 'Chip', path: '/components/chip' },
          { id: 'divider', name: 'Divider', path: '/components/divider' },
          { id: 'list', name: 'List', path: '/components/list' },
        ],
      },
      {
        id: 'feedback',
        name: 'Feedback',
        isCategoryHeader: true,
        items: [
          { id: 'alert', name: 'Alert', path: '/components/alert' },
          { id: 'dialog', name: 'Dialog (Modal)', path: '/components/dialog' },
          { id: 'skeleton', name: 'Skeleton', path: '/components/skeleton' },
          { id: 'spinner', name: 'Spinner', path: '/components/spinner' },
          { id: 'tooltip', name: 'Tooltip', path: '/components/tooltip' },
        ],
      },
      {
        id: 'surfaces',
        name: 'Surfaces',
        isCategoryHeader: true,
        items: [
          { id: 'card', name: 'Card', path: '/components/card' },
        ],
      },
      {
        id: 'navigation',
        name: 'Navigation',
        isCategoryHeader: true,
        items: [
          { id: 'breadcrumbs', name: 'Breadcrumbs', path: '/components/breadcrumbs' },
          { id: 'tabs', name: 'Tabs', path: '/components/tabs' },
        ],
      },
    ],
  },
  {
    id: 'functional-hooks',
    title: 'Functional Hooks',
    path: '/hooks',
    badge: 10,
    collapsible: true,
    defaultOpen: true,
    items: [
      { id: 'all-hooks', name: 'All hooks', path: '/hooks' },
      ...HOOK_CATEGORIES,
    ],
  },
  {
    id: 'icons-section',
    title: 'Icons',
    items: [
      {
        id: 'icons',
        name: '12,253 Icons Catalog',
        path: '/icons',
        badge: 'Code-Split',
        badgeColor: 'primary',
      },
    ],
  },
];

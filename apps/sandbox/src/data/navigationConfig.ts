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
      { id: 'compound-button', name: 'Compound Button', category: 'Inputs' },
      { id: 'split-button', name: 'Split Button', category: 'Inputs' },
      { id: 'button-group', name: 'Button Group', category: 'Inputs' },
      { id: 'icon-button', name: 'Icon Button', category: 'Inputs' },
      { id: 'text-input', name: 'TextInput', category: 'Inputs' },
      { id: 'textarea', name: 'TextArea', category: 'Inputs' },
      { id: 'select', name: 'Select', category: 'Inputs' },
      { id: 'combobox', name: 'Combobox', category: 'Inputs' },
      { id: 'autocomplete', name: 'Autocomplete', category: 'Inputs' },
      { id: 'checkbox', name: 'Checkbox', category: 'Inputs' },
      { id: 'checkbox-group', name: 'Checkbox Group', category: 'Inputs' },
      { id: 'radio', name: 'Radio', category: 'Inputs' },
      { id: 'radio-group', name: 'Radio Group', category: 'Inputs' },
      { id: 'switch', name: 'Switch', category: 'Inputs' },
      { id: 'slider', name: 'Slider', category: 'Inputs' },
      { id: 'rating', name: 'Rating', category: 'Inputs' },
      { id: 'color-picker', name: 'Color Picker', category: 'Inputs' },
    ],
  },
  {
    id: 'data-display',
    name: 'Data Display',
    components: [
      { id: 'accordion', name: 'Accordion', category: 'Data Display' },
      { id: 'avatar', name: 'Avatar', category: 'Data Display' },
      { id: 'avatar-group', name: 'Avatar Group', category: 'Data Display' },
      { id: 'badge', name: 'Badge', category: 'Data Display' },
      { id: 'chip', name: 'Chip', category: 'Data Display' },
      { id: 'divider', name: 'Divider', category: 'Data Display' },
      { id: 'list', name: 'List', category: 'Data Display' },
      { id: 'table', name: 'Table', category: 'Data Display' },
      { id: 'data-grid', name: 'Data Grid', category: 'Data Display' },
      { id: 'tree-view', name: 'Tree View', category: 'Data Display' },
      { id: 'tag', name: 'Tag', category: 'Data Display' },
      { id: 'timeline', name: 'Timeline', category: 'Data Display' },
      { id: 'statistic', name: 'Statistic', category: 'Data Display' },
      { id: 'calendar', name: 'Calendar', category: 'Data Display' },
    ],
  },
  {
    id: 'feedback',
    name: 'Feedback',
    components: [
      { id: 'alert', name: 'Alert', category: 'Feedback' },
      { id: 'dialog', name: 'Dialog (Modal)', category: 'Feedback' },
      { id: 'drawer', name: 'Drawer', category: 'Feedback' },
      { id: 'popover', name: 'Popover', category: 'Feedback' },
      { id: 'progress-bar', name: 'Progress Bar', category: 'Feedback' },
      { id: 'skeleton', name: 'Skeleton', category: 'Feedback' },
      { id: 'spinner', name: 'Spinner', category: 'Feedback' },
      { id: 'toast', name: 'Toast', category: 'Feedback' },
      { id: 'tooltip', name: 'Tooltip', category: 'Feedback' },
    ],
  },
  {
    id: 'surfaces',
    name: 'Surfaces',
    components: [
      { id: 'card', name: 'Card', category: 'Surfaces' },
      { id: 'media-card', name: 'Media Card', category: 'Surfaces' },
      { id: 'box', name: 'Box', category: 'Surfaces' },
      { id: 'container', name: 'Container', category: 'Surfaces' },
      { id: 'grid', name: 'Grid', category: 'Surfaces' },
      { id: 'stack', name: 'Stack', category: 'Surfaces' },
      { id: 'paper', name: 'Paper', category: 'Surfaces' },
      { id: 'app-bar', name: 'App Bar', category: 'Surfaces' },
    ],
  },
  {
    id: 'navigation',
    name: 'Navigation',
    components: [
      { id: 'breadcrumbs', name: 'Breadcrumbs', category: 'Navigation' },
      { id: 'tabs', name: 'Tabs', category: 'Navigation' },
      { id: 'pagination', name: 'Pagination', category: 'Navigation' },
      { id: 'stepper', name: 'Stepper', category: 'Navigation' },
      { id: 'menu', name: 'Menu', category: 'Navigation' },
      { id: 'link', name: 'Link', category: 'Navigation' },
      { id: 'speed-dial', name: 'Speed Dial', category: 'Navigation' },
      { id: 'bottom-nav', name: 'Bottom Navigation', category: 'Navigation' },
      { id: 'platform-chassis', name: 'Platform Chassis', category: 'Navigation' },
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
      { id: 'use-debounce', name: 'useDebounce', path: '/hooks/use-debounce', isMonospace: true },
      { id: 'use-throttle', name: 'useThrottle', path: '/hooks/use-throttle', isMonospace: true },
      { id: 'use-hover', name: 'useHover', path: '/hooks/use-hover', isMonospace: true },
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
      { id: 'use-platform', name: 'usePlatform', path: '/hooks/use-platform', isMonospace: true },
      { id: 'use-breakpoint', name: 'useBreakpoint', path: '/hooks/use-breakpoint', isMonospace: true },
    ],
  },
  {
    id: 'lifecycle-measurement',
    name: 'Lifecycle & Measurement',
    isCategoryHeader: true,
    items: [
      { id: 'use-id', name: 'useId', path: '/hooks/use-id', isMonospace: true },
      { id: 'use-event-listener', name: 'useEventListener', path: '/hooks/use-event-listener', isMonospace: true },
      { id: 'use-intersection-observer', name: 'useIntersectionObserver', path: '/hooks/use-intersection-observer', isMonospace: true },
      { id: 'use-element-size', name: 'useElementSize', path: '/hooks/use-element-size', isMonospace: true },
      { id: 'use-window-size', name: 'useWindowSize', path: '/hooks/use-window-size', isMonospace: true },
      { id: 'use-scroll-lock', name: 'useScrollLock', path: '/hooks/use-scroll-lock', isMonospace: true },
    ],
  },
  {
    id: 'utilities-feedback',
    name: 'Utilities & Feedback',
    isCategoryHeader: true,
    items: [
      { id: 'use-toast', name: 'useToast', path: '/hooks/use-toast', isMonospace: true },
      { id: 'use-clipboard', name: 'useClipboard', path: '/hooks/use-clipboard', isMonospace: true },
      { id: 'use-local-storage', name: 'useLocalStorage', path: '/hooks/use-local-storage', isMonospace: true },
      { id: 'use-previous', name: 'usePrevious', path: '/hooks/use-previous', isMonospace: true },
      { id: 'use-async', name: 'useAsync', path: '/hooks/use-async', isMonospace: true },
      { id: 'use-interval', name: 'useInterval', path: '/hooks/use-interval', isMonospace: true },
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
      { id: 'shadows', name: 'Shadows & Elevation', path: '/tokens/shadows' },
      { id: 'motion', name: 'Motion Curves', path: '/motion' },
    ],
  },
  {
    id: 'components',
    title: 'Components',
    path: '/components',
    badge: 58,
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
          { id: 'compound-button', name: 'Compound Button', path: '/components/compound-button' },
          { id: 'split-button', name: 'Split Button', path: '/components/split-button' },
          { id: 'button-group', name: 'Button Group', path: '/components/button-group' },
          { id: 'icon-button', name: 'Icon Button', path: '/components/icon-button' },
          { id: 'text-input', name: 'TextInput', path: '/components/text-input' },
          { id: 'textarea', name: 'TextArea', path: '/components/textarea' },
          { id: 'select', name: 'Select', path: '/components/select' },
          { id: 'combobox', name: 'Combobox', path: '/components/combobox' },
          { id: 'autocomplete', name: 'Autocomplete', path: '/components/autocomplete' },
          { id: 'checkbox', name: 'Checkbox', path: '/components/checkbox' },
          { id: 'checkbox-group', name: 'Checkbox Group', path: '/components/checkbox-group' },
          { id: 'radio', name: 'Radio', path: '/components/radio' },
          { id: 'radio-group', name: 'Radio Group', path: '/components/radio-group' },
          { id: 'switch', name: 'Switch', path: '/components/switch' },
          { id: 'slider', name: 'Slider', path: '/components/slider' },
          { id: 'rating', name: 'Rating', path: '/components/rating' },
          { id: 'color-picker', name: 'Color Picker', path: '/components/color-picker' },
        ],
      },
      {
        id: 'data-display',
        name: 'Data Display',
        isCategoryHeader: true,
        items: [
          { id: 'accordion', name: 'Accordion', path: '/components/accordion' },
          { id: 'avatar', name: 'Avatar', path: '/components/avatar' },
          { id: 'avatar-group', name: 'Avatar Group', path: '/components/avatar-group' },
          { id: 'badge', name: 'Badge', path: '/components/badge' },
          { id: 'chip', name: 'Chip', path: '/components/chip' },
          { id: 'divider', name: 'Divider', path: '/components/divider' },
          { id: 'list', name: 'List', path: '/components/list' },
          { id: 'table', name: 'Table', path: '/components/table' },
          { id: 'data-grid', name: 'Data Grid', path: '/components/data-grid' },
          { id: 'tree-view', name: 'Tree View', path: '/components/tree-view' },
          { id: 'tag', name: 'Tag', path: '/components/tag' },
          { id: 'timeline', name: 'Timeline', path: '/components/timeline' },
          { id: 'statistic', name: 'Statistic', path: '/components/statistic' },
          { id: 'calendar', name: 'Calendar', path: '/components/calendar' },
        ],
      },
      {
        id: 'feedback',
        name: 'Feedback',
        isCategoryHeader: true,
        items: [
          { id: 'alert', name: 'Alert', path: '/components/alert' },
          { id: 'dialog', name: 'Dialog (Modal)', path: '/components/dialog' },
          { id: 'drawer', name: 'Drawer', path: '/components/drawer' },
          { id: 'popover', name: 'Popover', path: '/components/popover' },
          { id: 'progress-bar', name: 'Progress Bar', path: '/components/progress-bar' },
          { id: 'skeleton', name: 'Skeleton', path: '/components/skeleton' },
          { id: 'spinner', name: 'Spinner', path: '/components/spinner' },
          { id: 'toast', name: 'Toast', path: '/components/toast' },
          { id: 'tooltip', name: 'Tooltip', path: '/components/tooltip' },
        ],
      },
      {
        id: 'surfaces',
        name: 'Surfaces',
        isCategoryHeader: true,
        items: [
          { id: 'card', name: 'Card', path: '/components/card' },
          { id: 'media-card', name: 'Media Card', path: '/components/media-card' },
          { id: 'box', name: 'Box', path: '/components/box' },
          { id: 'container', name: 'Container', path: '/components/container' },
          { id: 'grid', name: 'Grid', path: '/components/grid' },
          { id: 'stack', name: 'Stack', path: '/components/stack' },
          { id: 'paper', name: 'Paper', path: '/components/paper' },
          { id: 'app-bar', name: 'App Bar', path: '/components/app-bar' },
        ],
      },
      {
        id: 'navigation',
        name: 'Navigation',
        isCategoryHeader: true,
        items: [
          { id: 'breadcrumbs', name: 'Breadcrumbs', path: '/components/breadcrumbs' },
          { id: 'tabs', name: 'Tabs', path: '/components/tabs' },
          { id: 'pagination', name: 'Pagination', path: '/components/pagination' },
          { id: 'stepper', name: 'Stepper', path: '/components/stepper' },
          { id: 'menu', name: 'Menu', path: '/components/menu' },
          { id: 'link', name: 'Link', path: '/components/link' },
          { id: 'speed-dial', name: 'Speed Dial', path: '/components/speed-dial' },
          { id: 'bottom-nav', name: 'Bottom Navigation', path: '/components/bottom-nav' },
          { id: 'platform-chassis', name: 'Platform Chassis', path: '/components/platform-chassis' },
        ],
      },
    ],
  },
  {
    id: 'functional-hooks',
    title: 'Functional Hooks',
    path: '/hooks',
    badge: 25,
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

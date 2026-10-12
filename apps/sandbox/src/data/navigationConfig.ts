/**
 * Central Navigation Configuration Schema & Array
 * Spectra Enterprise Master Navigation Architecture
 * Enables data-driven, maintainable, and recursively consistent sidebar rendering.
 * All parent categories, child items, and sub-child items are strictly sorted A-Z.
 */

export interface NavLeafItem {
  id: string;
  name: string;
  path: string;
  badge?: string;
  badgeColor?: 'primary' | 'success' | 'warning' | 'neutral';
  isMonospace?: boolean;
  children?: NavLeafItem[];
}

export interface ComponentSubItem {
  id: string;
  name: string;
  path: string;
}

export interface ComponentItem {
  id: string;
  name: string;
  category: string;
  children?: ComponentSubItem[];
}

export interface ComponentCategory {
  id: string;
  name: string;
  components: ComponentItem[];
}

/**
 * Master Component Categories (Sorted strictly A-Z by category name)
 * Children within each category are sorted strictly A-Z by name.
 */
export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    id: 'data-display',
    name: 'Data Display',
    components: [
      { id: 'accordion', name: 'Accordion', category: 'Data Display' },
      { id: 'avatar', name: 'Avatar', category: 'Data Display' },
      { id: 'avatar-group', name: 'Avatar Group', category: 'Data Display' },
      { id: 'badge', name: 'Badge', category: 'Data Display' },
      { id: 'calendar', name: 'Calendar', category: 'Data Display' },
      { id: 'carousel', name: 'Carousel', category: 'Data Display' },
      { id: 'carousel-nav', name: 'Carousel Nav', category: 'Data Display' },
      { id: 'chip', name: 'Chip', category: 'Data Display' },
      { id: 'data-grid', name: 'Data Grid', category: 'Data Display' },
      { id: 'divider', name: 'Divider', category: 'Data Display' },
      { id: 'image', name: 'Image', category: 'Data Display' },
      { id: 'interaction-tag', name: 'Interaction Tag', category: 'Data Display' },
      { id: 'list', name: 'List', category: 'Data Display' },
      { id: 'list-view', name: 'List View', category: 'Data Display' },
      { id: 'persona', name: 'Persona', category: 'Data Display' },
      { id: 'statistic', name: 'Statistic', category: 'Data Display' },
      { id: 'status-indicator', name: 'Status Indicator', category: 'Data Display' },
      { id: 'table', name: 'Table', category: 'Data Display' },
      { id: 'tag', name: 'Tag', category: 'Data Display' },
      { id: 'tag-group', name: 'Tag Group', category: 'Data Display' },
      { id: 'timeline', name: 'Timeline', category: 'Data Display' },
      { id: 'tree-view', name: 'Tree View', category: 'Data Display' },
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
      { id: 'teaching-popover', name: 'Teaching Popover', category: 'Feedback' },
      { id: 'toast', name: 'Toast', category: 'Feedback' },
      { id: 'tooltip', name: 'Tooltip', category: 'Feedback' },
    ],
  },
  {
    id: 'inputs',
    name: 'Inputs',
    components: [
      { id: 'autocomplete', name: 'Autocomplete', category: 'Inputs' },
      { id: 'button', name: 'Button', category: 'Inputs' },
      { id: 'button-group', name: 'Button Group', category: 'Inputs' },
      { id: 'checkbox', name: 'Checkbox', category: 'Inputs' },
      { id: 'checkbox-group', name: 'Checkbox Group', category: 'Inputs' },
      { id: 'color-picker', name: 'Color Picker', category: 'Inputs' },
      { id: 'combobox', name: 'Combobox', category: 'Inputs' },
      { id: 'compound-button', name: 'Compound Button', category: 'Inputs' },
      { id: 'copy-button', name: 'Copy Button', category: 'Inputs' },
      { id: 'date-picker', name: 'Date Picker', category: 'Inputs' },
      { id: 'field', name: 'Field', category: 'Inputs' },
      { id: 'icon-button', name: 'Icon Button', category: 'Inputs' },
      { id: 'info-label', name: 'InfoLabel', category: 'Inputs' },
      { id: 'label', name: 'Label', category: 'Inputs' },
      { id: 'menu-button', name: 'Menu Button', category: 'Inputs' },
      { id: 'radio', name: 'Radio', category: 'Inputs' },
      { id: 'radio-group', name: 'Radio Group', category: 'Inputs' },
      { id: 'rating', name: 'Rating', category: 'Inputs' },
      { id: 'rating-display', name: 'Rating Display', category: 'Inputs' },
      { id: 'search-box', name: 'SearchBox', category: 'Inputs' },
      { id: 'select', name: 'Select', category: 'Inputs' },
      { id: 'slider', name: 'Slider', category: 'Inputs' },
      { id: 'spin-button', name: 'Spin Button', category: 'Inputs' },
      { id: 'split-button', name: 'Split Button', category: 'Inputs' },
      { id: 'switch', name: 'Switch', category: 'Inputs' },
      { id: 'tag-picker', name: 'TagPicker', category: 'Inputs' },
      { id: 'textarea', name: 'TextArea', category: 'Inputs' },
      { id: 'text-input', name: 'TextInput', category: 'Inputs' },
      { id: 'time-picker', name: 'Time Picker', category: 'Inputs' },
      { id: 'toggle-button', name: 'Toggle Button', category: 'Inputs' },
    ],
  },
  {
    id: 'navigation',
    name: 'Navigation',
    components: [
      { id: 'app-bar', name: 'App Bar', category: 'Navigation' },
      { id: 'bottom-nav', name: 'Bottom Navigation', category: 'Navigation' },
      { id: 'breadcrumbs', name: 'Breadcrumbs', category: 'Navigation' },
      { id: 'link', name: 'Link', category: 'Navigation' },
      { id: 'menu', name: 'Menu', category: 'Navigation' },
      { id: 'menu-grid', name: 'Menu Grid', category: 'Navigation' },
      { id: 'overflow', name: 'Overflow', category: 'Navigation' },
      { id: 'pagination', name: 'Pagination', category: 'Navigation' },
      { id: 'platform-chassis', name: 'Platform Chassis', category: 'Navigation' },
      { id: 'speed-dial', name: 'Speed Dial', category: 'Navigation' },
      { id: 'stepper', name: 'Stepper', category: 'Navigation' },
      { id: 'tabs', name: 'Tabs', category: 'Navigation' },
      { id: 'toolbar', name: 'Toolbar', category: 'Navigation' },
    ],
  },
  {
    id: 'surfaces',
    name: 'Surfaces',
    components: [
      { id: 'box', name: 'Box', category: 'Surfaces' },
      { id: 'card', name: 'Card', category: 'Surfaces' },
      { id: 'card-footer', name: 'Card Footer', category: 'Surfaces' },
      { id: 'card-header', name: 'Card Header', category: 'Surfaces' },
      { id: 'card-preview', name: 'Card Preview', category: 'Surfaces' },
      { id: 'container', name: 'Container', category: 'Surfaces' },
      { id: 'grid', name: 'Grid', category: 'Surfaces' },
      { id: 'media-card', name: 'Media Card', category: 'Surfaces' },
      { id: 'paper', name: 'Paper', category: 'Surfaces' },
      { id: 'portal', name: 'Portal', category: 'Surfaces' },
      { id: 'portal-mount', name: 'Portal Mount', category: 'Surfaces' },
      { id: 'stack', name: 'Stack', category: 'Surfaces' },
      { id: 'web-view-box', name: 'Web View Box', category: 'Surfaces' },
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

/**
 * Functional Hooks Categories (Sorted strictly A-Z by category name)
 * Items inside each hook category sorted strictly A-Z.
 */
export const HOOK_CATEGORIES: NavCategoryGroup[] = [
  {
    id: 'lifecycle-measurement',
    name: 'Lifecycle & Measurement',
    isCategoryHeader: true,
    items: [
      { id: 'use-element-size', name: 'useElementSize', path: '/hooks/use-element-size', isMonospace: true },
      { id: 'use-event-listener', name: 'useEventListener', path: '/hooks/use-event-listener', isMonospace: true },
      { id: 'use-id', name: 'useId', path: '/hooks/use-id', isMonospace: true },
      { id: 'use-intersection-observer', name: 'useIntersectionObserver', path: '/hooks/use-intersection-observer', isMonospace: true },
      { id: 'use-scroll-lock', name: 'useScrollLock', path: '/hooks/use-scroll-lock', isMonospace: true },
      { id: 'use-window-size', name: 'useWindowSize', path: '/hooks/use-window-size', isMonospace: true },
    ],
  },
  {
    id: 'state-interaction',
    name: 'State & Interaction',
    isCategoryHeader: true,
    items: [
      { id: 'use-controllable-state', name: 'useControllableState', path: '/hooks/use-controllable-state', isMonospace: true },
      { id: 'use-debounce', name: 'useDebounce', path: '/hooks/use-debounce', isMonospace: true },
      { id: 'use-disclosure', name: 'useDisclosure', path: '/hooks/use-disclosure', isMonospace: true },
      { id: 'use-focus-ring', name: 'useFocusRing', path: '/hooks/use-focus-ring', isMonospace: true },
      { id: 'use-hover', name: 'useHover', path: '/hooks/use-hover', isMonospace: true },
      { id: 'use-outside-click', name: 'useOutsideClick', path: '/hooks/use-outside-click', isMonospace: true },
      { id: 'use-throttle', name: 'useThrottle', path: '/hooks/use-throttle', isMonospace: true },
    ],
  },
  {
    id: 'theme-environment',
    name: 'Theme & Environment',
    isCategoryHeader: true,
    items: [
      { id: 'use-breakpoint', name: 'useBreakpoint', path: '/hooks/use-breakpoint', isMonospace: true },
      { id: 'use-color-scheme', name: 'useColorScheme', path: '/hooks/use-color-scheme', isMonospace: true },
      { id: 'use-media-query', name: 'useMediaQuery', path: '/hooks/use-media-query', isMonospace: true },
      { id: 'use-platform', name: 'usePlatform', path: '/hooks/use-platform', isMonospace: true },
      { id: 'use-reduced-motion', name: 'useReducedMotion', path: '/hooks/use-reduced-motion', isMonospace: true },
      { id: 'use-rtl', name: 'useRTL', path: '/hooks/use-rtl', isMonospace: true },
    ],
  },
  {
    id: 'utilities-feedback',
    name: 'Utilities & Feedback',
    isCategoryHeader: true,
    items: [
      { id: 'use-async', name: 'useAsync', path: '/hooks/use-async', isMonospace: true },
      { id: 'use-clipboard', name: 'useClipboard', path: '/hooks/use-clipboard', isMonospace: true },
      { id: 'use-interval', name: 'useInterval', path: '/hooks/use-interval', isMonospace: true },
      { id: 'use-local-storage', name: 'useLocalStorage', path: '/hooks/use-local-storage', isMonospace: true },
      { id: 'use-previous', name: 'usePrevious', path: '/hooks/use-previous', isMonospace: true },
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
      { id: 'shadows', name: 'Shadows & Elevation', path: '/tokens/shadows' },
      { id: 'motion', name: 'Motion Curves', path: '/motion' },
    ],
  },
  {
    id: 'components',
    title: 'Components',
    path: '/components',
    badge: 62,
    collapsible: true,
    defaultOpen: true,
    items: [
      { id: 'all-components', name: 'All components', path: '/components' },
      ...COMPONENT_CATEGORIES.map((cat) => ({
        id: cat.id,
        name: cat.name,
        isCategoryHeader: true as const,
        items: cat.components.map((c) => ({
          id: c.id,
          name: c.name,
          path: `/components/${c.id}`,
          children: c.children?.map((sub) => ({
            id: sub.id,
            name: sub.name,
            path: sub.path,
          })),
        })),
      })),
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
        id: 'icons-catalog',
        name: 'Browse Catalog',
        path: '/icons',
        badge: '14,255',
        badgeColor: 'primary',
      },
    ],
  },
];

/**
 * Master Motion Navigation Group (Fluent 2 Motion Introduction & Atoms)
 */
export const MOTION_NAVIGATION_GROUP: NavSection = {
  id: 'motion-section',
  title: 'Motion',
  collapsible: true,
  defaultOpen: false,
  items: [
    { id: 'motion-overview', name: 'Motion Overview', path: '/motion' },
    { id: 'motion-atoms', name: 'Atoms & Durations', path: '/motion/atoms' },
    { id: 'motion-blur', name: 'Blur Transitions', path: '/motion/blur' },
    { id: 'motion-collapse', name: 'Collapse & Expand', path: '/motion/collapse' },
    { id: 'motion-fade', name: 'Fade & Opacity', path: '/motion/fade' },
    { id: 'motion-rotate', name: 'Rotate & Spin', path: '/motion/rotate' },
    { id: 'motion-scale', name: 'Scale & Elevation', path: '/motion/scale' },
    { id: 'motion-slide', name: 'Slide & Sheets', path: '/motion/slide' },
    { id: 'motion-tokens', name: 'Motion Tokens', path: '/motion/tokens' },
    { id: 'motion-stagger', name: 'Stagger Choreography', path: '/motion/stagger' },
  ],
};

/**
 * Master Utilities Navigation Group (Theme, Positioning, Focus Management, ARIA-Live)
 */
export const UTILITIES_NAVIGATION_GROUP: NavSection = {
  id: 'utilities-section',
  title: 'Utilities',
  collapsible: true,
  defaultOpen: false,
  items: [
    {
      id: 'theme-utilities',
      name: 'Theme',
      isCategoryHeader: true as const,
      items: [
        { id: 'util-css-rule', name: 'createCSSRuleFromTheme', path: '/utilities/createCSSRuleFromTheme', isMonospace: true },
      ],
    },
    {
      id: 'positioning-utilities',
      name: 'Positioning',
      isCategoryHeader: true as const,
      items: [
        { id: 'util-safezone', name: 'useSafeZoneArea', path: '/utilities/useSafeZoneArea', isMonospace: true },
      ],
    },
    {
      id: 'focus-management-utilities',
      name: 'Focus Management',
      isCategoryHeader: true as const,
      items: [
        { id: 'util-arrow-nav', name: 'useArrowNavigationGroup', path: '/utilities/useArrowNavigationGroup', isMonospace: true },
        { id: 'util-focusable-grp', name: 'useFocusableGroup', path: '/utilities/useFocusableGroup', isMonospace: true },
        { id: 'util-focus-finders', name: 'useFocusFinders', path: '/utilities/useFocusFinders', isMonospace: true },
        { id: 'util-modal-attr', name: 'useModalAttributes', path: '/utilities/useModalAttributes', isMonospace: true },
        { id: 'util-observed-el', name: 'useObservedElement', path: '/utilities/useObservedElement', isMonospace: true },
        { id: 'util-restore-focus', name: 'useRestoreFocusSource', path: '/utilities/useRestoreFocusSource', isMonospace: true },
        { id: 'util-uncontrolled-focus', name: 'useUncontrolledFocus', path: '/utilities/useUncontrolledFocus', isMonospace: true },
      ],
    },
    {
      id: 'aria-live-utilities',
      name: 'ARIA-Live',
      isCategoryHeader: true as const,
      items: [
        { id: 'util-aria-announcer', name: 'AriaLiveAnnouncer', path: '/utilities/AriaLiveAnnouncer', isMonospace: true },
        { id: 'util-use-announce', name: 'useAnnounce', path: '/utilities/useAnnounce', isMonospace: true },
        { id: 'util-typing-announce', name: 'useTypingAnnounce', path: '/utilities/useTypingAnnounce', isMonospace: true },
      ],
    },
  ],
};

/**
 * Master Architecture & Guides (Responsive UI, Localization, Extensible Themes, Bundle Optimization)
 */
export const GUIDES_NAVIGATION_GROUP: NavSection = {
  id: 'architecture-guides',
  title: 'Architecture & Guides',
  collapsible: true,
  defaultOpen: false,
  items: [
    { id: 'guide-responsive', name: 'Responsive UI', path: '/guides/responsive-ui' },
    { id: 'guide-localization', name: 'Localization', path: '/guides/localization' },
    { id: 'guide-api', name: 'API Guidelines', path: '/guides/api' },
    { id: 'guide-themes', name: 'Building Extensible Themes', path: '/guides/building-extensible-themes' },
    { id: 'guide-bundle', name: 'Minimizing Bundle Size', path: '/guides/minimizing-bundle-size' },
    { id: 'guide-container-queries', name: 'Container Queries', path: '/guides/container-queries' },
    { id: 'guide-density', name: 'Density & Sizing', path: '/guides/density' },
    { id: 'guide-focus-visible', name: 'Focus Visible', path: '/guides/focus-visible' },
    { id: 'guide-z-index', name: 'Z-Index Elevation', path: '/guides/z-index' },
    { id: 'guide-transitions', name: 'Transitions & Motion', path: '/guides/transitions' },
    { id: 'guide-shadow-dom', name: 'Shadow DOM Support', path: '/guides/shadow-dom' },
    { id: 'guide-darkmode', name: 'Dark Mode Baseline', path: '/guides/dark-mode' },
    { id: 'guide-rtl', name: 'Right-to-Left (RTL)', path: '/guides/right-to-left' },
  ],
};

// Register all groups in global sidebar navigation list
SIDEBAR_NAVIGATION.push(MOTION_NAVIGATION_GROUP, UTILITIES_NAVIGATION_GROUP, GUIDES_NAVIGATION_GROUP);

import { Platform, isPlatformSupported, getHook } from '@winplaybox/platform-capabilities';

/**
 * Filter component categories strictly for the active platform.
 * Unsupported components disappear completely from that platform's catalog.
 */
export function getComponentCategoriesForPlatform(platform: Platform): ComponentCategory[] {
  return COMPONENT_CATEGORIES.map((cat) => ({
    ...cat,
    components: cat.components.filter((c) => isPlatformSupported(c.id, platform)),
  })).filter((cat) => cat.components.length > 0);
}

/**
 * Filter hook categories strictly for the active platform.
 * Browser-only hooks disappear completely on native runtimes.
 */
export function getHookCategoriesForPlatform(platform: Platform): NavCategoryGroup[] {
  return HOOK_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) => {
      const hookCap = getHook(item.id, platform);
      return hookCap !== undefined;
    }),
  })).filter((cat) => cat.items.length > 0);
}

/**
 * Build dynamic platform-first navigation tree.
 * Total badges and visible categories resolve dynamically against the active platform.
 */
export function getNavigationForPlatform(platform: Platform): NavSection[] {
  const compCategories = getComponentCategoriesForPlatform(platform);
  const totalComponents = compCategories.reduce((acc, cat) => acc + cat.components.length, 0);

  const hookCategories = getHookCategoriesForPlatform(platform);
  const totalHooks = hookCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  // Convert filtered component categories into NavCategoryGroups with children mapped
  const compCategoryGroups: NavCategoryGroup[] = compCategories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    isCategoryHeader: true,
    items: cat.components.map((c) => ({
      id: c.id,
      name: c.name,
      path: `/components/${c.id}`,
      children: c.children?.map((sub) => ({
        id: sub.id,
        name: sub.name,
        path: sub.path,
      })),
    })),
  }));

  return [
    SIDEBAR_NAVIGATION[0], // Getting Started
    SIDEBAR_NAVIGATION[1], // Design Tokens
    {
      id: 'components',
      title: 'Components',
      path: '/components',
      badge: totalComponents,
      collapsible: true,
      defaultOpen: true,
      items: [
        { id: 'all-components', name: 'All components', path: '/components' },
        ...compCategoryGroups,
      ],
    },
    {
      id: 'functional-hooks',
      title: 'Functional Hooks',
      path: '/hooks',
      badge: totalHooks,
      collapsible: true,
      defaultOpen: true,
      items: [
        { id: 'all-hooks', name: 'All hooks', path: '/hooks' },
        ...hookCategories,
      ],
    },
    MOTION_NAVIGATION_GROUP,
    UTILITIES_NAVIGATION_GROUP,
    GUIDES_NAVIGATION_GROUP,
    SIDEBAR_NAVIGATION[4], // Icons
  ];
}

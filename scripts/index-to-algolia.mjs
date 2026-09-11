/**
 * Spectra UI - Algolia Documentation & Design System Indexer
 * Indexes all components, CSS class rules, props, design tokens, hooks, and guides into Algolia.
 * 
 * Usage: node scripts/index-to-algolia.mjs
 */

const ALGOLIA_APP_ID = '777PLTTOXX';
const ALGOLIA_WRITE_KEY = 'fcfba9c6572a70085b87f83814e5eecc';
const INDEX_NAME = 'spectra_ui_docs';

const headers = {
  'Content-Type': 'application/json',
  'X-Algolia-Application-Id': ALGOLIA_APP_ID,
  'X-Algolia-API-Key': ALGOLIA_WRITE_KEY,
};

// 1. Core Documentation Guides
const guides = [
  {
    objectID: 'guide-overview',
    type: 'guide',
    section: 'DOCUMENTATION',
    title: 'Overview & Architecture',
    subtitle: 'Getting Started',
    package: '@spectra/react',
    path: '/overview',
    description: 'Autonomous cross-platform design system engine for React and React Native. Universal tokens, headless primitives, and 12,253 icons.',
    tags: ['overview', 'architecture', 'design system', 'quickstart', 'getting started'],
    importance: 95,
  },
  {
    objectID: 'guide-installation',
    type: 'guide',
    section: 'DOCUMENTATION',
    title: 'Installation & SpectraProvider',
    subtitle: 'Getting Started',
    package: '@spectra/react',
    path: '/installation',
    description: 'Quickstart setup for @spectra/react, @spectra/tokens, and @spectra/icons with dark mode and TypeScript support.',
    tags: ['installation', 'setup', 'npm', 'pnpm', 'provider', 'SpectraProvider'],
    importance: 95,
  },
  {
    objectID: 'guide-cross-platform',
    type: 'guide',
    section: 'DOCUMENTATION',
    title: 'Cross-Platform Parity (Web & Mobile)',
    subtitle: 'Getting Started',
    package: '@spectra/react',
    path: '/cross-platform',
    description: 'Single token dictionary with dual platform targets. 100% token and component parity between React DOM and React Native.',
    tags: ['cross-platform', 'react-native', 'mobile', 'universal', 'parity'],
    importance: 90,
  },
  {
    objectID: 'guide-icons',
    type: 'guide',
    section: 'DOCUMENTATION',
    title: '12,253 Vector Icons & Social Brands',
    subtitle: 'Icons',
    package: '@spectra/icons',
    path: '/icons',
    description: 'Vector SVG icon library featuring 20 authentic brand marks and filled, outlined, and two-tone icon styles.',
    tags: ['icons', 'svg', 'brands', 'social', 'vector', 'search icon'],
    importance: 90,
  },
  {
    objectID: 'guide-motion',
    type: 'guide',
    section: 'DOCUMENTATION',
    title: 'Motion, Physics & Easing Curves',
    subtitle: 'Design Tokens',
    package: '@spectra/tokens',
    path: '/tokens/motion',
    description: 'Standardized duration tokens (fast 150ms, normal 250ms, slow 400ms) and cubic-bezier easing curves.',
    tags: ['motion', 'animation', 'easing', 'physics', 'spring', 'duration'],
    importance: 85,
  },
];

// 2. Component Definitions with CSS Classes & Props
const rawComponents = [
  {
    id: 'button',
    name: 'Button',
    package: '@spectra/react',
    category: 'Actions',
    path: '/components/button',
    description: 'Primary interactive trigger for user actions. Supports 5 visual variants (primary, secondary, subtle, danger, outline), 3 sizes (sm, md, lg), loading spinner states, and left/right contextual vector icons.',
    cssClasses: [
      { rule: '.spectra-button', desc: 'Root button container styles' },
      { rule: '.spectra-button--primary', desc: 'Primary brand accent button with filled background' },
      { rule: '.spectra-button--secondary', desc: 'Secondary button with subtle surface fill' },
      { rule: '.spectra-button--subtle', desc: 'Subtle ghost button without border' },
      { rule: '.spectra-button--danger', desc: 'Destructive danger action button in red' },
      { rule: '.spectra-button--outline', desc: 'Outlined border button with transparent background' },
      { rule: '.spectra-button--sm', desc: 'Small compact density button' },
      { rule: '.spectra-button--md', desc: 'Medium standard density button' },
      { rule: '.spectra-button--lg', desc: 'Large high-touch density button' },
      { rule: '.spectra-button--loading', desc: 'Loading state replacing or accenting label with spinner' },
      { rule: '.spectra-button--disabled', desc: 'Disabled button state preventing pointer events' },
      { rule: '.spectra-button--full-width', desc: 'Button expanding to 100% container width' },
    ],
    tokens: [
      { token: '--spectra-button-bg', desc: 'Button background color' },
      { token: '--spectra-button-fg', desc: 'Button text and icon foreground color' },
      { token: '--spectra-button-border', desc: 'Button border color' },
      { token: '--spectra-button-radius', desc: 'Button corner border radius' },
    ],
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'subtle' | 'danger' | 'outline'", desc: 'Visual appearance variant.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", desc: 'Touch density and typography scale.' },
      { name: 'loading', type: 'boolean', desc: 'Animated spinner and aria-busy="true".' },
      { name: 'disabled', type: 'boolean', desc: 'Disables button interactions.' },
      { name: 'icon', type: 'ReactNode', desc: 'Contextual vector icon.' },
      { name: 'iconPosition', type: "'left' | 'right'", desc: 'Icon placement relative to label.' },
      { name: 'fullWidth', type: 'boolean', desc: 'Stretches button to 100% width.' },
      { name: 'onClick', type: '(e: MouseEvent) => void', desc: 'Click handler.' },
    ],
  },
  {
    id: 'text-input',
    name: 'TextInput',
    package: '@spectra/react',
    category: 'Inputs',
    path: '/components/text-input',
    description: 'Text fields let users enter and edit text across forms, search bars, and dialogs with built-in states for focus, error, helper text, and password visibility reveal.',
    cssClasses: [
      { rule: '.spectra-input', desc: 'Root text field container' },
      { rule: '.spectra-input--focused', desc: 'Active focus outline ring state' },
      { rule: '.spectra-input--error', desc: 'Validation error state with danger border' },
      { rule: '.spectra-input--disabled', desc: 'Disabled text field state' },
      { rule: '.spectra-input__label', desc: 'Accessible label above field' },
      { rule: '.spectra-input__field', desc: 'Native input element' },
      { rule: '.spectra-input__left-icon', desc: 'Leading icon container' },
      { rule: '.spectra-input__right-action', desc: 'Trailing action container (clear, eye reveal)' },
    ],
    tokens: [
      { token: '--spectra-input-bg', desc: 'Input field background' },
      { token: '--spectra-input-border', desc: 'Input resting border' },
      { token: '--spectra-input-focus-ring', desc: 'Input focus ring color' },
    ],
    props: [
      { name: 'label', type: 'string', desc: 'Accessible input label.' },
      { name: 'placeholder', type: 'string', desc: 'Placeholder prompt.' },
      { name: 'value', type: 'string', desc: 'Controlled value string.' },
      { name: 'onChange', type: '(e: ChangeEvent) => void', desc: 'Keystroke change handler.' },
      { name: 'error', type: 'boolean | string', desc: 'Validation error message or flag.' },
      { name: 'leftIcon', type: 'ReactNode', desc: 'Contextual leading icon.' },
      { name: 'rightAction', type: 'ReactNode', desc: 'Interactive trailing element or password toggle.' },
    ],
  },
  {
    id: 'select',
    name: 'Select',
    package: '@spectra/react',
    category: 'Inputs',
    path: '/components/select',
    description: 'Accessible dropdown selection menu supporting grouped categories (optgroup), placeholder prompts, validation errors, and keyboard navigation.',
    cssClasses: [
      { rule: '.spectra-select', desc: 'Root select trigger container' },
      { rule: '.spectra-select--open', desc: 'Expanded dropdown open state' },
      { rule: '.spectra-select--error', desc: 'Validation error border' },
      { rule: '.spectra-select__menu', desc: 'Dropdown floating popup menu' },
      { rule: '.spectra-select__option', desc: 'Selectable dropdown option item' },
      { rule: '.spectra-select__group-label', desc: 'Categorized optgroup header' },
    ],
    tokens: [
      { token: '--spectra-select-bg', desc: 'Select dropdown surface color' },
      { token: '--spectra-select-border', desc: 'Select trigger border' },
    ],
    props: [
      { name: 'options', type: 'SelectOption[] | SelectGroup[]', desc: 'Dropdown items or optgroups.' },
      { name: 'value', type: 'string', desc: 'Selected item value.' },
      { name: 'onChange', type: '(val: string) => void', desc: 'Selection callback.' },
    ],
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    package: '@spectra/react',
    category: 'Inputs',
    path: '/components/checkbox',
    description: 'Binary and multi-select checkbox control with support for indeterminate parent-child states, descriptive labels, and keyboard activation.',
    cssClasses: [
      { rule: '.spectra-checkbox', desc: 'Root checkbox label container' },
      { rule: '.spectra-checkbox--checked', desc: 'Active checked square state' },
      { rule: '.spectra-checkbox--indeterminate', desc: 'Partial indeterminate minus line state' },
      { rule: '.spectra-checkbox--disabled', desc: 'Disabled checkbox control' },
    ],
    tokens: [
      { token: '--spectra-checkbox-size', desc: 'Checkbox square dimensions' },
      { token: '--spectra-checkbox-bg-checked', desc: 'Active checked background' },
    ],
    props: [
      { name: 'checked', type: 'boolean', desc: 'Checked binary state.' },
      { name: 'indeterminate', type: 'boolean', desc: 'Indeterminate parent selection state.' },
      { name: 'onChange', type: '(checked: boolean) => void', desc: 'State toggle callback.' },
    ],
  },
  {
    id: 'radio',
    name: 'Radio',
    package: '@spectra/react',
    category: 'Inputs',
    path: '/components/radio',
    description: 'Mutually exclusive selection in radio groups with arrow key navigation, focus ring management, and helper text.',
    cssClasses: [
      { rule: '.spectra-radio', desc: 'Root radio container' },
      { rule: '.spectra-radio--checked', desc: 'Active selected radio circle' },
      { rule: '.spectra-radio__dot', desc: 'Inner filled indicator dot' },
    ],
    tokens: [
      { token: '--spectra-radio-size', desc: 'Outer radio circle diameter' },
    ],
    props: [
      { name: 'value', type: 'string', desc: 'Unique radio identifier.' },
      { name: 'checked', type: 'boolean', desc: 'Selection state.' },
    ],
  },
  {
    id: 'switch',
    name: 'Switch',
    package: '@spectra/react',
    category: 'Inputs',
    path: '/components/switch',
    description: 'Instant binary setting toggle switch with smooth physics animations, touch drag support, and accessible role="switch".',
    cssClasses: [
      { rule: '.spectra-switch', desc: 'Root switch track and thumb' },
      { rule: '.spectra-switch--checked', desc: 'Active toggled switch track' },
      { rule: '.spectra-switch__thumb', desc: 'Sliding circular thumb handle' },
    ],
    tokens: [
      { token: '--spectra-switch-width', desc: 'Switch track width' },
      { token: '--spectra-switch-bg-checked', desc: 'Active track color' },
    ],
    props: [
      { name: 'checked', type: 'boolean', desc: 'Active toggled state.' },
      { name: 'onChange', type: '(checked: boolean) => void', desc: 'Toggle callback.' },
    ],
  },
  {
    id: 'avatar',
    name: 'Avatar',
    package: '@spectra/react',
    category: 'Data Display',
    path: '/components/avatar',
    description: 'Visual representation of a user or entity with initials fallback, color tints, and presence badges (online, busy, away, offline).',
    cssClasses: [
      { rule: '.spectra-avatar', desc: 'Root circular avatar container' },
      { rule: '.spectra-avatar__image', desc: 'User profile image' },
      { rule: '.spectra-avatar__fallback', desc: 'Text initials fallback' },
      { rule: '.spectra-avatar__presence', desc: 'Status dot (online, busy, away, offline)' },
    ],
    tokens: [
      { token: '--spectra-avatar-size', desc: 'Avatar diameter' },
    ],
    props: [
      { name: 'src', type: 'string', desc: 'Image URL.' },
      { name: 'name', type: 'string', desc: 'User name for initials and alt text.' },
      { name: 'status', type: "'online' | 'busy' | 'away' | 'offline'", desc: 'Presence indicator.' },
    ],
  },
  {
    id: 'badge',
    name: 'Badge',
    package: '@spectra/react',
    category: 'Data Display',
    path: '/components/badge',
    description: 'Compact status tags, numerical counters, and semantic chips with neutral, primary, success, warning, and danger variants.',
    cssClasses: [
      { rule: '.spectra-badge', desc: 'Root pill badge' },
      { rule: '.spectra-badge--primary', desc: 'Brand accent badge' },
      { rule: '.spectra-badge--success', desc: 'Positive confirmation badge' },
      { rule: '.spectra-badge--danger', desc: 'Error status badge' },
    ],
    tokens: [
      { token: '--spectra-badge-bg', desc: 'Badge background color' },
    ],
    props: [
      { name: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'danger'", desc: 'Semantic palette.' },
      { name: 'children', type: 'ReactNode', desc: 'Badge label or count.' },
    ],
  },
  {
    id: 'card',
    name: 'Card',
    package: '@spectra/react',
    category: 'Surfaces',
    path: '/components/card',
    description: 'Structured surface container with elevated, flat, and bordered variants. High contrast background preventing floating elements bleed-through.',
    cssClasses: [
      { rule: '.spectra-card', desc: 'Root card surface' },
      { rule: '.spectra-card--elevated', desc: 'Elevated drop shadow card' },
      { rule: '.spectra-card--bordered', desc: 'Subtle border card without shadow' },
      { rule: '.spectra-card--flat', desc: 'Flat background card' },
    ],
    tokens: [
      { token: '--color-surface', desc: 'Default surface fill' },
      { token: '--color-surface-sunken', desc: 'Sunken canvas background behind cards' },
      { token: '--spectra-card-radius', desc: 'Card border radius' },
    ],
    props: [
      { name: 'variant', type: "'elevated' | 'flat' | 'bordered'", desc: 'Visual style.' },
      { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", desc: 'Inner padding.' },
    ],
  },
  {
    id: 'tabs',
    name: 'Tabs',
    package: '@spectra/react',
    category: 'Navigation',
    path: '/components/tabs',
    description: 'Navigation tab strip with underline and pill variants, smooth active indicator transitions, and keyboard arrow navigation.',
    cssClasses: [
      { rule: '.spectra-tabs', desc: 'Tabs container' },
      { rule: '.spectra-tab', desc: 'Individual tab button' },
      { rule: '.spectra-tab--active', desc: 'Active selected tab' },
      { rule: '.spectra-tabs__indicator', desc: 'Animated sliding indicator bar' },
    ],
    tokens: [
      { token: '--spectra-tabs-indicator-color', desc: 'Active indicator bar color' },
    ],
    props: [
      { name: 'variant', type: "'underline' | 'pill'", desc: 'Tab indicator style.' },
      { name: 'selectedIndex', type: 'number', desc: 'Controlled tab index.' },
    ],
  },
  {
    id: 'accordion',
    name: 'Accordion',
    package: '@spectra/react',
    category: 'Data Display',
    path: '/components/accordion',
    description: 'Vertically stacked collapsible panels with smooth height animations, keyboard arrow navigation, and multi-expand or single-expand modes.',
    cssClasses: [
      { rule: '.spectra-accordion', desc: 'Root accordion container' },
      { rule: '.spectra-accordion__item', desc: 'Collapsible item row' },
      { rule: '.spectra-accordion__trigger', desc: 'Header button trigger' },
      { rule: '.spectra-accordion__content', desc: 'Collapsible body panel' },
    ],
    tokens: [
      { token: '--spectra-accordion-border', desc: 'Item separator border' },
    ],
    props: [
      { name: 'allowMultiple', type: 'boolean', desc: 'Allows multiple open panels.' },
      { name: 'items', type: 'AccordionItemData[]', desc: 'Panel items array.' },
    ],
  },
  {
    id: 'dialog',
    name: 'Dialog',
    package: '@spectra/react',
    category: 'Feedback',
    path: '/components/dialog',
    description: 'Accessible modal dialog surface with focus trap, backdrop blur, keyboard Escape dismissal, and return focus restore.',
    cssClasses: [
      { rule: '.spectra-dialog-backdrop', desc: 'Dimmed background backdrop blur' },
      { rule: '.spectra-dialog-surface', desc: 'Floating modal container window' },
      { rule: '.spectra-dialog__header', desc: 'Dialog title and close header' },
      { rule: '.spectra-dialog__footer', desc: 'Dialog action buttons bar' },
    ],
    tokens: [
      { token: '--spectra-dialog-width', desc: 'Modal window width' },
      { token: '--spectra-dialog-radius', desc: 'Modal window corner radius' },
    ],
    props: [
      { name: 'isOpen', type: 'boolean', desc: 'Modal visibility state.' },
      { name: 'onClose', type: '() => void', desc: 'Dismissal callback.' },
      { name: 'title', type: 'ReactNode', desc: 'Accessible title.' },
    ],
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    package: '@spectra/react',
    category: 'Feedback',
    path: '/components/tooltip',
    description: 'Contextual hover and keyboard focus popup explaining an action or icon. Features automatic boundary collision detection and arrow pointer.',
    cssClasses: [
      { rule: '.spectra-tooltip', desc: 'Tooltip trigger container' },
      { rule: '.spectra-tooltip__content', desc: 'Floating tooltip popup balloon' },
      { rule: '.spectra-tooltip__arrow', desc: 'Pointer triangle arrow' },
    ],
    tokens: [
      { token: '--spectra-tooltip-bg', desc: 'Tooltip background' },
      { token: '--spectra-tooltip-fg', desc: 'Tooltip text color' },
    ],
    props: [
      { name: 'content', type: 'ReactNode', desc: 'Popup explanation content.' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", desc: 'Preferred placement.' },
    ],
  },
  {
    id: 'list',
    name: 'List',
    package: '@spectra/react',
    category: 'Data Display',
    path: '/components/list',
    description: 'Structured list items with leading vector icons, avatars, titles, descriptions, trailing interactive controls, and divider rules.',
    cssClasses: [
      { rule: '.spectra-list', desc: 'Root list wrapper' },
      { rule: '.spectra-list-item', desc: 'Individual row item' },
      { rule: '.spectra-list-item--clickable', desc: 'Interactive hoverable row' },
    ],
    tokens: [
      { token: '--spectra-list-item-height', desc: 'Row touch height' },
    ],
    props: [
      { name: 'variant', type: "'plain' | 'bordered' | 'separated'", desc: 'List border styling.' },
    ],
  },
  {
    id: 'alert',
    name: 'Alert',
    package: '@spectra/react',
    category: 'Feedback',
    path: '/components/alert',
    description: 'Prominent feedback banners communicating status severity (info, success, warning, danger) with dismissible close actions and vector icons.',
    cssClasses: [
      { rule: '.spectra-alert', desc: 'Root alert container banner' },
      { rule: '.spectra-alert--info', desc: 'Info notification state' },
      { rule: '.spectra-alert--success', desc: 'Success confirmation state' },
      { rule: '.spectra-alert--warning', desc: 'Warning caution state' },
      { rule: '.spectra-alert--error', desc: 'Error danger state' },
      { rule: '.spectra-alert__icon', desc: 'Severity status icon wrapper' },
      { rule: '.spectra-alert__content', desc: 'Headline and body text wrapper' },
      { rule: '.spectra-alert__title', desc: 'Bold alert headline' },
      { rule: '.spectra-alert__dismiss', desc: 'Dismiss close button' },
    ],
    tokens: [
      { token: '--spectra-alert-bg', desc: 'Alert background color' },
      { token: '--spectra-alert-border', desc: 'Alert border color' },
    ],
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", desc: 'Semantic severity variant.' },
      { name: 'title', type: 'ReactNode', desc: 'Optional bold alert headline.' },
      { name: 'dismissible', type: 'boolean', desc: 'Renders accessible close button.' },
      { name: 'onDismiss', type: '() => void', desc: 'Callback on dismissal.' },
    ],
  },
  {
    id: 'spinner',
    name: 'Spinner',
    package: '@spectra/react',
    category: 'Feedback',
    path: '/components/spinner',
    description: 'Circular rotating progress indicator providing smooth continuous motion feedback across small (16px), medium (24px), and large (36px) sizes.',
    cssClasses: [
      { rule: '.spectra-spinner', desc: 'Root animated SVG spinner circle' },
      { rule: '.spectra-spinner--sm', desc: 'Small 16px inline spinner' },
      { rule: '.spectra-spinner--md', desc: 'Medium 24px content spinner' },
      { rule: '.spectra-spinner--lg', desc: 'Large 36px page spinner' },
      { rule: '.spectra-spinner__circle', desc: 'Continuous rotating stroke circle' },
    ],
    tokens: [
      { token: '--spectra-spinner-color', desc: 'Spinner accent stroke color' },
    ],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", desc: 'Dimensions of circular indicator.' },
      { name: 'color', type: 'string', desc: 'Stroke color token.' },
      { name: 'label', type: 'string', desc: 'Accessible screen reader status label.' },
    ],
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    package: '@spectra/react',
    category: 'Feedback',
    path: '/components/skeleton',
    description: 'Placeholder preview showing continuous shimmer wave animations before data finishes loading across text lines, circular avatars, and card shapes.',
    cssClasses: [
      { rule: '.spectra-skeleton', desc: 'Root shimmer skeleton placeholder surface' },
      { rule: '.spectra-skeleton--text', desc: 'Single line text placeholder' },
      { rule: '.spectra-skeleton--circular', desc: 'Circular avatar placeholder (50% radius)' },
      { rule: '.spectra-skeleton--rectangular', desc: 'Rectangular content surface placeholder' },
      { rule: '.spectra-skeleton--rounded', desc: 'Rounded card placeholder (8px radius)' },
    ],
    tokens: [
      { token: '--spectra-skeleton-bg', desc: 'Skeleton base background' },
      { token: '--spectra-skeleton-shimmer', desc: 'Skeleton shimmer sweep highlight' },
    ],
    props: [
      { name: 'variant', type: "'text' | 'circular' | 'rectangular' | 'rounded'", desc: 'Placeholder geometry.' },
      { name: 'width', type: 'string | number', desc: 'Width dimension.' },
      { name: 'height', type: 'string | number', desc: 'Height dimension.' },
      { name: 'animation', type: "'wave' | 'pulse' | 'none'", desc: 'Shimmer animation style.' },
    ],
  },
  {
    id: 'divider',
    name: 'Divider',
    package: '@spectra/react',
    category: 'Layout',
    path: '/components/divider',
    description: 'Visual separator dividing content sections horizontally or vertically, supporting dashed/dotted borders and centered text label insets.',
    cssClasses: [
      { rule: '.spectra-divider', desc: 'Semantic separator line' },
      { rule: '.spectra-divider--horizontal', desc: 'Full width horizontal separator' },
      { rule: '.spectra-divider--vertical', desc: 'Full height vertical separator' },
      { rule: '.spectra-divider--with-text', desc: 'Divider with inset label pill' },
      { rule: '.spectra-divider__label', desc: 'Centered inset label text' },
    ],
    tokens: [
      { token: '--spectra-divider-color', desc: 'Divider border stroke color' },
    ],
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", desc: 'Separation line orientation.' },
      { name: 'variant', type: "'solid' | 'dashed' | 'dotted'", desc: 'Stroke pattern.' },
      { name: 'label', type: 'ReactNode', desc: 'Centered inset label text.' },
    ],
  },
  {
    id: 'chip',
    name: 'Chip',
    package: '@spectra/react',
    category: 'Data Display',
    path: '/components/chip',
    description: 'Compact interactive badges representing entities, inputs, selections, or filters with optional leading avatars/icons and dismiss actions.',
    cssClasses: [
      { rule: '.spectra-chip', desc: 'Root interactive chip container' },
      { rule: '.spectra-chip--filled', desc: 'Filled background surface style' },
      { rule: '.spectra-chip--outlined', desc: 'Outlined border surface style' },
      { rule: '.spectra-chip--selected', desc: 'Active selected filter state' },
      { rule: '.spectra-chip--sm', desc: 'Small 24px chip density' },
      { rule: '.spectra-chip--md', desc: 'Medium 32px chip density' },
      { rule: '.spectra-chip__delete', desc: 'Dismiss remove button' },
    ],
    tokens: [
      { token: '--spectra-chip-bg', desc: 'Chip surface background' },
      { token: '--spectra-chip-border', desc: 'Chip border outline' },
    ],
    props: [
      { name: 'label', type: 'ReactNode', desc: 'Chip text label.' },
      { name: 'variant', type: "'filled' | 'outlined'", desc: 'Surface styling.' },
      { name: 'selected', type: 'boolean', desc: 'Selection highlight flag.' },
      { name: 'onDelete', type: '() => void', desc: 'Dismiss cross button callback.' },
    ],
  },
  {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    package: '@spectra/react',
    category: 'Navigation',
    path: '/components/breadcrumbs',
    description: 'Hierarchical navigation trail displaying current page location with interactive ancestor links, custom separators, and maxItems collapsing.',
    cssClasses: [
      { rule: '.spectra-breadcrumbs', desc: 'Semantic nav container' },
      { rule: '.spectra-breadcrumbs__list', desc: 'Ordered list ol container' },
      { rule: '.spectra-breadcrumbs__item', desc: 'List item li crumb' },
      { rule: '.spectra-breadcrumbs__link', desc: 'Clickable ancestor link' },
      { rule: '.spectra-breadcrumbs__current', desc: 'Current page item aria-current="page"' },
      { rule: '.spectra-breadcrumbs__separator', desc: 'Aria-hidden separator delimiter' },
    ],
    tokens: [
      { token: '--spectra-breadcrumb-color', desc: 'Ancestor link color' },
      { token: '--spectra-breadcrumb-active-color', desc: 'Current page text color' },
    ],
    props: [
      { name: 'items', type: 'BreadcrumbItem[]', desc: 'Hierarchy items array.' },
      { name: 'separator', type: 'ReactNode', desc: 'Custom delimiter element.' },
      { name: 'maxItems', type: 'number', desc: 'Maximum visible crumbs before ellipsis.' },
    ],
  },
];

// 3. Functional Hooks
const rawHooks = [
  {
    id: 'use-disclosure',
    name: 'useDisclosure',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-disclosure',
    description: 'Headless open/close/toggle state machine for modals, dialogs, drawers, and popovers with built-in callback hooks.',
    signature: 'useDisclosure(options?: UseDisclosureProps): UseDisclosureReturn',
  },
  {
    id: 'use-controllable-state',
    name: 'useControllableState',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-controllable-state',
    description: 'Universal state hook supporting both controlled and uncontrolled component patterns seamlessly without warnings.',
    signature: 'useControllableState<T>(props: UseControllableStateProps<T>): [T, (next: T) => void]',
  },
  {
    id: 'use-outside-click',
    name: 'useOutsideClick',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-outside-click',
    description: 'Listens for pointerdown or mousedown events outside of a designated ref element to dismiss floating menus and modals.',
    signature: 'useOutsideClick(options: UseOutsideClickProps): void',
  },
  {
    id: 'use-id',
    name: 'useId',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-id',
    description: 'Generates collision-free, SSR-safe unique HTML and accessibility IDs for linking labels to form controls (aria-labelledby).',
    signature: 'useId(idProp?: string, prefix?: string): string',
  },
  {
    id: 'use-color-scheme',
    name: 'useColorScheme',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-color-scheme',
    description: 'Detects and controls light/dark color scheme with system preference synchronization and persistent storage.',
    signature: 'useColorScheme(): { colorScheme: "light" | "dark", setColorScheme, toggleColorScheme }',
  },
  {
    id: 'use-media-query',
    name: 'useMediaQuery',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-media-query',
    description: 'Reactive CSS media query hook with listener pooling and SSR fallback value support.',
    signature: 'useMediaQuery(query: string): boolean',
  },
  {
    id: 'use-focus-ring',
    name: 'useFocusRing',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-focus-ring',
    description: 'Determines whether focus ring should be visible based on keyboard vs pointer modality (:focus-visible polyfill).',
    signature: 'useFocusRing(): { isFocused: boolean, isFocusVisible: boolean, focusProps }',
  },
  {
    id: 'use-toast',
    name: 'useToast',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-toast',
    description: 'Imperative toast and notification dispatcher with auto-dismiss timers, action buttons, and deduplication.',
    signature: 'useToast(): { toast: (opts) => string, dismiss: (id) => void }',
  },
  {
    id: 'use-reduced-motion',
    name: 'useReducedMotion',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-reduced-motion',
    description: 'Detects if the user has requested the system minimize non-essential motion or animations (WCAG 2.3.3).',
    signature: 'useReducedMotion(): boolean',
  },
  {
    id: 'use-rtl',
    name: 'useRTL',
    package: '@spectra/react',
    category: 'Functional Hooks',
    path: '/hooks/use-rtl',
    description: 'Detects right-to-left document directionality and flips directional icons, padding, and layout anchors.',
    signature: 'useRTL(): { isRTL: boolean, dir: "ltr" | "rtl" }',
  },
];

// 4. Design Tokens
const rawTokens = [
  { name: '--color-surface-sunken', light: '#F1F5F9', dark: '#0F172A', role: 'Sunken canvas background behind cards to eliminate floating breathing dots bleed-through.' },
  { name: '--color-surface', light: '#FFFFFF', dark: '#1E293B', role: 'Default elevated surface container background.' },
  { name: '--color-surface-raised', light: '#F8FAFC', dark: '#334155', role: 'Raised surface for dropdown menus and popovers.' },
  { name: '--color-primary-default', light: '#2563EB', dark: '#38BDF8', role: 'Brand primary accent color for active buttons and focus indicators.' },
  { name: '--color-danger-default', light: '#DC2626', dark: '#F87171', role: 'Destructive action and error state color.' },
  { name: '--color-success-default', light: '#16A34A', dark: '#4ADE80', role: 'Positive confirmation and status tag color.' },
  { name: '--color-warning-default', light: '#D97706', dark: '#FBBF24', role: 'Cautionary warning color.' },
  { name: '--spacing-1', value: '4px', role: 'Compact 4px grid spacing increment.' },
  { name: '--spacing-2', value: '8px', role: 'Standard 8px grid spacing increment.' },
  { name: '--spacing-4', value: '16px', role: 'Generous 16px container padding increment.' },
  { name: '--motion-duration-fast', value: '150ms', role: 'Fast micro-interaction animation duration.' },
  { name: '--motion-duration-normal', value: '250ms', role: 'Standard state transition animation duration.' },
];

// 5. Generate Full Database of Searchable Records
function buildCompleteAlgoliaRecords() {
  const records = [];

  // Guides (Section: DOCUMENTATION)
  for (const g of guides) {
    records.push({
      objectID: g.objectID,
      type: 'guide',
      section: 'DOCUMENTATION',
      title: g.title,
      subtitle: g.subtitle,
      package: g.package,
      path: g.path,
      description: g.description,
      iconType: 'doc',
      importance: g.importance,
    });
  }

  // Components & Component APIs
  for (const comp of rawComponents) {
    // 1. Component Record (Section: COMPONENTS)
    records.push({
      objectID: `comp-${comp.id}`,
      type: 'component',
      section: 'COMPONENTS',
      title: comp.name,
      subtitle: comp.category,
      package: comp.package,
      path: comp.path,
      description: comp.description,
      iconType: 'component',
      importance: 100,
    });

    // 2. CSS Class Records (Section: COMPONENT API) - Matches Screenshot 3 (# .MuiIconButton-color...)
    for (const css of comp.cssClasses) {
      records.push({
        objectID: `css-${comp.id}-${css.rule.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
        type: 'css',
        section: 'COMPONENT API',
        title: css.rule,
        subtitle: `${comp.name} API`,
        package: comp.package,
        path: `${comp.path}#api`,
        description: css.desc,
        iconType: 'hash',
        importance: 85,
      });
    }

    // 3. Prop Records (Section: COMPONENT API)
    for (const prop of comp.props) {
      records.push({
        objectID: `prop-${comp.id}-${prop.name}`,
        type: 'prop',
        section: 'COMPONENT API',
        title: `${comp.name}.${prop.name}`,
        subtitle: `${comp.name} API (Prop: ${prop.type})`,
        package: comp.package,
        path: `${comp.path}#api`,
        description: prop.desc,
        iconType: 'hash',
        importance: 80,
      });
    }

    // 4. Component Token Records (Section: COMPONENT API)
    for (const tok of comp.tokens) {
      records.push({
        objectID: `comp-tok-${comp.id}-${tok.token.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
        type: 'token',
        section: 'COMPONENT API',
        title: tok.token,
        subtitle: `${comp.name} API`,
        package: '@spectra/tokens',
        path: `${comp.path}#api`,
        description: tok.desc,
        iconType: 'token',
        importance: 80,
      });
    }
  }

  // Functional Hooks (Section: FUNCTIONAL HOOKS)
  for (const hook of rawHooks) {
    records.push({
      objectID: `hook-${hook.id}`,
      type: 'hook',
      section: 'FUNCTIONAL HOOKS',
      title: `${hook.name}()`,
      subtitle: 'Functional Hook',
      package: hook.package,
      path: hook.path,
      description: `${hook.description} Signature: ${hook.signature}`,
      iconType: 'hook',
      importance: 90,
    });
  }

  // Design Tokens (Section: DESIGN TOKENS)
  for (const token of rawTokens) {
    records.push({
      objectID: `token-${token.name.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
      type: 'token',
      section: 'DESIGN TOKENS',
      title: token.name,
      subtitle: token.value || `Light: ${token.light} · Dark: ${token.dark}`,
      package: '@spectra/tokens',
      path: '/tokens/colors',
      description: token.role,
      iconType: 'token',
      importance: 85,
    });
  }

  return records;
}

// 6. Push to Algolia
async function indexToAlgolia() {
  console.log(`[Spectra Algolia] Building complete database index for "${INDEX_NAME}" on app "${ALGOLIA_APP_ID}"...`);
  const records = buildCompleteAlgoliaRecords();
  console.log(`[Spectra Algolia] Generated ${records.length} comprehensive records.`);

  // Step A: Configure Index Settings
  console.log(`[Spectra Algolia] Updating search rankings and attributes for faceting...`);
  const settingsRes = await fetch(`https://${ALGOLIA_APP_ID}.algolia.net/1/indexes/${INDEX_NAME}/settings`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      searchableAttributes: [
        'title',
        'subtitle',
        'description',
        'section',
        'package',
      ],
      attributesForFaceting: [
        'filterOnly(section)',
        'filterOnly(type)',
        'filterOnly(package)',
        'searchable(section)',
      ],
      customRanking: [
        'desc(importance)',
      ],
      highlightPreTag: '<mark>',
      highlightPostTag: '</mark>',
      hitsPerPage: 20,
    }),
  });

  const settingsData = await settingsRes.json();
  if (!settingsRes.ok) {
    throw new Error(`Failed to update settings: ${JSON.stringify(settingsData)}`);
  }
  console.log(`[Spectra Algolia] Settings configured (Task ID: ${settingsData.taskID})`);

  // Step B: Push Batch Records
  console.log(`[Spectra Algolia] Uploading ${records.length} database records in batch...`);
  const batchRequests = records.map((record) => ({
    action: 'updateObject',
    body: record,
  }));

  const batchRes = await fetch(`https://${ALGOLIA_APP_ID}.algolia.net/1/indexes/${INDEX_NAME}/batch`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ requests: batchRequests }),
  });

  const batchData = await batchRes.json();
  if (!batchRes.ok) {
    throw new Error(`Failed to upload batch records: ${JSON.stringify(batchData)}`);
  }

  console.log(`[Spectra Algolia] SUCCESS! Indexed ${records.length} records into Algolia database! (Task ID: ${batchData.taskID})`);
}

indexToAlgolia().catch((err) => {
  console.error('[Spectra Algolia] Indexing error:', err);
  process.exit(1);
});

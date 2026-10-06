import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../../..');

console.log('Building comprehensive Spectra UI MCP Registry...');

// 1. Tokens from @winplaybox/tokens
const tokensJsPath = path.join(rootDir, 'packages/tokens/dist/ts/tokens.js');
let rawTokens = { pack: 'minimal', modes: { light: {}, dark: {} } };
if (fs.existsSync(tokensJsPath)) {
  try {
    const tokensModule = await import('file:///' + tokensJsPath.replace(/\\/g, '/'));
    if (tokensModule.tokens) {
      rawTokens = tokensModule.tokens;
    }
  } catch (e) {
    console.warn('Tokens loading warning:', e.message);
  }
}

// Map color tokens for MCP
const colors = {};
for (const [key, val] of Object.entries(rawTokens.modes.light)) {
  if (key.includes('color')) {
    const cssVar = `--${key}`;
    colors[cssVar] = {
      light: val,
      dark: rawTokens.modes.dark[key] || val,
      role: key.replace(/^color-/, '').replace(/-/g, ' ')
    };
  }
}

// Spacing & Motion & Radius tokens
const spacing = {
  '--spacing-0': '0px',
  '--spacing-1': '4px',
  '--spacing-2': '8px',
  '--spacing-3': '12px',
  '--spacing-4': '16px',
  '--spacing-5': '20px',
  '--spacing-6': '24px',
  '--spacing-8': '32px',
  '--spacing-10': '40px',
  '--spacing-12': '48px',
  '--spacing-16': '64px'
};

const radius = {
  '--radius-xs': '4px',
  '--radius-sm': '6px',
  '--radius-md': '8px',
  '--radius-lg': '12px',
  '--radius-xl': '16px',
  '--radius-full': '9999px'
};

const motion = {
  '--motion-duration-fast': '150ms',
  '--motion-duration-normal': '250ms',
  '--motion-duration-slow': '400ms',
  '--motion-easing-standard': 'cubic-bezier(0.2, 0, 0, 1)',
  '--motion-easing-decelerate': 'cubic-bezier(0, 0, 0.2, 1)',
  '--motion-easing-accelerate': 'cubic-bezier(0.4, 0, 1, 1)'
};

// 2. Read components from sandbox metadata
const compDataPath = path.join(rootDir, 'apps/sandbox/src/data/componentsData.ts');
const extDataPath = path.join(rootDir, 'apps/sandbox/src/data/extendedComponentsData.ts');
const apiDataPath = path.join(rootDir, 'apps/sandbox/src/data/apiReferenceData.ts');

const compDataContent = fs.existsSync(compDataPath) ? fs.readFileSync(compDataPath, 'utf8') : '';
const extDataContent = fs.existsSync(extDataPath) ? fs.readFileSync(extDataPath, 'utf8') : '';
const apiDataContent = fs.existsSync(apiDataPath) ? fs.readFileSync(apiDataPath, 'utf8') : '';

// Helper to extract component objects from TS files
function extractComponents(tsContent) {
  const comps = {};
  const blockRegex = /['"]?([a-zA-Z0-9_-]+)['"]?:\s*{\s*\n\s*id:\s*['"]([^'"]+)['"],\s*\n\s*name:\s*['"]([^'"]+)['"],\s*\n\s*category:\s*['"]([^'"]+)['"],\s*\n\s*description:\s*['"]([^'"]+)['"]/gm;
  let match;
  while ((match = blockRegex.exec(tsContent)) !== null) {
    const [, idKey, id, name, category, description] = match;
    comps[idKey] = {
      id: id || idKey,
      name,
      category,
      description,
      importStatement: `import { ${name} } from '@winplaybox/react';`,
      nativeImport: `import { ${name} } from '@winplaybox/react-native';`,
      props: [],
      nativeProps: [],
      tokens: [
        `--spectra-${idKey}-bg`,
        `--spectra-${idKey}-border`,
        `--spectra-${idKey}-radius`
      ],
      recipes: []
    };
  }
  return comps;
}

const allComponents = {
  ...extractComponents(compDataContent),
  ...extractComponents(extDataContent)
};

// Enrich with Native specific layout primitives
const nativeSpecific = {
  'box': {
    id: 'box',
    name: 'Box',
    category: 'Layout',
    description: 'Fundamental polymorphic container primitive with first-class support for padding, margin, background surfaces, radii, and flex layout tokens across Web and Native.',
    importStatement: "import { Box } from '@winplaybox/react';",
    nativeImport: "import { Box } from '@winplaybox/react-native';",
    props: [
      { name: 'padding', type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number", description: 'Token-based padding scale.' },
      { name: 'margin', type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number", description: 'Token-based margin scale.' },
      { name: 'bg', type: "'default' | 'raised' | 'elevated' | 'sunken' | 'overlay' | 'subtle' | string", description: 'Semantic surface token.' },
      { name: 'radius', type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | number", description: 'Corner border radius token.' },
      { name: 'border', type: 'boolean', defaultValue: 'false', description: 'Enables border outline.' },
      { name: 'direction', type: "'row' | 'column' | 'row-reverse' | 'column-reverse'", description: 'Flex layout direction.' },
      { name: 'align', type: "'flex-start' | 'center' | 'flex-end' | 'stretch'", description: 'Cross-axis alignment.' },
      { name: 'justify', type: "'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'", description: 'Main-axis distribution.' }
    ],
    nativeProps: [
      { name: 'padding', type: 'BoxPadding', description: 'Token spacing' },
      { name: 'bg', type: 'BoxBg', description: 'Semantic token surface' },
      { name: 'radius', type: 'BoxRadius', description: 'Border radius scale' }
    ],
    tokens: ['--color-surface', '--color-surface-raised', '--color-surface-sunken'],
    recipes: [
      {
        title: 'Elevated Card Surface with Box',
        code: `import { Box, Text } from '@winplaybox/react-native';\n\n<Box padding="md" bg="raised" radius="lg" border>\n  <Text weight="bold">Elevated Box Surface</Text>\n</Box>`
      }
    ]
  },
  'grid': {
    id: 'grid',
    name: 'Grid',
    category: 'Layout',
    description: '12-column responsive layout grid system engineered for fluid breakpoints and multi-column responsive UIs.',
    importStatement: "import { Grid } from '@winplaybox/react';",
    nativeImport: "import { Grid } from '@winplaybox/react-native';",
    props: [
      { name: 'container', type: 'boolean', defaultValue: 'false', description: 'Enables grid container flex wrapper.' },
      { name: 'item', type: 'boolean', defaultValue: 'false', description: 'Enables column cell sizing.' },
      { name: 'spacing', type: 'number', defaultValue: '2', description: 'Gap multiplier (spacing * 8px).' },
      { name: 'xs', type: 'number', defaultValue: '12', description: 'Column span from 1 to 12.' }
    ],
    nativeProps: [
      { name: 'container', type: 'boolean', defaultValue: 'false', description: 'Row flex wrapper.' },
      { name: 'item', type: 'boolean', defaultValue: 'false', description: 'Column item.' },
      { name: 'xs', type: 'number', defaultValue: '12', description: 'Column width percentage.' }
    ],
    tokens: ['--spacing-2', '--spacing-4'],
    recipes: [
      {
        title: 'Two-Column Responsive Grid',
        code: `import { Grid, Box, Text } from '@winplaybox/react';\n\n<Grid container spacing={2}>\n  <Grid item xs={6}><Box padding="md" bg="subtle"><Text>Left Column</Text></Box></Grid>\n  <Grid item xs={6}><Box padding="md" bg="subtle"><Text>Right Column</Text></Box></Grid>\n</Grid>`
      }
    ]
  },
  'scroll-view': {
    id: 'scroll-view',
    name: 'ScrollView',
    category: 'Layout',
    description: 'Token-aware scrollable container for mobile applications respecting theme surfaces and standardizing padding scales.',
    importStatement: "import { ScrollArea } from '@winplaybox/react';",
    nativeImport: "import { ScrollView } from '@winplaybox/react-native';",
    props: [
      { name: 'padding', type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number", description: 'Standard container padding.' },
      { name: 'bg', type: "'default' | 'raised' | 'sunken' | 'transparent'", description: 'Theme background surface.' }
    ],
    nativeProps: [
      { name: 'padding', type: 'BoxPadding', description: 'Standard content padding.' },
      { name: 'bg', type: 'BoxBg', description: 'Surface fill.' }
    ],
    tokens: ['--color-surface-sunken', '--color-surface'],
    recipes: [
      {
        title: 'Native ScrollView with Theme Sunken Background',
        code: `import { ScrollView, Stack, Card, Text } from '@winplaybox/react-native';\n\n<ScrollView padding="md" bg="sunken">\n  <Stack gap={12}>\n    <Card><Text>Item 1</Text></Card>\n    <Card><Text>Item 2</Text></Card>\n  </Stack>\n</ScrollView>`
      }
    ]
  },
  'pressable': {
    id: 'pressable',
    name: 'Pressable',
    category: 'Actions',
    description: 'Token-aware interactive touchable surface component for Spectra UI Native with tactile opacity feedback, border/surface variants, and disabled state styling.',
    importStatement: "import { Button } from '@winplaybox/react';",
    nativeImport: "import { Pressable } from '@winplaybox/react-native';",
    props: [
      { name: 'variant', type: "'default' | 'subtle' | 'raised' | 'bordered'", defaultValue: "'default'", description: 'Visual appearance.' },
      { name: 'radius', type: "BoxRadius", description: 'Corner curvature.' },
      { name: 'feedback', type: "'opacity' | 'none'", defaultValue: "'opacity'", description: 'Active touch feedback.' },
      { name: 'onPress', type: '() => void', description: 'Action callback.' }
    ],
    nativeProps: [
      { name: 'activeOpacity', type: 'number', defaultValue: '0.7', description: 'Pressed state opacity.' }
    ],
    tokens: ['--color-action-secondary', '--color-surface-raised'],
    recipes: [
      {
        title: 'Raised Touchable Card Surface',
        code: `import { Pressable, Text } from '@winplaybox/react-native';\n\n<Pressable variant="raised" radius="md" padding="md" onPress={() => console.log('Tapped!')}>\n  <Text weight="semibold">Interactive Native Tile</Text>\n</Pressable>`
      }
    ]
  },
  'image': {
    id: 'image',
    name: 'Image',
    category: 'Data Display',
    description: 'Design-token integrated image primitive with aspect-ratio containment, token-based border radius, and fallback placeholder handling.',
    importStatement: "import { Avatar } from '@winplaybox/react';",
    nativeImport: "import { Image } from '@winplaybox/react-native';",
    props: [
      { name: 'source', type: 'ImageSourcePropType', required: true, description: 'Image URI or require asset.' },
      { name: 'radius', type: "BoxRadius", description: 'Border radius token.' },
      { name: 'aspectRatio', type: 'number', description: 'Width-to-height ratio constraint.' },
      { name: 'fit', type: "'cover' | 'contain' | 'stretch' | 'center'", defaultValue: "'cover'", description: 'Image resize mode.' },
      { name: 'fallback', type: 'ReactNode', description: 'Fallback element rendered on load error.' }
    ],
    nativeProps: [
      { name: 'fit', type: "'cover' | 'contain' | 'stretch' | 'center'", defaultValue: "'cover'", description: 'Native resizeMode' }
    ],
    tokens: ['--radius-md', '--color-surface-raised'],
    recipes: [
      {
        title: 'Rounded Banner Image with 16:9 Aspect Ratio',
        code: `import { Image } from '@winplaybox/react-native';\n\n<Image source={{ uri: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809' }} aspectRatio={16 / 9} radius="lg" />`
      }
    ]
  },
  'copy-button': {
    id: 'copy-button',
    name: 'CopyButton',
    category: 'Actions',
    description: 'Universal cross-platform clipboard trigger button with automatic icon feedback (CopyIcon to CheckIcon), customizable labels, and multi-platform support across Web, iOS, Android, and Desktop.',
    importStatement: "import { CopyButton } from '@winplaybox/react';",
    nativeImport: "import { CopyButton } from '@winplaybox/react-native';",
    props: [
      { name: 'value', type: 'string', required: true, description: 'Text content copied to system clipboard.' },
      { name: 'label', type: 'string', defaultValue: "'Copy'", description: 'Resting label text.' },
      { name: 'copiedLabel', type: 'string', defaultValue: "'Copied!'", description: 'Success state label text.' },
      { name: 'timeout', type: 'number', defaultValue: '2000', description: 'Duration in ms before resetting copied state.' },
      { name: 'iconOnly', type: 'boolean', defaultValue: 'false', description: 'Renders icon without text.' },
      { name: 'variant', type: "'primary' | 'secondary' | 'subtle' | 'outline'", defaultValue: "'secondary'", description: 'Button visual style.' },
      { name: 'onCopy', type: '(value: string) => void', description: 'Callback fired on copy.' }
    ],
    nativeProps: [
      { name: 'value', type: 'string', required: true, description: 'Target string' },
      { name: 'onCopy', type: '(value: string) => void', description: 'Success callback' }
    ],
    tokens: ['--color-action-primary', '--color-feedback-success'],
    recipes: [
      {
        title: 'Universal Copy Link Trigger',
        code: `import { CopyButton } from '@winplaybox/react';\n\n<CopyButton value="https://spectra-ui.winplaybox.com" label="Copy Link" />`
      },
      {
        title: 'Mobile Native Copy Button',
        code: `import { CopyButton } from '@winplaybox/react-native';\n\n<CopyButton value="https://spectra-ui.winplaybox.com" label="Copy Share URL" onCopy={() => console.log('Copied!')} />`
      }
    ]
  }
};

Object.assign(allComponents, nativeSpecific);

// Ensure core recipes and rich props for Button, TextInput, Select, Dialog, Card
if (allComponents.button) {
  allComponents.button.props = [
    { name: 'variant', type: "'primary' | 'secondary' | 'subtle' | 'danger' | 'outline'", defaultValue: "'primary'", description: 'Visual appearance and emphasis.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Density and touch target scale.' },
    { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents interaction and applies dimmed styling.' },
    { name: 'loading', type: 'boolean', defaultValue: 'false', description: 'Animated loading spinner with aria-busy="true".' },
    { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Contextual vector icon.' },
    { name: 'iconPosition', type: "'left' | 'right'", defaultValue: "'left'", description: 'Placement of icon relative to label.' },
    { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Stretches button to 100% container width.' }
  ];
  allComponents.button.recipes = [
    {
      title: 'Primary Web Button with Leading Icon',
      code: `import { Button } from '@winplaybox/react';\nimport { DownloadIcon } from '@winplaybox/icons';\n\n<Button variant="primary" icon={<DownloadIcon size={16} />}>Export Report</Button>`
    },
    {
      title: 'Native Mobile Button',
      code: `import { Button } from '@winplaybox/react-native';\n\n<Button title="Confirm Action" variant="primary" onPress={() => console.log('Confirmed')} />`
    }
  ];
}

if (allComponents['text-input']) {
  allComponents['text-input'].props = [
    { name: 'label', type: 'string', description: 'Accessible label above field.' },
    { name: 'placeholder', type: 'string', description: 'Hint text.' },
    { name: 'value', type: 'string', description: 'Controlled input value.' },
    { name: 'onChange', type: '(e: ChangeEvent<HTMLInputElement>) => void', description: 'Input change handler.' },
    { name: 'error', type: 'boolean | string', description: 'Error outline and message.' },
    { name: 'description', type: 'string', description: 'Helper text.' },
    { name: 'leftIcon', type: 'ReactNode', description: 'Leading icon.' },
    { name: 'rightAction', type: 'ReactNode', description: 'Trailing action.' }
  ];
  allComponents['text-input'].recipes = [
    {
      title: 'Password Field with Reveal Toggle',
      code: `import React, { useState } from 'react';\nimport { TextInput } from '@winplaybox/react';\nimport { EyeIcon, EyeOffIcon } from '@winplaybox/icons';\n\nexport function PasswordInput() {\n  const [show, setShow] = useState(false);\n  return (\n    <TextInput\n      label="Password"\n      type={show ? 'text' : 'password'}\n      rightAction={\n        <button type="button" onClick={() => setShow(!show)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>\n          {show ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}\n        </button>\n      }\n    />\n  );\n}`
    }
  ];
}

// 3. Complete Hooks Suite (25 Enterprise Hooks)
const allHooks = {
  'use-theme': {
    name: 'useTheme',
    description: 'Access and toggle global Spectra design system theme mode, style packs, and brand color palette.',
    signature: 'useTheme(): { colorScheme: "light" | "dark", setColorScheme: (m: "light" | "dark") => void, toggleTheme: () => void }',
    returns: ['colorScheme', 'setColorScheme', 'toggleTheme'],
    accessibility: ['Dynamic theme role updates and system preference sync']
  },
  'use-disclosure': {
    name: 'useDisclosure',
    description: 'Headless open/close/toggle state machine for modals, drawers, menus, and popovers.',
    signature: 'useDisclosure(options?: { defaultIsOpen?: boolean, onOpen?: () => void, onClose?: () => void })',
    returns: ['isOpen: boolean', 'onOpen: () => void', 'onClose: () => void', 'onToggle: () => void', 'getButtonProps()', 'getDisclosureProps()'],
    accessibility: ['aria-expanded', 'aria-controls', 'aria-hidden']
  },
  'use-color-scheme': {
    name: 'useColorScheme',
    description: 'Detects and toggles light/dark mode with system synchronization and localStorage persistence.',
    signature: 'useColorScheme(): { colorScheme: "light" | "dark", setColorScheme: (m: "light" | "dark") => void, toggleColorScheme: () => void }',
    returns: ['colorScheme', 'setColorScheme', 'toggleColorScheme'],
    accessibility: ['prefers-color-scheme media query synchronization']
  },
  'use-outside-click': {
    name: 'useOutsideClick',
    description: 'Dismiss floating overlays or popovers when clicking outside designated element.',
    signature: 'useOutsideClick({ ref: RefObject<HTMLElement>, handler: (e: Event) => void, enabled?: boolean })',
    returns: ['void'],
    accessibility: ['Click-away dismiss pattern']
  },
  'use-id': {
    name: 'useId',
    description: 'Collision-free SSR-safe unique HTML and ARIA IDs for form field labels and descriptions.',
    signature: 'useId(idProp?: string, prefix?: string): string',
    returns: ['string'],
    accessibility: ['aria-labelledby, aria-describedby linking']
  },
  'use-controllable-state': {
    name: 'useControllableState',
    description: 'Unified state management supporting both controlled and uncontrolled component modes.',
    signature: 'useControllableState({ value, defaultValue, onChange })',
    returns: ['[value, setValue]'],
    accessibility: ['Standard W3C controlled state pattern']
  },
  'use-focus-trap': {
    name: 'useFocusTrap',
    description: 'Traps keyboard tab navigation within an active modal overlay preventing focus escape.',
    signature: 'useFocusTrap(ref: RefObject<HTMLElement>, isActive: boolean)',
    returns: ['void'],
    accessibility: ['W3C modal dialog focus trapping']
  },
  'use-focus-ring': {
    name: 'useFocusRing',
    description: 'Manages visible focus indicators only during keyboard navigation (:focus-visible equivalent).',
    signature: 'useFocusRing(options?: { within?: boolean })',
    returns: ['isFocused', 'isFocusVisible', 'focusProps'],
    accessibility: ['WCAG 2.1 Focus Visible requirement']
  },
  'use-media-query': {
    name: 'useMediaQuery',
    description: 'Responsive CSS media query listener hook with SSR fallback hydration.',
    signature: 'useMediaQuery(query: string, defaultValue?: boolean): boolean',
    returns: ['boolean'],
    accessibility: ['Responsive layout adaptation']
  },
  'use-reduced-motion': {
    name: 'useReducedMotion',
    description: 'Detects user operating system preference for reduced motion animations.',
    signature: 'useReducedMotion(): boolean',
    returns: ['boolean'],
    accessibility: ['prefers-reduced-motion vestibular disorder support']
  },
  'use-toast': {
    name: 'useToast',
    description: 'Imperative and hook-based toast notification dispatcher with stacked queue management.',
    signature: 'useToast(): { toast: (options: ToastOptions) => string, dismiss: (id: string) => void }',
    returns: ['toast', 'dismiss'],
    accessibility: ['aria-live="polite", role="status"']
  },
  'use-form-field': {
    name: 'useFormField',
    description: 'Generates cohesive ARIA attributes and error bindings for form input fields.',
    signature: 'useFormField(props: FormFieldProps)',
    returns: ['inputProps', 'labelProps', 'errorProps', 'descriptionProps'],
    accessibility: ['aria-invalid', 'aria-describedby', 'aria-required']
  },
  'use-list-navigation': {
    name: 'useListNavigation',
    description: 'Keyboard arrow key navigation (Up/Down/Home/End) with roving tabindex.',
    signature: 'useListNavigation(itemsCount: number, options?: ListNavOptions)',
    returns: ['activeIndex', 'setActiveIndex', 'getItemProps()'],
    accessibility: ['W3C Roving Tabindex & ARIA Listbox']
  },
  'use-rtl': {
    name: 'useRTL',
    description: 'Bi-directional text flow and layout direction listener (LTR / RTL).',
    signature: 'useRTL(): { isRTL: boolean, dir: "ltr" | "rtl" }',
    returns: ['isRTL', 'dir'],
    accessibility: ['dir="rtl" localization']
  },
  'use-debounce': {
    name: 'useDebounce',
    description: 'Debounces rapid value changes or keystrokes for search bars and live filters.',
    signature: 'useDebounce<T>(value: T, delayMs: number): T',
    returns: ['debouncedValue'],
    accessibility: ['Reduces search query churn']
  },
  'use-throttle': {
    name: 'useThrottle',
    description: 'Throttles high-frequency function execution for scroll, resize, and mousemove listeners.',
    signature: 'useThrottle<T>(value: T, intervalMs: number): T',
    returns: ['throttledValue'],
    accessibility: ['Frame rate stability']
  },
  'use-hover': {
    name: 'useHover',
    description: 'Detects pointer hover state with mobile touch rejection.',
    signature: 'useHover<T extends HTMLElement>(): [RefObject<T>, boolean]',
    returns: ['[ref, isHovered]'],
    accessibility: ['Hover interaction']
  },
  'use-platform': {
    name: 'usePlatform',
    description: 'Cross-platform environment detector (Web, iOS, Android, Windows, macOS).',
    signature: 'usePlatform(): { platform: string, isMobile: boolean, isDesktop: boolean }',
    returns: ['platform', 'isMobile', 'isDesktop'],
    accessibility: ['Platform specific chassis customization']
  },
  'use-breakpoint': {
    name: 'useBreakpoint',
    description: 'Current viewport breakpoint matching Spectra UI token breakpoints (xs, sm, md, lg, xl).',
    signature: 'useBreakpoint(): "xs" | "sm" | "md" | "lg" | "xl"',
    returns: ['breakpoint'],
    accessibility: ['Responsive grid alignment']
  },
  'use-event-listener': {
    name: 'useEventListener',
    description: 'Safe declarative event listener with automatic cleanup on unmount.',
    signature: 'useEventListener(eventName, handler, element?)',
    returns: ['void'],
    accessibility: ['Window and DOM events']
  },
  'use-intersection-observer': {
    name: 'useIntersectionObserver',
    description: 'Viewport intersection detection for lazy loading, infinite scroll, and scroll spy.',
    signature: 'useIntersectionObserver(ref, options?)',
    returns: ['IntersectionObserverEntry | null'],
    accessibility: ['Lazy-loaded asset announcements']
  },
  'use-element-size': {
    name: 'useElementSize',
    description: 'ResizeObserver-powered reactive element dimensions tracking (width and height).',
    signature: 'useElementSize<T extends HTMLElement>(): [RefObject<T>, { width: number, height: number }]',
    returns: ['[ref, size]'],
    accessibility: ['Dynamic container sizing']
  },
  'use-window-size': {
    name: 'useWindowSize',
    description: 'Reactive browser window dimensions (width, height) with debounced resize dispatch.',
    signature: 'useWindowSize(): { width: number, height: number }',
    returns: ['size'],
    accessibility: ['Window scale']
  },
  'use-scroll-lock': {
    name: 'useScrollLock',
    description: 'Locks background page scrolling while modal or drawer overlay is active.',
    signature: 'useScrollLock(locked: boolean): void',
    returns: ['void'],
    accessibility: ['Prevents background scroll bleed during dialogs']
  },
  'use-clipboard': {
    name: 'useClipboard',
    description: 'Copy text to clipboard with timed success status indication.',
    signature: 'useClipboard(options?: { timeout?: number }): { copied: boolean, copy: (text: string) => Promise<boolean> }',
    returns: ['copied', 'copy'],
    accessibility: ['Copy confirmation status']
  },
  'use-local-storage': {
    name: 'useLocalStorage',
    description: 'Persistent state backed by localStorage with cross-tab synchronization.',
    signature: 'useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void]',
    returns: ['[value, setValue]'],
    accessibility: ['User preference preservation']
  },
  'use-previous': {
    name: 'usePrevious',
    description: 'Stores previous render cycle value for diffing or animations.',
    signature: 'usePrevious<T>(value: T): T | undefined',
    returns: ['previousValue'],
    accessibility: ['State transition diffing']
  },
  'use-async': {
    name: 'useAsync',
    description: 'Async promise execution lifecycle runner with loading, error, and data states.',
    signature: 'useAsync<T>(asyncFn: () => Promise<T>, immediate?: boolean)',
    returns: ['execute', 'status', 'value', 'error'],
    accessibility: ['aria-busy and error alert signaling']
  },
  'use-interval': {
    name: 'useInterval',
    description: 'Declarative setInterval hook with dynamic delay and pause control.',
    signature: 'useInterval(callback: () => void, delay: number | null): void',
    returns: ['void'],
    accessibility: ['Controlled timers']
  }
};

// 4. Icons Suite
const curatedIcons = [
  'CheckIcon', 'CloseIcon', 'SearchIcon', 'DownloadIcon', 'EyeIcon', 'EyeOffIcon',
  'ChevronDownIcon', 'ChevronUpIcon', 'ChevronRightIcon', 'ChevronLeftIcon',
  'SettingsIcon', 'UserIcon', 'SparklesIcon', 'CodeIcon', 'LayersIcon', 'PaletteIcon',
  'InfoIcon', 'WarningIcon', 'ErrorIcon', 'SuccessIcon', 'FilterIcon', 'SortIcon',
  'CopyIcon', 'EditIcon', 'TrashIcon', 'PlusIcon', 'MinusIcon', 'MenuIcon', 'MoreVerticalIcon',
  'FacebookIcon', 'TwitterIcon', 'GoogleIcon', 'GithubIcon', 'TiktokIcon', 'DiscordIcon',
  'FigmaIcon', 'YoutubeIcon', 'LinkedinIcon', 'InstagramIcon', 'AppleIcon', 'AndroidIcon', 'WindowsIcon'
];

// Write out packages/mcp/src/data.js
const outDataPath = path.join(rootDir, 'packages/mcp/src/data.js');

const fileOutput = `/**
 * Spectra UI MCP Design System Data Registry
 * Auto-generated and synchronized across @winplaybox/react, @winplaybox/react-native,
 * @winplaybox/tokens, @winplaybox/primitives, and @winplaybox/icons.
 */

export const COMPONENTS = ${JSON.stringify(allComponents, null, 2)};

export const HOOKS = ${JSON.stringify(allHooks, null, 2)};

export const TOKENS = ${JSON.stringify({ colors, spacing, radius, motion }, null, 2)};

export const ICONS = ${JSON.stringify(curatedIcons, null, 2)};
`;

fs.writeFileSync(outDataPath, fileOutput, 'utf8');

console.log('Successfully generated MCP Registry:');
console.log('- Components: ' + Object.keys(allComponents).length);
console.log('- Hooks: ' + Object.keys(allHooks).length);
console.log('- Color Tokens: ' + Object.keys(colors).length);
console.log('- Curated Icons: ' + curatedIcons.length);

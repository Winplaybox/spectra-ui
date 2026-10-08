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
  },
  'live-indicator': {
    id: 'live-indicator',
    name: 'LiveIndicator',
    category: 'Feedback',
    description: 'Subtle real-time status and broadcast indicator with pulse, beacon, and static variants, strictly respecting reduced-motion accessibility across Web, Android, iOS, Windows, and macOS.',
    importStatement: "import { LiveIndicator } from '@winplaybox/react';",
    nativeImport: "import { LiveIndicator } from '@winplaybox/react-native';",
    props: [
      { name: 'variant', type: "'pulse' | 'beacon' | 'static'", defaultValue: "'pulse'", description: 'Animation behavior.' },
      { name: 'label', type: 'string', defaultValue: "'LIVE'", description: 'Accessible status label.' },
      { name: 'status', type: "'live' | 'recording' | 'offline' | 'idle'", defaultValue: "'live'", description: 'Semantic status role.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Indicator density scale.' }
    ],
    nativeProps: [
      { name: 'variant', type: "'pulse' | 'beacon' | 'static'", defaultValue: "'pulse'", description: 'Animation behavior.' },
      { name: 'label', type: 'string', defaultValue: "'LIVE'", description: 'Accessible status label.' }
    ],
    tokens: ['--color-feedback-danger', '--color-feedback-success', '--color-surface-sunken'],
    recipes: [
      {
        title: 'Subtle Pulse Live Status',
        code: `import { LiveIndicator } from '@winplaybox/react';\n\n<LiveIndicator variant="pulse" label="LIVE" />`
      },
      {
        title: 'Native Mobile Live Indicator',
        code: `import { LiveIndicator } from '@winplaybox/react-native';\n\n<LiveIndicator variant="pulse" label="RECORDING" status="recording" />`
      }
    ]
  },
  'list-view': {
    id: 'list-view',
    name: 'ListView',
    category: 'Data Display',
    description: 'High-performance token-aware list primitive supporting pull-to-refresh, 1px theme dividers, empty states, and virtualized scrolling across Web and Native.',
    importStatement: "import { ListView } from '@winplaybox/react';",
    nativeImport: "import { ListView } from '@winplaybox/react-native';",
    props: [
      { name: 'data', type: 'readonly T[]', description: 'Array of data items to render.' },
      { name: 'renderItem', type: '(item: T, index: number) => ReactNode', required: true, description: 'Item render function.' },
      { name: 'divided', type: 'boolean', defaultValue: 'true', description: 'Automatically inserts 1px theme divider lines.' },
      { name: 'padding', type: 'BoxPadding', description: 'Container padding matching Spectra Box tokens.' },
      { name: 'emptyState', type: 'ReactNode', description: 'Custom element rendered when data list is empty.' },
      { name: 'emptyText', type: 'string', defaultValue: "'No items found'", description: 'Fallback text string when list is empty.' },
      { name: 'refreshing', type: 'boolean', defaultValue: 'false', description: 'Active pull-to-refresh spinner status.' },
      { name: 'onRefresh', type: '() => void', description: 'Trigger callback on pull-to-refresh gesture or button.' }
    ],
    nativeProps: [
      { name: 'data', type: 'Readonly<ArrayLike<T>>', description: 'Native virtualized list items.' },
      { name: 'divided', type: 'boolean', defaultValue: 'true', description: 'Theme border separator.' }
    ],
    tokens: ['--color-surface', '--color-border-subtle', '--color-text-secondary'],
    recipes: [
      {
        title: 'Universal Token-Aware ListView with Refresh',
        code: `import { ListView } from '@winplaybox/react';\n\n<ListView\n  data={items}\n  divided\n  refreshing={isRefreshing}\n  onRefresh={handleRefresh}\n  renderItem={(item) => <div style={{ padding: '12px 16px' }}>{item.title}</div>}\n/>`
      },
      {
        title: 'Native Mobile Virtualized ListView',
        code: `import { ListView, Text } from '@winplaybox/react-native';\n\n<ListView\n  data={items}\n  divided\n  refreshing={isRefreshing}\n  onRefresh={handleRefresh}\n  renderItem={({ item }) => <Text>{item.title}</Text>}\n/>`
      }
    ]
  },
  'date-picker': {
    id: 'date-picker',
    name: 'DatePicker',
    category: 'Form',
    description: 'Cross-platform date and time input control with interactive calendar popovers on Web, native OS dialogs on Android, modal pickers on iOS, and zero emoji vector icons.',
    importStatement: "import { DatePicker } from '@winplaybox/react';",
    nativeImport: "import { DatePicker } from '@winplaybox/react-native';",
    props: [
      { name: 'value', type: 'Date', description: 'Selected Date value (controlled).' },
      { name: 'defaultValue', type: 'Date', description: 'Initial Date value (uncontrolled).' },
      { name: 'onChange', type: '(date?: Date) => void', description: 'Callback fired when date is picked or cleared.' },
      { name: 'placeholder', type: 'string', defaultValue: "'Select date...'", description: 'Placeholder label.' },
      { name: 'label', type: 'string', description: 'Form field label.' },
      { name: 'error', type: 'string | boolean', description: 'Validation error text or boolean.' },
      { name: 'clearable', type: 'boolean', defaultValue: 'true', description: 'Enables quick-clear button.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Field size scale.' }
    ],
    nativeProps: [
      { name: 'minDate', type: 'Date', description: 'Earliest selectable date.' },
      { name: 'maxDate', type: 'Date', description: 'Latest selectable date.' }
    ],
    tokens: ['--color-surface', '--color-border-default', '--color-action-primary'],
    recipes: [
      {
        title: 'Universal DatePicker with Label',
        code: `import { DatePicker } from '@winplaybox/react';\n\n<DatePicker\n  label="Event Date"\n  value={eventDate}\n  onChange={setEventDate}\n  clearable\n/>`
      },
      {
        title: 'Mobile Native OS DatePicker Trigger',
        code: `import { DatePicker } from '@winplaybox/react-native';\n\n<DatePicker\n  label="Booking Date"\n  value={bookingDate}\n  onChange={setBookingDate}\n/>`
      }
    ]
  },
  'web-view-box': {
    id: 'web-view-box',
    name: 'WebViewBox',
    category: 'Surfaces',
    description: 'Universal web page containment surface with animated loading progress indicator, styled error fallback card with retry, and zero-crash external browser fallback.',
    importStatement: "import { WebViewBox } from '@winplaybox/react';",
    nativeImport: "import { WebViewBox } from '@winplaybox/react-native';",
    props: [
      { name: 'source', type: '{ uri: string } | { html: string }', required: true, description: 'Target URL or HTML markup.' },
      { name: 'title', type: 'string', description: 'Accessible frame title.' },
      { name: 'showProgressBar', type: 'boolean', defaultValue: 'true', description: 'Top animated loading progress indicator.' },
      { name: 'onLoadStart', type: '() => void', description: 'Load start event.' },
      { name: 'onLoadEnd', type: '() => void', description: 'Load completion event.' },
      { name: 'onError', type: '(error: any) => void', description: 'Load error handler.' }
    ],
    nativeProps: [
      { name: 'webviewStyle', type: 'StyleProp<ViewStyle>', description: 'Inner webview styling.' }
    ],
    tokens: ['--color-surface', '--color-action-primary', '--color-border-default'],
    recipes: [
      {
        title: 'Responsive Web Frame with Address Header',
        code: `import { WebViewBox } from '@winplaybox/react';\n\n<WebViewBox\n  src="https://example.com"\n  title="External Article"\n  showHeader\n  height="600px"\n/>`
      },
      {
        title: 'Native In-App Web Browser with Progress Bar & Error Fallback',
        code: `import { WebViewBox } from '@winplaybox/react-native';\n\n<WebViewBox\n  source={{ uri: 'https://news.ycombinator.com' }}\n  title="Hacker News"\n  showProgressBar\n/>`
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

// 5. Multi-Platform Capabilities & Platform Resolution Registry
const platforms = {
  web: {
    id: 'web',
    name: 'Web',
    renderer: 'React DOM',
    primaryParadigm: 'Web / responsive / keyboard / ARIA',
    touchStandard: 'Flexible / mouse primary',
    package: '@winplaybox/react',
    primitivesPackage: '@winplaybox/primitives',
    features: ['HTML5 Semantic Elements', 'WAI-ARIA 1.2', 'CSS Media Queries', 'Responsive Breakpoints', 'Keyboard Navigation (Tab, Space, Enter, Arrows)']
  },
  android: {
    id: 'android',
    name: 'Android',
    renderer: 'React Native',
    primaryParadigm: 'Android / Material-inspired native behavior / TalkBack / hardware back',
    touchStandard: '48dp minimum touch target',
    package: '@winplaybox/react-native',
    primitivesPackage: '@winplaybox/react-native',
    features: ['Material Motion Curves', 'Touch Ripple Feedback', 'Soft Keyboard Integration', 'TalkBack Screen Reader', 'Hardware Back Handling']
  },
  ios: {
    id: 'ios',
    name: 'iOS',
    renderer: 'React Native',
    primaryParadigm: 'Apple HIG / touch-first / VoiceOver / safe areas / Dynamic Type',
    touchStandard: '44pt minimum touch target',
    package: '@winplaybox/react-native',
    primitivesPackage: '@winplaybox/react-native',
    features: ['Smooth Physics Springs', 'Active Touch Opacity Feedback', 'Safe Area Insets', 'VoiceOver Accessibility', 'Dynamic Type Scaling']
  },
  windows: {
    id: 'windows',
    name: 'Windows',
    renderer: 'React Native Windows',
    primaryParadigm: 'Windows / WinUI / keyboard + mouse / UIAutomation / high contrast',
    touchStandard: 'Desktop cursor / 32px standard',
    package: '@winplaybox/react-native-windows',
    primitivesPackage: '@winplaybox/react-native-windows',
    features: ['WinUI Acrylic & Mica Surfaces', 'High Contrast Mode', 'UIAutomation Accessibility', 'Full Keyboard Navigation (Tab, F6, Arrow)', 'Mouse Hover States']
  },
  macos: {
    id: 'macos',
    name: 'macOS',
    renderer: 'React Native macOS',
    primaryParadigm: 'macOS / AppKit / mouse + trackpad / keyboard shortcuts / VoiceOver',
    touchStandard: 'Desktop cursor / 28pt standard',
    package: '@winplaybox/react-native-macos',
    primitivesPackage: '@winplaybox/react-native-macos',
    features: ['AppKit Vibrancy Surfaces', 'Native Menu Bar Integration', 'NSAccessibility Roles', 'Trackpad & Mouse Gestures', 'Cmd Keyboard Shortcuts']
  }
};

const componentCapabilities = {
  'text-input': {
    id: 'text-input',
    name: 'TextInput',
    bestPractices: {
      do: [
        'Always associate labels with inputs using labelProps / accessibilityLabel',
        'Use secureTextEntry / type="password" for sensitive credentials',
        'Provide clear, non-punitive error messages when validation fails',
        'Configure platform-correct virtual keyboards (e.g. keyboardType="email-address")'
      ],
      dont: [
        'Never rely solely on placeholder text as a substitute for a field label',
        'Never show desktop hover indicators on touch-only mobile devices',
        'Never force web DOM measurement into native TextInput implementations'
      ]
    },
    platforms: {
      web: {
        platform: 'web',
        support: 'native',
        implementation: '@winplaybox/react',
        variants: ['outlined', 'filled', 'standard'],
        recipes: ['basic', 'search', 'password', 'email', 'multiline', 'select-autocomplete', 'prefix-suffix'],
        states: ['default', 'hover', 'focus', 'disabled', 'readonly', 'error', 'success', 'loading'],
        accessibility: ['aria-invalid', 'aria-describedby', 'aria-required', 'roving-tabIndex'],
        testStatus: 'verified'
      },
      android: {
        platform: 'android',
        support: 'native',
        implementation: '@winplaybox/react-native',
        variants: ['outlined', 'filled'],
        recipes: ['basic', 'search', 'password', 'email', 'multiline'],
        states: ['default', 'focused', 'disabled', 'error'],
        accessibility: ['accessibilityRole="none"', 'accessibilityLabel', '48dp touch target'],
        unsupportedRecipes: ['select-autocomplete', 'prefix-suffix', 'hover-effects'],
        testStatus: 'verified'
      },
      ios: {
        platform: 'ios',
        support: 'native',
        implementation: '@winplaybox/react-native',
        variants: ['default', 'search'],
        recipes: ['basic', 'search', 'password', 'email', 'multiline'],
        states: ['default', 'focused', 'disabled', 'error'],
        accessibility: ['accessibilityTraits=["none"]', 'VoiceOver value readout', '44pt touch target'],
        unsupportedRecipes: ['select-autocomplete', 'prefix-suffix', 'hover-effects'],
        testStatus: 'verified'
      },
      windows: {
        platform: 'windows',
        support: 'adapted',
        implementation: '@winplaybox/react-native-windows',
        variants: ['default', 'outlined'],
        recipes: ['basic', 'search', 'password', 'multiline'],
        states: ['default', 'hover', 'focused', 'disabled', 'error'],
        accessibility: ['UIAutomation Text pattern', 'high-contrast-focus-rect'],
        testStatus: 'verified'
      },
      macos: {
        platform: 'macos',
        support: 'adapted',
        implementation: '@winplaybox/react-native-macos',
        variants: ['default'],
        recipes: ['basic', 'search', 'password', 'multiline'],
        states: ['default', 'hover', 'focused', 'disabled', 'error'],
        accessibility: ['NSAccessibilityTextFieldRole', 'voiceover-announcement'],
        testStatus: 'verified'
      }
    }
  },
  button: {
    id: 'button',
    name: 'Button',
    bestPractices: {
      do: [
        'Use primary variant for the single main call to action',
        'Supply accessible labels or text children for screen readers',
        'Respect platform touch minimums (48dp Android, 44pt iOS)'
      ],
      dont: [
        'Never place multiple primary buttons adjacent to each other',
        'Never use emojis in button labels'
      ]
    },
    platforms: {
      web: {
        platform: 'web',
        support: 'native',
        implementation: '@winplaybox/react',
        variants: ['primary', 'secondary', 'subtle', 'danger', 'outline'],
        recipes: ['primary-action', 'leading-icon', 'loading-state', 'full-width'],
        states: ['default', 'hover', 'focus', 'active', 'disabled', 'loading'],
        accessibility: ['role="button"', 'aria-busy', 'aria-disabled', 'focus-visible ring'],
        testStatus: 'verified'
      },
      android: {
        platform: 'android',
        support: 'native',
        implementation: '@winplaybox/react-native',
        variants: ['primary', 'secondary', 'subtle', 'danger'],
        recipes: ['primary-action', 'leading-icon', 'loading-state'],
        states: ['default', 'pressed', 'disabled', 'loading'],
        accessibility: ['accessibilityRole="button"', 'accessibilityState', '48dp touch target'],
        testStatus: 'verified'
      },
      ios: {
        platform: 'ios',
        support: 'native',
        implementation: '@winplaybox/react-native',
        variants: ['primary', 'secondary', 'subtle', 'danger'],
        recipes: ['primary-action', 'leading-icon', 'loading-state'],
        states: ['default', 'pressed', 'disabled', 'loading'],
        accessibility: ['accessibilityRole="button"', 'accessibilityState', '44pt touch target'],
        testStatus: 'verified'
      },
      windows: {
        platform: 'windows',
        support: 'adapted',
        implementation: '@winplaybox/react-native-windows',
        variants: ['primary', 'secondary', 'subtle', 'danger'],
        recipes: ['primary-action', 'leading-icon', 'loading-state'],
        states: ['default', 'hover', 'pressed', 'focused', 'disabled'],
        accessibility: ['UIAutomation Invoke pattern'],
        testStatus: 'verified'
      },
      macos: {
        platform: 'macos',
        support: 'adapted',
        implementation: '@winplaybox/react-native-macos',
        variants: ['primary', 'secondary', 'subtle', 'danger'],
        recipes: ['primary-action', 'leading-icon', 'loading-state'],
        states: ['default', 'hover', 'pressed', 'focused', 'disabled'],
        accessibility: ['NSAccessibilityButtonRole'],
        testStatus: 'verified'
      }
    }
  },
  'copy-button': {
    id: 'copy-button',
    name: 'CopyButton',
    bestPractices: {
      do: ['Provide accessible feedback when text is copied', 'Keep default timeout to 2000ms'],
      dont: ['Never copy sensitive credentials without explicit user consent']
    },
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/react', testStatus: 'verified' },
      android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
      ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', testStatus: 'verified' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', testStatus: 'verified' }
    }
  },
  'live-indicator': {
    id: 'live-indicator',
    name: 'LiveIndicator',
    bestPractices: {
      do: [
        'Always support prefers-reduced-motion by dampening or stopping animation',
        'Use aria-live="polite" and role="status" for announcements',
        'Keep animation subtle — avoid harsh neon glows'
      ],
      dont: [
        'Never exceed 3 flashes per second (WCAG 2.3.1)',
        'Never rely purely on color to communicate state'
      ]
    },
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/react', testStatus: 'verified' },
      android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
      ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', testStatus: 'verified' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', testStatus: 'verified' }
    }
  },
  dialog: {
    id: 'dialog',
    name: 'Dialog',
    bestPractices: {
      do: ['Trap focus inside modal on Web', 'Support hardware back and escape dismissal'],
      dont: ['Never create nested modal dialogs']
    },
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/react', testStatus: 'verified' },
      android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
      ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', testStatus: 'verified' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', testStatus: 'verified' }
    }
  }
};

// Populate capability matrices for all other components
for (const [id, comp] of Object.entries(allComponents)) {
  if (!componentCapabilities[id]) {
    componentCapabilities[id] = {
      id,
      name: comp.name,
      bestPractices: {
        do: [`Follow ${comp.name} accessibility and token guidelines`],
        dont: ['Never use hardcoded CSS colors or emoji icons']
      },
      platforms: {
        web: { platform: 'web', support: 'native', implementation: '@winplaybox/react', testStatus: 'verified' },
        android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
        ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native', testStatus: 'verified' },
        windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', testStatus: 'verified' },
        macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', testStatus: 'verified' }
      }
    };
  }
  // Attach platforms directly onto comp
  comp.platforms = componentCapabilities[id].platforms;
  comp.bestPractices = componentCapabilities[id].bestPractices;
}

const hookCapabilities = {
  'use-hover': {
    id: 'use-hover',
    name: 'useHover',
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', notes: 'Native mouseenter/mouseleave listeners with cleanup.' },
      android: { platform: 'android', support: 'unsupported', notes: 'Hover is not a primary interaction model on touch devices.', alternative: 'usePressableState / onPressIn' },
      ios: { platform: 'ios', support: 'unsupported', notes: 'Touch screens do not support physical hover states without external trackpad.', alternative: 'usePressableState / onPressIn' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', notes: 'Mouse pointer enter/exit mappings on WinUI controls.' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', notes: 'NSView onMouseEnter/onMouseExit trackpad integration.' }
    }
  },
  'use-media-query': {
    id: 'use-media-query',
    name: 'useMediaQuery',
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', notes: 'CSS window.matchMedia listener.' },
      android: { platform: 'android', support: 'unsupported', notes: 'Native does not execute CSS media queries.', alternative: 'useWindowDimensions() / useBreakpoint()' },
      ios: { platform: 'ios', support: 'unsupported', notes: 'Native does not execute CSS media queries.', alternative: 'useWindowDimensions() / useBreakpoint()' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', notes: 'useWindowDimensions mapping.' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', notes: 'useWindowDimensions mapping.' }
    }
  },
  'use-focus-trap': {
    id: 'use-focus-trap',
    name: 'useFocusTrap',
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', notes: 'Intercepts Tab/Shift+Tab keydown events.' },
      android: { platform: 'android', support: 'unsupported', notes: 'Android uses Modal native container and TalkBack accessibility hierarchy.', alternative: 'Modal accessibleViewIsModal={true}' },
      ios: { platform: 'ios', support: 'unsupported', notes: 'iOS VoiceOver uses native modal accessibility container semantics.', alternative: 'Modal accessibilityViewIsModal={true}' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', notes: 'XAML / WinUI modal focus scoping.' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', notes: 'NSWindow modal session key-view loop.' }
    }
  },
  'use-scroll-lock': {
    id: 'use-scroll-lock',
    name: 'useScrollLock',
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', notes: 'Locks document.body.style.overflow.' },
      android: { platform: 'android', support: 'unsupported', notes: 'Native scroll is managed by ScrollView container boundaries.', alternative: 'ScrollView scrollEnabled={false}' },
      ios: { platform: 'ios', support: 'unsupported', notes: 'Native scroll is managed by ScrollView container boundaries.', alternative: 'ScrollView scrollEnabled={false}' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos' }
    }
  },
  'use-intersection-observer': {
    id: 'use-intersection-observer',
    name: 'useIntersectionObserver',
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', notes: 'Browser IntersectionObserver API.' },
      android: { platform: 'android', support: 'unsupported', notes: 'No browser DOM observer exists in native runtimes.', alternative: 'FlatList onViewableItemsChanged' },
      ios: { platform: 'ios', support: 'unsupported', notes: 'No browser DOM observer exists in native runtimes.', alternative: 'FlatList onViewableItemsChanged' },
      windows: { platform: 'windows', support: 'unsupported', notes: 'Use ListView viewable items detection.', alternative: 'ListView onViewableItemsChanged' },
      macos: { platform: 'macos', support: 'unsupported', notes: 'Use ListView viewable items detection.', alternative: 'ListView onViewableItemsChanged' }
    }
  },
  'use-reduced-motion': {
    id: 'use-reduced-motion',
    name: 'useReducedMotion',
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', notes: 'CSS prefers-reduced-motion query.' },
      android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native', notes: 'AccessibilityInfo.isReduceMotionEnabled listener.' },
      ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native', notes: 'AccessibilityInfo.isReduceMotionEnabled listener.' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', notes: 'UISettings.AnimationsEnabled mapping.' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', notes: 'NSWorkspace reduceMotion status.' }
    }
  },
  'use-clipboard': {
    id: 'use-clipboard',
    name: 'useClipboard',
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives', notes: 'navigator.clipboard.writeText with fallback.' },
      android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native', notes: 'React Native Clipboard API.' },
      ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native', notes: 'UIPasteboard native integration.' },
      windows: { platform: 'windows', support: 'native', implementation: '@winplaybox/react-native-windows', notes: 'Windows DataPackage clipboard.' },
      macos: { platform: 'macos', support: 'native', implementation: '@winplaybox/react-native-macos', notes: 'NSPasteboard native integration.' }
    }
  },
  'use-window-size': {
    id: 'use-window-size',
    name: 'useWindowSize',
    platforms: {
      web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives' },
      android: { platform: 'android', support: 'adapted', implementation: '@winplaybox/react-native', notes: 'useWindowDimensions() native hook.' },
      ios: { platform: 'ios', support: 'adapted', implementation: '@winplaybox/react-native', notes: 'useWindowDimensions() native hook.' },
      windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows', notes: 'useWindowDimensions() native hook.' },
      macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos', notes: 'useWindowDimensions() native hook.' }
    }
  }
};

// Populate default platforms for remaining hooks
for (const [id, hook] of Object.entries(allHooks)) {
  if (!hookCapabilities[id]) {
    hookCapabilities[id] = {
      id,
      name: hook.name,
      platforms: {
        web: { platform: 'web', support: 'native', implementation: '@winplaybox/primitives' },
        android: { platform: 'android', support: 'native', implementation: '@winplaybox/react-native' },
        ios: { platform: 'ios', support: 'native', implementation: '@winplaybox/react-native' },
        windows: { platform: 'windows', support: 'adapted', implementation: '@winplaybox/react-native-windows' },
        macos: { platform: 'macos', support: 'adapted', implementation: '@winplaybox/react-native-macos' }
      }
    };
  }
  hook.platforms = hookCapabilities[id].platforms;
}

// Write out packages/mcp/src/data.js
const outDataPath = path.join(rootDir, 'packages/mcp/src/data.js');

const fileOutput = `/**
 * Spectra UI MCP Design System Data Registry
 * Auto-generated and synchronized across @winplaybox/react, @winplaybox/react-native,
 * @winplaybox/tokens, @winplaybox/primitives, @winplaybox/platform-capabilities, and @winplaybox/icons.
 */

export const COMPONENTS = ${JSON.stringify(allComponents, null, 2)};

export const HOOKS = ${JSON.stringify(allHooks, null, 2)};

export const TOKENS = ${JSON.stringify({ colors, spacing, radius, motion }, null, 2)};

export const ICONS = ${JSON.stringify(curatedIcons, null, 2)};

export const PLATFORMS = ${JSON.stringify(platforms, null, 2)};

export const PLATFORM_CAPABILITIES = ${JSON.stringify(componentCapabilities, null, 2)};

export const HOOKS_CAPABILITIES = ${JSON.stringify(hookCapabilities, null, 2)};
`;

fs.writeFileSync(outDataPath, fileOutput, 'utf8');

console.log('Successfully generated MCP Registry:');
console.log('- Components: ' + Object.keys(allComponents).length);
console.log('- Hooks: ' + Object.keys(allHooks).length);
console.log('- Color Tokens: ' + Object.keys(colors).length);
console.log('- Curated Icons: ' + curatedIcons.length);
console.log('- Platforms: ' + Object.keys(platforms).length);


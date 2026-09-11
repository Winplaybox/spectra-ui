/**
 * Spectra UI MCP Design System Data Registry
 */

export const COMPONENTS = {
  button: {
    id: 'button',
    name: 'Button',
    category: 'Actions',
    description: 'Primary interactive trigger for user actions. Supports 5 visual variants, 3 sizes, loading spinner, and contextual icons.',
    importStatement: "import { Button } from '@spectra/react';",
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'subtle' | 'danger' | 'outline'", defaultValue: "'primary'", description: 'Visual appearance and emphasis.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Density and touch target scale.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents interaction and applies dimmed styling.' },
      { name: 'loading', type: 'boolean', defaultValue: 'false', description: 'Animated loading spinner with aria-busy="true".' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Contextual vector icon.' },
      { name: 'iconPosition', type: "'left' | 'right'", defaultValue: "'left'", description: 'Placement of icon relative to label.' },
      { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Stretches button to 100% container width.' },
    ],
    cssClasses: ['.spectra-button', '.spectra-button--primary', '.spectra-button--secondary', '.spectra-button--danger', '.spectra-button--loading'],
    tokens: ['--spectra-button-bg', '--spectra-button-fg', '--spectra-button-border', '--spectra-button-radius'],
    nativeProps: ['onPress', 'hitSlop', 'activeOpacity', 'accessibilityRole'],
    recipes: [
      {
        title: 'Primary Button with Leading Icon',
        code: `import { Button } from '@spectra/react';\nimport { DownloadIcon } from '@spectra/icons';\n\n<Button variant="primary" icon={<DownloadIcon size={16} />}>Export Report</Button>`
      },
      {
        title: 'Danger Button with Loading State',
        code: `import { Button } from '@spectra/react';\n\n<Button variant="danger" loading={isDeleting} onClick={handleDelete}>Delete Resource</Button>`
      }
    ]
  },
  'text-input': {
    id: 'text-input',
    name: 'TextInput',
    category: 'Inputs',
    description: 'Text fields for user input across forms, search bars, and modals with validation states and password reveal.',
    importStatement: "import { TextInput } from '@spectra/react';",
    props: [
      { name: 'label', type: 'string', description: 'Accessible label above field.' },
      { name: 'placeholder', type: 'string', description: 'Hint text.' },
      { name: 'value', type: 'string', description: 'Controlled input value.' },
      { name: 'onChange', type: '(e: ChangeEvent<HTMLInputElement>) => void', description: 'Input change handler.' },
      { name: 'error', type: 'boolean | string', description: 'Error outline and message.' },
      { name: 'description', type: 'string', description: 'Helper text.' },
      { name: 'leftIcon', type: 'ReactNode', description: 'Leading icon (e.g. search).' },
      { name: 'rightAction', type: 'ReactNode', description: 'Trailing action (e.g. clear, eye toggle).' },
    ],
    cssClasses: ['.spectra-input', '.spectra-input--focused', '.spectra-input--error'],
    tokens: ['--spectra-input-bg', '--spectra-input-border', '--spectra-input-focus-ring'],
    nativeProps: ['value', 'onChangeText', 'placeholder', 'secureTextEntry'],
    recipes: [
      {
        title: 'Password Field with Reveal Toggle',
        code: `import React, { useState } from 'react';\nimport { TextInput } from '@spectra/react';\nimport { EyeIcon, EyeOffIcon } from '@spectra/icons';\n\nexport function PasswordInput() {\n  const [show, setShow] = useState(false);\n  return (\n    <TextInput\n      label="Password"\n      type={show ? 'text' : 'password'}\n      rightAction={\n        <button type="button" onClick={() => setShow(!show)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>\n          {show ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}\n        </button>\n      }\n    />\n  );\n}`
      }
    ]
  },
  select: {
    id: 'select',
    name: 'Select',
    category: 'Inputs',
    description: 'Accessible dropdown selection menu supporting grouped categories (optgroup) and validation states.',
    importStatement: "import { Select } from '@spectra/react';",
    props: [
      { name: 'label', type: 'string', description: 'Form label.' },
      { name: 'options', type: 'SelectOption[] | SelectGroup[]', description: 'Selectable items or grouped categories.' },
      { name: 'value', type: 'string', description: 'Selected value string.' },
      { name: 'onChange', type: '(value: string) => void', description: 'Change handler.' },
    ],
    tokens: ['--spectra-select-bg', '--spectra-select-border'],
    recipes: []
  },
  checkbox: {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Inputs',
    description: 'Binary and multi-select checkbox control with indeterminate state for parent-child tree selection.',
    importStatement: "import { Checkbox } from '@spectra/react';",
    props: [
      { name: 'checked', type: 'boolean', description: 'Active checked state.' },
      { name: 'indeterminate', type: 'boolean', description: 'Partial selection minus line.' },
      { name: 'onChange', type: '(checked: boolean) => void', description: 'State toggle callback.' },
      { name: 'label', type: 'ReactNode', description: 'Label alongside checkbox.' },
    ],
    tokens: ['--spectra-checkbox-size', '--spectra-checkbox-bg-checked'],
    recipes: []
  },
  dialog: {
    id: 'dialog',
    name: 'Dialog',
    category: 'Feedback',
    description: 'Accessible modal dialog surface with focus trap, backdrop blur, keyboard Escape dismissal, and return focus restore.',
    importStatement: "import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@spectra/react';",
    props: [
      { name: 'isOpen', type: 'boolean', required: true, description: 'Controls modal visibility.' },
      { name: 'onClose', type: '() => void', required: true, description: 'Backdrop click or Escape dismissal.' },
      { name: 'title', type: 'ReactNode', description: 'Accessible modal title.' },
    ],
    tokens: ['--spectra-dialog-width', '--spectra-dialog-radius', '--spectra-dialog-backdrop-color'],
    recipes: [
      {
        title: 'Modal Dialog with useDisclosure',
        code: `import { Button, Dialog, DialogBody, DialogFooter, useDisclosure } from '@spectra/react';\n\nexport function ModalDemo() {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  return (\n    <>\n      <Button onClick={onOpen}>Open Modal</Button>\n      <Dialog isOpen={isOpen} onClose={onClose} title="Project Settings">\n        <DialogBody>Configure project options...</DialogBody>\n        <DialogFooter>\n          <Button variant="subtle" onClick={onClose}>Close</Button>\n        </DialogFooter>\n      </Dialog>\n    </>\n  );\n}`
      }
    ]
  },
  card: {
    id: 'card',
    name: 'Card',
    category: 'Surfaces',
    description: 'Structured surface container with elevated, flat, and bordered variants. High contrast background preventing floating dots bleed-through.',
    importStatement: "import { Card } from '@spectra/react';",
    props: [
      { name: 'variant', type: "'elevated' | 'flat' | 'bordered'", defaultValue: "'elevated'", description: 'Surface visual style.' },
      { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Padding scale.' },
    ],
    tokens: ['--color-surface', '--color-surface-sunken', '--spectra-card-radius'],
    recipes: []
  },
  accordion: {
    id: 'accordion',
    name: 'Accordion',
    category: 'Data Display',
    description: 'Vertically stacked collapsible panels with smooth animations and keyboard arrow navigation.',
    importStatement: "import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@spectra/react';",
    props: [
      { name: 'allowMultiple', type: 'boolean', defaultValue: 'false', description: 'Permit multiple panels open simultaneously.' },
      { name: 'items', type: 'AccordionItemData[]', description: 'List of accordion items.' },
    ],
    tokens: ['--spectra-accordion-border', '--spectra-accordion-header-bg'],
    recipes: []
  },
  tabs: {
    id: 'tabs',
    name: 'Tabs',
    category: 'Navigation',
    description: 'Navigation tab strip with underline and pill variants, smooth active indicator transitions, and keyboard arrow navigation.',
    importStatement: "import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@spectra/react';",
    props: [
      { name: 'variant', type: "'underline' | 'pill'", defaultValue: "'underline'", description: 'Tab indicator style.' },
      { name: 'selectedIndex', type: 'number', defaultValue: '0', description: 'Controlled active tab index.' },
      { name: 'onChange', type: '(index: number) => void', description: 'Fired on tab switch.' },
    ],
    tokens: ['--spectra-tabs-indicator-color', '--spectra-tabs-height'],
    recipes: []
  }
};

export const HOOKS = {
  'use-disclosure': {
    name: 'useDisclosure',
    description: 'Headless open/close/toggle state machine for modals, drawers, and popovers.',
    signature: 'useDisclosure(options?: { defaultIsOpen?: boolean, onOpen?: () => void, onClose?: () => void })',
    returns: ['isOpen: boolean', 'onOpen: () => void', 'onClose: () => void', 'onToggle: () => void', 'getButtonProps()', 'getDisclosureProps()'],
    accessibility: ['aria-expanded', 'aria-controls', 'aria-hidden'],
  },
  'use-color-scheme': {
    name: 'useColorScheme',
    description: 'Detects and toggles light/dark mode with system synchronization and localStorage persistence.',
    signature: 'useColorScheme(): { colorScheme: "light" | "dark", setColorScheme: (m: "light" | "dark") => void, toggleColorScheme: () => void }',
    returns: ['colorScheme', 'setColorScheme', 'toggleColorScheme'],
    accessibility: ['prefers-color-scheme media query synchronization'],
  },
  'use-outside-click': {
    name: 'useOutsideClick',
    description: 'Dismiss floating overlays or popovers when clicking outside designated element.',
    signature: 'useOutsideClick({ ref: RefObject<HTMLElement>, handler: (e: Event) => void, enabled?: boolean })',
    returns: ['void'],
    accessibility: ['Click-away dismiss pattern'],
  },
  'use-id': {
    name: 'useId',
    description: 'Collision-free SSR-safe unique HTML and ARIA IDs for form field labels and descriptions.',
    signature: 'useId(idProp?: string, prefix?: string): string',
    returns: ['string'],
    accessibility: ['aria-labelledby, aria-describedby linking'],
  }
};

export const TOKENS = {
  colors: {
    '--color-surface-sunken': { light: '#F1F5F9', dark: '#0F172A', role: 'Sunken canvas background behind cards to eliminate breathing dots bleed-through.' },
    '--color-surface': { light: '#FFFFFF', dark: '#1E293B', role: 'Primary container surface.' },
    '--color-surface-raised': { light: '#F8FAFC', dark: '#334155', role: 'Elevated popover and dropdown surface.' },
    '--color-primary-default': { light: '#2563EB', dark: '#38BDF8', role: 'Brand primary accent color.' },
    '--color-danger-default': { light: '#DC2626', dark: '#F87171', role: 'Destructive action and error color.' },
    '--color-success-default': { light: '#16A34A', dark: '#4ADE80', role: 'Positive confirmation and status tag.' },
    '--color-text-primary': { light: '#0F172A', dark: '#F8FAFC', role: 'Primary readable body text.' },
    '--color-text-secondary': { light: '#475569', dark: '#94A3B8', role: 'Secondary descriptions and helper labels.' },
  },
  spacing: {
    '--spacing-1': '4px',
    '--spacing-2': '8px',
    '--spacing-3': '12px',
    '--spacing-4': '16px',
    '--spacing-6': '24px',
    '--spacing-8': '32px',
  },
  motion: {
    '--motion-duration-fast': '150ms',
    '--motion-duration-normal': '250ms',
    '--motion-duration-slow': '400ms',
    '--motion-easing-standard': 'cubic-bezier(0.2, 0, 0, 1)',
  }
};

export const ICONS = [
  'SearchIcon', 'CloseIcon', 'CheckIcon', 'DownloadIcon', 'EyeIcon', 'EyeOffIcon',
  'ChevronDownIcon', 'ChevronUpIcon', 'ChevronRightIcon', 'ChevronLeftIcon',
  'SettingsIcon', 'UserIcon', 'SparklesIcon', 'CodeIcon', 'LayersIcon', 'PaletteIcon',
  'FacebookIcon', 'TwitterIcon', 'GoogleIcon', 'GithubIcon', 'TiktokIcon', 'DiscordIcon', 'FigmaIcon'
];

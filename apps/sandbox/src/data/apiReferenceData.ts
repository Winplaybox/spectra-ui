export interface PropApiItem {
  name: string;
  type: string;
  defaultValue: string;
  required?: boolean;
  description: string;
}

export interface CssClassItem {
  ruleName: string;
  className: string;
  description: string;
}

export interface CssVariableItem {
  variable: string;
  defaultToken: string;
  description: string;
}

export interface NativePropItem {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
  platformNote?: string;
}

export interface ComponentApiReference {
  componentName: string;
  exportName: string;
  importStatement: string;
  subpathImport: string;
  nativeImport: string;
  primitivesImport?: string;
  description: string;
  props: PropApiItem[];
  cssClasses: CssClassItem[];
  cssVariables: CssVariableItem[];
  nativeProps: NativePropItem[];
}

export interface HookParamItem {
  name: string;
  type: string;
  defaultValue: string;
  required?: boolean;
  description: string;
}

export interface HookReturnItem {
  name: string;
  type: string;
  description: string;
}

export interface HookApiReference {
  hookName: string;
  importStatement: string;
  signature: string;
  description: string;
  parameters: HookParamItem[];
  returnValues: HookReturnItem[];
  ariaAttributes?: Array<{ attr: string; description: string }>;
  exampleUsage: string;
}

export const COMPONENT_API_DATA: Record<string, ComponentApiReference> = {
  button: {
    componentName: 'Button',
    exportName: 'Button',
    importStatement: "import { Button } from '@spectra/react';",
    subpathImport: "import Button from '@spectra/react/Button';",
    nativeImport: "import { Button } from '@spectra/react-native';",
    primitivesImport: "import { useButtonProps } from '@spectra/primitives';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'danger'", defaultValue: "'primary'", description: 'Visual appearance and semantic hierarchy of the button.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Sizing scale affecting padding, font size, and icon proportions.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'If true, user interaction is prevented and disabled styling is applied.' },
      { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'If true, renders an animated circular spinner and temporarily suppresses clicks.' },
      { name: 'icon', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Vector icon element positioned adjacent to the label.' },
      { name: 'iconPosition', type: "'left' | 'right'", defaultValue: "'left'", description: 'Determines whether the icon appears before or after the text label.' },
      { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'If true, the button stretches to 100% of its parent container.' },
      { name: 'onClick', type: '(event: React.MouseEvent<HTMLButtonElement>) => void', defaultValue: 'undefined', description: 'Callback fired when the button is clicked or activated via Space/Enter.' },
      { name: 'type', type: "'button' | 'submit' | 'reset'", defaultValue: "'button'", description: 'Native HTML button type attribute for form interactions.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Label text or child nodes to render inside the button.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-button', description: 'Styles applied to the root <button> element.' },
      { ruleName: 'primary', className: '.spectra-button--primary', description: "Styles applied if variant='primary'." },
      { ruleName: 'secondary', className: '.spectra-button--secondary', description: "Styles applied if variant='secondary'." },
      { ruleName: 'tertiary', className: '.spectra-button--tertiary', description: "Styles applied if variant='tertiary'." },
      { ruleName: 'danger', className: '.spectra-button--danger', description: "Styles applied if variant='danger'." },
      { ruleName: 'sizeSm', className: '.spectra-button--sm', description: "Styles applied if size='sm' (height: 32px, text: 12px)." },
      { ruleName: 'sizeMd', className: '.spectra-button--md', description: "Styles applied if size='md' (height: 40px, text: 14px)." },
      { ruleName: 'sizeLg', className: '.spectra-button--lg', description: "Styles applied if size='lg' (height: 48px, text: 16px)." },
      { ruleName: 'loading', className: '.spectra-button--loading', description: 'Styles applied when isLoading=true (cursor: wait).' },
      { ruleName: 'disabled', className: '.spectra-button--disabled', description: 'Styles applied when disabled=true (opacity: 0.45, pointer-events: none).' },
      { ruleName: 'icon', className: '.spectra-button__icon', description: 'Styles applied to the leading or trailing icon container.' },
    ],
    cssVariables: [
      { variable: '--spectra-button-bg', defaultToken: 'var(--color-action-primary)', description: 'Background surface color for default state.' },
      { variable: '--spectra-button-color', defaultToken: '#FFFFFF', description: 'Foreground text and icon fill color.' },
      { variable: '--spectra-button-radius', defaultToken: 'var(--radius-component-md)', description: 'Corner border radius token.' },
      { variable: '--spectra-button-height', defaultToken: '40px (size md)', description: 'Minimum height dimension of the button.' },
      { variable: '--spectra-button-font-weight', defaultToken: '600', description: 'Font weight applied to the button label.' },
    ],
    nativeProps: [
      { name: 'onPress', type: '(event: GestureResponderEvent) => void', defaultValue: 'undefined', description: 'Native touch press handler fired on touch up.' },
      { name: 'variant', type: "'filled' | 'tinted' | 'outline' | 'plain'", defaultValue: "'filled'", description: 'Native visual surface style.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Native layout padding and minimum touch target size.' },
      { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'Renders native ActivityIndicator inside button.' },
      { name: 'hitSlop', type: 'Insets', defaultValue: '{ top: 8, bottom: 8, left: 8, right: 8 }', description: 'Expands touch target to meet 44pt Apple HIG.' },
      { name: 'style', type: 'ViewStyle', defaultValue: 'undefined', description: 'Custom native style object applied to outer Pressable.' },
    ],
  },

  'text-input': {
    componentName: 'TextInput',
    exportName: 'TextInput',
    importStatement: "import { TextInput } from '@spectra/react';",
    subpathImport: "import TextInput from '@spectra/react/TextInput';",
    nativeImport: "import { TextInput } from '@spectra/react-native';",
    primitivesImport: "import { useId } from '@spectra/primitives';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Accessible label text associated with the input element.' },
      { name: 'value', type: 'string', defaultValue: 'undefined', description: 'Controlled input string value.' },
      { name: 'defaultValue', type: 'string', defaultValue: 'undefined', description: 'Default initial value for uncontrolled inputs.' },
      { name: 'placeholder', type: 'string', defaultValue: "''", description: 'Lightweight formatting hint shown when input is empty.' },
      { name: 'error', type: 'string', defaultValue: 'undefined', description: 'Validation error message displayed beneath the input with role="alert".' },
      { name: 'description', type: 'string', defaultValue: 'undefined', description: 'Helper text providing guidance before input.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables user entry and greys out the border.' },
      { name: 'leftIcon', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Contextual vector icon displayed on the left side.' },
      { name: 'rightIcon', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Interactive icon on the right side (e.g. clear, password toggle).' },
      { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', defaultValue: 'undefined', description: 'Fired on every keystroke in controlled mode.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-text-input', description: 'Wrapper container enclosing label, input box, and helper text.' },
      { ruleName: 'label', className: '.spectra-text-input__label', description: 'Label element tied to input id via htmlFor.' },
      { ruleName: 'wrapper', className: '.spectra-text-input__wrapper', description: 'Flexbox box containing left icon, input field, and right icon.' },
      { ruleName: 'input', className: '.spectra-text-input__field', description: 'Native HTML <input> element.' },
      { ruleName: 'error', className: '.spectra-text-input__error', description: 'Error message text with danger color and alert ARIA attributes.' },
      { ruleName: 'description', className: '.spectra-text-input__description', description: 'Muted helper description beneath the input.' },
    ],
    cssVariables: [
      { variable: '--spectra-input-bg', defaultToken: 'var(--color-surface)', description: 'Input container background fill.' },
      { variable: '--spectra-input-border', defaultToken: 'var(--color-border-default)', description: 'Resting 1px border color.' },
      { variable: '--spectra-input-border-focus', defaultToken: 'var(--color-action-primary)', description: 'Active focus outline and ring color.' },
      { variable: '--spectra-input-radius', defaultToken: 'var(--radius-component-md)', description: 'Corner curvature of input container.' },
    ],
    nativeProps: [
      { name: 'onChangeText', type: '(text: string) => void', defaultValue: 'undefined', description: 'Native callback returning raw text string.' },
      { name: 'keyboardType', type: 'KeyboardTypeOptions', defaultValue: "'default'", description: 'Selects keyboard layout (email, numeric, phone, etc.).' },
      { name: 'returnKeyType', type: 'ReturnKeyTypeOptions', defaultValue: "'done'", description: 'Visual appearance of the return key on soft keyboard.' },
      { name: 'secureTextEntry', type: 'boolean', defaultValue: 'false', description: 'Obscures text for passwords.' },
    ],
  },

  select: {
    componentName: 'Select',
    exportName: 'Select',
    importStatement: "import { Select } from '@spectra/react';",
    subpathImport: "import Select from '@spectra/react/Select';",
    nativeImport: "import { Select } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Label title displayed above the dropdown field.' },
      { name: 'options', type: 'Array<{ value: string; label: string }>', defaultValue: '[]', required: true, description: 'List of selectable option items.' },
      { name: 'value', type: 'string', defaultValue: 'undefined', description: 'Currently selected option value in controlled mode.' },
      { name: 'defaultValue', type: 'string', defaultValue: 'undefined', description: 'Initial selected option value.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables dropdown interaction.' },
      { name: 'error', type: 'string', defaultValue: 'undefined', description: 'Error message text displayed below select.' },
      { name: 'onChange', type: '(event: React.ChangeEvent<HTMLSelectElement>) => void', defaultValue: 'undefined', description: 'Fired when user picks an option.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-select', description: 'Wrapper element for label and custom dropdown trigger.' },
      { ruleName: 'trigger', className: '.spectra-select__trigger', description: 'Box displaying currently active selection and chevron.' },
      { ruleName: 'chevron', className: '.spectra-select__chevron', description: 'Trailing 16px down-arrow vector indicator.' },
    ],
    cssVariables: [
      { variable: '--spectra-select-bg', defaultToken: 'var(--color-surface)', description: 'Dropdown surface background.' },
      { variable: '--spectra-select-border', defaultToken: 'var(--color-border-default)', description: 'Outer border color.' },
      { variable: '--spectra-select-radius', defaultToken: 'var(--radius-component-md)', description: 'Corner radius token.' },
    ],
    nativeProps: [
      { name: 'selectedValue', type: 'string', defaultValue: 'undefined', description: 'Controlled value matching one of the options.' },
      { name: 'onValueChange', type: '(itemValue: string) => void', defaultValue: 'undefined', description: 'Callback invoked when a picker item is tapped.' },
    ],
  },

  checkbox: {
    componentName: 'Checkbox',
    exportName: 'Checkbox',
    importStatement: "import { Checkbox } from '@spectra/react';",
    subpathImport: "import Checkbox from '@spectra/react/Checkbox';",
    nativeImport: "import { Checkbox } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'checked', type: 'boolean', defaultValue: 'undefined', description: 'Controlled boolean selection state.' },
      { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Initial check state for uncontrolled checkboxes.' },
      { name: 'indeterminate', type: 'boolean', defaultValue: 'false', description: 'Renders dash line indicating partial selection.' },
      { name: 'label', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Text or node label rendered next to checkbox.' },
      { name: 'description', type: 'string', defaultValue: 'undefined', description: 'Supporting helper text underneath the label.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables user toggling.' },
      { name: 'onChange', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Callback invoked with new boolean state on click.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-checkbox', description: 'Label wrapper establishing accessible flex alignment.' },
      { ruleName: 'control', className: '.spectra-checkbox__control', description: 'Visual 18px square containing check or dash icon.' },
      { ruleName: 'label', className: '.spectra-checkbox__label', description: 'Text label element beside checkbox.' },
      { ruleName: 'description', className: '.spectra-checkbox__description', description: 'Muted helper text.' },
    ],
    cssVariables: [
      { variable: '--spectra-checkbox-size', defaultToken: '18px', description: 'Square dimensions of checkbox box.' },
      { variable: '--spectra-checkbox-checked-bg', defaultToken: 'var(--color-action-primary)', description: 'Fill color when checked.' },
      { variable: '--spectra-checkbox-radius', defaultToken: 'var(--radius-component-sm)', description: 'Corner curvature of box.' },
    ],
    nativeProps: [
      { name: 'value', type: 'boolean', defaultValue: 'false', description: 'Native boolean value.' },
      { name: 'onValueChange', type: '(value: boolean) => void', defaultValue: 'undefined', description: 'Callback returning updated boolean.' },
    ],
  },

  radio: {
    componentName: 'Radio',
    exportName: 'Radio',
    importStatement: "import { Radio, RadioGroup } from '@spectra/react';",
    subpathImport: "import Radio from '@spectra/react/Radio';",
    nativeImport: "import { Radio } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'value', type: 'string', defaultValue: 'undefined', required: true, description: 'Unique string value of this radio option within its group.' },
      { name: 'label', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Accessible label text beside the radio circle.' },
      { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Controlled check state.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables option selection.' },
      { name: 'onChange', type: '(value: string) => void', defaultValue: 'undefined', description: 'Fired when this radio is selected.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-radio', description: 'Root interactive label container.' },
      { ruleName: 'circle', className: '.spectra-radio__circle', description: 'Outer circular ring with focus-visible styling.' },
      { ruleName: 'dot', className: '.spectra-radio__dot', description: 'Inner solid dot rendered when checked.' },
    ],
    cssVariables: [
      { variable: '--spectra-radio-size', defaultToken: '18px', description: 'Outer diameter of radio button.' },
      { variable: '--spectra-radio-color', defaultToken: 'var(--color-action-primary)', description: 'Primary ring and dot fill.' },
    ],
    nativeProps: [
      { name: 'selected', type: 'boolean', defaultValue: 'false', description: 'Native selection boolean.' },
      { name: 'onSelect', type: '() => void', defaultValue: 'undefined', description: 'Native callback when tapped.' },
    ],
  },

  switch: {
    componentName: 'Switch',
    exportName: 'Switch',
    importStatement: "import { Switch } from '@spectra/react';",
    subpathImport: "import Switch from '@spectra/react/Switch';",
    nativeImport: "import { Switch } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'checked', type: 'boolean', defaultValue: 'undefined', description: 'Controlled boolean toggle state.' },
      { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Initial uncontrolled toggle state.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Text label beside the toggle switch.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents state changes and dims track.' },
      { name: 'onChange', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Callback returning new toggle boolean.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-switch', description: 'Label element containing track and text.' },
      { ruleName: 'track', className: '.spectra-switch__track', description: 'Pill-shaped track container (width: 44px, height: 24px).' },
      { ruleName: 'thumb', className: '.spectra-switch__thumb', description: 'Circular white knob sliding horizontally with spring motion.' },
    ],
    cssVariables: [
      { variable: '--spectra-switch-track-active', defaultToken: 'var(--color-action-primary)', description: 'Track fill when switched on.' },
      { variable: '--spectra-switch-track-inactive', defaultToken: 'var(--color-border-subtle)', description: 'Track fill when switched off.' },
      { variable: '--spectra-switch-motion', defaultToken: 'var(--motion-subtle)', description: 'Transition timing for thumb slide.' },
    ],
    nativeProps: [
      { name: 'value', type: 'boolean', defaultValue: 'false', description: 'Native switch boolean state.' },
      { name: 'onValueChange', type: '(value: boolean) => void', defaultValue: 'undefined', description: 'Native callback returning boolean.' },
    ],
  },

  avatar: {
    componentName: 'Avatar',
    exportName: 'Avatar',
    importStatement: "import { Avatar } from '@spectra/react';",
    subpathImport: "import Avatar from '@spectra/react/Avatar';",
    nativeImport: "import { Avatar } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'src', type: 'string', defaultValue: 'undefined', description: 'Image source URL.' },
      { name: 'name', type: 'string', defaultValue: 'undefined', description: 'Person name used to compute initials fallback.' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", defaultValue: "'md'", description: 'Sizing scale from 24px to 64px.' },
      { name: 'status', type: "'online' | 'busy' | 'away' | 'offline'", defaultValue: 'undefined', description: 'Renders colored presence badge dot.' },
      { name: 'variant', type: "'circular' | 'rounded' | 'square'", defaultValue: "'circular'", description: 'Corner curvature geometry.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-avatar', description: 'Circular container clipping image and rendering background initials.' },
      { ruleName: 'image', className: '.spectra-avatar__image', description: 'Avatar img element with object-fit: cover.' },
      { ruleName: 'status', className: '.spectra-avatar__status', description: 'Corner presence dot badge.' },
    ],
    cssVariables: [
      { variable: '--spectra-avatar-size', defaultToken: '40px (size md)', description: 'Width and height dimension.' },
      { variable: '--spectra-avatar-bg', defaultToken: 'var(--color-surface-raised)', description: 'Background fallback fill.' },
    ],
    nativeProps: [
      { name: 'name', type: 'string', defaultValue: 'undefined', description: 'Native avatar name for fallback.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Native dimensions.' },
      { name: 'status', type: "'online' | 'busy' | 'away'", defaultValue: 'undefined', description: 'Presence indicator.' },
    ],
  },

  badge: {
    componentName: 'Badge',
    exportName: 'Badge',
    importStatement: "import { Badge } from '@spectra/react';",
    subpathImport: "import Badge from '@spectra/react/Badge';",
    nativeImport: "import { Badge } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'variant', type: "'primary' | 'success' | 'warning' | 'error' | 'neutral'", defaultValue: "'neutral'", description: 'Semantic intent and color palette.' },
      { name: 'dot', type: 'boolean', defaultValue: 'false', description: 'Renders small pulsing circular indicator on the left.' },
      { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: 'Sizing density scale.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Content text rendered inside badge.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-badge', description: 'Pill-shaped element with subtle border and text styling.' },
      { ruleName: 'dot', className: '.spectra-badge__dot', description: '6px circular presence dot.' },
    ],
    cssVariables: [
      { variable: '--spectra-badge-radius', defaultToken: 'var(--radius-full)', description: 'Full pill border-radius.' },
      { variable: '--spectra-badge-padding', defaultToken: '2px 8px', description: 'Inline padding.' },
    ],
    nativeProps: [
      { name: 'variant', type: "'primary' | 'success' | 'error'", defaultValue: "'primary'", description: 'Native status color theme.' },
      { name: 'dot', type: 'boolean', defaultValue: 'false', description: 'Renders native status circle.' },
    ],
  },

  card: {
    componentName: 'Card',
    exportName: 'Card',
    importStatement: "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@spectra/react';",
    subpathImport: "import Card from '@spectra/react/Card';",
    nativeImport: "import { Card } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'variant', type: "'bordered' | 'elevated' | 'flat'", defaultValue: "'bordered'", description: 'Surface depth styling.' },
      { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Internal container padding.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Card content nodes.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-card', description: 'Outer card surface with border-radius and background.' },
      { ruleName: 'header', className: '.spectra-card__header', description: 'Card top title and description container.' },
      { ruleName: 'content', className: '.spectra-card__content', description: 'Main body section.' },
      { ruleName: 'footer', className: '.spectra-card__footer', description: 'Bottom actions toolbar.' },
    ],
    cssVariables: [
      { variable: '--spectra-card-bg', defaultToken: 'var(--color-surface)', description: 'Solid surface fill.' },
      { variable: '--spectra-card-border', defaultToken: 'var(--color-border-default)', description: 'Border outline color.' },
      { variable: '--spectra-card-radius', defaultToken: 'var(--radius-component-md)', description: 'Corner radius (12px).' },
    ],
    nativeProps: [
      { name: 'variant', type: "'bordered' | 'flat'", defaultValue: "'bordered'", description: 'Native surface style.' },
    ],
  },

  tabs: {
    componentName: 'Tabs',
    exportName: 'Tabs',
    importStatement: "import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@spectra/react';",
    subpathImport: "import Tabs from '@spectra/react/Tabs';",
    nativeImport: "import { Tabs } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'value', type: 'string', defaultValue: 'undefined', description: 'Active tab value in controlled mode.' },
      { name: 'defaultValue', type: 'string', defaultValue: 'undefined', description: 'Initial active tab value.' },
      { name: 'variant', type: "'underline' | 'pills'", defaultValue: "'underline'", description: 'Visual navigation presentation style.' },
      { name: 'onChange', type: '(value: string) => void', defaultValue: 'undefined', description: 'Fired when user clicks a new tab.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-tabs', description: 'Outer tabs container.' },
      { ruleName: 'list', className: '.spectra-tabs__list', description: 'Horizontal scrollable bar holding tab buttons.' },
      { ruleName: 'tab', className: '.spectra-tabs__tab', description: 'Single tab item with aria-selected="true/false".' },
      { ruleName: 'panel', className: '.spectra-tabs__panel', description: 'Associated content panel with role="tabpanel".' },
    ],
    cssVariables: [
      { variable: '--spectra-tab-active-color', defaultToken: 'var(--color-action-primary)', description: 'Text and underline indicator color.' },
      { variable: '--spectra-tab-indicator-height', defaultToken: '2px', description: 'Bottom active bar indicator height.' },
    ],
    nativeProps: [
      { name: 'tabs', type: 'string[]', defaultValue: '[]', description: 'Array of tab titles.' },
      { name: 'selectedIndex', type: 'number', defaultValue: '0', description: 'Active tab index.' },
      { name: 'onTabPress', type: '(index: number) => void', defaultValue: 'undefined', description: 'Fired on tab tap.' },
    ],
  },

  accordion: {
    componentName: 'Accordion',
    exportName: 'Accordion',
    importStatement: "import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@spectra/react';",
    subpathImport: "import Accordion from '@spectra/react/Accordion';",
    nativeImport: "import { Accordion } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'type', type: "'single' | 'multiple'", defaultValue: "'single'", description: 'Whether one or multiple panels can be expanded simultaneously.' },
      { name: 'defaultValue', type: 'string | string[]', defaultValue: 'undefined', description: 'Initially expanded item value(s).' },
      { name: 'value', type: 'string | string[]', defaultValue: 'undefined', description: 'Controlled expanded item value(s).' },
      { name: 'onChange', type: '(value: string | string[]) => void', defaultValue: 'undefined', description: 'Fired when panel toggles.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-accordion', description: 'Container holding accordion items.' },
      { ruleName: 'item', className: '.spectra-accordion__item', description: 'Individual collapsible item row.' },
      { ruleName: 'header', className: '.spectra-accordion__header', description: 'Clickable header trigger with aria-expanded.' },
      { ruleName: 'panel', className: '.spectra-accordion__panel', description: 'Expandable body container.' },
    ],
    cssVariables: [
      { variable: '--spectra-accordion-border', defaultToken: 'var(--color-border-subtle)', description: 'Divider border color.' },
      { variable: '--spectra-accordion-motion', defaultToken: 'var(--motion-standard)', description: 'Collapse expansion transition timing.' },
    ],
    nativeProps: [
      { name: 'defaultValue', type: 'string', defaultValue: 'undefined', description: 'Native initial expanded item.' },
    ],
  },

  dialog: {
    componentName: 'Dialog',
    exportName: 'Dialog',
    importStatement: "import { Dialog } from '@spectra/react';",
    subpathImport: "import Dialog from '@spectra/react/Dialog';",
    nativeImport: "import { Modal } from 'react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'isOpen', type: 'boolean', defaultValue: 'false', required: true, description: 'Controls visibility of modal dialog.' },
      { name: 'onClose', type: '() => void', defaultValue: 'undefined', required: true, description: 'Callback fired on backdrop click or Escape key.' },
      { name: 'title', type: 'string', defaultValue: 'undefined', description: 'Accessible heading title.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Dialog content body.' },
    ],
    cssClasses: [
      { ruleName: 'backdrop', className: '.spectra-dialog__backdrop', description: 'Dark blurred overlay behind modal (rgba(0,0,0,0.6)).' },
      { ruleName: 'container', className: '.spectra-dialog__container', description: 'Centered surface modal card with trap-focus.' },
    ],
    cssVariables: [
      { variable: '--spectra-dialog-bg', defaultToken: 'var(--color-surface)', description: 'Modal card surface background.' },
      { variable: '--spectra-dialog-radius', defaultToken: '16px', description: 'Border radius of modal window.' },
    ],
    nativeProps: [
      { name: 'visible', type: 'boolean', defaultValue: 'false', description: 'Native modal visibility state.' },
      { name: 'onRequestClose', type: '() => void', defaultValue: 'undefined', description: 'Native back-button handler on Android.' },
    ],
  },

  tooltip: {
    componentName: 'Tooltip',
    exportName: 'Tooltip',
    importStatement: "import { Tooltip } from '@spectra/react';",
    subpathImport: "import Tooltip from '@spectra/react/Tooltip';",
    nativeImport: "import { Tooltip } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'content', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Text or node to render inside floating tooltip bubble.' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: 'Preferred compass positioning relative to trigger.' },
      { name: 'delay', type: 'number', defaultValue: '200', description: 'Hover delay in milliseconds before showing tooltip.' },
      { name: 'children', type: 'React.ReactElement', defaultValue: 'undefined', required: true, description: 'Single anchor child element that triggers tooltip on hover/focus.' },
    ],
    cssClasses: [
      { ruleName: 'trigger', className: '.spectra-tooltip__trigger', description: 'Anchor element wrapper.' },
      { ruleName: 'content', className: '.spectra-tooltip__content', description: 'Dark elevated floating bubble (role="tooltip").' },
    ],
    cssVariables: [
      { variable: '--spectra-tooltip-bg', defaultToken: '#0F172A', description: 'Dark high-contrast background.' },
      { variable: '--spectra-tooltip-color', defaultToken: '#F8FAFC', description: 'Text foreground color.' },
      { variable: '--spectra-tooltip-radius', defaultToken: 'var(--radius-component-sm)', description: 'Corner radius (4px).' },
    ],
    nativeProps: [
      { name: 'content', type: 'string', defaultValue: 'undefined', description: 'Native tooltip string.' },
      { name: 'placement', type: "'top' | 'bottom'", defaultValue: "'top'", description: 'Native positioning.' },
    ],
  },

  list: {
    componentName: 'List',
    exportName: 'List',
    importStatement: "import { List, ListItem, ListItemIcon, ListItemText } from '@spectra/react';",
    subpathImport: "import List from '@spectra/react/List';",
    nativeImport: "import { FlatList } from 'react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'divided', type: 'boolean', defaultValue: 'true', description: 'Renders 1px hairline divider between items.' },
      { name: 'interactive', type: 'boolean', defaultValue: 'false', description: 'Applies hover highlight and pointer cursor to list rows.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'ListItem nodes to render.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-list', description: 'Vertical container for list items (role="list").' },
      { ruleName: 'item', className: '.spectra-list-item', description: 'Single list item row (role="listitem").' },
      { ruleName: 'icon', className: '.spectra-list-item__icon', description: 'Leading icon container.' },
      { ruleName: 'text', className: '.spectra-list-item__text', description: 'Primary and secondary text block.' },
    ],
    cssVariables: [
      { variable: '--spectra-list-hover', defaultToken: 'var(--color-surface-raised)', description: 'Row background on hover.' },
      { variable: '--spectra-list-divider', defaultToken: 'var(--color-border-subtle)', description: 'Divider line color.' },
    ],
    nativeProps: [
      { name: 'data', type: 'any[]', defaultValue: '[]', description: 'Native data array for FlatList optimization.' },
      { name: 'renderItem', type: '({ item }) => ReactElement', defaultValue: 'undefined', description: 'Item renderer callback.' },
    ],
  },

  alert: {
    componentName: 'Alert',
    exportName: 'Alert',
    importStatement: "import { Alert } from '@spectra/react';",
    subpathImport: "import Alert from '@spectra/react/Alert';",
    nativeImport: "import { Alert } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", defaultValue: "'info'", description: 'Semantic status severity variant.' },
      { name: 'title', type: 'string', defaultValue: 'undefined', description: 'Optional bold headline displayed above body text.' },
      { name: 'dismissible', type: 'boolean', defaultValue: 'false', description: 'When true, renders an accessible close button.' },
      { name: 'onDismiss', type: '() => void', defaultValue: 'undefined', description: 'Callback fired when user clicks dismiss button.' },
      { name: 'icon', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Custom icon overriding default variant icon.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Alert body text or child components.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-alert', description: 'Root container for the alert banner.' },
      { ruleName: 'info', className: '.spectra-alert--info', description: "Applied when variant='info'." },
      { ruleName: 'success', className: '.spectra-alert--success', description: "Applied when variant='success'." },
      { ruleName: 'warning', className: '.spectra-alert--warning', description: "Applied when variant='warning'." },
      { ruleName: 'danger', className: '.spectra-alert--danger', description: "Applied when variant='danger'." },
      { ruleName: 'icon', className: '.spectra-alert__icon', description: 'Container holding status severity vector icon.' },
      { ruleName: 'content', className: '.spectra-alert__content', description: 'Text wrapper containing title and message body.' },
      { ruleName: 'title', className: '.spectra-alert__title', description: 'Bold headline element.' },
      { ruleName: 'close', className: '.spectra-alert__close', description: 'Accessible dismiss button.' },
    ],
    cssVariables: [
      { variable: '--spectra-alert-bg', defaultToken: 'var(--color-surface-raised)', description: 'Container background tint.' },
      { variable: '--spectra-alert-border', defaultToken: 'var(--color-border-default)', description: 'Outline border accent color.' },
      { variable: '--spectra-alert-text', defaultToken: 'var(--color-text-primary)', description: 'Body text color.' },
    ],
    nativeProps: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", defaultValue: "'info'", description: 'Native variant styling.' },
      { name: 'title', type: 'string', defaultValue: 'undefined', description: 'Native title text.' },
      { name: 'onDismiss', type: '() => void', defaultValue: 'undefined', description: 'Native dismiss touch callback.' },
    ],
  },

  spinner: {
    componentName: 'Spinner',
    exportName: 'Spinner',
    importStatement: "import { Spinner } from '@spectra/react';",
    subpathImport: "import Spinner from '@spectra/react/Spinner';",
    nativeImport: "import { Spinner } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Dimensions: sm (16px), md (24px), lg (36px).' },
      { name: 'color', type: 'string', defaultValue: "'primary'", description: 'Stroke color or CSS token.' },
      { name: 'label', type: 'string', defaultValue: "'Loading...'", description: 'Accessible screen reader status message.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-spinner', description: 'Circular animated SVG element.' },
      { ruleName: 'sizeSm', className: '.spectra-spinner--sm', description: "Applied when size='sm'." },
      { ruleName: 'sizeMd', className: '.spectra-spinner--md', description: "Applied when size='md'." },
      { ruleName: 'sizeLg', className: '.spectra-spinner--lg', description: "Applied when size='lg'." },
      { ruleName: 'circle', className: '.spectra-spinner__circle', description: 'Rotating circular arc stroke.' },
    ],
    cssVariables: [
      { variable: '--spectra-spinner-color', defaultToken: 'var(--color-action-primary)', description: 'Rotating stroke accent color.' },
    ],
    nativeProps: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Native dimensions.' },
      { name: 'color', type: 'string', defaultValue: "'#007FFF'", description: 'Native indicator tint.' },
    ],
  },

  skeleton: {
    componentName: 'Skeleton',
    exportName: 'Skeleton',
    importStatement: "import { Skeleton } from '@spectra/react';",
    subpathImport: "import Skeleton from '@spectra/react/Skeleton';",
    nativeImport: "import { Skeleton } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'variant', type: "'text' | 'circular' | 'rectangular' | 'rounded'", defaultValue: "'text'", description: 'Geometric shape of placeholder.' },
      { name: 'width', type: 'string | number', defaultValue: "'100%'", description: 'Width dimension (px or CSS units).' },
      { name: 'height', type: 'string | number', defaultValue: 'undefined', description: 'Height dimension (defaults to 1em for text).' },
      { name: 'animation', type: "'wave' | 'pulse' | 'none'", defaultValue: "'wave'", description: 'Visual loading animation effect.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-skeleton', description: 'Base placeholder element.' },
      { ruleName: 'text', className: '.spectra-skeleton--text', description: "Applied when variant='text'." },
      { ruleName: 'circular', className: '.spectra-skeleton--circular', description: "Applied when variant='circular' (50% radius)." },
      { ruleName: 'rectangular', className: '.spectra-skeleton--rectangular', description: "Applied when variant='rectangular'." },
      { ruleName: 'rounded', className: '.spectra-skeleton--rounded', description: "Applied when variant='rounded' (8px radius)." },
      { ruleName: 'wave', className: '.spectra-skeleton--wave', description: 'Continuous shimmer gradient wave.' },
      { ruleName: 'pulse', className: '.spectra-skeleton--pulse', description: 'Opacity pulsing animation.' },
    ],
    cssVariables: [
      { variable: '--spectra-skeleton-bg', defaultToken: 'var(--color-surface-raised)', description: 'Placeholder background base.' },
      { variable: '--spectra-skeleton-shimmer', defaultToken: 'rgba(255, 255, 255, 0.15)', description: 'Shimmer gradient peak.' },
    ],
    nativeProps: [
      { name: 'variant', type: "'text' | 'circular' | 'rectangular' | 'rounded'", defaultValue: "'text'", description: 'Native placeholder geometry.' },
      { name: 'animation', type: "'wave' | 'pulse' | 'none'", defaultValue: "'wave'", description: 'Native Animated opacity loop.' },
    ],
  },

  divider: {
    componentName: 'Divider',
    exportName: 'Divider',
    importStatement: "import { Divider } from '@spectra/react';",
    subpathImport: "import Divider from '@spectra/react/Divider';",
    nativeImport: "import { Divider } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Separation line orientation.' },
      { name: 'variant', type: "'solid' | 'dashed' | 'dotted'", defaultValue: "'solid'", description: 'Stroke style pattern.' },
      { name: 'spacing', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Margin spacing around divider.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Optional text badge inset within divider.' },
      { name: 'labelPosition', type: "'center' | 'left' | 'right'", defaultValue: "'center'", description: 'Position of label along line.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-divider', description: 'Semantic separator container.' },
      { ruleName: 'horizontal', className: '.spectra-divider--horizontal', description: 'Horizontal layout (full width).' },
      { ruleName: 'vertical', className: '.spectra-divider--vertical', description: 'Vertical layout (full height).' },
      { ruleName: 'dashed', className: '.spectra-divider--dashed', description: 'Dashed border styling.' },
      { ruleName: 'dotted', className: '.spectra-divider--dotted', description: 'Dotted border styling.' },
      { ruleName: 'label', className: '.spectra-divider__label', description: 'Inset label text pill.' },
    ],
    cssVariables: [
      { variable: '--spectra-divider-color', defaultToken: 'var(--color-border-subtle)', description: 'Divider stroke color.' },
    ],
    nativeProps: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Native separator orientation.' },
      { name: 'spacing', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Native margin spacing.' },
    ],
  },

  chip: {
    componentName: 'Chip',
    exportName: 'Chip',
    importStatement: "import { Chip } from '@spectra/react';",
    subpathImport: "import Chip from '@spectra/react/Chip';",
    nativeImport: "import { Chip } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'label', type: 'string', defaultValue: "''", required: true, description: 'Text label displayed inside chip.' },
      { name: 'variant', type: "'filled' | 'outlined'", defaultValue: "'filled'", description: 'Surface visual style.' },
      { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: 'Size dimensions (height: 24px vs 32px).' },
      { name: 'selected', type: 'boolean', defaultValue: 'false', description: 'Whether chip is active in filter selection.' },
      { name: 'onDelete', type: '() => void', defaultValue: 'undefined', description: 'Enables dismiss cross button.' },
      { name: 'onClick', type: '() => void', defaultValue: 'undefined', description: 'Click interaction callback.' },
      { name: 'icon', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Leading icon.' },
      { name: 'avatar', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Leading circular avatar image or initials.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables user interactions.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-chip', description: 'Interactive pill container.' },
      { ruleName: 'filled', className: '.spectra-chip--filled', description: "Applied when variant='filled'." },
      { ruleName: 'outlined', className: '.spectra-chip--outlined', description: "Applied when variant='outlined'." },
      { ruleName: 'selected', className: '.spectra-chip--selected', description: 'Applied when selected=true.' },
      { ruleName: 'sizeSm', className: '.spectra-chip--sm', description: "Applied when size='sm' (24px height)." },
      { ruleName: 'sizeMd', className: '.spectra-chip--md', description: "Applied when size='md' (32px height)." },
      { ruleName: 'icon', className: '.spectra-chip__icon', description: 'Leading icon container.' },
      { ruleName: 'delete', className: '.spectra-chip__delete', description: 'Dismiss cross button.' },
    ],
    cssVariables: [
      { variable: '--spectra-chip-bg', defaultToken: 'var(--color-surface-raised)', description: 'Chip background surface.' },
      { variable: '--spectra-chip-border', defaultToken: 'var(--color-border-default)', description: 'Outlined border color.' },
      { variable: '--spectra-chip-text', defaultToken: 'var(--color-text-primary)', description: 'Chip label color.' },
    ],
    nativeProps: [
      { name: 'label', type: 'string', defaultValue: "''", description: 'Native chip text.' },
      { name: 'selected', type: 'boolean', defaultValue: 'false', description: 'Native selection highlight.' },
      { name: 'onDelete', type: '() => void', defaultValue: 'undefined', description: 'Native delete callback.' },
    ],
  },

  breadcrumbs: {
    componentName: 'Breadcrumbs',
    exportName: 'Breadcrumbs',
    importStatement: "import { Breadcrumbs } from '@spectra/react';",
    subpathImport: "import Breadcrumbs from '@spectra/react/Breadcrumbs';",
    nativeImport: "import { Breadcrumbs } from '@spectra/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'items', type: 'BreadcrumbItem[]', defaultValue: '[]', required: true, description: 'Array of items with label, href, onClick, isCurrent.' },
      { name: 'separator', type: 'React.ReactNode', defaultValue: "'/'", description: 'Custom separator node between items.' },
      { name: 'maxItems', type: 'number', defaultValue: '8', description: 'Maximum visible crumbs before ellipsis collapse.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-breadcrumbs', description: 'Semantic <nav> container.' },
      { ruleName: 'list', className: '.spectra-breadcrumbs__list', description: 'Ordered list (<ol>) wrapper.' },
      { ruleName: 'item', className: '.spectra-breadcrumbs__item', description: 'Individual list item (<li>).' },
      { ruleName: 'link', className: '.spectra-breadcrumbs__link', description: 'Clickable ancestor anchor.' },
      { ruleName: 'current', className: '.spectra-breadcrumbs__current', description: 'Current location (aria-current="page").' },
      { ruleName: 'separator', className: '.spectra-breadcrumbs__separator', description: 'Aria-hidden separator delimiter.' },
    ],
    cssVariables: [
      { variable: '--spectra-breadcrumb-color', defaultToken: 'var(--color-text-secondary)', description: 'Ancestor link color.' },
      { variable: '--spectra-breadcrumb-active-color', defaultToken: 'var(--color-action-primary)', description: 'Current page text color.' },
    ],
    nativeProps: [
      { name: 'items', type: 'NativeBreadcrumbItem[]', defaultValue: '[]', description: 'Array of native breadcrumb items.' },
      { name: 'separator', type: 'string', defaultValue: "'/'", description: 'Native separator delimiter.' },
    ],
  },
};

export const HOOK_API_DATA: Record<string, HookApiReference> = {
  'use-disclosure': {
    hookName: 'useDisclosure',
    importStatement: "import { useDisclosure } from '@spectra/primitives';",
    signature: 'function useDisclosure(options?: UseDisclosureOptions): UseDisclosureReturn',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [
      { name: 'defaultIsOpen', type: 'boolean', defaultValue: 'false', description: 'Initial open state for uncontrolled disclosure.' },
      { name: 'isOpen', type: 'boolean', defaultValue: 'undefined', description: 'Controlled open state.' },
      { name: 'onOpen', type: '() => void', defaultValue: 'undefined', description: 'Callback fired when disclosure opens.' },
      { name: 'onClose', type: '() => void', defaultValue: 'undefined', description: 'Callback fired when disclosure closes.' },
      { name: 'id', type: 'string', defaultValue: 'undefined', description: 'Stable ID for ARIA controls linking.' },
    ],
    returnValues: [
      { name: 'isOpen', type: 'boolean', description: 'Current boolean visibility state.' },
      { name: 'onOpen', type: '() => void', description: 'Function to open the disclosure.' },
      { name: 'onClose', type: '() => void', description: 'Function to close the disclosure.' },
      { name: 'onToggle', type: '() => void', description: 'Function to toggle between open and closed.' },
      { name: 'getButtonProps', type: '() => Record<string, any>', description: 'Returns accessible button props (aria-expanded, aria-controls).' },
      { name: 'getDisclosureProps', type: '() => Record<string, any>', description: 'Returns accessible panel props (hidden, id).' },
    ],
    ariaAttributes: [
      { attr: 'aria-expanded', description: 'Set to "true" on trigger when open, "false" when closed.' },
      { attr: 'aria-controls', description: 'Links trigger to disclosure target element by unique ID.' },
    ],
    exampleUsage: `import { useDisclosure } from '@spectra/primitives';

export function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Open Drawer</button>
      {isOpen && <div className="drawer"><button onClick={onClose}>Close</button></div>}
    </>
  );
}`,
  },

  'use-controllable-state': {
    hookName: 'useControllableState',
    importStatement: "import { useControllableState } from '@spectra/primitives';",
    signature: 'function useControllableState<T>(props: UseControllableStateProps<T>): [T, (next: T) => void]',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [
      { name: 'value', type: 'T | undefined', defaultValue: 'undefined', description: 'Controlled value passed from component parent props.' },
      { name: 'defaultValue', type: 'T', defaultValue: 'undefined', required: true, description: 'Default fallback value when uncontrolled.' },
      { name: 'onChange', type: '(value: T) => void', defaultValue: 'undefined', description: 'Callback fired whenever value changes in either mode.' },
    ],
    returnValues: [
      { name: 'state', type: 'T', description: 'Resolved current state value (controlled or internal).' },
      { name: 'setState', type: '(next: T | ((prev: T) => T)) => void', description: 'Dispatcher to update state and trigger onChange.' },
    ],
    exampleUsage: `import { useControllableState } from '@spectra/primitives';

export function Rating({ value: valueProp, defaultValue = 0, onChange }: RatingProps) {
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
    onChange,
  });

  return <StarRating value={value} onSelect={setValue} />;
}`,
  },

  'use-outside-click': {
    hookName: 'useOutsideClick',
    importStatement: "import { useOutsideClick } from '@spectra/primitives';",
    signature: 'function useOutsideClick(ref: RefObject<HTMLElement>, handler: (event: MouseEvent) => void, enabled?: boolean): void',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [
      { name: 'ref', type: 'React.RefObject<HTMLElement>', defaultValue: 'undefined', required: true, description: 'Target DOM element ref to detect clicks outside of.' },
      { name: 'handler', type: '(event: MouseEvent | TouchEvent) => void', defaultValue: 'undefined', required: true, description: 'Callback fired when pointer clicks outside target.' },
      { name: 'enabled', type: 'boolean', defaultValue: 'true', description: 'Conditionally attach/detach global document listeners.' },
    ],
    returnValues: [],
    exampleUsage: `import { useOutsideClick } from '@spectra/primitives';

export function DropdownMenu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, onClose, isOpen);

  return isOpen ? <div ref={menuRef}>Menu items</div> : null;
}`,
  },

  'use-id': {
    hookName: 'useId',
    importStatement: "import { useId } from '@spectra/primitives';",
    signature: 'function useId(prefix?: string): string',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [
      { name: 'prefix', type: 'string', defaultValue: "'spectra'", description: 'Custom prefix string prepended to generated unique identifier.' },
    ],
    returnValues: [
      { name: 'id', type: 'string', description: 'Unique, SSR-safe DOM ID (e.g. "spectra-field-1").' },
    ],
    ariaAttributes: [
      { attr: 'id', description: 'Applied to input or dialog element.' },
      { attr: 'htmlFor', description: 'Applied to label to associate with input.' },
      { attr: 'aria-describedby', description: 'Links input to helper text or error message.' },
    ],
    exampleUsage: `import { useId } from '@spectra/primitives';

export function FormField({ label, error }: Props) {
  const id = useId('input');
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-describedby={error ? \`\${id}-err\` : undefined} />
      {error && <span id={\`\${id}-err\`}>{error}</span>}
    </div>
  );
}`,
  },

  'use-color-scheme': {
    hookName: 'useColorScheme',
    importStatement: "import { useColorScheme } from '@spectra/primitives';",
    signature: 'function useColorScheme(): UseColorSchemeReturn',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'colorScheme', type: "'light' | 'dark' | 'system'", description: 'Active color scheme preference setting.' },
      { name: 'setColorScheme', type: '(scheme: "light" | "dark" | "system") => void', description: 'Function to toggle or persist color mode.' },
      { name: 'isDark', type: 'boolean', description: 'Resolved boolean indicating whether dark theme tokens are currently active.' },
    ],
    exampleUsage: `import { useColorScheme } from '@spectra/primitives';

export function ThemeToggle() {
  const { colorScheme, setColorScheme, isDark } = useColorScheme();
  return (
    <button onClick={() => setColorScheme(isDark ? 'light' : 'dark')}>
      Current mode: {colorScheme}
    </button>
  );
}`,
  },

  'use-media-query': {
    hookName: 'useMediaQuery',
    importStatement: "import { useMediaQuery } from '@spectra/primitives';",
    signature: 'function useMediaQuery(query: string): boolean',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [
      { name: 'query', type: 'string', defaultValue: 'undefined', required: true, description: 'Valid CSS media query string (e.g. "(max-width: 768px)").' },
    ],
    returnValues: [
      { name: 'matches', type: 'boolean', description: 'True if current browser viewport matches query, false otherwise.' },
    ],
    exampleUsage: `import { useMediaQuery } from '@spectra/primitives';

export function ResponsiveNav() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return isMobile ? <MobileDrawer /> : <DesktopNavbar />;
}`,
  },

  'use-focus-ring': {
    hookName: 'useFocusRing',
    importStatement: "import { useFocusRing } from '@spectra/primitives';",
    signature: 'function useFocusRing(): UseFocusRingReturn',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'isFocused', type: 'boolean', description: 'True when target element has focus (mouse or keyboard).' },
      { name: 'isFocusVisible', type: 'boolean', description: 'True only when target element received focus via keyboard navigation.' },
      { name: 'focusProps', type: 'Record<string, any>', description: 'Event handlers (onFocus, onBlur, onKeyDown) to bind to target.' },
    ],
    ariaAttributes: [
      { attr: ':focus-visible', description: 'Ensures compliance with WCAG 2.4.7 Focus Visible without distracting mouse click outlines.' },
    ],
    exampleUsage: `import { useFocusRing } from '@spectra/primitives';

export function CustomAction() {
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <button
      {...focusProps}
      style={{
        outline: isFocusVisible ? '2px solid #007FFF' : 'none',
        outlineOffset: 2,
      }}
    >
      Focus Visible Action
    </button>
  );
}`,
  },

  'use-toast': {
    hookName: 'useToast',
    importStatement: "import { useToast } from '@spectra/primitives';",
    signature: 'function useToast(): UseToastReturn',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'toast', type: '(options: ToastOptions) => string', description: 'Triggers a floating notification message and returns unique toast ID.' },
      { name: 'dismiss', type: '(id: string) => void', description: 'Dismisses active toast before its timeout.' },
    ],
    exampleUsage: `import { useToast } from '@spectra/primitives';

export function ActionButton() {
  const { toast } = useToast();
  return (
    <button onClick={() => toast({ title: 'Saved', description: 'Changes deployed successfully', status: 'success' })}>
      Save
    </button>
  );
}`,
  },

  'use-reduced-motion': {
    hookName: 'useReducedMotion',
    importStatement: "import { useReducedMotion } from '@spectra/primitives';",
    signature: 'function useReducedMotion(): boolean',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'prefersReducedMotion', type: 'boolean', description: 'True if user has enabled "prefers-reduced-motion: reduce" in OS settings.' },
    ],
    exampleUsage: `import { useReducedMotion } from '@spectra/primitives';

export function AnimatedBox() {
  const prefersReduced = useReducedMotion();
  return <div style={{ transition: prefersReduced ? 'none' : 'transform 0.3s ease' }} />;
}`,
  },

  'use-rtl': {
    hookName: 'useRTL',
    importStatement: "import { useRTL } from '@spectra/primitives';",
    signature: 'function useRTL(): boolean',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'isRTL', type: 'boolean', description: 'True if document root direction is right-to-left (dir="rtl").' },
    ],
    exampleUsage: `import { useRTL } from '@spectra/primitives';

export function NavigationArrows() {
  const isRTL = useRTL();
  return <div>{isRTL ? '← Previous' : 'Next →'}</div>;
}`,
  },

  'use-debounce': {
    hookName: 'useDebounce',
    importStatement: "import { useDebounce } from '@spectra/primitives';",
    signature: 'function useDebounce<T>(value: T, delayMs: number): T',
    description: 'Debounces a rapidly changing value (such as search input keystrokes) to prevent redundant rendering and API requests.',
    parameters: [
      { name: 'value', type: 'T', defaultValue: 'undefined', required: true, description: 'Target value to debounce.' },
      { name: 'delayMs', type: 'number', defaultValue: '300', required: true, description: 'Delay duration in milliseconds.' },
    ],
    returnValues: [
      { name: 'debouncedValue', type: 'T', description: 'Value delayed until after delayMs has elapsed since last change.' },
    ],
    exampleUsage: `import { useDebounce } from '@spectra/primitives';

export function SearchFilter() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    fetchResults(debouncedQuery);
  }, [debouncedQuery]);
}`,
  },

  'use-throttle': {
    hookName: 'useThrottle',
    importStatement: "import { useThrottle } from '@spectra/primitives';",
    signature: 'function useThrottle<T>(value: T, intervalMs: number): T',
    description: 'Throttles frequent value updates (e.g. scroll positions, mouse movements) to guarantee at most one update per interval.',
    parameters: [
      { name: 'value', type: 'T', defaultValue: 'undefined', required: true, description: 'Source state value to throttle.' },
      { name: 'intervalMs', type: 'number', defaultValue: '200', required: true, description: 'Minimum interval duration in milliseconds.' },
    ],
    returnValues: [
      { name: 'throttledValue', type: 'T', description: 'Value updated at most once per intervalMs.' },
    ],
    exampleUsage: `import { useThrottle } from '@spectra/primitives';

export function ScrollMetrics() {
  const [scrollY, setScrollY] = useState(0);
  const throttledY = useThrottle(scrollY, 100);
  return <div>Scroll Position: {throttledY}px</div>;
}`,
  },

  'use-hover': {
    hookName: 'useHover',
    importStatement: "import { useHover } from '@spectra/primitives';",
    signature: 'function useHover<T extends HTMLElement>(): [RefObject<T>, boolean]',
    description: 'Tracks cursor hover state for any DOM element with automatic pointer event listeners.',
    parameters: [],
    returnValues: [
      { name: 'ref', type: 'RefObject<T>', description: 'Ref to assign to the target interactive DOM element.' },
      { name: 'isHovered', type: 'boolean', description: 'Boolean indicating whether pointer is hovering over element.' },
    ],
    exampleUsage: `import { useHover } from '@spectra/primitives';

export function CardPreview() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return <div ref={hoverRef}>{isHovered ? 'Hovered' : 'Normal'}</div>;
}`,
  },

  'use-platform': {
    hookName: 'usePlatform',
    importStatement: "import { usePlatform } from '@spectra/primitives';",
    signature: 'function usePlatform(): UsePlatformReturn',
    description: 'Detects and returns active client OS runtime (Web, iOS, Android, macOS, Windows) with platform capabilities.',
    parameters: [],
    returnValues: [
      { name: 'platform', type: "'web' | 'ios' | 'android' | 'macos' | 'windows'", description: 'Current target runtime platform identifier.' },
      { name: 'isNative', type: 'boolean', description: 'True when running on React Native iOS/Android runtime.' },
      { name: 'isApple', type: 'boolean', description: 'True for iOS and macOS client environments.' },
    ],
    exampleUsage: `import { usePlatform } from '@spectra/primitives';

export function PlatformBadge() {
  const { platform, isNative } = usePlatform();
  return <span>{isNative ? 'Native App' : 'Web Browser'} ({platform})</span>;
}`,
  },

  'use-breakpoint': {
    hookName: 'useBreakpoint',
    importStatement: "import { useBreakpoint } from '@spectra/primitives';",
    signature: 'function useBreakpoint(): "xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
    description: 'Returns active responsive viewport breakpoint token synchronized with Spectra UI grid tokens.',
    parameters: [],
    returnValues: [
      { name: 'breakpoint', type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', description: 'Current active responsive tier.' },
    ],
    exampleUsage: `import { useBreakpoint } from '@spectra/primitives';

export function ResponsiveLayout() {
  const bp = useBreakpoint();
  return <div>Active Screen Tier: {bp.toUpperCase()}</div>;
}`,
  },

  'use-event-listener': {
    hookName: 'useEventListener',
    importStatement: "import { useEventListener } from '@spectra/primitives';",
    signature: 'function useEventListener<K extends keyof WindowEventMap>(eventName: K, handler: (e: WindowEventMap[K]) => void, target?: EventTarget): void',
    description: 'Declaratively binds event listeners to window, document, or custom DOM element with automatic lifecycle cleanup.',
    parameters: [
      { name: 'eventName', type: 'string', defaultValue: 'undefined', required: true, description: 'Event identifier (e.g. "keydown", "resize", "scroll").' },
      { name: 'handler', type: '(e: Event) => void', defaultValue: 'undefined', required: true, description: 'Event handler callback.' },
      { name: 'target', type: 'EventTarget', defaultValue: 'window', description: 'Event target object to bind listener to.' },
    ],
    returnValues: [],
    exampleUsage: `import { useEventListener } from '@spectra/primitives';

export function ShortcutHandler() {
  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}`,
  },

  'use-intersection-observer': {
    hookName: 'useIntersectionObserver',
    importStatement: "import { useIntersectionObserver } from '@spectra/primitives';",
    signature: 'function useIntersectionObserver(options?: IntersectionObserverInit): [RefObject<Element>, IntersectionObserverEntry | null]',
    description: 'Tracks DOM element viewport visibility for lazy loading images, infinite scroll, and scroll-triggered animations.',
    parameters: [
      { name: 'options', type: 'IntersectionObserverInit', defaultValue: '{}', description: 'Threshold, root, and rootMargin options.' },
    ],
    returnValues: [
      { name: 'ref', type: 'RefObject<Element>', description: 'Ref to assign to observed DOM element.' },
      { name: 'entry', type: 'IntersectionObserverEntry | null', description: 'Latest intersection observer state record.' },
    ],
    exampleUsage: `import { useIntersectionObserver } from '@spectra/primitives';

export function LazyImage({ src }: { src: string }) {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  return <div ref={ref}>{isVisible && <img src={src} />}</div>;
}`,
  },

  'use-element-size': {
    hookName: 'useElementSize',
    importStatement: "import { useElementSize } from '@spectra/primitives';",
    signature: 'function useElementSize<T extends HTMLElement>(): [RefObject<T>, { width: number; height: number }]',
    description: 'Measures live bounding dimensions (width and height) of a DOM element using ResizeObserver.',
    parameters: [],
    returnValues: [
      { name: 'ref', type: 'RefObject<T>', description: 'Ref to attach to the measured target DOM element.' },
      { name: 'size', type: '{ width: number; height: number }', description: 'Live dimensions object updated on container resize.' },
    ],
    exampleUsage: `import { useElementSize } from '@spectra/primitives';

export function ResponsiveChart() {
  const [ref, { width, height }] = useElementSize<HTMLDivElement>();
  return <div ref={ref}><Canvas width={width} height={height} /></div>;
}`,
  },

  'use-window-size': {
    hookName: 'useWindowSize',
    importStatement: "import { useWindowSize } from '@spectra/primitives';",
    signature: 'function useWindowSize(): { width: number; height: number }',
    description: 'Monitors window viewport dimensions with debounced resize handlers and SSR hydration safety.',
    parameters: [],
    returnValues: [
      { name: 'width', type: 'number', description: 'Current viewport inner width in pixels.' },
      { name: 'height', type: 'number', description: 'Current viewport inner height in pixels.' },
    ],
    exampleUsage: `import { useWindowSize } from '@spectra/primitives';

export function ViewportInfo() {
  const { width, height } = useWindowSize();
  return <div>Viewport: {width} x {height}px</div>;
}`,
  },

  'use-scroll-lock': {
    hookName: 'useScrollLock',
    importStatement: "import { useScrollLock } from '@spectra/primitives';",
    signature: 'function useScrollLock(lock?: boolean): void',
    description: 'Locks document body scrolling when modal dialogs, drawers, or mobile menus are opened to prevent background bleed.',
    parameters: [
      { name: 'lock', type: 'boolean', defaultValue: 'true', description: 'Whether document scrolling should be locked.' },
    ],
    returnValues: [],
    exampleUsage: `import { useScrollLock } from '@spectra/primitives';

export function Modal({ isOpen }: { isOpen: boolean }) {
  useScrollLock(isOpen);
  return isOpen ? <div className="modal">Modal Content</div> : null;
}`,
  },

  'use-clipboard': {
    hookName: 'useClipboard',
    importStatement: "import { useClipboard } from '@spectra/primitives';",
    signature: 'function useClipboard(timeoutMs?: number): UseClipboardReturn',
    description: 'Copies text to system clipboard with automatic success state reset and permission fallbacks.',
    parameters: [
      { name: 'timeoutMs', type: 'number', defaultValue: '2000', description: 'Duration in milliseconds to preserve copied state.' },
    ],
    returnValues: [
      { name: 'copy', type: '(text: string) => Promise<boolean>', description: 'Copies string to clipboard.' },
      { name: 'hasCopied', type: 'boolean', description: 'True for timeoutMs after successful copy.' },
    ],
    exampleUsage: `import { useClipboard } from '@spectra/primitives';

export function CodeCopyButton({ code }: { code: string }) {
  const { copy, hasCopied } = useClipboard();
  return <button onClick={() => copy(code)}>{hasCopied ? 'Copied' : 'Copy'}</button>;
}`,
  },

  'use-local-storage': {
    hookName: 'useLocalStorage',
    importStatement: "import { useLocalStorage } from '@spectra/primitives';",
    signature: 'function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void]',
    description: 'Persists and synchronizes state values with browser localStorage and cross-tab storage events.',
    parameters: [
      { name: 'key', type: 'string', defaultValue: 'undefined', required: true, description: 'Unique storage key string.' },
      { name: 'initialValue', type: 'T', defaultValue: 'undefined', required: true, description: 'Default fallback value when key is unset.' },
    ],
    returnValues: [
      { name: 'value', type: 'T', description: 'Current stored or default value.' },
      { name: 'setValue', type: '(val: T) => void', description: 'State setter that writes to localStorage and updates state.' },
    ],
    exampleUsage: `import { useLocalStorage } from '@spectra/primitives';

export function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('app-theme', 'dark');
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Theme: {theme}</button>;
}`,
  },

  'use-previous': {
    hookName: 'usePrevious',
    importStatement: "import { usePrevious } from '@spectra/primitives';",
    signature: 'function usePrevious<T>(value: T): T | undefined',
    description: 'Stores and returns the value from the previous render cycle using a React ref.',
    parameters: [
      { name: 'value', type: 'T', defaultValue: 'undefined', required: true, description: 'Target state or prop value to track.' },
    ],
    returnValues: [
      { name: 'previousValue', type: 'T | undefined', description: 'The value before the most recent render.' },
    ],
    exampleUsage: `import { usePrevious } from '@spectra/primitives';

export function CounterDiff({ count }: { count: number }) {
  const prevCount = usePrevious(count);
  return <span>Delta: {count - (prevCount ?? 0)}</span>;
}`,
  },

  'use-async': {
    hookName: 'useAsync',
    importStatement: "import { useAsync } from '@spectra/primitives';",
    signature: 'function useAsync<T>(asyncFn: () => Promise<T>, immediate?: boolean): UseAsyncReturn<T>',
    description: 'Manages promise execution states (idle, pending, resolved, rejected) with loading flags and error capturing.',
    parameters: [
      { name: 'asyncFn', type: '() => Promise<T>', defaultValue: 'undefined', required: true, description: 'Asynchronous function to execute.' },
      { name: 'immediate', type: 'boolean', defaultValue: 'true', description: 'Whether to execute the promise immediately upon mount.' },
    ],
    returnValues: [
      { name: 'execute', type: '() => Promise<T>', description: 'Function to manually trigger execution.' },
      { name: 'status', type: "'idle' | 'pending' | 'success' | 'error'", description: 'Current promise lifecycle status.' },
      { name: 'value', type: 'T | null', description: 'Resolved result data.' },
      { name: 'error', type: 'Error | null', description: 'Caught error instance if rejected.' },
      { name: 'loading', type: 'boolean', description: 'True while promise is pending.' },
    ],
    exampleUsage: `import { useAsync } from '@spectra/primitives';

export function UserProfile() {
  const { loading, value, error } = useAsync(fetchUser);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>User: {value?.name}</div>;
}`,
  },

  'use-interval': {
    hookName: 'useInterval',
    importStatement: "import { useInterval } from '@spectra/primitives';",
    signature: 'function useInterval(callback: () => void, delayMs: number | null): void',
    description: 'Declarative setInterval hook with dynamic delay configuration and automatic cleanup.',
    parameters: [
      { name: 'callback', type: '() => void', defaultValue: 'undefined', required: true, description: 'Callback executed at each interval tick.' },
      { name: 'delayMs', type: 'number | null', defaultValue: 'undefined', required: true, description: 'Interval in ms, or null to pause.' },
    ],
    returnValues: [],
    exampleUsage: `import { useInterval } from '@spectra/primitives';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  useInterval(() => setSeconds(s => s + 1), 1000);
  return <div>Elapsed: {seconds}s</div>;
}`,
  },
};

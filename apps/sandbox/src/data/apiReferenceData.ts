export interface PropApiItem {
  name: string;
  type: string;
  defaultValue: string;
  required?: boolean;
  description: string;
}

export interface SubcomponentApiItem {
  name: string;
  description: string;
  props: PropApiItem[];
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
  subcomponents?: SubcomponentApiItem[];
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
    importStatement: "import { Button } from '@winplaybox/react';",
    subpathImport: "import Button from '@winplaybox/react/Button';",
    nativeImport: "import { Button } from '@winplaybox/react-native';",
    primitivesImport: "import { useButtonProps } from '@winplaybox/primitives';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'appearance', type: "'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent'", defaultValue: "'secondary'", description: 'Fluent 2 visual appearance hierarchy.' },
      { name: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'danger'", defaultValue: "'primary'", description: 'Visual appearance and semantic hierarchy of the button.' },
      { name: 'shape', type: "'rounded' | 'circular' | 'square'", defaultValue: "'rounded'", description: 'Corner silhouette: rounded (6px), circular (pill), or square (0px).' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large'", defaultValue: "'md'", description: 'Sizing scale: small (24px), medium (32px), large (40px).' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'If true, user interaction is prevented and disabled styling is applied.' },
      { name: 'disabledFocusable', type: 'boolean', defaultValue: 'false', description: 'Keeps button focusable for screen readers while suppressing action (WCAG 2.1 AA).' },
      { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'If true, renders an animated circular spinner and temporarily suppresses clicks.' },
      { name: 'icon', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Vector icon element positioned adjacent to the label.' },
      { name: 'iconPosition', type: "'left' | 'right'", defaultValue: "'left'", description: 'Determines whether the icon appears before or after the text label.' },
      { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'If true, the button stretches to 100% of its parent container.' },
      { name: 'onClick', type: '(event: React.MouseEvent<HTMLButtonElement>) => void', defaultValue: 'undefined', description: 'Callback fired when the button is clicked or activated via Space/Enter.' },
      { name: 'type', type: "'button' | 'submit' | 'reset'", defaultValue: "'button'", description: 'Native HTML button type attribute for form interactions.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Label text or child nodes to render inside the button.' },
    ],
    subcomponents: [
      {
        name: 'CompoundButton',
        description: 'Button that includes both primary label text and a secondary descriptive subtitle.',
        props: [
          { name: 'secondaryContent', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Descriptive subtitle rendered below main label.' },
          { name: 'icon', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Leading vector glyph.' },
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Primary action title text.' },
          { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents user interaction.' },
        ],
      },
      {
        name: 'SplitButton',
        description: 'Dual-action control with primary action button and secondary chevron dropdown trigger.',
        props: [
          { name: 'primaryAction', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Main click action button.' },
          { name: 'menuTrigger', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Chevron dropdown menu trigger.' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Unified size for both button segments.' },
        ],
      },
      {
        name: 'MenuButton',
        description: 'Button with integrated chevron indicator designed to trigger a Menu popup.',
        props: [
          { name: 'menu', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Menu list or popup to open.' },
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Button label.' },
        ],
      },
      {
        name: 'ToggleButton',
        description: 'Two-state button that can be either on (checked) or off (unchecked).',
        props: [
          { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Whether button is currently selected.' },
          { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Initial selection state in uncontrolled mode.' },
          { name: 'onChange', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Fired when selection toggles.' },
        ],
      },
      {
        name: 'ButtonGroup',
        description: 'Container grouping multiple related buttons with unified borders.',
        props: [
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Button elements to group.' },
          { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Layout direction.' },
        ],
      },
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

  'compound-button': {
    componentName: 'CompoundButton',
    exportName: 'CompoundButton',
    importStatement: "import { CompoundButton } from '@winplaybox/react';",
    subpathImport: "import CompoundButton from '@winplaybox/react/CompoundButton';",
    nativeImport: "import { Button } from '@winplaybox/react-native';",
    description: 'High-prominence action button pairing a headline with explanatory secondary text (Fluent 2 Web pattern).',
    props: [
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Primary action title/headline.' },
      { name: 'secondaryContent', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Fluent 2 secondary subtitle placed below primary label.' },
      { name: 'appearance', type: "'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent'", defaultValue: "'secondary'", description: 'Visual appearance hierarchy.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Sizing scale: small (24px), medium (32px), large (40px).' },
      { name: 'shape', type: "'rounded' | 'circular' | 'square'", defaultValue: "'rounded'", description: 'Corner geometry.' },
      { name: 'icon', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Leading or trailing vector icon.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables interaction.' },
      { name: 'disabledFocusable', type: 'boolean', defaultValue: 'false', description: 'Keeps button focusable for screen readers.' },
      { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'Shows loading spinner.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-compound-button', description: 'Root compound button element.' },
      { ruleName: 'title', className: '.spectra-compound-button__title', description: 'Primary headline text.' },
      { ruleName: 'subtitle', className: '.spectra-compound-button__subtitle', description: 'Secondary descriptive text.' },
    ],
    cssVariables: [
      { variable: '--spectra-button-bg', defaultToken: 'var(--color-surface-elevated)', description: 'Surface background.' },
    ],
    nativeProps: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Primary title.' },
      { name: 'subtitle', type: 'string', defaultValue: "''", description: 'Secondary subtitle.' },
      { name: 'onPress', type: '() => void', defaultValue: 'undefined', description: 'Press handler.' },
    ],
  },

  'menu-button': {
    componentName: 'MenuButton',
    exportName: 'MenuButton',
    importStatement: "import { MenuButton } from '@winplaybox/react';",
    subpathImport: "import MenuButton from '@winplaybox/react/MenuButton';",
    nativeImport: "import { Button } from '@winplaybox/react-native';",
    description: 'Action button paired with a dropdown chevron indicator that displays a contextual flyout menu (Fluent 2 Web pattern).',
    props: [
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Action label text.' },
      { name: 'menuItems', type: 'MenuButtonItem[]', defaultValue: '[]', description: 'Array of menu items with label, icon, and onClick.' },
      { name: 'appearance', type: "'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent'", defaultValue: "'secondary'", description: 'Fluent 2 appearance tier.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Density scale.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables interaction.' },
      { name: 'disabledFocusable', type: 'boolean', defaultValue: 'false', description: 'Keeps button in keyboard tab order while disabled.' },
      { name: 'menuIcon', type: 'React.ReactNode', defaultValue: '<ChevronDownIcon />', description: 'Custom trailing indicator.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-menu-button', description: 'Root menu button element.' },
      { ruleName: 'menu', className: '.spectra-menu-button__menu', description: 'Dropdown flyout container.' },
    ],
    cssVariables: [
      { variable: '--spectra-button-bg', defaultToken: 'var(--color-action-secondary)', description: 'Button background.' },
    ],
    nativeProps: [
      { name: 'menuItems', type: 'MenuButtonItem[]', defaultValue: '[]', description: 'Menu items.' },
      { name: 'onPress', type: '() => void', defaultValue: 'undefined', description: 'Press handler.' },
    ],
  },

  'split-button': {
    componentName: 'SplitButton',
    exportName: 'SplitButton',
    importStatement: "import { SplitButton } from '@winplaybox/react';",
    subpathImport: "import SplitButton from '@winplaybox/react/SplitButton';",
    nativeImport: "import { Button } from '@winplaybox/react-native';",
    description: 'Composite button pairing a primary action with a flyout options menu.',
    props: [
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Primary action label.' },
      { name: 'options', type: 'SplitButtonOption[]', defaultValue: '[]', required: true, description: 'Dropdown options array.' },
      { name: 'appearance', type: "'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent'", defaultValue: "'primary'", description: 'Appearance tier.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Density scale.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables button interaction.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-split-button', description: 'Segmented root container.' },
    ],
    cssVariables: [
      { variable: '--spectra-button-bg', defaultToken: 'var(--color-action-primary)', description: 'Primary action background.' },
    ],
    nativeProps: [
      { name: 'onPress', type: '() => void', defaultValue: 'undefined', description: 'Press handler.' },
    ],
  },

  'toggle-button': {
    componentName: 'ToggleButton',
    exportName: 'ToggleButton',
    importStatement: "import { ToggleButton } from '@winplaybox/react';",
    subpathImport: "import ToggleButton from '@winplaybox/react/ToggleButton';",
    nativeImport: "import { Button } from '@winplaybox/react-native';",
    description: 'Two-state action button with aria-pressed semantics conforming to Fluent 2 Web specifications.',
    props: [
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Button label text.' },
      { name: 'checked', type: 'boolean', defaultValue: 'undefined', description: 'Controlled pressed state.' },
      { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Default uncontrolled pressed state.' },
      { name: 'onToggle', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Callback fired on state toggle.' },
      { name: 'appearance', type: "'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent'", defaultValue: "'secondary'", description: 'Appearance tier.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Density scale.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables button.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-toggle-button', description: 'Root toggle button element.' },
      { ruleName: 'checked', className: '.toggleChecked', description: 'Styles applied when aria-pressed="true".' },
    ],
    cssVariables: [
      { variable: '--spectra-button-bg', defaultToken: 'var(--color-action-secondary)', description: 'Background.' },
    ],
    nativeProps: [
      { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Native pressed state.' },
      { name: 'onToggle', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Toggle callback.' },
    ],
  },

  'text-input': {
    componentName: 'TextInput',
    exportName: 'TextInput',
    importStatement: "import { TextInput } from '@winplaybox/react';",
    subpathImport: "import TextInput from '@winplaybox/react/TextInput';",
    nativeImport: "import { TextInput } from '@winplaybox/react-native';",
    primitivesImport: "import { useId } from '@winplaybox/primitives';",
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
    importStatement: "import { Select } from '@winplaybox/react';",
    subpathImport: "import Select from '@winplaybox/react/Select';",
    nativeImport: "import { Select } from '@winplaybox/react-native';",
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
    importStatement: "import { Checkbox } from '@winplaybox/react';",
    subpathImport: "import Checkbox from '@winplaybox/react/Checkbox';",
    nativeImport: "import { Checkbox } from '@winplaybox/react-native';",
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
    importStatement: "import { Radio, RadioGroup } from '@winplaybox/react';",
    subpathImport: "import Radio from '@winplaybox/react/Radio';",
    nativeImport: "import { Radio } from '@winplaybox/react-native';",
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
    importStatement: "import { Switch } from '@winplaybox/react';",
    subpathImport: "import Switch from '@winplaybox/react/Switch';",
    nativeImport: "import { Switch } from '@winplaybox/react-native';",
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
    importStatement: "import { Avatar, AvatarGroup } from '@winplaybox/react';",
    subpathImport: "import Avatar from '@winplaybox/react/Avatar';",
    nativeImport: "import { Avatar } from '@winplaybox/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'name', type: 'string', defaultValue: 'undefined', description: 'Full name for initials and deterministic color hashing.' },
      { name: 'src', type: 'string', defaultValue: 'undefined', description: 'Image URL with automatic error fallback.' },
      { name: 'size', type: '16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128 | "xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '40', description: 'Discrete sizing scale in pixels or named aliases.' },
      { name: 'shape', type: "'circular' | 'circle' | 'square'", defaultValue: "'circular'", description: 'Visual shape silhouette.' },
      { name: 'color', type: "'neutral' | 'brand' | 'colorful' | AvatarNamedColor", defaultValue: "'neutral'", description: 'Backdrop color theme.' },
      { name: 'status', type: "'available' | 'busy' | 'away' | 'dnd' | 'out-of-office' | 'offline'", defaultValue: 'undefined', description: 'Real-time presence badge.' },
      { name: 'outOfOffice', type: 'boolean', defaultValue: 'false', description: 'Presence halo modifier for out-of-office state.' },
      { name: 'active', type: "'active' | 'inactive' | 'unset'", defaultValue: "'unset'", description: 'Active speaking halo indicator.' },
      { name: 'activeAppearance', type: "'ring' | 'ring-shadow' | 'shadow'", defaultValue: "'ring'", description: 'Visual styling of active halo.' },
      { name: 'initials', type: 'string', defaultValue: 'undefined', description: 'Explicit initials string override.' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Custom fallback vector icon.' },
      { name: 'badge', type: 'ReactNode', defaultValue: 'undefined', description: 'Custom badge slot.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-avatar', description: 'Outer avatar container element.' },
      { ruleName: 'inner', className: '.spectra-avatar__inner', description: 'Inner backdrop and clipping mask.' },
      { ruleName: 'badge', className: '.spectra-avatar__badge', description: 'Presence indicator dot or badge container.' },
    ],
    cssVariables: [
      { variable: '--spectra-avatar-size', defaultToken: '40px', description: 'Outer dimension of avatar.' },
      { variable: '--spectra-avatar-ring', defaultToken: 'var(--color-action-primary)', description: 'Active halo ring color.' },
    ],
    nativeProps: [
      { name: 'name', type: 'string', defaultValue: 'undefined', description: 'User name for initials.' },
      { name: 'src', type: 'string', defaultValue: 'undefined', description: 'Image URI source.' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", defaultValue: "'md'", description: 'Native sizing scale.' },
    ],
  },

  badge: {
    componentName: 'Badge',
    exportName: 'Badge',
    importStatement: "import { Badge, CounterBadge, PresenceBadge } from '@winplaybox/react';",
    subpathImport: "import Badge from '@winplaybox/react/Badge';",
    nativeImport: "import { Badge } from '@winplaybox/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'appearance', type: "'filled' | 'ghost' | 'outline' | 'tint'", defaultValue: "'filled'", description: 'Visual styling appearance.' },
      { name: 'color', type: "'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning'", defaultValue: "'brand'", description: 'Semantic palette color.' },
      { name: 'shape', type: "'rounded' | 'circular' | 'square'", defaultValue: "'rounded'", description: 'Silhouette shape geometry.' },
      { name: 'size', type: "'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'", defaultValue: "'medium'", description: 'Discrete sizing scale from 6px dot to 32px badge.' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Authentic vector icon slot.' },
      { name: 'iconPosition', type: "'before' | 'after'", defaultValue: "'before'", description: 'Position of vector icon relative to children.' },
      { name: 'dot', type: 'boolean', defaultValue: 'false', description: 'Renders standalone indicator dot or dot prefix.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Badge text label or numeric count.' },
      { name: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'", defaultValue: 'undefined', description: 'Legacy variant alias for backwards compatibility.' },
    ],
    subcomponents: [
      {
        name: 'CounterBadge',
        description: 'Badge optimized for displaying numeric notification counts with overflow caps (e.g. 99+).',
        props: [
          { name: 'count', type: 'number', defaultValue: '0', required: true, description: 'Numeric value to render.' },
          { name: 'overflowCount', type: 'number', defaultValue: '99', description: 'Maximum count before displaying overflow suffix like 99+.' },
          { name: 'dot', type: 'boolean', defaultValue: 'false', description: 'Render as dot indicator when count > 0.' },
          { name: 'showZero', type: 'boolean', defaultValue: 'false', description: 'Whether to show badge when count is 0.' },
        ],
      },
      {
        name: 'PresenceBadge',
        description: 'Indicator badge reflecting real-time user status (available, busy, away, offline, dnd, out-of-office).',
        props: [
          { name: 'status', type: "'available' | 'busy' | 'away' | 'offline' | 'doNotDisturb' | 'outOfOffice'", defaultValue: "'available'", required: true, description: 'User presence status state.' },
          { name: 'size', type: "'tiny' | 'extra-small' | 'small' | 'medium' | 'large'", defaultValue: "'medium'", description: 'Badge dimensions.' },
          { name: 'outOfOffice', type: 'boolean', defaultValue: 'false', description: 'Renders hollow icon variant for out of office.' },
        ],
      },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-badge', description: 'Inline-flex badge container.' },
      { ruleName: 'icon', className: '.spectra-badge__icon', description: 'Vector icon slot container.' },
      { ruleName: 'dot', className: '.spectra-badge__dot', description: 'Circular dot indicator element.' },
    ],
    cssVariables: [
      { variable: '--spectra-badge-radius', defaultToken: 'var(--radius-control-small, 4px)', description: 'Border radius token.' },
      { variable: '--spectra-badge-height', defaultToken: '24px', description: 'Height dimension based on size scale.' },
    ],
    nativeProps: [
      { name: 'variant', type: "'filled' | 'outline'", defaultValue: "'filled'", description: 'Native visual style.' },
      { name: 'color', type: 'string', defaultValue: "'brand'", description: 'Native palette color.' },
    ],
  },

  card: {
    componentName: 'Card',
    exportName: 'Card',
    importStatement: "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardPreview } from '@winplaybox/react';",
    subpathImport: "import Card from '@winplaybox/react/Card';",
    nativeImport: "import { Card } from '@winplaybox/react-native';",
    description: 'Learn about the props, CSS, and other APIs of this exported module.',
    props: [
      { name: 'variant', type: "'bordered' | 'elevated' | 'flat'", defaultValue: "'bordered'", description: 'Surface depth styling.' },
      { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Internal container padding.' },
      { name: 'orientation', type: "'vertical' | 'horizontal'", defaultValue: "'vertical'", description: 'Layout axis direction for card contents.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Card content nodes.' },
    ],
    subcomponents: [
      {
        name: 'CardHeader',
        description: 'Header container containing CardTitle, CardDescription, and optional action controls.',
        props: [
          { name: 'image', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Leading avatar or icon slot.' },
          { name: 'header', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Card title or header element.' },
          { name: 'description', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Card subtitle or description.' },
          { name: 'action', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Action slot aligned to the right.' },
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Custom header content nodes.' },
        ],
      },
      {
        name: 'CardTitle',
        description: 'Primary title heading element inside the CardHeader.',
        props: [
          { name: 'as', type: "'h1' | 'h2' | 'h3' | 'h4' | 'span'", defaultValue: "'h3'", description: 'Semantic HTML heading tag.' },
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Title text or elements.' },
        ],
      },
      {
        name: 'CardDescription',
        description: 'Secondary supportive subtitle below CardTitle.',
        props: [
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Description text nodes.' },
        ],
      },
      {
        name: 'CardContent',
        description: 'Main body section containing core content.',
        props: [
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Body content nodes.' },
          { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Content padding override.' },
        ],
      },
      {
        name: 'CardFooter',
        description: 'Bottom actions toolbar for submission or secondary button controls.',
        props: [
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Footer button controls.' },
          { name: 'justify', type: "'start' | 'end' | 'between'", defaultValue: "'end'", description: 'Horizontal alignment of action items.' },
        ],
      },
      {
        name: 'CardPreview',
        description: 'Full-bleed media container for cards displaying images, videos, or cover graphics.',
        props: [
          { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Media image or video node.' },
          { name: 'logo', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Corner floating logo or badge.' },
        ],
      },
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
    importStatement: "import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@winplaybox/react';",
    subpathImport: "import Tabs from '@winplaybox/react/Tabs';",
    nativeImport: "import { Tabs } from '@winplaybox/react-native';",
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
    importStatement: "import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '@winplaybox/react';",
    subpathImport: "import Accordion from '@winplaybox/react/Accordion';",
    nativeImport: "import { Accordion } from '@winplaybox/react-native';",
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
    importStatement: "import { Dialog } from '@winplaybox/react';",
    subpathImport: "import Dialog from '@winplaybox/react/Dialog';",
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
    importStatement: "import { Tooltip } from '@winplaybox/react';",
    subpathImport: "import Tooltip from '@winplaybox/react/Tooltip';",
    nativeImport: "import { Tooltip } from '@winplaybox/react-native';",
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

  label: {
    componentName: 'Label',
    exportName: 'Label',
    importStatement: "import { Label } from '@winplaybox/react';",
    subpathImport: "import Label from '@winplaybox/react/Label';",
    nativeImport: "import { Text } from 'react-native';",
    description: 'Foundational form control label conforming to Microsoft Fluent 2 Web specifications with WAI-ARIA and required marker semantics.',
    props: [
      { name: 'htmlFor', type: 'string', defaultValue: 'undefined', description: 'Associated form control identifier.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Whether the field is required; renders an accessible required asterisk.' },
      { name: 'size', type: "'small' | 'medium' | 'large'", defaultValue: "'medium'", description: 'Typography scale for label text.' },
      { name: 'weight', type: "'regular' | 'semibold'", defaultValue: "'semibold'", description: 'Font weight.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Renders in disabled muted text color.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Label text or children elements.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: 'label', description: 'Semantic HTML label element.' },
      { ruleName: 'required', className: 'label > span[aria-hidden="true"]', description: 'Error-colored asterisk indicator.' },
    ],
    cssVariables: [
      { variable: '--fontSize-semantic-label-sm', defaultToken: '13px', description: 'Medium label font size.' },
      { variable: '--color-text-primary', defaultToken: '#18181B', description: 'Label text color.' },
      { variable: '--color-feedback-error', defaultToken: '#DC2626', description: 'Required indicator color.' },
    ],
    nativeProps: [
      { name: 'children', type: 'string', defaultValue: 'undefined', description: 'Native text content.' },
    ],
  },

  'info-label': {
    componentName: 'InfoLabel',
    exportName: 'InfoLabel',
    importStatement: "import { InfoLabel } from '@winplaybox/react';",
    subpathImport: "import InfoLabel from '@winplaybox/react/InfoLabel';",
    nativeImport: "import { View, Text } from 'react-native';",
    description: 'High-level form control label pairing standard Label typography and required indicators with an authentic vector info trigger launching an accessible contextual tooltip.',
    props: [
      { name: 'info', type: 'React.ReactNode', defaultValue: 'undefined', required: true, description: 'Explanatory contextual content shown inside the tooltip.' },
      { name: 'infoPlacement', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: 'Compass placement of the tooltip.' },
      { name: 'infoButton', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Optional custom trigger element overriding default InfoIcon button.' },
      { name: 'infoAriaLabel', type: 'string', defaultValue: "'More information'", description: 'Accessible label for the info trigger button.' },
      { name: 'htmlFor', type: 'string', defaultValue: 'undefined', description: 'Associated form control identifier.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Whether the field is required.' },
      { name: 'size', type: "'small' | 'medium' | 'large'", defaultValue: "'medium'", description: 'Typography scale for label text.' },
      { name: 'weight', type: "'regular' | 'semibold'", defaultValue: "'semibold'", description: 'Font weight.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disabled state.' },
      { name: 'children', type: 'React.ReactNode', defaultValue: 'undefined', description: 'Label text.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: 'span', description: 'Inline container grouping label and info trigger.' },
      { ruleName: 'trigger', className: 'button', description: 'Keyboard-accessible info icon trigger button.' },
    ],
    cssVariables: [
      { variable: '--color-action-primary', defaultToken: '#007FFF', description: 'Info trigger vector icon color.' },
      { variable: '--color-surface-hover', defaultToken: 'rgba(128, 128, 128, 0.12)', description: 'Info button hover/focus highlight.' },
    ],
    nativeProps: [
      { name: 'info', type: 'string', defaultValue: 'undefined', description: 'Native modal text.' },
    ],
  },

  list: {
    componentName: 'List',
    exportName: 'List',
    importStatement: "import { List, ListItem, ListItemIcon, ListItemText } from '@winplaybox/react';",
    subpathImport: "import List from '@winplaybox/react/List';",
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
    importStatement: "import { Alert } from '@winplaybox/react';",
    subpathImport: "import Alert from '@winplaybox/react/Alert';",
    nativeImport: "import { Alert } from '@winplaybox/react-native';",
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
    importStatement: "import { Spinner } from '@winplaybox/react';",
    subpathImport: "import Spinner from '@winplaybox/react/Spinner';",
    nativeImport: "import { Spinner } from '@winplaybox/react-native';",
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
    importStatement: "import { Skeleton } from '@winplaybox/react';",
    subpathImport: "import Skeleton from '@winplaybox/react/Skeleton';",
    nativeImport: "import { Skeleton } from '@winplaybox/react-native';",
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
    importStatement: "import { Divider } from '@winplaybox/react';",
    subpathImport: "import Divider from '@winplaybox/react/Divider';",
    nativeImport: "import { Divider } from '@winplaybox/react-native';",
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
    importStatement: "import { Chip } from '@winplaybox/react';",
    subpathImport: "import Chip from '@winplaybox/react/Chip';",
    nativeImport: "import { Chip } from '@winplaybox/react-native';",
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
    importStatement: "import { Breadcrumbs } from '@winplaybox/react';",
    subpathImport: "import Breadcrumbs from '@winplaybox/react/Breadcrumbs';",
    nativeImport: "import { Breadcrumbs } from '@winplaybox/react-native';",
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

  'copy-button': {
    componentName: 'CopyButton',
    exportName: 'CopyButton',
    importStatement: "import { CopyButton } from '@winplaybox/react';",
    subpathImport: "import CopyButton from '@winplaybox/react/CopyButton';",
    nativeImport: "import { CopyButton } from '@winplaybox/react-native';",
    primitivesImport: "import { useClipboard } from '@winplaybox/primitives';",
    description: 'One-click clipboard copying trigger with animated icon feedback transitions and configurable timeout.',
    props: [
      { name: 'value', type: 'string', defaultValue: "''", required: true, description: 'Text string to copy to the system clipboard.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Idle text label (renders compact icon-only if omitted).' },
      { name: 'copiedLabel', type: 'string', defaultValue: "'Copied!'", description: 'Text label displayed during the temporary copied state.' },
      { name: 'timeout', type: 'number', defaultValue: '2000', description: 'Duration in milliseconds to display copied feedback.' },
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost'", defaultValue: "'secondary'", description: 'Visual button surface appearance.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Sizing scale affecting padding, typography, and icon size.' },
      { name: 'onCopy', type: '() => void', defaultValue: 'undefined', description: 'Optional callback executed upon successful clipboard write.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-copy-button', description: 'Root button container element.' },
      { ruleName: 'copied', className: '.spectra-copy-button--copied', description: 'Applied during active copied confirmation state.' },
      { ruleName: 'icon', className: '.spectra-copy-button__icon', description: 'Wrapper for animated vector icon swap.' },
      { ruleName: 'label', className: '.spectra-copy-button__label', description: 'Action text label element.' },
    ],
    cssVariables: [
      { variable: '--spectra-copy-button-bg', defaultToken: 'var(--color-surface-subtle)', description: 'Default background fill.' },
      { variable: '--spectra-copy-button-success', defaultToken: 'var(--color-feedback-success)', description: 'Color token applied during copied state.' },
    ],
    nativeProps: [
      { name: 'value', type: 'string', defaultValue: "''", description: 'Text string copied to native mobile clipboard.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Native text label.' },
      { name: 'copiedLabel', type: 'string', defaultValue: "'Copied!'", description: 'Native copied confirmation label.' },
      { name: 'timeout', type: 'number', defaultValue: '2000', description: 'Native confirmation feedback duration.' },
      { name: 'onCopy', type: '() => void', defaultValue: 'undefined', description: 'Native callback after copying.' },
    ],
  },

  'date-picker': {
    componentName: 'DatePicker',
    exportName: 'DatePicker',
    importStatement: "import { DatePicker } from '@winplaybox/react';",
    subpathImport: "import DatePicker from '@winplaybox/react/DatePicker';",
    nativeImport: "import { DatePicker } from '@winplaybox/react-native';",
    description: 'Cross-platform date selection input with accessible popover on Web and native OS dialog integration on mobile.',
    props: [
      { name: 'value', type: 'Date', defaultValue: 'undefined', description: 'Controlled date object value.' },
      { name: 'defaultValue', type: 'Date', defaultValue: 'undefined', description: 'Uncontrolled initial date object value.' },
      { name: 'onChange', type: '(date?: Date) => void', defaultValue: 'undefined', description: 'Callback fired when selected date changes.' },
      { name: 'placeholder', type: 'string', defaultValue: "'Select date...'", description: 'Placeholder label rendered when no date is selected.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Form field label text.' },
      { name: 'clearable', type: 'boolean', defaultValue: 'true', description: 'If true, provides a reset action to clear date.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Input height, padding, and font size.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables input interaction.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-date-picker', description: 'Root wrapper container.' },
      { ruleName: 'input', className: '.spectra-date-picker__input', description: 'Trigger input field.' },
      { ruleName: 'popover', className: '.spectra-date-picker__popover', description: 'Floating calendar dropdown card.' },
      { ruleName: 'calendar', className: '.spectra-date-picker__calendar', description: 'Calendar month grid container.' },
    ],
    cssVariables: [
      { variable: '--spectra-date-picker-border', defaultToken: 'var(--color-border-subtle)', description: 'Input and popover border token.' },
      { variable: '--spectra-date-picker-active-bg', defaultToken: 'var(--color-action-primary)', description: 'Selected day pill background.' },
    ],
    nativeProps: [
      { name: 'value', type: 'Date', defaultValue: 'undefined', description: 'Native controlled date value.' },
      { name: 'onChange', type: '(date?: Date) => void', defaultValue: 'undefined', description: 'Native date change handler.' },
      { name: 'minDate', type: 'Date', defaultValue: 'undefined', description: 'Minimum selectable date.' },
      { name: 'maxDate', type: 'Date', defaultValue: 'undefined', description: 'Maximum selectable date.' },
    ],
  },

  'list-view': {
    componentName: 'ListView',
    exportName: 'ListView',
    importStatement: "import { ListView } from '@winplaybox/react';",
    subpathImport: "import ListView from '@winplaybox/react/ListView';",
    nativeImport: "import { ListView } from '@winplaybox/react-native';",
    description: 'High-performance list component with token-aware dividers, pull-to-refresh spinners, and empty states.',
    props: [
      { name: 'data', type: 'readonly T[]', defaultValue: '[]', required: true, description: 'Array of data records to render in list.' },
      { name: 'renderItem', type: '(item: T, index: number) => React.ReactNode', defaultValue: 'undefined', required: true, description: 'Render callback for individual items.' },
      { name: 'divided', type: 'boolean', defaultValue: 'true', description: 'Inserts 1px subtle divider lines between rows.' },
      { name: 'refreshing', type: 'boolean', defaultValue: 'false', description: 'Whether pull-to-refresh spinner is actively spinning.' },
      { name: 'onRefresh', type: '() => void', defaultValue: 'undefined', description: 'Pull-to-refresh callback triggered on pull down.' },
      { name: 'emptyText', type: 'string', defaultValue: "'No items found'", description: 'Fallback text displayed when data array is empty.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-list-view', description: 'Main scrollable list container.' },
      { ruleName: 'item', className: '.spectra-list-view__item', description: 'Individual row element.' },
      { ruleName: 'divider', className: '.spectra-list-view__divider', description: 'Hairline divider separator.' },
      { ruleName: 'empty', className: '.spectra-list-view__empty', description: 'Centered empty state notice.' },
    ],
    cssVariables: [
      { variable: '--spectra-list-view-divider', defaultToken: 'var(--color-border-subtle)', description: 'Divider border color.' },
      { variable: '--spectra-list-view-hover', defaultToken: 'var(--color-surface-subtle)', description: 'Row hover background.' },
    ],
    nativeProps: [
      { name: 'data', type: 'Readonly<ArrayLike<T>>', defaultValue: 'undefined', description: 'Native FlatList dataset.' },
      { name: 'renderItem', type: 'ListRenderItem<T>', defaultValue: 'undefined', description: 'Native row renderer.' },
      { name: 'divided', type: 'boolean', defaultValue: 'true', description: 'Native row separator hairline.' },
      { name: 'refreshing', type: 'boolean', defaultValue: 'false', description: 'Native RefreshControl active status.' },
      { name: 'onRefresh', type: '() => void', defaultValue: 'undefined', description: 'Native RefreshControl pull callback.' },
    ],
  },

  'web-view-box': {
    componentName: 'WebViewBox',
    exportName: 'WebViewBox',
    importStatement: "import { WebViewBox } from '@winplaybox/react';",
    subpathImport: "import WebViewBox from '@winplaybox/react/WebViewBox';",
    nativeImport: "import { WebViewBox } from '@winplaybox/react-native';",
    description: 'Sandboxed web frame containment surface with loading progress bar, title toolbar, and fallback error handling.',
    props: [
      { name: 'src', type: 'string', defaultValue: 'undefined', required: true, description: 'Target URL to render inside the frame.' },
      { name: 'title', type: 'string', defaultValue: "'Web View'", description: 'Accessible iframe title string.' },
      { name: 'showHeader', type: 'boolean', defaultValue: 'false', description: 'Renders top title toolbar with domain and external link action.' },
      { name: 'height', type: 'number | string', defaultValue: "'500px'", description: 'Container frame height dimension.' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-web-view-box', description: 'Outer rounded surface container.' },
      { ruleName: 'header', className: '.spectra-web-view-box__header', description: 'Top address bar and action toolbar.' },
      { ruleName: 'iframe', className: '.spectra-web-view-box__iframe', description: 'Embedded sandboxed iframe.' },
      { ruleName: 'progress', className: '.spectra-web-view-box__progress', description: 'Animated load progress bar.' },
    ],
    cssVariables: [
      { variable: '--spectra-web-view-border', defaultToken: 'var(--color-border-subtle)', description: 'Surface border stroke token.' },
      { variable: '--spectra-web-view-radius', defaultToken: 'var(--radius-component-md)', description: 'Frame corner radius token.' },
    ],
    nativeProps: [
      { name: 'source', type: '{ uri: string } | { html: string }', defaultValue: 'undefined', description: 'Native webview source object.' },
      { name: 'showProgressBar', type: 'boolean', defaultValue: 'true', description: 'Top animated loading progress indicator.' },
      { name: 'onError', type: '(error: any) => void', defaultValue: 'undefined', description: 'Native failure callback.' },
    ],
  },

  breadcrumb: {
    componentName: 'Breadcrumb',
    exportName: 'Breadcrumb, Breadcrumbs, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider',
    importStatement: "import { Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider } from '@winplaybox/react';",
    subpathImport: "import { Breadcrumb } from '@winplaybox/react/Breadcrumb';",
    nativeImport: "import { Breadcrumbs } from '@winplaybox/react-native';",
    description: 'A breadcrumb helps people understand and move through the hierarchy of a complex site or app. It lists at least two location names, usually links, separated by dividers.',
    props: [
      { name: 'size', type: "'small' | 'medium' | 'large'", defaultValue: "'medium'", description: 'Visual sizing scale affecting typography (12/14/16px) and icon dimensions.' },
      { name: 'appearance', type: "'subtle' | 'transparent'", defaultValue: "'subtle'", description: 'Button appearance variant (subtle hover highlight vs transparent).' },
      { name: 'dividerType', type: "'chevron' | 'slash'", defaultValue: "'chevron'", description: 'Delimiter style between breadcrumb segments.' },
      { name: 'items', type: 'BreadcrumbItemData[]', defaultValue: 'undefined', description: 'Array of breadcrumb items for declarative data-driven rendering.' },
      { name: 'maxItems', type: 'number', defaultValue: 'undefined', description: 'Maximum visible items before collapsing intermediate levels into an overflow menu.' },
      { name: 'overflowIndex', type: 'number', defaultValue: '1', description: 'Starting index for overflow collapse, preserving the root item.' },
      { name: 'overflowAriaLabel', type: 'string', defaultValue: "'Show more breadcrumb items'", description: 'Accessible label for the overflow button.' },
      { name: 'divider', type: 'ReactNode', defaultValue: 'undefined', description: 'Custom separator element rendered between crumbs.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Compound child components (BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider).' },
    ],
    cssClasses: [
      { ruleName: 'root', className: '.spectra-breadcrumb', description: 'Styles applied to the outer <nav> element.' },
      { ruleName: 'list', className: '.spectra-breadcrumb__list', description: 'Styles applied to the inner <ol> ordered list.' },
      { ruleName: 'item', className: '.spectra-breadcrumb__item', description: 'Styles applied to <li> item elements.' },
      { ruleName: 'button', className: '.spectra-breadcrumb__button', description: 'Interactive button or link styling with rounded subtle hover background.' },
      { ruleName: 'divider', className: '.spectra-breadcrumb__divider', description: 'Aria-hidden separator element.' },
      { ruleName: 'overflow', className: '.spectra-breadcrumb__overflow', description: 'Overflow dropdown trigger and popover menu.' },
    ],
    cssVariables: [
      { variable: '--spectra-breadcrumb-color', defaultToken: 'var(--color-text-secondary, #424242)', description: 'Foreground text color for ancestor links.' },
      { variable: '--spectra-breadcrumb-current-color', defaultToken: 'var(--color-text-primary, #242424)', description: 'Foreground text color for current active page.' },
      { variable: '--spectra-breadcrumb-hover-bg', defaultToken: 'var(--color-bg-subtle-hover, rgba(0,0,0,0.04))', description: 'Subtle background fill on hover.' },
      { variable: '--spectra-breadcrumb-focus-ring', defaultToken: 'var(--color-brand-primary, #0f6cbd)', description: 'Focus outline color on keyboard navigation.' },
    ],
    nativeProps: [
      { name: 'items', type: 'BreadcrumbItem[]', defaultValue: '[]', description: 'Array of native breadcrumb items.' },
      { name: 'separator', type: 'string', defaultValue: "'/'", description: 'Native delimiter string.' },
      { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: 'Native layout padding scale.' },
    ],
  },
};

export const HOOK_API_DATA: Record<string, HookApiReference> = {
  'use-disclosure': {
    hookName: 'useDisclosure',
    importStatement: "import { useDisclosure } from '@winplaybox/primitives';",
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
    exampleUsage: `import { useDisclosure } from '@winplaybox/primitives';

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
    importStatement: "import { useControllableState } from '@winplaybox/primitives';",
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
    exampleUsage: `import { useControllableState } from '@winplaybox/primitives';

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
    importStatement: "import { useOutsideClick } from '@winplaybox/primitives';",
    signature: 'function useOutsideClick(ref: RefObject<HTMLElement>, handler: (event: MouseEvent) => void, enabled?: boolean): void',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [
      { name: 'ref', type: 'React.RefObject<HTMLElement>', defaultValue: 'undefined', required: true, description: 'Target DOM element ref to detect clicks outside of.' },
      { name: 'handler', type: '(event: MouseEvent | TouchEvent) => void', defaultValue: 'undefined', required: true, description: 'Callback fired when pointer clicks outside target.' },
      { name: 'enabled', type: 'boolean', defaultValue: 'true', description: 'Conditionally attach/detach global document listeners.' },
    ],
    returnValues: [],
    exampleUsage: `import { useOutsideClick } from '@winplaybox/primitives';

export function DropdownMenu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, onClose, isOpen);

  return isOpen ? <div ref={menuRef}>Menu items</div> : null;
}`,
  },

  'use-id': {
    hookName: 'useId',
    importStatement: "import { useId } from '@winplaybox/primitives';",
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
    exampleUsage: `import { useId } from '@winplaybox/primitives';

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
    importStatement: "import { useColorScheme } from '@winplaybox/primitives';",
    signature: 'function useColorScheme(): UseColorSchemeReturn',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'colorScheme', type: "'light' | 'dark' | 'system'", description: 'Active color scheme preference setting.' },
      { name: 'setColorScheme', type: '(scheme: "light" | "dark" | "system") => void', description: 'Function to toggle or persist color mode.' },
      { name: 'isDark', type: 'boolean', description: 'Resolved boolean indicating whether dark theme tokens are currently active.' },
    ],
    exampleUsage: `import { useColorScheme } from '@winplaybox/primitives';

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
    importStatement: "import { useMediaQuery } from '@winplaybox/primitives';",
    signature: 'function useMediaQuery(query: string): boolean',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [
      { name: 'query', type: 'string', defaultValue: 'undefined', required: true, description: 'Valid CSS media query string (e.g. "(max-width: 768px)").' },
    ],
    returnValues: [
      { name: 'matches', type: 'boolean', description: 'True if current browser viewport matches query, false otherwise.' },
    ],
    exampleUsage: `import { useMediaQuery } from '@winplaybox/primitives';

export function ResponsiveNav() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return isMobile ? <MobileDrawer /> : <DesktopNavbar />;
}`,
  },

  'use-focus-ring': {
    hookName: 'useFocusRing',
    importStatement: "import { useFocusRing } from '@winplaybox/primitives';",
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
    exampleUsage: `import { useFocusRing } from '@winplaybox/primitives';

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
    importStatement: "import { useToast } from '@winplaybox/primitives';",
    signature: 'function useToast(): UseToastReturn',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'toast', type: '(options: ToastOptions) => string', description: 'Triggers a floating notification message and returns unique toast ID.' },
      { name: 'dismiss', type: '(id: string) => void', description: 'Dismisses active toast before its timeout.' },
    ],
    exampleUsage: `import { useToast } from '@winplaybox/primitives';

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
    importStatement: "import { useReducedMotion } from '@winplaybox/primitives';",
    signature: 'function useReducedMotion(): boolean',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'prefersReducedMotion', type: 'boolean', description: 'True if user has enabled "prefers-reduced-motion: reduce" in OS settings.' },
    ],
    exampleUsage: `import { useReducedMotion } from '@winplaybox/primitives';

export function AnimatedBox() {
  const prefersReduced = useReducedMotion();
  return <div style={{ transition: prefersReduced ? 'none' : 'transform 0.3s ease' }} />;
}`,
  },

  'use-rtl': {
    hookName: 'useRTL',
    importStatement: "import { useRTL } from '@winplaybox/primitives';",
    signature: 'function useRTL(): boolean',
    description: 'Learn about the parameters, return values, and other APIs of this exported hook.',
    parameters: [],
    returnValues: [
      { name: 'isRTL', type: 'boolean', description: 'True if document root direction is right-to-left (dir="rtl").' },
    ],
    exampleUsage: `import { useRTL } from '@winplaybox/primitives';

export function NavigationArrows() {
  const isRTL = useRTL();
  return <div>{isRTL ? '← Previous' : 'Next →'}</div>;
}`,
  },

  'use-debounce': {
    hookName: 'useDebounce',
    importStatement: "import { useDebounce } from '@winplaybox/primitives';",
    signature: 'function useDebounce<T>(value: T, delayMs: number): T',
    description: 'Debounces a rapidly changing value (such as search input keystrokes) to prevent redundant rendering and API requests.',
    parameters: [
      { name: 'value', type: 'T', defaultValue: 'undefined', required: true, description: 'Target value to debounce.' },
      { name: 'delayMs', type: 'number', defaultValue: '300', required: true, description: 'Delay duration in milliseconds.' },
    ],
    returnValues: [
      { name: 'debouncedValue', type: 'T', description: 'Value delayed until after delayMs has elapsed since last change.' },
    ],
    exampleUsage: `import { useDebounce } from '@winplaybox/primitives';

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
    importStatement: "import { useThrottle } from '@winplaybox/primitives';",
    signature: 'function useThrottle<T>(value: T, intervalMs: number): T',
    description: 'Throttles frequent value updates (e.g. scroll positions, mouse movements) to guarantee at most one update per interval.',
    parameters: [
      { name: 'value', type: 'T', defaultValue: 'undefined', required: true, description: 'Source state value to throttle.' },
      { name: 'intervalMs', type: 'number', defaultValue: '200', required: true, description: 'Minimum interval duration in milliseconds.' },
    ],
    returnValues: [
      { name: 'throttledValue', type: 'T', description: 'Value updated at most once per intervalMs.' },
    ],
    exampleUsage: `import { useThrottle } from '@winplaybox/primitives';

export function ScrollMetrics() {
  const [scrollY, setScrollY] = useState(0);
  const throttledY = useThrottle(scrollY, 100);
  return <div>Scroll Position: {throttledY}px</div>;
}`,
  },

  'use-hover': {
    hookName: 'useHover',
    importStatement: "import { useHover } from '@winplaybox/primitives';",
    signature: 'function useHover<T extends HTMLElement>(): [RefObject<T>, boolean]',
    description: 'Tracks cursor hover state for any DOM element with automatic pointer event listeners.',
    parameters: [],
    returnValues: [
      { name: 'ref', type: 'RefObject<T>', description: 'Ref to assign to the target interactive DOM element.' },
      { name: 'isHovered', type: 'boolean', description: 'Boolean indicating whether pointer is hovering over element.' },
    ],
    exampleUsage: `import { useHover } from '@winplaybox/primitives';

export function CardPreview() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return <div ref={hoverRef}>{isHovered ? 'Hovered' : 'Normal'}</div>;
}`,
  },

  'use-platform': {
    hookName: 'usePlatform',
    importStatement: "import { usePlatform } from '@winplaybox/primitives';",
    signature: 'function usePlatform(): UsePlatformReturn',
    description: 'Detects and returns active client OS runtime (Web, iOS, Android, macOS, Windows) with platform capabilities.',
    parameters: [],
    returnValues: [
      { name: 'platform', type: "'web' | 'ios' | 'android' | 'macos' | 'windows'", description: 'Current target runtime platform identifier.' },
      { name: 'isNative', type: 'boolean', description: 'True when running on React Native iOS/Android runtime.' },
      { name: 'isApple', type: 'boolean', description: 'True for iOS and macOS client environments.' },
    ],
    exampleUsage: `import { usePlatform } from '@winplaybox/primitives';

export function PlatformBadge() {
  const { platform, isNative } = usePlatform();
  return <span>{isNative ? 'Native App' : 'Web Browser'} ({platform})</span>;
}`,
  },

  'use-breakpoint': {
    hookName: 'useBreakpoint',
    importStatement: "import { useBreakpoint } from '@winplaybox/primitives';",
    signature: 'function useBreakpoint(): "xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
    description: 'Returns active responsive viewport breakpoint token synchronized with Spectra UI grid tokens.',
    parameters: [],
    returnValues: [
      { name: 'breakpoint', type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', description: 'Current active responsive tier.' },
    ],
    exampleUsage: `import { useBreakpoint } from '@winplaybox/primitives';

export function ResponsiveLayout() {
  const bp = useBreakpoint();
  return <div>Active Screen Tier: {bp.toUpperCase()}</div>;
}`,
  },

  'use-event-listener': {
    hookName: 'useEventListener',
    importStatement: "import { useEventListener } from '@winplaybox/primitives';",
    signature: 'function useEventListener<K extends keyof WindowEventMap>(eventName: K, handler: (e: WindowEventMap[K]) => void, target?: EventTarget): void',
    description: 'Declaratively binds event listeners to window, document, or custom DOM element with automatic lifecycle cleanup.',
    parameters: [
      { name: 'eventName', type: 'string', defaultValue: 'undefined', required: true, description: 'Event identifier (e.g. "keydown", "resize", "scroll").' },
      { name: 'handler', type: '(e: Event) => void', defaultValue: 'undefined', required: true, description: 'Event handler callback.' },
      { name: 'target', type: 'EventTarget', defaultValue: 'window', description: 'Event target object to bind listener to.' },
    ],
    returnValues: [],
    exampleUsage: `import { useEventListener } from '@winplaybox/primitives';

export function ShortcutHandler() {
  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}`,
  },

  'use-intersection-observer': {
    hookName: 'useIntersectionObserver',
    importStatement: "import { useIntersectionObserver } from '@winplaybox/primitives';",
    signature: 'function useIntersectionObserver(options?: IntersectionObserverInit): [RefObject<Element>, IntersectionObserverEntry | null]',
    description: 'Tracks DOM element viewport visibility for lazy loading images, infinite scroll, and scroll-triggered animations.',
    parameters: [
      { name: 'options', type: 'IntersectionObserverInit', defaultValue: '{}', description: 'Threshold, root, and rootMargin options.' },
    ],
    returnValues: [
      { name: 'ref', type: 'RefObject<Element>', description: 'Ref to assign to observed DOM element.' },
      { name: 'entry', type: 'IntersectionObserverEntry | null', description: 'Latest intersection observer state record.' },
    ],
    exampleUsage: `import { useIntersectionObserver } from '@winplaybox/primitives';

export function LazyImage({ src }: { src: string }) {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  const isVisible = !!entry?.isIntersecting;
  return <div ref={ref}>{isVisible && <img src={src} />}</div>;
}`,
  },

  'use-element-size': {
    hookName: 'useElementSize',
    importStatement: "import { useElementSize } from '@winplaybox/primitives';",
    signature: 'function useElementSize<T extends HTMLElement>(): [RefObject<T>, { width: number; height: number }]',
    description: 'Measures live bounding dimensions (width and height) of a DOM element using ResizeObserver.',
    parameters: [],
    returnValues: [
      { name: 'ref', type: 'RefObject<T>', description: 'Ref to attach to the measured target DOM element.' },
      { name: 'size', type: '{ width: number; height: number }', description: 'Live dimensions object updated on container resize.' },
    ],
    exampleUsage: `import { useElementSize } from '@winplaybox/primitives';

export function ResponsiveChart() {
  const [ref, { width, height }] = useElementSize<HTMLDivElement>();
  return <div ref={ref}><Canvas width={width} height={height} /></div>;
}`,
  },

  'use-window-size': {
    hookName: 'useWindowSize',
    importStatement: "import { useWindowSize } from '@winplaybox/primitives';",
    signature: 'function useWindowSize(): { width: number; height: number }',
    description: 'Monitors window viewport dimensions with debounced resize handlers and SSR hydration safety.',
    parameters: [],
    returnValues: [
      { name: 'width', type: 'number', description: 'Current viewport inner width in pixels.' },
      { name: 'height', type: 'number', description: 'Current viewport inner height in pixels.' },
    ],
    exampleUsage: `import { useWindowSize } from '@winplaybox/primitives';

export function ViewportInfo() {
  const { width, height } = useWindowSize();
  return <div>Viewport: {width} x {height}px</div>;
}`,
  },

  'use-scroll-lock': {
    hookName: 'useScrollLock',
    importStatement: "import { useScrollLock } from '@winplaybox/primitives';",
    signature: 'function useScrollLock(lock?: boolean): void',
    description: 'Locks document body scrolling when modal dialogs, drawers, or mobile menus are opened to prevent background bleed.',
    parameters: [
      { name: 'lock', type: 'boolean', defaultValue: 'true', description: 'Whether document scrolling should be locked.' },
    ],
    returnValues: [],
    exampleUsage: `import { useScrollLock } from '@winplaybox/primitives';

export function Modal({ isOpen }: { isOpen: boolean }) {
  useScrollLock(isOpen);
  return isOpen ? <div className="modal">Modal Content</div> : null;
}`,
  },

  'use-clipboard': {
    hookName: 'useClipboard',
    importStatement: "import { useClipboard } from '@winplaybox/primitives';",
    signature: 'function useClipboard(timeoutMs?: number): UseClipboardReturn',
    description: 'Copies text to system clipboard with automatic success state reset and permission fallbacks.',
    parameters: [
      { name: 'timeoutMs', type: 'number', defaultValue: '2000', description: 'Duration in milliseconds to preserve copied state.' },
    ],
    returnValues: [
      { name: 'copy', type: '(text: string) => Promise<boolean>', description: 'Copies string to clipboard.' },
      { name: 'hasCopied', type: 'boolean', description: 'True for timeoutMs after successful copy.' },
    ],
    exampleUsage: `import { useClipboard } from '@winplaybox/primitives';

export function CodeCopyButton({ code }: { code: string }) {
  const { copy, hasCopied } = useClipboard();
  return <button onClick={() => copy(code)}>{hasCopied ? 'Copied' : 'Copy'}</button>;
}`,
  },

  'use-local-storage': {
    hookName: 'useLocalStorage',
    importStatement: "import { useLocalStorage } from '@winplaybox/primitives';",
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
    exampleUsage: `import { useLocalStorage } from '@winplaybox/primitives';

export function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('app-theme', 'dark');
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Theme: {theme}</button>;
}`,
  },

  'use-previous': {
    hookName: 'usePrevious',
    importStatement: "import { usePrevious } from '@winplaybox/primitives';",
    signature: 'function usePrevious<T>(value: T): T | undefined',
    description: 'Stores and returns the value from the previous render cycle using a React ref.',
    parameters: [
      { name: 'value', type: 'T', defaultValue: 'undefined', required: true, description: 'Target state or prop value to track.' },
    ],
    returnValues: [
      { name: 'previousValue', type: 'T | undefined', description: 'The value before the most recent render.' },
    ],
    exampleUsage: `import { usePrevious } from '@winplaybox/primitives';

export function CounterDiff({ count }: { count: number }) {
  const prevCount = usePrevious(count);
  return <span>Delta: {count - (prevCount ?? 0)}</span>;
}`,
  },

  'use-async': {
    hookName: 'useAsync',
    importStatement: "import { useAsync } from '@winplaybox/primitives';",
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
    exampleUsage: `import { useAsync } from '@winplaybox/primitives';

export function UserProfile() {
  const { loading, value, error } = useAsync(fetchUser);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>User: {value?.name}</div>;
}`,
  },

  'use-interval': {
    hookName: 'useInterval',
    importStatement: "import { useInterval } from '@winplaybox/primitives';",
    signature: 'function useInterval(callback: () => void, delayMs: number | null): void',
    description: 'Declarative setInterval hook with dynamic delay configuration and automatic cleanup.',
    parameters: [
      { name: 'callback', type: '() => void', defaultValue: 'undefined', required: true, description: 'Callback executed at each interval tick.' },
      { name: 'delayMs', type: 'number | null', defaultValue: 'undefined', required: true, description: 'Interval in ms, or null to pause.' },
    ],
    returnValues: [],
    exampleUsage: `import { useInterval } from '@winplaybox/primitives';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  useInterval(() => setSeconds(s => s + 1), 1000);
  return <div>Elapsed: {seconds}s</div>;
}`,
  },
};

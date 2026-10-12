import type { ComponentMetadata } from './componentsData';

export const EXTENDED_COMPONENTS_DATA: Record<string, ComponentMetadata> = {
  'compound-button': {
    id: 'compound-button',
    name: 'Compound Button',
    category: 'Inputs',
    description: 'Compound buttons feature a prominent primary action label paired with a secondary descriptive subtitle to guide high-stakes decision points.',
    guidelines: 'Use compound buttons on onboarding cards, tier upgrades, and feature selectors where users benefit from secondary descriptive context before committing an action.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    waiPattern: 'Button Pattern',
    dos: [
      'Pair a concise primary action verb with a descriptive subtitle sentence.',
      'Use leading 20px vector icons to reinforce the button role.',
      'Maintain consistent card width across stacked compound button groups.',
    ],
    donts: [
      'Do not overload subtitles with more than two lines of text.',
      'Never omit accessible aria-label or accessible text children.',
      'Do not use compound buttons for routine table row actions.',
    ],
    anatomy: [
      { name: 'Root (<button>)', role: 'Accessible button container with hover and active elevation states.' },
      { name: 'Icon Container', role: 'Leading vector badge establishing visual distinction.' },
      { name: 'Label', role: 'Bold primary action title rendered in Inter SemiBold.' },
      { name: 'Subtitle', role: 'Secondary explanation copy rendered in Inter Regular.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Activates the compound button action.' },
      { key: 'Tab', description: 'Focuses the compound button in sequential tab order.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Elevation shadow and subtle scale shift on hover.',
    },
    props: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Primary action headline text.' },
      { name: 'subtitle', type: 'string', defaultValue: "''", description: 'Descriptive context sentence.' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Leading icon vector node.' },
      { name: 'variant', type: "'primary' | 'secondary' | 'subtle'", defaultValue: "'secondary'", description: 'Visual surface styling variant.' },
    ],
    nativeProps: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Native primary title string.' },
      { name: 'subtitle', type: 'string', defaultValue: "''", description: 'Native subtitle string.' },
      { name: 'onPress', type: '() => void', defaultValue: 'undefined', description: 'Press handler callback.' },
    ],
    headlessHook: {
      name: 'useFocusRing',
      description: 'Applies visible keyboard focus ring without mouse click outline.',
      code: `import { useFocusRing } from '@winplaybox/primitives';

export function CustomCompoundButton(props) {
  const { isFocusVisible, focusProps } = useFocusRing();
  return <button {...focusProps} className={isFocusVisible ? 'focus-ring' : ''} />;
}`,
    },
  },

  'split-button': {
    id: 'split-button',
    name: 'Split Button',
    category: 'Inputs',
    description: 'Combines a default single-click primary action with a secondary chevron dropdown button revealing alternative actions.',
    guidelines: 'Use split buttons when one execution path is vastly more common (e.g. "Save", "Merge") but related variants ("Save and Close", "Squash and Merge") must be immediately accessible.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/',
    waiPattern: 'Menu Button Pattern',
    dos: [
      'Ensure the main button triggers the current default action with one click.',
      'Assign aria-haspopup="menu" and aria-expanded to the chevron toggle button.',
      'Update the primary label if the user selects a new default option.',
    ],
    donts: [
      'Do not trigger the menu when clicking the primary button text.',
      'Never leave the chevron button without an explicit aria-label.',
    ],
    anatomy: [
      { name: 'Group Container', role: 'Segmented wrapper holding both primary and toggle triggers.' },
      { name: 'Primary Trigger', role: 'Executes the active default action.' },
      { name: 'Menu Toggle', role: 'Opens and closes the popover actions list.' },
      { name: 'Menu Popover', role: 'Accessible dropdown listbox with arrow key navigation.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'On primary button: executes action. On chevron: toggles flyout menu.' },
      { key: 'ArrowDown', description: 'When focus is on chevron button: opens menu and focuses first option.' },
      { key: 'Escape', description: 'Closes open options menu and restores focus to chevron.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Chevron rotates and menu popover fades in with vertical slide.',
    },
    props: [
      { name: 'action', type: 'string', defaultValue: "''", description: 'Active default action label.' },
      { name: 'options', type: 'string[]', defaultValue: '[]', description: 'Alternative actions shown in flyout.' },
      { name: 'onAction', type: '(action: string) => void', defaultValue: 'undefined', description: 'Callback fired on action trigger.' },
    ],
    nativeProps: [
      { name: 'action', type: 'string', defaultValue: "''", description: 'Current action string.' },
      { name: 'onPress', type: '() => void', defaultValue: 'undefined', description: 'Native press handler.' },
    ],
    headlessHook: {
      name: 'useDisclosure',
      description: 'Controls open and closed flyout state with outside click dismissal.',
      code: `import { useDisclosure } from '@winplaybox/primitives';

export function SplitAction() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return <div className="split-root">{/* buttons */}</div>;
}`,
    },
  },

  'button-group': {
    id: 'button-group',
    name: 'Button Group',
    category: 'Inputs',
    description: 'Horizontally or vertically groups related buttons with shared borders and unified outer corner radii.',
    guidelines: 'Use button groups for closely related toolbar options such as view modes (Day, Week, Month) or text justification.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
    waiPattern: 'Toolbar Pattern',
    dos: [
      'Group functionally related actions with identical sizing scale.',
      'Support horizontal keyboard arrow navigation across group triggers.',
    ],
    donts: [
      'Do not mix different button variants (e.g. Danger with Primary) inside one group.',
      'Avoid grouping more than 5 buttons on mobile screens.',
    ],
    anatomy: [
      { name: 'Group Container', role: 'Flex container with role="group" or role="toolbar".' },
      { name: 'Segment Buttons', role: 'Individual buttons sharing collapsed internal borders.' },
    ],
    keyboard: [
      { key: 'ArrowLeft / ArrowRight', description: 'Moves focus between adjacent buttons in group.' },
      { key: 'Home / End', description: 'Moves focus to first or last button in group.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Instant state shift between active segments.',
    },
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Layout axis of button items.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Unified sizing scale.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Button instances to render.' },
    ],
    nativeProps: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Native layout axis.' },
    ],
    headlessHook: {
      name: 'useListNavigation',
      description: 'Manages arrow key roaming and active index synchronization.',
      code: `import { useListNavigation } from '@winplaybox/primitives';

export function ToolbarGroup() {
  const { activeIndex } = useListNavigation({ totalItems: 3 });
  return <div role="toolbar">{/* items */}</div>;
}`,
    },
  },

  'icon-button': {
    id: 'icon-button',
    name: 'Icon Button',
    category: 'Inputs',
    description: 'Compact circular or rounded square button displaying only a vector icon with accessible aria-label.',
    guidelines: 'Use icon buttons in toolbars, table action columns, and modals where space is constrained and the vector icon is universally recognizable.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    waiPattern: 'Button Pattern',
    dos: [
      'Always supply a descriptive, localized aria-label (e.g. "Close dialog", "Search repository").',
      'Provide a contextual tooltip on hover to assist user discoverability.',
    ],
    donts: [
      'Never render an icon button without an accessible name.',
      'Do not use obscure vector metaphors without accompanying tooltip copy.',
    ],
    anatomy: [
      { name: 'Root (<button>)', role: 'Accessible button container with 1:1 aspect ratio.' },
      { name: 'Vector Icon', role: '16px or 20px SVG vector centered within button bounds.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Triggers the icon button action.' },
      { key: 'Tab', description: 'Focuses the icon button.' },
    ],
    motion: {
      duration: '--motion-fast (100ms)',
      easing: 'ease-out',
      description: 'Subtle background tint shift on hover and active scale press.',
    },
    props: [
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Vector icon element.' },
      { name: 'aria-label', type: 'string', defaultValue: 'undefined', description: 'Required accessible name.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Dimensions scale (32px, 40px, 48px).' },
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost'", defaultValue: "'ghost'", description: 'Visual surface variant.' },
    ],
    nativeProps: [
      { name: 'icon', type: 'string', defaultValue: "''", description: 'Vector glyph identifier.' },
      { name: 'accessibilityLabel', type: 'string', defaultValue: "''", description: 'Screen reader announcement string.' },
    ],
    headlessHook: {
      name: 'useFocusRing',
      description: 'Supplies accessible focus ring parameters for circular boundaries.',
      code: `import { useFocusRing } from '@winplaybox/primitives';

export function ActionIconButton(props) {
  const { isFocusVisible, focusProps } = useFocusRing();
  return <button {...focusProps} aria-label={props.label} className={isFocusVisible ? 'focus-ring' : ''} />;
}`,
    },
  },

  textarea: {
    id: 'textarea',
    name: 'TextArea',
    category: 'Inputs',
    description: 'Multi-line text input field supporting auto-expansion, character limit counters, and resize constraints.',
    guidelines: 'Use text areas when users are expected to enter free-form paragraphs such as comments, feedback, or descriptions.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Textbox Pattern',
    dos: [
      'Provide clear label and placeholder guidance indicating expected multi-line content.',
      'Show an inline character counter when database field length limits apply.',
    ],
    donts: [
      'Do not set fixed height that hides input text behind an awkward micro-scrollbar.',
      'Avoid disabling vertical resize unless auto-expansion is enabled.',
    ],
    anatomy: [
      { name: 'Label', role: 'Input headline associated via htmlFor attribute.' },
      { name: 'Textarea Field', role: 'Semantic <textarea> supporting multi-line editing.' },
      { name: 'Character Counter', role: 'Shows used vs. total allowed characters.' },
      { name: 'Helper Text', role: 'Supplemental guidance linked via aria-describedby.' },
    ],
    keyboard: [
      { key: 'Enter', description: 'Inserts a new line break.' },
      { key: 'Tab', description: 'Advances focus to the next interactive form element.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Smooth height transition when auto-expansion calculates content growth.',
    },
    props: [
      { name: 'rows', type: 'number', defaultValue: '3', description: 'Initial visible row height.' },
      { name: 'maxLength', type: 'number', defaultValue: 'undefined', description: 'Maximum allowed character count.' },
      { name: 'autoResize', type: 'boolean', defaultValue: 'false', description: 'Automatically expands height to fit text.' },
    ],
    nativeProps: [
      { name: 'multiline', type: 'boolean', defaultValue: 'true', description: 'Enables native multi-line input mode.' },
      { name: 'numberOfLines', type: 'number', defaultValue: '4', description: 'Native height in rows.' },
    ],
    headlessHook: {
      name: 'useFormField',
      description: 'Binds label ID and error descriptions for accessible form validation.',
      code: `import { useFormField } from '@winplaybox/primitives';

export function CustomTextArea(props) {
  const { inputProps, labelProps } = useFormField(props);
  return <textarea {...inputProps} />;
}`,
    },
  },

  combobox: {
    id: 'combobox',
    name: 'Combobox',
    category: 'Inputs',
    description: 'Hybrid input and popup menu enabling users to filter and select from extensive option lists.',
    guidelines: 'Use comboboxes when the selection list contains more than 15 items and typing accelerates choice location.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    waiPattern: 'Combobox Pattern',
    dos: [
      'Support arrow down to open popup and arrow navigation across options.',
      'Highlight matched text substrings within filtered option items.',
    ],
    donts: [
      'Do not trap keyboard focus when users hit Escape (close popup and maintain text cursor).',
    ],
    anatomy: [
      { name: 'Input Trigger', role: 'Filterable textbox with role="combobox".' },
      { name: 'Toggle Chevron', role: 'Visual toggle indicator.' },
      { name: 'Popup Listbox', role: 'Container with role="listbox" showing filtered items.' },
    ],
    keyboard: [
      { key: 'ArrowDown', description: 'Opens popup and moves focus to first matching option.' },
      { key: 'ArrowUp', description: 'Moves focus to preceding option.' },
      { key: 'Enter', description: 'Selects active option and closes popup.' },
      { key: 'Escape', description: 'Closes popup without changing value.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Listbox opens with opacity fade and 4px vertical slide.',
    },
    props: [
      { name: 'options', type: 'Array<{ label: string; value: string }>', defaultValue: '[]', description: 'Dataset of selectable items.' },
      { name: 'value', type: 'string', defaultValue: "''", description: 'Selected value string.' },
      { name: 'placeholder', type: 'string', defaultValue: "'Select option...'", description: 'Input placeholder hint.' },
    ],
    nativeProps: [
      { name: 'items', type: 'string[]', defaultValue: '[]', description: 'Selectable items array.' },
    ],
    headlessHook: {
      name: 'useListNavigation',
      description: 'Controls active item selection and keyboard roaming.',
      code: `import { useListNavigation } from '@winplaybox/primitives';

export function CustomCombobox() {
  const { activeIndex } = useListNavigation({ totalItems: 10 });
  return <div role="combobox">{/* items */}</div>;
}`,
    },
  },

  autocomplete: {
    id: 'autocomplete',
    name: 'Autocomplete',
    category: 'Inputs',
    description: 'Search-driven input with real-time suggestion list, fuzzy filtering, and keyboard navigation.',
    guidelines: 'Use autocomplete for large datasets (e.g. countries, cities, repository branches) where users need immediate suggestions.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    waiPattern: 'Combobox with Autocomplete Pattern',
    dos: [
      'Debounce search query execution to prevent API spam.',
      'Support free-form text entry if custom values are permitted.',
    ],
    donts: [
      'Do not display empty popups when no suggestions match query.',
    ],
    anatomy: [
      { name: 'Search Field', role: 'Text input with aria-autocomplete="list".' },
      { name: 'Suggestions Dropdown', role: 'Listbox containing suggestions matched against query.' },
    ],
    keyboard: [
      { key: 'ArrowDown / ArrowUp', description: 'Cycles through suggestions list.' },
      { key: 'Enter', description: 'Accepts highlighted suggestion.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Dropdown animates in synchronously with query results.',
    },
    props: [
      { name: 'suggestions', type: 'string[]', defaultValue: '[]', description: 'Array of suggestion strings.' },
      { name: 'onSearch', type: '(query: string) => void', defaultValue: 'undefined', description: 'Callback fired as user types.' },
    ],
    nativeProps: [
      { name: 'data', type: 'string[]', defaultValue: '[]', description: 'Native suggestions data array.' },
    ],
    headlessHook: {
      name: 'useDebounce',
      description: 'Debounces query changes to prevent excessive API invocations.',
      code: `import { useDebounce } from '@winplaybox/primitives';

export function AutocompleteDemo() {
  const [val, setVal] = useState('');
  const debounced = useDebounce(val, 300);
  return <input value={val} onChange={e => setVal(e.target.value)} />;
}`,
    },
  },

  'checkbox-group': {
    id: 'checkbox-group',
    name: 'Checkbox Group',
    category: 'Inputs',
    description: 'Wraps multiple checkboxes within an accessible fieldset and legend to manage multi-option form state.',
    guidelines: 'Use checkbox groups when users can select zero, one, or several options from a related category.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
    waiPattern: 'Checkbox Group Pattern',
    dos: [
      'Wrap all options inside semantic <fieldset> with a descriptive <legend>.',
      'Provide an indeterminate Select All checkbox for parent/child hierarchies.',
    ],
    donts: [
      'Do not use checkbox groups when only one choice is permitted (use Radio Group instead).',
    ],
    anatomy: [
      { name: 'Fieldset', role: 'Semantic container grouping related checkboxes.' },
      { name: 'Legend', role: 'Accessible title announcing group intent.' },
      { name: 'Checkboxes', role: 'Child checkbox controls.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Moves focus between individual checkboxes in sequential order.' },
      { key: 'Space', description: 'Toggles checked state of the focused checkbox.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Immediate checkmark fill transition.',
    },
    props: [
      { name: 'legend', type: 'string', defaultValue: "''", description: 'Group title displayed in fieldset legend.' },
      { name: 'value', type: 'string[]', defaultValue: '[]', description: 'Array of selected item values.' },
      { name: 'onChange', type: '(values: string[]) => void', defaultValue: 'undefined', description: 'Change callback.' },
    ],
    nativeProps: [
      { name: 'values', type: 'string[]', defaultValue: '[]', description: 'Selected values array.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Manages array of selected IDs across controlled and uncontrolled modes.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CheckboxGroupPrimitive(props) {
  const [selected, setSelected] = useControllableState({ defaultValue: [] });
  return <fieldset>{/* items */}</fieldset>;
}`,
    },
  },

  'radio-group': {
    id: 'radio-group',
    name: 'Radio Group',
    category: 'Inputs',
    description: 'Enforces mutually exclusive single selection across a group of radio buttons with arrow key roaming.',
    guidelines: 'Use radio groups when the user must choose exactly one option from a small list of mutually exclusive choices (2 to 7 items).',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio-button/',
    waiPattern: 'Radio Group Pattern',
    dos: [
      'Support keyboard arrow roaming across radio items without pressing Tab.',
      'Always have one option pre-selected by default to prevent ambiguous initial state.',
    ],
    donts: [
      'Never allow unchecking a radio button by clicking it again.',
    ],
    anatomy: [
      { name: 'Root Container', role: 'Element with role="radiogroup".' },
      { name: 'Radio Item', role: 'Individual option with role="radio" and aria-checked.' },
      { name: 'Label', role: 'Descriptive text describing option effect.' },
    ],
    keyboard: [
      { key: 'ArrowDown / ArrowRight', description: 'Selects and moves focus to next radio option.' },
      { key: 'ArrowUp / ArrowLeft', description: 'Selects and moves focus to preceding radio option.' },
    ],
    motion: {
      duration: '--motion-fast (100ms)',
      easing: 'ease-out',
      description: 'Subtle scale pulse on radio dot selection.',
    },
    props: [
      { name: 'value', type: 'string', defaultValue: "''", description: 'Active selected radio value.' },
      { name: 'name', type: 'string', defaultValue: "''", description: 'HTML form group name attribute.' },
      { name: 'orientation', type: "'vertical' | 'horizontal'", defaultValue: "'vertical'", description: 'Layout arrangement.' },
    ],
    nativeProps: [
      { name: 'value', type: 'string', defaultValue: "''", description: 'Native active value string.' },
    ],
    headlessHook: {
      name: 'useListNavigation',
      description: 'Provides circular arrow key focus management across options.',
      code: `import { useListNavigation } from '@winplaybox/primitives';

export function RadioGroupPrimitive() {
  const { activeIndex } = useListNavigation({ totalItems: 3, loop: true });
  return <div role="radiogroup">{/* radios */}</div>;
}`,
    },
  },

  slider: {
    id: 'slider',
    name: 'Slider',
    category: 'Inputs',
    description: 'Allows users to make selections from a continuous or discrete range of numeric values along a horizontal track.',
    guidelines: 'Use sliders for continuous adjustments (volume, brightness, price budget) where immediate visual preview is more valuable than exact numerical typing.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider/',
    waiPattern: 'Slider Pattern',
    dos: [
      'Bind aria-valuenow, aria-valuemin, and aria-valuemax to the slider thumb element.',
      'Provide tick marks and snap points for discrete numerical thresholds.',
    ],
    donts: [
      'Do not use sliders for critical precise numeric entry without a companion text input.',
    ],
    anatomy: [
      { name: 'Track', role: 'Background baseline representing the entire value range.' },
      { name: 'Progress Bar', role: 'Colored active fill from minimum to current thumb.' },
      { name: 'Thumb', role: 'Draggable handle element with role="slider".' },
      { name: 'Value Label', role: 'Contextual floating tooltip displaying live numeric value.' },
    ],
    keyboard: [
      { key: 'ArrowRight / ArrowUp', description: 'Increments slider value by one step.' },
      { key: 'ArrowLeft / ArrowDown', description: 'Decrements slider value by one step.' },
      { key: 'PageUp / PageDown', description: 'Increments / decrements by large step (10x).' },
      { key: 'Home / End', description: 'Sets value to minimum / maximum bound.' },
    ],
    motion: {
      duration: '--motion-fast (80ms)',
      easing: 'ease-out',
      description: 'Thumb scale expands on hover and drag interaction.',
    },
    props: [
      { name: 'min', type: 'number', defaultValue: '0', description: 'Minimum scale bound.' },
      { name: 'max', type: 'number', defaultValue: '100', description: 'Maximum scale bound.' },
      { name: 'step', type: 'number', defaultValue: '1', description: 'Granular step increment.' },
      { name: 'value', type: 'number', defaultValue: '50', description: 'Current numeric value.' },
    ],
    nativeProps: [
      { name: 'minimumValue', type: 'number', defaultValue: '0', description: 'Native min bound.' },
      { name: 'maximumValue', type: 'number', defaultValue: '100', description: 'Native max bound.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Manages continuous numeric range values with min/max clamps.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function SliderPrimitive({ min = 0, max = 100, defaultValue = 50 }) {
  const [val, setVal] = useControllableState({ defaultValue });
  return <div role="slider" aria-valuenow={val} aria-valuemin={min} aria-valuemax={max} />;
}`,
    },
  },

  rating: {
    id: 'rating',
    name: 'Rating',
    category: 'Inputs',
    description: 'Star or icon-based rating control supporting partial increments, hover previews, and keyboard selection.',
    guidelines: 'Use ratings for user review submissions, product feedback, and quality assessments.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider/',
    waiPattern: 'Rating Slider Pattern',
    dos: [
      'Provide visible numeric feedback alongside star glyphs (e.g. "4.5 out of 5").',
      'Support half-star precision where nuanced grading is required.',
    ],
    donts: [
      'Do not rely solely on color to differentiate filled stars from empty stars.',
    ],
    anatomy: [
      { name: 'Root', role: 'Container with role="radiogroup" or role="slider".' },
      { name: 'Star Glyphs', role: 'Vector stars with filled, half-filled, or outlined states.' },
    ],
    keyboard: [
      { key: 'ArrowRight / ArrowUp', description: 'Increments rating score.' },
      { key: 'ArrowLeft / ArrowDown', description: 'Decrements rating score.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Star scales up on hover preview and snaps into place.',
    },
    props: [
      { name: 'max', type: 'number', defaultValue: '5', description: 'Total number of rating stars.' },
      { name: 'value', type: 'number', defaultValue: '0', description: 'Current selected rating.' },
      { name: 'precision', type: '0.5 | 1', defaultValue: '1', description: 'Step precision increment.' },
    ],
    nativeProps: [
      { name: 'count', type: 'number', defaultValue: '5', description: 'Number of stars.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Handles hovered and locked rating scores.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function RatingPrimitive() {
  const [rating, setRating] = useControllableState({ defaultValue: 0 });
  return <div>{/* stars */}</div>;
}`,
    },
  },

  'color-picker': {
    id: 'color-picker',
    name: 'Color Picker',
    category: 'Inputs',
    description: 'Interactive hue, saturation, and hex input panel for selecting design tokens and custom color values.',
    guidelines: 'Use color pickers in design tool settings, theme customizers, and avatar personalization interfaces.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    waiPattern: 'Color Dialog Pattern',
    dos: [
      'Provide preset swatch palettes matching Spectra design token swatches.',
      'Allow direct hex, RGB, and HSL text input for precision entry.',
    ],
    donts: [
      'Do not restrict users to arbitrary hex codes without contrast feedback.',
    ],
    anatomy: [
      { name: 'Swatch Trigger', role: 'Clickable button displaying currently active color.' },
      { name: 'Saturation Area', role: '2D gradient map for hue/saturation navigation.' },
      { name: 'Hue Slider', role: '1D spectrum track.' },
      { name: 'Hex Input', role: 'Text input for manual color code entry.' },
    ],
    keyboard: [
      { key: 'Arrow Keys', description: 'Fine-tunes color coordinates across 2D spectrum map.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Picker panel pops open with subtle spring easing.',
    },
    props: [
      { name: 'value', type: 'string', defaultValue: "'#2563EB'", description: 'Active hex color string.' },
      { name: 'onChange', type: '(color: string) => void', defaultValue: 'undefined', description: 'Color change callback.' },
    ],
    nativeProps: [
      { name: 'color', type: 'string', defaultValue: "'#2563EB'", description: 'Native color string.' },
    ],
    headlessHook: {
      name: 'useDisclosure',
      description: 'Opens and closes color picker popover.',
      code: `import { useDisclosure } from '@winplaybox/primitives';

export function ColorPickerDemo() {
  const { isOpen, onToggle } = useDisclosure();
  return <button onClick={onToggle}>Pick Color</button>;
}`,
    },
  },

  'avatar-group': {
    id: 'avatar-group',
    name: 'Avatar Group',
    category: 'Data Display',
    description: 'Stack of overlapping user avatars displaying collaborator presence with an overflow counter pill.',
    guidelines: 'Use avatar groups to show multiple contributors, team members, or active document collaborators without cluttering layout space.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/group/',
    waiPattern: 'Group Pattern',
    dos: [
      'Limit maximum visible avatars to 4 or 5 and render an overflow badge (e.g. "+3").',
      'Provide accessible tooltips displaying individual names on hover.',
    ],
    donts: [
      'Do not overlap avatars without a 2px contrasting border separator.',
    ],
    anatomy: [
      { name: 'Group Container', role: 'Flex row container with negative margin overlap.' },
      { name: 'Avatar Nodes', role: 'Individual avatar components with 2px surface borders.' },
      { name: 'Overflow Counter', role: 'Circular pill indicating remaining hidden collaborators.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Cycles focus through interactive member avatars.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Hovered avatar elevates in z-index with scale expansion.',
    },
    props: [
      { name: 'max', type: 'number', defaultValue: '4', description: 'Maximum visible avatars before overflow pill.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Unified avatar dimensions scale.' },
    ],
    nativeProps: [
      { name: 'max', type: 'number', defaultValue: '4', description: 'Native max visible avatars.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Extracts surface background color for ring borders.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function AvatarGroupPrimitive() {
  const { colorScheme } = useTheme();
  return <div className="avatar-stack">{/* avatars */}</div>;
}`,
    },
  },

  table: {
    id: 'table',
    name: 'Table',
    category: 'Data Display',
    description: 'Accessible tabular data display supporting zebra striping, sticky headers, and responsive horizontal scrolling.',
    guidelines: 'Use tables for dense, structured datasets where users need to compare rows and scan across multiple attribute columns.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/table/',
    waiPattern: 'Table Pattern',
    dos: [
      'Use semantic <table>, <thead>, <tbody>, <tr>, <th>, and <td> elements.',
      'Provide scope="col" on column headers and scope="row" on row headers.',
    ],
    donts: [
      'Do not use div-based pseudo-tables when semantic <table> is appropriate.',
    ],
    anatomy: [
      { name: 'Table Wrapper', role: 'Overflow container allowing horizontal scrolling on mobile.' },
      { name: 'Table (<table)', role: 'Semantic table element.' },
      { name: 'Header Row (<thead>)', role: 'Sticky or static header containing column titles.' },
      { name: 'Body (<tbody>)', role: 'Data rows with alternating zebra backgrounds.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Moves focus through interactive cell triggers in sequential order.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Row background highlight on pointer hover.',
    },
    props: [
      { name: 'striped', type: 'boolean', defaultValue: 'false', description: 'Enables alternating zebra row backgrounds.' },
      { name: 'hoverable', type: 'boolean', defaultValue: 'true', description: 'Highlights rows on hover.' },
      { name: 'compact', type: 'boolean', defaultValue: 'false', description: 'Reduces padding for dense data display.' },
    ],
    nativeProps: [
      { name: 'data', type: 'any[]', defaultValue: '[]', description: 'Native dataset array.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Applies token border colors and hover surface backgrounds.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function CustomTable() {
  const { colorScheme } = useTheme();
  return <table className={colorScheme}>{/* rows */}</table>;
}`,
    },
  },

  'data-grid': {
    id: 'data-grid',
    name: 'Data Grid',
    category: 'Data Display',
    description: 'High-performance virtualized grid with column sorting, filtering, cell selection, and keyboard roaming.',
    guidelines: 'Use data grids for enterprise datasets exceeding 1,000 rows requiring spreadsheet-like keyboard navigation and inline editing.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
    waiPattern: 'Grid Pattern',
    dos: [
      'Support arrow key roaming across cells with role="grid".',
      'Virtualize off-screen rows to preserve 60 FPS scrolling performance.',
    ],
    donts: [
      'Do not render tens of thousands of unvirtualized DOM nodes.',
    ],
    anatomy: [
      { name: 'Grid Root', role: 'Container with role="grid".' },
      { name: 'Column Headers', role: 'Sortable headers with aria-sort attribute.' },
      { name: 'Cell Nodes', role: 'Interactive cell units with role="gridcell".' },
    ],
    keyboard: [
      { key: 'Arrow Keys', description: 'Roams active cell focus in four directions.' },
      { key: 'Enter / F2', description: 'Enters inline cell editing mode.' },
      { key: 'Escape', description: 'Cancels inline edit and returns focus to cell.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Zero-latency cell selection border update.',
    },
    props: [
      { name: 'columns', type: 'ColumnDef[]', defaultValue: '[]', description: 'Column schema and render rules.' },
      { name: 'rows', type: 'RowData[]', defaultValue: '[]', description: 'Dataset rows array.' },
      { name: 'pagination', type: 'boolean', defaultValue: 'true', description: 'Enables bottom pagination bar.' },
    ],
    nativeProps: [
      { name: 'columns', type: 'any[]', defaultValue: '[]', description: 'Native column definitions.' },
    ],
    headlessHook: {
      name: 'useListNavigation',
      description: 'Coordinates 2D arrow key roaming across columns and rows.',
      code: `import { useListNavigation } from '@winplaybox/primitives';

export function GridPrimitive() {
  return <div role="grid">{/* virtualized rows */}</div>;
}`,
    },
  },

  'tree-view': {
    id: 'tree-view',
    name: 'Tree View',
    category: 'Data Display',
    description: 'Hierarchical collapsible folder and item list with arrow key navigation (APG Tree View pattern).',
    guidelines: 'Use tree views for file system explorers, nested taxonomy categories, and organizational hierarchies.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/treeview/',
    waiPattern: 'Tree View Pattern',
    dos: [
      'Support Right Arrow to expand folder and Left Arrow to collapse folder.',
      'Assign aria-expanded to parent nodes and role="treeitem" to all nodes.',
    ],
    donts: [
      'Do not require mouse clicks to explore nested tree hierarchies.',
    ],
    anatomy: [
      { name: 'Tree Container', role: 'Root with role="tree".' },
      { name: 'Folder Node', role: 'Parent item with chevron toggle and role="treeitem".' },
      { name: 'Leaf Item', role: 'Terminal item with role="treeitem".' },
    ],
    keyboard: [
      { key: 'ArrowDown / ArrowUp', description: 'Navigates to next / previous visible node.' },
      { key: 'ArrowRight', description: 'Expands collapsed folder node.' },
      { key: 'ArrowLeft', description: 'Collapses expanded folder node or moves to parent.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Folder chevron rotates and sub-tree animates open.',
    },
    props: [
      { name: 'data', type: 'TreeNode[]', defaultValue: '[]', description: 'Hierarchical tree data structure.' },
      { name: 'multiSelect', type: 'boolean', defaultValue: 'false', description: 'Allows multiple item selection.' },
    ],
    nativeProps: [
      { name: 'nodes', type: 'any[]', defaultValue: '[]', description: 'Native tree nodes array.' },
    ],
    headlessHook: {
      name: 'useDisclosure',
      description: 'Manages expanded/collapsed state for nested sub-trees.',
      code: `import { useDisclosure } from '@winplaybox/primitives';

export function TreeNode({ label, children }) {
  const { isOpen, onToggle } = useDisclosure();
  return <li role="treeitem" aria-expanded={isOpen}><button onClick={onToggle}>{label}</button></li>;
}`,
    },
  },

  tag: {
    id: 'tag',
    name: 'Tag',
    category: 'Data Display',
    description: 'Compact visual token for categorization, status indicators, and keyword labeling.',
    guidelines: 'Use tags to attach metadata attributes to articles, tasks, or cloud resources.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Tag / Badge Pattern',
    dos: [
      'Use distinct color variants to differentiate statuses (e.g. Success, Warning, Error).',
      'Provide a clear dismiss action with accessible label when tags are removable.',
    ],
    donts: [
      'Do not use tags as the primary navigation trigger across different pages.',
    ],
    anatomy: [
      { name: 'Tag Body', role: 'Contained surface with subtle border and text.' },
      { name: 'Close Vector', role: 'Optional remove cross button.' },
    ],
    keyboard: [
      { key: 'Delete / Backspace', description: 'Removes the tag when focused in an editable collection.' },
    ],
    motion: {
      duration: '--motion-fast (100ms)',
      easing: 'ease-out',
      description: 'Tag scales down and fades out when removed.',
    },
    props: [
      { name: 'label', type: 'string', defaultValue: "''", description: 'Tag text.' },
      { name: 'onClose', type: '() => void', defaultValue: 'undefined', description: 'Callback fired on close trigger.' },
      { name: 'color', type: "'default' | 'primary' | 'success' | 'warning' | 'danger'", defaultValue: "'default'", description: 'Color theme token.' },
    ],
    nativeProps: [
      { name: 'text', type: 'string', defaultValue: "''", description: 'Tag label.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Calculates color contrast ratios for tag backgrounds.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function CustomTag({ label }) {
  return <span className="spectra-tag">{label}</span>;
}`,
    },
  },

  timeline: {
    id: 'timeline',
    name: 'Timeline',
    category: 'Data Display',
    description: 'Chronological event stream with connecting vertical vectors, status icons, and timestamp metadata.',
    guidelines: 'Use timelines to visualize audit logs, deployment pipelines, and order fulfillment stages.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/list/',
    waiPattern: 'Ordered List Pattern',
    dos: [
      'Present events in consistent chronological or reverse-chronological order.',
      'Use icon glyphs to convey event status (completed, in-progress, pending).',
    ],
    donts: [
      'Do not omit timestamps or relative date indications.',
    ],
    anatomy: [
      { name: 'Timeline Container', role: 'Ordered list (<ol>) representing sequence.' },
      { name: 'Connecting Line', role: 'Vertical rule linking consecutive items.' },
      { name: 'Node Dot / Icon', role: 'Status badge marker.' },
      { name: 'Content Block', role: 'Event title, description, and timestamp.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Cycles focus through interactive links and event buttons.' },
    ],
    motion: {
      duration: '--motion-normal (250ms)',
      easing: 'ease-out',
      description: 'Connecting line animates downwards as new events arrive.',
    },
    props: [
      { name: 'items', type: 'TimelineItem[]', defaultValue: '[]', description: 'Array of timeline event records.' },
      { name: 'align', type: "'left' | 'right' | 'alternate'", defaultValue: "'left'", description: 'Layout alignment.' },
    ],
    nativeProps: [
      { name: 'items', type: 'any[]', defaultValue: '[]', description: 'Native timeline items.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Supplies connector stroke and status color tokens.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function TimelinePrimitive({ events }) {
  return <ol className="timeline">{/* items */}</ol>;
}`,
    },
  },

  statistic: {
    id: 'statistic',
    name: 'Statistic',
    category: 'Data Display',
    description: 'Prominent numerical display for KPI metric dashboards, comparison delta percentages, and trend arrows.',
    guidelines: 'Use statistic cards at the top of analytics views to provide immediate executive summaries of vital business metrics.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Status / Metric Pattern',
    dos: [
      'Pair large numbers with a descriptive subtitle and time period context.',
      'Use green/red trend indicators to highlight positive/negative deltas.',
    ],
    donts: [
      'Do not display naked numbers without units or context.',
    ],
    anatomy: [
      { name: 'Title', role: 'Small uppercase metric label.' },
      { name: 'Value', role: 'Large high-contrast numerical figure.' },
      { name: 'Delta Badge', role: 'Percentage change relative to past period.' },
    ],
    keyboard: [],
    motion: {
      duration: '--motion-normal (300ms)',
      easing: 'ease-out',
      description: 'Numerical counter animation counts up from zero on load.',
    },
    props: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Metric description.' },
      { name: 'value', type: 'string | number', defaultValue: '0', description: 'Primary numerical statistic.' },
      { name: 'delta', type: 'string', defaultValue: "''", description: 'Percentage change indicator.' },
    ],
    nativeProps: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Native metric title.' },
      { name: 'value', type: 'string', defaultValue: "''", description: 'Native metric figure.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Provides typography scale tokens for headline numerical font.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function StatisticCard({ title, value }) {
  return <div><span>{title}</span><h2>{value}</h2></div>;
}`,
    },
  },

  calendar: {
    id: 'calendar',
    name: 'Calendar',
    category: 'Data Display',
    description: 'Monthly date picker grid with multi-day range selection, disabled bounds, and keyboard arrow roaming.',
    guidelines: 'Use calendar views when users need to select dates, book schedules, or inspect event density across monthly grids.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    waiPattern: 'Date Picker Grid Pattern',
    dos: [
      'Support arrow key navigation across calendar grid days.',
      'Announce selected date and month changes via aria-live regions.',
    ],
    donts: [
      'Do not allow selecting dates outside defined min/max booking restrictions.',
    ],
    anatomy: [
      { name: 'Header Toolbar', role: 'Month navigation buttons and month title.' },
      { name: 'Day Column Headers', role: 'Mon, Tue, Wed column indicators.' },
      { name: 'Calendar Grid', role: '7x6 matrix of selectable day cells.' },
    ],
    keyboard: [
      { key: 'ArrowRight / ArrowLeft', description: 'Moves date focus by one day.' },
      { key: 'ArrowDown / ArrowUp', description: 'Moves date focus by one week (7 days).' },
      { key: 'PageUp / PageDown', description: 'Navigates to previous / next month.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Month grid slides horizontally when paging between months.',
    },
    props: [
      { name: 'value', type: 'Date | null', defaultValue: 'null', description: 'Currently selected date object.' },
      { name: 'onChange', type: '(date: Date) => void', defaultValue: 'undefined', description: 'Selection callback.' },
    ],
    nativeProps: [
      { name: 'selectedDate', type: 'string', defaultValue: "''", description: 'ISO date string.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Manages selected Date objects and active month offsets.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CalendarPrimitive() {
  const [date, setDate] = useControllableState({ defaultValue: new Date() });
  return <div role="grid">{/* days */}</div>;
}`,
    },
  },

  drawer: {
    id: 'drawer',
    name: 'Drawer',
    category: 'Feedback',
    description: 'Off-canvas sliding overlay panel anchored to the left, right, top, or bottom of the viewport.',
    guidelines: 'Use drawers for secondary workflows (settings panels, shopping carts, filters) that require extensive vertical scrolling without leaving the main view.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    waiPattern: 'Modal Dialog Pattern',
    dos: [
      'Trap keyboard focus inside the open drawer and close on Escape press.',
      'Dim background content with an accessible backdrop overlay.',
    ],
    donts: [
      'Never allow the body content to scroll underneath an open drawer.',
    ],
    anatomy: [
      { name: 'Backdrop', role: 'Semi-transparent scrim overlay behind drawer.' },
      { name: 'Drawer Panel', role: 'Sliding container with role="dialog" and aria-modal="true".' },
      { name: 'Header & Close', role: 'Panel title and dismiss button.' },
      { name: 'Body', role: 'Scrollable content container.' },
    ],
    keyboard: [
      { key: 'Escape', description: 'Closes drawer and returns focus to trigger element.' },
      { key: 'Tab', description: 'Traps focus within drawer elements.' },
    ],
    motion: {
      duration: '--motion-normal (250ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Panel slides in from edge while backdrop fades to 40% opacity.',
    },
    props: [
      { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Controlled visibility boolean.' },
      { name: 'onClose', type: '() => void', defaultValue: 'undefined', description: 'Close request callback.' },
      { name: 'placement', type: "'left' | 'right' | 'top' | 'bottom'", defaultValue: "'right'", description: 'Viewport anchor edge.' },
    ],
    nativeProps: [
      { name: 'visible', type: 'boolean', defaultValue: 'false', description: 'Native modal visibility.' },
    ],
    headlessHook: {
      name: 'useDisclosure',
      description: 'Controls open state and binds scroll-lock to document body.',
      code: `import { useDisclosure, useScrollLock } from '@winplaybox/primitives';

export function DrawerPrimitive() {
  const { isOpen, onClose } = useDisclosure();
  useScrollLock(isOpen);
  return isOpen ? <div role="dialog">{/* content */}</div> : null;
}`,
    },
  },

  popover: {
    id: 'popover',
    name: 'Popover',
    category: 'Feedback',
    description: 'Contextual floating container anchored to a trigger element containing interactive forms and actions.',
    guidelines: 'Use popovers when user interaction is required (e.g. color pickers, mini forms, share dialogs) unlike tooltips which are read-only.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    waiPattern: 'Non-modal Dialog Pattern',
    dos: [
      'Position popovers with collision detection so they stay within viewport bounds.',
      'Support outside clicks and Escape key to dismiss.',
    ],
    donts: [
      'Do not open popovers on mouse hover (use Tooltip instead).',
    ],
    anatomy: [
      { name: 'Trigger', role: 'Anchor element opening the popover on click.' },
      { name: 'Popover Surface', role: 'Elevated floating card.' },
      { name: 'Arrow Pointer', role: 'Small vector arrow pointing to trigger.' },
    ],
    keyboard: [
      { key: 'Escape', description: 'Closes popover and returns focus to trigger.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Fade in and 4px scale zoom from trigger point.',
    },
    props: [
      { name: 'trigger', type: 'ReactNode', defaultValue: 'undefined', description: 'Anchor button opening popover.' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'bottom'", description: 'Preferred compass anchor side.' },
    ],
    nativeProps: [
      { name: 'visible', type: 'boolean', defaultValue: 'false', description: 'Native popover visibility.' },
    ],
    headlessHook: {
      name: 'useOutsideClick',
      description: 'Dismisses popover when user clicks outside surface bounds.',
      code: `import { useOutsideClick } from '@winplaybox/primitives';

export function PopoverDemo() {
  const ref = useRef(null);
  useOutsideClick(ref, () => setOpen(false));
  return <div ref={ref}>{/* popover */}</div>;
}`,
    },
  },

  'progress-bar': {
    id: 'progress-bar',
    name: 'Progress Bar',
    category: 'Feedback',
    description: 'Horizontal determinate or indeterminate animated bar communicating background process completion.',
    guidelines: 'Use determinate progress bars when the remaining percentage is known, and indeterminate pulsating bars when duration is unpredictable.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/progressbar/',
    waiPattern: 'Progressbar Pattern',
    dos: [
      'Set role="progressbar", aria-valuenow, aria-valuemin, and aria-valuemax.',
      'Show numerical percentage text alongside the progress track.',
    ],
    donts: [
      'Never leave a progress bar frozen at 99% indefinitely.',
    ],
    anatomy: [
      { name: 'Track', role: 'Background baseline representing 100% capacity.' },
      { name: 'Indicator Bar', role: 'Animated colored fill displaying completion.' },
    ],
    keyboard: [],
    motion: {
      duration: '--motion-normal (200ms)',
      easing: 'ease-in-out',
      description: 'Fill bar width animates smoothly between progress updates.',
    },
    props: [
      { name: 'value', type: 'number', defaultValue: '0', description: 'Completion percentage (0 to 100).' },
      { name: 'indeterminate', type: 'boolean', defaultValue: 'false', description: 'Continuous loading wave animation.' },
      { name: 'color', type: "'primary' | 'success' | 'warning' | 'danger'", defaultValue: "'primary'", description: 'Fill bar token color.' },
    ],
    nativeProps: [
      { name: 'progress', type: 'number', defaultValue: '0', description: 'Value between 0.0 and 1.0.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Extracts action color variables for the progress fill bar.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function ProgressBarPrimitive({ value }) {
  return <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} />;
}`,
    },
  },

  toast: {
    id: 'toast',
    name: 'Toast',
    category: 'Feedback',
    description: 'Ephemeral floating alert notification that auto-dismisses after a calibrated duration timeout.',
    guidelines: 'Use toasts for asynchronous feedback confirmations ("Project saved", "File uploaded") that do not interrupt user workflow.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
    waiPattern: 'Alert / Status Pattern',
    dos: [
      'Render toasts inside an aria-live="polite" region so screen readers announce them.',
      'Provide an explicit close button and pause timer on hover.',
    ],
    donts: [
      'Do not place critical destructive warnings inside auto-dismissing toasts.',
    ],
    anatomy: [
      { name: 'Toast Container', role: 'Fixed viewport stack for multiple notifications.' },
      { name: 'Toast Item', role: 'Floating card with icon, message, and close button.' },
    ],
    keyboard: [
      { key: 'Escape', description: 'Dismisses active toast.' },
    ],
    motion: {
      duration: '--motion-normal (200ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Slides into viewport from corner and fades out on dismiss.',
    },
    props: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Toast headline.' },
      { name: 'description', type: 'string', defaultValue: "''", description: 'Optional detail message.' },
      { name: 'duration', type: 'number', defaultValue: '4000', description: 'Auto-dismiss timeout in ms.' },
    ],
    nativeProps: [
      { name: 'message', type: 'string', defaultValue: "''", description: 'Native notification message.' },
    ],
    headlessHook: {
      name: 'useToast',
      description: 'Programmatic toast dispatcher with queueing and auto-dismissal.',
      code: `import { useToast } from '@winplaybox/primitives';

export function SaveButton() {
  const { toast } = useToast();
  return <button onClick={() => toast({ title: 'Saved successfully' })}>Save</button>;
}`,
    },
  },

  'media-card': {
    id: 'media-card',
    name: 'Media Card',
    category: 'Surfaces',
    description: 'Structured card layout pairing top media imagery or video preview with title, body, and action footer.',
    guidelines: 'Use media cards for product catalogs, blog articles, video previews, and dashboard highlight tiles.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Card Surface Pattern',
    dos: [
      'Provide meaningful alt text for the header media image.',
      'Constrain media aspect ratios (16:9 or 4:3) across sibling cards in a grid.',
    ],
    donts: [
      'Do not nest conflicting primary clickable cards inside each other.',
    ],
    anatomy: [
      { name: 'Card Container', role: 'Bordered or elevated surface.' },
      { name: 'Media Header', role: 'Top image banner with aspect-ratio lock.' },
      { name: 'Content Body', role: 'Title, category badge, and description.' },
      { name: 'Actions Footer', role: 'Button triggers.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Focuses interactive action buttons inside the card.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Card elevates in shadow elevation and media subtly scales on hover.',
    },
    props: [
      { name: 'imageSrc', type: 'string', defaultValue: "''", description: 'Header image source URL.' },
      { name: 'title', type: 'string', defaultValue: "''", description: 'Card title.' },
    ],
    nativeProps: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Native card title.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Applies surface token backgrounds and border radii.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function CustomMediaCard() {
  const { colorScheme } = useTheme();
  return <div className="media-card">{/* content */}</div>;
}`,
    },
  },

  box: {
    id: 'box',
    name: 'Box',
    category: 'Surfaces',
    description: 'Fundamental polymorphic container element with direct token prop bindings and responsive styling.',
    guidelines: 'Use Box as the atomic primitive building block for custom components needing direct token padding, margin, and surface colors.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Generic Container',
    dos: [
      'Use the "as" prop to render semantic HTML elements (e.g. as="section", as="article").',
    ],
    donts: [
      'Do not use Box when a more semantic component (Card, Button) already exists.',
    ],
    anatomy: [
      { name: 'Root', role: 'Polymorphic HTML container.' },
    ],
    keyboard: [],
    motion: {
      duration: 'none',
      easing: 'none',
      description: 'Static layout container.',
    },
    props: [
      { name: 'as', type: 'ElementType', defaultValue: "'div'", description: 'Underlying HTML element to render.' },
      { name: 'padding', type: 'string', defaultValue: 'undefined', description: 'Token spacing multiplier.' },
    ],
    nativeProps: [
      { name: 'style', type: 'ViewStyle', defaultValue: '{}', description: 'Native view style.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Translates design token keys into CSS custom properties.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function BoxPrimitive({ as: Tag = 'div', ...props }) {
  return <Tag {...props} />;
}`,
    },
  },

  container: {
    id: 'container',
    name: 'Container',
    category: 'Surfaces',
    description: 'Centers content horizontally with calibrated maximum width bounds (sm, md, lg, xl, 2xl) and gutters.',
    guidelines: 'Use containers as top-level page wrappers to prevent wide displays from stretching text into unreadable line lengths.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Layout Region',
    dos: [
      'Choose maxWidth based on content density (e.g. md for docs, xl for dashboards).',
    ],
    donts: [
      'Do not nest containers inside each other unnecessarily.',
    ],
    anatomy: [
      { name: 'Container Wrapper', role: 'Centered block with auto horizontal margins.' },
    ],
    keyboard: [],
    motion: {
      duration: 'none',
      easing: 'none',
      description: 'Static layout container.',
    },
    props: [
      { name: 'maxWidth', type: "'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'", defaultValue: "'xl'", description: 'Max width ceiling.' },
      { name: 'center', type: 'boolean', defaultValue: 'true', description: 'Auto-centers horizontally.' },
    ],
    nativeProps: [
      { name: 'style', type: 'ViewStyle', defaultValue: '{}', description: 'Native container style.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Applies responsive breakpoint widths.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function ContainerPrimitive({ children }) {
  return <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>;
}`,
    },
  },

  grid: {
    id: 'grid',
    name: 'Grid',
    category: 'Surfaces',
    description: 'Responsive 12-column CSS grid container supporting fractional column spans and variable gaps.',
    guidelines: 'Use grid for complex multi-dimensional page layouts and component card showcases.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Layout Structure',
    dos: [
      'Define columns using standard 12-column subdivisions or auto-fit repeat patterns.',
    ],
    donts: [
      'Avoid fixed pixel column widths that cause horizontal scrolling on mobile.',
    ],
    anatomy: [
      { name: 'Grid Container', role: 'CSS grid display with column templates.' },
      { name: 'Grid Items', role: 'Child elements assigned specific column spans.' },
    ],
    keyboard: [],
    motion: {
      duration: 'none',
      easing: 'none',
      description: 'Layout container.',
    },
    props: [
      { name: 'columns', type: 'number | string', defaultValue: '12', description: 'Grid column count or template.' },
      { name: 'gap', type: 'number | string', defaultValue: '16', description: 'Spacing between rows and columns.' },
    ],
    nativeProps: [
      { name: 'gap', type: 'number', defaultValue: '16', description: 'Native grid gap.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Applies 4px grid spacing tokens.',
      code: `export function GridPrimitive({ children }) {
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>{children}</div>;
}`,
    },
  },

  stack: {
    id: 'stack',
    name: 'Stack',
    category: 'Surfaces',
    description: 'One-dimensional flexbox layout primitive managing horizontal or vertical spacing between children.',
    guidelines: 'Use Stack whenever items need consistent spacing along a single axis (e.g. form fields, button bars).',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Layout Structure',
    dos: [
      'Use direction="column" for vertical form stacks and direction="row" for toolbar buttons.',
    ],
    donts: [
      'Do not use manual margin hacks when Stack gap handles spacing automatically.',
    ],
    anatomy: [
      { name: 'Stack Root', role: 'Flex container with gap spacing.' },
    ],
    keyboard: [],
    motion: {
      duration: 'none',
      easing: 'none',
      description: 'Layout container.',
    },
    props: [
      { name: 'direction', type: "'row' | 'column'", defaultValue: "'column'", description: 'Flex layout axis.' },
      { name: 'gap', type: 'number | string', defaultValue: '12', description: 'Space between elements.' },
      { name: 'align', type: 'string', defaultValue: "'stretch'", description: 'Cross-axis alignment.' },
    ],
    nativeProps: [
      { name: 'direction', type: "'row' | 'column'", defaultValue: "'column'", description: 'Native flex direction.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Applies token spacing values to flex gap.',
      code: `export function StackPrimitive({ direction = 'column', gap = 12, children }) {
  return <div style={{ display: 'flex', flexDirection: direction, gap }}>{children}</div>;
}`,
    },
  },

  paper: {
    id: 'paper',
    name: 'Paper',
    category: 'Surfaces',
    description: 'Physical metaphor surface receiving elevation shadows and border radius according to token scale.',
    guidelines: 'Use Paper as the foundational surface for modals, popovers, dropdowns, and cards.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Surface Region',
    dos: [
      'Choose elevation levels (1 to 5) corresponding to visual layer hierarchy.',
    ],
    donts: [
      'Avoid high elevations that cast overpowering harsh shadows in dark mode.',
    ],
    anatomy: [
      { name: 'Paper Surface', role: 'Elevated container with background and shadow.' },
    ],
    keyboard: [],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Elevation shadow shifts on state transitions.',
    },
    props: [
      { name: 'elevation', type: '0 | 1 | 2 | 3 | 4 | 5', defaultValue: '1', description: 'Shadow depth level.' },
      { name: 'variant', type: "'flat' | 'elevation' | 'outlined'", defaultValue: "'elevation'", description: 'Surface finish.' },
    ],
    nativeProps: [
      { name: 'elevation', type: 'number', defaultValue: '2', description: 'Native Android elevation / iOS shadow.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Extracts theme shadow tokens.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function PaperPrimitive({ elevation = 1, children }) {
  return <div className={\`spectra-paper-elevation-\${elevation}\`}>{children}</div>;
}`,
    },
  },

  'app-bar': {
    id: 'app-bar',
    name: 'App Bar',
    category: 'Surfaces',
    description: 'Top application header providing branding identity, breadcrumbs, search trigger, and user actions.',
    guidelines: 'Use App Bar as the persistent primary header anchored across top of the application window.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
    waiPattern: 'Banner Landmark & Toolbar',
    dos: [
      'Render with <header> landmark element for screen reader landmark navigation.',
      'Keep header minimal, uncluttered, and high-focus.',
    ],
    donts: [
      'Do not place excessive secondary settings in the main header (use a settings drawer).',
    ],
    anatomy: [
      { name: 'Header Landmark (<header>)', role: 'Sticky top banner container.' },
      { name: 'Brand & Title', role: 'Logo and current breadcrumb.' },
      { name: 'Action Toolbar', role: 'Search, theme toggle, and profile triggers.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Cycles focus sequentially through header controls.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Background opacity and blur apply as user scrolls down page.',
    },
    props: [
      { name: 'sticky', type: 'boolean', defaultValue: 'true', description: 'Pins header to top of viewport.' },
    ],
    nativeProps: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Native screen title.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Provides backdrop blur and border styling tokens.',
      code: `export function AppBarPrimitive({ children }) {
  return <header role="banner" style={{ position: 'sticky', top: 0 }}>{children}</header>;
}`,
    },
  },

  pagination: {
    id: 'pagination',
    name: 'Pagination',
    category: 'Navigation',
    description: 'Controls for navigating across discrete pages of long tabular datasets or catalog listings.',
    guidelines: 'Use pagination when datasets exceed 25 rows and infinite scrolling is inappropriate.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Navigation Landmark with Pagination',
    dos: [
      'Mark the current page with aria-current="page".',
      'Provide Previous and Next button triggers with disabled bounds.',
    ],
    donts: [
      'Do not show more than 7 page pills at once (use ellipsis truncation).',
    ],
    anatomy: [
      { name: 'Nav Container', role: 'Semantic <nav> with aria-label="Pagination".' },
      { name: 'Page Buttons', role: 'Pill triggers indicating page numbers.' },
      { name: 'Previous / Next', role: 'Directional navigation buttons.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Navigates to the selected page.' },
    ],
    motion: {
      duration: '--motion-fast (100ms)',
      easing: 'ease-out',
      description: 'Pill background slides to newly selected page.',
    },
    props: [
      { name: 'count', type: 'number', defaultValue: '1', description: 'Total number of pages.' },
      { name: 'page', type: 'number', defaultValue: '1', description: 'Active 1-indexed page.' },
      { name: 'onChange', type: '(page: number) => void', defaultValue: 'undefined', description: 'Page change callback.' },
    ],
    nativeProps: [
      { name: 'totalPages', type: 'number', defaultValue: '1', description: 'Native total page count.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Manages active page index and ellipsis truncation logic.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function PaginationPrimitive({ count, defaultValue = 1, onChange }) {
  const [page, setPage] = useControllableState({ defaultValue, onChange });
  return <nav aria-label="Pagination">{/* pills */}</nav>;
}`,
    },
  },

  stepper: {
    id: 'stepper',
    name: 'Stepper',
    category: 'Navigation',
    description: 'Displays progress through a sequential multi-step wizard with active, completed, and error step nodes.',
    guidelines: 'Use steppers for multi-stage checkout flows, onboarding wizards, and account creation steps.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Progress & Wizard Pattern',
    dos: [
      'Show checkmark vectors on completed steps and numbers on upcoming steps.',
      'Allow users to click preceding completed steps to revise information.',
    ],
    donts: [
      'Do not allow skipping required upcoming steps without validation.',
    ],
    anatomy: [
      { name: 'Stepper Track', role: 'Horizontal or vertical line connecting step nodes.' },
      { name: 'Step Circle', role: 'Indicator showing step number or check icon.' },
      { name: 'Step Label', role: 'Headline and subtitle for step.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Focuses through interactive completed step nodes.' },
    ],
    motion: {
      duration: '--motion-normal (250ms)',
      easing: 'ease-out',
      description: 'Connector line fills and checkmark vector animates on step advance.',
    },
    props: [
      { name: 'activeStep', type: 'number', defaultValue: '0', description: 'Zero-indexed active step.' },
      { name: 'steps', type: 'Array<{ label: string; description?: string }>', defaultValue: '[]', description: 'Step definitions.' },
    ],
    nativeProps: [
      { name: 'currentStep', type: 'number', defaultValue: '0', description: 'Native current step index.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Tracks step progress and completion status.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function StepperPrimitive({ steps, defaultValue = 0 }) {
  const [activeStep, setActiveStep] = useControllableState({ defaultValue });
  return <div className="stepper">{/* step nodes */}</div>;
}`,
    },
  },

  menu: {
    id: 'menu',
    name: 'Menu',
    category: 'Navigation',
    description: 'Floating action menu displaying a list of choices on temporary surfaces (APG Menu pattern).',
    guidelines: 'Use menus for action lists triggered by contextual buttons or three-dot kebab icons.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/',
    waiPattern: 'Menu Pattern',
    dos: [
      'Follow WAI-ARIA Menu pattern with role="menu" and role="menuitem".',
      'Support arrow down and arrow up to navigate between menu items.',
    ],
    donts: [
      'Do not use menus for primary navigation links (use standard links instead).',
    ],
    anatomy: [
      { name: 'Trigger', role: 'Button opening the menu.' },
      { name: 'Menu Container', role: 'Surface with role="menu".' },
      { name: 'Menu Items', role: 'Actions with role="menuitem".' },
    ],
    keyboard: [
      { key: 'ArrowDown / ArrowUp', description: 'Roams focus through menu items.' },
      { key: 'Enter / Space', description: 'Activates selected menu item.' },
      { key: 'Escape', description: 'Closes menu and restores trigger focus.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Menu scales from trigger anchor with subtle fade.',
    },
    props: [
      { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Menu visibility state.' },
      { name: 'onClose', type: '() => void', defaultValue: 'undefined', description: 'Close callback.' },
    ],
    nativeProps: [
      { name: 'visible', type: 'boolean', defaultValue: 'false', description: 'Native menu visibility.' },
    ],
    headlessHook: {
      name: 'useListNavigation',
      description: 'Manages arrow key roving focus across menu items.',
      code: `import { useListNavigation } from '@winplaybox/primitives';

export function MenuPrimitive() {
  const { activeIndex } = useListNavigation({ totalItems: 4 });
  return <ul role="menu">{/* items */}</ul>;
}`,
    },
  },

  link: {
    id: 'link',
    name: 'Link',
    category: 'Navigation',
    description: 'Semantic hypertext anchor with token-driven hover states, external link indicator vectors, and focus rings.',
    guidelines: 'Use links for navigating to different URLs or anchor locations on the page.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/link/',
    waiPattern: 'Link Pattern',
    dos: [
      'Render authentic <a> tags with valid href attributes.',
      'Show an external link icon when pointing to third-party domains.',
    ],
    donts: [
      'Do not use link tags for actions that change state or perform deletions (use Button instead).',
    ],
    anatomy: [
      { name: 'Anchor (<a>)', role: 'Semantic link element.' },
      { name: 'External Icon', role: 'Optional vector indicator for external URLs.' },
    ],
    keyboard: [
      { key: 'Enter', description: 'Navigates to link destination.' },
    ],
    motion: {
      duration: '--motion-fast (100ms)',
      easing: 'ease-out',
      description: 'Underline opacity and color transition on hover.',
    },
    props: [
      { name: 'href', type: 'string', defaultValue: "''", description: 'Destination URL.' },
      { name: 'external', type: 'boolean', defaultValue: 'false', description: 'Appends target="_blank" and external icon.' },
    ],
    nativeProps: [
      { name: 'url', type: 'string', defaultValue: "''", description: 'Native destination URL string.' },
    ],
    headlessHook: {
      name: 'useFocusRing',
      description: 'Provides accessible focus ring styling for inline links.',
      code: `import { useFocusRing } from '@winplaybox/primitives';

export function CustomLink(props) {
  const { isFocusVisible, focusProps } = useFocusRing();
  return <a {...focusProps} href={props.href} className={isFocusVisible ? 'focus-ring' : ''} />;
}`,
    },
  },

  'speed-dial': {
    id: 'speed-dial',
    name: 'Speed Dial',
    category: 'Navigation',
    description: 'Floating action button that blossoms into a fan of related quick actions when activated.',
    guidelines: 'Use speed dials on mobile views where a single persistent FAB can reveal 3 to 5 high-frequency actions.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/',
    waiPattern: 'Speed Dial Pattern',
    dos: [
      'Rotate the main action icon (e.g. Plus into Close cross) when opened.',
      'Provide clear text labels alongside each secondary action button.',
    ],
    donts: [
      'Do not show more than 6 child actions in a speed dial.',
    ],
    anatomy: [
      { name: 'Primary FAB', role: 'Floating circular button pinned to corner.' },
      { name: 'Action Cluster', role: 'Column of smaller secondary action buttons.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Toggles speed dial open and closed.' },
      { key: 'Escape', description: 'Closes open speed dial.' },
    ],
    motion: {
      duration: '--motion-normal (200ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Primary button rotates 45 degrees and secondary buttons stagger upwards.',
    },
    props: [
      { name: 'actions', type: 'Array<{ label: string; icon: ReactNode; onClick: () => void }>', defaultValue: '[]', description: 'Secondary speed dial actions.' },
    ],
    nativeProps: [
      { name: 'actions', type: 'any[]', defaultValue: '[]', description: 'Native speed dial actions.' },
    ],
    headlessHook: {
      name: 'useDisclosure',
      description: 'Controls open state and handles dismissal.',
      code: `import { useDisclosure } from '@winplaybox/primitives';

export function SpeedDialPrimitive() {
  const { isOpen, onToggle } = useDisclosure();
  return <button onClick={onToggle}>+</button>;
}`,
    },
  },

  'bottom-nav': {
    id: 'bottom-nav',
    name: 'Bottom Navigation',
    category: 'Navigation',
    description: 'Ergonomic mobile bottom navigation bar providing quick switching between 3 to 5 top-level views.',
    guidelines: 'Use bottom navigation on mobile devices to place top-level destinations within natural thumb reach.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tablist/',
    waiPattern: 'Tablist Pattern',
    dos: [
      'Limit destinations to between 3 and 5 items.',
      'Always combine icon glyphs with short labels.',
    ],
    donts: [
      'Never scroll bottom navigation items horizontally.',
    ],
    anatomy: [
      { name: 'Bottom Bar', role: 'Pinned bottom container with elevation shadow.' },
      { name: 'Nav Item', role: 'Vertical icon and text trigger.' },
    ],
    keyboard: [
      { key: 'ArrowRight / ArrowLeft', description: 'Switches between navigation destinations.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Active tab icon scales up slightly with color transition.',
    },
    props: [
      { name: 'value', type: 'string', defaultValue: "''", description: 'Active route identifier.' },
      { name: 'onChange', type: '(value: string) => void', defaultValue: 'undefined', description: 'Route change callback.' },
    ],
    nativeProps: [
      { name: 'selectedTab', type: 'string', defaultValue: "''", description: 'Native active tab.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Manages active bottom navigation index.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function BottomNavPrimitive() {
  const [tab, setTab] = useControllableState({ defaultValue: 'home' });
  return <nav role="tablist">{/* items */}</nav>;
}`,
    },
  },

  'platform-chassis': {
    id: 'platform-chassis',
    name: 'Platform Chassis',
    category: 'Navigation',
    description: 'Interactive frame simulator reproducing native iOS, Android, Windows, and macOS window geometries.',
    guidelines: 'Use Platform Chassis to preview and test components under pixel-exact native OS frames and window chrome.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Chassis Simulator',
    dos: [
      'Accurately replicate OS title bars, traffic lights, and home indicators.',
      'Allow live zooming and scaling of device viewport preview.',
    ],
    donts: [
      'Do not force chassis simulator on mobile viewport viewports where screen space is tight.',
    ],
    anatomy: [
      { name: 'Device Shell', role: 'Outer frame matching device bezel curvature.' },
      { name: 'Title Bar / Island', role: 'macOS traffic lights, Windows controls, or Dynamic Island.' },
      { name: 'Screen Canvas', role: 'Component rendering viewport.' },
    ],
    keyboard: [],
    motion: {
      duration: '--motion-normal (200ms)',
      easing: 'ease-out',
      description: 'Smooth frame transformation when toggling platforms.',
    },
    props: [
      { name: 'platform', type: "'web' | 'ios' | 'android' | 'macos' | 'windows'", defaultValue: "'web'", description: 'Target chassis platform.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Component to preview inside chassis.' },
    ],
    nativeProps: [
      { name: 'platform', type: 'string', defaultValue: "'ios'", description: 'Platform identifier.' },
    ],
    headlessHook: {
      name: 'usePlatform',
      description: 'Extracts platform metadata and geometry dimensions.',
      code: `import { usePlatform } from '@winplaybox/primitives';

export function ChassisPrimitive({ children }) {
  const { platform } = usePlatform();
  return <div className={\`chassis-\${platform}\`}>{children}</div>;
}`,
    },
  },

  'list-view': {
    id: 'list-view',
    name: 'List View',
    category: 'Data Display',
    description: 'Universal virtualized list component engineered with token-aware divider lines, built-in pull-to-refresh spinners, and flexible empty state fallbacks across Web and Native.',
    guidelines: 'Use ListView for large or dynamic collections of structured records, feeds, transactions, and search results where responsive virtualization and pull-to-refresh enhance UX.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/feed/',
    waiPattern: 'Feed & List Pattern',
    dos: [
      'Provide unique and stable keys using keyExtractor or record identifiers.',
      'Enable divided to visually separate records using Spectra subtle border tokens.',
      'Always supply emptyText or emptyState for zero-result states.',
    ],
    donts: [
      'Do not nest vertical ListViews inside non-virtualized ScrollViews without fixed heights.',
      'Avoid placing heavy synchronous calculations inside renderItem.',
    ],
    anatomy: [
      { name: 'Root Container', role: 'Bounded scrollable container with overflow management and token borders.' },
      { name: 'Refresh Banner', role: 'Theme-synchronized pull-to-refresh spinner with polite ARIA live announcement.' },
      { name: 'Item Rows', role: 'Individual list item cards or rows with accessible listitem semantics.' },
      { name: 'Dividers', role: '1px hairline separators utilizing --color-border-subtle.' },
      { name: 'Empty State', role: 'Centered card rendered when record count is zero.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Moves focus into interactive items in the list.' },
      { key: 'Page Up / Page Down', description: 'Scrolls viewport by one page unit.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-in-out',
      description: 'Smooth fade transitions on pull-to-refresh status changes.',
    },
    props: [
      { name: 'data', type: 'readonly T[]', defaultValue: '[]', description: 'Array of data items to render.' },
      { name: 'renderItem', type: '(item: T, index: number) => ReactNode', defaultValue: 'undefined', description: 'Render callback for each item.' },
      { name: 'divided', type: 'boolean', defaultValue: 'true', description: 'Automatically inserts 1px theme dividers.' },
      { name: 'refreshing', type: 'boolean', defaultValue: 'false', description: 'Active pull-to-refresh indicator status.' },
      { name: 'onRefresh', type: '() => void', defaultValue: 'undefined', description: 'Pull-to-refresh callback.' },
      { name: 'emptyText', type: 'string', defaultValue: "'No items found'", description: 'Fallback text when data array is empty.' },
    ],
    nativeProps: [
      { name: 'data', type: 'Readonly<ArrayLike<T>>', defaultValue: 'undefined', description: 'Native FlatList dataset.' },
      { name: 'renderItem', type: 'ListRenderItem<T>', defaultValue: 'undefined', description: 'Native row renderer.' },
      { name: 'divided', type: 'boolean', defaultValue: 'true', description: 'Native theme border hairline separator.' },
      { name: 'refreshing', type: 'boolean', defaultValue: 'false', description: 'Native RefreshControl active state.' },
      { name: 'onRefresh', type: '() => void', defaultValue: 'undefined', description: 'Native pull-to-refresh callback.' },
    ],
    headlessHook: {
      name: 'useListNavigation',
      description: 'Enables keyboard arrow-key navigation and roving tabindex across list rows.',
      code: `import { useListNavigation } from '@winplaybox/primitives';

export function CustomListFeed({ items }) {
  const { activeIndex, getItemProps } = useListNavigation(items.length);
  return items.map((item, idx) => <div key={idx} {...getItemProps(idx)}>{item.name}</div>);
}`,
    },
  },

  'date-picker': {
    id: 'date-picker',
    name: 'Date Picker',
    category: 'Form',
    description: 'Cross-platform date and time input control with interactive calendar popover on Web, native OS dialogs on Android, modal pickers on iOS, and zero emoji vector icons.',
    guidelines: 'Use DatePicker for forms, scheduling, booking, filters, and deadlines. Provide clear date formatting that conforms to user locale expectations.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    waiPattern: 'Combobox & Dialog Pattern',
    dos: [
      'Provide clear label and placeholder guidance indicating expected date format.',
      'Enable clearable on optional dates to allow users to reset their selection.',
      'Use minDate and maxDate to prevent invalid out-of-range selection.',
    ],
    donts: [
      'Do not rely solely on color to communicate invalid dates; use assistive error messages.',
      'Never omit accessible labels on date picker trigger elements.',
    ],
    anatomy: [
      { name: 'Trigger Input', role: 'Accessible combobox showing selected date text with calendar vector icon.' },
      { name: 'Calendar Popover', role: 'Accessible monthly grid dialog with month and year navigation.' },
      { name: 'Clear Action', role: 'Optional icon button to immediately reset selected date.' },
      { name: 'Helper / Error Row', role: 'Semantic status text rendered beneath the input.' },
    ],
    keyboard: [
      { key: 'Enter / Space / Down Arrow', description: 'Opens the date picker dialog popover.' },
      { key: 'Escape', description: 'Closes the calendar dialog without modifying value.' },
      { key: 'Tab', description: 'Navigates focus within calendar days and navigation controls.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Subtle fade-in and scale elevation on calendar popover open.',
    },
    props: [
      { name: 'value', type: 'Date', defaultValue: 'undefined', description: 'Controlled date value.' },
      { name: 'defaultValue', type: 'Date', defaultValue: 'undefined', description: 'Uncontrolled initial date.' },
      { name: 'onChange', type: '(date?: Date) => void', defaultValue: 'undefined', description: 'Selection callback.' },
      { name: 'placeholder', type: 'string', defaultValue: "'Select date...'", description: 'Placeholder label text.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Form field label.' },
      { name: 'clearable', type: 'boolean', defaultValue: 'true', description: 'Allows clearing selected date.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Input height and padding scale.' },
    ],
    nativeProps: [
      { name: 'value', type: 'Date', defaultValue: 'undefined', description: 'Native selected date.' },
      { name: 'onChange', type: '(date?: Date) => void', defaultValue: 'undefined', description: 'Native selection callback.' },
      { name: 'minDate', type: 'Date', defaultValue: 'undefined', description: 'Minimum selectable date.' },
      { name: 'maxDate', type: 'Date', defaultValue: 'undefined', description: 'Maximum selectable date.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Seamlessly synchronizes controlled and uncontrolled Date states.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CustomDateInput({ value, defaultValue, onChange }) {
  const [date, setDate] = useControllableState({ value, defaultValue, onChange });
  return <button onClick={() => setDate(new Date())}>{date ? date.toDateString() : 'Pick'}</button>;
}`,
    },
  },

  'web-view-box': {
    id: 'web-view-box',
    name: 'Web View Box',
    category: 'Surfaces',
    description: 'Universal web page containment surface with animated loading progress indicator, styled error fallback card with retry, and zero-crash external browser fallback.',
    guidelines: 'Use WebViewBox to render sandboxed web previews, external documentation, in-app articles, or HTML content without bundling heavy C++ browser binaries into design system core.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
    waiPattern: 'Frame Landmark Pattern',
    dos: [
      'Always supply a descriptive title prop for screen readers.',
      'Enable showProgressBar to provide clear visual feedback during loading.',
      'Handle error states gracefully with retry and external browser options.',
    ],
    donts: [
      'Do not embed untrusted scripts without sandbox restrictions.',
      'Do not display unformatted raw URLs as the primary title.',
    ],
    anatomy: [
      { name: 'Containment Card', role: 'Rounded surface with Spectra border tokens and elevation.' },
      { name: 'Progress Bar', role: 'Smooth horizontal indicator tracking page load percentage.' },
      { name: 'Header Toolbar', role: 'Optional bar displaying page title, URL domain, and external launch action.' },
      { name: 'Web Engine', role: 'Sandboxed iframe (Web) or dynamic react-native-webview bridge (Native).' },
      { name: 'Error / Fallback Card', role: 'Styled notice card offering retry or external browser launch.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Navigates focus into frame controls or external link button.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'linear',
      description: 'Smooth progress bar animation tracking load progress.',
    },
    props: [
      { name: 'src', type: 'string', defaultValue: 'undefined', description: 'Target URL to render inside frame.' },
      { name: 'title', type: 'string', defaultValue: "'Web View'", description: 'Accessible frame title.' },
      { name: 'showHeader', type: 'boolean', defaultValue: 'false', description: 'Renders top address / toolbar.' },
      { name: 'height', type: 'number | string', defaultValue: "'500px'", description: 'Height of the frame container.' },
    ],
    nativeProps: [
      { name: 'source', type: '{ uri: string } | { html: string }', defaultValue: 'undefined', description: 'Native webview source object.' },
      { name: 'showProgressBar', type: 'boolean', defaultValue: 'true', description: 'Animated top progress bar.' },
      { name: 'onError', type: '(error: any) => void', defaultValue: 'undefined', description: 'Error event callback.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Provides synchronized dark/light color schemes for web view backgrounds.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function ThemedWebFrame({ url }) {
  const { colorScheme } = useTheme();
  return <WebViewBox src={\`\${url}?theme=\${colorScheme}\`} />;
}`,
    },
  },

  'copy-button': {
    id: 'copy-button',
    name: 'Copy Button',
    category: 'Inputs',
    description: 'One-click clipboard copying trigger with animated icon feedback transitions (copy to checkmark), configurable timeout, custom labels, and fallback support across all web and mobile platforms.',
    guidelines: 'Use CopyButton next to code blocks, tokens, shareable URLs, transaction hashes, and API keys. Provide clear visual confirmation when content is successfully copied.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    waiPattern: 'Button Pattern with Live Feedback',
    dos: [
      'Provide clear visual feedback (check icon or "Copied!" text) immediately after user clicks.',
      'Always supply a meaningful aria-label when rendering in icon-only mode.',
      'Keep copy confirmation state visible for 1.5 to 3 seconds before reverting.',
    ],
    donts: [
      'Do not rely on clipboard actions without visual success confirmation.',
      'Avoid placing copy buttons in crowded toolbars without adequate tap targets.',
    ],
    anatomy: [
      { name: 'Root Trigger', role: 'Accessible button container with hover, focus, and active states.' },
      { name: 'Copy Icon', role: 'Vector document copy icon displayed during idle state.' },
      { name: 'Copied Checkmark', role: 'Vector checkmark icon displayed during copied state.' },
      { name: 'Label', role: 'Optional text label updating to "Copied!" or custom confirmation.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Copies target text to system clipboard and triggers feedback.' },
      { key: 'Tab', description: 'Moves focus to the copy button.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Icon cross-fade and subtle bounce transition on state change.',
    },
    props: [
      { name: 'value', type: 'string', defaultValue: "''", description: 'Text to copy to clipboard.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Idle text label (renders icon-only if omitted).' },
      { name: 'copiedLabel', type: 'string', defaultValue: "'Copied!'", description: 'Label shown during copied state.' },
      { name: 'timeout', type: 'number', defaultValue: '2000', description: 'Duration in ms to show copied confirmation.' },
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost'", defaultValue: "'secondary'", description: 'Visual button variant.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Sizing scale.' },
      { name: 'onCopy', type: '() => void', defaultValue: 'undefined', description: 'Callback fired after successful copy.' },
    ],
    nativeProps: [
      { name: 'value', type: 'string', defaultValue: "''", description: 'Text value to copy to native clipboard.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Native text label.' },
      { name: 'copiedLabel', type: 'string', defaultValue: "'Copied!'", description: 'Label shown during copied state.' },
      { name: 'timeout', type: 'number', defaultValue: '2000', description: 'Feedback duration in ms.' },
      { name: 'onCopy', type: '() => void', defaultValue: 'undefined', description: 'Callback fired after copying.' },
    ],
    headlessHook: {
      name: 'useClipboard',
      description: 'Provides cross-platform clipboard copy mechanics and hasCopied state tracking.',
      code: `import { useClipboard } from '@winplaybox/primitives';

export function CustomCopy({ text }) {
  const { copy, hasCopied } = useClipboard({ timeout: 2000 });
  return (
    <button onClick={() => copy(text)}>
      {hasCopied ? 'Copied!' : 'Copy'}
    </button>
  );
}`,
    },
  },

  'menu-button': {
    id: 'menu-button',
    name: 'MenuButton',
    category: 'Inputs',
    description: 'MenuButton pairs a primary button label with a dropdown chevron indicator, toggling an accessible contextual options menu (Spectra UI Web pattern).',
    guidelines: 'Use MenuButton when an action button opens a list of choices rather than executing immediately. Keep the chevron aligned with the label text.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/',
    waiPattern: 'Menu Button Pattern',
    dos: [
      'Assign aria-haspopup="menu" and aria-expanded to the button container.',
      'Allow opening with ArrowDown, Enter, or Space keys.',
      'Close menu and restore focus to button on Escape or outside click.',
    ],
    donts: [
      'Do not confuse with SplitButton: MenuButton only opens a menu on click, it does not have a separate execute segment.',
      'Never omit accessible labels on menu options.',
    ],
    anatomy: [
      { name: 'Trigger Button', role: 'Accessible button with aria-haspopup="menu" and dynamic aria-expanded.' },
      { name: 'Chevron Indicator', role: 'Rotating vector chevron reflecting open/closed state.' },
      { name: 'Flyout Menu', role: 'Anchored dropdown container with role="menu" and role="menuitem" options.' },
    ],
    keyboard: [
      { key: 'Enter / Space / ArrowDown', description: 'Opens the flyout menu and moves focus inside.' },
      { key: 'Escape', description: 'Closes open menu and restores focus to the trigger button.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Chevron rotates 180 degrees smoothly while menu popover fades in.',
    },
    props: [
      { name: 'menuItems', type: 'MenuButtonItem[]', defaultValue: '[]', description: 'Array of clickable menu choices.' },
      { name: 'menuIcon', type: 'ReactNode', defaultValue: '<ChevronDownIcon />', description: 'Custom trailing chevron icon.' },
      { name: 'appearance', type: 'ButtonAppearance', defaultValue: "'secondary'", description: 'Visual appearance variant.' },
      { name: 'isOpen', type: 'boolean', defaultValue: 'undefined', description: 'Controlled open state.' },
      { name: 'onOpenChange', type: '(open: boolean) => void', defaultValue: 'undefined', description: 'Fired when open state toggles.' },
    ],
    nativeProps: [
      { name: 'options', type: 'string[]', defaultValue: '[]', description: 'Native action sheet options.' },
      { name: 'onSelect', type: '(index: number) => void', defaultValue: 'undefined', description: 'Selection callback.' },
    ],
    headlessHook: {
      name: 'useDisclosure',
      description: 'Controls popover open and close state with escape key support.',
      code: `import { useDisclosure } from '@winplaybox/primitives';

export function CustomMenuButton() {
  const { isOpen, onToggle } = useDisclosure();
  return <button aria-expanded={isOpen} onClick={onToggle}>Menu</button>;
}`,
    },
  },

  'toggle-button': {
    id: 'toggle-button',
    name: 'ToggleButton',
    category: 'Inputs',
    description: 'ToggleButton is a two-state action button with aria-pressed semantics that stays visually engaged when active (Spectra UI Web pattern).',
    guidelines: 'Use ToggleButton for persistent binary states like Mute, Pin, Favorite, or Underline formatting. Do not use for immediate single-click actions.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    waiPattern: 'Toggle Button Pattern',
    dos: [
      'Always reflect checked state via aria-pressed="true" or "false".',
      'Provide clear active visual feedback (elevated contrast or brand background).',
      'Support keyboard activation with Space and Enter.',
    ],
    donts: [
      'Do not use ToggleButton for form checkboxes that require submit forms—use Checkbox.',
      'Never change the button text between states unless the meaning is ambiguous.',
    ],
    anatomy: [
      { name: 'Toggle Root', role: 'Semantic button with dynamic aria-pressed="true|false".' },
      { name: 'Icon Slot', role: 'Optional vector icon reflecting bookmark, pin, or formatting.' },
      { name: 'Label Slot', role: 'Consistent action label text.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Toggles between pressed (active) and unpressed states.' },
      { key: 'Tab', description: 'Moves focus to the toggle button.' },
    ],
    motion: {
      duration: '--motion-instant (80ms)',
      easing: 'ease-out',
      description: 'Instant background transition and subtle inset shadow when toggled on.',
    },
    props: [
      { name: 'checked', type: 'boolean', defaultValue: 'undefined', description: 'Controlled pressed state.' },
      { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Uncontrolled initial state.' },
      { name: 'onToggle', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Callback fired on toggle change.' },
      { name: 'appearance', type: 'ButtonAppearance', defaultValue: "'secondary'", description: 'Visual appearance variant.' },
    ],
    nativeProps: [
      { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Native pressed state.' },
      { name: 'onToggle', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Native toggle callback.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Manages controlled vs uncontrolled checked state.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CustomToggle({ checked, defaultChecked, onToggle }) {
  const [val, setVal] = useControllableState({ value: checked, defaultValue: defaultChecked, onChange: onToggle });
  return <button aria-pressed={val} onClick={() => setVal(!val)}>Toggle</button>;
}`,
    },
  },

  field: {
    id: 'field',
    name: 'Field',
    category: 'Inputs',
    description: 'Field pairs form inputs with an accessible label, validation messages, and optional helper text, guaranteeing correct ARIA associations (aria-describedby, aria-errormessage, aria-required).',
    guidelines: 'Always wrap inputs in a Field to provide structured context, required indicators, and real-time validation error messaging without manual ID mapping.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
    waiPattern: 'Form Landmark & Description Pattern',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Use Field to keep labels and validation messages programmatically linked to inputs.',
      'Provide clear, actionable error messages describing how to resolve invalid input.',
      'Set required on the Field to render an accessible asterisk and announce aria-required="true".',
    ],
    donts: [
      'Do not rely solely on border color to communicate error states—always include a visible message.',
      'Never duplicate label IDs across multiple fields on the same page.',
    ],
    anatomy: [
      { name: 'Field Container', role: 'Wrapper establishing vertical stack layout and ARIA scope.' },
      { name: 'Label', role: 'Accessible label text with optional required asterisk indicator.' },
      { name: 'Control Slot', role: 'Child input element (TextInput, Select, Slider, etc.).' },
      { name: 'Helper / Error Text', role: 'Status message with role="alert" when invalid.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Moves focus into the child input control.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
      description: 'Validation messages fade and slide vertically into place.',
    },
    props: [
      { name: 'label', type: 'ReactNode', defaultValue: 'undefined', description: 'Label text or node.' },
      { name: 'validationState', type: "'error' | 'success' | 'warning' | 'none'", defaultValue: "'none'", description: 'Current validation status.' },
      { name: 'validationMessage', type: 'ReactNode', defaultValue: 'undefined', description: 'Error or helper message.' },
      { name: 'hint', type: 'ReactNode', defaultValue: 'undefined', description: 'Optional helper text.' },
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Marks input as mandatory.' },
    ],
    nativeProps: [
      { name: 'label', type: 'string', defaultValue: "''", description: 'Native label string.' },
      { name: 'error', type: 'string', defaultValue: 'undefined', description: 'Native error text.' },
    ],
    headlessHook: {
      name: 'useField',
      description: 'Generates correlated IDs for label, input, and description elements.',
      code: `import { useField } from '@winplaybox/primitives';\n\nexport function CustomField({ label, children }) {\n  const { labelProps, inputProps, descriptionProps } = useField();\n  return <div><label {...labelProps}>{label}</label>{children}</div>;\n}`,
    },
  },

  'info-label': {
    id: 'info-label',
    name: 'InfoLabel',
    category: 'Inputs',
    description: 'InfoLabel pairs a form field label with an authentic vector info icon button that triggers an accessible tooltip or popover explaining complex fields or legal guidelines.',
    guidelines: 'Use InfoLabel when form inputs require supplementary context without cluttering the main layout. Ensure the info trigger is accessible via keyboard.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/',
    waiPattern: 'Tooltip & Disclosure Pattern',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Use InfoLabel for optional clarifying explanations, terminology definitions, or format rules.',
      'Ensure the info trigger button has an accessible aria-label (e.g. aria-label="More information").',
    ],
    donts: [
      'Do not place critical instructions exclusively in the info popover (some users will not click it).',
      'Never omit keyboard focusability on the info button trigger.',
    ],
    anatomy: [
      { name: 'Label Text', role: 'Primary form field label.' },
      { name: 'Info Button', role: 'Accessible trigger with vector Info icon opening tooltip/popover.' },
      { name: 'Popover Content', role: 'Explanatory card anchored to the info trigger.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Focuses the info button trigger.' },
      { key: 'Enter / Space', description: 'Opens the info popover.' },
      { key: 'Escape', description: 'Closes the info popover and returns focus to trigger.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Info card scales and fades into position with spring transition.',
    },
    props: [
      { name: 'info', type: 'ReactNode', defaultValue: 'undefined', description: 'Content rendered inside the info popover.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Label text node.' },
    ],
    nativeProps: [
      { name: 'info', type: 'string', defaultValue: "''", description: 'Native info modal text.' },
    ],
    headlessHook: {
      name: 'useTooltip',
      description: 'Manages popover disclosure state and keyboard dismissal.',
      code: `import { useTooltip } from '@winplaybox/primitives';\n\nexport function CustomInfoLabel() { return <span>Label <button>?</button></span>; }`,
    },
  },

  label: {
    id: 'label',
    name: 'Label',
    category: 'Inputs',
    description: 'Label gives a name to an associated form control or input. It enforces required asterisks, disabled opacity, and sizing scales.',
    guidelines: 'Always connect labels to inputs using htmlFor or nesting. Never use placeholder text as a substitute for a visible label.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/',
    waiPattern: 'Accessible Names and Descriptions',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Provide concise, descriptive labels for every interactive input.',
      'Include a visible asterisk (*) when a field is required.',
    ],
    donts: [
      'Never hide labels visually unless an accessible aria-label is provided on the control.',
    ],
    anatomy: [
      { name: 'Label (<label>)', role: 'Accessible HTML label linked via htmlFor.' },
      { name: 'Asterisk', role: 'Semantic indicator with aria-hidden="true".' },
    ],
    keyboard: [
      { key: 'Click', description: 'Clicking the label transfers keyboard focus to the input.' },
    ],
    motion: {
      duration: '--motion-instant (0ms)',
      easing: 'linear',
      description: 'Static typography element without motion.',
    },
    props: [
      { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Shows required asterisk.' },
      { name: 'size', type: "'small' | 'medium' | 'large'", defaultValue: "'medium'", description: 'Typography scale.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Applies muted text color.' },
    ],
    nativeProps: [
      { name: 'children', type: 'string', defaultValue: "''", description: 'Native Text label.' },
    ],
    headlessHook: {
      name: 'useLabel',
      description: 'Links label element to target input ID.',
      code: `export function CustomLabel() { return <label>Name</label>; }`,
    },
  },

  persona: {
    id: 'persona',
    name: 'Persona',
    category: 'Data Display',
    description: 'Persona visualizes people or agents by presenting their avatar, online presence badge, primary display name, secondary role, and tertiary activity status.',
    guidelines: 'Use Persona in profile cards, comment threads, assignment pickers, and contact lists where identity context is essential.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
    waiPattern: 'Persona & Identity Presentation',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Always provide both avatar and name to guarantee accessibility when images fail to load.',
      'Use PresenceBadge to communicate real-time availability (Available, Busy, Away, Offline).',
    ],
    donts: [
      'Do not truncate primary names when space is available.',
    ],
    anatomy: [
      { name: 'Avatar', role: 'User graphic or authentic initials badge.' },
      { name: 'Presence Badge', role: 'Vector status badge (green, red, yellow).' },
      { name: 'Primary Text', role: 'Display name rendered in Inter SemiBold.' },
      { name: 'Secondary Text', role: 'Job title or department in muted text.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Focuses persona when interactive (in contact lists).' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Presence badge pulses on status transition.',
    },
    props: [
      { name: 'name', type: 'string', defaultValue: "''", description: 'Full user name.' },
      { name: 'secondaryText', type: 'string', defaultValue: "''", description: 'Title or role.' },
      { name: 'presence', type: "'available' | 'busy' | 'away' | 'dnd' | 'offline'", defaultValue: "'available'", description: 'Status state.' },
      { name: 'size', type: 'number', defaultValue: '40', description: 'Avatar pixel dimension.' },
    ],
    nativeProps: [
      { name: 'name', type: 'string', defaultValue: "''", description: 'Native name string.' },
    ],
    headlessHook: {
      name: 'usePersona',
      description: 'Extracts initials and accessibility descriptions.',
      code: `export function CustomPersona() { return <div>Avatar + Name</div>; }`,
    },
  },

  'search-box': {
    id: 'search-box',
    name: 'SearchBox',
    category: 'Inputs',
    description: 'SearchBox provides an input optimized for finding content, equipped with a leading search icon, clear button, and keyboard shortcuts.',
    guidelines: 'Include an accessible clear button that appears when text is typed. Support Escape key to clear search queries.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/searchbox/',
    waiPattern: 'Searchbox Pattern',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Provide a leading magnifying glass vector icon establishing immediate recognition.',
      'Show an accessible clear button when input value is not empty.',
    ],
    donts: [
      'Never trigger destructive searches on every keystroke without debouncing.',
    ],
    anatomy: [
      { name: 'Search Icon', role: 'Authentic vector search glyph with aria-hidden="true".' },
      { name: 'Input (<input type="search">)', role: 'HTML search input with native search semantics.' },
      { name: 'Clear Button', role: 'Accessible dismiss button with aria-label="Clear search".' },
    ],
    keyboard: [
      { key: 'Enter', description: 'Submits or executes the search query.' },
      { key: 'Escape', description: 'Clears active search text.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Clear button fades into view when text is entered.',
    },
    props: [
      { name: 'placeholder', type: 'string', defaultValue: "'Search...'", description: 'Input placeholder.' },
      { name: 'value', type: 'string', defaultValue: 'undefined', description: 'Controlled search text.' },
      { name: 'onChange', type: '(e: any) => void', defaultValue: 'undefined', description: 'Change callback.' },
    ],
    nativeProps: [
      { name: 'placeholder', type: 'string', defaultValue: "'Search...'", description: 'Native placeholder.' },
    ],
    headlessHook: {
      name: 'useSearchBox',
      description: 'Manages clear button disclosure and query state.',
      code: `export function CustomSearch() { return <input type="search" />; }`,
    },
  },

  'spin-button': {
    id: 'spin-button',
    name: 'Spin Button',
    category: 'Inputs',
    description: 'SpinButton (NumberField) lets people adjust numeric values in incremental steps using step buttons or keyboard Up/Down arrow keys.',
    guidelines: 'Always define reasonable min, max, and step increments. Support direct typing as well as increment/decrement buttons.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/',
    waiPattern: 'Spinbutton Pattern',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Support Up/Down arrow keys and PageUp/PageDown for larger step leaps.',
      'Announce aria-valuenow, aria-valuemin, and aria-valuemax to assistive technology.',
    ],
    donts: [
      'Do not allow values outside min/max range unless explicitly configured.',
    ],
    anatomy: [
      { name: 'Numeric Input', role: 'Input element with role="spinbutton".' },
      { name: 'Increment Button', role: 'Button increasing value by step.' },
      { name: 'Decrement Button', role: 'Button decreasing value by step.' },
    ],
    keyboard: [
      { key: 'ArrowUp / ArrowDown', description: 'Increments or decrements value by step.' },
      { key: 'PageUp / PageDown', description: 'Increments or decrements by large step (e.g. 10).' },
    ],
    motion: {
      duration: '--motion-fast (100ms)',
      easing: 'ease-out',
      description: 'Chevron buttons display tactile press feedback.',
    },
    props: [
      { name: 'value', type: 'number', defaultValue: '0', description: 'Current numeric value.' },
      { name: 'min', type: 'number', defaultValue: '0', description: 'Minimum allowed value.' },
      { name: 'max', type: 'number', defaultValue: '100', description: 'Maximum allowed value.' },
      { name: 'step', type: 'number', defaultValue: '1', description: 'Increment step size.' },
    ],
    nativeProps: [
      { name: 'value', type: 'number', defaultValue: '0', description: 'Native numeric value.' },
    ],
    headlessHook: {
      name: 'useSpinButton',
      description: 'Implements keyboard arrow increments and bounds clamping.',
      code: `export function CustomSpin() { return <input type="number" />; }`,
    },
  },

  'status-indicator': {
    id: 'status-indicator',
    name: 'Status Indicator',
    category: 'Data Display',
    description: 'StatusIndicator provides an authentic vector status beacon or live pulsing dot communicating availability (Available, Busy, Away, DND, Offline, Live).',
    guidelines: 'Use subtle animations for live processes (LiveIndicator); avoid flashing or strobe effects for accessibility.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/status/',
    waiPattern: 'Status Live Region Pattern',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Pair color indicators with text labels or accessible tooltips.',
      'Respect useReducedMotion by disabling pulse animations when active.',
    ],
    donts: [
      'Do not rely solely on color to differentiate statuses.',
    ],
    anatomy: [
      { name: 'Beacon Dot', role: 'Vector circle with status color and optional pulse ring.' },
      { name: 'Status Label', role: 'Descriptive text describing state.' },
    ],
    keyboard: [],
    motion: {
      duration: '--motion-slow (1200ms)',
      easing: 'ease-in-out',
      description: 'Smooth harmonic breathing pulse for live state.',
    },
    props: [
      { name: 'status', type: "'available' | 'busy' | 'away' | 'offline' | 'live'", defaultValue: "'available'", description: 'Status state.' },
      { name: 'pulse', type: 'boolean', defaultValue: 'false', description: 'Enables gentle animated pulse.' },
    ],
    nativeProps: [
      { name: 'status', type: 'string', defaultValue: "'available'", description: 'Native status.' },
    ],
    headlessHook: {
      name: 'useStatusIndicator',
      description: 'Maps status tokens to accessible labels.',
      code: `export function CustomStatus() { return <span>● Live</span>; }`,
    },
  },

  'swatch-picker': {
    id: 'swatch-picker',
    name: 'Swatch Picker',
    category: 'Inputs',
    description: 'SwatchPicker displays a grid of curated color swatches for choosing themes, tags, and palette values with keyboard navigation.',
    guidelines: 'Provide accessible color names via aria-label on every swatch (e.g. aria-label="Dark Slate Blue").',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
    waiPattern: 'Grid & Swatch Navigation',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Provide clear checkmark indicators over selected swatches.',
      'Allow 2D keyboard arrow navigation across swatch rows and columns.',
    ],
    donts: [
      'Never omit accessible names on color swatches.',
    ],
    anatomy: [
      { name: 'Grid Container', role: 'Role="grid" holding color items.' },
      { name: 'Swatch Cell', role: 'Role="gridcell" with color fill and focus ring.' },
    ],
    keyboard: [
      { key: 'Arrow Keys', description: 'Moves focus 2D between swatches.' },
      { key: 'Enter / Space', description: 'Selects active swatch color.' },
    ],
    motion: {
      duration: '--motion-fast (120ms)',
      easing: 'ease-out',
      description: 'Selected checkmark scales into view.',
    },
    props: [
      { name: 'colors', type: 'string[]', defaultValue: '[]', description: 'Array of hex color codes.' },
      { name: 'selectedColor', type: 'string', defaultValue: 'undefined', description: 'Active color.' },
      { name: 'onSelect', type: '(color: string) => void', defaultValue: 'undefined', description: 'Selection callback.' },
    ],
    nativeProps: [
      { name: 'colors', type: 'string[]', defaultValue: '[]', description: 'Native color array.' },
    ],
    headlessHook: {
      name: 'useSwatchPicker',
      description: 'Implements 2D arrow grid navigation and selection.',
      code: `export function CustomSwatch() { return <div>Grid of swatches</div>; }`,
    },
  },

  'tag-picker': {
    id: 'tag-picker',
    name: 'TagPicker',
    category: 'Inputs',
    description: 'TagPicker combines an autocomplete combobox with a tokenized Tag collection, allowing users to search, add, and remove tags dynamically.',
    guidelines: 'Support Backspace key to remove the last selected tag when input is empty. Ensure suggestions are announced.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    waiPattern: 'Combobox with Multiple Selection',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Allow users to type search queries and select suggested tags with Enter.',
      'Provide an X button on each tag pill with accessible dismissal label.',
    ],
    donts: [
      'Do not trap keyboard focus inside tag list without ability to jump to input.',
    ],
    anatomy: [
      { name: 'Container', role: 'Input wrapper holding selected tags and text field.' },
      { name: 'Tag Pills', role: 'Rendered removable tag components.' },
      { name: 'Search Input', role: 'Combobox input triggering suggestions dropdown.' },
      { name: 'Suggestions Menu', role: 'Listbox with filtered options.' },
    ],
    keyboard: [
      { key: 'Backspace', description: 'When search input is empty: removes the preceding tag.' },
      { key: 'ArrowDown', description: 'Opens suggestions menu and navigates options.' },
      { key: 'Enter', description: 'Selects focused option and converts it to a tag.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Tags expand smoothly into place when added.',
    },
    props: [
      { name: 'selectedTags', type: 'string[]', defaultValue: '[]', description: 'Current selected tags.' },
      { name: 'onTagsChange', type: '(tags: string[]) => void', defaultValue: 'undefined', description: 'Change callback.' },
    ],
    nativeProps: [
      { name: 'tags', type: 'string[]', defaultValue: '[]', description: 'Native tag collection.' },
    ],
    headlessHook: {
      name: 'useTagPicker',
      description: 'Manages tag selection, keyboard removal, and filtering.',
      code: `export function CustomTagPicker() { return <div>Tags + Input</div>; }`,
    },
  },

  'teaching-popover': {
    id: 'teaching-popover',
    name: 'Teaching Popover',
    category: 'Feedback',
    description: 'TeachingPopover guides users through new features, multi-step onboarding tours, and critical updates with high-contrast callouts and step indicators.',
    guidelines: 'Keep onboarding steps brief (1-3 steps maximum). Always provide an explicit "Dismiss" or "Skip" button.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    waiPattern: 'Accessible Tour Dialog Pattern',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Focus the primary action or close button when popover opens.',
      'Include a step counter (e.g. "Step 1 of 3") for multi-step tours.',
    ],
    donts: [
      'Never trigger multiple teaching popovers simultaneously.',
    ],
    anatomy: [
      { name: 'Anchor Beacon', role: 'Highlighted target element.' },
      { name: 'Popover Card', role: 'Dialog container anchored with pointer arrow.' },
      { name: 'Header & Title', role: 'Feature title and close button.' },
      { name: 'Action Bar', role: 'Next, Back, and Finish buttons.' },
    ],
    keyboard: [
      { key: 'Escape', description: 'Dismisses teaching popover.' },
      { key: 'Enter / Space', description: 'Advances to next step.' },
    ],
    motion: {
      duration: '--motion-normal (250ms)',
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      description: 'Spring elevation entrance with subtle target beacon ripple.',
    },
    props: [
      { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Controlled open state.' },
      { name: 'title', type: 'string', defaultValue: "''", description: 'Popover headline.' },
      { name: 'step', type: 'number', defaultValue: '1', description: 'Active step index.' },
      { name: 'totalSteps', type: 'number', defaultValue: '1', description: 'Total tour steps.' },
    ],
    nativeProps: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Native tour title.' },
    ],
    headlessHook: {
      name: 'useTeachingPopover',
      description: 'Manages step state and escape key dismissal.',
      code: `export function CustomTour() { return <div>Tour step</div>; }`,
    },
  },

  toolbar: {
    id: 'toolbar',
    name: 'Toolbar',
    category: 'Navigation',
    description: 'Toolbar organizes a collection of related commands and controls (buttons, toggles, dropdowns) into a unified container with roving tabindex.',
    guidelines: 'Use Left/Right arrow keys for roving keyboard navigation. Ensure individual items have a single Tab stop per toolbar.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
    waiPattern: 'Toolbar Pattern',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    figmaUrl: 'https://github.com/Winplaybox/spectra-ui',
    dos: [
      'Group related controls with vertical dividers.',
      'Use roving tabindex so users can tab past the toolbar with a single keystroke.',
    ],
    donts: [
      'Do not overload toolbars with unrelated navigation links.',
    ],
    anatomy: [
      { name: 'Toolbar (<div role="toolbar">)', role: 'Container with role="toolbar" and aria-label.' },
      { name: 'Control Items', role: 'Buttons, toggles, and dropdowns participating in roving focus.' },
      { name: 'Dividers', role: 'Visual vertical delimiters with aria-hidden="true".' },
    ],
    keyboard: [
      { key: 'Left / Right Arrow', description: 'Roves focus between toolbar controls.' },
      { key: 'Home / End', description: 'Jumps focus to first or last toolbar control.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Focus ring animates smoothly between adjacent toolbar items.',
    },
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Toolbar layout axis.' },
      { name: 'size', type: "'small' | 'medium' | 'large'", defaultValue: "'medium'", description: 'Density scale.' },
    ],
    nativeProps: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Native axis.' },
    ],
    headlessHook: {
      name: 'useToolbar',
      description: 'Implements roving tabindex and arrow key navigation.',
      code: `import { useToolbar } from '@winplaybox/primitives';\n\nexport function CustomToolbar() { return <div role="toolbar">Controls</div>; }`,
    },
  },

  overflow: {
    id: 'overflow',
    name: 'Overflow',
    category: 'Navigation',
    description: 'Overflow utility automatically detects when items exceed available container width and moves overflowing controls into a dropdown menu.',
    guidelines: 'Prioritize essential controls to remain visible; secondary controls collapse into the overflow menu.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/',
    waiPattern: 'Responsive Overflow Menu',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    dos: [
      'Preserve high-priority actions by assigning high overflow priority.',
      'Provide an accessible "More items" trigger button with chevron icon.',
    ],
    donts: [
      'Never drop items invisibly without providing an overflow menu trigger.',
    ],
    anatomy: [
      { name: 'Visible Container', role: 'Flex container rendering non-overflowed items.' },
      { name: 'Overflow Trigger', role: 'Button (...) revealing collapsed items in a menu.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Navigates through visible items to the overflow button.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'ease-out',
      description: 'Items transition smoothly into the overflow dropdown menu.',
    },
    props: [
      { name: 'minimumVisible', type: 'number', defaultValue: '1', description: 'Minimum items guaranteed to remain visible.' },
    ],
    nativeProps: [
      { name: 'minimumVisible', type: 'number', defaultValue: '1', description: 'Native minimum count.' },
    ],
    headlessHook: {
      name: 'useOverflow',
      description: 'Calculates element widths and visible vs overflow partition.',
      code: `export function CustomOverflow() { return <div>Items + More</div>; }`,
    },
  },

  image: {
    id: 'image',
    name: 'Image',
    category: 'Data Display',
    description: 'Image renders responsive graphics with built-in lazy loading, aspect ratio preservation, fallback skeletons, and error handling.',
    guidelines: 'Always provide meaningful alt text; for decorative images use alt="" and aria-hidden="true".',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
    waiPattern: 'Accessible Graphic & Media',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    dos: [
      'Use lazy loading (loading="lazy") to optimize initial page performance.',
      'Specify width, height, or aspectRatio to avoid Cumulative Layout Shift (CLS).',
    ],
    donts: [
      'Never omit the alt attribute on user-facing informative images.',
    ],
    anatomy: [
      { name: 'Image (<img>)', role: 'HTML image element with responsive srcSet.' },
      { name: 'Fallback Skeleton', role: 'Animated placeholder shown while loading.' },
    ],
    keyboard: [],
    motion: {
      duration: '--motion-normal (300ms)',
      easing: 'ease-out',
      description: 'Image fades smoothly in once loaded.',
    },
    props: [
      { name: 'src', type: 'string', defaultValue: "''", description: 'Image asset URL.' },
      { name: 'alt', type: 'string', defaultValue: "''", description: 'Accessible alternative text.' },
      { name: 'aspectRatio', type: 'string', defaultValue: 'undefined', description: 'CSS aspect-ratio.' },
      { name: 'fit', type: "'cover' | 'contain' | 'fill' | 'none'", defaultValue: "'cover'", description: 'Object fit mode.' },
    ],
    nativeProps: [
      { name: 'source', type: 'any', defaultValue: 'undefined', description: 'Native image source.' },
    ],
    headlessHook: {
      name: 'useImageLoaded',
      description: 'Detects image load complete state and errors.',
      code: `export function CustomImage() { return <img alt="" />; }`,
    },
  },

  portal: {
    id: 'portal',
    name: 'Portal',
    category: 'Surfaces',
    description: 'Portal renders children into a DOM node outside the current hierarchy, preventing CSS overflow: hidden clipping issues for dialogs and tooltips.',
    guidelines: 'Ensure focus management and keyboard tab ordering remain logical when portaling outside DOM tree.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    waiPattern: 'DOM Isolation Pattern',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    dos: [
      'Use Portal for floating tooltips, menus, and modal dialogs to bypass overflow clipping.',
      'Mount directly into document.body or a dedicated high-level #portal-root.',
    ],
    donts: [
      'Do not portal inline content that needs to flow within normal layout documents.',
    ],
    anatomy: [
      { name: 'Mount Target', role: 'DOM node receiving portaled children elements.' },
    ],
    keyboard: [],
    motion: {
      duration: '--motion-instant (0ms)',
      easing: 'linear',
      description: 'Instant DOM mounting without inherent animation.',
    },
    props: [
      { name: 'mountNode', type: 'HTMLElement', defaultValue: 'document.body', description: 'Target DOM container.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Portaled elements.' },
    ],
    nativeProps: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Native portal children.' },
    ],
    headlessHook: {
      name: 'usePortal',
      description: 'Creates and cleans up dynamic portal mount DOM nodes.',
      code: `import { createPortal } from 'react-dom';\nexport function CustomPortal({ children }) { return createPortal(children, document.body); }`,
    },
  },

  'time-picker': {
    id: 'time-picker',
    name: 'Time Picker',
    category: 'Inputs',
    description: 'TimePicker enables people to select hours, minutes, and AM/PM meridiem using dropdown listboxes or keyboard spin navigation.',
    guidelines: 'Support 12-hour and 24-hour time formats based on user locale preferences.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    waiPattern: 'Time Selection Combobox',
    storybookUrl: 'https://github.com/Winplaybox/spectra-ui/tree/main/packages/react',
    dos: [
      'Allow users to type times directly or pick from incremented dropdown options.',
      'Highlight current time or default suggested hour.',
    ],
    donts: [
      'Do not force 12-hour AM/PM formatting in locales where 24-hour time is standard.',
    ],
    anatomy: [
      { name: 'Time Input', role: 'Accessible input with clock vector icon.' },
      { name: 'Dropdown Menu', role: 'Listbox displaying time increments (e.g. 15 or 30 min).' },
    ],
    keyboard: [
      { key: 'ArrowDown', description: 'Opens time listbox.' },
      { key: 'Enter', description: 'Selects focused time option.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Time dropdown slides open smoothly.',
    },
    props: [
      { name: 'value', type: 'Date | string', defaultValue: 'undefined', description: 'Selected time.' },
      { name: 'format', type: "'12h' | '24h'", defaultValue: "'12h'", description: 'Hour display format.' },
      { name: 'stepMinutes', type: 'number', defaultValue: '30', description: 'Time increment in minutes.' },
    ],
    nativeProps: [
      { name: 'value', type: 'Date', defaultValue: 'undefined', description: 'Native time object.' },
    ],
    headlessHook: {
      name: 'useTimePicker',
      description: 'Generates time intervals and handles locale formatting.',
      code: `export function CustomTimePicker() { return <input type="time" />; }`,
    },
  },

  'card-header': {
    id: 'card-header',
    name: 'Card Header',
    category: 'Surfaces',
    description: 'CardHeader defines the top structural anchor of a Card container, providing visual hierarchy with title, description, avatar, and contextual action slots.',
    guidelines: 'Always place CardHeader at the top of a Card. Use CardTitle for the primary headline and CardDescription for supporting context.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/card/',
    waiPattern: 'Card Landmark Pattern',
    dos: [
      'Include concise title and description to communicate content purpose.',
      'Use leading avatar or icon to establish entity identity.',
      'Keep header actions to a maximum of one or two icon buttons.',
    ],
    donts: [
      'Do not place long paragraphs inside CardHeader—use CardContent instead.',
      'Do not repeat header titles in card body.',
    ],
    anatomy: [
      { name: 'Header Container (<CardHeader>)', role: 'Flex container aligning title, description, and action slot.' },
      { name: 'Title (<CardTitle>)', role: 'Semantic headline heading element.' },
      { name: 'Description (<CardDescription>)', role: 'Supporting metadata description text.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Navigates through focusable header actions.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Header layout remains stable without jarring layout shifts.',
    },
    props: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Header content including Title and Description.' },
      { name: 'className', type: 'string', defaultValue: "''", description: 'Custom CSS class.' },
    ],
    nativeProps: [
      { name: 'title', type: 'string', defaultValue: "''", description: 'Native header title.' },
    ],
    headlessHook: {
      name: 'useCardHeader',
      description: 'Calculates header layout and ARIA attributes.',
      code: `export function useCardHeader() { return { role: 'heading' }; }`,
    },
  },

  'card-footer': {
    id: 'card-footer',
    name: 'Card Footer',
    category: 'Surfaces',
    description: 'CardFooter anchors the bottom edge of a Card container, housing primary and secondary actions, status metadata, and timestamp stamps.',
    guidelines: 'Keep affirmative actions aligned to the right or expanded across full width depending on card layout.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/card/',
    waiPattern: 'Card Landmark Pattern',
    dos: [
      'Align primary action to the right in desktop layouts.',
      'Use secondary or outline button variants for non-primary actions.',
      'Maintain consistent padding with Card body.',
    ],
    donts: [
      'Do not place primary content or form inputs inside CardFooter.',
      'Do not overcrowd with more than two buttons.',
    ],
    anatomy: [
      { name: 'Footer Container (<CardFooter>)', role: 'Flex container aligning actions and metadata.' },
      { name: 'Action Slot', role: 'Container for primary and secondary action buttons.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Navigates sequentially through footer action buttons.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Footer buttons respond to hover and active transitions.',
    },
    props: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Action buttons or metadata.' },
      { name: 'className', type: 'string', defaultValue: "''", description: 'Custom CSS class.' },
    ],
    nativeProps: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Native footer content.' },
    ],
    headlessHook: {
      name: 'useCardFooter',
      description: 'Calculates action layout for Card bottom area.',
      code: `export function useCardFooter() { return { role: 'contentinfo' }; }`,
    },
  },

  'card-preview': {
    id: 'card-preview',
    name: 'Card Preview',
    category: 'Surfaces',
    description: 'CardPreview provides a dedicated media container for visual banners, screenshots, or interactive previews inside a Card.',
    guidelines: 'Place CardPreview above or below CardHeader according to visual design hierarchy.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/card/',
    waiPattern: 'Card Pattern',
    dos: [
      'Ensure media inside CardPreview has appropriate aspect ratio.',
      'Provide accessible alt text for preview images.',
    ],
    donts: [
      'Do not render text-heavy content inside CardPreview without proper contrast.',
    ],
    anatomy: [
      { name: 'Preview Wrapper (<CardPreview>)', role: 'Clipped container with rounded corners.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Focuses interactive preview media if clickable.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Smooth image zoom or overlay fade on card hover.',
    },
    props: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Image, video, or preview banner.' },
      { name: 'className', type: 'string', defaultValue: "''", description: 'Custom CSS class.' },
    ],
    nativeProps: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Native preview media.' },
    ],
    headlessHook: {
      name: 'useCardPreview',
      description: 'Calculates aspect ratio and media clipping.',
      code: `export function useCardPreview() { return { overflow: 'hidden' }; }`,
    },
  },

  carousel: {
    id: 'carousel',
    name: 'Carousel',
    category: 'Data Display',
    description: 'Carousel displays a sequential set of interactive slides or cards with previous/next controls, keyboard navigation, and pagination indicators.',
    guidelines: 'Use Carousel for high-impact visual banners, onboarding steps, or featured product spotlights.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/',
    waiPattern: 'Carousel Pattern',
    dos: [
      'Provide clear previous/next buttons and pause on hover for autoplaying carousels.',
      'Ensure screen readers announce active slide index.',
    ],
    donts: [
      'Do not auto-advance slides without allowing users to pause.',
      'Never hide essential navigation controls.',
    ],
    anatomy: [
      { name: 'Carousel Root (<Carousel>)', role: 'Accessible region container with aria-roledescription="carousel".' },
      { name: 'Slide Stage', role: 'Viewport displaying active slide.' },
      { name: 'Navigation Controls', role: 'Previous and Next trigger buttons.' },
      { name: 'Pagination Indicator (<CarouselNav>)', role: 'Tablist of slide dots.' },
    ],
    keyboard: [
      { key: 'ArrowLeft / ArrowRight', description: 'Navigates to previous/next slide.' },
      { key: 'Tab', description: 'Navigates through slide interactive contents.' },
    ],
    motion: {
      duration: '--motion-normal (250ms)',
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
      description: 'Smooth slide translation transition.',
    },
    props: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Slide elements.' },
      { name: 'autoPlay', type: 'boolean', defaultValue: 'false', description: 'Enables automatic slide advance.' },
      { name: 'interval', type: 'number', defaultValue: '5000', description: 'Advance delay in milliseconds.' },
    ],
    nativeProps: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Native slide elements.' },
    ],
    headlessHook: {
      name: 'useCarousel',
      description: 'Manages active slide index, timer, and pagination.',
      code: `export function useCarousel({ total = 1 }) { const [index, setIndex] = React.useState(0); return { index, setIndex }; }`,
    },
  },

  'carousel-nav': {
    id: 'carousel-nav',
    name: 'Carousel Nav',
    category: 'Data Display',
    description: 'CarouselNav provides interactive pagination indicator dots or progress bars for navigating and tracking carousel slide positions.',
    guidelines: 'Place CarouselNav centrally below or overlaid at the bottom of the carousel view.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/',
    waiPattern: 'Carousel Navigation Pattern',
    dos: [
      'Provide high-contrast active indicator distinguishing current slide.',
      'Ensure indicator touch targets meet platform minimums.',
    ],
    donts: [
      'Do not rely solely on color to indicate the active slide dot.',
    ],
    anatomy: [
      { name: 'Tablist Container', role: 'role="tablist" containing indicator tabs.' },
      { name: 'Slide Indicator Tab', role: 'role="tab" for each slide.' },
    ],
    keyboard: [
      { key: 'ArrowLeft / ArrowRight', description: 'Focuses adjacent slide indicator.' },
      { key: 'Enter / Space', description: 'Selects focused slide indicator.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Active dot expands smoothly with spring transition.',
    },
    props: [
      { name: 'total', type: 'number', defaultValue: '0', description: 'Total number of slides.' },
      { name: 'current', type: 'number', defaultValue: '0', description: 'Zero-based index of active slide.' },
      { name: 'onSelect', type: '(index: number) => void', defaultValue: 'undefined', description: 'Slide selection callback.' },
    ],
    nativeProps: [
      { name: 'total', type: 'number', defaultValue: '0', description: 'Native slide count.' },
      { name: 'current', type: 'number', defaultValue: '0', description: 'Native active index.' },
    ],
    headlessHook: {
      name: 'useCarouselNav',
      description: 'Handles indicator tablist roles and keyboard map.',
      code: `export function useCarouselNav() { return { role: 'tablist' }; }`,
    },
  },

  'interaction-tag': {
    id: 'interaction-tag',
    name: 'Interaction Tag',
    category: 'Data Display',
    description: 'InteractionTag provides a clickable, selectable tag with active focus states, selection outline, and optional dismiss action.',
    guidelines: 'Use InteractionTag for filter selectors, interactive topic tags, and dismissible chips.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    waiPattern: 'Interactive Tag / Toggle Pattern',
    dos: [
      'Show clear selection state when tag is active in filter mode.',
      'Provide accessible aria-label on dismiss button.',
    ],
    donts: [
      'Do not use tiny touch targets—maintain minimum 44pt/48dp on mobile.',
    ],
    anatomy: [
      { name: 'Tag Container', role: 'Focusable span or button.' },
      { name: 'Label', role: 'Tag text.' },
      { name: 'Close Button', role: 'Optional dismiss trigger.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Toggles tag selection state.' },
      { key: 'Delete / Backspace', description: 'Dismisses tag if closable.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Border and background transition on selection.',
    },
    props: [
      { name: 'selected', type: 'boolean', defaultValue: 'false', description: 'Selected active filter state.' },
      { name: 'variant', type: "'neutral' | 'primary' | 'success' | 'warning' | 'danger'", defaultValue: "'neutral'", description: 'Color palette.' },
      { name: 'closable', type: 'boolean', defaultValue: 'false', description: 'Displays remove button.' },
    ],
    nativeProps: [
      { name: 'selected', type: 'boolean', defaultValue: 'false', description: 'Native selection flag.' },
    ],
    headlessHook: {
      name: 'useInteractionTag',
      description: 'Handles selection toggle and dismissal callbacks.',
      code: `export function useInteractionTag() { return { role: 'button' }; }`,
    },
  },

  'tag-group': {
    id: 'tag-group',
    name: 'Tag Group',
    category: 'Data Display',
    description: 'TagGroup arranges related Tags or InteractionTags into a coherent, responsive horizontal flow with unified spacing and role="group".',
    guidelines: 'Use TagGroup to wrap multiple category tags, search facets, or selected filter pills.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
    waiPattern: 'Tag Group Pattern',
    dos: [
      'Wrap related tags in TagGroup to ensure proper flex wrapping.',
      'Provide aria-label describing the tag collection purpose.',
    ],
    donts: [
      'Do not mix unrelated action buttons inside a TagGroup.',
    ],
    anatomy: [
      { name: 'Group Container (<TagGroup>)', role: 'role="group" container with flex-wrap.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Navigates sequentially through interactive tags in group.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Items reflow smoothly on window resize.',
    },
    props: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Tag components.' },
      { name: 'className', type: 'string', defaultValue: "''", description: 'Custom CSS class.' },
    ],
    nativeProps: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Native tag elements.' },
    ],
    headlessHook: {
      name: 'useTagGroup',
      description: 'Manages tag group role and selection set.',
      code: `export function useTagGroup() { return { role: 'group' }; }`,
    },
  },

  'rating-display': {
    id: 'rating-display',
    name: 'Rating Display',
    category: 'Inputs',
    description: 'RatingDisplay renders an accessible, read-only star rating metric with numeric score representation and screen-reader announcements.',
    guidelines: 'Use RatingDisplay on customer reviews, product summaries, and performance evaluation metrics.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/meter/',
    waiPattern: 'Meter / Rating Pattern',
    dos: [
      'Always display the numeric value label alongside stars for precision.',
      'Provide descriptive aria-label announcing total stars and score.',
    ],
    donts: [
      'Do not use RatingDisplay where user input is expected—use Rating instead.',
    ],
    anatomy: [
      { name: 'Display Container (<RatingDisplay>)', role: 'role="img" container with aria-label.' },
      { name: 'Star Icons', role: 'Vector SVG stars filled according to score.' },
      { name: 'Score Label', role: 'Text showing score (e.g. 4.8 / 5.0).' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Bypasses non-interactive rating display in tab order.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Static presentation without distraction.',
    },
    props: [
      { name: 'value', type: 'number', defaultValue: '0', description: 'Rating score value.' },
      { name: 'max', type: 'number', defaultValue: '5', description: 'Maximum rating scale.' },
      { name: 'showValueLabel', type: 'boolean', defaultValue: 'true', description: 'Displays numeric score label.' },
    ],
    nativeProps: [
      { name: 'value', type: 'number', defaultValue: '0', description: 'Native rating score.' },
    ],
    headlessHook: {
      name: 'useRatingDisplay',
      description: 'Calculates fractional star fills and accessible announcements.',
      code: `export function useRatingDisplay({ value = 0, max = 5 }) { return { ariaLabel: \`\${value} of \${max} stars\` }; }`,
    },
  },

  'menu-grid': {
    id: 'menu-grid',
    name: 'Menu Grid',
    category: 'Navigation',
    description: 'MenuGrid arranges actionable menu choices, palette swatches, or application launcher tiles in an accessible multi-column grid inside a Menu.',
    guidelines: 'Use MenuGrid for color selection flyouts, app launcher tiles, or icon selection grids.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
    waiPattern: 'Grid Menu Pattern',
    dos: [
      'Use 2 to 4 columns for balanced desktop and flyout proportions.',
      'Ensure grid items have distinct labels and hover feedback.',
    ],
    donts: [
      'Do not overload with more than 16 items in a single flyout menu.',
    ],
    anatomy: [
      { name: 'Grid Container (<MenuGrid>)', role: 'role="menu" container with CSS grid layout.' },
      { name: 'Grid Items', role: 'Actionable menu tiles.' },
    ],
    keyboard: [
      { key: 'Arrow Keys', description: 'Navigates 2D grid of menu choices.' },
      { key: 'Enter / Space', description: 'Activates selected grid item.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Menu tile hover elevation transition.',
    },
    props: [
      { name: 'columns', type: 'number', defaultValue: '3', description: 'Number of grid columns.' },
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'Menu items or swatch buttons.' },
    ],
    nativeProps: [
      { name: 'columns', type: 'number', defaultValue: '3', description: 'Native grid column count.' },
    ],
    headlessHook: {
      name: 'useMenuGrid',
      description: 'Provides 2D arrow navigation across grid items.',
      code: `export function useMenuGrid() { return { role: 'menu' }; }`,
    },
  },

  'portal-mount': {
    id: 'portal-mount',
    name: 'Portal Mount',
    category: 'Surfaces',
    description: 'PortalMount and toMountNodeProps provide configuration helpers for targeting specific DOM containers for overlay rendering.',
    guidelines: 'Use PortalMount when tooltips, dialogs, or dropdowns must break out of clipping parent overflow containers.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Portal Mounting Landmark Pattern',
    dos: [
      'Mount overlays into a dedicated root container outside main scroll view.',
      'Clean up mount nodes when components unmount.',
    ],
    donts: [
      'Do not mount modals into hidden or aria-hidden ancestor containers.',
    ],
    anatomy: [
      { name: 'Portal Target', role: 'DOM element attached to body or dedicated root.' },
    ],
    keyboard: [
      { key: 'Escape', description: 'Closes mounted overlay and returns focus.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Overlay fades in smoothly upon mounting.',
    },
    props: [
      { name: 'element', type: 'HTMLElement | null', defaultValue: 'document.body', description: 'Target DOM element container.' },
    ],
    nativeProps: [
      { name: 'element', type: 'unknown', defaultValue: 'undefined', description: 'Native overlay container.' },
    ],
    headlessHook: {
      name: 'usePortalMount',
      description: 'Resolves valid DOM mount node safely across SSR.',
      code: `export function usePortalMount() { return typeof document !== 'undefined' ? document.body : null; }`,
    },
  },
};



import { EXTENDED_COMPONENTS_DATA } from './extendedComponentsData';

export interface ComponentMetadata {
  id: string;
  name: string;
  category: string;
  description: string;
  guidelines: string;
  waiUrl: string;
  waiPattern: string;
  dos: string[];
  donts: string[];
  anatomy: Array<{ name: string; role: string }>;
  keyboard: Array<{ key: string; description: string }>;
  motion: {
    duration: string;
    easing: string;
    description: string;
  };
  props: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
  nativeProps: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
  headlessHook: {
    name: string;
    description: string;
    code: string;
  };
  storybookUrl?: string;
  figmaUrl?: string;
  fluentUsageUrl?: string;
}

const CORE_COMPONENTS_DATA: Record<string, ComponentMetadata> = {
  button: {
    id: 'button',
    name: 'Button',
    category: 'Inputs',
    description: 'Buttons express what action will occur when the user interacts with them. Conforming to Microsoft Fluent 2 Web design patterns, the Button suite provides five distinct visual appearances (Primary, Secondary, Outline, Subtle, Transparent), discrete sizing scales, shape geometries, and composite action button extensions (CompoundButton, MenuButton, SplitButton, ToggleButton).',
    guidelines: 'Follow the single-primary rule: reserve the Primary appearance for the single most important action per view or dialog. Place affirmative/primary actions according to platform convention (right side in Web dialogs, next to cancel). Never wrap button label text across multiple lines—if secondary explanation is necessary, use a CompoundButton.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    waiPattern: 'Button Pattern (WAI-ARIA 1.2)',
    dos: [
      'Use action-oriented verbs for labels (e.g. "Save", "Submit", "Delete", "Deploy", "Export").',
      'Reserve the Primary filled appearance for the solitary main call-to-action on a screen.',
      'Use disabledFocusable to keep disabled buttons in keyboard tab order while announcing aria-disabled="true" to assistive technology.',
      'Use an authentic vector SVG icon to enhance recognition, ensuring icon-only buttons provide an explicit aria-label.',
      'Expand buttons to full-width block layout inside mobile viewports and bottom sheets.',
    ],
    donts: [
      'Never place multiple primary buttons in the same container or card (causes visual competition and choice paralysis).',
      'Never wrap button label text onto multiple lines; use CompoundButton if descriptive subtext is needed.',
      'Do not use generic emoji characters for button icons—always use authentic SVG vector icons from @winplaybox/icons.',
      'Never remove keyboard focus-visible outlines without providing an accessible alternative double-ring.',
      'Do not use Buttons for primary URL navigation where a link element (<a>) is semantically expected.',
    ],
    anatomy: [
      { name: 'Root (<button>)', role: 'Accessible HTML button with native role="button" and dual focus-visible ring.' },
      { name: 'Leading Icon Slot', role: 'Optional authentic vector SVG icon establishing immediate visual context.' },
      { name: 'Label Text', role: 'Action text rendered in single-line typography with no line breaks.' },
      { name: 'Trailing Icon / Chevron', role: 'Optional trailing icon or dropdown chevron indicator.' },
      { name: 'Loading Spinner', role: 'Accessible animated indicator replacing or preceding text with aria-busy="true".' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Triggers the button onClick action callback.' },
      { key: 'Tab', description: 'Moves focus to the button in sequential document order.' },
      { key: 'ArrowDown', description: 'On MenuButton or SplitButton chevron: opens the flyout options menu.' },
      { key: 'Escape', description: 'Closes any open flyout menu and returns focus to the button trigger.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
      description: 'Background and border transitions execute with responsive Fluent 2 curves and instant hover feedback.',
    },
    props: [
      { name: 'appearance', type: "'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent'", defaultValue: "'secondary'", description: 'Fluent 2 visual appearance hierarchy.' },
      { name: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'danger'", defaultValue: "'primary'", description: 'Classic appearance prop for backward compatibility.' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large'", defaultValue: "'md'", description: 'Density scale: small (24px), medium (32px), large (40px).' },
      { name: 'shape', type: "'rounded' | 'circular' | 'square'", defaultValue: "'rounded'", description: 'Corner geometry: rounded (6px), circular (pill), square (0px).' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables user interaction and applies muted opacity.' },
      { name: 'disabledFocusable', type: 'boolean', defaultValue: 'false', description: 'Keeps button focusable for screen readers while suppressing action (WCAG 2.1 AA).' },
      { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'Displays an animated spinner and sets aria-busy="true".' },
      { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Expands the button across the full parent container width.' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Authentic vector SVG icon from @winplaybox/icons.' },
      { name: 'iconPosition', type: "'left' | 'right'", defaultValue: "'left'", description: 'Placement of icon relative to label text.' },
    ],
    nativeProps: [
      { name: 'onPress', type: '(event: GestureResponderEvent) => void', defaultValue: 'undefined', description: 'Native touch event callback.' },
      { name: 'variant', type: "'filled' | 'tinted' | 'outline' | 'plain'", defaultValue: "'filled'", description: 'Native styling variant.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Native button sizing dimensions (44pt/48dp target).' },
      { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'Shows native ActivityIndicator.' },
      { name: 'hitSlop', type: 'Insets', defaultValue: '{ top: 8, bottom: 8, left: 8, right: 8 }', description: 'Expands touch target to meet 44pt Apple HIG and 48dp Android guidelines.' },
    ],
    headlessHook: {
      name: 'useButtonProps',
      description: 'Generates accessible ARIA attributes, keydown listeners (Enter/Space), and disabled state handling for custom buttons.',
      code: `import { useButtonProps } from '@winplaybox/primitives';

export function CustomButton({ onClick, disabled, children }) {
  const buttonProps = useButtonProps({ onClick, disabled });
  return <div {...buttonProps} className="my-custom-btn">{children}</div>;
}`,
    },
  },

  'text-input': {
    id: 'text-input',
    name: 'TextInput',
    category: 'Form',
    description: 'Text fields let users enter and edit text across forms, search bars, and dialogs with built-in states for focus, error, and validation.',
    guidelines: 'Always provide a clear, descriptive label. Use placeholder text only for formatting hints, not as an alternative to labels.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/textbox/',
    waiPattern: 'Textbox pattern',
    dos: [
      'Always associate a visible <label> with the input field for screen readers.',
      'Display inline error messages directly beneath the input when validation fails.',
      'Provide clear helper text or description when formatting rules apply (e.g. password rules).',
    ],
    donts: [
      'Never rely solely on placeholder text for the label (placeholders disappear upon typing).',
      'Do not block paste actions in form inputs (frustrates users and password managers).',
    ],
    anatomy: [
      { name: 'Label', role: 'Accessible label linked via htmlFor to input id.' },
      { name: 'Input Box', role: 'Native input with 2D border and focus-visible ring.' },
      { name: 'Leading Icon', role: 'Contextual icon such as search or user.' },
      { name: 'Trailing Action', role: 'Interactive control such as clear search or show password.' },
      { name: 'Helper / Error Text', role: 'Descriptive feedback linked via aria-describedby.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Focuses into the input field.' },
      { key: 'Typing', description: 'Updates text value and triggers onChange callback.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Border color and focus outline transitions activate swiftly upon focus.',
    },
    props: [
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Descriptive text label associated with the input.' },
      { name: 'placeholder', type: 'string', defaultValue: "''", description: 'Sample prompt or formatting hint.' },
      { name: 'error', type: 'string', defaultValue: 'undefined', description: 'Error message displayed beneath the input.' },
      { name: 'description', type: 'string', defaultValue: 'undefined', description: 'Helper text providing guidance before input.' },
      { name: 'leftIcon', type: 'ReactNode', defaultValue: 'undefined', description: 'Icon displayed on the left side (e.g. search).' },
      { name: 'rightIcon', type: 'ReactNode', defaultValue: 'undefined', description: 'Icon displayed on the right side (e.g. clear, eye).' },
    ],
    nativeProps: [
      { name: 'onChangeText', type: '(text: string) => void', defaultValue: 'undefined', description: 'Callback that is called when the text input changes.' },
      { name: 'keyboardType', type: 'KeyboardTypeOptions', defaultValue: "'default'", description: 'Determines which keyboard to open (email, numeric, etc.).' },
      { name: 'returnKeyType', type: 'ReturnKeyTypeOptions', defaultValue: "'done'", description: 'Determines how the return key should look.' },
      { name: 'accessibilityLabel', type: 'string', defaultValue: 'undefined', description: 'Spoken text for VoiceOver / TalkBack screen readers.' },
    ],
    headlessHook: {
      name: 'useId',
      description: 'Generates stable, SSR-safe unique IDs for linking labels (<label htmlFor>) and error messages (<span aria-describedby>) across Web & React Native.',
      code: `import { useId } from '@winplaybox/primitives';

export function CustomField({ label, error }) {
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
  },

  select: {
    id: 'select',
    name: 'Select',
    category: 'Form',
    description: 'Select menus allow users to choose one option from a list of predefined options in compact form surfaces.',
    guidelines: 'Use select when there are more than 4 options. For 2-4 binary or exclusive options, consider using Radio or segmented controls for faster visibility.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    waiPattern: 'Combobox pattern',
    dos: [
      'Order options logically (e.g. alphabetical, most frequent first, or chronological).',
      'Provide a clear default placeholder like "Select a country...".',
    ],
    donts: [
      'Do not use select for binary yes/no choices; use a Switch or Checkbox instead.',
    ],
    anatomy: [
      { name: 'Label', role: 'Accessible title for selection.' },
      { name: 'Select Box', role: 'Native or styled dropdown trigger.' },
      { name: 'Chevron', role: 'Down-arrow indicator.' },
    ],
    keyboard: [
      { key: 'Space / Enter / Down Arrow', description: 'Opens the select options menu.' },
      { key: 'Up / Down Arrows', description: 'Navigates through selectable items.' },
    ],
    motion: {
      duration: '--motion-subtle (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Dropdown options fade into view smoothly.',
    },
    props: [
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Label displayed above select field.' },
      { name: 'options', type: 'Array<{ value: string; label: string }>', defaultValue: '[]', description: 'List of selectable items.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables select menu interaction.' },
    ],
    nativeProps: [
      { name: 'onValueChange', type: '(itemValue: string) => void', defaultValue: 'undefined', description: 'Invoked when a picker item is selected.' },
      { name: 'selectedValue', type: 'string', defaultValue: 'undefined', description: 'Value matching value of one of the items.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Seamlessly synchronizes controlled vs uncontrolled state for dropdown selection across Web and Mobile Native.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CustomSelect({ value: controlled, defaultValue = '', onChange }) {
  const [value, setValue] = useControllableState({ value: controlled, defaultValue, onChange });
  return <button onClick={() => setValue('next')}>{value}</button>;
}`,
    },
  },

  checkbox: {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Form',
    description: 'Checkboxes allow users to select one or multiple items from a list, or toggle an independent option on or off.',
    guidelines: 'Use checkboxes for non-exclusive multi-selection, or for solitary confirmation checkboxes (e.g. Terms of Service agreements).',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
    waiPattern: 'Checkbox pattern',
    dos: [
      'Use positive phrasing for checkbox labels (e.g. "Send email updates" rather than "Do not send email updates").',
      'Support indeterminate state when parent checkbox has partially selected children.',
    ],
    donts: [
      'Do not use checkboxes for mutually exclusive single selections (use Radio instead).',
    ],
    anatomy: [
      { name: 'Control Box', role: '2D checkbox square containing the checkmark or minus indicator.' },
      { name: 'Label', role: 'Text describing the selectable option.' },
      { name: 'Description', role: 'Optional helper text linked via aria-describedby.' },
    ],
    keyboard: [
      { key: 'Space', description: 'Toggles the checkbox between checked and unchecked.' },
      { key: 'Tab', description: 'Focuses onto the checkbox.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Checkmark scales and fills instantly upon activation.',
    },
    props: [
      { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Controlled checked state.' },
      { name: 'indeterminate', type: 'boolean', defaultValue: 'false', description: 'Displays a minus icon indicating partial selection.' },
      { name: 'label', type: 'ReactNode', defaultValue: 'undefined', description: 'Text or node displayed beside checkbox.' },
      { name: 'description', type: 'ReactNode', defaultValue: 'undefined', description: 'Subtext giving extra guidance.' },
    ],
    nativeProps: [
      { name: 'onValueChange', type: '(checked: boolean) => void', defaultValue: 'undefined', description: 'Native toggle callback.' },
      { name: 'value', type: 'boolean', defaultValue: 'false', description: 'Current checked state.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Handles indeterminate and controlled/uncontrolled checked states with full keyboard toggling.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CustomCheckbox({ checked, defaultChecked, onChange }) {
  const [val, setVal] = useControllableState({ value: checked, defaultValue: defaultChecked, onChange });
  return <input type="checkbox" checked={val} onChange={(e) => setVal(e.target.checked)} />;
}`,
    },
  },

  radio: {
    id: 'radio',
    name: 'Radio',
    category: 'Form',
    description: 'Radio buttons allow users to select exactly one option from a set of mutually exclusive choices that are all visible.',
    guidelines: 'Use radio buttons when there are 2 to 7 mutually exclusive options that users must compare side-by-side.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
    waiPattern: 'Radio Group pattern',
    dos: [
      'Always have exactly one option selected by default in a radio group when required.',
      'Group related radios inside <RadioGroup role="radiogroup">.',
    ],
    donts: [
      'Do not use radio buttons if multiple choices can be selected simultaneously (use Checkbox).',
    ],
    anatomy: [
      { name: 'Radio Circle', role: 'Circular outer ring with centered dot when active.' },
      { name: 'Label', role: 'Text label describing the exclusive choice.' },
      { name: 'RadioGroup', role: 'Container establishing role="radiogroup" and keyboard arrow navigation.' },
    ],
    keyboard: [
      { key: 'Arrow Up / Left', description: 'Moves selection to the previous radio button in the group.' },
      { key: 'Arrow Down / Right', description: 'Moves selection to the next radio button in the group.' },
      { key: 'Space', description: 'Selects the currently focused radio button.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Radio dot scales into view crisply.',
    },
    props: [
      { name: 'value', type: 'string', defaultValue: 'undefined', description: 'Value of the radio item or active group value.' },
      { name: 'orientation', type: "'vertical' | 'horizontal'", defaultValue: "'vertical'", description: 'Layout orientation of options in group.' },
      { name: 'label', type: 'ReactNode', defaultValue: 'undefined', description: 'Option text.' },
    ],
    nativeProps: [
      { name: 'onValueChange', type: '(val: string) => void', defaultValue: 'undefined', description: 'Triggered upon selection.' },
      { name: 'accessibilityRole', type: "'radio'", defaultValue: "'radio'", description: 'Accessibility role for screen readers.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Synchronizes radio group selection and provides roving tabindex arrow navigation.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CustomRadioGroup({ value: cVal, defaultValue, onChange, children }) {
  const [active, setActive] = useControllableState({ value: cVal, defaultValue, onChange });
  return <div role="radiogroup">{children}</div>;
}`,
    },
  },

  switch: {
    id: 'switch',
    name: 'Switch',
    category: 'Form',
    description: 'Switches toggle the state of a single setting on or off immediately without requiring a Save or Submit step.',
    guidelines: 'Use switches for instant binary preference toggles (e.g. Dark Mode, Push Notifications, Auto-save).',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
    waiPattern: 'Switch pattern',
    dos: [
      'Use for preferences that take effect immediately upon toggle.',
      'Ensure clear active vs inactive states with high contrast ratio.',
    ],
    donts: [
      'Do not use inside a form where values are only saved after clicking "Submit" (use Checkbox instead).',
    ],
    anatomy: [
      { name: 'Track', role: 'Background pill container indicating on/off state via color.' },
      { name: 'Thumb', role: '2D circle translating along the track upon toggle.' },
      { name: 'Label', role: 'Descriptive text describing the setting.' },
    ],
    keyboard: [
      { key: 'Space / Enter', description: 'Toggles between on and off states.' },
    ],
    motion: {
      duration: '--motion-subtle (150ms)',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'The switch thumb glides smoothly along the track.',
    },
    props: [
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Label explaining the setting being toggled.' },
      { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Controlled boolean state.' },
      { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables the toggle switch.' },
    ],
    nativeProps: [
      { name: 'onValueChange', type: '(val: boolean) => void', defaultValue: 'undefined', description: 'Invoked when the user toggles the switch.' },
      { name: 'value', type: 'boolean', defaultValue: 'false', description: 'The value of the switch.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Manages instant binary boolean transitions with ARIA switch roles.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CustomSwitch({ checked, onChange }) {
  const [isOn, setIsOn] = useControllableState({ value: checked, defaultValue: false, onChange });
  return <button role="switch" aria-checked={isOn} onClick={() => setIsOn(!isOn)}>Toggle</button>;
}`,
    },
  },

  accordion: {
    id: 'accordion',
    name: 'Accordion',
    category: 'Data Display',
    description: 'An accordion groups sections of related content that can be opened and closed to reduce cognitive load.',
    guidelines: 'Use accordions to organize dense content like FAQs, product specs, or settings groups. Keep headers brief and descriptive. Never place information required to complete a primary task inside an accordion.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
    waiPattern: 'Accordion Pattern (Sections with Expand/Collapse Buttons)',
    dos: [
      'Keep header titles concise, descriptive, and scannable without ending periods.',
      'Use sentence-style capitalization for header titles.',
      'Ensure keyboard users can navigate headers using Arrow Up/Down and Home/End.',
      'Use collapsible=true when users should be allowed to close all panels.',
      'Maintain consistent expand icon placement (start or end) throughout an interface.',
    ],
    donts: [
      'Do not place critical information required to complete a primary task inside collapsed panels.',
      'Never cross-reference content across different collapsed panels.',
      'Avoid nesting an accordion inside another accordion.',
      'Do not use multiple contrasting icon placements in the same view.',
    ],
    anatomy: [
      { name: 'Accordion Root (<div>)', role: 'Root container managing expansion state and keyboard roving.' },
      { name: 'AccordionItem (<div>)', role: 'Individual section container binding header and panel by unique value.' },
      { name: 'AccordionHeader (<button>)', role: 'Interactive focusable button inside semantic heading with aria-expanded and aria-controls.' },
      { name: 'Expand Icon (<span>)', role: 'Chevron indicator rotating upon expansion (start or end position).' },
      { name: 'AccordionPanel (<div>)', role: 'Collapsible content region with role="region" and aria-labelledby.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Toggles expansion state of the focused accordion panel.' },
      { key: 'Down Arrow', description: 'Moves focus to the next accordion header.' },
      { key: 'Up Arrow', description: 'Moves focus to the previous accordion header.' },
      { key: 'Home', description: 'Moves focus to the first accordion header.' },
      { key: 'End', description: 'Moves focus to the last accordion header.' },
    ],
    motion: {
      duration: '--motion-subtle (150ms - 200ms)',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Smooth chevron rotation (0deg to 90deg or 180deg) and panel fade-in disclosure.',
    },
    props: [
      { name: 'multiple', type: 'boolean', defaultValue: 'false', description: 'Allows multiple accordion panels to be expanded simultaneously.' },
      { name: 'collapsible', type: 'boolean', defaultValue: 'true', description: 'Allows all panels to be closed when clicked.' },
      { name: 'size', type: "'small' | 'medium' | 'large' | 'extra-large'", defaultValue: "'medium'", description: 'Sizing scale across header padding, chevron, and typography.' },
      { name: 'expandIconPosition', type: "'start' | 'end'", defaultValue: "'start'", description: 'Position of the expand chevron: start (leading) or end (trailing).' },
      { name: 'openItems', type: 'string[]', defaultValue: 'undefined', description: 'Controlled array of expanded item values.' },
      { name: 'defaultOpenItems', type: 'string[]', defaultValue: '[]', description: 'Initial uncontrolled array of expanded item values.' },
      { name: 'onToggle', type: '(event, data) => void', defaultValue: 'undefined', description: 'Callback triggered when any item expands or collapses.' },
      { name: 'navigation', type: "'linear' | 'cycle' | 'none'", defaultValue: "'linear'", description: 'Keyboard arrow navigation mode across headers.' },
    ],
    nativeProps: [
      { name: 'multiple', type: 'boolean', defaultValue: 'false', description: 'Allows multiple accordion panels to be expanded simultaneously.' },
      { name: 'collapsible', type: 'boolean', defaultValue: 'true', description: 'Allows all panels to be closed.' },
      { name: 'openItems', type: 'string[]', defaultValue: 'undefined', description: 'Controlled array of expanded item values.' },
      { name: 'onToggle', type: '(event, data) => void', defaultValue: 'undefined', description: 'Callback triggered when an item expands or collapses.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Headless state synchronization managing controlled vs uncontrolled openItems state with optimal re-render isolation.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function useAccordionState({ openItems, defaultOpenItems, multiple, collapsible }) {
  const [expanded, setExpanded] = useControllableState({
    value: openItems,
    defaultValue: defaultOpenItems || [],
  });
  return { expanded, setExpanded };
}`,
    },
  },

  avatar: {
    id: 'avatar',
    name: 'Avatar',
    category: 'Data Display',
    description: 'An avatar represents a person, entity, or team using an image, initials, or fallback vector icon, enriched with real-time status presence indicators and active halos.',
    guidelines: 'Use circular avatars for individual humans, and square avatars for groups, spaces, or automated bots. Always supply the person or entity full name so screen readers announce identity and presence accurately.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/img/',
    waiPattern: 'Image with Accessible Status Announcement (role="img")',
    dos: [
      'Provide full entity names so fallback initials and screen reader announcements generate accurately.',
      'Use colorful="colorful" for rapid visual scanning across collaborator lists, tables, and comment threads.',
      'Pair presence indicators with accessible status text for screen reader users.',
      'Use AvatarGroup for rosters with automatic overflow counts.',
    ],
    donts: [
      'Do not rely solely on color to communicate critical status (always support aria-label and tooltips).',
      'Never omit alt or name attributes on non-decorative avatars.',
      'Avoid mixing square and circular shapes inconsistently in the same list.',
    ],
    anatomy: [
      { name: 'Avatar Root (<div>)', role: 'Outer container with role="img", aria-label, active halo, and size dimensions.' },
      { name: 'Inner Wrapper (<div>)', role: 'Clipped circular or rounded square backdrop holding background colors or image.' },
      { name: 'Image (<img>)', role: 'User portrait photo with automatic onerror fallback.' },
      { name: 'Initials (<span>)', role: 'Deterministic 1-2 character monogram derived from name.' },
      { name: 'Presence Badge (<span>)', role: 'Activity indicator dot with high-contrast border and out-of-office modifier.' },
      { name: 'Active Halo Ring', role: 'Outset border ring indicating speaking in audio call or live room status.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Moves focus to avatar when wrapped in an interactive button or link.' },
      { key: 'Enter / Space', description: 'Activates quick profile card or navigation when wrapped interactively.' },
    ],
    motion: {
      duration: '--motion-subtle (150ms - 200ms)',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Presence indicator badge transitions and active speaker halo scale smoothly without flicker.',
    },
    props: [
      { name: 'name', type: 'string', defaultValue: 'undefined', description: 'Full name used to extract initials fallback and colorful palette.' },
      { name: 'src', type: 'string', defaultValue: 'undefined', description: 'URL of the profile portrait image.' },
      { name: 'size', type: '16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128 | "xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '40', description: 'Discrete dimension scale in pixels or standard named aliases.' },
      { name: 'shape', type: "'circular' | 'circle' | 'square'", defaultValue: "'circular'", description: 'Visual silhouette: circular for people, square for bots and spaces.' },
      { name: 'color', type: "'neutral' | 'brand' | 'colorful' | AvatarNamedColor", defaultValue: "'neutral'", description: 'Color theme for initials: neutral, brand, or deterministic colorful palette.' },
      { name: 'status', type: "'available' | 'online' | 'busy' | 'away' | 'dnd' | 'out-of-office' | 'offline'", defaultValue: 'undefined', description: 'Real-time presence activity indicator badge.' },
      { name: 'outOfOffice', type: 'boolean', defaultValue: 'false', description: 'Modifies presence badge with purple out-of-office halo.' },
      { name: 'active', type: "'active' | 'inactive' | 'unset'", defaultValue: "'unset'", description: 'Active halo ring indicating speaking or live state.' },
      { name: 'activeAppearance', type: "'ring' | 'ring-shadow' | 'shadow'", defaultValue: "'ring'", description: 'Visual appearance of active halo.' },
      { name: 'initials', type: 'string', defaultValue: 'undefined', description: 'Explicit initials string override.' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Custom fallback vector icon.' },
      { name: 'badge', type: 'ReactNode', defaultValue: 'undefined', description: 'Custom status or notification badge slot.' },
    ],
    nativeProps: [
      { name: 'name', type: 'string', defaultValue: 'undefined', description: 'User name for initials.' },
      { name: 'src', type: 'string', defaultValue: 'undefined', description: 'Image URI source.' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", defaultValue: "'md'", description: 'Native sizing scale.' },
      { name: 'shape', type: "'circular' | 'square'", defaultValue: "'circular'", description: 'Native shape silhouette.' },
    ],
    headlessHook: {
      name: 'getInitials',
      description: 'Algorithm extracting clean 2-letter uppercase initials from full names.',
      code: `import { getInitials } from '@winplaybox/primitives';

const initials = getInitials('Josef Müller-Brockmann'); // 'JM'`,
    },
  },

  badge: {
    id: 'badge',
    name: 'Badge',
    category: 'Data Display',
    description: 'A badge communicates a status, category, count, or description associated with an element or context. They use short text, semantic color, and authentic vector icons for quick recognition.',
    guidelines: 'Use filled badges for primary or urgent status indicators. Use tint or outline badges for secondary metadata. Keep labels short (1-2 words). Never use emoji characters.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
    waiPattern: 'Status / Notification Indicator (role="status" or aria-label)',
    dos: [
      'Keep badge text concise (1-2 words or short numeric values) for quick scanning.',
      'Use CounterBadge with overflowCount (e.g. 99+) to prevent visual overflow in tight headers.',
      'Provide an aria-label on standalone dot badges so screen readers announce their meaning.',
      'Pair presence status badges with accessible names (e.g. "Available", "Away", "Do Not Disturb").',
    ],
    donts: [
      'Do not use badges as primary clickable buttons (use Button, Chip, or Tag for clickable actions).',
      'Never use emoji characters inside badges (always use authentic SVG vector icons).',
      'Avoid placing multiple conflicting badges adjacent to the same element.',
    ],
    anatomy: [
      { name: 'Badge Root (<span>)', role: 'Outer inline-flex container with clipping and geometry.' },
      { name: 'Dot Indicator (<span>)', role: 'Optional 6px circular dot indicator prefix.' },
      { name: 'Vector Icon Slot (<span>)', role: 'Leading or trailing authentic vector icon.' },
      { name: 'Label Content', role: 'Concise text label, status text, or numeric count.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Badges are non-interactive by default; receive focus only when wrapped in an interactive control.' },
    ],
    motion: {
      duration: '--motion-subtle (150ms)',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Color transitions and count updates cross-fade smoothly without layout shifting.',
    },
    props: [
      { name: 'appearance', type: "'filled' | 'ghost' | 'outline' | 'tint'", defaultValue: "'filled'", description: 'Visual appearance styling.' },
      { name: 'color', type: "'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning'", defaultValue: "'brand'", description: 'Semantic palette color.' },
      { name: 'shape', type: "'rounded' | 'circular' | 'square'", defaultValue: "'rounded'", description: 'Shape silhouette: rounded rect, pill/circle, or square.' },
      { name: 'size', type: "'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'", defaultValue: "'medium'", description: 'Discrete sizing scale from 6px dot to 32px badge.' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Authentic vector icon slot.' },
      { name: 'iconPosition', type: "'before' | 'after'", defaultValue: "'before'", description: 'Position of vector icon relative to children.' },
      { name: 'dot', type: 'boolean', defaultValue: 'false', description: 'Display standalone dot or dot prefix.' },
    ],
    nativeProps: [
      { name: 'variant', type: "'filled' | 'outline'", defaultValue: "'filled'", description: 'Native visual style.' },
      { name: 'color', type: 'string', defaultValue: "'brand'", description: 'Native palette color.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Provides theme tokens for badge color schemes and border radii.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function CustomBadge({ label }) {
  const { colorScheme } = useTheme();
  return <span className={colorScheme}>{label}</span>;
}`,
    },
  },

  list: {
    id: 'list',
    name: 'List',
    category: 'Data Display',
    description: 'Lists organize multiple items into continuous, vertical text and icon indexes for quick scanning and selection.',
    guidelines: 'Use lists to show collections of related items, navigation menus, or search results.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
    waiPattern: 'List pattern',
    dos: [
      'Use divided lines when list items have multi-line text or dense metadata.',
      'Include leading icons to facilitate rapid category recognition.',
    ],
    donts: [
      'Do not make non-interactive list items have hover effects that resemble clickable buttons.',
    ],
    anatomy: [
      { name: 'List (<List>)', role: 'Wrapper establishing list role.' },
      { name: 'Item (<ListItem>)', role: 'Individual row with click and hover states.' },
      { name: 'Icon (<ListItemIcon>)', role: 'Leading or trailing vector icon container.' },
      { name: 'Text (<ListItemText>)', role: 'Primary heading and secondary subtitle.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Tabs into interactive list items.' },
      { key: 'Enter', description: 'Activates selected list item.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Row selection and hover color transitions instantly.',
    },
    props: [
      { name: 'children', type: 'ReactNode', defaultValue: 'undefined', description: 'List items rendered inside container.' },
    ],
    nativeProps: [
      { name: 'divided', type: 'boolean', defaultValue: 'false', description: 'Renders native divider separator lines.' },
      { name: 'onPress', type: '(event: GestureResponderEvent) => void', defaultValue: 'undefined', description: 'Native row tap event.' },
    ],
    headlessHook: {
      name: 'useKeyboardNavigation',
      description: 'Implements roving tabindex and arrow key list item selection.',
      code: `import { useKeyboardNavigation } from '@winplaybox/primitives';

export function CustomList() {
  const { activeIndex, onKeyDown } = useKeyboardNavigation({ count: 5 });
  return <ul onKeyDown={onKeyDown}>...</ul>;
}`,
    },
  },

  tooltip: {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'Feedback',
    description: 'Tooltips display brief informative text when users hover, focus, or tap an interactive element.',
    guidelines: 'Use tooltips to explain icons or controls that have no visible text label.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/',
    waiPattern: 'Tooltip pattern',
    dos: [
      'Keep tooltip text concise (under 8 words).',
      'Make tooltips appear upon both mouse hover and keyboard focus.',
    ],
    donts: [
      'Do not put interactive links or buttons inside a tooltip (use a Popover instead).',
    ],
    anatomy: [
      { name: 'Trigger', role: 'Element that initiates the tooltip upon hover or focus.' },
      { name: 'Popup Box', role: 'Floating container with role="tooltip" and 2D border.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Focuses trigger element and displays tooltip.' },
      { key: 'Escape', description: 'Immediately hides the active tooltip.' },
    ],
    motion: {
      duration: '--motion-subtle (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Tooltip fades and translates subtly 4px into view.',
    },
    props: [
      { name: 'content', type: 'ReactNode', defaultValue: 'undefined', description: 'Message displayed inside tooltip.' },
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: 'Placement direction relative to target.' },
      { name: 'delay', type: 'number', defaultValue: '100', description: 'Hover delay in milliseconds before appearance.' },
    ],
    nativeProps: [
      { name: 'content', type: 'string', defaultValue: 'undefined', description: 'Tooltip message text.' },
      { name: 'placement', type: "'top' | 'bottom'", defaultValue: "'top'", description: 'Native position.' },
    ],
    headlessHook: {
      name: 'useOutsideClick',
      description: 'Automatically dismisses floating popovers and tooltips when clicking outside the boundary.',
      code: `import { useOutsideClick } from '@winplaybox/primitives';

export function CustomTooltip() {
  const ref = useOutsideClick(() => setVisible(false));
  return <div ref={ref}>Tooltip content</div>;
}`,
    },
  },

  tabs: {
    id: 'tabs',
    name: 'Tabs',
    category: 'Navigation',
    description: 'Tabs organize content across different screens or data views, allowing users to switch between related panels within the same context.',
    guidelines: 'Use tabs to separate logically distinct content areas without navigating away from the current page.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
    waiPattern: 'Tabs pattern',
    dos: [
      'Keep tab labels short and mutually exclusive.',
      'Support keyboard arrow navigation between tabs.',
    ],
    donts: [
      'Do not use tabs for sequential multi-step wizards (use a Stepper instead).',
    ],
    anatomy: [
      { name: 'TabList (<TabList>)', role: 'Container with role="tablist" managing keyboard focus.' },
      { name: 'Tab (<Tab>)', role: 'Accessible button with role="tab" and aria-selected.' },
      { name: 'TabPanels (<TabPanels>)', role: 'Container holding panels.' },
      { name: 'TabPanel (<TabPanel>)', role: 'Content panel with role="tabpanel" linked via aria-labelledby.' },
    ],
    keyboard: [
      { key: 'Arrow Left / Right', description: 'Navigates between horizontal tabs.' },
      { key: 'Home / End', description: 'Jumps directly to the first or last tab.' },
      { key: 'Enter / Space', description: 'Activates selected tab if manual selection mode is enabled.' },
    ],
    motion: {
      duration: '--motion-subtle (150ms)',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Active tab indicator bar slides smoothly to the active tab.',
    },
    props: [
      { name: 'variant', type: "'underline' | 'pills'", defaultValue: "'underline'", description: 'Visual style of the tab list.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Size of tab items.' },
      { name: 'value', type: 'string', defaultValue: 'undefined', description: 'Controlled active tab ID.' },
      { name: 'defaultValue', type: 'string', defaultValue: "''", description: 'Initial active tab ID.' },
    ],
    nativeProps: [
      { name: 'selectedIndex', type: 'number', defaultValue: '0', description: 'Active tab index.' },
      { name: 'onTabPress', type: '(index: number) => void', defaultValue: 'undefined', description: 'Callback upon tab tap.' },
    ],
    headlessHook: {
      name: 'useControllableState',
      description: 'Synchronizes active tab state with keyboard focus management and ARIA bindings.',
      code: `import { useControllableState } from '@winplaybox/primitives';

export function CustomTabs({ value: cVal, defaultValue = '1', onChange }) {
  const [active, setActive] = useControllableState({ value: cVal, defaultValue, onChange });
  return <div role="tablist">...</div>;
}`,
    },
  },

  card: {
    id: 'card',
    name: 'Card',
    category: 'Surfaces',
    description: 'Cards group related content, actions, and media into a unified surface container with distinct borders and elevations.',
    guidelines: 'Use cards to present summaries of entities that can be clicked to view more details.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/card/',
    waiPattern: 'Card pattern',
    dos: [
      'Group related pieces of information together logically inside one card.',
      'Use interactive cards with clear focus rings when the entire card is clickable.',
    ],
    donts: [
      'Do not overload cards with excessive nested interactions.',
    ],
    anatomy: [
      { name: 'Card (<Card>)', role: 'Surface container with 2D border and border-radius tokens.' },
      { name: 'Header', role: 'Title and optional trailing action.' },
      { name: 'Body', role: 'Main content and descriptions.' },
      { name: 'Footer', role: 'Actions, timestamps, or buttons.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Triggers primary action when card is marked interactive.' },
    ],
    motion: {
      duration: '--motion-subtle (150ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Hover borders and shadow elevation transition cleanly.',
    },
    props: [
      { name: 'variant', type: "'default' | 'bordered' | 'elevated'", defaultValue: "'default'", description: 'Surface appearance.' },
      { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Internal padding spacing.' },
      { name: 'interactive', type: 'boolean', defaultValue: 'false', description: 'Adds hover elevation and clickable focus ring.' },
    ],
    nativeProps: [
      { name: 'variant', type: "'default' | 'bordered' | 'elevated'", defaultValue: "'default'", description: 'Surface variant.' },
      { name: 'onPress', type: '(e: GestureResponderEvent) => void', defaultValue: 'undefined', description: 'Native tap handler.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Provides current theme tokens (colors.surface, colors.border) for custom card containers.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function CustomCard({ children }) {
  const { colorScheme } = useTheme();
  return <div className={\`card-\${colorScheme}\`}>{children}</div>;
}`,
    },
  },

  dialog: {
    id: 'dialog',
    name: 'Dialog',
    category: 'Overlay',
    description: 'Dialogs are modal windows that require users to interact before returning to the parent application, used for critical decisions.',
    guidelines: 'Use dialogs sparingly for interruptions that demand immediate attention (e.g. destructive confirmations). Always trap focus and support Escape to dismiss.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    waiPattern: 'Modal Dialog pattern',
    dos: [
      'Trap keyboard focus inside the dialog while open.',
      'Support the Escape key to close the dialog.',
      'Return focus to the triggering element when the dialog dismisses.',
    ],
    donts: [
      'Do not trigger dialogs unexpectedly without user action.',
      'Avoid stacking dialogs on top of other dialogs.',
    ],
    anatomy: [
      { name: 'Backdrop', role: 'Semi-transparent overlay dimming background content.' },
      { name: 'Surface', role: 'Centered card containing dialog content.' },
      { name: 'Title', role: 'Dialog heading linked via aria-labelledby.' },
      { name: 'Body', role: 'Message or form controls.' },
      { name: 'Footer Actions', role: 'Confirmation and cancel buttons.' },
    ],
    keyboard: [
      { key: 'Escape', description: 'Dismisses the dialog and returns focus to the trigger.' },
      { key: 'Tab', description: 'Cycles focus strictly between interactive elements inside the dialog.' },
    ],
    motion: {
      duration: '--motion-normal (250ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'The backdrop fades in while the modal card scales subtly into view.',
    },
    props: [
      { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Controls visibility of the modal dialog.' },
      { name: 'onClose', type: '() => void', defaultValue: 'undefined', description: 'Callback when user clicks overlay, close button, or presses Escape.' },
    ],
    nativeProps: [
      { name: 'visible', type: 'boolean', defaultValue: 'false', description: 'Controls native modal visibility.' },
      { name: 'onRequestClose', type: '() => void', defaultValue: 'undefined', description: 'Callback for hardware Android back button.' },
    ],
    headlessHook: {
      name: 'useDisclosure',
      description: 'Manages modal open/close states, focus trapping, and backdrop click handlers.',
      code: `import { useDisclosure } from '@winplaybox/primitives';

export function CustomModal() {
  const { isOpen, open, close } = useDisclosure();
  return (
    <>
      <button onClick={open}>Open</button>
      {isOpen && <div role="dialog"><button onClick={close}>Close</button></div>}
    </>
  );
}`,
    },
  },

  alert: {
    id: 'alert',
    name: 'Alert',
    category: 'Feedback',
    description: 'Displays prominent, urgent feedback or system status messages to users without interrupting their current workflow.',
    guidelines: 'Use Info for contextual notices, Success for confirmed tasks, Warning for non-blocking cautions, and Danger for critical errors.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
    waiPattern: 'Alert pattern',
    dos: [
      'Match the alert variant with the severity level of the message.',
      'Provide clear, actionable language and an optional dismiss button for non-permanent notifications.',
      'Place persistent alerts near the relevant section or form requiring correction.',
    ],
    donts: [
      'Do not overuse alerts for minor trivial notifications.',
      'Never dismiss an alert automatically if it contains critical error instructions.',
    ],
    anatomy: [
      { name: 'Container (role="alert")', role: 'Semantic container with ARIA live region attribute.' },
      { name: 'Status Icon', role: 'Contextual vector icon reinforcing variant severity visually.' },
      { name: 'Title & Message', role: 'Bold headline and descriptive message body.' },
      { name: 'Dismiss Button', role: 'Accessible button triggering onDismiss callback.' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Moves focus to the dismiss button or any embedded action links.' },
      { key: 'Escape', description: 'Dismisses alert when focus is within the dismiss button.' },
    ],
    motion: {
      duration: '--motion-normal (250ms)',
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      description: 'Alert slides and fades smoothly into view on mount, and fades out when dismissed.',
    },
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", defaultValue: "'info'", description: 'Semantic status severity variant.' },
      { name: 'title', type: 'string', defaultValue: 'undefined', description: 'Optional bold heading rendered above the message.' },
      { name: 'dismissible', type: 'boolean', defaultValue: 'false', description: 'When true, renders an accessible close button.' },
      { name: 'onDismiss', type: '() => void', defaultValue: 'undefined', description: 'Callback fired when user clicks close button.' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Custom icon overriding default variant icon.' },
    ],
    nativeProps: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", defaultValue: "'info'", description: 'Native variant styling.' },
      { name: 'title', type: 'string', defaultValue: 'undefined', description: 'Native title text.' },
      { name: 'onDismiss', type: '() => void', defaultValue: 'undefined', description: 'Native dismiss touch callback.' },
    ],
    headlessHook: {
      name: 'useDisclosure',
      description: 'Controls visibility, transition states, and unmount lifecycles for dismissible alerts.',
      code: `import { useDisclosure } from '@winplaybox/primitives';

export function CustomAlert({ message }) {
  const { isOpen, close } = useDisclosure(true);
  if (!isOpen) return null;
  return <div role="alert">{message}<button onClick={close}>×</button></div>;
}`,
    },
  },

  spinner: {
    id: 'spinner',
    name: 'Spinner',
    category: 'Feedback',
    description: 'An accessible circular rotating progress indicator used to signify background activity or pending operations.',
    guidelines: 'Use small spinners inline within buttons. Use medium and large spinners for section or full-page data loading states.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/meter/',
    waiPattern: 'Progress Indicator pattern',
    dos: [
      'Provide an accessible aria-label (e.g. "Loading data...") for screen readers.',
      'Center spinners within the loading area so users recognize what is loading.',
    ],
    donts: [
      'Avoid placing multiple uncoordinated spinners on a single page.',
      'Do not display spinners for operations completing in under 100ms.',
    ],
    anatomy: [
      { name: 'Track (SVG circle)', role: 'Background muted circular ring.' },
      { name: 'Head (SVG arc)', role: 'Accent-colored rotating stroke creating continuous motion.' },
      { name: 'Screen-reader label', role: 'Visually hidden text with role="status".' },
    ],
    keyboard: [],
    motion: {
      duration: '800ms',
      easing: 'linear',
      description: 'Infinite continuous 360-degree rotation animation.',
    },
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Dimensions: sm (16px), md (24px), lg (36px).' },
      { name: 'color', type: 'string', defaultValue: "'primary'", description: 'Stroke color token or CSS color.' },
      { name: 'label', type: 'string', defaultValue: "'Loading...'", description: 'Accessible screen reader status label.' },
    ],
    nativeProps: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Native spinner dimensions.' },
      { name: 'color', type: 'string', defaultValue: "'#007FFF'", description: 'Native ActivityIndicator tint color.' },
    ],
    headlessHook: {
      name: 'useReducedMotion',
      description: 'Detects if the user prefers reduced motion and replaces spinner spin with pulsing opacity.',
      code: `import { useReducedMotion } from '@winplaybox/primitives';

export function AccessibleSpinner() {
  const prefersReduced = useReducedMotion();
  return <div style={{ animation: prefersReduced ? 'pulse 1.5s infinite' : 'spin 0.8s linear infinite' }} />;
}`,
    },
  },

  skeleton: {
    id: 'skeleton',
    name: 'Skeleton',
    category: 'Feedback',
    description: 'Displays an animated placeholder preview of content before data finishes loading, reducing perceived loading time.',
    guidelines: 'Shape skeletons to match the rough layout of incoming elements (text lines, avatar circles, rectangular cards).',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/meter/',
    waiPattern: 'Placeholder pattern',
    dos: [
      'Match skeleton dimensions closely to the rendered component layout.',
      'Set aria-hidden="true" or role="presentation" to prevent noisy screen reader output.',
    ],
    donts: [
      'Do not display skeletons when loading takes less than 200ms.',
      'Avoid jarring layout shifts when replacing skeletons with actual data.',
    ],
    anatomy: [
      { name: 'Shape Surface', role: 'Text line, circle, or rounded rectangle.' },
      { name: 'Shimmer Gradient', role: 'CSS linear-gradient sweeping horizontally across the surface.' },
    ],
    keyboard: [],
    motion: {
      duration: '1.6s',
      easing: 'ease-in-out',
      description: 'Continuous horizontal shimmer wave animation.',
    },
    props: [
      { name: 'variant', type: "'text' | 'circular' | 'rectangular' | 'rounded'", defaultValue: "'text'", description: 'Geometric shape of the placeholder.' },
      { name: 'width', type: 'string | number', defaultValue: "'100%'", description: 'Width of skeleton block.' },
      { name: 'height', type: 'string | number', defaultValue: 'undefined', description: 'Height of skeleton block.' },
      { name: 'animation', type: "'wave' | 'pulse' | 'none'", defaultValue: "'wave'", description: 'Shimmer wave or pulsing opacity.' },
    ],
    nativeProps: [
      { name: 'variant', type: "'text' | 'circular' | 'rectangular' | 'rounded'", defaultValue: "'text'", description: 'Native skeleton geometry.' },
      { name: 'animation', type: "'wave' | 'pulse' | 'none'", defaultValue: "'wave'", description: 'Native Animated opacity loop.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Provides theme-aware shimmer colors adjusting between dark and light modes.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function CustomSkeleton() {
  const { colorScheme } = useTheme();
  return <div className={\`skeleton-\${colorScheme}\`} />;
}`,
    },
  },

  divider: {
    id: 'divider',
    name: 'Divider',
    category: 'Layout',
    description: 'A visual separator dividing content into distinct thematic groups or sections, supporting horizontal and vertical orientations.',
    guidelines: 'Use horizontal dividers to separate sections in cards or page layouts. Use vertical dividers between toolbar actions.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Separator pattern',
    dos: [
      'Set role="separator" and aria-orientation for accessibility.',
      'Use subtle colors so the divider guides the eye without competing with content.',
    ],
    donts: [
      'Do not overuse dividers when whitespace alone is sufficient to separate content.',
    ],
    anatomy: [
      { name: 'Rule Line', role: 'Semantic <hr> or <div> line with role="separator".' },
      { name: 'Optional Label', role: 'Centered, left, or right text inset (e.g. "OR").' },
    ],
    keyboard: [],
    motion: {
      duration: 'none',
      easing: 'none',
      description: 'Static visual layout element.',
    },
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Direction of separation line.' },
      { name: 'variant', type: "'solid' | 'dashed' | 'dotted'", defaultValue: "'solid'", description: 'Border stroke style.' },
      { name: 'spacing', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Margin spacing around divider.' },
      { name: 'label', type: 'string', defaultValue: 'undefined', description: 'Text label inset within divider.' },
      { name: 'labelPosition', type: "'center' | 'left' | 'right'", defaultValue: "'center'", description: 'Placement of label along the line.' },
    ],
    nativeProps: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: 'Native separator orientation.' },
      { name: 'spacing', type: "'none' | 'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Native margin spacing.' },
    ],
    headlessHook: {
      name: 'useTheme',
      description: 'Injects design token border colors.',
      code: `import { useTheme } from '@winplaybox/primitives';

export function ThemedDivider() {
  const { colorScheme } = useTheme();
  return <hr className={\`divider-\${colorScheme}\`} />;
}`,
    },
  },

  chip: {
    id: 'chip',
    name: 'Chip',
    category: 'Data Display',
    description: 'Compact interactive badges representing entities, inputs, selections, or filters with optional leading avatars/icons and dismiss actions.',
    guidelines: 'Use chips for tags, active filter lists, email recipients, and selectable multi-options.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    waiPattern: 'Button / Tag pattern',
    dos: [
      'Provide clear text labels and distinct selected states for filter chips.',
      'Include accessible aria-label on delete buttons ("Remove [label]").',
    ],
    donts: [
      'Do not make chips too long; keep text concise.',
    ],
    anatomy: [
      { name: 'Chip Container', role: 'Interactive pill-shaped surface.' },
      { name: 'Leading Icon / Avatar', role: 'Optional visual indicator or user profile photo.' },
      { name: 'Label', role: 'Descriptive text identifier.' },
      { name: 'Delete Button', role: 'Optional cross icon button triggering onDelete.' },
    ],
    keyboard: [
      { key: 'Enter / Space', description: 'Toggles selection or triggers onClick action.' },
      { key: 'Backspace / Delete', description: 'Triggers onDelete when focused on a deletable chip.' },
    ],
    motion: {
      duration: '--motion-instant (50ms)',
      easing: 'ease-out',
      description: 'Instant scale and background tint transitions on click and hover.',
    },
    props: [
      { name: 'label', type: 'string', defaultValue: "''", description: 'Text rendered inside the chip.' },
      { name: 'variant', type: "'filled' | 'outlined'", defaultValue: "'filled'", description: 'Visual surface appearance.' },
      { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: 'Chip sizing and padding scale.' },
      { name: 'selected', type: 'boolean', defaultValue: 'false', description: 'Whether the chip is active in a selection set.' },
      { name: 'onDelete', type: '() => void', defaultValue: 'undefined', description: 'Enables dismiss button and fires on removal.' },
      { name: 'onClick', type: '() => void', defaultValue: 'undefined', description: 'Enables interactive hover/click behavior.' },
      { name: 'icon', type: 'ReactNode', defaultValue: 'undefined', description: 'Leading icon.' },
    ],
    nativeProps: [
      { name: 'label', type: 'string', defaultValue: "''", description: 'Native chip text.' },
      { name: 'selected', type: 'boolean', defaultValue: 'false', description: 'Native selection highlight.' },
      { name: 'onDelete', type: '() => void', defaultValue: 'undefined', description: 'Native delete callback.' },
    ],
    headlessHook: {
      name: 'useButtonProps',
      description: 'Generates keyboard and ARIA handlers for interactive chips.',
      code: `import { useButtonProps } from '@winplaybox/primitives';

export function CustomChip({ label, onClick }) {
  const buttonProps = useButtonProps({ onClick });
  return <div {...buttonProps} className="chip">{label}</div>;
}`,
    },
  },

  breadcrumb: {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    description: 'A breadcrumb helps people understand and move through the hierarchy of a complex site or app. It lists at least two location names, usually links, separated by dividers, supporting interactive buttons, truncation, and overflow menus.',
    guidelines: 'Use breadcrumbs as secondary wayfinding for hierarchical applications with 2 or more levels deep. Place breadcrumbs between 30% and 50% of overall surface width to accommodate 400% zoom. Intermediate levels collapse into an overflow dropdown menu (...) when width is constrained, preserving root and active page visibility.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
    waiPattern: 'Breadcrumb Pattern',
    dos: [
      'Use breadcrumbs to indicate hierarchical depth of two or more levels in complex apps.',
      'Wrap breadcrumbs in a <nav aria-label="Breadcrumb"> landmark containing an ordered list (<ol>).',
      'Add aria-current="page" to the final non-interactive crumb representing the active location.',
      'Collapse intermediate crumbs into an overflow dropdown menu when space is constrained.',
      'Provide tooltips on hover and keyboard focus whenever breadcrumb item labels are truncated.',
    ],
    donts: [
      'Do not use breadcrumbs for flat site structures or linear multi-step wizards (use Stepper instead).',
      'Never use breadcrumbs to display browser session history; breadcrumbs reflect site hierarchy, not browsing history.',
      'Never use emoji characters in breadcrumbs; always use authentic SVG vector icons from @winplaybox/icons.',
      'Do not make the active current page item a clickable navigation link.',
    ],
    anatomy: [
      { name: 'Nav Landmark (<nav>)', role: 'Accessible container with aria-label="Breadcrumb" establishing page wayfinding.' },
      { name: 'Ordered List (<ol>)', role: 'Structural element communicating hierarchical depth and position to assistive tech.' },
      { name: 'BreadcrumbItem (<li>)', role: 'List item wrapper for each hierarchy level with role="listitem".' },
      { name: 'BreadcrumbButton', role: 'Interactive trigger or link with rounded subtle hover fill and focus ring.' },
      { name: 'BreadcrumbDivider', role: 'Visual delimiter (chevron arrow or slash) with aria-hidden="true".' },
      { name: 'Leading Icon', role: 'Authentic vector icon slot (Home, Folder, File) providing instant category recognition.' },
      { name: 'Overflow Trigger', role: 'Menu button (...) with aria-haspopup="menu" revealing collapsed intermediate crumbs.' },
      { name: 'Current Page Item', role: 'Active page indicator with semibold weight, primary text, and aria-current="page".' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Moves focus sequentially forward through interactive ancestor links and overflow triggers.' },
      { key: 'Shift + Tab', description: 'Moves focus backward through breadcrumb items.' },
      { key: 'Enter / Space', description: 'Activates the focused crumb link or opens the overflow dropdown menu.' },
      { key: 'Escape', description: 'Closes an open overflow dropdown menu and returns focus to the overflow trigger.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Subtle background color transitions on hover/focus and smooth scale entrance for the overflow popup menu.',
    },
    props: [
      { name: 'size', type: "'small' | 'medium' | 'large'", defaultValue: "'medium'", description: 'Visual sizing scale affecting typography (12/14/16px) and icon dimensions.' },
      { name: 'appearance', type: "'subtle' | 'transparent'", defaultValue: "'subtle'", description: 'Button appearance variant (subtle hover highlight vs transparent).' },
      { name: 'dividerType', type: "'chevron' | 'slash'", defaultValue: "'chevron'", description: 'Delimiter style between breadcrumb segments.' },
      { name: 'items', type: 'BreadcrumbItemData[]', defaultValue: 'undefined', description: 'Array of breadcrumb items for declarative data-driven rendering.' },
      { name: 'maxItems', type: 'number', defaultValue: 'undefined', description: 'Maximum visible items before collapsing intermediate levels into an overflow menu.' },
      { name: 'overflowIndex', type: 'number', defaultValue: '1', description: 'Starting index for overflow collapse, preserving the root item.' },
      { name: 'overflowAriaLabel', type: 'string', defaultValue: "'Show more breadcrumb items'", description: 'Accessible label for the overflow button.' },
      { name: 'divider', type: 'ReactNode', defaultValue: 'undefined', description: 'Custom separator element rendered between crumbs.' },
    ],
    nativeProps: [
      { name: 'items', type: 'BreadcrumbItem[]', defaultValue: '[]', description: 'Array of native breadcrumb items.' },
      { name: 'separator', type: 'string', defaultValue: "'/'", description: 'Native delimiter string.' },
      { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: 'Native layout padding scale.' },
    ],
    headlessHook: {
      name: 'useBreadcrumbProps',
      description: 'Generates accessible ARIA landmarks, current item tracking, and overflow collapse state.',
      code: `import { useBreadcrumbProps } from '@winplaybox/primitives';

export function CustomBreadcrumb({ items, maxItems }) {
  const { visibleItems, overflowItems, getNavProps } = useBreadcrumbProps({ items, maxItems });
  return (
    <nav {...getNavProps()}>
      <ol>{/* items */}</ol>
    </nav>
  );
}`,
    },
  },

  breadcrumbs: {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    category: 'Navigation',
    description: 'A breadcrumb helps people understand and move through the hierarchy of a complex site or app. It lists at least two location names, usually links, separated by dividers, supporting interactive buttons, truncation, and overflow menus.',
    guidelines: 'Use breadcrumbs as secondary wayfinding for hierarchical applications with 2 or more levels deep. Place breadcrumbs between 30% and 50% of overall surface width to accommodate 400% zoom. Intermediate levels collapse into an overflow dropdown menu (...) when width is constrained, preserving root and active page visibility.',
    waiUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
    waiPattern: 'Breadcrumb Pattern',
    dos: [
      'Use breadcrumbs to indicate hierarchical depth of two or more levels in complex apps.',
      'Wrap breadcrumbs in a <nav aria-label="Breadcrumb"> landmark containing an ordered list (<ol>).',
      'Add aria-current="page" to the final non-interactive crumb representing the active location.',
      'Collapse intermediate crumbs into an overflow dropdown menu when space is constrained.',
      'Provide tooltips on hover and keyboard focus whenever breadcrumb item labels are truncated.',
    ],
    donts: [
      'Do not use breadcrumbs for flat site structures or linear multi-step wizards (use Stepper instead).',
      'Never use breadcrumbs to display browser session history; breadcrumbs reflect site hierarchy, not browsing history.',
      'Never use emoji characters in breadcrumbs; always use authentic SVG vector icons from @winplaybox/icons.',
      'Do not make the active current page item a clickable navigation link.',
    ],
    anatomy: [
      { name: 'Nav Landmark (<nav>)', role: 'Accessible container with aria-label="Breadcrumb" establishing page wayfinding.' },
      { name: 'Ordered List (<ol>)', role: 'Structural element communicating hierarchical depth and position to assistive tech.' },
      { name: 'BreadcrumbItem (<li>)', role: 'List item wrapper for each hierarchy level with role="listitem".' },
      { name: 'BreadcrumbButton', role: 'Interactive trigger or link with rounded subtle hover fill and focus ring.' },
      { name: 'BreadcrumbDivider', role: 'Visual delimiter (chevron arrow or slash) with aria-hidden="true".' },
      { name: 'Leading Icon', role: 'Authentic vector icon slot (Home, Folder, File) providing instant category recognition.' },
      { name: 'Overflow Trigger', role: 'Menu button (...) with aria-haspopup="menu" revealing collapsed intermediate crumbs.' },
      { name: 'Current Page Item', role: 'Active page indicator with semibold weight, primary text, and aria-current="page".' },
    ],
    keyboard: [
      { key: 'Tab', description: 'Moves focus sequentially forward through interactive ancestor links and overflow triggers.' },
      { key: 'Shift + Tab', description: 'Moves focus backward through breadcrumb items.' },
      { key: 'Enter / Space', description: 'Activates the focused crumb link or opens the overflow dropdown menu.' },
      { key: 'Escape', description: 'Closes an open overflow dropdown menu and returns focus to the overflow trigger.' },
    ],
    motion: {
      duration: '--motion-fast (150ms)',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      description: 'Subtle background color transitions on hover/focus and smooth scale entrance for the overflow popup menu.',
    },
    props: [
      { name: 'size', type: "'small' | 'medium' | 'large'", defaultValue: "'medium'", description: 'Visual sizing scale affecting typography (12/14/16px) and icon dimensions.' },
      { name: 'appearance', type: "'subtle' | 'transparent'", defaultValue: "'subtle'", description: 'Button appearance variant (subtle hover highlight vs transparent).' },
      { name: 'dividerType', type: "'chevron' | 'slash'", defaultValue: "'chevron'", description: 'Delimiter style between breadcrumb segments.' },
      { name: 'items', type: 'BreadcrumbItemData[]', defaultValue: 'undefined', description: 'Array of breadcrumb items for declarative data-driven rendering.' },
      { name: 'maxItems', type: 'number', defaultValue: 'undefined', description: 'Maximum visible items before collapsing intermediate levels into an overflow menu.' },
      { name: 'overflowIndex', type: 'number', defaultValue: '1', description: 'Starting index for overflow collapse, preserving the root item.' },
      { name: 'overflowAriaLabel', type: 'string', defaultValue: "'Show more breadcrumb items'", description: 'Accessible label for the overflow button.' },
      { name: 'divider', type: 'ReactNode', defaultValue: 'undefined', description: 'Custom separator element rendered between crumbs.' },
    ],
    nativeProps: [
      { name: 'items', type: 'BreadcrumbItem[]', defaultValue: '[]', description: 'Array of native breadcrumb items.' },
      { name: 'separator', type: 'string', defaultValue: "'/'", description: 'Native delimiter string.' },
      { name: 'size', type: "'sm' | 'md'", defaultValue: "'md'", description: 'Native layout padding scale.' },
    ],
    headlessHook: {
      name: 'useBreadcrumbProps',
      description: 'Generates accessible ARIA landmarks, current item tracking, and overflow collapse state.',
      code: `import { useBreadcrumbProps } from '@winplaybox/primitives';

export function CustomBreadcrumbs({ items, maxItems }) {
  const { visibleItems, overflowItems, getNavProps } = useBreadcrumbProps({ items, maxItems });
  return (
    <nav {...getNavProps()}>
      <ol>{/* items */}</ol>
    </nav>
  );
}`,
    },
  },
};

export const COMPONENTS_DATA: Record<string, ComponentMetadata> = {
  ...CORE_COMPONENTS_DATA,
  ...EXTENDED_COMPONENTS_DATA,
};

/**
 * Spectra UI Enterprise Component Resources & 7 Pillars Architecture
 * Master registry for:
 * 1. Types: Visual appearances, shapes, density sizing scales, and composite subtypes.
 * 2. Behavior: Interactive state machine (hover, focus, pressed, disabled, disabledFocusable, loading, error, roving tabindex, escape dismissal).
 * 3. Layout: 4px grid spacing tokens, responsive density, inline vs full-width block expansion, and centered icon placement.
 * 4. Content: Action-oriented verbs, single-line labeling, capitalization rules, and Dos & Don'ts.
 * 5. Accessibility: WCAG 2.1 AA compliance, WAI-ARIA APG patterns, double-ring focus visible indicators, and keyboard navigation matrices.
 * 6. Resources: Direct Storybook interactive canvas URLs, Figma Community design specifications, WAI-ARIA patterns, GitHub source, and NPM links.
 * 7. Quick Guides: Production code recipes, tree-shakeable imports, minimizing bundle size, and platform compatibility notes.
 */

export interface Component7Pillars {
  storybookUrl: string;
  figmaUrl?: string;
  fluentUsageUrl?: string;
  types: {
    overview: string;
    items: Array<{ name: string; description: string; badge?: string }>;
  };
  behavior: {
    overview: string;
    states: Array<{ name: string; description: string }>;
  };
  layout: {
    overview: string;
    rules: Array<{ title: string; description: string }>;
  };
  content: {
    overview: string;
    guidelines: Array<{ title: string; description: string }>;
  };
  accessibility: {
    role: string;
    ariaAttributes: Array<{ attribute: string; description: string }>;
    wcagNotes: string;
  };
  quickGuides: Array<{
    title: string;
    description: string;
    codeSnippet?: string;
  }>;
}

export function normalizeComponentId(id: string): string {
  const clean = id.toLowerCase().trim();
  switch (clean) {
    case 'input': return 'text-input';
    case 'dropdown': return 'select';
    case 'messagebar':
    case 'message-bar': return 'alert';
    case 'nav': return 'bottom-nav';
    case 'infolabel': return 'info-label';
    case 'searchbox': return 'search-box';
    case 'spinbutton': return 'spin-button';
    case 'statusindicator': return 'status-indicator';
    case 'swatchpicker':
    case 'swatch-picker': return 'color-picker';
    case 'tablist': return 'tabs';
    case 'tagpicker': return 'tag-picker';
    case 'teachingpopover': return 'teaching-popover';
    case 'tree': return 'tree-view';
    case 'radiogroup': return 'radio-group';
    case 'progressbar': return 'progress-bar';
    case 'timepicker': return 'time-picker';
    case 'datepicker': return 'date-picker';
    case 'transferlist': return 'transfer-list';
    case 'appbar': return 'app-bar';
    case 'speeddial': return 'speed-dial';
    case 'ratingdisplay': return 'rating';
    case 'interactiontag':
    case 'taggroup': return 'tag';
    case 'menugrid': return 'menu';
    default: return clean;
  }
}

export const COMPONENT_RESOURCES_MAP: Record<string, Component7Pillars> = {
  button: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-button-button--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8911-3188&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/button/usage',
    types: {
      overview: 'Conforming to Microsoft Fluent 2 Web design standards, Button provides five visual appearances, three shape geometries, and three density scales.',
      items: [
        { name: 'Primary', description: 'Solid high-emphasis brand background. Use exclusively for the solitary primary call-to-action on a screen.', badge: 'Filled' },
        { name: 'Secondary', description: 'Subtle neutral surface with border. The default appearance for routine, non-destructive actions.', badge: 'Neutral' },
        { name: 'Outline', description: 'Transparent background with prominent border. Ideal for secondary actions in dense forms.', badge: 'Outlined' },
        { name: 'Subtle', description: 'Border-less with gentle hover fill. Used in toolbars, cards, and secondary lists to minimize clutter.', badge: 'Low Emphasis' },
        { name: 'Transparent', description: 'No border or background until hovered. Ideal for utility actions and icon triggers.', badge: 'Minimal' },
        { name: 'CompoundButton', description: 'Pairs a bold primary action verb with a descriptive subtitle sentence to guide complex decisions.', badge: 'Extension' },
        { name: 'MenuButton', description: 'Features a chevron indicator and opens a flyout dropdown menu when activated.', badge: 'Flyout' },
        { name: 'SplitButton', description: 'Combines a primary single-click action with an adjacent dropdown toggle button.', badge: 'Composite' },
        { name: 'ToggleButton', description: 'Two-state button that remains visually pressed when toggled active (aria-pressed).', badge: 'Stateful' },
      ],
    },
    behavior: {
      overview: 'Enforces accessible interactive states with smooth 150ms transitions and keyboard-accessible disabledFocusable behavior.',
      states: [
        { name: 'Default', description: 'Resting state matching color scheme tokens with high contrast borders and fills.' },
        { name: 'Hover', description: 'Instant visual elevation or background tint informing the user the element is interactive.' },
        { name: 'Focus Visible', description: 'High-contrast dual-ring focus outline conforming to WCAG 2.1 AA with 3:1 contrast.' },
        { name: 'Pressed / Active', description: 'Subtle inset shadow or deepened surface background providing tactile confirmation of click.' },
        { name: 'disabledFocusable', description: 'Keeps button in keyboard tab order while announcing aria-disabled="true" to assistive technology.' },
        { name: 'Loading', description: 'Renders an authentic animated spinner with aria-busy="true" while suppressing concurrent clicks.' },
      ],
    },
    layout: {
      overview: 'Conforms to the 4px design token grid, with density scales optimized for desktop precision and mobile touch targets.',
      rules: [
        { title: 'Density Sizing Scale', description: 'Small (24px height, 12px text), Medium (32px default, 14px text), Large (40px hero, 16px text).' },
        { title: 'Responsive Block Expansion', description: 'Buttons expand to full width (fullWidth=true) on mobile screens (< 640px) and bottom sheets.' },
        { title: 'Authentic Vector Centering', description: 'Icons from @winplaybox/icons are centered with display: inline-flex and alignItems: center.' },
        { title: 'Visual Spacing Hierarchy', description: 'Adjacent buttons maintain 8px gap (--space-2). Button groups use segmented zero-gap borders.' },
      ],
    },
    content: {
      overview: 'Label text must be concise, single-line, action-oriented, and immediately understandable.',
      guidelines: [
        { title: 'Action Verbs Only', description: 'Start with verbs: "Save", "Submit", "Deploy", "Export", "Create Project", "Delete Account".' },
        { title: 'No Multi-Line Wrapping', description: 'Never allow button labels to wrap. If descriptive context is required, use a CompoundButton.' },
        { title: 'Sentence Case Capitalization', description: 'Use sentence case on Web and Android ("Save changes"); use title case on iOS/macOS.' },
        { title: 'Icon-Only Accessible Labels', description: 'Icon-only buttons MUST declare an explicit aria-label (e.g. aria-label="Close dialog").' },
      ],
    },
    accessibility: {
      role: 'button',
      ariaAttributes: [
        { attribute: 'aria-label', description: 'Mandatory for icon-only buttons to announce accessible name.' },
        { attribute: 'aria-disabled="true"', description: 'Applied when disabledFocusable is enabled to inform screen readers.' },
        { attribute: 'aria-busy="true"', description: 'Announces ongoing asynchronous loading process to screen readers.' },
        { attribute: 'aria-pressed', description: 'Applied to ToggleButton to announce active two-state selection.' },
      ],
      wcagNotes: 'Meets WCAG 2.1 AA criteria for contrast (minimum 4.5:1 text, 3:1 focus ring) and 44pt/48dp touch targets.',
    },
    quickGuides: [
      {
        title: 'Tree-Shakeable Direct Import',
        description: 'Import Button and composite variants directly to optimize final bundle sizes.',
        codeSnippet: `import { Button, CompoundButton, SplitButton } from '@winplaybox/react';\n\n<Button appearance="primary" onClick={handleSubmit}>Save Changes</Button>`,
      },
      {
        title: 'Accessible Disabled Buttons',
        description: 'Prefer disabledFocusable over disabled so assistive technology users can navigate to the element and hear why it is disabled.',
        codeSnippet: `<Button appearance="primary" disabledFocusable title="Complete all required fields first">\n  Submit Application\n</Button>`,
      },
    ],
  },

  drawer: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-drawer--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8911-3193&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/drawer/usage',
    types: {
      overview: 'Drawers provide slide-out side panels anchoring auxiliary navigation, filters, inspector views, and form workflows.',
      items: [
        { name: 'Overlay / Modal Drawer', description: 'Appears above application content with a dimmed backdrop scrim. Captures keyboard focus.', badge: 'Modal' },
        { name: 'Inline Drawer', description: 'Slides in beside the main page content, shifting page layout without an overlay scrim.', badge: 'Inline' },
        { name: 'Left / Right Position', description: 'Left for application navigation trees; Right for inspector sidebars and property panels.', badge: 'Positioning' },
        { name: 'Density Sizes', description: 'Small (320px), Medium (480px), Large (640px), Full-Screen (mobile responsive sheet).', badge: 'Sizes' },
      ],
    },
    behavior: {
      overview: 'Supports smooth spring animation, Escape key dismissal, backdrop click dismissal, and focus trapping.',
      states: [
        { name: 'Closed', description: 'Drawer is unmounted or translated off-screen with visibility: hidden and aria-hidden="true".' },
        { name: 'Opening', description: 'Smooth slide-in transition (300ms cubic-bezier) accompanied by backdrop fade-in.' },
        { name: 'Open / Active', description: 'Focus is placed inside the drawer on the first interactive element with active focus trap.' },
        { name: 'Dismissal', description: 'Pressing Escape or clicking the backdrop closes the drawer and restores focus to trigger.' },
      ],
    },
    layout: {
      overview: 'Fixed to viewport edge with 100vh height and independent internal scrolling.',
      rules: [
        { title: 'Sticky Header & Footer', description: 'Header with title and close button remains pinned; body content scrolls independently.' },
        { title: 'Mobile Bottom Sheet', description: 'On viewports < 640px, automatically adapts into a bottom-anchored modal sheet.' },
      ],
    },
    content: {
      overview: 'Headers must state the drawer context clearly; actions reside in sticky footer.',
      guidelines: [
        { title: 'Clear Descriptive Title', description: 'Use explicit titles: "Filter Records", "Account Settings", "Document Details".' },
        { title: 'Primary Dismissal Action', description: 'Provide an explicit "Close" or "Cancel" button alongside the X icon.' },
      ],
    },
    accessibility: {
      role: 'dialog',
      ariaAttributes: [
        { attribute: 'aria-modal="true"', description: 'Tells screen readers to restrict navigation within the drawer panel.' },
        { attribute: 'aria-labelledby', description: 'Points to the drawer header title element ID.' },
      ],
      wcagNotes: 'Focus trap prevents keyboard users from cycling behind the backdrop into the inactive document.',
    },
    quickGuides: [
      {
        title: 'Basic Drawer Implementation',
        description: 'Render a controlled drawer with open state and dismissal handlers.',
        codeSnippet: `import { Drawer, Button } from '@winplaybox/react';\n\n<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">\n  <h3>Inspector</h3>\n</Drawer>`,
      },
    ],
  },

  select: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-dropdown--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8911-3194&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/dropdown/usage',
    types: {
      overview: 'Select and Dropdown components allow users to choose one or more options from a collapsible list.',
      items: [
        { name: 'Outline', description: 'Standard input boundary with subtle background and dropdown chevron.', badge: 'Default' },
        { name: 'Filled / Lighter', description: 'Subtle gray filled background transitioning to white on focus.', badge: 'Filled' },
        { name: 'Underline', description: 'Minimal border bottom line suited for clean tablet experiences.', badge: 'Minimal' },
        { name: 'Multi-Select', description: 'Allows checking multiple options with selected tags or token counts.', badge: 'Multi' },
      ],
    },
    behavior: {
      overview: 'Features roving tabindex across options, typeahead letter filtering, and auto-scrolling to active item.',
      states: [
        { name: 'Closed', description: 'Displays selected value label or placeholder with chevron-down icon.' },
        { name: 'Open', description: 'Listbox opens with vertical slide; chevron rotates 180 degrees.' },
        { name: 'Arrow Navigation', description: 'Up/Down arrows cycle through options without closing the menu.' },
        { name: 'Selection', description: 'Enter or Space selects the active item and closes the popover.' },
      ],
    },
    layout: {
      overview: 'Standard input height matching Button density (32px / 40px) with popover maxHeight of 280px.',
      rules: [
        { title: 'Popover Flipping', description: 'Automatically flips above the trigger if viewport bottom space is insufficient.' },
      ],
    },
    content: {
      overview: 'Placeholders must be informative; options must be alphabetized or grouped logically.',
      guidelines: [
        { title: 'Clear Placeholder', description: 'Use "Select a role..." or "Choose department..." instead of generic text.' },
      ],
    },
    accessibility: {
      role: 'combobox',
      ariaAttributes: [
        { attribute: 'aria-expanded', description: 'Communicates open/closed state of the options listbox.' },
        { attribute: 'aria-haspopup="listbox"', description: 'Informs screen reader that trigger controls a listbox.' },
      ],
      wcagNotes: 'Complies with WAI-ARIA 1.2 Combobox pattern with keyboard typeahead and roving selection.',
    },
    quickGuides: [
      {
        title: 'Basic Dropdown Usage',
        description: 'Declarative select with options array and change handler.',
        codeSnippet: `import { Select } from '@winplaybox/react';\n\n<Select label="Country" options={[{ value: 'us', label: 'United States' }]} />`,
      },
    ],
  },

  field: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-field--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8911-3195&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/field/usage',
    types: {
      overview: 'Field provides the semantic container wrapping form inputs with Label, InfoLabel, validation messages, and hint text.',
      items: [
        { name: 'Standard Field', description: 'Vertical stack with label on top, input control in middle, helper or error text below.', badge: 'Vertical' },
        { name: 'Horizontal Field', description: 'Side-by-side alignment for desktop settings forms and wide dialogs.', badge: 'Horizontal' },
        { name: 'Required Field', description: 'Displays an authentic vector asterisk or required indicator.', badge: 'Validation' },
      ],
    },
    behavior: {
      overview: 'Coordinates ARIA relationship attributes (aria-labelledby, aria-describedby, aria-errormessage) dynamically.',
      states: [
        { name: 'Resting', description: 'Standard label with optional description.' },
        { name: 'Error / Invalid', description: 'Replaces helper text with error message and applies role="alert".' },
        { name: 'Success', description: 'Optional positive confirmation text and green accent border.' },
      ],
    },
    layout: {
      overview: '4px vertical spacing between Label, Input, and Helper text tokens.',
      rules: [
        { title: 'Slot Composition', description: 'Supports label slot, control slot, and message/hint slot.' },
      ],
    },
    content: {
      overview: 'Labels must concisely state what input is expected; helper text clarifies constraints.',
      guidelines: [
        { title: 'Direct Helper Text', description: 'e.g. "Enter your corporate email address to receive activation link."' },
      ],
    },
    accessibility: {
      role: 'group',
      ariaAttributes: [
        { attribute: 'aria-describedby', description: 'Points child input to the unique generated helper text ID.' },
        { attribute: 'aria-errormessage', description: 'Points child input to the error message container ID.' },
      ],
      wcagNotes: 'Guarantees 100% accessible input association without manual ID generation.',
    },
    quickGuides: [
      {
        title: 'Composing with Field',
        description: 'Wrap any input control with Field for unified validation messaging.',
        codeSnippet: `import { Field, TextInput } from '@winplaybox/react';\n\n<Field label="Organization" validationMessage="Must be at least 3 characters" validationState="error">\n  <TextInput />\n</Field>`,
      },
    ],
  },

  'info-label': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-infolabel--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8911-3196&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/infolabel/usage',
    types: {
      overview: 'InfoLabel pairs a standard form label with an interactive info icon trigger that launches an explanatory popover on hover/click.',
      items: [
        { name: 'InfoLabel', description: 'Text label with trailing info button and contextual flyout help content.', badge: 'Composite' },
      ],
    },
    behavior: {
      overview: 'Opens contextual popover on hover or keyboard Enter/Space. Dismisses on Escape.',
      states: [
        { name: 'Resting', description: 'Label with subtle info vector icon.' },
        { name: 'Hover / Focus', description: 'Reveals popover card without stealing input focus.' },
      ],
    },
    layout: {
      overview: 'Inline flex arrangement with 4px gap between label text and info icon trigger.',
      rules: [
        { title: 'Vector Centering', description: 'InfoIcon uses authentic vector display: inline-flex alignment.' },
      ],
    },
    content: {
      overview: 'Help popovers must contain brief, actionable explanations (1-2 sentences).',
      guidelines: [
        { title: 'Explain Consequences', description: 'Explain why a field is needed or what format is required.' },
      ],
    },
    accessibility: {
      role: 'button',
      ariaAttributes: [
        { attribute: 'aria-expanded', description: 'Reflects open/closed state of the info popover.' },
        { attribute: 'aria-label', description: 'e.g. "More info for Workspace Name".' },
      ],
      wcagNotes: 'Keyboard accessible trigger complies with WCAG 2.1 AA focus order.',
    },
    quickGuides: [
      {
        title: 'InfoLabel Usage',
        description: 'Provide contextual help directly attached to a label.',
        codeSnippet: `import { InfoLabel } from '@winplaybox/react';\n\n<InfoLabel info="Used for telemetry clustering and audit logs.">Tenant ID</InfoLabel>`,
      },
    ],
  },

  'text-input': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-input--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-4&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/input/usage',
    types: {
      overview: 'Inputs let people enter and edit single-line or multi-line text with built-in validation states.',
      items: [
        { name: 'Outline', description: 'Default rectangular border with 6px border radius.', badge: 'Standard' },
        { name: 'Filled Lighter', description: 'Solid light surface background without prominent borders.', badge: 'Filled' },
        { name: 'Underline', description: 'Single bottom border line for high-density tables.', badge: 'Minimal' },
        { name: 'Prefix / Suffix', description: 'Slots for leading currency symbols, URLs, and action buttons.', badge: 'Affixes' },
      ],
    },
    behavior: {
      overview: 'Provides instant keyboard focus indicator, clear button action, and live validation announcements.',
      states: [
        { name: 'Default', description: 'Resting input field displaying optional placeholder.' },
        { name: 'Focus', description: '2px dual-ring focus indicator with active brand border color.' },
        { name: 'Error / Invalid', description: 'Semantic red border with aria-invalid="true" and error message announcement.' },
        { name: 'Disabled', description: 'Muted text color, disabled cursor, and suppressed pointer events.' },
      ],
    },
    layout: {
      overview: 'Standard density heights: Small (24px), Medium (32px), Large (40px) with 12px horizontal padding.',
      rules: [
        { title: 'Full Width', description: 'Expands across form column width with 100% container sizing.' },
      ],
    },
    content: {
      overview: 'Always pair with an accessible Label; never rely solely on placeholder text.',
      guidelines: [
        { title: 'Persistent Labels', description: 'Ensure labels remain visible above or beside the input at all times.' },
      ],
    },
    accessibility: {
      role: 'textbox',
      ariaAttributes: [
        { attribute: 'aria-invalid', description: 'Set to "true" when validation constraints fail.' },
        { attribute: 'aria-describedby', description: 'Links to helper text and error message element IDs.' },
      ],
      wcagNotes: 'Meets WCAG 2.1 AA 4.5:1 text contrast and aria-describedby announcement criteria.',
    },
    quickGuides: [
      {
        title: 'Controlled Form Input',
        description: 'Standard controlled input with error validation and helper text.',
        codeSnippet: `import { TextInput } from '@winplaybox/react';\n\n<TextInput label="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />`,
      },
    ],
  },

  label: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-label--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-5&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/label/usage',
    types: {
      overview: 'Label provides readable, accessible captions associating with input fields and checkboxes.',
      items: [
        { name: 'Standard Label', description: 'Font size 14px, weight 600 with subtle text primary color.', badge: 'Standard' },
        { name: 'Required Asterisk', description: 'Red indicator showing mandatory form completion.', badge: 'Required' },
        { name: 'Disabled Label', description: 'Muted gray text reflecting disabled control state.', badge: 'Disabled' },
      ],
    },
    behavior: {
      overview: 'Clicking a label forwards focus directly to its target input element via htmlFor binding.',
      states: [
        { name: 'Default', description: 'High contrast text with pointer cursor when associated with input.' },
        { name: 'Disabled', description: 'Color token transitions to var(--color-text-disabled).' },
      ],
    },
    layout: {
      overview: 'Rendered with display: inline-block or block with 4px bottom margin.',
      rules: [
        { title: 'Consistent Alignment', description: 'Aligns flush with the left boundary of the corresponding input control.' },
      ],
    },
    content: {
      overview: 'Labels must be short, clear, and omit punctuation like colons.',
      guidelines: [
        { title: 'No Colons', description: 'Use "First name" instead of "First name:".' },
      ],
    },
    accessibility: {
      role: 'label',
      ariaAttributes: [
        { attribute: 'htmlFor', description: 'Matches the target input id attribute.' },
      ],
      wcagNotes: 'Ensures screen readers announce label text immediately upon focusing target control.',
    },
    quickGuides: [
      {
        title: 'Label htmlFor Binding',
        description: 'Connect label to input control via ID for accessible click routing.',
        codeSnippet: `import { Label, TextInput } from '@winplaybox/react';\n\n<Label htmlFor="tenant-input" required>Tenant Domain</Label>\n<TextInput id="tenant-input" />`,
      },
    ],
  },

  link: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-link--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-6&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/link/usage',
    types: {
      overview: 'Links navigate users to other pages, external destinations, or trigger in-page anchor jumps.',
      items: [
        { name: 'Standalone Link', description: 'Prominent link styled with bold font and optional trailing vector arrow.', badge: 'Standalone' },
        { name: 'Inline Link', description: 'Blends into paragraphs with an underline indicator.', badge: 'Inline' },
        { name: 'Subtle Link', description: 'Displays in secondary text color, underlining only on hover.', badge: 'Subtle' },
      ],
    },
    behavior: {
      overview: 'Triggers client-side routing or browser navigation. Enter activates; Tab receives focus.',
      states: [
        { name: 'Default', description: 'Active brand text color with or without underline.' },
        { name: 'Hover', description: 'Underline animates in; color shifts to darker brand token.' },
        { name: 'Focus Visible', description: 'Double-ring 2px outline around anchor bounding box.' },
      ],
    },
    layout: {
      overview: 'Inline layout flow matching surrounding text typographic baseline.',
      rules: [
        { title: 'External Icon Gap', description: 'ExternalLinkIcon maintains 4px gap from trailing text.' },
      ],
    },
    content: {
      overview: 'Link text must clearly describe the destination; avoid generic "click here".',
      guidelines: [
        { title: 'Descriptive Destination', description: 'Use "Read our security whitepaper" instead of "Click here".' },
      ],
    },
    accessibility: {
      role: 'link',
      ariaAttributes: [
        { attribute: 'target="_blank"', description: 'Requires rel="noopener noreferrer" and external link warning.' },
      ],
      wcagNotes: 'Maintains 4.5:1 text contrast and distinguishable non-color underline indicator.',
    },
    quickGuides: [
      {
        title: 'Accessible External Link',
        description: 'Provide external link icon and screen reader description.',
        codeSnippet: `import { Link } from '@winplaybox/react';\n\n<Link href="https://spectra-ui.dev" target="_blank" external>API Reference</Link>`,
      },
    ],
  },

  list: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-list--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8995-4&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/list/usage',
    types: {
      overview: 'List and ListView present structured collections of items, options, or complex records.',
      items: [
        { name: 'Divided List', description: 'Displays subtle 1px dividers between rows.', badge: 'Divided' },
        { name: 'Selectable List', description: 'Allows single or multi-row selection with checkboxes or radio indicators.', badge: 'Interactive' },
        { name: 'Virtual List', description: 'Handles 10,000+ items with high-performance windowed scrolling.', badge: 'Virtual' },
      ],
    },
    behavior: {
      overview: 'Keyboard Up/Down arrows traverse items; Enter/Space selects active row.',
      states: [
        { name: 'Default', description: 'Resting row background.' },
        { name: 'Hover', description: 'Light hover tint highlighting pointer row.' },
        { name: 'Selected', description: 'Active selection tint and checked indicator.' },
      ],
    },
    layout: {
      overview: 'Vertical flex stack with customizable item padding (8px / 12px / 16px).',
      rules: [
        { title: 'Slot Anatomy', description: 'Supports leading icon/avatar, primary text, secondary subtitle, and trailing action slots.' },
      ],
    },
    content: {
      overview: 'Items should feature clear hierarchy between primary titles and secondary subtitles.',
      guidelines: [
        { title: 'Truncation', description: 'Truncate long subtitles with ellipsis rather than breaking list rhythm.' },
      ],
    },
    accessibility: {
      role: 'list',
      ariaAttributes: [
        { attribute: 'role="listitem"', description: 'Declared on each child list row element.' },
      ],
      wcagNotes: 'Announces list length and position index ("item 3 of 12") to screen readers.',
    },
    quickGuides: [
      {
        title: 'Divided List Example',
        description: 'Render items with leading icons and trailing actions.',
        codeSnippet: `import { List, ListItem } from '@winplaybox/react';\n\n<List divided>\n  <ListItem title="Production Node 1" subtitle="US-East · Healthy" />\n</List>`,
      },
    ],
  },

  menu: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-menu-menu--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-7&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/menu/usage',
    types: {
      overview: 'Menus present a list of common commands, navigation links, and settings in a floating popover.',
      items: [
        { name: 'Standard Menu', description: 'Vertical list of action items with leading icons and keyboard shortcuts.', badge: 'Standard' },
        { name: 'MenuGrid', description: 'Two-dimensional grid layout of color swatches, avatars, or emoji reaction tokens.', badge: 'Grid' },
        { name: 'Submenu', description: 'Nested cascading menu opening on hover or ArrowRight keypress.', badge: 'Cascading' },
      ],
    },
    behavior: {
      overview: 'Full WAI-ARIA APG Menu navigation: Up/Down arrow keys move focus; Escape closes menu.',
      states: [
        { name: 'Closed', description: 'Trigger button is resting with aria-expanded="false".' },
        { name: 'Open', description: 'Popover appears; first menu item receives focus automatically.' },
        { name: 'Roving Focus', description: 'Arrow keys cycle focus without tabbing out of the menu.' },
      ],
    },
    layout: {
      overview: 'Floating panel with 8px padding, 6px border radius, and elevation level 3 shadow.',
      rules: [
        { title: 'Submenu Offsets', description: 'Aligns flush with parent item with 4px overlap to avoid cursor gaps.' },
      ],
    },
    content: {
      overview: 'Keep menu action labels short and group related actions with dividers.',
      guidelines: [
        { title: 'Group Related Actions', description: 'Use MenuDivider to separate destructive actions from routine ones.' },
      ],
    },
    accessibility: {
      role: 'menu',
      ariaAttributes: [
        { attribute: 'aria-haspopup="menu"', description: 'Declared on trigger button.' },
        { attribute: 'role="menuitem"', description: 'Declared on each clickable menu item.' },
      ],
      wcagNotes: 'Roving tabindex ensures screen reader users navigate options seamlessly.',
    },
    quickGuides: [
      {
        title: 'Context Menu Example',
        description: 'Menu with triggers, action items, dividers, and keyboard shortcuts.',
        codeSnippet: `import { Menu, MenuItem, MenuButton } from '@winplaybox/react';\n\n<Menu>\n  <MenuButton>Actions</MenuButton>\n  <MenuItem icon={<EditIcon />}>Edit</MenuItem>\n  <MenuItem icon={<TrashIcon />} appearance="danger">Delete</MenuItem>\n</Menu>`,
      },
    ],
  },

  alert: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-messagebar--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-8&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/messagebar/usage',
    types: {
      overview: 'Alert and MessageBar display prominent feedback messages, system warnings, and error summaries.',
      items: [
        { name: 'Info', description: 'Neutral blue banner for general status notices.', badge: 'Info' },
        { name: 'Success', description: 'Green confirmation banner for completed actions.', badge: 'Success' },
        { name: 'Warning', description: 'Amber caution banner for non-blocking concerns.', badge: 'Warning' },
        { name: 'Error', description: 'Red critical banner for blocking system failures.', badge: 'Error' },
      ],
    },
    behavior: {
      overview: 'Can be static or dismissible. Screen readers receive live status announcements.',
      states: [
        { name: 'Visible', description: 'Banner displayed inline with leading vector icon.' },
        { name: 'Dismissed', description: 'Fades out with smooth height collapse.' },
      ],
    },
    layout: {
      overview: 'Horizontal banner spanning container width with 12px padding and 8px border radius.',
      rules: [
        { title: 'Vector Centering', description: 'Alert icons are centered with display: inline-flex.' },
      ],
    },
    content: {
      overview: 'State what occurred clearly and provide a corrective action button where possible.',
      guidelines: [
        { title: 'Actionable Advice', description: 'Always advise the user on how to resolve the alert.' },
      ],
    },
    accessibility: {
      role: 'alert',
      ariaAttributes: [
        { attribute: 'aria-live="polite"', description: 'Used on info and warning banners.' },
        { attribute: 'aria-live="assertive"', description: 'Used on critical error banners.' },
      ],
      wcagNotes: 'Meets WCAG 2.1 AA 4.5:1 text contrast across all color variants.',
    },
    quickGuides: [
      {
        title: 'Dismissible Alert',
        description: 'Render an alert with close button and callback.',
        codeSnippet: `import { Alert } from '@winplaybox/react';\n\n<Alert variant="warning" closable onClose={handleDismiss}>\n  Database failover scheduled for 02:00 UTC.\n</Alert>`,
      },
    ],
  },

  calendar: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/compat-components-calendar--docs',
    types: {
      overview: 'Calendar displays a month grid allowing users to view, select, and inspect dates.',
      items: [
        { name: 'Month View', description: 'Standard 7x6 month grid with weekday headers.', badge: 'Month' },
        { name: 'Year Picker', description: 'Multi-year selector view for rapid decade navigation.', badge: 'Decade' },
      ],
    },
    behavior: {
      overview: 'Full 2D keyboard navigation: Arrow Left/Right moves day; Arrow Up/Down moves week.',
      states: [
        { name: 'Selected', description: 'Circled brand background on active date.' },
        { name: 'Today', description: 'Subtle ring indicator marking current date.' },
      ],
    },
    layout: {
      overview: 'Compact 280px-320px grid width with 32px square day cells.',
      rules: [
        { title: 'Fixed Cell Geometry', description: 'Maintains exact 32px height to avoid layout shift between months.' },
      ],
    },
    content: {
      overview: 'Weekday abbreviations (S, M, T, W, T, F, S) with localized full names in aria-label.',
      guidelines: [
        { title: 'Clear Month Header', description: 'Displays "October 2026" with navigation arrows.' },
      ],
    },
    accessibility: {
      role: 'grid',
      ariaAttributes: [
        { attribute: 'role="gridcell"', description: 'Applied to each date cell.' },
        { attribute: 'aria-selected', description: 'Reflects chosen date state.' },
      ],
      wcagNotes: 'Complies with WAI-ARIA Date Picker Grid navigation conventions.',
    },
    quickGuides: [
      {
        title: 'Interactive Calendar',
        description: 'Controlled calendar date selection.',
        codeSnippet: `import { Calendar } from '@winplaybox/react';\n\n<Calendar selectedDate={date} onSelectDate={setDate} />`,
      },
    ],
  },

  'bottom-nav': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-nav--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8995-5&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/nav/usage',
    types: {
      overview: 'Nav and BottomNav provide primary multi-destination navigation for mobile and desktop screens.',
      items: [
        { name: 'Bottom Navigation Bar', description: 'Pinned 56dp mobile bottom bar with 3 to 5 primary destinations.', badge: 'Mobile' },
        { name: 'Nav Rail', description: 'Vertical desktop navigation bar with icon pills.', badge: 'Desktop' },
      ],
    },
    behavior: {
      overview: 'Tapping a tab navigates immediately to top-level view and clears sub-stacks.',
      states: [
        { name: 'Active', description: 'Filled brand icon with bold label and active pill indicator.' },
        { name: 'Inactive', description: 'Outline icon with subtle muted text.' },
      ],
    },
    layout: {
      overview: '56px height with equal spacing across all tab destinations.',
      rules: [
        { title: '44pt Touch Targets', description: 'Meets Apple HIG and Material 48dp touch requirements.' },
      ],
    },
    content: {
      overview: 'Labels must be single concise words: "Home", "Search", "Orders", "Profile".',
      guidelines: [
        { title: 'No Sentence Wrapping', description: 'Keep labels strictly to single words.' },
      ],
    },
    accessibility: {
      role: 'navigation',
      ariaAttributes: [
        { attribute: 'aria-label="Main Navigation"', description: 'Declared on navigation wrapper.' },
      ],
      wcagNotes: 'Ensures screen readers announce destination count and active item.',
    },
    quickGuides: [
      {
        title: 'BottomNav Usage',
        description: 'Bottom navigation with 3 primary items.',
        codeSnippet: `import { BottomNav } from '@winplaybox/react';\n\n<BottomNav items={items} activeId={tab} onChange={setTab} />`,
      },
    ],
  },

  persona: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-persona--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-10&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/persona/usage',
    types: {
      overview: 'Persona combines an Avatar with primary display name, job title, and presence badge status.',
      items: [
        { name: 'Standard Persona', description: 'Avatar on left with two lines of descriptive user text.', badge: 'Standard' },
        { name: 'Compact Persona', description: 'Single-line layout for high-density tables and dropdown items.', badge: 'Compact' },
      ],
    },
    behavior: {
      overview: 'Displays live presence (Available, Away, Busy, DND, Offline) with hover card capability.',
      states: [
        { name: 'Resting', description: 'High contrast text with presence indicator badge.' },
      ],
    },
    layout: {
      overview: 'Horizontal flex alignment with 8px-12px gap between avatar and text block.',
      rules: [
        { title: 'Sizes', description: '24px, 32px, 40px, 48px, 56px, 72px avatar scales.' },
      ],
    },
    content: {
      overview: 'Primary name in bold; secondary line shows email, job title, or status message.',
      guidelines: [
        { title: 'Initials Fallback', description: 'Displays 2-letter uppercase initials when image is absent.' },
      ],
    },
    accessibility: {
      role: 'group',
      ariaAttributes: [
        { attribute: 'aria-label', description: 'e.g. "Sarah Connor, Lead Architect, Available".' },
      ],
      wcagNotes: 'Screen reader hears user name and presence state simultaneously.',
    },
    quickGuides: [
      {
        title: 'Persona Implementation',
        description: 'Render user persona with presence badge and secondary title.',
        codeSnippet: `import { Persona } from '@winplaybox/react';\n\n<Persona name="Elena Fisher" secondaryText="Principal Systems Architect" presence="available" />`,
      },
    ],
  },

  popover: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-popover--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-11&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/popover/usage',
    types: {
      overview: 'Popover presents contextual floating cards containing text, controls, or action buttons.',
      items: [
        { name: 'Standard Popover', description: 'Card anchored to trigger element with subtle drop shadow.', badge: 'Floating' },
        { name: 'Arrow Popover', description: 'Includes an authentic vector callout arrow pointing at trigger.', badge: 'Beak' },
      ],
    },
    behavior: {
      overview: 'Opens on click or hover. Closes on outside click, scroll, or Escape keypress.',
      states: [
        { name: 'Open', description: 'Floating card animates in with scale and fade.' },
        { name: 'Closed', description: 'Unmounted from DOM or translated off-screen.' },
      ],
    },
    layout: {
      overview: 'Positioned via Popper/Floating-UI logic with boundary auto-flipping.',
      rules: [
        { title: 'Padding', description: '16px internal padding with 8px border radius.' },
      ],
    },
    content: {
      overview: 'Short focused content; avoid stuffing entire multi-page forms into a popover.',
      guidelines: [
        { title: 'Clear Header', description: 'Include an optional title for card context.' },
      ],
    },
    accessibility: {
      role: 'dialog',
      ariaAttributes: [
        { attribute: 'aria-haspopup="dialog"', description: 'Declared on trigger button.' },
      ],
      wcagNotes: 'Maintains focus inside popover if interactive controls are present.',
    },
    quickGuides: [
      {
        title: 'Popover Usage',
        description: 'Interactive popover anchored to a trigger.',
        codeSnippet: `import { Popover, Button } from '@winplaybox/react';\n\n<Popover trigger={<Button>Details</Button>}>\n  <div>Project deployed successfully.</div>\n</Popover>`,
      },
    ],
  },

  'progress-bar': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-progressbar--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-12&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/progressbar/usage',
    types: {
      overview: 'ProgressBar visualizes task progression from 0% to 100% or continuous background activity.',
      items: [
        { name: 'Determinate', description: 'Fills proportional bar according to value (0-100).', badge: 'Determinate' },
        { name: 'Indeterminate', description: 'Animated looping gradient for unknown duration tasks.', badge: 'Indeterminate' },
      ],
    },
    behavior: {
      overview: 'Updates smoothly with CSS transitions. Supports reduced motion preferences.',
      states: [
        { name: 'Active', description: 'Progress bar fill moves to track value.' },
      ],
    },
    layout: {
      overview: '4px height with rounded end caps (border-radius: 9999px).',
      rules: [
        { title: 'Full Width', description: 'Spans 100% of container width.' },
      ],
    },
    content: {
      overview: 'Pair with visible percentage label or status message above bar.',
      guidelines: [
        { title: 'Informative Label', description: 'e.g. "Uploading bundle: 74% complete".' },
      ],
    },
    accessibility: {
      role: 'progressbar',
      ariaAttributes: [
        { attribute: 'aria-valuenow', description: 'Current numeric value.' },
        { attribute: 'aria-valuemin="0"', description: 'Minimum scale.' },
        { attribute: 'aria-valuemax="100"', description: 'Maximum scale.' },
      ],
      wcagNotes: 'Screen reader automatically announces progression updates.',
    },
    quickGuides: [
      {
        title: 'Determinate ProgressBar',
        description: 'Display linear percentage progress.',
        codeSnippet: `import { ProgressBar } from '@winplaybox/react';\n\n<ProgressBar value={65} max={100} />`,
      },
    ],
  },

  'radio-group': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-radiogroup--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-13&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/radiogroup/usage',
    types: {
      overview: 'RadioGroup presents a set of mutually exclusive options where only one option can be selected at a time.',
      items: [
        { name: 'Vertical Group', description: 'Standard top-to-bottom radio list with 8px spacing.', badge: 'Vertical' },
        { name: 'Horizontal Group', description: 'Side-by-side radio options for compact settings.', badge: 'Horizontal' },
      ],
    },
    behavior: {
      overview: 'Arrow Up/Down or Left/Right moves selection between buttons automatically (roving tabindex).',
      states: [
        { name: 'Selected', description: 'Solid centered dot with brand border ring.' },
        { name: 'Unselected', description: 'Empty circular border.' },
      ],
    },
    layout: {
      overview: '20px radio circle diameter with 8px gap between indicator and text label.',
      rules: [
        { title: 'Touch Targets', description: 'Minimum 40px touch container padding.' },
      ],
    },
    content: {
      overview: 'Labels should be clear choices; add optional descriptions underneath options.',
      guidelines: [
        { title: 'Parallel Phrasing', description: 'Keep all choices phrased similarly.' },
      ],
    },
    accessibility: {
      role: 'radiogroup',
      ariaAttributes: [
        { attribute: 'role="radio"', description: 'Declared on each choice input.' },
        { attribute: 'aria-checked', description: 'Reflects active choice selection.' },
      ],
      wcagNotes: 'Follows WAI-ARIA Radio Group roving focus specification.',
    },
    quickGuides: [
      {
        title: 'RadioGroup Usage',
        description: 'Controlled radio group with multiple options.',
        codeSnippet: `import { RadioGroup, Radio } from '@winplaybox/react';\n\n<RadioGroup value={tier} onChange={setTier}>\n  <Radio value="standard" label="Standard" />\n  <Radio value="pro" label="Professional" />\n</RadioGroup>`,
      },
    ],
  },

  rating: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-rating--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8995-6&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/rating/usage',
    types: {
      overview: 'Rating allows people to view and submit feedback scores using authentic star vectors.',
      items: [
        { name: 'Interactive Rating', description: 'Allows users to hover and click to set rating score from 1 to 5.', badge: 'Input' },
        { name: 'RatingDisplay', description: 'Read-only presentation showing score, fractional stars, and review count.', badge: 'Read-Only' },
      ],
    },
    behavior: {
      overview: 'Hover highlights stars up to pointer position; keyboard arrow keys adjust value.',
      states: [
        { name: 'Hover', description: 'Stars up to cursor light up with active brand color.' },
        { name: 'Keyboard Focus', description: 'Individual stars receive focus ring; Left/Right arrows change score.' },
      ],
    },
    layout: {
      overview: 'Inline horizontal flex container with 4px star gap (--space-1).',
      rules: [
        { title: 'Star Sizes', description: 'Small (16px), Medium (20px default), Large (24px).' },
      ],
    },
    content: {
      overview: 'Pair with numerical rating value label and total review count in parentheses.',
      guidelines: [
        { title: 'Score Label', description: 'Display "4.8 out of 5 stars (1,240 reviews)" for accessibility.' },
      ],
    },
    accessibility: {
      role: 'radiogroup',
      ariaAttributes: [
        { attribute: 'aria-label', description: 'Announces "Rating: 4 of 5 stars".' },
      ],
      wcagNotes: 'Meets WCAG 2.1 AA keyboard operation and accessible score announcement standards.',
    },
    quickGuides: [
      {
        title: 'Rating Component Usage',
        description: 'Interactive and read-only rating displays.',
        codeSnippet: `import { Rating } from '@winplaybox/react';\n\n<Rating value={4} max={5} onChange={val => setRating(val)} />`,
      },
    ],
  },

  'search-box': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-searchbox--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8995-7&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/searchbox/usage',
    types: {
      overview: 'SearchBox provides specialized search inputs with leading magnifying glass icon and clear button.',
      items: [
        { name: 'Standard SearchBox', description: 'Subtle gray background with rounded 6px borders.', badge: 'Standard' },
        { name: 'Underline SearchBox', description: 'Minimal border bottom line for headers.', badge: 'Minimal' },
      ],
    },
    behavior: {
      overview: 'Clear button appears when input contains text. Escape clears text; Enter executes query.',
      states: [
        { name: 'Resting', description: 'Displays placeholder and search icon.' },
        { name: 'Active', description: 'Clear icon button becomes visible.' },
      ],
    },
    layout: {
      overview: '32px or 40px height with 12px horizontal padding.',
      rules: [
        { title: 'Icon Alignment', description: 'Leading SearchIcon is centered vertically.' },
      ],
    },
    content: {
      overview: 'Placeholder indicates what can be searched: "Search components...", "Filter users...".',
      guidelines: [
        { title: 'Specific Placeholder', description: 'Use specific prompts instead of generic "Search".' },
      ],
    },
    accessibility: {
      role: 'searchbox',
      ariaAttributes: [
        { attribute: 'aria-label', description: 'Mandatory accessible search label.' },
      ],
      wcagNotes: 'Clear button has dedicated accessible label and focus target.',
    },
    quickGuides: [
      {
        title: 'SearchBox Usage',
        description: 'Search box with clear button and change callback.',
        codeSnippet: `import { SearchBox } from '@winplaybox/react';\n\n<SearchBox placeholder="Search components..." value={q} onChange={setQ} />`,
      },
    ],
  },

  skeleton: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-skeleton--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-14&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/skeleton/usage',
    types: {
      overview: 'Skeleton provides animated placeholder blocks simulating content shapes while loading.',
      items: [
        { name: 'Text Line', description: 'Horizontal strip simulating typographic lines.', badge: 'Text' },
        { name: 'Circular', description: 'Circle shape simulating avatars and badges.', badge: 'Circular' },
        { name: 'Rounded Rectangle', description: 'Card and button placeholder shapes.', badge: 'Card' },
      ],
    },
    behavior: {
      overview: 'Subtle shimmer wave animation moving from left to right across the element.',
      states: [
        { name: 'Loading', description: 'Continuous shimmer animation with aria-busy="true".' },
      ],
    },
    layout: {
      overview: 'Conforms to dimensions of target component being loaded.',
      rules: [
        { title: 'Zero Layout Shift', description: 'Match exact height and width of final loaded content to avoid CLS.' },
      ],
    },
    content: {
      overview: 'Does not render text; purely visual placeholder representation.',
      guidelines: [
        { title: 'Group Matching', description: 'Combine text lines with circle skeleton to mock a persona card.' },
      ],
    },
    accessibility: {
      role: 'status',
      ariaAttributes: [
        { attribute: 'aria-busy="true"', description: 'Informs screen reader that section is loading.' },
        { attribute: 'aria-label="Loading..."', description: 'Accessible loading announcement.' },
      ],
      wcagNotes: 'Respects prefers-reduced-motion by disabling active shimmer sweep.',
    },
    quickGuides: [
      {
        title: 'Card Loading Skeleton',
        description: 'Mock avatar and paragraph lines while awaiting API data.',
        codeSnippet: `import { Skeleton } from '@winplaybox/react';\n\n<Skeleton variant="circular" width={40} height={40} />\n<Skeleton variant="text" width="80%" height={16} />`,
      },
    ],
  },

  slider: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-slider--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-15&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/slider/usage',
    types: {
      overview: 'Slider allows users to choose a value or range along a continuous or stepped bar.',
      items: [
        { name: 'Horizontal Slider', description: 'Standard horizontal track with sliding thumb handle.', badge: 'Horizontal' },
        { name: 'Range Slider', description: 'Two handles selecting minimum and maximum intervals.', badge: 'Range' },
      ],
    },
    behavior: {
      overview: 'Dragging thumb or clicking track updates value. Arrow keys adjust by step increment.',
      states: [
        { name: 'Resting', description: 'Circle thumb resting on active track.' },
        { name: 'Focus / Active', description: 'Thumb expands with double-ring focus outline.' },
      ],
    },
    layout: {
      overview: '4px track height with 16px thumb diameter.',
      rules: [
        { title: 'Touch Buffer', description: '44px touch target surrounding slider thumb.' },
      ],
    },
    content: {
      overview: 'Always display current value label above or beside slider.',
      guidelines: [
        { title: 'Value Units', description: 'e.g. "Volume: 80%", "Budget: $500".' },
      ],
    },
    accessibility: {
      role: 'slider',
      ariaAttributes: [
        { attribute: 'aria-valuenow', description: 'Current numeric value.' },
        { attribute: 'aria-valuemin', description: 'Minimum allowed value.' },
        { attribute: 'aria-valuemax', description: 'Maximum allowed value.' },
      ],
      wcagNotes: 'Meets keyboard step navigation requirements (Home/End moves to bounds).',
    },
    quickGuides: [
      {
        title: 'Controlled Slider',
        description: 'Slider with min, max, step, and value display.',
        codeSnippet: `import { Slider } from '@winplaybox/react';\n\n<Slider min={0} max={100} step={5} value={val} onChange={setVal} />`,
      },
    ],
  },

  'spin-button': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-spinbutton--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-16&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/spin/usage',
    types: {
      overview: 'SpinButton (NumberField) lets users increment or decrement a numeric value with stepper buttons.',
      items: [
        { name: 'Standard SpinButton', description: 'Input field paired with up/down increment vector buttons.', badge: 'Standard' },
      ],
    },
    behavior: {
      overview: 'Arrow Up/Down increments/decrements value. Direct text entry is validated.',
      states: [
        { name: 'Resting', description: 'Input showing numeric value.' },
        { name: 'Boundary Min/Max', description: 'Disables step button when limit is reached.' },
      ],
    },
    layout: {
      overview: '32px height with compact vertical stepper button column on trailing edge.',
      rules: [
        { title: 'Fixed Width', description: 'Often constrained to 100px-140px width.' },
      ],
    },
    content: {
      overview: 'Pair with clear Label indicating what quantity is being adjusted.',
      guidelines: [
        { title: 'Explicit Unit', description: 'e.g. "Cluster Instances", "Port Number".' },
      ],
    },
    accessibility: {
      role: 'spinbutton',
      ariaAttributes: [
        { attribute: 'aria-valuenow', description: 'Current numeric value.' },
        { attribute: 'aria-valuemin', description: 'Minimum limit.' },
        { attribute: 'aria-valuemax', description: 'Maximum limit.' },
      ],
      wcagNotes: 'Screen reader announces numeric updates on each step increment.',
    },
    quickGuides: [
      {
        title: 'SpinButton Stepper',
        description: 'Numeric field with step increment buttons.',
        codeSnippet: `import { SpinButton } from '@winplaybox/react';\n\n<SpinButton label="Replicas" min={1} max={10} value={replicas} onChange={setReplicas} />`,
      },
    ],
  },

  spinner: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-spinner--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-17&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/spinner/usage',
    types: {
      overview: 'Spinner displays an animated circular ring indicating an active loading process.',
      items: [
        { name: 'Tiny / Extra Small', description: '16px spinner suited for inline button indicators.', badge: '16px' },
        { name: 'Small', description: '20px spinner for list items and inputs.', badge: '20px' },
        { name: 'Medium', description: '32px default spinner for panels and dialogs.', badge: '32px' },
        { name: 'Large', description: '48px spinner for full-screen view transitions.', badge: '48px' },
      ],
    },
    behavior: {
      overview: 'Rotates continuously at 1000ms linear ease. Pauses on prefers-reduced-motion.',
      states: [
        { name: 'Active', description: 'Smooth vector arc rotation.' },
      ],
    },
    layout: {
      overview: 'Centered inline or block presentation.',
      rules: [
        { title: 'Label Gap', description: '8px vertical or horizontal gap between spinner and text label.' },
      ],
    },
    content: {
      overview: 'Include an accessible status description: "Loading assets...", "Saving...".',
      guidelines: [
        { title: 'Informative Status', description: 'Tell the user what is processing.' },
      ],
    },
    accessibility: {
      role: 'status',
      ariaAttributes: [
        { attribute: 'aria-live="polite"', description: 'Politely announces loading to screen readers.' },
        { attribute: 'aria-busy="true"', description: 'Marks container as busy.' },
      ],
      wcagNotes: 'Ensures screen readers hear loading state without audio stutter.',
    },
    quickGuides: [
      {
        title: 'Spinner with Label',
        description: 'Loading spinner with centered status label.',
        codeSnippet: `import { Spinner } from '@winplaybox/react';\n\n<Spinner size="md" label="Synchronizing database records..." />`,
      },
    ],
  },

  switch: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-switch--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-18&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/switch/usage',
    types: {
      overview: 'Switch toggles the state of a single setting on or off with immediate effect.',
      items: [
        { name: 'Standard Switch', description: 'Pill track with sliding circle thumb handle.', badge: 'Standard' },
      ],
    },
    behavior: {
      overview: 'Click or Space toggles between checked and unchecked with spring motion.',
      states: [
        { name: 'Checked / On', description: 'Solid brand track fill; thumb aligned right.' },
        { name: 'Unchecked / Off', description: 'Muted gray border track; thumb aligned left.' },
      ],
    },
    layout: {
      overview: '40px track width, 20px track height with 16px thumb diameter.',
      rules: [
        { title: 'Touch Targets', description: 'Surrounded by minimum 44pt touch area.' },
      ],
    },
    content: {
      overview: 'Label must express an active setting: "Enable dark mode", "Push notifications".',
      guidelines: [
        { title: 'No Ambiguity', description: 'Avoid question phrasing; state the setting clearly.' },
      ],
    },
    accessibility: {
      role: 'switch',
      ariaAttributes: [
        { attribute: 'aria-checked', description: 'Reflects boolean on/off state.' },
      ],
      wcagNotes: 'Screen reader explicitly announces "On" or "Off".',
    },
    quickGuides: [
      {
        title: 'Controlled Switch',
        description: 'Settings switch with boolean state handler.',
        codeSnippet: `import { Switch } from '@winplaybox/react';\n\n<Switch label="Enable Live Telemetry" checked={enabled} onChange={setEnabled} />`,
      },
    ],
  },

  'status-indicator': {
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8995-8&p=f&t=oAeyUpJadWLPjABz-0',
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-badge--docs',
    types: {
      overview: 'StatusIndicator visualizes online presence, service health, and operational readiness.',
      items: [
        { name: 'Online / Healthy', description: 'Green dot indicator representing active service.', badge: 'Success' },
        { name: 'Warning / Degraded', description: 'Amber dot indicator representing high latency or degraded state.', badge: 'Warning' },
        { name: 'Critical / Offline', description: 'Red dot indicator representing system outage.', badge: 'Critical' },
        { name: 'Live Pulse', description: 'Subtle animated pulse ring for real-time telemetry streams.', badge: 'Pulse' },
      ],
    },
    behavior: {
      overview: 'Static or subtle pulse beacon; communicates state through color and icon vector.',
      states: [
        { name: 'Healthy', description: 'Solid emerald fill.' },
        { name: 'Degraded', description: 'Amber warning fill.' },
      ],
    },
    layout: {
      overview: '8px-12px diameter circle with 6px gap to accompanying label.',
      rules: [
        { title: 'Vector Centering', description: 'Strictly aligned to text cap-height.' },
      ],
    },
    content: {
      overview: 'Never rely on color alone; always pair with a descriptive text label.',
      guidelines: [
        { title: 'Text Pair', description: 'Pair green dot with "Operational" or "Active".' },
      ],
    },
    accessibility: {
      role: 'status',
      ariaAttributes: [
        { attribute: 'aria-label', description: 'e.g. "Cluster status: Healthy".' },
      ],
      wcagNotes: 'Complies with WCAG 1.4.1 (Use of Color) by including text labels.',
    },
    quickGuides: [
      {
        title: 'StatusIndicator Usage',
        description: 'Service health indicator with text label.',
        codeSnippet: `import { LiveIndicator } from '@winplaybox/react';\n\n<LiveIndicator variant="pulse" label="LIVE DATABASE FEED" />`,
      },
    ],
  },

  'color-picker': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-swatchpicker--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8995-9&p=f&t=oAeyUpJadWLPjABz-0',
    types: {
      overview: 'ColorPicker and SwatchPicker allow people to select color swatches or define custom hexadecimal values.',
      items: [
        { name: 'Swatch Grid', description: 'Grid of preset brand color swatches with active selection border.', badge: 'Grid' },
        { name: 'Hex Input', description: 'Text input with live preview swatch for custom HEX values.', badge: 'Custom' },
      ],
    },
    behavior: {
      overview: 'Clicking swatch updates active color. Arrow keys navigate swatch grid.',
      states: [
        { name: 'Selected', description: 'High contrast ring and checkmark icon inside chosen swatch.' },
      ],
    },
    layout: {
      overview: '28px square or circular swatches with 8px spacing grid.',
      rules: [
        { title: 'High Contrast Ring', description: '3:1 contrast border ensuring visibility on white/dark swatches.' },
      ],
    },
    content: {
      overview: 'Each swatch declares an accessible color name: "Deep Navy Blue", "Emerald Green".',
      guidelines: [
        { title: 'Semantic Names', description: 'Label swatches with recognizable color terms.' },
      ],
    },
    accessibility: {
      role: 'radiogroup',
      ariaAttributes: [
        { attribute: 'aria-label="Color Picker"', description: 'Declared on swatch grid.' },
      ],
      wcagNotes: 'Ensures color selection is fully navigable via keyboard arrow keys.',
    },
    quickGuides: [
      {
        title: 'SwatchPicker Example',
        description: 'Color swatch selection with hex code output.',
        codeSnippet: `import { ColorPicker } from '@winplaybox/react';\n\n<ColorPicker label="Theme Accent" value={color} onChange={setColor} />`,
      },
    ],
  },

  tabs: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-tablist--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-19&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/tablist/usage',
    types: {
      overview: 'Tabs and TabList organize content across multiple panels, displaying one panel at a time.',
      items: [
        { name: 'Horizontal Tabs', description: 'Top bar with sliding active indicator bar.', badge: 'Horizontal' },
        { name: 'Vertical Tabs', description: 'Side rail navigation tabs for deep settings screens.', badge: 'Vertical' },
      ],
    },
    behavior: {
      overview: 'Arrow Left/Right cycles between tabs; Enter/Space activates tab panel.',
      states: [
        { name: 'Selected', description: 'Active brand text and animated underline indicator.' },
        { name: 'Unselected', description: 'Subtle text color.' },
      ],
    },
    layout: {
      overview: '40px tab height with 16px-24px horizontal tab spacing.',
      rules: [
        { title: 'Active Bar', description: '2px solid brand line positioned flush along bottom border.' },
      ],
    },
    content: {
      overview: 'Tab titles must be concise (1-2 words): "Overview", "Settings", "Members", "Billing".',
      guidelines: [
        { title: 'Single Row', description: 'Avoid wrapping tabs onto multiple rows.' },
      ],
    },
    accessibility: {
      role: 'tablist',
      ariaAttributes: [
        { attribute: 'role="tab"', description: 'Declared on each clickable tab trigger.' },
        { attribute: 'aria-selected', description: 'Reflects active tab.' },
        { attribute: 'role="tabpanel"', description: 'Declared on child content panels.' },
      ],
      wcagNotes: 'Follows WAI-ARIA Tabs pattern with automatic/manual activation options.',
    },
    quickGuides: [
      {
        title: 'Tabs Implementation',
        description: 'Multi-panel tab navigation with active state.',
        codeSnippet: `import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@winplaybox/react';\n\n<Tabs defaultValue="1">\n  <TabList>\n    <Tab value="1">Overview</Tab>\n    <Tab value="2">Settings</Tab>\n  </TabList>\n  <TabPanels>\n    <TabPanel value="1">Dashboard content</TabPanel>\n    <TabPanel value="2">Preferences</TabPanel>\n  </TabPanels>\n</Tabs>`,
      },
    ],
  },

  tag: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-tag-tag--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-20&p=f&t=oAeyUpJadWLPjABz-0',
    types: {
      overview: 'Tags categorize items, display metadata attributes, or represent removable selections.',
      items: [
        { name: 'Tag', description: 'Static metadata tag showing category badges or version labels.', badge: 'Static' },
        { name: 'InteractionTag', description: 'Interactive pill with selectable click trigger and dismissable remove button.', badge: 'Interactive' },
        { name: 'TagGroup', description: 'Container managing multi-tag collections with arrow key navigation.', badge: 'Group' },
      ],
    },
    behavior: {
      overview: 'Clicking primary area toggles selection; clicking dismiss icon triggers onDismiss.',
      states: [
        { name: 'Selected', description: 'Displays filled background and checkmark icon.' },
        { name: 'Dismiss', description: 'X button removes the tag with animated collapse.' },
      ],
    },
    layout: {
      overview: 'Compact 24px or 32px height with rounded pill geometry (border-radius: 9999px).',
      rules: [
        { title: 'Group Wrapping', description: 'Wraps gracefully across multiple rows with 8px gap.' },
      ],
    },
    content: {
      overview: 'Tags contain short keywords (1 to 3 words max); never long sentences.',
      guidelines: [
        { title: 'Concise Keywords', description: 'Use "TypeScript", "Frontend", "Pending Review".' },
      ],
    },
    accessibility: {
      role: 'button',
      ariaAttributes: [
        { attribute: 'aria-label', description: 'e.g. "Remove TypeScript tag".' },
      ],
      wcagNotes: 'Dismiss button has separate focus stop and explicit accessible label.',
    },
    quickGuides: [
      {
        title: 'Tag & Dismiss Handler',
        description: 'Render interactive tags with removal callbacks.',
        codeSnippet: `import { Tag } from '@winplaybox/react';\n\n<Tag dismissible onDismiss={() => handleRemove(item)}>Frontend</Tag>`,
      },
    ],
  },

  'tag-picker': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-tagpicker--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8995-10&p=f&t=oAeyUpJadWLPjABz-0',
    types: {
      overview: 'TagPicker combines an input field with interactive suggestions to select and manage multi-tag sets.',
      items: [
        { name: 'TagPicker', description: 'Search input populated with selected tags and dropdown suggestions.', badge: 'Composite' },
      ],
    },
    behavior: {
      overview: 'Typing filters options. Backspace removes last selected tag. Enter adds tag.',
      states: [
        { name: 'Active', description: 'Displays suggestions listbox with arrow navigation.' },
      ],
    },
    layout: {
      overview: 'Dynamic multi-line input container expanding as tags are appended.',
      rules: [
        { title: 'Tag Wrapping', description: 'Tags wrap automatically with 6px gap.' },
      ],
    },
    content: {
      overview: 'Placeholder indicates action: "Add skills...", "Assign reviewers...".',
      guidelines: [
        { title: 'Clear Guidance', description: 'Prompt user on what tags can be selected.' },
      ],
    },
    accessibility: {
      role: 'combobox',
      ariaAttributes: [
        { attribute: 'aria-expanded', description: 'Reflects suggestion flyout state.' },
      ],
      wcagNotes: 'Screen reader announces tag additions and removals in live region.',
    },
    quickGuides: [
      {
        title: 'TagPicker Usage',
        description: 'Multi-select tag picker with suggestions.',
        codeSnippet: `import { TagPicker } from '@winplaybox/react';\n\n<TagPicker options={skills} selectedTags={selected} onSelect={setSelected} />`,
      },
    ],
  },

  'teaching-popover': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-teachingpopover--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8995-11&p=f&t=oAeyUpJadWLPjABz-0',
    types: {
      overview: 'TeachingPopover guides users through new features, product onboarding steps, and tutorials.',
      items: [
        { name: 'Single Step', description: 'Standalone feature callout with headline, text, and Got It button.', badge: 'Single' },
        { name: 'Carousel Tour', description: 'Multi-step tour with "Step 2 of 4", Next, and Back buttons.', badge: 'Multi-Step' },
      ],
    },
    behavior: {
      overview: 'Anchors to new feature button. Automatically traps focus during onboarding tour.',
      states: [
        { name: 'Active', description: 'Highlights target UI element with elevation shadow.' },
      ],
    },
    layout: {
      overview: '320px width card with illustration slot, headline, and action footer.',
      rules: [
        { title: 'Callout Beak', description: 'Authentic vector beak arrow points to target button.' },
      ],
    },
    content: {
      overview: 'Keep tour copy concise and highlight the immediate benefit to the user.',
      guidelines: [
        { title: 'Value First', description: 'e.g. "Save time by grouping repositories by cluster."' },
      ],
    },
    accessibility: {
      role: 'dialog',
      ariaAttributes: [
        { attribute: 'aria-labelledby', description: 'Points to tour headline ID.' },
      ],
      wcagNotes: 'Allows dismissal via Escape key at any point in the onboarding flow.',
    },
    quickGuides: [
      {
        title: 'TeachingPopover Tour',
        description: 'Onboarding step anchored to action button.',
        codeSnippet: `import { TeachingPopover, Button } from '@winplaybox/react';\n\n<TeachingPopover title="New Feature" step={1} totalSteps={3} onNext={handleNext}>\n  Try our new multi-cloud cluster explorer.\n</TeachingPopover>`,
      },
    ],
  },

  textarea: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-textarea--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-21&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/textarea/usage',
    types: {
      overview: 'Textarea provides multi-line text input for comments, release notes, descriptions, and messages.',
      items: [
        { name: 'Fixed Textarea', description: 'Fixed row count with vertical scrollbar.', badge: 'Fixed' },
        { name: 'Autosize Textarea', description: 'Automatically expands vertical height as text is entered.', badge: 'Autosize' },
      ],
    },
    behavior: {
      overview: 'Supports character counter display, resize controls, and multiline keyboard entry.',
      states: [
        { name: 'Focus', description: 'Dual-ring focus outline and active brand border.' },
        { name: 'Error', description: 'Red validation border with error message.' },
      ],
    },
    layout: {
      overview: 'Default min-height of 80px (3 rows) with 12px padding.',
      rules: [
        { title: 'Resize Control', description: 'Defaults to vertical resize only (resize: vertical).' },
      ],
    },
    content: {
      overview: 'Pair with visible Label and character count limit indicator.',
      guidelines: [
        { title: 'Character Counter', description: 'e.g. "140 / 500 characters remaining".' },
      ],
    },
    accessibility: {
      role: 'textbox',
      ariaAttributes: [
        { attribute: 'aria-multiline="true"', description: 'Informs screen reader that input accepts multiple lines.' },
      ],
      wcagNotes: 'Meets text contrast and accessible character limit criteria.',
    },
    quickGuides: [
      {
        title: 'Controlled Textarea',
        description: 'Textarea with autosize and character counter.',
        codeSnippet: `import { Textarea } from '@winplaybox/react';\n\n<Textarea label="Release Notes" maxLength={500} showCount value={notes} onChange={e => setNotes(e.target.value)} />`,
      },
    ],
  },

  toast: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-toast--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-22&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/toast/usage',
    types: {
      overview: 'Toast displays transient notification cards that slide in at the viewport corner and auto-dismiss.',
      items: [
        { name: 'Success Toast', description: 'Green confirmation card for background operations.', badge: 'Success' },
        { name: 'Error Toast', description: 'Red notification requiring user awareness.', badge: 'Error' },
        { name: 'Action Toast', description: 'Includes an "Undo" or "View" action button.', badge: 'Actionable' },
      ],
    },
    behavior: {
      overview: 'Slides in with spring animation. Auto-dismisses after 4000ms unless hovered.',
      states: [
        { name: 'Active', description: 'Floating card with dismiss timer paused on mouse hover.' },
      ],
    },
    layout: {
      overview: 'Fixed position bottom-right or top-right with 16px viewport offset.',
      rules: [
        { title: 'Stacking Order', description: 'New toasts push existing notifications upward.' },
      ],
    },
    content: {
      overview: 'Keep messages short and informative (1 sentence max).',
      guidelines: [
        { title: 'Past Tense Confirmation', description: 'Use "Changes saved successfully", "File exported".' },
      ],
    },
    accessibility: {
      role: 'status',
      ariaAttributes: [
        { attribute: 'aria-live="polite"', description: 'Allows screen readers to finish current utterance first.' },
      ],
      wcagNotes: 'Pause on hover allows low-vision users sufficient time to read.',
    },
    quickGuides: [
      {
        title: 'Toast Notification Dispatch',
        description: 'Trigger a transient confirmation toast.',
        codeSnippet: `import { Toast } from '@winplaybox/react';\n\n<Toast title="Deployment Complete" body="Cluster us-east-1 is online." variant="success" />`,
      },
    ],
  },

  toolbar: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-toolbar--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-24&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/toolbar/usage',
    types: {
      overview: 'Toolbar groups formatting actions, command buttons, toggle groups, and overflow menus.',
      items: [
        { name: 'Standard Toolbar', description: 'Horizontal strip of icon buttons and dropdown triggers.', badge: 'Horizontal' },
        { name: 'Overflow Toolbar', description: 'Automatically collapses trailing buttons into a More (...) menu on narrow viewports.', badge: 'Responsive' },
      ],
    },
    behavior: {
      overview: 'Arrow Left/Right navigates between toolbar items (single tab stop for whole toolbar).',
      states: [
        { name: 'Focus', description: 'Active toolbar item receives focus ring.' },
      ],
    },
    layout: {
      overview: '40px height with 4px gap between adjacent button triggers.',
      rules: [
        { title: 'Dividers', description: 'Subtle vertical dividers separate functional clusters.' },
      ],
    },
    content: {
      overview: 'All icon-only toolbar buttons MUST declare explicit aria-label attributes.',
      guidelines: [
        { title: 'Tooltip Pairing', description: 'Wrap toolbar buttons in Tooltip to display command names.' },
      ],
    },
    accessibility: {
      role: 'toolbar',
      ariaAttributes: [
        { attribute: 'aria-label', description: 'e.g. "Document Formatting Toolbar".' },
      ],
      wcagNotes: 'Roving tabindex prevents excessive tabbing for keyboard users.',
    },
    quickGuides: [
      {
        title: 'Accessible Toolbar',
        description: 'Toolbar with grouped actions and divider.',
        codeSnippet: `import { Toolbar, Button } from '@winplaybox/react';\n\n<Toolbar aria-label="Text Formatting">\n  <Button icon={<BoldIcon />} aria-label="Bold" />\n  <Button icon={<ItalicIcon />} aria-label="Italic" />\n</Toolbar>`,
      },
    ],
  },

  tooltip: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-tooltip--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-25&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/tooltip/usage',
    types: {
      overview: 'Tooltip displays a brief descriptive text label when hovering or focusing an interactive control.',
      items: [
        { name: 'Dark Tooltip', description: 'High contrast dark pill for maximum legibility on light surfaces.', badge: 'Default' },
        { name: 'Inverted Tooltip', description: 'Light pill for dark themes.', badge: 'Inverted' },
      ],
    },
    behavior: {
      overview: 'Appears after a 300ms hover delay. Appears immediately on keyboard focus. Dismisses on Escape.',
      states: [
        { name: 'Visible', description: 'Compact floating pill anchored to trigger element.' },
      ],
    },
    layout: {
      overview: 'Max width 240px with 4px-8px padding and 4px border radius.',
      rules: [
        { title: 'Offset', description: 'Maintains 6px offset from target trigger.' },
      ],
    },
    content: {
      overview: 'Tooltips contain brief phrases (1-4 words). Never duplicate existing visible button text.',
      guidelines: [
        { title: 'No Redundancy', description: 'Do not add tooltip "Save" to a button that already says "Save".' },
      ],
    },
    accessibility: {
      role: 'tooltip',
      ariaAttributes: [
        { attribute: 'aria-describedby', description: 'Points trigger control to tooltip ID.' },
      ],
      wcagNotes: 'Meets WCAG 2.1 Success Criterion 1.4.13 (Content on Hover or Focus).',
    },
    quickGuides: [
      {
        title: 'Tooltip Wrapper',
        description: 'Provide contextual help for icon-only button.',
        codeSnippet: `import { Tooltip, IconButton } from '@winplaybox/react';\n\n<Tooltip content="Copy repository clone URL">\n  <IconButton icon={<CopyIcon />} aria-label="Copy clone URL" />\n</Tooltip>`,
      },
    ],
  },

  'tree-view': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-tree--docs',
    figmaUrl: 'https://www.figma.com/design/cTyqG9EaIViUnh0ND5UyvR/Microsoft-Fluent-2-Web--Community-?node-id=8934-23&p=f&t=oAeyUpJadWLPjABz-0',
    fluentUsageUrl: 'https://fluent2.microsoft.design/components/web/react/core/tree/usage',
    types: {
      overview: 'TreeView represents hierarchical data structures like folder systems and nested taxonomies.',
      items: [
        { name: 'Tree', description: 'Nested tree list with collapsible chevron nodes.', badge: 'Tree' },
        { name: 'Multi-Select Tree', description: 'Tree with checkboxes allowing branch and leaf selection.', badge: 'Checkable' },
      ],
    },
    behavior: {
      overview: 'Arrow Right expands node; Arrow Left collapses node; Arrow Up/Down navigates rows.',
      states: [
        { name: 'Expanded', description: 'Reveals child nodes with animated indentation.' },
        { name: 'Collapsed', description: 'Hides child nodes.' },
      ],
    },
    layout: {
      overview: '16px indent per hierarchy level with 28px row height.',
      rules: [
        { title: 'Chevron Alignment', description: 'Expand chevron precedes folder/file icon.' },
      ],
    },
    content: {
      overview: 'Display node title clearly with optional item count badge.',
      guidelines: [
        { title: 'Clear Hierarchy', description: 'Ensure parent folders and child leaves are visually distinct.' },
      ],
    },
    accessibility: {
      role: 'tree',
      ariaAttributes: [
        { attribute: 'role="treeitem"', description: 'Declared on each tree node.' },
        { attribute: 'aria-expanded', description: 'Reflects node expansion state.' },
      ],
      wcagNotes: 'Complies with WAI-ARIA Treeview APG keyboard specifications.',
    },
    quickGuides: [
      {
        title: 'Hierarchical TreeView',
        description: 'Render nested folder structure with selection callback.',
        codeSnippet: `import { TreeView } from '@winplaybox/react';\n\n<TreeView data={folderTree} onNodeSelect={handleSelect} />`,
      },
    ],
  },

  overflow: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-overflow--docs',
    types: {
      overview: 'Overflow dynamically monitors container width and shifts overflowing items into a secondary menu.',
      items: [
        { name: 'OverflowContainer', description: 'ResizeObserver-powered layout manager.', badge: 'Container' },
      ],
    },
    behavior: {
      overview: 'Calculates available space in real time to avoid horizontal page clipping.',
      states: [
        { name: 'Responsive', description: 'Moves trailing items into More button menu smoothly.' },
      ],
    },
    layout: {
      overview: 'Single-line flex container with hidden horizontal overflow.',
      rules: [
        { title: 'Priority Order', description: 'Lower priority items collapse first.' },
      ],
    },
    content: {
      overview: 'More button icon is an authentic three-dots vector with aria-label="More actions".',
      guidelines: [
        { title: 'Keep Primary Visible', description: 'Assign highest priority to primary action buttons.' },
      ],
    },
    accessibility: {
      role: 'group',
      ariaAttributes: [
        { attribute: 'aria-label="Responsive Commands"', description: 'Declared on container.' },
      ],
      wcagNotes: 'Ensures keyboard navigation accesses overflowed items via dropdown menu.',
    },
    quickGuides: [
      {
        title: 'Responsive Overflow Strip',
        description: 'Auto-collapse commands when window resizes.',
        codeSnippet: `import { Overflow } from '@winplaybox/react';\n\n<Overflow items={actions} renderOverflowMenu={menuItems} />`,
      },
    ],
  },

  image: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-image--docs',
    types: {
      overview: 'Image displays optimized raster and vector graphics with shape masking and fallback states.',
      items: [
        { name: 'Default Image', description: 'Responsive fluid image matching parent width.', badge: 'Responsive' },
        { name: 'Rounded / Circular', description: 'Masked with border-radius for portraits and avatars.', badge: 'Masked' },
      ],
    },
    behavior: {
      overview: 'Supports lazy loading (loading="lazy") and smooth fade-in upon decode completion.',
      states: [
        { name: 'Loaded', description: 'Image renders cleanly with proper aspect ratio.' },
        { name: 'Error', description: 'Renders authentic fallback illustration placeholder.' },
      ],
    },
    layout: {
      overview: 'Preserves intrinsic aspect ratio using CSS aspect-ratio tokens.',
      rules: [
        { title: 'Object Fit', description: 'Supports objectFit: cover, contain, and fill.' },
      ],
    },
    content: {
      overview: 'Every image MUST declare an informative alt attribute (or alt="" for decorative images).',
      guidelines: [
        { title: 'Descriptive Alt', description: 'Describe what the image depicts for visually impaired users.' },
      ],
    },
    accessibility: {
      role: 'img',
      ariaAttributes: [
        { attribute: 'alt', description: 'Text alternative required for WCAG 1.1.1.' },
      ],
      wcagNotes: 'Decorative images must declare alt="" to prevent screen reader noise.',
    },
    quickGuides: [
      {
        title: 'Responsive Masked Image',
        description: 'Render image with rounded corners and alt text.',
        codeSnippet: `import { Image } from '@winplaybox/react';\n\n<Image src="/hero.webp" alt="Spectra UI Architecture Diagram" rounded />`,
      },
    ],
  },

  portal: {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/components-portal-portal--docs',
    types: {
      overview: 'Portal mounts children elements to a separate DOM container outside current hierarchy.',
      items: [
        { name: 'Portal', description: 'Standard portal rendering children at document.body.', badge: 'Root' },
        { name: 'toMountNodeProps', description: 'Configures custom DOM mount targets with stacking contexts.', badge: 'Target' },
      ],
    },
    behavior: {
      overview: 'Preserves React event bubbling while completely escaping CSS overflow: hidden constraints.',
      states: [
        { name: 'Mounted', description: 'Nodes are rendered in destination container seamlessly.' },
      ],
    },
    layout: {
      overview: 'Allows tooltips, dialogs, and popovers to render on top of all application layers.',
      rules: [
        { title: 'Z-Index Isolation', description: 'Avoids z-index conflicts by living at body level.' },
      ],
    },
    content: {
      overview: 'Technical rendering utility with transparent content passthrough.',
      guidelines: [
        { title: 'Always Clean Up', description: 'Ensures target DOM nodes unmount on component destruction.' },
      ],
    },
    accessibility: {
      role: 'generic',
      ariaAttributes: [],
      wcagNotes: 'Preserves logical focus management and keyboard accessibility.',
    },
    quickGuides: [
      {
        title: 'Portal Usage',
        description: 'Mount floating modal or tooltip outside current container.',
        codeSnippet: `import { Portal } from '@winplaybox/react';\n\n<Portal mountNode={document.body}>\n  <div className="floating-card">Mounted at body</div>\n</Portal>`,
      },
    ],
  },

  'time-picker': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/compat-components-timepicker--docs',
    types: {
      overview: 'TimePicker lets users select or input specific hours and minutes from an interval list.',
      items: [
        { name: '12-Hour Format', description: 'Displays times with AM/PM indicators.', badge: '12h' },
        { name: '24-Hour Format', description: 'Displays military / UTC standard 24h format.', badge: '24h' },
      ],
    },
    behavior: {
      overview: 'Opens dropdown with 15/30-minute intervals. Validates manually typed time strings.',
      states: [
        { name: 'Active', description: 'Scrolls to current time interval automatically.' },
      ],
    },
    layout: {
      overview: 'Standard input height with clock vector icon affix.',
      rules: [
        { title: 'Dropdown MaxHeight', description: 'Scrollable list with 240px maximum height.' },
      ],
    },
    content: {
      overview: 'Label specifies timezone if cross-region scheduling is active.',
      guidelines: [
        { title: 'Timezone Clarification', description: 'e.g. "Meeting Time (UTC+05:30)".' },
      ],
    },
    accessibility: {
      role: 'combobox',
      ariaAttributes: [
        { attribute: 'aria-haspopup="listbox"', description: 'Informs screen reader of interval options.' },
      ],
      wcagNotes: 'Keyboard typeahead allows jumping to specific hour directly.',
    },
    quickGuides: [
      {
        title: 'TimePicker Interval Selection',
        description: 'Select appointment time with 30m steps.',
        codeSnippet: `import { TimePicker } from '@winplaybox/react';\n\n<TimePicker label="Meeting Time" step={30} value={time} onChange={setTime} />`,
      },
    ],
  },

  'date-picker': {
    storybookUrl: 'https://storybooks.fluentui.dev/react/?path=/docs/compat-components-datepicker--docs',
    types: {
      overview: 'DatePicker pairs an input field with an interactive calendar popover for reliable date selection.',
      items: [
        { name: 'Standard DatePicker', description: 'Single date picker with calendar dropdown.', badge: 'Single' },
        { name: 'Date Range Picker', description: 'Selects start date and end date with highlighted interval range.', badge: 'Range' },
      ],
    },
    behavior: {
      overview: 'Calendar opens on click or focus. Arrow keys move across calendar days.',
      states: [
        { name: 'Open', description: 'Calendar popover anchored below input.' },
      ],
    },
    layout: {
      overview: 'Standard input density (32px / 40px) with calendar icon in prefix slot.',
      rules: [
        { title: 'Popover Flipping', description: 'Flips above if viewport bottom space is tight.' },
      ],
    },
    content: {
      overview: 'Placeholder indicates expected date format: "YYYY-MM-DD" or "MM/DD/YYYY".',
      guidelines: [
        { title: 'Format Clarification', description: 'Prevent date format misunderstandings.' },
      ],
    },
    accessibility: {
      role: 'combobox',
      ariaAttributes: [
        { attribute: 'aria-haspopup="dialog"', description: 'Informs user of calendar dialog.' },
      ],
      wcagNotes: 'Meets WAI-ARIA Date Picker keyboard navigation requirements.',
    },
    quickGuides: [
      {
        title: 'DatePicker Usage',
        description: 'Controlled date picker with calendar flyout.',
        codeSnippet: `import { DatePicker } from '@winplaybox/react';\n\n<DatePicker label="Target Deployment Date" value={date} onChange={setDate} />`,
      },
    ],
  },
};

/**
 * Universal Storybook URL Resolver
 * Resolves verified Storybook doc link for any component ID with fallback pattern.
 */
export function getComponentStorybookUrl(componentId: string): string {
  const norm = normalizeComponentId(componentId);
  return `http://localhost:6006/?path=/docs/components-${norm}--docs`;
}

/**
 * Universal Figma Community Spec Resolver
 */
export function getComponentFigmaUrl(componentId: string): string | undefined {
  const norm = normalizeComponentId(componentId);
  return COMPONENT_RESOURCES_MAP[norm]?.figmaUrl;
}

/**
 * Universal Fluent 2 Official Usage Resolver
 */
export function getComponentFluentUsageUrl(componentId: string): string | undefined {
  const norm = normalizeComponentId(componentId);
  return COMPONENT_RESOURCES_MAP[norm]?.fluentUsageUrl;
}

/**
 * Universal 7 Pillars Data Resolver
 * Returns tailored 7 Pillars data if registered in master map,
 * or synthesizes rich, compliant 7 Pillars specifications dynamically from component metadata!
 */
export function getComponent7Pillars(componentId: string, meta?: any): Component7Pillars {
  const norm = normalizeComponentId(componentId);
  if (COMPONENT_RESOURCES_MAP[norm]) {
    return COMPONENT_RESOURCES_MAP[norm];
  }

  // Fallback: Dynamically generate complete 7 Pillars based on component metadata
  const compName = meta?.name || componentId.charAt(0).toUpperCase() + componentId.slice(1);
  const compDesc = meta?.description || `${compName} is a high-performance cross-platform component in the Spectra UI design system.`;
  const storybookUrl = getComponentStorybookUrl(componentId);
  const figmaUrl = getComponentFigmaUrl(componentId);
  const fluentUsageUrl = getComponentFluentUsageUrl(componentId);

  // Extract anatomy
  const anatomyParts = meta?.anatomy && Array.isArray(meta.anatomy) && meta.anatomy.length > 0
    ? meta.anatomy.map((a: any) => ({ title: a.name || 'Slot', description: a.role || 'Structural slot part' }))
    : [
        { title: 'Root Container', description: `Top-level wrapper with styling tokens and layout boundary for ${compName}.` },
        { title: 'Content Area', description: 'Primary interactive or informational display slot.' },
      ];

  // Extract keyboard
  const keyboardRules = meta?.keyboard && Array.isArray(meta.keyboard) && meta.keyboard.length > 0
    ? meta.keyboard.map((k: any) => ({ attribute: k.key || 'Key', description: k.description || 'Focus & interaction behavior' }))
    : [
        { attribute: 'Tab / Shift+Tab', description: 'Moves focus into and out of the component in logical DOM order.' },
        { attribute: 'Enter / Space', description: 'Activates the primary action or toggles selection state.' },
        { attribute: 'Escape', description: 'Dismisses floating popovers, menus, or modal overlays.' },
      ];

  // Extract guidelines
  const dos = meta?.dos && Array.isArray(meta.dos) && meta.dos.length > 0
    ? meta.dos.map((d: string) => ({ title: 'Recommended', description: d }))
    : [{ title: 'Design Consistency', description: `Use semantic tokens and maintain proper visual hierarchy when deploying ${compName}.` }];

  return {
    storybookUrl,
    figmaUrl,
    fluentUsageUrl,
    types: {
      overview: `Conforming to enterprise design standards, ${compName} provides consistent appearances, responsive sizing scales, and cross-platform behavior.`,
      items: [
        { name: 'Standard', description: `Default production configuration for ${compName}.`, badge: 'Primary' },
        { name: 'Secondary', description: 'Subtle or neutral variation for lower-emphasis views.', badge: 'Neutral' },
        { name: 'Compact / Dense', description: 'High-density sizing scale engineered for data grids and toolbars.', badge: 'Dense' },
      ],
    },
    behavior: {
      overview: `Supports responsive state transitions with 150ms timing curves and accessible keyboard focus navigation.`,
      states: [
        { name: 'Default', description: 'Resting state adhering to design token color schemes.' },
        { name: 'Hover', description: 'Visual feedback confirming interactive pointer presence.' },
        { name: 'Focus Visible', description: 'Double-ring 2px focus outline with minimum 3:1 contrast ratio.' },
        { name: 'Disabled', description: 'Suppressed pointer events with aria-disabled="true" for screen readers.' },
      ],
    },
    layout: {
      overview: `Engineered on the 4px design token grid with responsive density and centered vector alignment.`,
      rules: [
        { title: 'Spacing & Gaps', description: 'Adheres strictly to --space-1 (4px), --space-2 (8px), and --space-4 (16px) design tokens.' },
        ...anatomyParts,
      ],
    },
    content: {
      overview: `Labels and content must be concise, unambiguous, and formatted in sentence case.`,
      guidelines: [
        ...dos,
        { title: 'Accessible Labeling', description: `Ensure ${compName} has an accessible name via visible text or aria-label.` },
      ],
    },
    accessibility: {
      role: meta?.waiPattern || 'region',
      ariaAttributes: keyboardRules,
      wcagNotes: `Meets WCAG 2.1 AA compliance with minimum 4.5:1 text contrast and 3:1 focus ring contrast.`,
    },
    quickGuides: [
      {
        title: 'Tree-Shakeable Direct Import',
        description: `Import ${compName} directly from @winplaybox/react to minimize client bundle size.`,
        codeSnippet: `import { ${compName.replace(/\s+/g, '')} } from '@winplaybox/react';\n\n<${compName.replace(/\s+/g, '')} />`,
      },
      {
        title: 'Minimizing Bundle Size',
        description: 'Spectra UI packages support side-effect-free tree shaking. Ensure your bundler avoids importing non-essential modules.',
      },
    ],
  };
}

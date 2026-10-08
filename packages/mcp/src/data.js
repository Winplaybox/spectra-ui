/**
 * Spectra UI MCP Design System Data Registry
 * Auto-generated and synchronized across @winplaybox/react, @winplaybox/react-native,
 * @winplaybox/tokens, @winplaybox/primitives, @winplaybox/platform-capabilities, and @winplaybox/icons.
 */

export const COMPONENTS = {
  "button": {
    "id": "button",
    "name": "Button",
    "category": "Actions",
    "description": "Buttons allow users to trigger actions or events, such as submitting a form, opening a dialog, canceling an operation, or performing a deletion.",
    "importStatement": "import { Button } from '@winplaybox/react';",
    "nativeImport": "import { Button } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "variant",
        "type": "'primary' | 'secondary' | 'subtle' | 'danger' | 'outline'",
        "defaultValue": "'primary'",
        "description": "Visual appearance and emphasis."
      },
      {
        "name": "size",
        "type": "'sm' | 'md' | 'lg'",
        "defaultValue": "'md'",
        "description": "Density and touch target scale."
      },
      {
        "name": "disabled",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Prevents interaction and applies dimmed styling."
      },
      {
        "name": "loading",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Animated loading spinner with aria-busy=\"true\"."
      },
      {
        "name": "icon",
        "type": "ReactNode",
        "defaultValue": "undefined",
        "description": "Contextual vector icon."
      },
      {
        "name": "iconPosition",
        "type": "'left' | 'right'",
        "defaultValue": "'left'",
        "description": "Placement of icon relative to label."
      },
      {
        "name": "fullWidth",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Stretches button to 100% container width."
      }
    ],
    "nativeProps": [],
    "tokens": [
      "--spectra-button-bg",
      "--spectra-button-border",
      "--spectra-button-radius"
    ],
    "recipes": [
      {
        "title": "Primary Web Button with Leading Icon",
        "code": "import { Button } from '@winplaybox/react';\nimport { DownloadIcon } from '@winplaybox/icons';\n\n<Button variant=\"primary\" icon={<DownloadIcon size={16} />}>Export Report</Button>"
      },
      {
        "title": "Native Mobile Button",
        "code": "import { Button } from '@winplaybox/react-native';\n\n<Button title=\"Confirm Action\" variant=\"primary\" onPress={() => console.log('Confirmed')} />"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger",
          "outline"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state",
          "full-width"
        ],
        "states": [
          "default",
          "hover",
          "focus",
          "active",
          "disabled",
          "loading"
        ],
        "accessibility": [
          "role=\"button\"",
          "aria-busy",
          "aria-disabled",
          "focus-visible ring"
        ],
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state"
        ],
        "states": [
          "default",
          "pressed",
          "disabled",
          "loading"
        ],
        "accessibility": [
          "accessibilityRole=\"button\"",
          "accessibilityState",
          "48dp touch target"
        ],
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state"
        ],
        "states": [
          "default",
          "pressed",
          "disabled",
          "loading"
        ],
        "accessibility": [
          "accessibilityRole=\"button\"",
          "accessibilityState",
          "44pt touch target"
        ],
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state"
        ],
        "states": [
          "default",
          "hover",
          "pressed",
          "focused",
          "disabled"
        ],
        "accessibility": [
          "UIAutomation Invoke pattern"
        ],
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state"
        ],
        "states": [
          "default",
          "hover",
          "pressed",
          "focused",
          "disabled"
        ],
        "accessibility": [
          "NSAccessibilityButtonRole"
        ],
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Use primary variant for the single main call to action",
        "Supply accessible labels or text children for screen readers",
        "Respect platform touch minimums (48dp Android, 44pt iOS)"
      ],
      "dont": [
        "Never place multiple primary buttons adjacent to each other",
        "Never use emojis in button labels"
      ]
    }
  },
  "text-input": {
    "id": "text-input",
    "name": "TextInput",
    "category": "Form",
    "description": "Text fields let users enter and edit text across forms, search bars, and dialogs with built-in states for focus, error, and validation.",
    "importStatement": "import { TextInput } from '@winplaybox/react';",
    "nativeImport": "import { TextInput } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "label",
        "type": "string",
        "description": "Accessible label above field."
      },
      {
        "name": "placeholder",
        "type": "string",
        "description": "Hint text."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Controlled input value."
      },
      {
        "name": "onChange",
        "type": "(e: ChangeEvent<HTMLInputElement>) => void",
        "description": "Input change handler."
      },
      {
        "name": "error",
        "type": "boolean | string",
        "description": "Error outline and message."
      },
      {
        "name": "description",
        "type": "string",
        "description": "Helper text."
      },
      {
        "name": "leftIcon",
        "type": "ReactNode",
        "description": "Leading icon."
      },
      {
        "name": "rightAction",
        "type": "ReactNode",
        "description": "Trailing action."
      }
    ],
    "nativeProps": [],
    "tokens": [
      "--spectra-text-input-bg",
      "--spectra-text-input-border",
      "--spectra-text-input-radius"
    ],
    "recipes": [
      {
        "title": "Password Field with Reveal Toggle",
        "code": "import React, { useState } from 'react';\nimport { TextInput } from '@winplaybox/react';\nimport { EyeIcon, EyeOffIcon } from '@winplaybox/icons';\n\nexport function PasswordInput() {\n  const [show, setShow] = useState(false);\n  return (\n    <TextInput\n      label=\"Password\"\n      type={show ? 'text' : 'password'}\n      rightAction={\n        <button type=\"button\" onClick={() => setShow(!show)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>\n          {show ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}\n        </button>\n      }\n    />\n  );\n}"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "variants": [
          "outlined",
          "filled",
          "standard"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "email",
          "multiline",
          "select-autocomplete",
          "prefix-suffix"
        ],
        "states": [
          "default",
          "hover",
          "focus",
          "disabled",
          "readonly",
          "error",
          "success",
          "loading"
        ],
        "accessibility": [
          "aria-invalid",
          "aria-describedby",
          "aria-required",
          "roving-tabIndex"
        ],
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "variants": [
          "outlined",
          "filled"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "email",
          "multiline"
        ],
        "states": [
          "default",
          "focused",
          "disabled",
          "error"
        ],
        "accessibility": [
          "accessibilityRole=\"none\"",
          "accessibilityLabel",
          "48dp touch target"
        ],
        "unsupportedRecipes": [
          "select-autocomplete",
          "prefix-suffix",
          "hover-effects"
        ],
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "variants": [
          "default",
          "search"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "email",
          "multiline"
        ],
        "states": [
          "default",
          "focused",
          "disabled",
          "error"
        ],
        "accessibility": [
          "accessibilityTraits=[\"none\"]",
          "VoiceOver value readout",
          "44pt touch target"
        ],
        "unsupportedRecipes": [
          "select-autocomplete",
          "prefix-suffix",
          "hover-effects"
        ],
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "variants": [
          "default",
          "outlined"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "multiline"
        ],
        "states": [
          "default",
          "hover",
          "focused",
          "disabled",
          "error"
        ],
        "accessibility": [
          "UIAutomation Text pattern",
          "high-contrast-focus-rect"
        ],
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "variants": [
          "default"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "multiline"
        ],
        "states": [
          "default",
          "hover",
          "focused",
          "disabled",
          "error"
        ],
        "accessibility": [
          "NSAccessibilityTextFieldRole",
          "voiceover-announcement"
        ],
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Always associate labels with inputs using labelProps / accessibilityLabel",
        "Use secureTextEntry / type=\"password\" for sensitive credentials",
        "Provide clear, non-punitive error messages when validation fails",
        "Configure platform-correct virtual keyboards (e.g. keyboardType=\"email-address\")"
      ],
      "dont": [
        "Never rely solely on placeholder text as a substitute for a field label",
        "Never show desktop hover indicators on touch-only mobile devices",
        "Never force web DOM measurement into native TextInput implementations"
      ]
    }
  },
  "select": {
    "id": "select",
    "name": "Select",
    "category": "Form",
    "description": "Select menus allow users to choose one option from a list of predefined options in compact form surfaces.",
    "importStatement": "import { Select } from '@winplaybox/react';",
    "nativeImport": "import { Select } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-select-bg",
      "--spectra-select-border",
      "--spectra-select-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Select accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "checkbox": {
    "id": "checkbox",
    "name": "Checkbox",
    "category": "Form",
    "description": "Checkboxes allow users to select one or multiple items from a list, or toggle an independent option on or off.",
    "importStatement": "import { Checkbox } from '@winplaybox/react';",
    "nativeImport": "import { Checkbox } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-checkbox-bg",
      "--spectra-checkbox-border",
      "--spectra-checkbox-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Checkbox accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "radio": {
    "id": "radio",
    "name": "Radio",
    "category": "Form",
    "description": "Radio buttons allow users to select exactly one option from a set of mutually exclusive choices that are all visible.",
    "importStatement": "import { Radio } from '@winplaybox/react';",
    "nativeImport": "import { Radio } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-radio-bg",
      "--spectra-radio-border",
      "--spectra-radio-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Radio accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "switch": {
    "id": "switch",
    "name": "Switch",
    "category": "Form",
    "description": "Switches toggle the state of a single setting on or off immediately without requiring a Save or Submit step.",
    "importStatement": "import { Switch } from '@winplaybox/react';",
    "nativeImport": "import { Switch } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-switch-bg",
      "--spectra-switch-border",
      "--spectra-switch-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Switch accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "accordion": {
    "id": "accordion",
    "name": "Accordion",
    "category": "Data Display",
    "description": "An accordion groups sections of related content that can be opened and closed. Accordions decrease cognitive load by letting people choose which sections of content they see, like questions in an FAQ.",
    "importStatement": "import { Accordion } from '@winplaybox/react';",
    "nativeImport": "import { Accordion } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-accordion-bg",
      "--spectra-accordion-border",
      "--spectra-accordion-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Accordion accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "avatar": {
    "id": "avatar",
    "name": "Avatar",
    "category": "Data Display",
    "description": "Avatars represent users or entities with an image, initials, or fallback icon, often paired with real-time status presence indicators.",
    "importStatement": "import { Avatar } from '@winplaybox/react';",
    "nativeImport": "import { Avatar } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-avatar-bg",
      "--spectra-avatar-border",
      "--spectra-avatar-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Avatar accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "list": {
    "id": "list",
    "name": "List",
    "category": "Data Display",
    "description": "Lists organize multiple items into continuous, vertical text and icon indexes for quick scanning and selection.",
    "importStatement": "import { List } from '@winplaybox/react';",
    "nativeImport": "import { List } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-list-bg",
      "--spectra-list-border",
      "--spectra-list-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow List accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "badge": {
    "id": "badge",
    "name": "Badge",
    "category": "Feedback",
    "description": "Badges are small status descriptors used to highlight item metadata, counts, tags, or system state alerts.",
    "importStatement": "import { Badge } from '@winplaybox/react';",
    "nativeImport": "import { Badge } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-badge-bg",
      "--spectra-badge-border",
      "--spectra-badge-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Badge accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "tooltip": {
    "id": "tooltip",
    "name": "Tooltip",
    "category": "Feedback",
    "description": "Tooltips display brief informative text when users hover, focus, or tap an interactive element.",
    "importStatement": "import { Tooltip } from '@winplaybox/react';",
    "nativeImport": "import { Tooltip } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-tooltip-bg",
      "--spectra-tooltip-border",
      "--spectra-tooltip-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Tooltip accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "tabs": {
    "id": "tabs",
    "name": "Tabs",
    "category": "Navigation",
    "description": "Tabs organize content across different screens or data views, allowing users to switch between related panels within the same context.",
    "importStatement": "import { Tabs } from '@winplaybox/react';",
    "nativeImport": "import { Tabs } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-tabs-bg",
      "--spectra-tabs-border",
      "--spectra-tabs-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Tabs accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "card": {
    "id": "card",
    "name": "Card",
    "category": "Surfaces",
    "description": "Cards group related content, actions, and media into a unified surface container with distinct borders and elevations.",
    "importStatement": "import { Card } from '@winplaybox/react';",
    "nativeImport": "import { Card } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-card-bg",
      "--spectra-card-border",
      "--spectra-card-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Card accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "dialog": {
    "id": "dialog",
    "name": "Dialog",
    "category": "Overlay",
    "description": "Dialogs are modal windows that require users to interact before returning to the parent application, used for critical decisions.",
    "importStatement": "import { Dialog } from '@winplaybox/react';",
    "nativeImport": "import { Dialog } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-dialog-bg",
      "--spectra-dialog-border",
      "--spectra-dialog-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Trap focus inside modal on Web",
        "Support hardware back and escape dismissal"
      ],
      "dont": [
        "Never create nested modal dialogs"
      ]
    }
  },
  "alert": {
    "id": "alert",
    "name": "Alert",
    "category": "Feedback",
    "description": "Displays prominent, urgent feedback or system status messages to users without interrupting their current workflow.",
    "importStatement": "import { Alert } from '@winplaybox/react';",
    "nativeImport": "import { Alert } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-alert-bg",
      "--spectra-alert-border",
      "--spectra-alert-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Alert accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "spinner": {
    "id": "spinner",
    "name": "Spinner",
    "category": "Feedback",
    "description": "An accessible circular rotating progress indicator used to signify background activity or pending operations.",
    "importStatement": "import { Spinner } from '@winplaybox/react';",
    "nativeImport": "import { Spinner } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-spinner-bg",
      "--spectra-spinner-border",
      "--spectra-spinner-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Spinner accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "skeleton": {
    "id": "skeleton",
    "name": "Skeleton",
    "category": "Feedback",
    "description": "Displays an animated placeholder preview of content before data finishes loading, reducing perceived loading time.",
    "importStatement": "import { Skeleton } from '@winplaybox/react';",
    "nativeImport": "import { Skeleton } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-skeleton-bg",
      "--spectra-skeleton-border",
      "--spectra-skeleton-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Skeleton accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "divider": {
    "id": "divider",
    "name": "Divider",
    "category": "Layout",
    "description": "A visual separator dividing content into distinct thematic groups or sections, supporting horizontal and vertical orientations.",
    "importStatement": "import { Divider } from '@winplaybox/react';",
    "nativeImport": "import { Divider } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-divider-bg",
      "--spectra-divider-border",
      "--spectra-divider-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Divider accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "chip": {
    "id": "chip",
    "name": "Chip",
    "category": "Data Display",
    "description": "Compact interactive badges representing entities, inputs, selections, or filters with optional leading avatars/icons and dismiss actions.",
    "importStatement": "import { Chip } from '@winplaybox/react';",
    "nativeImport": "import { Chip } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-chip-bg",
      "--spectra-chip-border",
      "--spectra-chip-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Chip accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "breadcrumbs": {
    "id": "breadcrumbs",
    "name": "Breadcrumbs",
    "category": "Navigation",
    "description": "A hierarchical navigation trail displaying the user current position within an application hierarchy and enabling one-click navigation up levels.",
    "importStatement": "import { Breadcrumbs } from '@winplaybox/react';",
    "nativeImport": "import { Breadcrumbs } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-breadcrumbs-bg",
      "--spectra-breadcrumbs-border",
      "--spectra-breadcrumbs-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Breadcrumbs accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "compound-button": {
    "id": "compound-button",
    "name": "Compound Button",
    "category": "Inputs",
    "description": "Compound buttons feature a prominent primary action label paired with a secondary descriptive subtitle to guide high-stakes decision points.",
    "importStatement": "import { Compound Button } from '@winplaybox/react';",
    "nativeImport": "import { Compound Button } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-compound-button-bg",
      "--spectra-compound-button-border",
      "--spectra-compound-button-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Compound Button accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "split-button": {
    "id": "split-button",
    "name": "Split Button",
    "category": "Inputs",
    "description": "Combines a default single-click primary action with a secondary chevron dropdown button revealing alternative actions.",
    "importStatement": "import { Split Button } from '@winplaybox/react';",
    "nativeImport": "import { Split Button } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-split-button-bg",
      "--spectra-split-button-border",
      "--spectra-split-button-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Split Button accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "button-group": {
    "id": "button-group",
    "name": "Button Group",
    "category": "Inputs",
    "description": "Horizontally or vertically groups related buttons with shared borders and unified outer corner radii.",
    "importStatement": "import { Button Group } from '@winplaybox/react';",
    "nativeImport": "import { Button Group } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-button-group-bg",
      "--spectra-button-group-border",
      "--spectra-button-group-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Button Group accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "icon-button": {
    "id": "icon-button",
    "name": "Icon Button",
    "category": "Inputs",
    "description": "Compact circular or rounded square button displaying only a vector icon with accessible aria-label.",
    "importStatement": "import { Icon Button } from '@winplaybox/react';",
    "nativeImport": "import { Icon Button } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-icon-button-bg",
      "--spectra-icon-button-border",
      "--spectra-icon-button-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Icon Button accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "textarea": {
    "id": "textarea",
    "name": "TextArea",
    "category": "Inputs",
    "description": "Multi-line text input field supporting auto-expansion, character limit counters, and resize constraints.",
    "importStatement": "import { TextArea } from '@winplaybox/react';",
    "nativeImport": "import { TextArea } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-textarea-bg",
      "--spectra-textarea-border",
      "--spectra-textarea-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow TextArea accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "combobox": {
    "id": "combobox",
    "name": "Combobox",
    "category": "Inputs",
    "description": "Hybrid input and popup menu enabling users to filter and select from extensive option lists.",
    "importStatement": "import { Combobox } from '@winplaybox/react';",
    "nativeImport": "import { Combobox } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-combobox-bg",
      "--spectra-combobox-border",
      "--spectra-combobox-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Combobox accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "autocomplete": {
    "id": "autocomplete",
    "name": "Autocomplete",
    "category": "Inputs",
    "description": "Search-driven input with real-time suggestion list, fuzzy filtering, and keyboard navigation.",
    "importStatement": "import { Autocomplete } from '@winplaybox/react';",
    "nativeImport": "import { Autocomplete } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-autocomplete-bg",
      "--spectra-autocomplete-border",
      "--spectra-autocomplete-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Autocomplete accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "checkbox-group": {
    "id": "checkbox-group",
    "name": "Checkbox Group",
    "category": "Inputs",
    "description": "Wraps multiple checkboxes within an accessible fieldset and legend to manage multi-option form state.",
    "importStatement": "import { Checkbox Group } from '@winplaybox/react';",
    "nativeImport": "import { Checkbox Group } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-checkbox-group-bg",
      "--spectra-checkbox-group-border",
      "--spectra-checkbox-group-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Checkbox Group accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "radio-group": {
    "id": "radio-group",
    "name": "Radio Group",
    "category": "Inputs",
    "description": "Enforces mutually exclusive single selection across a group of radio buttons with arrow key roaming.",
    "importStatement": "import { Radio Group } from '@winplaybox/react';",
    "nativeImport": "import { Radio Group } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-radio-group-bg",
      "--spectra-radio-group-border",
      "--spectra-radio-group-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Radio Group accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "slider": {
    "id": "slider",
    "name": "Slider",
    "category": "Inputs",
    "description": "Allows users to make selections from a continuous or discrete range of numeric values along a horizontal track.",
    "importStatement": "import { Slider } from '@winplaybox/react';",
    "nativeImport": "import { Slider } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-slider-bg",
      "--spectra-slider-border",
      "--spectra-slider-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Slider accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "rating": {
    "id": "rating",
    "name": "Rating",
    "category": "Inputs",
    "description": "Star or icon-based rating control supporting partial increments, hover previews, and keyboard selection.",
    "importStatement": "import { Rating } from '@winplaybox/react';",
    "nativeImport": "import { Rating } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-rating-bg",
      "--spectra-rating-border",
      "--spectra-rating-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Rating accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "color-picker": {
    "id": "color-picker",
    "name": "Color Picker",
    "category": "Inputs",
    "description": "Interactive hue, saturation, and hex input panel for selecting design tokens and custom color values.",
    "importStatement": "import { Color Picker } from '@winplaybox/react';",
    "nativeImport": "import { Color Picker } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-color-picker-bg",
      "--spectra-color-picker-border",
      "--spectra-color-picker-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Color Picker accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "avatar-group": {
    "id": "avatar-group",
    "name": "Avatar Group",
    "category": "Data Display",
    "description": "Stack of overlapping user avatars displaying collaborator presence with an overflow counter pill.",
    "importStatement": "import { Avatar Group } from '@winplaybox/react';",
    "nativeImport": "import { Avatar Group } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-avatar-group-bg",
      "--spectra-avatar-group-border",
      "--spectra-avatar-group-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Avatar Group accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "table": {
    "id": "table",
    "name": "Table",
    "category": "Data Display",
    "description": "Accessible tabular data display supporting zebra striping, sticky headers, and responsive horizontal scrolling.",
    "importStatement": "import { Table } from '@winplaybox/react';",
    "nativeImport": "import { Table } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-table-bg",
      "--spectra-table-border",
      "--spectra-table-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Table accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "data-grid": {
    "id": "data-grid",
    "name": "Data Grid",
    "category": "Data Display",
    "description": "High-performance virtualized grid with column sorting, filtering, cell selection, and keyboard roaming.",
    "importStatement": "import { Data Grid } from '@winplaybox/react';",
    "nativeImport": "import { Data Grid } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-data-grid-bg",
      "--spectra-data-grid-border",
      "--spectra-data-grid-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Data Grid accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "tree-view": {
    "id": "tree-view",
    "name": "Tree View",
    "category": "Data Display",
    "description": "Hierarchical collapsible folder and item list with arrow key navigation (APG Tree View pattern).",
    "importStatement": "import { Tree View } from '@winplaybox/react';",
    "nativeImport": "import { Tree View } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-tree-view-bg",
      "--spectra-tree-view-border",
      "--spectra-tree-view-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Tree View accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "tag": {
    "id": "tag",
    "name": "Tag",
    "category": "Data Display",
    "description": "Compact visual token for categorization, status indicators, and keyword labeling.",
    "importStatement": "import { Tag } from '@winplaybox/react';",
    "nativeImport": "import { Tag } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-tag-bg",
      "--spectra-tag-border",
      "--spectra-tag-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Tag accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "timeline": {
    "id": "timeline",
    "name": "Timeline",
    "category": "Data Display",
    "description": "Chronological event stream with connecting vertical vectors, status icons, and timestamp metadata.",
    "importStatement": "import { Timeline } from '@winplaybox/react';",
    "nativeImport": "import { Timeline } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-timeline-bg",
      "--spectra-timeline-border",
      "--spectra-timeline-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Timeline accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "statistic": {
    "id": "statistic",
    "name": "Statistic",
    "category": "Data Display",
    "description": "Prominent numerical display for KPI metric dashboards, comparison delta percentages, and trend arrows.",
    "importStatement": "import { Statistic } from '@winplaybox/react';",
    "nativeImport": "import { Statistic } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-statistic-bg",
      "--spectra-statistic-border",
      "--spectra-statistic-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Statistic accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "calendar": {
    "id": "calendar",
    "name": "Calendar",
    "category": "Data Display",
    "description": "Monthly date picker grid with multi-day range selection, disabled bounds, and keyboard arrow roaming.",
    "importStatement": "import { Calendar } from '@winplaybox/react';",
    "nativeImport": "import { Calendar } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-calendar-bg",
      "--spectra-calendar-border",
      "--spectra-calendar-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Calendar accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "drawer": {
    "id": "drawer",
    "name": "Drawer",
    "category": "Feedback",
    "description": "Off-canvas sliding overlay panel anchored to the left, right, top, or bottom of the viewport.",
    "importStatement": "import { Drawer } from '@winplaybox/react';",
    "nativeImport": "import { Drawer } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-drawer-bg",
      "--spectra-drawer-border",
      "--spectra-drawer-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Drawer accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "popover": {
    "id": "popover",
    "name": "Popover",
    "category": "Feedback",
    "description": "Contextual floating container anchored to a trigger element containing interactive forms and actions.",
    "importStatement": "import { Popover } from '@winplaybox/react';",
    "nativeImport": "import { Popover } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-popover-bg",
      "--spectra-popover-border",
      "--spectra-popover-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Popover accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "progress-bar": {
    "id": "progress-bar",
    "name": "Progress Bar",
    "category": "Feedback",
    "description": "Horizontal determinate or indeterminate animated bar communicating background process completion.",
    "importStatement": "import { Progress Bar } from '@winplaybox/react';",
    "nativeImport": "import { Progress Bar } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-progress-bar-bg",
      "--spectra-progress-bar-border",
      "--spectra-progress-bar-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Progress Bar accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "toast": {
    "id": "toast",
    "name": "Toast",
    "category": "Feedback",
    "description": "Ephemeral floating alert notification that auto-dismisses after a calibrated duration timeout.",
    "importStatement": "import { Toast } from '@winplaybox/react';",
    "nativeImport": "import { Toast } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-toast-bg",
      "--spectra-toast-border",
      "--spectra-toast-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Toast accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "media-card": {
    "id": "media-card",
    "name": "Media Card",
    "category": "Surfaces",
    "description": "Structured card layout pairing top media imagery or video preview with title, body, and action footer.",
    "importStatement": "import { Media Card } from '@winplaybox/react';",
    "nativeImport": "import { Media Card } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-media-card-bg",
      "--spectra-media-card-border",
      "--spectra-media-card-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Media Card accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "box": {
    "id": "box",
    "name": "Box",
    "category": "Layout",
    "description": "Fundamental polymorphic container primitive with first-class support for padding, margin, background surfaces, radii, and flex layout tokens across Web and Native.",
    "importStatement": "import { Box } from '@winplaybox/react';",
    "nativeImport": "import { Box } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "padding",
        "type": "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number",
        "description": "Token-based padding scale."
      },
      {
        "name": "margin",
        "type": "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number",
        "description": "Token-based margin scale."
      },
      {
        "name": "bg",
        "type": "'default' | 'raised' | 'elevated' | 'sunken' | 'overlay' | 'subtle' | string",
        "description": "Semantic surface token."
      },
      {
        "name": "radius",
        "type": "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | number",
        "description": "Corner border radius token."
      },
      {
        "name": "border",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Enables border outline."
      },
      {
        "name": "direction",
        "type": "'row' | 'column' | 'row-reverse' | 'column-reverse'",
        "description": "Flex layout direction."
      },
      {
        "name": "align",
        "type": "'flex-start' | 'center' | 'flex-end' | 'stretch'",
        "description": "Cross-axis alignment."
      },
      {
        "name": "justify",
        "type": "'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'",
        "description": "Main-axis distribution."
      }
    ],
    "nativeProps": [
      {
        "name": "padding",
        "type": "BoxPadding",
        "description": "Token spacing"
      },
      {
        "name": "bg",
        "type": "BoxBg",
        "description": "Semantic token surface"
      },
      {
        "name": "radius",
        "type": "BoxRadius",
        "description": "Border radius scale"
      }
    ],
    "tokens": [
      "--color-surface",
      "--color-surface-raised",
      "--color-surface-sunken"
    ],
    "recipes": [
      {
        "title": "Elevated Card Surface with Box",
        "code": "import { Box, Text } from '@winplaybox/react-native';\n\n<Box padding=\"md\" bg=\"raised\" radius=\"lg\" border>\n  <Text weight=\"bold\">Elevated Box Surface</Text>\n</Box>"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Box accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "container": {
    "id": "container",
    "name": "Container",
    "category": "Surfaces",
    "description": "Centers content horizontally with calibrated maximum width bounds (sm, md, lg, xl, 2xl) and gutters.",
    "importStatement": "import { Container } from '@winplaybox/react';",
    "nativeImport": "import { Container } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-container-bg",
      "--spectra-container-border",
      "--spectra-container-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Container accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "grid": {
    "id": "grid",
    "name": "Grid",
    "category": "Layout",
    "description": "12-column responsive layout grid system engineered for fluid breakpoints and multi-column responsive UIs.",
    "importStatement": "import { Grid } from '@winplaybox/react';",
    "nativeImport": "import { Grid } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "container",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Enables grid container flex wrapper."
      },
      {
        "name": "item",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Enables column cell sizing."
      },
      {
        "name": "spacing",
        "type": "number",
        "defaultValue": "2",
        "description": "Gap multiplier (spacing * 8px)."
      },
      {
        "name": "xs",
        "type": "number",
        "defaultValue": "12",
        "description": "Column span from 1 to 12."
      }
    ],
    "nativeProps": [
      {
        "name": "container",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Row flex wrapper."
      },
      {
        "name": "item",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Column item."
      },
      {
        "name": "xs",
        "type": "number",
        "defaultValue": "12",
        "description": "Column width percentage."
      }
    ],
    "tokens": [
      "--spacing-2",
      "--spacing-4"
    ],
    "recipes": [
      {
        "title": "Two-Column Responsive Grid",
        "code": "import { Grid, Box, Text } from '@winplaybox/react';\n\n<Grid container spacing={2}>\n  <Grid item xs={6}><Box padding=\"md\" bg=\"subtle\"><Text>Left Column</Text></Box></Grid>\n  <Grid item xs={6}><Box padding=\"md\" bg=\"subtle\"><Text>Right Column</Text></Box></Grid>\n</Grid>"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Grid accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "stack": {
    "id": "stack",
    "name": "Stack",
    "category": "Surfaces",
    "description": "One-dimensional flexbox layout primitive managing horizontal or vertical spacing between children.",
    "importStatement": "import { Stack } from '@winplaybox/react';",
    "nativeImport": "import { Stack } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-stack-bg",
      "--spectra-stack-border",
      "--spectra-stack-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Stack accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "paper": {
    "id": "paper",
    "name": "Paper",
    "category": "Surfaces",
    "description": "Physical metaphor surface receiving elevation shadows and border radius according to token scale.",
    "importStatement": "import { Paper } from '@winplaybox/react';",
    "nativeImport": "import { Paper } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-paper-bg",
      "--spectra-paper-border",
      "--spectra-paper-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Paper accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "app-bar": {
    "id": "app-bar",
    "name": "App Bar",
    "category": "Surfaces",
    "description": "Top application header providing branding identity, breadcrumbs, search trigger, and user actions.",
    "importStatement": "import { App Bar } from '@winplaybox/react';",
    "nativeImport": "import { App Bar } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-app-bar-bg",
      "--spectra-app-bar-border",
      "--spectra-app-bar-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow App Bar accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "pagination": {
    "id": "pagination",
    "name": "Pagination",
    "category": "Navigation",
    "description": "Controls for navigating across discrete pages of long tabular datasets or catalog listings.",
    "importStatement": "import { Pagination } from '@winplaybox/react';",
    "nativeImport": "import { Pagination } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-pagination-bg",
      "--spectra-pagination-border",
      "--spectra-pagination-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Pagination accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "stepper": {
    "id": "stepper",
    "name": "Stepper",
    "category": "Navigation",
    "description": "Displays progress through a sequential multi-step wizard with active, completed, and error step nodes.",
    "importStatement": "import { Stepper } from '@winplaybox/react';",
    "nativeImport": "import { Stepper } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-stepper-bg",
      "--spectra-stepper-border",
      "--spectra-stepper-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Stepper accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "menu": {
    "id": "menu",
    "name": "Menu",
    "category": "Navigation",
    "description": "Floating action menu displaying a list of choices on temporary surfaces (APG Menu pattern).",
    "importStatement": "import { Menu } from '@winplaybox/react';",
    "nativeImport": "import { Menu } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-menu-bg",
      "--spectra-menu-border",
      "--spectra-menu-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Menu accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "link": {
    "id": "link",
    "name": "Link",
    "category": "Navigation",
    "description": "Semantic hypertext anchor with token-driven hover states, external link indicator vectors, and focus rings.",
    "importStatement": "import { Link } from '@winplaybox/react';",
    "nativeImport": "import { Link } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-link-bg",
      "--spectra-link-border",
      "--spectra-link-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Link accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "speed-dial": {
    "id": "speed-dial",
    "name": "Speed Dial",
    "category": "Navigation",
    "description": "Floating action button that blossoms into a fan of related quick actions when activated.",
    "importStatement": "import { Speed Dial } from '@winplaybox/react';",
    "nativeImport": "import { Speed Dial } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-speed-dial-bg",
      "--spectra-speed-dial-border",
      "--spectra-speed-dial-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Speed Dial accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "bottom-nav": {
    "id": "bottom-nav",
    "name": "Bottom Navigation",
    "category": "Navigation",
    "description": "Ergonomic mobile bottom navigation bar providing quick switching between 3 to 5 top-level views.",
    "importStatement": "import { Bottom Navigation } from '@winplaybox/react';",
    "nativeImport": "import { Bottom Navigation } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-bottom-nav-bg",
      "--spectra-bottom-nav-border",
      "--spectra-bottom-nav-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Bottom Navigation accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "platform-chassis": {
    "id": "platform-chassis",
    "name": "Platform Chassis",
    "category": "Navigation",
    "description": "Interactive frame simulator reproducing native iOS, Android, Windows, and macOS window geometries.",
    "importStatement": "import { Platform Chassis } from '@winplaybox/react';",
    "nativeImport": "import { Platform Chassis } from '@winplaybox/react-native';",
    "props": [],
    "nativeProps": [],
    "tokens": [
      "--spectra-platform-chassis-bg",
      "--spectra-platform-chassis-border",
      "--spectra-platform-chassis-radius"
    ],
    "recipes": [],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Platform Chassis accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "list-view": {
    "id": "list-view",
    "name": "ListView",
    "category": "Data Display",
    "description": "High-performance token-aware list primitive supporting pull-to-refresh, 1px theme dividers, empty states, and virtualized scrolling across Web and Native.",
    "importStatement": "import { ListView } from '@winplaybox/react';",
    "nativeImport": "import { ListView } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "data",
        "type": "readonly T[]",
        "description": "Array of data items to render."
      },
      {
        "name": "renderItem",
        "type": "(item: T, index: number) => ReactNode",
        "required": true,
        "description": "Item render function."
      },
      {
        "name": "divided",
        "type": "boolean",
        "defaultValue": "true",
        "description": "Automatically inserts 1px theme divider lines."
      },
      {
        "name": "padding",
        "type": "BoxPadding",
        "description": "Container padding matching Spectra Box tokens."
      },
      {
        "name": "emptyState",
        "type": "ReactNode",
        "description": "Custom element rendered when data list is empty."
      },
      {
        "name": "emptyText",
        "type": "string",
        "defaultValue": "'No items found'",
        "description": "Fallback text string when list is empty."
      },
      {
        "name": "refreshing",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Active pull-to-refresh spinner status."
      },
      {
        "name": "onRefresh",
        "type": "() => void",
        "description": "Trigger callback on pull-to-refresh gesture or button."
      }
    ],
    "nativeProps": [
      {
        "name": "data",
        "type": "Readonly<ArrayLike<T>>",
        "description": "Native virtualized list items."
      },
      {
        "name": "divided",
        "type": "boolean",
        "defaultValue": "true",
        "description": "Theme border separator."
      }
    ],
    "tokens": [
      "--color-surface",
      "--color-border-subtle",
      "--color-text-secondary"
    ],
    "recipes": [
      {
        "title": "Universal Token-Aware ListView with Refresh",
        "code": "import { ListView } from '@winplaybox/react';\n\n<ListView\n  data={items}\n  divided\n  refreshing={isRefreshing}\n  onRefresh={handleRefresh}\n  renderItem={(item) => <div style={{ padding: '12px 16px' }}>{item.title}</div>}\n/>"
      },
      {
        "title": "Native Mobile Virtualized ListView",
        "code": "import { ListView, Text } from '@winplaybox/react-native';\n\n<ListView\n  data={items}\n  divided\n  refreshing={isRefreshing}\n  onRefresh={handleRefresh}\n  renderItem={({ item }) => <Text>{item.title}</Text>}\n/>"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow ListView accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "date-picker": {
    "id": "date-picker",
    "name": "DatePicker",
    "category": "Form",
    "description": "Cross-platform date and time input control with interactive calendar popovers on Web, native OS dialogs on Android, modal pickers on iOS, and zero emoji vector icons.",
    "importStatement": "import { DatePicker } from '@winplaybox/react';",
    "nativeImport": "import { DatePicker } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "value",
        "type": "Date",
        "description": "Selected Date value (controlled)."
      },
      {
        "name": "defaultValue",
        "type": "Date",
        "description": "Initial Date value (uncontrolled)."
      },
      {
        "name": "onChange",
        "type": "(date?: Date) => void",
        "description": "Callback fired when date is picked or cleared."
      },
      {
        "name": "placeholder",
        "type": "string",
        "defaultValue": "'Select date...'",
        "description": "Placeholder label."
      },
      {
        "name": "label",
        "type": "string",
        "description": "Form field label."
      },
      {
        "name": "error",
        "type": "string | boolean",
        "description": "Validation error text or boolean."
      },
      {
        "name": "clearable",
        "type": "boolean",
        "defaultValue": "true",
        "description": "Enables quick-clear button."
      },
      {
        "name": "size",
        "type": "'sm' | 'md' | 'lg'",
        "defaultValue": "'md'",
        "description": "Field size scale."
      }
    ],
    "nativeProps": [
      {
        "name": "minDate",
        "type": "Date",
        "description": "Earliest selectable date."
      },
      {
        "name": "maxDate",
        "type": "Date",
        "description": "Latest selectable date."
      }
    ],
    "tokens": [
      "--color-surface",
      "--color-border-default",
      "--color-action-primary"
    ],
    "recipes": [
      {
        "title": "Universal DatePicker with Label",
        "code": "import { DatePicker } from '@winplaybox/react';\n\n<DatePicker\n  label=\"Event Date\"\n  value={eventDate}\n  onChange={setEventDate}\n  clearable\n/>"
      },
      {
        "title": "Mobile Native OS DatePicker Trigger",
        "code": "import { DatePicker } from '@winplaybox/react-native';\n\n<DatePicker\n  label=\"Booking Date\"\n  value={bookingDate}\n  onChange={setBookingDate}\n/>"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow DatePicker accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "web-view-box": {
    "id": "web-view-box",
    "name": "WebViewBox",
    "category": "Surfaces",
    "description": "Universal web page containment surface with animated loading progress indicator, styled error fallback card with retry, and zero-crash external browser fallback.",
    "importStatement": "import { WebViewBox } from '@winplaybox/react';",
    "nativeImport": "import { WebViewBox } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "source",
        "type": "{ uri: string } | { html: string }",
        "required": true,
        "description": "Target URL or HTML markup."
      },
      {
        "name": "title",
        "type": "string",
        "description": "Accessible frame title."
      },
      {
        "name": "showProgressBar",
        "type": "boolean",
        "defaultValue": "true",
        "description": "Top animated loading progress indicator."
      },
      {
        "name": "onLoadStart",
        "type": "() => void",
        "description": "Load start event."
      },
      {
        "name": "onLoadEnd",
        "type": "() => void",
        "description": "Load completion event."
      },
      {
        "name": "onError",
        "type": "(error: any) => void",
        "description": "Load error handler."
      }
    ],
    "nativeProps": [
      {
        "name": "webviewStyle",
        "type": "StyleProp<ViewStyle>",
        "description": "Inner webview styling."
      }
    ],
    "tokens": [
      "--color-surface",
      "--color-action-primary",
      "--color-border-default"
    ],
    "recipes": [
      {
        "title": "Responsive Web Frame with Address Header",
        "code": "import { WebViewBox } from '@winplaybox/react';\n\n<WebViewBox\n  src=\"https://example.com\"\n  title=\"External Article\"\n  showHeader\n  height=\"600px\"\n/>"
      },
      {
        "title": "Native In-App Web Browser with Progress Bar & Error Fallback",
        "code": "import { WebViewBox } from '@winplaybox/react-native';\n\n<WebViewBox\n  source={{ uri: 'https://news.ycombinator.com' }}\n  title=\"Hacker News\"\n  showProgressBar\n/>"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow WebViewBox accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "copy-button": {
    "id": "copy-button",
    "name": "CopyButton",
    "category": "Actions",
    "description": "Universal cross-platform clipboard trigger button with automatic icon feedback (CopyIcon to CheckIcon), customizable labels, and multi-platform support across Web, iOS, Android, and Desktop.",
    "importStatement": "import { CopyButton } from '@winplaybox/react';",
    "nativeImport": "import { CopyButton } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "value",
        "type": "string",
        "required": true,
        "description": "Text content copied to system clipboard."
      },
      {
        "name": "label",
        "type": "string",
        "defaultValue": "'Copy'",
        "description": "Resting label text."
      },
      {
        "name": "copiedLabel",
        "type": "string",
        "defaultValue": "'Copied!'",
        "description": "Success state label text."
      },
      {
        "name": "timeout",
        "type": "number",
        "defaultValue": "2000",
        "description": "Duration in ms before resetting copied state."
      },
      {
        "name": "iconOnly",
        "type": "boolean",
        "defaultValue": "false",
        "description": "Renders icon without text."
      },
      {
        "name": "variant",
        "type": "'primary' | 'secondary' | 'subtle' | 'outline'",
        "defaultValue": "'secondary'",
        "description": "Button visual style."
      },
      {
        "name": "onCopy",
        "type": "(value: string) => void",
        "description": "Callback fired on copy."
      }
    ],
    "nativeProps": [
      {
        "name": "value",
        "type": "string",
        "required": true,
        "description": "Target string"
      },
      {
        "name": "onCopy",
        "type": "(value: string) => void",
        "description": "Success callback"
      }
    ],
    "tokens": [
      "--color-action-primary",
      "--color-feedback-success"
    ],
    "recipes": [
      {
        "title": "Universal Copy Link Trigger",
        "code": "import { CopyButton } from '@winplaybox/react';\n\n<CopyButton value=\"https://spectra-ui.winplaybox.com\" label=\"Copy Link\" />"
      },
      {
        "title": "Mobile Native Copy Button",
        "code": "import { CopyButton } from '@winplaybox/react-native';\n\n<CopyButton value=\"https://spectra-ui.winplaybox.com\" label=\"Copy Share URL\" onCopy={() => console.log('Copied!')} />"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Provide accessible feedback when text is copied",
        "Keep default timeout to 2000ms"
      ],
      "dont": [
        "Never copy sensitive credentials without explicit user consent"
      ]
    }
  },
  "scroll-view": {
    "id": "scroll-view",
    "name": "ScrollView",
    "category": "Layout",
    "description": "Token-aware scrollable container for mobile applications respecting theme surfaces and standardizing padding scales.",
    "importStatement": "import { ScrollArea } from '@winplaybox/react';",
    "nativeImport": "import { ScrollView } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "padding",
        "type": "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number",
        "description": "Standard container padding."
      },
      {
        "name": "bg",
        "type": "'default' | 'raised' | 'sunken' | 'transparent'",
        "description": "Theme background surface."
      }
    ],
    "nativeProps": [
      {
        "name": "padding",
        "type": "BoxPadding",
        "description": "Standard content padding."
      },
      {
        "name": "bg",
        "type": "BoxBg",
        "description": "Surface fill."
      }
    ],
    "tokens": [
      "--color-surface-sunken",
      "--color-surface"
    ],
    "recipes": [
      {
        "title": "Native ScrollView with Theme Sunken Background",
        "code": "import { ScrollView, Stack, Card, Text } from '@winplaybox/react-native';\n\n<ScrollView padding=\"md\" bg=\"sunken\">\n  <Stack gap={12}>\n    <Card><Text>Item 1</Text></Card>\n    <Card><Text>Item 2</Text></Card>\n  </Stack>\n</ScrollView>"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow ScrollView accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "pressable": {
    "id": "pressable",
    "name": "Pressable",
    "category": "Actions",
    "description": "Token-aware interactive touchable surface component for Spectra UI Native with tactile opacity feedback, border/surface variants, and disabled state styling.",
    "importStatement": "import { Button } from '@winplaybox/react';",
    "nativeImport": "import { Pressable } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "variant",
        "type": "'default' | 'subtle' | 'raised' | 'bordered'",
        "defaultValue": "'default'",
        "description": "Visual appearance."
      },
      {
        "name": "radius",
        "type": "BoxRadius",
        "description": "Corner curvature."
      },
      {
        "name": "feedback",
        "type": "'opacity' | 'none'",
        "defaultValue": "'opacity'",
        "description": "Active touch feedback."
      },
      {
        "name": "onPress",
        "type": "() => void",
        "description": "Action callback."
      }
    ],
    "nativeProps": [
      {
        "name": "activeOpacity",
        "type": "number",
        "defaultValue": "0.7",
        "description": "Pressed state opacity."
      }
    ],
    "tokens": [
      "--color-action-secondary",
      "--color-surface-raised"
    ],
    "recipes": [
      {
        "title": "Raised Touchable Card Surface",
        "code": "import { Pressable, Text } from '@winplaybox/react-native';\n\n<Pressable variant=\"raised\" radius=\"md\" padding=\"md\" onPress={() => console.log('Tapped!')}>\n  <Text weight=\"semibold\">Interactive Native Tile</Text>\n</Pressable>"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Pressable accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "image": {
    "id": "image",
    "name": "Image",
    "category": "Data Display",
    "description": "Design-token integrated image primitive with aspect-ratio containment, token-based border radius, and fallback placeholder handling.",
    "importStatement": "import { Avatar } from '@winplaybox/react';",
    "nativeImport": "import { Image } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "source",
        "type": "ImageSourcePropType",
        "required": true,
        "description": "Image URI or require asset."
      },
      {
        "name": "radius",
        "type": "BoxRadius",
        "description": "Border radius token."
      },
      {
        "name": "aspectRatio",
        "type": "number",
        "description": "Width-to-height ratio constraint."
      },
      {
        "name": "fit",
        "type": "'cover' | 'contain' | 'stretch' | 'center'",
        "defaultValue": "'cover'",
        "description": "Image resize mode."
      },
      {
        "name": "fallback",
        "type": "ReactNode",
        "description": "Fallback element rendered on load error."
      }
    ],
    "nativeProps": [
      {
        "name": "fit",
        "type": "'cover' | 'contain' | 'stretch' | 'center'",
        "defaultValue": "'cover'",
        "description": "Native resizeMode"
      }
    ],
    "tokens": [
      "--radius-md",
      "--color-surface-raised"
    ],
    "recipes": [
      {
        "title": "Rounded Banner Image with 16:9 Aspect Ratio",
        "code": "import { Image } from '@winplaybox/react-native';\n\n<Image source={{ uri: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809' }} aspectRatio={16 / 9} radius=\"lg\" />"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Follow Image accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    }
  },
  "live-indicator": {
    "id": "live-indicator",
    "name": "LiveIndicator",
    "category": "Feedback",
    "description": "Subtle real-time status and broadcast indicator with pulse, beacon, and static variants, strictly respecting reduced-motion accessibility across Web, Android, iOS, Windows, and macOS.",
    "importStatement": "import { LiveIndicator } from '@winplaybox/react';",
    "nativeImport": "import { LiveIndicator } from '@winplaybox/react-native';",
    "props": [
      {
        "name": "variant",
        "type": "'pulse' | 'beacon' | 'static'",
        "defaultValue": "'pulse'",
        "description": "Animation behavior."
      },
      {
        "name": "label",
        "type": "string",
        "defaultValue": "'LIVE'",
        "description": "Accessible status label."
      },
      {
        "name": "status",
        "type": "'live' | 'recording' | 'offline' | 'idle'",
        "defaultValue": "'live'",
        "description": "Semantic status role."
      },
      {
        "name": "size",
        "type": "'sm' | 'md' | 'lg'",
        "defaultValue": "'md'",
        "description": "Indicator density scale."
      }
    ],
    "nativeProps": [
      {
        "name": "variant",
        "type": "'pulse' | 'beacon' | 'static'",
        "defaultValue": "'pulse'",
        "description": "Animation behavior."
      },
      {
        "name": "label",
        "type": "string",
        "defaultValue": "'LIVE'",
        "description": "Accessible status label."
      }
    ],
    "tokens": [
      "--color-feedback-danger",
      "--color-feedback-success",
      "--color-surface-sunken"
    ],
    "recipes": [
      {
        "title": "Subtle Pulse Live Status",
        "code": "import { LiveIndicator } from '@winplaybox/react';\n\n<LiveIndicator variant=\"pulse\" label=\"LIVE\" />"
      },
      {
        "title": "Native Mobile Live Indicator",
        "code": "import { LiveIndicator } from '@winplaybox/react-native';\n\n<LiveIndicator variant=\"pulse\" label=\"RECORDING\" status=\"recording\" />"
      }
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    },
    "bestPractices": {
      "do": [
        "Always support prefers-reduced-motion by dampening or stopping animation",
        "Use aria-live=\"polite\" and role=\"status\" for announcements",
        "Keep animation subtle — avoid harsh neon glows"
      ],
      "dont": [
        "Never exceed 3 flashes per second (WCAG 2.3.1)",
        "Never rely purely on color to communicate state"
      ]
    }
  }
};

export const HOOKS = {
  "use-theme": {
    "name": "useTheme",
    "description": "Access and toggle global Spectra design system theme mode, style packs, and brand color palette.",
    "signature": "useTheme(): { colorScheme: \"light\" | \"dark\", setColorScheme: (m: \"light\" | \"dark\") => void, toggleTheme: () => void }",
    "returns": [
      "colorScheme",
      "setColorScheme",
      "toggleTheme"
    ],
    "accessibility": [
      "Dynamic theme role updates and system preference sync"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-disclosure": {
    "name": "useDisclosure",
    "description": "Headless open/close/toggle state machine for modals, drawers, menus, and popovers.",
    "signature": "useDisclosure(options?: { defaultIsOpen?: boolean, onOpen?: () => void, onClose?: () => void })",
    "returns": [
      "isOpen: boolean",
      "onOpen: () => void",
      "onClose: () => void",
      "onToggle: () => void",
      "getButtonProps()",
      "getDisclosureProps()"
    ],
    "accessibility": [
      "aria-expanded",
      "aria-controls",
      "aria-hidden"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-color-scheme": {
    "name": "useColorScheme",
    "description": "Detects and toggles light/dark mode with system synchronization and localStorage persistence.",
    "signature": "useColorScheme(): { colorScheme: \"light\" | \"dark\", setColorScheme: (m: \"light\" | \"dark\") => void, toggleColorScheme: () => void }",
    "returns": [
      "colorScheme",
      "setColorScheme",
      "toggleColorScheme"
    ],
    "accessibility": [
      "prefers-color-scheme media query synchronization"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-outside-click": {
    "name": "useOutsideClick",
    "description": "Dismiss floating overlays or popovers when clicking outside designated element.",
    "signature": "useOutsideClick({ ref: RefObject<HTMLElement>, handler: (e: Event) => void, enabled?: boolean })",
    "returns": [
      "void"
    ],
    "accessibility": [
      "Click-away dismiss pattern"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-id": {
    "name": "useId",
    "description": "Collision-free SSR-safe unique HTML and ARIA IDs for form field labels and descriptions.",
    "signature": "useId(idProp?: string, prefix?: string): string",
    "returns": [
      "string"
    ],
    "accessibility": [
      "aria-labelledby, aria-describedby linking"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-controllable-state": {
    "name": "useControllableState",
    "description": "Unified state management supporting both controlled and uncontrolled component modes.",
    "signature": "useControllableState({ value, defaultValue, onChange })",
    "returns": [
      "[value, setValue]"
    ],
    "accessibility": [
      "Standard W3C controlled state pattern"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-focus-trap": {
    "name": "useFocusTrap",
    "description": "Traps keyboard tab navigation within an active modal overlay preventing focus escape.",
    "signature": "useFocusTrap(ref: RefObject<HTMLElement>, isActive: boolean)",
    "returns": [
      "void"
    ],
    "accessibility": [
      "W3C modal dialog focus trapping"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "Intercepts Tab/Shift+Tab keydown events."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "Android uses Modal native container and TalkBack accessibility hierarchy.",
        "alternative": "Modal accessibleViewIsModal={true}"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "iOS VoiceOver uses native modal accessibility container semantics.",
        "alternative": "Modal accessibilityViewIsModal={true}"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "XAML / WinUI modal focus scoping."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "NSWindow modal session key-view loop."
      }
    }
  },
  "use-focus-ring": {
    "name": "useFocusRing",
    "description": "Manages visible focus indicators only during keyboard navigation (:focus-visible equivalent).",
    "signature": "useFocusRing(options?: { within?: boolean })",
    "returns": [
      "isFocused",
      "isFocusVisible",
      "focusProps"
    ],
    "accessibility": [
      "WCAG 2.1 Focus Visible requirement"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-media-query": {
    "name": "useMediaQuery",
    "description": "Responsive CSS media query listener hook with SSR fallback hydration.",
    "signature": "useMediaQuery(query: string, defaultValue?: boolean): boolean",
    "returns": [
      "boolean"
    ],
    "accessibility": [
      "Responsive layout adaptation"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "CSS window.matchMedia listener."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "Native does not execute CSS media queries.",
        "alternative": "useWindowDimensions() / useBreakpoint()"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "Native does not execute CSS media queries.",
        "alternative": "useWindowDimensions() / useBreakpoint()"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "useWindowDimensions mapping."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "useWindowDimensions mapping."
      }
    }
  },
  "use-reduced-motion": {
    "name": "useReducedMotion",
    "description": "Detects user operating system preference for reduced motion animations.",
    "signature": "useReducedMotion(): boolean",
    "returns": [
      "boolean"
    ],
    "accessibility": [
      "prefers-reduced-motion vestibular disorder support"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "CSS prefers-reduced-motion query."
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "notes": "AccessibilityInfo.isReduceMotionEnabled listener."
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "notes": "AccessibilityInfo.isReduceMotionEnabled listener."
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "UISettings.AnimationsEnabled mapping."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "NSWorkspace reduceMotion status."
      }
    }
  },
  "use-toast": {
    "name": "useToast",
    "description": "Imperative and hook-based toast notification dispatcher with stacked queue management.",
    "signature": "useToast(): { toast: (options: ToastOptions) => string, dismiss: (id: string) => void }",
    "returns": [
      "toast",
      "dismiss"
    ],
    "accessibility": [
      "aria-live=\"polite\", role=\"status\""
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-form-field": {
    "name": "useFormField",
    "description": "Generates cohesive ARIA attributes and error bindings for form input fields.",
    "signature": "useFormField(props: FormFieldProps)",
    "returns": [
      "inputProps",
      "labelProps",
      "errorProps",
      "descriptionProps"
    ],
    "accessibility": [
      "aria-invalid",
      "aria-describedby",
      "aria-required"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-list-navigation": {
    "name": "useListNavigation",
    "description": "Keyboard arrow key navigation (Up/Down/Home/End) with roving tabindex.",
    "signature": "useListNavigation(itemsCount: number, options?: ListNavOptions)",
    "returns": [
      "activeIndex",
      "setActiveIndex",
      "getItemProps()"
    ],
    "accessibility": [
      "W3C Roving Tabindex & ARIA Listbox"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-rtl": {
    "name": "useRTL",
    "description": "Bi-directional text flow and layout direction listener (LTR / RTL).",
    "signature": "useRTL(): { isRTL: boolean, dir: \"ltr\" | \"rtl\" }",
    "returns": [
      "isRTL",
      "dir"
    ],
    "accessibility": [
      "dir=\"rtl\" localization"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-debounce": {
    "name": "useDebounce",
    "description": "Debounces rapid value changes or keystrokes for search bars and live filters.",
    "signature": "useDebounce<T>(value: T, delayMs: number): T",
    "returns": [
      "debouncedValue"
    ],
    "accessibility": [
      "Reduces search query churn"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-throttle": {
    "name": "useThrottle",
    "description": "Throttles high-frequency function execution for scroll, resize, and mousemove listeners.",
    "signature": "useThrottle<T>(value: T, intervalMs: number): T",
    "returns": [
      "throttledValue"
    ],
    "accessibility": [
      "Frame rate stability"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-hover": {
    "name": "useHover",
    "description": "Detects pointer hover state with mobile touch rejection.",
    "signature": "useHover<T extends HTMLElement>(): [RefObject<T>, boolean]",
    "returns": [
      "[ref, isHovered]"
    ],
    "accessibility": [
      "Hover interaction"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "Native mouseenter/mouseleave listeners with cleanup."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "Hover is not a primary interaction model on touch devices.",
        "alternative": "usePressableState / onPressIn"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "Touch screens do not support physical hover states without external trackpad.",
        "alternative": "usePressableState / onPressIn"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "Mouse pointer enter/exit mappings on WinUI controls."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "NSView onMouseEnter/onMouseExit trackpad integration."
      }
    }
  },
  "use-platform": {
    "name": "usePlatform",
    "description": "Cross-platform environment detector (Web, iOS, Android, Windows, macOS).",
    "signature": "usePlatform(): { platform: string, isMobile: boolean, isDesktop: boolean }",
    "returns": [
      "platform",
      "isMobile",
      "isDesktop"
    ],
    "accessibility": [
      "Platform specific chassis customization"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-breakpoint": {
    "name": "useBreakpoint",
    "description": "Current viewport breakpoint matching Spectra UI token breakpoints (xs, sm, md, lg, xl).",
    "signature": "useBreakpoint(): \"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"",
    "returns": [
      "breakpoint"
    ],
    "accessibility": [
      "Responsive grid alignment"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-event-listener": {
    "name": "useEventListener",
    "description": "Safe declarative event listener with automatic cleanup on unmount.",
    "signature": "useEventListener(eventName, handler, element?)",
    "returns": [
      "void"
    ],
    "accessibility": [
      "Window and DOM events"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-intersection-observer": {
    "name": "useIntersectionObserver",
    "description": "Viewport intersection detection for lazy loading, infinite scroll, and scroll spy.",
    "signature": "useIntersectionObserver(ref, options?)",
    "returns": [
      "IntersectionObserverEntry | null"
    ],
    "accessibility": [
      "Lazy-loaded asset announcements"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "Browser IntersectionObserver API."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "No browser DOM observer exists in native runtimes.",
        "alternative": "FlatList onViewableItemsChanged"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "No browser DOM observer exists in native runtimes.",
        "alternative": "FlatList onViewableItemsChanged"
      },
      "windows": {
        "platform": "windows",
        "support": "unsupported",
        "notes": "Use ListView viewable items detection.",
        "alternative": "ListView onViewableItemsChanged"
      },
      "macos": {
        "platform": "macos",
        "support": "unsupported",
        "notes": "Use ListView viewable items detection.",
        "alternative": "ListView onViewableItemsChanged"
      }
    }
  },
  "use-element-size": {
    "name": "useElementSize",
    "description": "ResizeObserver-powered reactive element dimensions tracking (width and height).",
    "signature": "useElementSize<T extends HTMLElement>(): [RefObject<T>, { width: number, height: number }]",
    "returns": [
      "[ref, size]"
    ],
    "accessibility": [
      "Dynamic container sizing"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-window-size": {
    "name": "useWindowSize",
    "description": "Reactive browser window dimensions (width, height) with debounced resize dispatch.",
    "signature": "useWindowSize(): { width: number, height: number }",
    "returns": [
      "size"
    ],
    "accessibility": [
      "Window scale"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "adapted",
        "implementation": "@winplaybox/react-native",
        "notes": "useWindowDimensions() native hook."
      },
      "ios": {
        "platform": "ios",
        "support": "adapted",
        "implementation": "@winplaybox/react-native",
        "notes": "useWindowDimensions() native hook."
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "useWindowDimensions() native hook."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "useWindowDimensions() native hook."
      }
    }
  },
  "use-scroll-lock": {
    "name": "useScrollLock",
    "description": "Locks background page scrolling while modal or drawer overlay is active.",
    "signature": "useScrollLock(locked: boolean): void",
    "returns": [
      "void"
    ],
    "accessibility": [
      "Prevents background scroll bleed during dialogs"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "Locks document.body.style.overflow."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "Native scroll is managed by ScrollView container boundaries.",
        "alternative": "ScrollView scrollEnabled={false}"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "Native scroll is managed by ScrollView container boundaries.",
        "alternative": "ScrollView scrollEnabled={false}"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-clipboard": {
    "name": "useClipboard",
    "description": "Copy text to clipboard with timed success status indication.",
    "signature": "useClipboard(options?: { timeout?: number }): { copied: boolean, copy: (text: string) => Promise<boolean> }",
    "returns": [
      "copied",
      "copy"
    ],
    "accessibility": [
      "Copy confirmation status"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "navigator.clipboard.writeText with fallback."
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "notes": "React Native Clipboard API."
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "notes": "UIPasteboard native integration."
      },
      "windows": {
        "platform": "windows",
        "support": "native",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "Windows DataPackage clipboard."
      },
      "macos": {
        "platform": "macos",
        "support": "native",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "NSPasteboard native integration."
      }
    }
  },
  "use-local-storage": {
    "name": "useLocalStorage",
    "description": "Persistent state backed by localStorage with cross-tab synchronization.",
    "signature": "useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void]",
    "returns": [
      "[value, setValue]"
    ],
    "accessibility": [
      "User preference preservation"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-previous": {
    "name": "usePrevious",
    "description": "Stores previous render cycle value for diffing or animations.",
    "signature": "usePrevious<T>(value: T): T | undefined",
    "returns": [
      "previousValue"
    ],
    "accessibility": [
      "State transition diffing"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-async": {
    "name": "useAsync",
    "description": "Async promise execution lifecycle runner with loading, error, and data states.",
    "signature": "useAsync<T>(asyncFn: () => Promise<T>, immediate?: boolean)",
    "returns": [
      "execute",
      "status",
      "value",
      "error"
    ],
    "accessibility": [
      "aria-busy and error alert signaling"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-interval": {
    "name": "useInterval",
    "description": "Declarative setInterval hook with dynamic delay and pause control.",
    "signature": "useInterval(callback: () => void, delay: number | null): void",
    "returns": [
      "void"
    ],
    "accessibility": [
      "Controlled timers"
    ],
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  }
};

export const TOKENS = {
  "colors": {
    "--color-semantic-surface": {
      "light": "#FFFFFF",
      "dark": "#1A1A1A",
      "role": "semantic surface"
    },
    "--color-surface": {
      "light": "#FFFFFF",
      "dark": "#1A1A1A",
      "role": "surface"
    },
    "--color-semantic-surface-raised": {
      "light": "#F7F7F8",
      "dark": "#242424",
      "role": "semantic surface raised"
    },
    "--color-surface-raised": {
      "light": "#F7F7F8",
      "dark": "#242424",
      "role": "surface raised"
    },
    "--color-semantic-surface-elevated": {
      "light": "#FFFFFF",
      "dark": "#202023",
      "role": "semantic surface elevated"
    },
    "--color-surface-elevated": {
      "light": "#FFFFFF",
      "dark": "#202023",
      "role": "surface elevated"
    },
    "--color-semantic-surface-overlay": {
      "light": "rgba(255, 255, 255, 0.95)",
      "dark": "rgba(26, 26, 26, 0.95)",
      "role": "semantic surface overlay"
    },
    "--color-surface-overlay": {
      "light": "rgba(255, 255, 255, 0.95)",
      "dark": "rgba(26, 26, 26, 0.95)",
      "role": "surface overlay"
    },
    "--color-semantic-surface-sunken": {
      "light": "#F1F5F9",
      "dark": "#0F172A",
      "role": "semantic surface sunken"
    },
    "--color-surface-sunken": {
      "light": "#F1F5F9",
      "dark": "#0F172A",
      "role": "surface sunken"
    },
    "--color-semantic-border-default": {
      "light": "#E4E4E7",
      "dark": "#333333",
      "role": "semantic border default"
    },
    "--color-border-default": {
      "light": "#E4E4E7",
      "dark": "#333333",
      "role": "border default"
    },
    "--color-semantic-border-subtle": {
      "light": "#F4F4F5",
      "dark": "#262626",
      "role": "semantic border subtle"
    },
    "--color-border-subtle": {
      "light": "#F4F4F5",
      "dark": "#262626",
      "role": "border subtle"
    },
    "--color-semantic-border-strong": {
      "light": "#D4D4D8",
      "dark": "#444444",
      "role": "semantic border strong"
    },
    "--color-border-strong": {
      "light": "#D4D4D8",
      "dark": "#444444",
      "role": "border strong"
    },
    "--color-semantic-text-primary": {
      "light": "#18181B",
      "dark": "#F4F4F5",
      "role": "semantic text primary"
    },
    "--color-text-primary": {
      "light": "#18181B",
      "dark": "#F4F4F5",
      "role": "text primary"
    },
    "--color-semantic-text-secondary": {
      "light": "#3F3F46",
      "dark": "#D4D4D8",
      "role": "semantic text secondary"
    },
    "--color-text-secondary": {
      "light": "#3F3F46",
      "dark": "#D4D4D8",
      "role": "text secondary"
    },
    "--color-semantic-text-muted": {
      "light": "#71717A",
      "dark": "#A1A1AA",
      "role": "semantic text muted"
    },
    "--color-text-muted": {
      "light": "#71717A",
      "dark": "#A1A1AA",
      "role": "text muted"
    },
    "--color-semantic-text-inverse": {
      "light": "#FFFFFF",
      "dark": "#18181B",
      "role": "semantic text inverse"
    },
    "--color-text-inverse": {
      "light": "#FFFFFF",
      "dark": "#18181B",
      "role": "text inverse"
    },
    "--color-semantic-text-on-action": {
      "light": "#FFFFFF",
      "dark": "#FFFFFF",
      "role": "semantic text on action"
    },
    "--color-text-on-action": {
      "light": "#FFFFFF",
      "dark": "#FFFFFF",
      "role": "text on action"
    },
    "--color-semantic-action-primary": {
      "light": "#2563EB",
      "dark": "#3B82F6",
      "role": "semantic action primary"
    },
    "--color-action-primary": {
      "light": "#2563EB",
      "dark": "#3B82F6",
      "role": "action primary"
    },
    "--color-semantic-action-primary-hover": {
      "light": "#1D4ED8",
      "dark": "#60A5FA",
      "role": "semantic action primary hover"
    },
    "--color-action-primary-hover": {
      "light": "#1D4ED8",
      "dark": "#60A5FA",
      "role": "action primary hover"
    },
    "--color-semantic-action-primary-active": {
      "light": "#1E40AF",
      "dark": "#93C5FD",
      "role": "semantic action primary active"
    },
    "--color-action-primary-active": {
      "light": "#1E40AF",
      "dark": "#93C5FD",
      "role": "action primary active"
    },
    "--color-semantic-action-secondary": {
      "light": "#F4F4F5",
      "dark": "#27272A",
      "role": "semantic action secondary"
    },
    "--color-action-secondary": {
      "light": "#F4F4F5",
      "dark": "#27272A",
      "role": "action secondary"
    },
    "--color-semantic-action-disabled": {
      "light": "#E4E4E7",
      "dark": "#3F3F46",
      "role": "semantic action disabled"
    },
    "--color-action-disabled": {
      "light": "#E4E4E7",
      "dark": "#3F3F46",
      "role": "action disabled"
    },
    "--color-semantic-feedback-error": {
      "light": "#DC2626",
      "dark": "#F87171",
      "role": "semantic feedback error"
    },
    "--color-feedback-error": {
      "light": "#DC2626",
      "dark": "#F87171",
      "role": "feedback error"
    },
    "--color-semantic-feedback-error-light": {
      "light": "#FEF2F2",
      "dark": "#450A0A",
      "role": "semantic feedback error light"
    },
    "--color-feedback-error-light": {
      "light": "#FEF2F2",
      "dark": "#450A0A",
      "role": "feedback error light"
    },
    "--color-semantic-feedback-danger": {
      "light": "#DC2626",
      "dark": "#F87171",
      "role": "semantic feedback danger"
    },
    "--color-feedback-danger": {
      "light": "#DC2626",
      "dark": "#F87171",
      "role": "feedback danger"
    },
    "--color-semantic-feedback-danger-light": {
      "light": "#FEF2F2",
      "dark": "#450A0A",
      "role": "semantic feedback danger light"
    },
    "--color-feedback-danger-light": {
      "light": "#FEF2F2",
      "dark": "#450A0A",
      "role": "feedback danger light"
    },
    "--color-semantic-feedback-success": {
      "light": "#16A34A",
      "dark": "#4ADE80",
      "role": "semantic feedback success"
    },
    "--color-feedback-success": {
      "light": "#16A34A",
      "dark": "#4ADE80",
      "role": "feedback success"
    },
    "--color-semantic-feedback-success-light": {
      "light": "#F0FDF4",
      "dark": "#052E16",
      "role": "semantic feedback success light"
    },
    "--color-feedback-success-light": {
      "light": "#F0FDF4",
      "dark": "#052E16",
      "role": "feedback success light"
    },
    "--color-semantic-feedback-warning": {
      "light": "#D97706",
      "dark": "#FBBF24",
      "role": "semantic feedback warning"
    },
    "--color-feedback-warning": {
      "light": "#D97706",
      "dark": "#FBBF24",
      "role": "feedback warning"
    },
    "--color-semantic-feedback-warning-light": {
      "light": "#FFFBEB",
      "dark": "#451A03",
      "role": "semantic feedback warning light"
    },
    "--color-feedback-warning-light": {
      "light": "#FFFBEB",
      "dark": "#451A03",
      "role": "feedback warning light"
    },
    "--color-semantic-feedback-info": {
      "light": "#2563EB",
      "dark": "#3B82F6",
      "role": "semantic feedback info"
    },
    "--color-feedback-info": {
      "light": "#2563EB",
      "dark": "#3B82F6",
      "role": "feedback info"
    },
    "--color-semantic-feedback-info-light": {
      "light": "#EFF6FF",
      "dark": "#172554",
      "role": "semantic feedback info light"
    },
    "--color-feedback-info-light": {
      "light": "#EFF6FF",
      "dark": "#172554",
      "role": "feedback info light"
    }
  },
  "spacing": {
    "--spacing-0": "0px",
    "--spacing-1": "4px",
    "--spacing-2": "8px",
    "--spacing-3": "12px",
    "--spacing-4": "16px",
    "--spacing-5": "20px",
    "--spacing-6": "24px",
    "--spacing-8": "32px",
    "--spacing-10": "40px",
    "--spacing-12": "48px",
    "--spacing-16": "64px"
  },
  "radius": {
    "--radius-xs": "4px",
    "--radius-sm": "6px",
    "--radius-md": "8px",
    "--radius-lg": "12px",
    "--radius-xl": "16px",
    "--radius-full": "9999px"
  },
  "motion": {
    "--motion-duration-fast": "150ms",
    "--motion-duration-normal": "250ms",
    "--motion-duration-slow": "400ms",
    "--motion-easing-standard": "cubic-bezier(0.2, 0, 0, 1)",
    "--motion-easing-decelerate": "cubic-bezier(0, 0, 0.2, 1)",
    "--motion-easing-accelerate": "cubic-bezier(0.4, 0, 1, 1)"
  }
};

export const ICONS = [
  "CheckIcon",
  "CloseIcon",
  "SearchIcon",
  "DownloadIcon",
  "EyeIcon",
  "EyeOffIcon",
  "ChevronDownIcon",
  "ChevronUpIcon",
  "ChevronRightIcon",
  "ChevronLeftIcon",
  "SettingsIcon",
  "UserIcon",
  "SparklesIcon",
  "CodeIcon",
  "LayersIcon",
  "PaletteIcon",
  "InfoIcon",
  "WarningIcon",
  "ErrorIcon",
  "SuccessIcon",
  "FilterIcon",
  "SortIcon",
  "CopyIcon",
  "EditIcon",
  "TrashIcon",
  "PlusIcon",
  "MinusIcon",
  "MenuIcon",
  "MoreVerticalIcon",
  "FacebookIcon",
  "TwitterIcon",
  "GoogleIcon",
  "GithubIcon",
  "TiktokIcon",
  "DiscordIcon",
  "FigmaIcon",
  "YoutubeIcon",
  "LinkedinIcon",
  "InstagramIcon",
  "AppleIcon",
  "AndroidIcon",
  "WindowsIcon"
];

export const PLATFORMS = {
  "web": {
    "id": "web",
    "name": "Web",
    "renderer": "React DOM",
    "primaryParadigm": "Web / responsive / keyboard / ARIA",
    "touchStandard": "Flexible / mouse primary",
    "package": "@winplaybox/react",
    "primitivesPackage": "@winplaybox/primitives",
    "features": [
      "HTML5 Semantic Elements",
      "WAI-ARIA 1.2",
      "CSS Media Queries",
      "Responsive Breakpoints",
      "Keyboard Navigation (Tab, Space, Enter, Arrows)"
    ]
  },
  "android": {
    "id": "android",
    "name": "Android",
    "renderer": "React Native",
    "primaryParadigm": "Android / Material-inspired native behavior / TalkBack / hardware back",
    "touchStandard": "48dp minimum touch target",
    "package": "@winplaybox/react-native",
    "primitivesPackage": "@winplaybox/react-native",
    "features": [
      "Material Motion Curves",
      "Touch Ripple Feedback",
      "Soft Keyboard Integration",
      "TalkBack Screen Reader",
      "Hardware Back Handling"
    ]
  },
  "ios": {
    "id": "ios",
    "name": "iOS",
    "renderer": "React Native",
    "primaryParadigm": "Apple HIG / touch-first / VoiceOver / safe areas / Dynamic Type",
    "touchStandard": "44pt minimum touch target",
    "package": "@winplaybox/react-native",
    "primitivesPackage": "@winplaybox/react-native",
    "features": [
      "Smooth Physics Springs",
      "Active Touch Opacity Feedback",
      "Safe Area Insets",
      "VoiceOver Accessibility",
      "Dynamic Type Scaling"
    ]
  },
  "windows": {
    "id": "windows",
    "name": "Windows",
    "renderer": "React Native Windows",
    "primaryParadigm": "Windows / WinUI / keyboard + mouse / UIAutomation / high contrast",
    "touchStandard": "Desktop cursor / 32px standard",
    "package": "@winplaybox/react-native-windows",
    "primitivesPackage": "@winplaybox/react-native-windows",
    "features": [
      "WinUI Acrylic & Mica Surfaces",
      "High Contrast Mode",
      "UIAutomation Accessibility",
      "Full Keyboard Navigation (Tab, F6, Arrow)",
      "Mouse Hover States"
    ]
  },
  "macos": {
    "id": "macos",
    "name": "macOS",
    "renderer": "React Native macOS",
    "primaryParadigm": "macOS / AppKit / mouse + trackpad / keyboard shortcuts / VoiceOver",
    "touchStandard": "Desktop cursor / 28pt standard",
    "package": "@winplaybox/react-native-macos",
    "primitivesPackage": "@winplaybox/react-native-macos",
    "features": [
      "AppKit Vibrancy Surfaces",
      "Native Menu Bar Integration",
      "NSAccessibility Roles",
      "Trackpad & Mouse Gestures",
      "Cmd Keyboard Shortcuts"
    ]
  }
};

export const PLATFORM_CAPABILITIES = {
  "text-input": {
    "id": "text-input",
    "name": "TextInput",
    "bestPractices": {
      "do": [
        "Always associate labels with inputs using labelProps / accessibilityLabel",
        "Use secureTextEntry / type=\"password\" for sensitive credentials",
        "Provide clear, non-punitive error messages when validation fails",
        "Configure platform-correct virtual keyboards (e.g. keyboardType=\"email-address\")"
      ],
      "dont": [
        "Never rely solely on placeholder text as a substitute for a field label",
        "Never show desktop hover indicators on touch-only mobile devices",
        "Never force web DOM measurement into native TextInput implementations"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "variants": [
          "outlined",
          "filled",
          "standard"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "email",
          "multiline",
          "select-autocomplete",
          "prefix-suffix"
        ],
        "states": [
          "default",
          "hover",
          "focus",
          "disabled",
          "readonly",
          "error",
          "success",
          "loading"
        ],
        "accessibility": [
          "aria-invalid",
          "aria-describedby",
          "aria-required",
          "roving-tabIndex"
        ],
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "variants": [
          "outlined",
          "filled"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "email",
          "multiline"
        ],
        "states": [
          "default",
          "focused",
          "disabled",
          "error"
        ],
        "accessibility": [
          "accessibilityRole=\"none\"",
          "accessibilityLabel",
          "48dp touch target"
        ],
        "unsupportedRecipes": [
          "select-autocomplete",
          "prefix-suffix",
          "hover-effects"
        ],
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "variants": [
          "default",
          "search"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "email",
          "multiline"
        ],
        "states": [
          "default",
          "focused",
          "disabled",
          "error"
        ],
        "accessibility": [
          "accessibilityTraits=[\"none\"]",
          "VoiceOver value readout",
          "44pt touch target"
        ],
        "unsupportedRecipes": [
          "select-autocomplete",
          "prefix-suffix",
          "hover-effects"
        ],
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "variants": [
          "default",
          "outlined"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "multiline"
        ],
        "states": [
          "default",
          "hover",
          "focused",
          "disabled",
          "error"
        ],
        "accessibility": [
          "UIAutomation Text pattern",
          "high-contrast-focus-rect"
        ],
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "variants": [
          "default"
        ],
        "recipes": [
          "basic",
          "search",
          "password",
          "multiline"
        ],
        "states": [
          "default",
          "hover",
          "focused",
          "disabled",
          "error"
        ],
        "accessibility": [
          "NSAccessibilityTextFieldRole",
          "voiceover-announcement"
        ],
        "testStatus": "verified"
      }
    }
  },
  "button": {
    "id": "button",
    "name": "Button",
    "bestPractices": {
      "do": [
        "Use primary variant for the single main call to action",
        "Supply accessible labels or text children for screen readers",
        "Respect platform touch minimums (48dp Android, 44pt iOS)"
      ],
      "dont": [
        "Never place multiple primary buttons adjacent to each other",
        "Never use emojis in button labels"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger",
          "outline"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state",
          "full-width"
        ],
        "states": [
          "default",
          "hover",
          "focus",
          "active",
          "disabled",
          "loading"
        ],
        "accessibility": [
          "role=\"button\"",
          "aria-busy",
          "aria-disabled",
          "focus-visible ring"
        ],
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state"
        ],
        "states": [
          "default",
          "pressed",
          "disabled",
          "loading"
        ],
        "accessibility": [
          "accessibilityRole=\"button\"",
          "accessibilityState",
          "48dp touch target"
        ],
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state"
        ],
        "states": [
          "default",
          "pressed",
          "disabled",
          "loading"
        ],
        "accessibility": [
          "accessibilityRole=\"button\"",
          "accessibilityState",
          "44pt touch target"
        ],
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state"
        ],
        "states": [
          "default",
          "hover",
          "pressed",
          "focused",
          "disabled"
        ],
        "accessibility": [
          "UIAutomation Invoke pattern"
        ],
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "variants": [
          "primary",
          "secondary",
          "subtle",
          "danger"
        ],
        "recipes": [
          "primary-action",
          "leading-icon",
          "loading-state"
        ],
        "states": [
          "default",
          "hover",
          "pressed",
          "focused",
          "disabled"
        ],
        "accessibility": [
          "NSAccessibilityButtonRole"
        ],
        "testStatus": "verified"
      }
    }
  },
  "copy-button": {
    "id": "copy-button",
    "name": "CopyButton",
    "bestPractices": {
      "do": [
        "Provide accessible feedback when text is copied",
        "Keep default timeout to 2000ms"
      ],
      "dont": [
        "Never copy sensitive credentials without explicit user consent"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "live-indicator": {
    "id": "live-indicator",
    "name": "LiveIndicator",
    "bestPractices": {
      "do": [
        "Always support prefers-reduced-motion by dampening or stopping animation",
        "Use aria-live=\"polite\" and role=\"status\" for announcements",
        "Keep animation subtle — avoid harsh neon glows"
      ],
      "dont": [
        "Never exceed 3 flashes per second (WCAG 2.3.1)",
        "Never rely purely on color to communicate state"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "dialog": {
    "id": "dialog",
    "name": "Dialog",
    "bestPractices": {
      "do": [
        "Trap focus inside modal on Web",
        "Support hardware back and escape dismissal"
      ],
      "dont": [
        "Never create nested modal dialogs"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "select": {
    "id": "select",
    "name": "Select",
    "bestPractices": {
      "do": [
        "Follow Select accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "checkbox": {
    "id": "checkbox",
    "name": "Checkbox",
    "bestPractices": {
      "do": [
        "Follow Checkbox accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "radio": {
    "id": "radio",
    "name": "Radio",
    "bestPractices": {
      "do": [
        "Follow Radio accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "switch": {
    "id": "switch",
    "name": "Switch",
    "bestPractices": {
      "do": [
        "Follow Switch accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "accordion": {
    "id": "accordion",
    "name": "Accordion",
    "bestPractices": {
      "do": [
        "Follow Accordion accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "avatar": {
    "id": "avatar",
    "name": "Avatar",
    "bestPractices": {
      "do": [
        "Follow Avatar accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "list": {
    "id": "list",
    "name": "List",
    "bestPractices": {
      "do": [
        "Follow List accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "badge": {
    "id": "badge",
    "name": "Badge",
    "bestPractices": {
      "do": [
        "Follow Badge accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "tooltip": {
    "id": "tooltip",
    "name": "Tooltip",
    "bestPractices": {
      "do": [
        "Follow Tooltip accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "tabs": {
    "id": "tabs",
    "name": "Tabs",
    "bestPractices": {
      "do": [
        "Follow Tabs accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "card": {
    "id": "card",
    "name": "Card",
    "bestPractices": {
      "do": [
        "Follow Card accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "alert": {
    "id": "alert",
    "name": "Alert",
    "bestPractices": {
      "do": [
        "Follow Alert accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "spinner": {
    "id": "spinner",
    "name": "Spinner",
    "bestPractices": {
      "do": [
        "Follow Spinner accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "skeleton": {
    "id": "skeleton",
    "name": "Skeleton",
    "bestPractices": {
      "do": [
        "Follow Skeleton accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "divider": {
    "id": "divider",
    "name": "Divider",
    "bestPractices": {
      "do": [
        "Follow Divider accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "chip": {
    "id": "chip",
    "name": "Chip",
    "bestPractices": {
      "do": [
        "Follow Chip accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "breadcrumbs": {
    "id": "breadcrumbs",
    "name": "Breadcrumbs",
    "bestPractices": {
      "do": [
        "Follow Breadcrumbs accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "compound-button": {
    "id": "compound-button",
    "name": "Compound Button",
    "bestPractices": {
      "do": [
        "Follow Compound Button accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "split-button": {
    "id": "split-button",
    "name": "Split Button",
    "bestPractices": {
      "do": [
        "Follow Split Button accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "button-group": {
    "id": "button-group",
    "name": "Button Group",
    "bestPractices": {
      "do": [
        "Follow Button Group accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "icon-button": {
    "id": "icon-button",
    "name": "Icon Button",
    "bestPractices": {
      "do": [
        "Follow Icon Button accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "textarea": {
    "id": "textarea",
    "name": "TextArea",
    "bestPractices": {
      "do": [
        "Follow TextArea accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "combobox": {
    "id": "combobox",
    "name": "Combobox",
    "bestPractices": {
      "do": [
        "Follow Combobox accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "autocomplete": {
    "id": "autocomplete",
    "name": "Autocomplete",
    "bestPractices": {
      "do": [
        "Follow Autocomplete accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "checkbox-group": {
    "id": "checkbox-group",
    "name": "Checkbox Group",
    "bestPractices": {
      "do": [
        "Follow Checkbox Group accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "radio-group": {
    "id": "radio-group",
    "name": "Radio Group",
    "bestPractices": {
      "do": [
        "Follow Radio Group accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "slider": {
    "id": "slider",
    "name": "Slider",
    "bestPractices": {
      "do": [
        "Follow Slider accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "rating": {
    "id": "rating",
    "name": "Rating",
    "bestPractices": {
      "do": [
        "Follow Rating accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "color-picker": {
    "id": "color-picker",
    "name": "Color Picker",
    "bestPractices": {
      "do": [
        "Follow Color Picker accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "avatar-group": {
    "id": "avatar-group",
    "name": "Avatar Group",
    "bestPractices": {
      "do": [
        "Follow Avatar Group accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "table": {
    "id": "table",
    "name": "Table",
    "bestPractices": {
      "do": [
        "Follow Table accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "data-grid": {
    "id": "data-grid",
    "name": "Data Grid",
    "bestPractices": {
      "do": [
        "Follow Data Grid accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "tree-view": {
    "id": "tree-view",
    "name": "Tree View",
    "bestPractices": {
      "do": [
        "Follow Tree View accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "tag": {
    "id": "tag",
    "name": "Tag",
    "bestPractices": {
      "do": [
        "Follow Tag accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "timeline": {
    "id": "timeline",
    "name": "Timeline",
    "bestPractices": {
      "do": [
        "Follow Timeline accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "statistic": {
    "id": "statistic",
    "name": "Statistic",
    "bestPractices": {
      "do": [
        "Follow Statistic accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "calendar": {
    "id": "calendar",
    "name": "Calendar",
    "bestPractices": {
      "do": [
        "Follow Calendar accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "drawer": {
    "id": "drawer",
    "name": "Drawer",
    "bestPractices": {
      "do": [
        "Follow Drawer accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "popover": {
    "id": "popover",
    "name": "Popover",
    "bestPractices": {
      "do": [
        "Follow Popover accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "progress-bar": {
    "id": "progress-bar",
    "name": "Progress Bar",
    "bestPractices": {
      "do": [
        "Follow Progress Bar accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "toast": {
    "id": "toast",
    "name": "Toast",
    "bestPractices": {
      "do": [
        "Follow Toast accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "media-card": {
    "id": "media-card",
    "name": "Media Card",
    "bestPractices": {
      "do": [
        "Follow Media Card accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "box": {
    "id": "box",
    "name": "Box",
    "bestPractices": {
      "do": [
        "Follow Box accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "container": {
    "id": "container",
    "name": "Container",
    "bestPractices": {
      "do": [
        "Follow Container accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "grid": {
    "id": "grid",
    "name": "Grid",
    "bestPractices": {
      "do": [
        "Follow Grid accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "stack": {
    "id": "stack",
    "name": "Stack",
    "bestPractices": {
      "do": [
        "Follow Stack accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "paper": {
    "id": "paper",
    "name": "Paper",
    "bestPractices": {
      "do": [
        "Follow Paper accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "app-bar": {
    "id": "app-bar",
    "name": "App Bar",
    "bestPractices": {
      "do": [
        "Follow App Bar accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "pagination": {
    "id": "pagination",
    "name": "Pagination",
    "bestPractices": {
      "do": [
        "Follow Pagination accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "stepper": {
    "id": "stepper",
    "name": "Stepper",
    "bestPractices": {
      "do": [
        "Follow Stepper accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "menu": {
    "id": "menu",
    "name": "Menu",
    "bestPractices": {
      "do": [
        "Follow Menu accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "link": {
    "id": "link",
    "name": "Link",
    "bestPractices": {
      "do": [
        "Follow Link accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "speed-dial": {
    "id": "speed-dial",
    "name": "Speed Dial",
    "bestPractices": {
      "do": [
        "Follow Speed Dial accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "bottom-nav": {
    "id": "bottom-nav",
    "name": "Bottom Navigation",
    "bestPractices": {
      "do": [
        "Follow Bottom Navigation accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "platform-chassis": {
    "id": "platform-chassis",
    "name": "Platform Chassis",
    "bestPractices": {
      "do": [
        "Follow Platform Chassis accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "list-view": {
    "id": "list-view",
    "name": "ListView",
    "bestPractices": {
      "do": [
        "Follow ListView accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "date-picker": {
    "id": "date-picker",
    "name": "DatePicker",
    "bestPractices": {
      "do": [
        "Follow DatePicker accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "web-view-box": {
    "id": "web-view-box",
    "name": "WebViewBox",
    "bestPractices": {
      "do": [
        "Follow WebViewBox accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "scroll-view": {
    "id": "scroll-view",
    "name": "ScrollView",
    "bestPractices": {
      "do": [
        "Follow ScrollView accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "pressable": {
    "id": "pressable",
    "name": "Pressable",
    "bestPractices": {
      "do": [
        "Follow Pressable accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  },
  "image": {
    "id": "image",
    "name": "Image",
    "bestPractices": {
      "do": [
        "Follow Image accessibility and token guidelines"
      ],
      "dont": [
        "Never use hardcoded CSS colors or emoji icons"
      ]
    },
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/react",
        "testStatus": "verified"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "testStatus": "verified"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "testStatus": "verified"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "testStatus": "verified"
      }
    }
  }
};

export const HOOKS_CAPABILITIES = {
  "use-hover": {
    "id": "use-hover",
    "name": "useHover",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "Native mouseenter/mouseleave listeners with cleanup."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "Hover is not a primary interaction model on touch devices.",
        "alternative": "usePressableState / onPressIn"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "Touch screens do not support physical hover states without external trackpad.",
        "alternative": "usePressableState / onPressIn"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "Mouse pointer enter/exit mappings on WinUI controls."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "NSView onMouseEnter/onMouseExit trackpad integration."
      }
    }
  },
  "use-media-query": {
    "id": "use-media-query",
    "name": "useMediaQuery",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "CSS window.matchMedia listener."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "Native does not execute CSS media queries.",
        "alternative": "useWindowDimensions() / useBreakpoint()"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "Native does not execute CSS media queries.",
        "alternative": "useWindowDimensions() / useBreakpoint()"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "useWindowDimensions mapping."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "useWindowDimensions mapping."
      }
    }
  },
  "use-focus-trap": {
    "id": "use-focus-trap",
    "name": "useFocusTrap",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "Intercepts Tab/Shift+Tab keydown events."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "Android uses Modal native container and TalkBack accessibility hierarchy.",
        "alternative": "Modal accessibleViewIsModal={true}"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "iOS VoiceOver uses native modal accessibility container semantics.",
        "alternative": "Modal accessibilityViewIsModal={true}"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "XAML / WinUI modal focus scoping."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "NSWindow modal session key-view loop."
      }
    }
  },
  "use-scroll-lock": {
    "id": "use-scroll-lock",
    "name": "useScrollLock",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "Locks document.body.style.overflow."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "Native scroll is managed by ScrollView container boundaries.",
        "alternative": "ScrollView scrollEnabled={false}"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "Native scroll is managed by ScrollView container boundaries.",
        "alternative": "ScrollView scrollEnabled={false}"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-intersection-observer": {
    "id": "use-intersection-observer",
    "name": "useIntersectionObserver",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "Browser IntersectionObserver API."
      },
      "android": {
        "platform": "android",
        "support": "unsupported",
        "notes": "No browser DOM observer exists in native runtimes.",
        "alternative": "FlatList onViewableItemsChanged"
      },
      "ios": {
        "platform": "ios",
        "support": "unsupported",
        "notes": "No browser DOM observer exists in native runtimes.",
        "alternative": "FlatList onViewableItemsChanged"
      },
      "windows": {
        "platform": "windows",
        "support": "unsupported",
        "notes": "Use ListView viewable items detection.",
        "alternative": "ListView onViewableItemsChanged"
      },
      "macos": {
        "platform": "macos",
        "support": "unsupported",
        "notes": "Use ListView viewable items detection.",
        "alternative": "ListView onViewableItemsChanged"
      }
    }
  },
  "use-reduced-motion": {
    "id": "use-reduced-motion",
    "name": "useReducedMotion",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "CSS prefers-reduced-motion query."
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "notes": "AccessibilityInfo.isReduceMotionEnabled listener."
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "notes": "AccessibilityInfo.isReduceMotionEnabled listener."
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "UISettings.AnimationsEnabled mapping."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "NSWorkspace reduceMotion status."
      }
    }
  },
  "use-clipboard": {
    "id": "use-clipboard",
    "name": "useClipboard",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives",
        "notes": "navigator.clipboard.writeText with fallback."
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "notes": "React Native Clipboard API."
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native",
        "notes": "UIPasteboard native integration."
      },
      "windows": {
        "platform": "windows",
        "support": "native",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "Windows DataPackage clipboard."
      },
      "macos": {
        "platform": "macos",
        "support": "native",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "NSPasteboard native integration."
      }
    }
  },
  "use-window-size": {
    "id": "use-window-size",
    "name": "useWindowSize",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "adapted",
        "implementation": "@winplaybox/react-native",
        "notes": "useWindowDimensions() native hook."
      },
      "ios": {
        "platform": "ios",
        "support": "adapted",
        "implementation": "@winplaybox/react-native",
        "notes": "useWindowDimensions() native hook."
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows",
        "notes": "useWindowDimensions() native hook."
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos",
        "notes": "useWindowDimensions() native hook."
      }
    }
  },
  "use-theme": {
    "id": "use-theme",
    "name": "useTheme",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-disclosure": {
    "id": "use-disclosure",
    "name": "useDisclosure",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-color-scheme": {
    "id": "use-color-scheme",
    "name": "useColorScheme",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-outside-click": {
    "id": "use-outside-click",
    "name": "useOutsideClick",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-id": {
    "id": "use-id",
    "name": "useId",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-controllable-state": {
    "id": "use-controllable-state",
    "name": "useControllableState",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-focus-ring": {
    "id": "use-focus-ring",
    "name": "useFocusRing",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-toast": {
    "id": "use-toast",
    "name": "useToast",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-form-field": {
    "id": "use-form-field",
    "name": "useFormField",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-list-navigation": {
    "id": "use-list-navigation",
    "name": "useListNavigation",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-rtl": {
    "id": "use-rtl",
    "name": "useRTL",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-debounce": {
    "id": "use-debounce",
    "name": "useDebounce",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-throttle": {
    "id": "use-throttle",
    "name": "useThrottle",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-platform": {
    "id": "use-platform",
    "name": "usePlatform",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-breakpoint": {
    "id": "use-breakpoint",
    "name": "useBreakpoint",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-event-listener": {
    "id": "use-event-listener",
    "name": "useEventListener",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-element-size": {
    "id": "use-element-size",
    "name": "useElementSize",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-local-storage": {
    "id": "use-local-storage",
    "name": "useLocalStorage",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-previous": {
    "id": "use-previous",
    "name": "usePrevious",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-async": {
    "id": "use-async",
    "name": "useAsync",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  },
  "use-interval": {
    "id": "use-interval",
    "name": "useInterval",
    "platforms": {
      "web": {
        "platform": "web",
        "support": "native",
        "implementation": "@winplaybox/primitives"
      },
      "android": {
        "platform": "android",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "ios": {
        "platform": "ios",
        "support": "native",
        "implementation": "@winplaybox/react-native"
      },
      "windows": {
        "platform": "windows",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-windows"
      },
      "macos": {
        "platform": "macos",
        "support": "adapted",
        "implementation": "@winplaybox/react-native-macos"
      }
    }
  }
};

# Split Button

Combines a default single-click primary action with a secondary chevron dropdown button revealing alternative actions.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Split Button } from '@spectra/react';

export default function BasicSplitButtonExample() {
  return (
    <Split Button>
      Split Button Example
    </Split Button>
  );
}
```

## Guidelines

Use split buttons when one execution path is vastly more common (e.g. "Save", "Merge") but related variants ("Save and Close", "Squash and Merge") must be immediately accessible.

### Recommended (Dos)

- Ensure the main button triggers the current default action with one click.
- Assign aria-haspopup="menu" and aria-expanded to the chevron toggle button.
- Update the primary label if the user selects a new default option.

### Avoid (Don'ts)

- Do not trigger the menu when clicking the primary button text.
- Never leave the chevron button without an explicit aria-label.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Group Container` | Segmented wrapper holding both primary and toggle triggers. |
| `Primary Trigger` | Executes the active default action. |
| `Menu Toggle` | Opens and closes the popover actions list. |
| `Menu Popover` | Accessible dropdown listbox with arrow key navigation. |

## Motion & Transitions

- **Duration**: `--motion-fast (120ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Chevron rotates and menu popover fades in with vertical slide.

## Keyboard Navigation & ARIA

Official pattern: [Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | On primary button: executes action. On chevron: toggles flyout menu. |
| `ArrowDown` | When focus is on chevron button: opens menu and focuses first option. |
| `Escape` | Closes open options menu and restores focus to chevron. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `action` | `string` | `''` | Active default action label. |
| `options` | `string[]` | `[]` | Alternative actions shown in flyout. |
| `onAction` | `(action: string) => void` | `undefined` | Callback fired on action trigger. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDisclosure`
Description: Controls open and closed flyout state with outside click dismissal.

```tsx
import { useDisclosure } from '@spectra/primitives';

export function SplitAction() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return <div className="split-root">{/* buttons */}</div>;
}
```

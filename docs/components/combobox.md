# Combobox

Hybrid input and popup menu enabling users to filter and select from extensive option lists.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Combobox } from '@spectra/react';

export default function BasicComboboxExample() {
  return (
    <Combobox>
      Combobox Example
    </Combobox>
  );
}
```

## Guidelines

Use comboboxes when the selection list contains more than 15 items and typing accelerates choice location.

### Recommended (Dos)

- Support arrow down to open popup and arrow navigation across options.
- Highlight matched text substrings within filtered option items.

### Avoid (Don'ts)

- Do not trap keyboard focus when users hit Escape (close popup and maintain text cursor).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Input Trigger` | Filterable textbox with role="combobox". |
| `Toggle Chevron` | Visual toggle indicator. |
| `Popup Listbox` | Container with role="listbox" showing filtered items. |

## Motion & Transitions

- **Duration**: `--motion-fast (120ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Listbox opens with opacity fade and 4px vertical slide.

## Keyboard Navigation & ARIA

Official pattern: [Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowDown` | Opens popup and moves focus to first matching option. |
| `ArrowUp` | Moves focus to preceding option. |
| `Enter` | Selects active option and closes popup. |
| `Escape` | Closes popup without changing value. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `options` | `Array<{ label: string; value: string }>` | `[]` | Dataset of selectable items. |
| `value` | `string` | `''` | Selected value string. |
| `placeholder` | `string` | `'Select option...'` | Input placeholder hint. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useListNavigation`
Description: Controls active item selection and keyboard roaming.

```tsx
import { useListNavigation } from '@spectra/primitives';

export function CustomCombobox() {
  const { activeIndex } = useListNavigation({ totalItems: 10 });
  return <div role="combobox">{/* items */}</div>;
}
```

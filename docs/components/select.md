# Select

Select menus allow users to choose one option from a list of predefined options in compact form surfaces.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Select } from '@spectra/react';

export default function BasicSelectExample() {
  return (
    <Select>
      Select Example
    </Select>
  );
}
```

## Guidelines

Use select when there are more than 4 options. For 2-4 binary or exclusive options, consider using Radio or segmented controls for faster visibility.

### Recommended (Dos)

- Order options logically (e.g. alphabetical, most frequent first, or chronological).
- Provide a clear default placeholder like "Select a country...".

### Avoid (Don'ts)

- Do not use select for binary yes/no choices; use a Switch or Checkbox instead.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Label` | Accessible title for selection. |
| `Select Box` | Native or styled dropdown trigger. |
| `Chevron` | Down-arrow indicator. |

## Motion & Transitions

- **Duration**: `--motion-subtle (150ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: Dropdown options fade into view smoothly.

## Keyboard Navigation & ARIA

Official pattern: [Combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Space / Enter / Down Arrow` | Opens the select options menu. |
| `Up / Down Arrows` | Navigates through selectable items. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `undefined` | Label displayed above select field. |
| `options` | `Array<{ value: string; label: string }>` | `[]` | List of selectable items. |
| `disabled` | `boolean` | `false` | Disables select menu interaction. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Seamlessly synchronizes controlled vs uncontrolled state for dropdown selection across Web and Mobile Native.

```tsx
import { useControllableState } from '@spectra/primitives';

export function CustomSelect({ value: controlled, defaultValue = '', onChange }) {
  const [value, setValue] = useControllableState({ value: controlled, defaultValue, onChange });
  return <button onClick={() => setValue('next')}>{value}</button>;
}
```

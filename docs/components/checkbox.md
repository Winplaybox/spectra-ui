# Checkbox

Checkboxes allow users to select one or multiple items from a list, or toggle an independent option on or off.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Checkbox } from '@spectra/react';

export default function BasicCheckboxExample() {
  return (
    <Checkbox>
      Checkbox Example
    </Checkbox>
  );
}
```

## Guidelines

Use checkboxes for non-exclusive multi-selection, or for solitary confirmation checkboxes (e.g. Terms of Service agreements).

### Recommended (Dos)

- Use positive phrasing for checkbox labels (e.g. "Send email updates" rather than "Do not send email updates").
- Support indeterminate state when parent checkbox has partially selected children.

### Avoid (Don'ts)

- Do not use checkboxes for mutually exclusive single selections (use Radio instead).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Control Box` | 2D checkbox square containing the checkmark or minus indicator. |
| `Label` | Text describing the selectable option. |
| `Description` | Optional helper text linked via aria-describedby. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Checkmark scales and fills instantly upon activation.

## Keyboard Navigation & ARIA

Official pattern: [Checkbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Space` | Toggles the checkbox between checked and unchecked. |
| `Tab` | Focuses onto the checkbox. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `checked` | `boolean` | `false` | Controlled checked state. |
| `indeterminate` | `boolean` | `false` | Displays a minus icon indicating partial selection. |
| `label` | `ReactNode` | `undefined` | Text or node displayed beside checkbox. |
| `description` | `ReactNode` | `undefined` | Subtext giving extra guidance. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Handles indeterminate and controlled/uncontrolled checked states with full keyboard toggling.

```tsx
import { useControllableState } from '@spectra/primitives';

export function CustomCheckbox({ checked, defaultChecked, onChange }) {
  const [val, setVal] = useControllableState({ value: checked, defaultValue: defaultChecked, onChange });
  return <input type="checkbox" checked={val} onChange={(e) => setVal(e.target.checked)} />;
}
```

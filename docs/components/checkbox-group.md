# Checkbox Group

Wraps multiple checkboxes within an accessible fieldset and legend to manage multi-option form state.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { CheckboxGroup } from '@spectra/react';

export default function BasicCheckboxGroupExample() {
  return (
    <CheckboxGroup>
      Checkbox Group Example
    </CheckboxGroup>
  );
}
```

## Guidelines

Use checkbox groups when users can select zero, one, or several options from a related category.

### Recommended (Dos)

- Wrap all options inside semantic <fieldset> with a descriptive <legend>.
- Provide an indeterminate Select All checkbox for parent/child hierarchies.

### Avoid (Don'ts)

- Do not use checkbox groups when only one choice is permitted (use Radio Group instead).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Fieldset` | Semantic container grouping related checkboxes. |
| `Legend` | Accessible title announcing group intent. |
| `Checkboxes` | Child checkbox controls. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Immediate checkmark fill transition.

## Keyboard Navigation & ARIA

Official pattern: [Checkbox Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Moves focus between individual checkboxes in sequential order. |
| `Space` | Toggles checked state of the focused checkbox. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `legend` | `string` | `''` | Group title displayed in fieldset legend. |
| `value` | `string[]` | `[]` | Array of selected item values. |
| `onChange` | `(values: string[]) => void` | `undefined` | Change callback. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Manages array of selected IDs across controlled and uncontrolled modes.

```tsx
import { useControllableState } from '@spectra/primitives';

export function CheckboxGroupPrimitive(props) {
  const [selected, setSelected] = useControllableState({ defaultValue: [] });
  return <fieldset>{/* items */}</fieldset>;
}
```

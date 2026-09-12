# Radio

Radio buttons allow users to select exactly one option from a set of mutually exclusive choices that are all visible.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Radio } from '@spectra/react';

export default function BasicRadioExample() {
  return (
    <Radio>
      Radio Example
    </Radio>
  );
}
```

## Guidelines

Use radio buttons when there are 2 to 7 mutually exclusive options that users must compare side-by-side.

### Recommended (Dos)

- Always have exactly one option selected by default in a radio group when required.
- Group related radios inside <RadioGroup role="radiogroup">.

### Avoid (Don'ts)

- Do not use radio buttons if multiple choices can be selected simultaneously (use Checkbox).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Radio Circle` | Circular outer ring with centered dot when active. |
| `Label` | Text label describing the exclusive choice. |
| `RadioGroup` | Container establishing role="radiogroup" and keyboard arrow navigation. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Radio dot scales into view crisply.

## Keyboard Navigation & ARIA

Official pattern: [Radio Group pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Arrow Up / Left` | Moves selection to the previous radio button in the group. |
| `Arrow Down / Right` | Moves selection to the next radio button in the group. |
| `Space` | Selects the currently focused radio button. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `undefined` | Value of the radio item or active group value. |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout orientation of options in group. |
| `label` | `ReactNode` | `undefined` | Option text. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Synchronizes radio group selection and provides roving tabindex arrow navigation.

```tsx
import { useControllableState } from '@spectra/primitives';

export function CustomRadioGroup({ value: cVal, defaultValue, onChange, children }) {
  const [active, setActive] = useControllableState({ value: cVal, defaultValue, onChange });
  return <div role="radiogroup">{children}</div>;
}
```

# Radio Group

Enforces mutually exclusive single selection across a group of radio buttons with arrow key roaming.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { RadioGroup } from '@spectra/react';

export default function BasicRadioGroupExample() {
  return (
    <RadioGroup>
      Radio Group Example
    </RadioGroup>
  );
}
```

## Guidelines

Use radio groups when the user must choose exactly one option from a small list of mutually exclusive choices (2 to 7 items).

### Recommended (Dos)

- Support keyboard arrow roaming across radio items without pressing Tab.
- Always have one option pre-selected by default to prevent ambiguous initial state.

### Avoid (Don'ts)

- Never allow unchecking a radio button by clicking it again.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Root Container` | Element with role="radiogroup". |
| `Radio Item` | Individual option with role="radio" and aria-checked. |
| `Label` | Descriptive text describing option effect. |

## Motion & Transitions

- **Duration**: `--motion-fast (100ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Subtle scale pulse on radio dot selection.

## Keyboard Navigation & ARIA

Official pattern: [Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio-button/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowDown / ArrowRight` | Selects and moves focus to next radio option. |
| `ArrowUp / ArrowLeft` | Selects and moves focus to preceding radio option. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `''` | Active selected radio value. |
| `name` | `string` | `''` | HTML form group name attribute. |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout arrangement. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useListNavigation`
Description: Provides circular arrow key focus management across options.

```tsx
import { useListNavigation } from '@spectra/primitives';

export function RadioGroupPrimitive() {
  const { activeIndex } = useListNavigation({ totalItems: 3, loop: true });
  return <div role="radiogroup">{/* radios */}</div>;
}
```

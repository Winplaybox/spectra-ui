# Chip

Compact interactive badges representing entities, inputs, selections, or filters with optional leading avatars/icons and dismiss actions.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Chip } from '@spectra/react';

export default function BasicChipExample() {
  return (
    <Chip>
      Chip Example
    </Chip>
  );
}
```

## Guidelines

Use chips for tags, active filter lists, email recipients, and selectable multi-options.

### Recommended (Dos)

- Provide clear text labels and distinct selected states for filter chips.
- Include accessible aria-label on delete buttons ("Remove [label]").

### Avoid (Don'ts)

- Do not make chips too long; keep text concise.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Chip Container` | Interactive pill-shaped surface. |
| `Leading Icon / Avatar` | Optional visual indicator or user profile photo. |
| `Label` | Descriptive text identifier. |
| `Delete Button` | Optional cross icon button triggering onDelete. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Instant scale and background tint transitions on click and hover.

## Keyboard Navigation & ARIA

Official pattern: [Button / Tag pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | Toggles selection or triggers onClick action. |
| `Backspace / Delete` | Triggers onDelete when focused on a deletable chip. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `''` | Text rendered inside the chip. |
| `variant` | `'filled' \| 'outlined'` | `'filled'` | Visual surface appearance. |
| `size` | `'sm' \| 'md'` | `'md'` | Chip sizing and padding scale. |
| `selected` | `boolean` | `false` | Whether the chip is active in a selection set. |
| `onDelete` | `() => void` | `undefined` | Enables dismiss button and fires on removal. |
| `onClick` | `() => void` | `undefined` | Enables interactive hover/click behavior. |
| `icon` | `ReactNode` | `undefined` | Leading icon. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useButtonProps`
Description: Generates keyboard and ARIA handlers for interactive chips.

```tsx
import { useButtonProps } from '@spectra/primitives';

export function CustomChip({ label, onClick }) {
  const buttonProps = useButtonProps({ onClick });
  return <div {...buttonProps} className="chip">{label}</div>;
}
```

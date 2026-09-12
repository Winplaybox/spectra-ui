# Stack

One-dimensional flexbox layout primitive managing horizontal or vertical spacing between children.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Stack } from '@spectra/react';

export default function BasicStackExample() {
  return (
    <Stack>
      Stack Example
    </Stack>
  );
}
```

## Guidelines

Use Stack whenever items need consistent spacing along a single axis (e.g. form fields, button bars).

### Recommended (Dos)

- Use direction="column" for vertical form stacks and direction="row" for toolbar buttons.

### Avoid (Don'ts)

- Do not use manual margin hacks when Stack gap handles spacing automatically.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Stack Root` | Flex container with gap spacing. |

## Motion & Transitions

- **Duration**: `none`
- **Easing Curve**: `none`
- **Specification**: Layout container.

## Keyboard Navigation & ARIA

Official pattern: [Layout Structure](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `direction` | `'row' \| 'column'` | `'column'` | Flex layout axis. |
| `gap` | `number \| string` | `12` | Space between elements. |
| `align` | `string` | `'stretch'` | Cross-axis alignment. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Applies token spacing values to flex gap.

```tsx
export function StackPrimitive({ direction = 'column', gap = 12, children }) {
  return <div style={{ display: 'flex', flexDirection: direction, gap }}>{children}</div>;
}
```

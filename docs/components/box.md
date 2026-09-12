# Box

Fundamental polymorphic container element with direct token prop bindings and responsive styling.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Box } from '@spectra/react';

export default function BasicBoxExample() {
  return (
    <Box>
      Box Example
    </Box>
  );
}
```

## Guidelines

Use Box as the atomic primitive building block for custom components needing direct token padding, margin, and surface colors.

### Recommended (Dos)

- Use the "as" prop to render semantic HTML elements (e.g. as="section", as="article").

### Avoid (Don'ts)

- Do not use Box when a more semantic component (Card, Button) already exists.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Root` | Polymorphic HTML container. |

## Motion & Transitions

- **Duration**: `none`
- **Easing Curve**: `none`
- **Specification**: Static layout container.

## Keyboard Navigation & ARIA

Official pattern: [Generic Container](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `as` | `ElementType` | `'div'` | Underlying HTML element to render. |
| `padding` | `string` | `undefined` | Token spacing multiplier. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Translates design token keys into CSS custom properties.

```tsx
import { useTheme } from '@spectra/primitives';

export function BoxPrimitive({ as: Tag = 'div', ...props }) {
  return <Tag {...props} />;
}
```

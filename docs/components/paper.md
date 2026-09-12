# Paper

Physical metaphor surface receiving elevation shadows and border radius according to token scale.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Paper } from '@spectra/react';

export default function BasicPaperExample() {
  return (
    <Paper>
      Paper Example
    </Paper>
  );
}
```

## Guidelines

Use Paper as the foundational surface for modals, popovers, dropdowns, and cards.

### Recommended (Dos)

- Choose elevation levels (1 to 5) corresponding to visual layer hierarchy.

### Avoid (Don'ts)

- Avoid high elevations that cast overpowering harsh shadows in dark mode.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Paper Surface` | Elevated container with background and shadow. |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Elevation shadow shifts on state transitions.

## Keyboard Navigation & ARIA

Official pattern: [Surface Region](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `elevation` | `0 \| 1 \| 2 \| 3 \| 4 \| 5` | `1` | Shadow depth level. |
| `variant` | `'flat' \| 'elevation' \| 'outlined'` | `'elevation'` | Surface finish. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Extracts theme shadow tokens.

```tsx
import { useTheme } from '@spectra/primitives';

export function PaperPrimitive({ elevation = 1, children }) {
  return <div className={`spectra-paper-elevation-${elevation}`}>{children}</div>;
}
```

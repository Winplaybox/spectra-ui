# Grid

Responsive 12-column CSS grid container supporting fractional column spans and variable gaps.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Grid } from '@spectra/react';

export default function BasicGridExample() {
  return (
    <Grid>
      Grid Example
    </Grid>
  );
}
```

## Guidelines

Use grid for complex multi-dimensional page layouts and component card showcases.

### Recommended (Dos)

- Define columns using standard 12-column subdivisions or auto-fit repeat patterns.

### Avoid (Don'ts)

- Avoid fixed pixel column widths that cause horizontal scrolling on mobile.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Grid Container` | CSS grid display with column templates. |
| `Grid Items` | Child elements assigned specific column spans. |

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
| `columns` | `number \| string` | `12` | Grid column count or template. |
| `gap` | `number \| string` | `16` | Spacing between rows and columns. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Applies 4px grid spacing tokens.

```tsx
export function GridPrimitive({ children }) {
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>{children}</div>;
}
```

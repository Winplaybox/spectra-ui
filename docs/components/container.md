# Container

Centers content horizontally with calibrated maximum width bounds (sm, md, lg, xl, 2xl) and gutters.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Container } from '@spectra/react';

export default function BasicContainerExample() {
  return (
    <Container>
      Container Example
    </Container>
  );
}
```

## Guidelines

Use containers as top-level page wrappers to prevent wide displays from stretching text into unreadable line lengths.

### Recommended (Dos)

- Choose maxWidth based on content density (e.g. md for docs, xl for dashboards).

### Avoid (Don'ts)

- Do not nest containers inside each other unnecessarily.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Container Wrapper` | Centered block with auto horizontal margins. |

## Motion & Transitions

- **Duration**: `none`
- **Easing Curve**: `none`
- **Specification**: Static layout container.

## Keyboard Navigation & ARIA

Official pattern: [Layout Region](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `maxWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'xl'` | Max width ceiling. |
| `center` | `boolean` | `true` | Auto-centers horizontally. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Applies responsive breakpoint widths.

```tsx
import { useTheme } from '@spectra/primitives';

export function ContainerPrimitive({ children }) {
  return <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>;
}
```

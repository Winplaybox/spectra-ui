# Spinner

An accessible circular rotating progress indicator used to signify background activity or pending operations.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Spinner } from '@spectra/react';

export default function BasicSpinnerExample() {
  return (
    <Spinner>
      Spinner Example
    </Spinner>
  );
}
```

## Guidelines

Use small spinners inline within buttons. Use medium and large spinners for section or full-page data loading states.

### Recommended (Dos)

- Provide an accessible aria-label (e.g. "Loading data...") for screen readers.
- Center spinners within the loading area so users recognize what is loading.

### Avoid (Don'ts)

- Avoid placing multiple uncoordinated spinners on a single page.
- Do not display spinners for operations completing in under 100ms.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Track (SVG circle)` | Background muted circular ring. |
| `Head (SVG arc)` | Accent-colored rotating stroke creating continuous motion. |
| `Screen-reader label` | Visually hidden text with role="status". |

## Motion & Transitions

- **Duration**: `800ms`
- **Easing Curve**: `linear`
- **Specification**: Infinite continuous 360-degree rotation animation.

## Keyboard Navigation & ARIA

Official pattern: [Progress Indicator pattern](https://www.w3.org/WAI/ARIA/apg/patterns/meter/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dimensions: sm (16px), md (24px), lg (36px). |
| `color` | `string` | `'primary'` | Stroke color token or CSS color. |
| `label` | `string` | `'Loading...'` | Accessible screen reader status label. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useReducedMotion`
Description: Detects if the user prefers reduced motion and replaces spinner spin with pulsing opacity.

```tsx
import { useReducedMotion } from '@spectra/primitives';

export function AccessibleSpinner() {
  const prefersReduced = useReducedMotion();
  return <div style={{ animation: prefersReduced ? 'pulse 1.5s infinite' : 'spin 0.8s linear infinite' }} />;
}
```

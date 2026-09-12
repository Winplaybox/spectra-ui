# Skeleton

Displays an animated placeholder preview of content before data finishes loading, reducing perceived loading time.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Skeleton } from '@spectra/react';

export default function BasicSkeletonExample() {
  return (
    <Skeleton>
      Skeleton Example
    </Skeleton>
  );
}
```

## Guidelines

Shape skeletons to match the rough layout of incoming elements (text lines, avatar circles, rectangular cards).

### Recommended (Dos)

- Match skeleton dimensions closely to the rendered component layout.
- Set aria-hidden="true" or role="presentation" to prevent noisy screen reader output.

### Avoid (Don'ts)

- Do not display skeletons when loading takes less than 200ms.
- Avoid jarring layout shifts when replacing skeletons with actual data.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Shape Surface` | Text line, circle, or rounded rectangle. |
| `Shimmer Gradient` | CSS linear-gradient sweeping horizontally across the surface. |

## Motion & Transitions

- **Duration**: `1.6s`
- **Easing Curve**: `ease-in-out`
- **Specification**: Continuous horizontal shimmer wave animation.

## Keyboard Navigation & ARIA

Official pattern: [Placeholder pattern](https://www.w3.org/WAI/ARIA/apg/patterns/meter/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'text' \| 'circular' \| 'rectangular' \| 'rounded'` | `'text'` | Geometric shape of the placeholder. |
| `width` | `string \| number` | `'100%'` | Width of skeleton block. |
| `height` | `string \| number` | `undefined` | Height of skeleton block. |
| `animation` | `'wave' \| 'pulse' \| 'none'` | `'wave'` | Shimmer wave or pulsing opacity. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Provides theme-aware shimmer colors adjusting between dark and light modes.

```tsx
import { useTheme } from '@spectra/primitives';

export function CustomSkeleton() {
  const { colorScheme } = useTheme();
  return <div className={`skeleton-${colorScheme}`} />;
}
```

# Card

Cards group related content, actions, and media into a unified surface container with distinct borders and elevations.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Card } from '@spectra/react';

export default function BasicCardExample() {
  return (
    <Card>
      Card Example
    </Card>
  );
}
```

## Guidelines

Use cards to present summaries of entities that can be clicked to view more details.

### Recommended (Dos)

- Group related pieces of information together logically inside one card.
- Use interactive cards with clear focus rings when the entire card is clickable.

### Avoid (Don'ts)

- Do not overload cards with excessive nested interactions.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Card (<Card>)` | Surface container with 2D border and border-radius tokens. |
| `Header` | Title and optional trailing action. |
| `Body` | Main content and descriptions. |
| `Footer` | Actions, timestamps, or buttons. |

## Motion & Transitions

- **Duration**: `--motion-subtle (150ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: Hover borders and shadow elevation transition cleanly.

## Keyboard Navigation & ARIA

Official pattern: [Card pattern](https://www.w3.org/WAI/ARIA/apg/patterns/card/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | Triggers primary action when card is marked interactive. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'bordered' \| 'elevated'` | `'default'` | Surface appearance. |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding spacing. |
| `interactive` | `boolean` | `false` | Adds hover elevation and clickable focus ring. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Provides current theme tokens (colors.surface, colors.border) for custom card containers.

```tsx
import { useTheme } from '@spectra/primitives';

export function CustomCard({ children }) {
  const { colorScheme } = useTheme();
  return <div className={`card-${colorScheme}`}>{children}</div>;
}
```

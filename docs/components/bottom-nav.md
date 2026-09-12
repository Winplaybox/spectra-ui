# Bottom Navigation

Ergonomic mobile bottom navigation bar providing quick switching between 3 to 5 top-level views.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { BottomNavigation } from '@spectra/react';

export default function BasicBottomNavigationExample() {
  return (
    <BottomNavigation>
      Bottom Navigation Example
    </BottomNavigation>
  );
}
```

## Guidelines

Use bottom navigation on mobile devices to place top-level destinations within natural thumb reach.

### Recommended (Dos)

- Limit destinations to between 3 and 5 items.
- Always combine icon glyphs with short labels.

### Avoid (Don'ts)

- Never scroll bottom navigation items horizontally.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Bottom Bar` | Pinned bottom container with elevation shadow. |
| `Nav Item` | Vertical icon and text trigger. |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Active tab icon scales up slightly with color transition.

## Keyboard Navigation & ARIA

Official pattern: [Tablist Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tablist/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowRight / ArrowLeft` | Switches between navigation destinations. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `''` | Active route identifier. |
| `onChange` | `(value: string) => void` | `undefined` | Route change callback. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Manages active bottom navigation index.

```tsx
import { useControllableState } from '@spectra/primitives';

export function BottomNavPrimitive() {
  const [tab, setTab] = useControllableState({ defaultValue: 'home' });
  return <nav role="tablist">{/* items */}</nav>;
}
```

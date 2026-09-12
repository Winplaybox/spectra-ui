# Speed Dial

Floating action button that blossoms into a fan of related quick actions when activated.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Speed Dial } from '@spectra/react';

export default function BasicSpeedDialExample() {
  return (
    <Speed Dial>
      Speed Dial Example
    </Speed Dial>
  );
}
```

## Guidelines

Use speed dials on mobile views where a single persistent FAB can reveal 3 to 5 high-frequency actions.

### Recommended (Dos)

- Rotate the main action icon (e.g. Plus into Close cross) when opened.
- Provide clear text labels alongside each secondary action button.

### Avoid (Don'ts)

- Do not show more than 6 child actions in a speed dial.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Primary FAB` | Floating circular button pinned to corner. |
| `Action Cluster` | Column of smaller secondary action buttons. |

## Motion & Transitions

- **Duration**: `--motion-normal (200ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: Primary button rotates 45 degrees and secondary buttons stagger upwards.

## Keyboard Navigation & ARIA

Official pattern: [Speed Dial Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | Toggles speed dial open and closed. |
| `Escape` | Closes open speed dial. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `actions` | `Array<{ label: string; icon: ReactNode; onClick: () => void }>` | `[]` | Secondary speed dial actions. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDisclosure`
Description: Controls open state and handles dismissal.

```tsx
import { useDisclosure } from '@spectra/primitives';

export function SpeedDialPrimitive() {
  const { isOpen, onToggle } = useDisclosure();
  return <button onClick={onToggle}>+</button>;
}
```

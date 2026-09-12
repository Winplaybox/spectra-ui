# Drawer

Off-canvas sliding overlay panel anchored to the left, right, top, or bottom of the viewport.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Drawer } from '@spectra/react';

export default function BasicDrawerExample() {
  return (
    <Drawer>
      Drawer Example
    </Drawer>
  );
}
```

## Guidelines

Use drawers for secondary workflows (settings panels, shopping carts, filters) that require extensive vertical scrolling without leaving the main view.

### Recommended (Dos)

- Trap keyboard focus inside the open drawer and close on Escape press.
- Dim background content with an accessible backdrop overlay.

### Avoid (Don'ts)

- Never allow the body content to scroll underneath an open drawer.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Backdrop` | Semi-transparent scrim overlay behind drawer. |
| `Drawer Panel` | Sliding container with role="dialog" and aria-modal="true". |
| `Header & Close` | Panel title and dismiss button. |
| `Body` | Scrollable content container. |

## Motion & Transitions

- **Duration**: `--motion-normal (250ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: Panel slides in from edge while backdrop fades to 40% opacity.

## Keyboard Navigation & ARIA

Official pattern: [Modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Escape` | Closes drawer and returns focus to trigger element. |
| `Tab` | Traps focus within drawer elements. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `false` | Controlled visibility boolean. |
| `onClose` | `() => void` | `undefined` | Close request callback. |
| `placement` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Viewport anchor edge. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDisclosure`
Description: Controls open state and binds scroll-lock to document body.

```tsx
import { useDisclosure, useScrollLock } from '@spectra/primitives';

export function DrawerPrimitive() {
  const { isOpen, onClose } = useDisclosure();
  useScrollLock(isOpen);
  return isOpen ? <div role="dialog">{/* content */}</div> : null;
}
```

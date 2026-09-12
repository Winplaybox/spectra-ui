# Menu

Floating action menu displaying a list of choices on temporary surfaces (APG Menu pattern).

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Menu } from '@spectra/react';

export default function BasicMenuExample() {
  return (
    <Menu>
      Menu Example
    </Menu>
  );
}
```

## Guidelines

Use menus for action lists triggered by contextual buttons or three-dot kebab icons.

### Recommended (Dos)

- Follow WAI-ARIA Menu pattern with role="menu" and role="menuitem".
- Support arrow down and arrow up to navigate between menu items.

### Avoid (Don'ts)

- Do not use menus for primary navigation links (use standard links instead).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Trigger` | Button opening the menu. |
| `Menu Container` | Surface with role="menu". |
| `Menu Items` | Actions with role="menuitem". |

## Motion & Transitions

- **Duration**: `--motion-fast (120ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Menu scales from trigger anchor with subtle fade.

## Keyboard Navigation & ARIA

Official pattern: [Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowDown / ArrowUp` | Roams focus through menu items. |
| `Enter / Space` | Activates selected menu item. |
| `Escape` | Closes menu and restores trigger focus. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `false` | Menu visibility state. |
| `onClose` | `() => void` | `undefined` | Close callback. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useListNavigation`
Description: Manages arrow key roving focus across menu items.

```tsx
import { useListNavigation } from '@spectra/primitives';

export function MenuPrimitive() {
  const { activeIndex } = useListNavigation({ totalItems: 4 });
  return <ul role="menu">{/* items */}</ul>;
}
```

# App Bar

Top application header providing branding identity, breadcrumbs, search trigger, and user actions.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { App Bar } from '@spectra/react';

export default function BasicAppBarExample() {
  return (
    <App Bar>
      App Bar Example
    </App Bar>
  );
}
```

## Guidelines

Use App Bar as the persistent primary header anchored across top of the application window.

### Recommended (Dos)

- Render with <header> landmark element for screen reader landmark navigation.
- Keep header minimal, uncluttered, and high-focus.

### Avoid (Don'ts)

- Do not place excessive secondary settings in the main header (use a settings drawer).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Header Landmark (<header>)` | Sticky top banner container. |
| `Brand & Title` | Logo and current breadcrumb. |
| `Action Toolbar` | Search, theme toggle, and profile triggers. |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Background opacity and blur apply as user scrolls down page.

## Keyboard Navigation & ARIA

Official pattern: [Banner Landmark & Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Cycles focus sequentially through header controls. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sticky` | `boolean` | `true` | Pins header to top of viewport. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Provides backdrop blur and border styling tokens.

```tsx
export function AppBarPrimitive({ children }) {
  return <header role="banner" style={{ position: 'sticky', top: 0 }}>{children}</header>;
}
```

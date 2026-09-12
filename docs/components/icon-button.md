# Icon Button

Compact circular or rounded square button displaying only a vector icon with accessible aria-label.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { IconButton } from '@spectra/react';

export default function BasicIconButtonExample() {
  return (
    <IconButton>
      Icon Button Example
    </IconButton>
  );
}
```

## Guidelines

Use icon buttons in toolbars, table action columns, and modals where space is constrained and the vector icon is universally recognizable.

### Recommended (Dos)

- Always supply a descriptive, localized aria-label (e.g. "Close dialog", "Search repository").
- Provide a contextual tooltip on hover to assist user discoverability.

### Avoid (Don'ts)

- Never render an icon button without an accessible name.
- Do not use obscure vector metaphors without accompanying tooltip copy.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Root (<button>)` | Accessible button container with 1:1 aspect ratio. |
| `Vector Icon` | 16px or 20px SVG vector centered within button bounds. |

## Motion & Transitions

- **Duration**: `--motion-fast (100ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Subtle background tint shift on hover and active scale press.

## Keyboard Navigation & ARIA

Official pattern: [Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | Triggers the icon button action. |
| `Tab` | Focuses the icon button. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `ReactNode` | `undefined` | Vector icon element. |
| `aria-label` | `string` | `undefined` | Required accessible name. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dimensions scale (32px, 40px, 48px). |
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'ghost'` | Visual surface variant. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useFocusRing`
Description: Supplies accessible focus ring parameters for circular boundaries.

```tsx
import { useFocusRing } from '@spectra/primitives';

export function ActionIconButton(props) {
  const { isFocusVisible, focusProps } = useFocusRing();
  return <button {...focusProps} aria-label={props.label} className={isFocusVisible ? 'focus-ring' : ''} />;
}
```

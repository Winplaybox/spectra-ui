# Tooltip

Tooltips display brief informative text when users hover, focus, or tap an interactive element.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Tooltip } from '@spectra/react';

export default function BasicTooltipExample() {
  return (
    <Tooltip>
      Tooltip Example
    </Tooltip>
  );
}
```

## Guidelines

Use tooltips to explain icons or controls that have no visible text label.

### Recommended (Dos)

- Keep tooltip text concise (under 8 words).
- Make tooltips appear upon both mouse hover and keyboard focus.

### Avoid (Don'ts)

- Do not put interactive links or buttons inside a tooltip (use a Popover instead).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Trigger` | Element that initiates the tooltip upon hover or focus. |
| `Popup Box` | Floating container with role="tooltip" and 2D border. |

## Motion & Transitions

- **Duration**: `--motion-subtle (150ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: Tooltip fades and translates subtly 4px into view.

## Keyboard Navigation & ARIA

Official pattern: [Tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Focuses trigger element and displays tooltip. |
| `Escape` | Immediately hides the active tooltip. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `content` | `ReactNode` | `undefined` | Message displayed inside tooltip. |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Placement direction relative to target. |
| `delay` | `number` | `100` | Hover delay in milliseconds before appearance. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useOutsideClick`
Description: Automatically dismisses floating popovers and tooltips when clicking outside the boundary.

```tsx
import { useOutsideClick } from '@spectra/primitives';

export function CustomTooltip() {
  const ref = useOutsideClick(() => setVisible(false));
  return <div ref={ref}>Tooltip content</div>;
}
```

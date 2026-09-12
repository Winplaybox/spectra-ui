# Popover

Contextual floating container anchored to a trigger element containing interactive forms and actions.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Popover } from '@spectra/react';

export default function BasicPopoverExample() {
  return (
    <Popover>
      Popover Example
    </Popover>
  );
}
```

## Guidelines

Use popovers when user interaction is required (e.g. color pickers, mini forms, share dialogs) unlike tooltips which are read-only.

### Recommended (Dos)

- Position popovers with collision detection so they stay within viewport bounds.
- Support outside clicks and Escape key to dismiss.

### Avoid (Don'ts)

- Do not open popovers on mouse hover (use Tooltip instead).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Trigger` | Anchor element opening the popover on click. |
| `Popover Surface` | Elevated floating card. |
| `Arrow Pointer` | Small vector arrow pointing to trigger. |

## Motion & Transitions

- **Duration**: `--motion-fast (120ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Fade in and 4px scale zoom from trigger point.

## Keyboard Navigation & ARIA

Official pattern: [Non-modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Escape` | Closes popover and returns focus to trigger. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `trigger` | `ReactNode` | `undefined` | Anchor button opening popover. |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Preferred compass anchor side. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useOutsideClick`
Description: Dismisses popover when user clicks outside surface bounds.

```tsx
import { useOutsideClick } from '@spectra/primitives';

export function PopoverDemo() {
  const ref = useRef(null);
  useOutsideClick(ref, () => setOpen(false));
  return <div ref={ref}>{/* popover */}</div>;
}
```

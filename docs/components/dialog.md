# Dialog

Dialogs are modal windows that require users to interact before returning to the parent application, used for critical decisions.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Dialog } from '@spectra/react';

export default function BasicDialogExample() {
  return (
    <Dialog>
      Dialog Example
    </Dialog>
  );
}
```

## Guidelines

Use dialogs sparingly for interruptions that demand immediate attention (e.g. destructive confirmations). Always trap focus and support Escape to dismiss.

### Recommended (Dos)

- Trap keyboard focus inside the dialog while open.
- Support the Escape key to close the dialog.
- Return focus to the triggering element when the dialog dismisses.

### Avoid (Don'ts)

- Do not trigger dialogs unexpectedly without user action.
- Avoid stacking dialogs on top of other dialogs.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Backdrop` | Semi-transparent overlay dimming background content. |
| `Surface` | Centered card containing dialog content. |
| `Title` | Dialog heading linked via aria-labelledby. |
| `Body` | Message or form controls. |
| `Footer Actions` | Confirmation and cancel buttons. |

## Motion & Transitions

- **Duration**: `--motion-normal (250ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: The backdrop fades in while the modal card scales subtly into view.

## Keyboard Navigation & ARIA

Official pattern: [Modal Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Escape` | Dismisses the dialog and returns focus to the trigger. |
| `Tab` | Cycles focus strictly between interactive elements inside the dialog. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `false` | Controls visibility of the modal dialog. |
| `onClose` | `() => void` | `undefined` | Callback when user clicks overlay, close button, or presses Escape. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDisclosure`
Description: Manages modal open/close states, focus trapping, and backdrop click handlers.

```tsx
import { useDisclosure } from '@spectra/primitives';

export function CustomModal() {
  const { isOpen, open, close } = useDisclosure();
  return (
    <>
      <button onClick={open}>Open</button>
      {isOpen && <div role="dialog"><button onClick={close}>Close</button></div>}
    </>
  );
}
```

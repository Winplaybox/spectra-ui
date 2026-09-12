# Toast

Ephemeral floating alert notification that auto-dismisses after a calibrated duration timeout.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Toast } from '@spectra/react';

export default function BasicToastExample() {
  return (
    <Toast>
      Toast Example
    </Toast>
  );
}
```

## Guidelines

Use toasts for asynchronous feedback confirmations ("Project saved", "File uploaded") that do not interrupt user workflow.

### Recommended (Dos)

- Render toasts inside an aria-live="polite" region so screen readers announce them.
- Provide an explicit close button and pause timer on hover.

### Avoid (Don'ts)

- Do not place critical destructive warnings inside auto-dismissing toasts.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Toast Container` | Fixed viewport stack for multiple notifications. |
| `Toast Item` | Floating card with icon, message, and close button. |

## Motion & Transitions

- **Duration**: `--motion-normal (200ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: Slides into viewport from corner and fades out on dismiss.

## Keyboard Navigation & ARIA

Official pattern: [Alert / Status Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Escape` | Dismisses active toast. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `''` | Toast headline. |
| `description` | `string` | `''` | Optional detail message. |
| `duration` | `number` | `4000` | Auto-dismiss timeout in ms. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useToast`
Description: Programmatic toast dispatcher with queueing and auto-dismissal.

```tsx
import { useToast } from '@spectra/primitives';

export function SaveButton() {
  const { toast } = useToast();
  return <button onClick={() => toast({ title: 'Saved successfully' })}>Save</button>;
}
```

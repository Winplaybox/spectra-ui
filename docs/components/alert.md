# Alert

Displays prominent, urgent feedback or system status messages to users without interrupting their current workflow.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Alert } from '@spectra/react';

export default function BasicAlertExample() {
  return (
    <Alert>
      Alert Example
    </Alert>
  );
}
```

## Guidelines

Use Info for contextual notices, Success for confirmed tasks, Warning for non-blocking cautions, and Danger for critical errors.

### Recommended (Dos)

- Match the alert variant with the severity level of the message.
- Provide clear, actionable language and an optional dismiss button for non-permanent notifications.
- Place persistent alerts near the relevant section or form requiring correction.

### Avoid (Don'ts)

- Do not overuse alerts for minor trivial notifications.
- Never dismiss an alert automatically if it contains critical error instructions.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Container (role="alert")` | Semantic container with ARIA live region attribute. |
| `Status Icon` | Contextual vector icon reinforcing variant severity visually. |
| `Title & Message` | Bold headline and descriptive message body. |
| `Dismiss Button` | Accessible button triggering onDismiss callback. |

## Motion & Transitions

- **Duration**: `--motion-normal (250ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: Alert slides and fades smoothly into view on mount, and fades out when dismissed.

## Keyboard Navigation & ARIA

Official pattern: [Alert pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Moves focus to the dismiss button or any embedded action links. |
| `Escape` | Dismisses alert when focus is within the dismiss button. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Semantic status severity variant. |
| `title` | `string` | `undefined` | Optional bold heading rendered above the message. |
| `dismissible` | `boolean` | `false` | When true, renders an accessible close button. |
| `onDismiss` | `() => void` | `undefined` | Callback fired when user clicks close button. |
| `icon` | `ReactNode` | `undefined` | Custom icon overriding default variant icon. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDisclosure`
Description: Controls visibility, transition states, and unmount lifecycles for dismissible alerts.

```tsx
import { useDisclosure } from '@spectra/primitives';

export function CustomAlert({ message }) {
  const { isOpen, close } = useDisclosure(true);
  if (!isOpen) return null;
  return <div role="alert">{message}<button onClick={close}>×</button></div>;
}
```

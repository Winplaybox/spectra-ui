# Button

Buttons allow users to trigger actions or events, such as submitting a form, opening a dialog, canceling an operation, or performing a deletion.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Button } from '@spectra/react';

export default function BasicButtonExample() {
  return (
    <Button>
      Button Example
    </Button>
  );
}
```

## Guidelines

Use primary buttons for the single main call-to-action on a screen. Use secondary or tertiary buttons for complementary actions. Use danger buttons with confirmation for destructive operations.

### Recommended (Dos)

- Use action-oriented verbs for button labels (e.g. "Save Changes", "Create Account", "Delete").
- Reserve the Primary variant for the single most important action per view.
- Show an inline loading spinner when performing asynchronous actions to prevent double-submissions.

### Avoid (Don'ts)

- Do not use multiple primary buttons on the same screen (competes for user attention).
- Never remove focus-visible outlines (violates WCAG 2.4.7 Focus Visible).
- Do not use vague labels like "OK" or "Click Here".

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Root (<button>)` | Native semantic button with role="button" and focus management. |
| `Leading Icon` | Optional 16px vector icon establishing visual context before text. |
| `Label Text` | Action text rendered in Inter Medium typography. |
| `Loading Spinner` | Accessible animated indicator replacing or accompanying the icon. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Background color shifts and active scale states execute instantly with zero perceived lag.

## Keyboard Navigation & ARIA

Official pattern: [Button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | Triggers the button onClick action. |
| `Tab` | Moves focus to the button. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger'` | `'primary'` | Visual appearance and semantic emphasis. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button affecting padding and font size. |
| `isLoading` | `boolean` | `false` | Displays a loading spinner and disables interaction. |
| `disabled` | `boolean` | `false` | Disables user interaction and applies muted opacity. |
| `icon` | `ReactNode` | `undefined` | Leading or trailing icon element. |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon relative to button text. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useButtonProps`
Description: Generates accessible ARIA attributes, keydown listeners (Enter/Space), and disabled state handling for custom buttons.

```tsx
import { useButtonProps } from '@spectra/primitives';

export function CustomButton({ onClick, disabled, children }) {
  const buttonProps = useButtonProps({ onClick, disabled });
  return <div {...buttonProps} className="my-custom-btn">{children}</div>;
}
```

# TextInput

Text fields let users enter and edit text across forms, search bars, and dialogs with built-in states for focus, error, and validation.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { TextInput } from '@spectra/react';

export default function BasicTextInputExample() {
  return (
    <TextInput>
      TextInput Example
    </TextInput>
  );
}
```

## Guidelines

Always provide a clear, descriptive label. Use placeholder text only for formatting hints, not as an alternative to labels.

### Recommended (Dos)

- Always associate a visible <label> with the input field for screen readers.
- Display inline error messages directly beneath the input when validation fails.
- Provide clear helper text or description when formatting rules apply (e.g. password rules).

### Avoid (Don'ts)

- Never rely solely on placeholder text for the label (placeholders disappear upon typing).
- Do not block paste actions in form inputs (frustrates users and password managers).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Label` | Accessible label linked via htmlFor to input id. |
| `Input Box` | Native input with 2D border and focus-visible ring. |
| `Leading Icon` | Contextual icon such as search or user. |
| `Trailing Action` | Interactive control such as clear search or show password. |
| `Helper / Error Text` | Descriptive feedback linked via aria-describedby. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Border color and focus outline transitions activate swiftly upon focus.

## Keyboard Navigation & ARIA

Official pattern: [Textbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/textbox/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Focuses into the input field. |
| `Typing` | Updates text value and triggers onChange callback. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `undefined` | Descriptive text label associated with the input. |
| `placeholder` | `string` | `''` | Sample prompt or formatting hint. |
| `error` | `string` | `undefined` | Error message displayed beneath the input. |
| `description` | `string` | `undefined` | Helper text providing guidance before input. |
| `leftIcon` | `ReactNode` | `undefined` | Icon displayed on the left side (e.g. search). |
| `rightIcon` | `ReactNode` | `undefined` | Icon displayed on the right side (e.g. clear, eye). |

## Headless Primitive (`@spectra/primitives`)

Hook: `useId`
Description: Generates stable, SSR-safe unique IDs for linking labels (<label htmlFor>) and error messages (<span aria-describedby>) across Web & React Native.

```tsx
import { useId } from '@spectra/primitives';

export function CustomField({ label, error }) {
  const id = useId('input');
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-describedby={error ? `${id}-err` : undefined} />
      {error && <span id={`${id}-err`}>{error}</span>}
    </div>
  );
}
```

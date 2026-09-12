# TextArea

Multi-line text input field supporting auto-expansion, character limit counters, and resize constraints.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { TextArea } from '@spectra/react';

export default function BasicTextAreaExample() {
  return (
    <TextArea>
      TextArea Example
    </TextArea>
  );
}
```

## Guidelines

Use text areas when users are expected to enter free-form paragraphs such as comments, feedback, or descriptions.

### Recommended (Dos)

- Provide clear label and placeholder guidance indicating expected multi-line content.
- Show an inline character counter when database field length limits apply.

### Avoid (Don'ts)

- Do not set fixed height that hides input text behind an awkward micro-scrollbar.
- Avoid disabling vertical resize unless auto-expansion is enabled.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Label` | Input headline associated via htmlFor attribute. |
| `Textarea Field` | Semantic <textarea> supporting multi-line editing. |
| `Character Counter` | Shows used vs. total allowed characters. |
| `Helper Text` | Supplemental guidance linked via aria-describedby. |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Smooth height transition when auto-expansion calculates content growth.

## Keyboard Navigation & ARIA

Official pattern: [Textbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter` | Inserts a new line break. |
| `Tab` | Advances focus to the next interactive form element. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `rows` | `number` | `3` | Initial visible row height. |
| `maxLength` | `number` | `undefined` | Maximum allowed character count. |
| `autoResize` | `boolean` | `false` | Automatically expands height to fit text. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useFormField`
Description: Binds label ID and error descriptions for accessible form validation.

```tsx
import { useFormField } from '@spectra/primitives';

export function CustomTextArea(props) {
  const { inputProps, labelProps } = useFormField(props);
  return <textarea {...inputProps} />;
}
```

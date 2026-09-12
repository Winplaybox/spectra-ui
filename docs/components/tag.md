# Tag

Compact visual token for categorization, status indicators, and keyword labeling.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Tag } from '@spectra/react';

export default function BasicTagExample() {
  return (
    <Tag>
      Tag Example
    </Tag>
  );
}
```

## Guidelines

Use tags to attach metadata attributes to articles, tasks, or cloud resources.

### Recommended (Dos)

- Use distinct color variants to differentiate statuses (e.g. Success, Warning, Error).
- Provide a clear dismiss action with accessible label when tags are removable.

### Avoid (Don'ts)

- Do not use tags as the primary navigation trigger across different pages.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Tag Body` | Contained surface with subtle border and text. |
| `Close Vector` | Optional remove cross button. |

## Motion & Transitions

- **Duration**: `--motion-fast (100ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Tag scales down and fades out when removed.

## Keyboard Navigation & ARIA

Official pattern: [Tag / Badge Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Delete / Backspace` | Removes the tag when focused in an editable collection. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `''` | Tag text. |
| `onClose` | `() => void` | `undefined` | Callback fired on close trigger. |
| `color` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color theme token. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Calculates color contrast ratios for tag backgrounds.

```tsx
import { useTheme } from '@spectra/primitives';

export function CustomTag({ label }) {
  return <span className="spectra-tag">{label}</span>;
}
```

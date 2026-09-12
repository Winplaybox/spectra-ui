# Divider

A visual separator dividing content into distinct thematic groups or sections, supporting horizontal and vertical orientations.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Divider } from '@spectra/react';

export default function BasicDividerExample() {
  return (
    <Divider>
      Divider Example
    </Divider>
  );
}
```

## Guidelines

Use horizontal dividers to separate sections in cards or page layouts. Use vertical dividers between toolbar actions.

### Recommended (Dos)

- Set role="separator" and aria-orientation for accessibility.
- Use subtle colors so the divider guides the eye without competing with content.

### Avoid (Don'ts)

- Do not overuse dividers when whitespace alone is sufficient to separate content.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Rule Line` | Semantic <hr> or <div> line with role="separator". |
| `Optional Label` | Centered, left, or right text inset (e.g. "OR"). |

## Motion & Transitions

- **Duration**: `none`
- **Easing Curve**: `none`
- **Specification**: Static visual layout element.

## Keyboard Navigation & ARIA

Official pattern: [Separator pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction of separation line. |
| `variant` | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Border stroke style. |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Margin spacing around divider. |
| `label` | `string` | `undefined` | Text label inset within divider. |
| `labelPosition` | `'center' \| 'left' \| 'right'` | `'center'` | Placement of label along the line. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Injects design token border colors.

```tsx
import { useTheme } from '@spectra/primitives';

export function ThemedDivider() {
  const { colorScheme } = useTheme();
  return <hr className={`divider-${colorScheme}`} />;
}
```

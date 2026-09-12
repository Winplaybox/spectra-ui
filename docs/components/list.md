# List

Lists organize multiple items into continuous, vertical text and icon indexes for quick scanning and selection.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { List } from '@spectra/react';

export default function BasicListExample() {
  return (
    <List>
      List Example
    </List>
  );
}
```

## Guidelines

Use lists to show collections of related items, navigation menus, or search results.

### Recommended (Dos)

- Use divided lines when list items have multi-line text or dense metadata.
- Include leading icons to facilitate rapid category recognition.

### Avoid (Don'ts)

- Do not make non-interactive list items have hover effects that resemble clickable buttons.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `List (<List>)` | Wrapper establishing list role. |
| `Item (<ListItem>)` | Individual row with click and hover states. |
| `Icon (<ListItemIcon>)` | Leading or trailing vector icon container. |
| `Text (<ListItemText>)` | Primary heading and secondary subtitle. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Row selection and hover color transitions instantly.

## Keyboard Navigation & ARIA

Official pattern: [List pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Tabs into interactive list items. |
| `Enter` | Activates selected list item. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | `undefined` | List items rendered inside container. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useKeyboardNavigation`
Description: Implements roving tabindex and arrow key list item selection.

```tsx
import { useKeyboardNavigation } from '@spectra/primitives';

export function CustomList() {
  const { activeIndex, onKeyDown } = useKeyboardNavigation({ count: 5 });
  return <ul onKeyDown={onKeyDown}>...</ul>;
}
```

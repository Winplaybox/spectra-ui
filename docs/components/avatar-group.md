# Avatar Group

Stack of overlapping user avatars displaying collaborator presence with an overflow counter pill.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Avatar Group } from '@spectra/react';

export default function BasicAvatarGroupExample() {
  return (
    <Avatar Group>
      Avatar Group Example
    </Avatar Group>
  );
}
```

## Guidelines

Use avatar groups to show multiple contributors, team members, or active document collaborators without cluttering layout space.

### Recommended (Dos)

- Limit maximum visible avatars to 4 or 5 and render an overflow badge (e.g. "+3").
- Provide accessible tooltips displaying individual names on hover.

### Avoid (Don'ts)

- Do not overlap avatars without a 2px contrasting border separator.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Group Container` | Flex row container with negative margin overlap. |
| `Avatar Nodes` | Individual avatar components with 2px surface borders. |
| `Overflow Counter` | Circular pill indicating remaining hidden collaborators. |

## Motion & Transitions

- **Duration**: `--motion-fast (120ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Hovered avatar elevates in z-index with scale expansion.

## Keyboard Navigation & ARIA

Official pattern: [Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/group/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Cycles focus through interactive member avatars. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `max` | `number` | `4` | Maximum visible avatars before overflow pill. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Unified avatar dimensions scale. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Extracts surface background color for ring borders.

```tsx
import { useTheme } from '@spectra/primitives';

export function AvatarGroupPrimitive() {
  const { colorScheme } = useTheme();
  return <div className="avatar-stack">{/* avatars */}</div>;
}
```

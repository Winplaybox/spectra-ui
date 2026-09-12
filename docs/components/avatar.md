# Avatar

Avatars represent users or entities with an image, initials, or fallback icon, often paired with real-time status presence indicators.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Avatar } from '@spectra/react';

export default function BasicAvatarExample() {
  return (
    <Avatar>
      Avatar Example
    </Avatar>
  );
}
```

## Guidelines

Always provide alt text or user name so screen readers can identify the user entity.

### Recommended (Dos)

- Provide fallback initials or an icon if the image fails to load or is loading.
- Show presence indicators (online, away, busy) with high contrast borders.

### Avoid (Don'ts)

- Do not use low-resolution images that appear pixelated or blurry.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Container` | Rounded or circular wrapper with 2D border. |
| `Image / Initials` | Visual representation of the user. |
| `Status Badge` | Presence indicator dot in bottom-right corner. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Presence indicator status transitions seamlessly.

## Keyboard Navigation & ARIA

Official pattern: [Image pattern](https://www.w3.org/WAI/ARIA/apg/patterns/img/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `N/A` | Avatars are non-interactive data displays unless wrapped in a link or button. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `src` | `string` | `undefined` | URL of the avatar image. |
| `name` | `string` | `undefined` | Full name used to extract initials fallback. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the avatar. |
| `shape` | `'circle' \| 'square'` | `'circle'` | Border radius shape. |
| `status` | `'online' \| 'offline' \| 'busy' \| 'away'` | `undefined` | Presence indicator dot. |

## Headless Primitive (`@spectra/primitives`)

Hook: `getInitials`
Description: Helper algorithm extracting clean 2-letter uppercase initials from full names.

```tsx
import { getInitials } from '@spectra/primitives';

const initials = getInitials('Alexander Hamilton'); // 'AH'
```

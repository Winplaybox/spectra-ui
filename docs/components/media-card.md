# Media Card

Structured card layout pairing top media imagery or video preview with title, body, and action footer.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Media Card } from '@spectra/react';

export default function BasicMediaCardExample() {
  return (
    <Media Card>
      Media Card Example
    </Media Card>
  );
}
```

## Guidelines

Use media cards for product catalogs, blog articles, video previews, and dashboard highlight tiles.

### Recommended (Dos)

- Provide meaningful alt text for the header media image.
- Constrain media aspect ratios (16:9 or 4:3) across sibling cards in a grid.

### Avoid (Don'ts)

- Do not nest conflicting primary clickable cards inside each other.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Card Container` | Bordered or elevated surface. |
| `Media Header` | Top image banner with aspect-ratio lock. |
| `Content Body` | Title, category badge, and description. |
| `Actions Footer` | Button triggers. |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Card elevates in shadow elevation and media subtly scales on hover.

## Keyboard Navigation & ARIA

Official pattern: [Card Surface Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Focuses interactive action buttons inside the card. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `imageSrc` | `string` | `''` | Header image source URL. |
| `title` | `string` | `''` | Card title. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Applies surface token backgrounds and border radii.

```tsx
import { useTheme } from '@spectra/primitives';

export function CustomMediaCard() {
  const { colorScheme } = useTheme();
  return <div className="media-card">{/* content */}</div>;
}
```

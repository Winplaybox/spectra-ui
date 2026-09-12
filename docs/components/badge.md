# Badge

Badges are small status descriptors used to highlight item metadata, counts, tags, or system state alerts.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Badge } from '@spectra/react';

export default function BasicBadgeExample() {
  return (
    <Badge>
      Badge Example
    </Badge>
  );
}
```

## Guidelines

Use badges to inform users of status (e.g. "Active", "Pending", "Failed") or counts (e.g. "+5").

### Recommended (Dos)

- Use semantic variants (success for active, warning for pending, error for failed).
- Keep badge text short (1-2 words maximum).

### Avoid (Don'ts)

- Do not use interactive clickable actions inside badges; use a Button or Chip instead.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Badge Pill` | Compact container with 2D border and semantic colors. |
| `Status Dot` | Optional 6px circular presence dot. |
| `Label` | Short status text. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Color updates apply smoothly upon state changes.

## Keyboard Navigation & ARIA

Official pattern: [Status pattern](https://www.w3.org/WAI/ARIA/apg/patterns/status/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `N/A` | Badges are non-interactive visual indicators. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Semantic color theme. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the badge pill. |
| `dot` | `boolean` | `false` | Displays an active status dot on the left. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Provides active colorScheme and design tokens to render badges matching system palette.

```tsx
import { useTheme } from '@spectra/primitives';

export function CustomBadge({ text }) {
  const { colorScheme } = useTheme();
  return <span data-theme={colorScheme}>{text}</span>;
}
```

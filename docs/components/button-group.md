# Button Group

Horizontally or vertically groups related buttons with shared borders and unified outer corner radii.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { ButtonGroup } from '@spectra/react';

export default function BasicButtonGroupExample() {
  return (
    <ButtonGroup>
      Button Group Example
    </ButtonGroup>
  );
}
```

## Guidelines

Use button groups for closely related toolbar options such as view modes (Day, Week, Month) or text justification.

### Recommended (Dos)

- Group functionally related actions with identical sizing scale.
- Support horizontal keyboard arrow navigation across group triggers.

### Avoid (Don'ts)

- Do not mix different button variants (e.g. Danger with Primary) inside one group.
- Avoid grouping more than 5 buttons on mobile screens.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Group Container` | Flex container with role="group" or role="toolbar". |
| `Segment Buttons` | Individual buttons sharing collapsed internal borders. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Instant state shift between active segments.

## Keyboard Navigation & ARIA

Official pattern: [Toolbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowLeft / ArrowRight` | Moves focus between adjacent buttons in group. |
| `Home / End` | Moves focus to first or last button in group. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout axis of button items. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Unified sizing scale. |
| `children` | `ReactNode` | `undefined` | Button instances to render. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useListNavigation`
Description: Manages arrow key roaming and active index synchronization.

```tsx
import { useListNavigation } from '@spectra/primitives';

export function ToolbarGroup() {
  const { activeIndex } = useListNavigation({ totalItems: 3 });
  return <div role="toolbar">{/* items */}</div>;
}
```

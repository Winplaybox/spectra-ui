# Rating

Star or icon-based rating control supporting partial increments, hover previews, and keyboard selection.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Rating } from '@spectra/react';

export default function BasicRatingExample() {
  return (
    <Rating>
      Rating Example
    </Rating>
  );
}
```

## Guidelines

Use ratings for user review submissions, product feedback, and quality assessments.

### Recommended (Dos)

- Provide visible numeric feedback alongside star glyphs (e.g. "4.5 out of 5").
- Support half-star precision where nuanced grading is required.

### Avoid (Don'ts)

- Do not rely solely on color to differentiate filled stars from empty stars.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Root` | Container with role="radiogroup" or role="slider". |
| `Star Glyphs` | Vector stars with filled, half-filled, or outlined states. |

## Motion & Transitions

- **Duration**: `--motion-fast (120ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Star scales up on hover preview and snaps into place.

## Keyboard Navigation & ARIA

Official pattern: [Rating Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowRight / ArrowUp` | Increments rating score. |
| `ArrowLeft / ArrowDown` | Decrements rating score. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `max` | `number` | `5` | Total number of rating stars. |
| `value` | `number` | `0` | Current selected rating. |
| `precision` | `0.5 \| 1` | `1` | Step precision increment. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Handles hovered and locked rating scores.

```tsx
import { useControllableState } from '@spectra/primitives';

export function RatingPrimitive() {
  const [rating, setRating] = useControllableState({ defaultValue: 0 });
  return <div>{/* stars */}</div>;
}
```

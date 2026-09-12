# Calendar

Monthly date picker grid with multi-day range selection, disabled bounds, and keyboard arrow roaming.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Calendar } from '@spectra/react';

export default function BasicCalendarExample() {
  return (
    <Calendar>
      Calendar Example
    </Calendar>
  );
}
```

## Guidelines

Use calendar views when users need to select dates, book schedules, or inspect event density across monthly grids.

### Recommended (Dos)

- Support arrow key navigation across calendar grid days.
- Announce selected date and month changes via aria-live regions.

### Avoid (Don'ts)

- Do not allow selecting dates outside defined min/max booking restrictions.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Header Toolbar` | Month navigation buttons and month title. |
| `Day Column Headers` | Mon, Tue, Wed column indicators. |
| `Calendar Grid` | 7x6 matrix of selectable day cells. |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Month grid slides horizontally when paging between months.

## Keyboard Navigation & ARIA

Official pattern: [Date Picker Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowRight / ArrowLeft` | Moves date focus by one day. |
| `ArrowDown / ArrowUp` | Moves date focus by one week (7 days). |
| `PageUp / PageDown` | Navigates to previous / next month. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `Date \| null` | `null` | Currently selected date object. |
| `onChange` | `(date: Date) => void` | `undefined` | Selection callback. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Manages selected Date objects and active month offsets.

```tsx
import { useControllableState } from '@spectra/primitives';

export function CalendarPrimitive() {
  const [date, setDate] = useControllableState({ defaultValue: new Date() });
  return <div role="grid">{/* days */}</div>;
}
```

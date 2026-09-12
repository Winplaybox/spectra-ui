# Progress Bar

Horizontal determinate or indeterminate animated bar communicating background process completion.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { ProgressBar } from '@spectra/react';

export default function BasicProgressBarExample() {
  return (
    <ProgressBar>
      Progress Bar Example
    </ProgressBar>
  );
}
```

## Guidelines

Use determinate progress bars when the remaining percentage is known, and indeterminate pulsating bars when duration is unpredictable.

### Recommended (Dos)

- Set role="progressbar", aria-valuenow, aria-valuemin, and aria-valuemax.
- Show numerical percentage text alongside the progress track.

### Avoid (Don'ts)

- Never leave a progress bar frozen at 99% indefinitely.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Track` | Background baseline representing 100% capacity. |
| `Indicator Bar` | Animated colored fill displaying completion. |

## Motion & Transitions

- **Duration**: `--motion-normal (200ms)`
- **Easing Curve**: `ease-in-out`
- **Specification**: Fill bar width animates smoothly between progress updates.

## Keyboard Navigation & ARIA

Official pattern: [Progressbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/progressbar/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `number` | `0` | Completion percentage (0 to 100). |
| `indeterminate` | `boolean` | `false` | Continuous loading wave animation. |
| `color` | `'primary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Fill bar token color. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Extracts action color variables for the progress fill bar.

```tsx
import { useTheme } from '@spectra/primitives';

export function ProgressBarPrimitive({ value }) {
  return <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} />;
}
```

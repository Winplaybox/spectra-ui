# Slider

Allows users to make selections from a continuous or discrete range of numeric values along a horizontal track.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Slider } from '@spectra/react';

export default function BasicSliderExample() {
  return (
    <Slider>
      Slider Example
    </Slider>
  );
}
```

## Guidelines

Use sliders for continuous adjustments (volume, brightness, price budget) where immediate visual preview is more valuable than exact numerical typing.

### Recommended (Dos)

- Bind aria-valuenow, aria-valuemin, and aria-valuemax to the slider thumb element.
- Provide tick marks and snap points for discrete numerical thresholds.

### Avoid (Don'ts)

- Do not use sliders for critical precise numeric entry without a companion text input.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Track` | Background baseline representing the entire value range. |
| `Progress Bar` | Colored active fill from minimum to current thumb. |
| `Thumb` | Draggable handle element with role="slider". |
| `Value Label` | Contextual floating tooltip displaying live numeric value. |

## Motion & Transitions

- **Duration**: `--motion-fast (80ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Thumb scale expands on hover and drag interaction.

## Keyboard Navigation & ARIA

Official pattern: [Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `ArrowRight / ArrowUp` | Increments slider value by one step. |
| `ArrowLeft / ArrowDown` | Decrements slider value by one step. |
| `PageUp / PageDown` | Increments / decrements by large step (10x). |
| `Home / End` | Sets value to minimum / maximum bound. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `min` | `number` | `0` | Minimum scale bound. |
| `max` | `number` | `100` | Maximum scale bound. |
| `step` | `number` | `1` | Granular step increment. |
| `value` | `number` | `50` | Current numeric value. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Manages continuous numeric range values with min/max clamps.

```tsx
import { useControllableState } from '@spectra/primitives';

export function SliderPrimitive({ min = 0, max = 100, defaultValue = 50 }) {
  const [val, setVal] = useControllableState({ defaultValue });
  return <div role="slider" aria-valuenow={val} aria-valuemin={min} aria-valuemax={max} />;
}
```

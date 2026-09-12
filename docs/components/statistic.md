# Statistic

Prominent numerical display for KPI metric dashboards, comparison delta percentages, and trend arrows.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Statistic } from '@spectra/react';

export default function BasicStatisticExample() {
  return (
    <Statistic>
      Statistic Example
    </Statistic>
  );
}
```

## Guidelines

Use statistic cards at the top of analytics views to provide immediate executive summaries of vital business metrics.

### Recommended (Dos)

- Pair large numbers with a descriptive subtitle and time period context.
- Use green/red trend indicators to highlight positive/negative deltas.

### Avoid (Don'ts)

- Do not display naked numbers without units or context.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Title` | Small uppercase metric label. |
| `Value` | Large high-contrast numerical figure. |
| `Delta Badge` | Percentage change relative to past period. |

## Motion & Transitions

- **Duration**: `--motion-normal (300ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Numerical counter animation counts up from zero on load.

## Keyboard Navigation & ARIA

Official pattern: [Status / Metric Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |


## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `''` | Metric description. |
| `value` | `string \| number` | `0` | Primary numerical statistic. |
| `delta` | `string` | `''` | Percentage change indicator. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Provides typography scale tokens for headline numerical font.

```tsx
import { useTheme } from '@spectra/primitives';

export function StatisticCard({ title, value }) {
  return <div><span>{title}</span><h2>{value}</h2></div>;
}
```

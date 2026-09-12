# Timeline

Chronological event stream with connecting vertical vectors, status icons, and timestamp metadata.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Timeline } from '@spectra/react';

export default function BasicTimelineExample() {
  return (
    <Timeline>
      Timeline Example
    </Timeline>
  );
}
```

## Guidelines

Use timelines to visualize audit logs, deployment pipelines, and order fulfillment stages.

### Recommended (Dos)

- Present events in consistent chronological or reverse-chronological order.
- Use icon glyphs to convey event status (completed, in-progress, pending).

### Avoid (Don'ts)

- Do not omit timestamps or relative date indications.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Timeline Container` | Ordered list (<ol>) representing sequence. |
| `Connecting Line` | Vertical rule linking consecutive items. |
| `Node Dot / Icon` | Status badge marker. |
| `Content Block` | Event title, description, and timestamp. |

## Motion & Transitions

- **Duration**: `--motion-normal (250ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Connecting line animates downwards as new events arrive.

## Keyboard Navigation & ARIA

Official pattern: [Ordered List Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/list/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Cycles focus through interactive links and event buttons. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `TimelineItem[]` | `[]` | Array of timeline event records. |
| `align` | `'left' \| 'right' \| 'alternate'` | `'left'` | Layout alignment. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Supplies connector stroke and status color tokens.

```tsx
import { useTheme } from '@spectra/primitives';

export function TimelinePrimitive({ events }) {
  return <ol className="timeline">{/* items */}</ol>;
}
```

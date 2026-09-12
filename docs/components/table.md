# Table

Accessible tabular data display supporting zebra striping, sticky headers, and responsive horizontal scrolling.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Table } from '@spectra/react';

export default function BasicTableExample() {
  return (
    <Table>
      Table Example
    </Table>
  );
}
```

## Guidelines

Use tables for dense, structured datasets where users need to compare rows and scan across multiple attribute columns.

### Recommended (Dos)

- Use semantic <table>, <thead>, <tbody>, <tr>, <th>, and <td> elements.
- Provide scope="col" on column headers and scope="row" on row headers.

### Avoid (Don'ts)

- Do not use div-based pseudo-tables when semantic <table> is appropriate.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Table Wrapper` | Overflow container allowing horizontal scrolling on mobile. |
| `Table (<table)` | Semantic table element. |
| `Header Row (<thead>)` | Sticky or static header containing column titles. |
| `Body (<tbody>)` | Data rows with alternating zebra backgrounds. |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Row background highlight on pointer hover.

## Keyboard Navigation & ARIA

Official pattern: [Table Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Moves focus through interactive cell triggers in sequential order. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `striped` | `boolean` | `false` | Enables alternating zebra row backgrounds. |
| `hoverable` | `boolean` | `true` | Highlights rows on hover. |
| `compact` | `boolean` | `false` | Reduces padding for dense data display. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Applies token border colors and hover surface backgrounds.

```tsx
import { useTheme } from '@spectra/primitives';

export function CustomTable() {
  const { colorScheme } = useTheme();
  return <table className={colorScheme}>{/* rows */}</table>;
}
```

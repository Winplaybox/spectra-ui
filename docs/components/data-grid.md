# Data Grid

High-performance virtualized grid with column sorting, filtering, cell selection, and keyboard roaming.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { DataGrid } from '@spectra/react';

export default function BasicDataGridExample() {
  return (
    <DataGrid>
      Data Grid Example
    </DataGrid>
  );
}
```

## Guidelines

Use data grids for enterprise datasets exceeding 1,000 rows requiring spreadsheet-like keyboard navigation and inline editing.

### Recommended (Dos)

- Support arrow key roaming across cells with role="grid".
- Virtualize off-screen rows to preserve 60 FPS scrolling performance.

### Avoid (Don'ts)

- Do not render tens of thousands of unvirtualized DOM nodes.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Grid Root` | Container with role="grid". |
| `Column Headers` | Sortable headers with aria-sort attribute. |
| `Cell Nodes` | Interactive cell units with role="gridcell". |

## Motion & Transitions

- **Duration**: `--motion-instant (50ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Zero-latency cell selection border update.

## Keyboard Navigation & ARIA

Official pattern: [Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Arrow Keys` | Roams active cell focus in four directions. |
| `Enter / F2` | Enters inline cell editing mode. |
| `Escape` | Cancels inline edit and returns focus to cell. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `columns` | `ColumnDef[]` | `[]` | Column schema and render rules. |
| `rows` | `RowData[]` | `[]` | Dataset rows array. |
| `pagination` | `boolean` | `true` | Enables bottom pagination bar. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useListNavigation`
Description: Coordinates 2D arrow key roaming across columns and rows.

```tsx
import { useListNavigation } from '@spectra/primitives';

export function GridPrimitive() {
  return <div role="grid">{/* virtualized rows */}</div>;
}
```

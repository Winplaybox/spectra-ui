# Pagination

Controls for navigating across discrete pages of long tabular datasets or catalog listings.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Pagination } from '@spectra/react';

export default function BasicPaginationExample() {
  return (
    <Pagination>
      Pagination Example
    </Pagination>
  );
}
```

## Guidelines

Use pagination when datasets exceed 25 rows and infinite scrolling is inappropriate.

### Recommended (Dos)

- Mark the current page with aria-current="page".
- Provide Previous and Next button triggers with disabled bounds.

### Avoid (Don'ts)

- Do not show more than 7 page pills at once (use ellipsis truncation).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Nav Container` | Semantic <nav> with aria-label="Pagination". |
| `Page Buttons` | Pill triggers indicating page numbers. |
| `Previous / Next` | Directional navigation buttons. |

## Motion & Transitions

- **Duration**: `--motion-fast (100ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Pill background slides to newly selected page.

## Keyboard Navigation & ARIA

Official pattern: [Navigation Landmark with Pagination](https://www.w3.org/WAI/ARIA/apg/patterns/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | Navigates to the selected page. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `count` | `number` | `1` | Total number of pages. |
| `page` | `number` | `1` | Active 1-indexed page. |
| `onChange` | `(page: number) => void` | `undefined` | Page change callback. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Manages active page index and ellipsis truncation logic.

```tsx
import { useControllableState } from '@spectra/primitives';

export function PaginationPrimitive({ count, defaultValue = 1, onChange }) {
  const [page, setPage] = useControllableState({ defaultValue, onChange });
  return <nav aria-label="Pagination">{/* pills */}</nav>;
}
```

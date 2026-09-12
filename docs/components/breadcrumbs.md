# Breadcrumbs

A hierarchical navigation trail displaying the user current position within an application hierarchy and enabling one-click navigation up levels.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Breadcrumbs } from '@spectra/react';

export default function BasicBreadcrumbsExample() {
  return (
    <Breadcrumbs>
      Breadcrumbs Example
    </Breadcrumbs>
  );
}
```

## Guidelines

Place breadcrumbs at the top of the main content area, below the header. The final item represents the current page and should not be a link.

### Recommended (Dos)

- Use a <nav aria-label="Breadcrumbs"> element with an ordered list (<ol>).
- Set aria-current="page" on the current location item.
- Use consistent separators like "/" or chevron icons.

### Avoid (Don'ts)

- Do not include the current page as an active clickable link.
- Do not replace top-level navigation with breadcrumbs.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Nav Container` | Semantic <nav> element with aria-label="Breadcrumbs". |
| `List (<ol>)` | Ordered list of navigation steps. |
| `Link / Item` | Clickable anchor or text for ancestor levels. |
| `Separator` | Aria-hidden delimiter separating consecutive crumbs. |
| `Current Item` | Span with aria-current="page". |

## Motion & Transitions

- **Duration**: `none`
- **Easing Curve**: `none`
- **Specification**: Static semantic navigation trail.

## Keyboard Navigation & ARIA

Official pattern: [Breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Tab` | Cycles forward through ancestor links in sequential order. |
| `Enter` | Navigates to the focused ancestor level. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `BreadcrumbItem[]` | `[]` | Array of items with label, href, onClick, isCurrent. |
| `separator` | `ReactNode` | `'/'` | Custom delimiter element between crumbs. |
| `maxItems` | `number` | `8` | Maximum visible crumbs before truncating with ellipsis. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useTheme`
Description: Provides theme styling tokens for breadcrumb links and separators.

```tsx
import { useTheme } from '@spectra/primitives';

export function CustomBreadcrumbs({ items }) {
  const { colorScheme } = useTheme();
  return <nav aria-label="Breadcrumb" className={colorScheme}>{/* items */}</nav>;
}
```

# Link

Semantic hypertext anchor with token-driven hover states, external link indicator vectors, and focus rings.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Link } from '@spectra/react';

export default function BasicLinkExample() {
  return (
    <Link>
      Link Example
    </Link>
  );
}
```

## Guidelines

Use links for navigating to different URLs or anchor locations on the page.

### Recommended (Dos)

- Render authentic <a> tags with valid href attributes.
- Show an external link icon when pointing to third-party domains.

### Avoid (Don'ts)

- Do not use link tags for actions that change state or perform deletions (use Button instead).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Anchor (<a>)` | Semantic link element. |
| `External Icon` | Optional vector indicator for external URLs. |

## Motion & Transitions

- **Duration**: `--motion-fast (100ms)`
- **Easing Curve**: `ease-out`
- **Specification**: Underline opacity and color transition on hover.

## Keyboard Navigation & ARIA

Official pattern: [Link Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/link/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter` | Navigates to link destination. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `href` | `string` | `''` | Destination URL. |
| `external` | `boolean` | `false` | Appends target="_blank" and external icon. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useFocusRing`
Description: Provides accessible focus ring styling for inline links.

```tsx
import { useFocusRing } from '@spectra/primitives';

export function CustomLink(props) {
  const { isFocusVisible, focusProps } = useFocusRing();
  return <a {...focusProps} href={props.href} className={isFocusVisible ? 'focus-ring' : ''} />;
}
```

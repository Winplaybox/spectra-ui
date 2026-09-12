# Compound Button

Compound buttons feature a prominent primary action label paired with a secondary descriptive subtitle to guide high-stakes decision points.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Compound Button } from '@spectra/react';

export default function BasicCompoundButtonExample() {
  return (
    <Compound Button>
      Compound Button Example
    </Compound Button>
  );
}
```

## Guidelines

Use compound buttons on onboarding cards, tier upgrades, and feature selectors where users benefit from secondary descriptive context before committing an action.

### Recommended (Dos)

- Pair a concise primary action verb with a descriptive subtitle sentence.
- Use leading 20px vector icons to reinforce the button role.
- Maintain consistent card width across stacked compound button groups.

### Avoid (Don'ts)

- Do not overload subtitles with more than two lines of text.
- Never omit accessible aria-label or accessible text children.
- Do not use compound buttons for routine table row actions.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Root (<button>)` | Accessible button container with hover and active elevation states. |
| `Icon Container` | Leading vector badge establishing visual distinction. |
| `Label` | Bold primary action title rendered in Inter SemiBold. |
| `Subtitle` | Secondary explanation copy rendered in Inter Regular. |

## Motion & Transitions

- **Duration**: `--motion-fast (150ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: Elevation shadow and subtle scale shift on hover.

## Keyboard Navigation & ARIA

Official pattern: [Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | Activates the compound button action. |
| `Tab` | Focuses the compound button in sequential tab order. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `''` | Primary action headline text. |
| `subtitle` | `string` | `''` | Descriptive context sentence. |
| `icon` | `ReactNode` | `undefined` | Leading icon vector node. |
| `variant` | `'primary' \| 'secondary' \| 'subtle'` | `'secondary'` | Visual surface styling variant. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useFocusRing`
Description: Applies visible keyboard focus ring without mouse click outline.

```tsx
import { useFocusRing } from '@spectra/primitives';

export function CustomCompoundButton(props) {
  const { isFocusVisible, focusProps } = useFocusRing();
  return <button {...focusProps} className={isFocusVisible ? 'focus-ring' : ''} />;
}
```

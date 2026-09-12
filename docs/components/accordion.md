# Accordion

An accordion groups sections of related content that can be opened and closed. Accordions decrease cognitive load by letting people choose which sections of content they see, like questions in an FAQ.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Accordion } from '@spectra/react';

export default function BasicAccordionExample() {
  return (
    <Accordion>
      Accordion Example
    </Accordion>
  );
}
```

## Guidelines

Use accordions when content is secondary or when progressive disclosure helps organize extensive text or FAQ answers. Never hide critical information required for the primary user task.

### Recommended (Dos)

- Use short, descriptive headers that clearly indicate what information lies inside each panel.
- Allow users to scan headers quickly without needing to open every section.
- Persist the state of the active panel in local storage or URL query parameters when helpful.

### Avoid (Don'ts)

- Do not hide critical form fields or primary checkout actions inside collapsed accordion panels.
- Avoid nesting an accordion inside another accordion (causes deep cognitive disorientation).
- Do not use accordions for single-sentence content that does not benefit from collapsing.

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `Root (<Accordion>)` | Container establishing context and managing multiple or single expansion mode. |
| `Item (<AccordionItem>)` | Wrapper grouping a single header and its associated panel. |
| `Header (<AccordionHeader>)` | Accessible button with aria-expanded and keyboard arrow/enter handlers. |
| `Chevron Indicator` | Visual 2D arrow icon rotating 90deg on expansion. |
| `Panel (<AccordionPanel>)` | Collapsible container with role="region" linked via aria-labelledby. |

## Motion & Transitions

- **Duration**: `--motion-subtle (150ms)`
- **Easing Curve**: `cubic-bezier(0, 0, 0.2, 1)`
- **Specification**: The chevron smoothly rotates 90 degrees and the panel expands smoothly with zero layout jank.

## Keyboard Navigation & ARIA

Official pattern: [Accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Enter / Space` | When focus is on the header, toggles the associated panel between expanded and collapsed. |
| `Tab` | Moves focus to the next interactive element in the tab order (next header or panel content). |
| `Shift + Tab` | Moves focus to the previous interactive element. |
| `Arrow Down` | Moves focus to the next accordion header. |
| `Arrow Up` | Moves focus to the previous accordion header. |
| `Home / End` | Jumps focus directly to the first or last accordion header. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `multiple` | `boolean` | `false` | Allows multiple accordion panels to be expanded simultaneously. |
| `value` | `string \| string[]` | `undefined` | Controlled expanded value(s). |
| `defaultValue` | `string \| string[]` | `[]` | Initially expanded value(s). |
| `onChange` | `(val: string \| string[]) => void` | `undefined` | Callback invoked when expansion state changes. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useDisclosure`
Description: Manages open/closed states with automatic ID linking between trigger and panel.

```tsx
import { useDisclosure } from '@spectra/primitives';

export function CustomAccordionItem({ title, children }) {
  const { isOpen, toggle, getTriggerProps, getPanelProps } = useDisclosure();
  return (
    <div>
      <button {...getTriggerProps()}>{title}</button>
      {isOpen && <div {...getPanelProps()}>{children}</div>}
    </div>
  );
}
```

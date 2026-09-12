# Tabs

Tabs organize content across different screens or data views, allowing users to switch between related panels within the same context.

```bash
npm install @spectra/react @spectra/icons
```

## Basic Usage

```tsx
import React from 'react';
import { Tabs } from '@spectra/react';

export default function BasicTabsExample() {
  return (
    <Tabs>
      Tabs Example
    </Tabs>
  );
}
```

## Guidelines

Use tabs to separate logically distinct content areas without navigating away from the current page.

### Recommended (Dos)

- Keep tab labels short and mutually exclusive.
- Support keyboard arrow navigation between tabs.

### Avoid (Don'ts)

- Do not use tabs for sequential multi-step wizards (use a Stepper instead).

## Anatomy & Slots

| Slot / Part | Semantic Role & Behavior |
| :--- | :--- |
| `TabList (<TabList>)` | Container with role="tablist" managing keyboard focus. |
| `Tab (<Tab>)` | Accessible button with role="tab" and aria-selected. |
| `TabPanels (<TabPanels>)` | Container holding panels. |
| `TabPanel (<TabPanel>)` | Content panel with role="tabpanel" linked via aria-labelledby. |

## Motion & Transitions

- **Duration**: `--motion-subtle (150ms)`
- **Easing Curve**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Specification**: Active tab indicator bar slides smoothly to the active tab.

## Keyboard Navigation & ARIA

Official pattern: [Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

| Key | Action & Focus Behavior |
| :--- | :--- |
| `Arrow Left / Right` | Navigates between horizontal tabs. |
| `Home / End` | Jumps directly to the first or last tab. |
| `Enter / Space` | Activates selected tab if manual selection mode is enabled. |

## API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'underline' \| 'pills'` | `'underline'` | Visual style of the tab list. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of tab items. |
| `value` | `string` | `undefined` | Controlled active tab ID. |
| `defaultValue` | `string` | `''` | Initial active tab ID. |

## Headless Primitive (`@spectra/primitives`)

Hook: `useControllableState`
Description: Synchronizes active tab state with keyboard focus management and ARIA bindings.

```tsx
import { useControllableState } from '@spectra/primitives';

export function CustomTabs({ value: cVal, defaultValue = '1', onChange }) {
  const [active, setActive] = useControllableState({ value: cVal, defaultValue, onChange });
  return <div role="tablist">...</div>;
}
```

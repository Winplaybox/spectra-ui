# @spectra/primitives

> Headless state hooks and unstyled behavioral primitives for the **Spectra UI** design system by **Winplaybox**.

[![npm version](https://img.shields.io/npm/v/@spectra/primitives.svg?style=flat-square&color=0969da)](https://www.npmjs.com/package/@spectra/primitives)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Repository](https://img.shields.io/badge/GitHub-Winplaybox%2Fspectra--ui-181717.svg?style=flat-square)](https://github.com/Winplaybox/spectra-ui)

---

## Overview

`@spectra/primitives` is the headless behavioral foundation of Spectra UI. It contains 25 zero-dependency, tree-shakeable React hooks and unstyled state machines that handle complex UI state, DOM interactions, accessibility bindings, and lifecycle logic. You can use these primitives directly to build completely custom components or as the engine powering your own design system.

---

## Spectra UI Ecosystem

| Package | Purpose | NPM Link |
| :--- | :--- | :--- |
| **`@spectra/react`** | Core web component library | [npmjs.com/package/@spectra/react](https://www.npmjs.com/package/@spectra/react) |
| **`@spectra/tokens`** | Multi-tier design tokens (CSS, TS, JSON) | [npmjs.com/package/@spectra/tokens](https://www.npmjs.com/package/@spectra/tokens) |
| **`@spectra/icons`** | 14,200+ vector SVG icons (multi-shade) | [npmjs.com/package/@spectra/icons](https://www.npmjs.com/package/@spectra/icons) |
| **`@spectra/primitives`** | 25 Headless hooks and behavioral state primitives | [npmjs.com/package/@spectra/primitives](https://www.npmjs.com/package/@spectra/primitives) |
| **`@spectra/react-native`** | Mobile components for iOS and Android | [npmjs.com/package/@spectra/react-native](https://www.npmjs.com/package/@spectra/react-native) |
| **`@spectra/mcp`** | Model Context Protocol server for AI coding assistants | [npmjs.com/package/@spectra/mcp](https://www.npmjs.com/package/@spectra/mcp) |

---

## Installation

```bash
# Using pnpm
pnpm add @spectra/primitives

# Using npm
npm install @spectra/primitives

# Using yarn
yarn add @spectra/primitives
```

---

## 25 Headless Hooks Catalog

### State & Disclosure
- `useDisclosure(initialState?)`: Manages boolean toggle state for modals, popovers, and accordions.
- `useControllableState({ value, defaultValue, onChange })`: Supports seamless controlled and uncontrolled component patterns.
- `useToggle(initialState?)`: Simple boolean toggling utility.
- `usePrevious(value)`: Tracks the previous value of a state or prop across renders.

### Theme & Environment
- `useTheme()`: Access and switch active color themes (`light` / `dark`).
- `useColorScheme()`: Detects system color scheme preference (`prefers-color-scheme`).
- `usePlatform()`: Returns active target environment (`web`, `ios`, `android`, `windows`, `macos`).
- `useReducedMotion()`: Detects accessibility reduced-motion system preferences.
- `useRTL()`: Detects document reading direction (LTR vs RTL).

### DOM & Interactions
- `useClickOutside(ref, handler)`: Dispatches callback when a click occurs outside target node.
- `useEventListener(eventName, handler, element?)`: Type-safe DOM event subscription with auto cleanup.
- `useIntersectionObserver(ref, options?)`: Monitors viewport visibility for lazy loading and animations.
- `useScrollLock(isLocked?)`: Disables background scrolling when modals or sheets are open.
- `useWindowSize()`: Reactive window dimensions tracker.
- `useMediaQuery(query)`: Reactive CSS media query evaluator.
- `useHover(ref)`: Tracks hover state of any DOM element.

### Async & Timing
- `useDebounce(value, delay)`: Debounces rapid value changes (e.g. search inputs).
- `useThrottle(value, limit)`: Throttles value updates.
- `useInterval(callback, delay)`: Declarative, safe `setInterval` wrapper.
- `useTimeout(callback, delay)`: Declarative, safe `setTimeout` wrapper.
- `useAsync(asyncFunction, immediate?)`: Tracks async operation status, errors, and results.
- `useFetch(url, options?)`: Declarative data fetching hook with cancellation support.

### Utilities & Storage
- `useLocalStorage(key, initialValue)`: Synchronized localStorage state with cross-tab events.
- `useClipboard({ timeout? })`: Copy text to clipboard with feedback state.
- `useToast()`: Manages dynamic toast notification queue.

---

## Code Examples

### 1. `useDisclosure`

```tsx
import React from 'react';
import { useDisclosure } from '@spectra/primitives';

export function Modal() {
  const { isOpen, open, close, toggle } = useDisclosure(false);

  return (
    <div>
      <button onClick={open}>Open Modal</button>
      {isOpen && (
        <div className="dialog-backdrop">
          <div className="dialog-content">
            <p>Modal content</p>
            <button onClick={close}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
```

### 2. `useControllableState`

```tsx
import React from 'react';
import { useControllableState } from '@spectra/primitives';

interface CustomInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
}

export function CustomInput({ value, defaultValue, onChange }: CustomInputProps) {
  const [val, setVal] = useControllableState({
    value,
    defaultValue: defaultValue || '',
    onChange,
  });

  return <input value={val} onChange={(e) => setVal(e.target.value)} />;
}
```

---

## License

MIT (c) 2026 [Winplaybox](https://github.com/Winplaybox).

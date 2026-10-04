# @winplaybox/react

> Production-ready, enterprise React component library for the **Spectra UI** design system by **Winplaybox**.

[![npm version](https://img.shields.io/npm/v/@winplaybox/react.svg?style=flat-square&color=0969da)](https://www.npmjs.com/package/@winplaybox/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Repository](https://img.shields.io/badge/GitHub-Winplaybox%2Fspectra--ui-181717.svg?style=flat-square)](https://github.com/Winplaybox/spectra-ui)

---

## Overview

`@winplaybox/react` provides 58 enterprise-grade React components built with type safety, zero-runtime CSS (via Vanilla Extract), and rigorous WAI-ARIA / WCAG 2.1 AA accessibility. Benchmarked against Google Material UI (MUI v5/v6), Microsoft Fluent UI 2 (v9), and Apple Human Interface Guidelines (HIG), it offers a cohesive and resilient foundation for mission-critical web applications.

---

## Spectra UI Ecosystem

| Package | Purpose | NPM Link |
| :--- | :--- | :--- |
| **`@winplaybox/react`** | Core web component library | [npmjs.com/package/@winplaybox/react](https://www.npmjs.com/package/@winplaybox/react) |
| **`@winplaybox/tokens`** | Multi-tier design tokens (CSS, TS, JSON) | [npmjs.com/package/@winplaybox/tokens](https://www.npmjs.com/package/@winplaybox/tokens) |
| **`@winplaybox/icons`** | 14,200+ vector SVG icons (multi-shade) | [npmjs.com/package/@winplaybox/icons](https://www.npmjs.com/package/@winplaybox/icons) |
| **`@winplaybox/primitives`** | 25 Headless hooks and behavioral state primitives | [npmjs.com/package/@winplaybox/primitives](https://www.npmjs.com/package/@winplaybox/primitives) |
| **`@winplaybox/react-native`** | Mobile components for iOS and Android | [npmjs.com/package/@winplaybox/react-native](https://www.npmjs.com/package/@winplaybox/react-native) |
| **`@winplaybox/mcp`** | Model Context Protocol server for AI coding assistants | [npmjs.com/package/@winplaybox/mcp](https://www.npmjs.com/package/@winplaybox/mcp) |

---

## Installation

```bash
# Using pnpm
pnpm add @winplaybox/react @winplaybox/tokens @winplaybox/icons

# Using npm
npm install @winplaybox/react @winplaybox/tokens @winplaybox/icons

# Using yarn
yarn add @winplaybox/react @winplaybox/tokens @winplaybox/icons
```

---

## Quick Start

### 1. Import Design Tokens

Include the Spectra UI stylesheet at your application root (e.g. `main.tsx` or `index.css`):

```css
@import '@winplaybox/tokens/tokens.css';
```

### 2. Wrap Application in `SpectraProvider`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SpectraProvider } from '@winplaybox/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpectraProvider defaultTheme="dark" platform="web">
      <App />
    </SpectraProvider>
  </React.StrictMode>
);
```

### 3. Consume Components

```tsx
import React, { useState } from 'react';
import {
  Button,
  Card,
  TextInput,
  Badge,
  Stack,
  Dialog,
  useDisclosure,
} from '@winplaybox/react';
import { SearchIcon, PlusIcon } from '@winplaybox/icons';

export function Dashboard() {
  const { isOpen, open, close } = useDisclosure();
  const [query, setQuery] = useState('');

  return (
    <Card variant="elevated" padding="large">
      <Stack direction="row" justify="space-between" align="center">
        <Stack direction="row" spacing="small" align="center">
          <h2>Enterprise Service Hub</h2>
          <Badge variant="brand" label="v0.1.0" />
        </Stack>
        <Button variant="primary" startIcon={<PlusIcon size={16} />} onClick={open}>
          Create Project
        </Button>
      </Stack>

      <TextInput
        placeholder="Filter resources..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        startIcon={<SearchIcon size={18} />}
        style={{ marginTop: 16 }}
      />

      <Dialog isOpen={isOpen} onClose={close} title="Create Project">
        <p>Configure project properties and deployment environment.</p>
        <Button variant="primary" onClick={close} style={{ marginTop: 16 }}>
          Confirm
        </Button>
      </Dialog>
    </Card>
  );
}
```

---

## Component Catalog (58 Components)

- **Actions**: `Button`, `IconButton`, `ButtonGroup`, `SplitButton`
- **Data Display**: `Avatar`, `AvatarGroup`, `Badge`, `Calendar`, `Chip`, `List`, `Statistic`, `Table`, `Tag`, `Timeline`, `TreeView`
- **Feedback**: `Alert`, `Drawer`, `ProgressBar`, `Skeleton`, `Spinner`, `Toast`
- **Form Controls**: `Autocomplete`, `Checkbox`, `CheckboxGroup`, `ColorPicker`, `Radio`, `Rating`, `Select`, `Slider`, `Switch`, `Textarea`, `TextInput`
- **Layout**: `Box`, `Container`, `Divider`, `Grid`, `Stack`, `Text`
- **Navigation**: `AppBar`, `Breadcrumbs`, `Link`, `Menu`, `Pagination`, `PlatformChassis`, `SpeedDial`, `Stepper`, `Tabs`
- **Overlay**: `Dialog`, `Popover`, `Tooltip`
- **Surfaces**: `Card`, `MediaCard`, `Paper`

---

## Accessibility Guarantees (WCAG 2.1 AA)

- **Keyboard Navigation**: Comprehensive tab-order trapping inside modals and dialogs.
- **WAI-ARIA Attributes**: Dynamic `aria-expanded`, `aria-controls`, `aria-selected`, and role bindings.
- **Screen Reader Support**: Tested with NVDA and VoiceOver screen readers.
- **Color Contrast**: Complies with WCAG 2.1 AA 4.5:1 minimum contrast ratio across both Light and Dark themes.

---

## Documentation & Live Workbench

- **Online Sandbox**: [https://github.com/Winplaybox/spectra-ui](https://github.com/Winplaybox/spectra-ui)
- **Local Dev Server**: Run `pnpm run dev` in the root repository to inspect interactive component playgrounds, variant matrices, and token scales.

---

## License

MIT (c) 2026 [Winplaybox](https://github.com/Winplaybox).

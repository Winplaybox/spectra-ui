# Spectra UI

> The Enterprise Design System and Multi-Platform Component Engine by **Winplaybox**.

[![npm version](https://img.shields.io/npm/v/@winplaybox/react.svg?style=flat-square&color=0969da)](https://www.npmjs.com/package/@winplaybox/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-ef4444.svg?style=flat-square)](https://turbo.build/repo)
[![Repository](https://img.shields.io/badge/GitHub-Winplaybox%2Fspectra--ui-181717.svg?style=flat-square)](https://github.com/Winplaybox/spectra-ui)

---

## Overview

**Spectra UI** is a production-grade, enterprise design system and cross-platform UI ecosystem engineered for high-performance applications. Built from the ground up to synthesize the rigorous standards of **Google Material UI (MUI v5/v6)**, **Microsoft Fluent UI 2 (v9)**, **Apple Human Interface Guidelines (HIG)**, and **Radix Primitives**, Spectra UI delivers a cohesive developer experience across Web, Mobile, and AI-assisted workflows.

---

## Ecosystem Packages

Spectra UI is architected as a modular monorepo. Each package can be installed independently or consumed together as a unified system:

| Package | Version | NPM Registry Link | Directory | Description |
| :--- | :---: | :--- | :--- | :--- |
| **`@winplaybox/react`** | `0.2.0` | [![npm](https://img.shields.io/npm/v/@winplaybox/react?style=flat-square)](https://www.npmjs.com/package/@winplaybox/react) | [`packages/react`](packages/react) | 62 production-ready web components with Vanilla Extract zero-runtime styling |
| **`@winplaybox/tokens`** | `0.2.0` | [![npm](https://img.shields.io/npm/v/@winplaybox/tokens?style=flat-square)](https://www.npmjs.com/package/@winplaybox/tokens) | [`packages/tokens`](packages/tokens) | Multi-tier design token engine compiling to CSS variables, TypeScript, and JSON |
| **`@winplaybox/icons`** | `0.2.0` | [![npm](https://img.shields.io/npm/v/@winplaybox/icons?style=flat-square)](https://www.npmjs.com/package/@winplaybox/icons) | [`packages/icons`](packages/icons) | 14,200+ accessible SVG vector icons across 7 distinct visual styles |
| **`@winplaybox/primitives`** | `0.2.0` | [![npm](https://img.shields.io/npm/v/@winplaybox/primitives?style=flat-square)](https://www.npmjs.com/package/@winplaybox/primitives) | [`packages/primitives`](packages/primitives) | 25 headless React state hooks and unstyled behavioral primitives |
| **`@winplaybox/react-native`** | `0.2.0` | [![npm](https://img.shields.io/npm/v/@winplaybox/react-native?style=flat-square)](https://www.npmjs.com/package/@winplaybox/react-native) | [`packages/react-native`](packages/react-native) | Cross-platform native components tailored for iOS and Android |
| **`@winplaybox/mcp`** | `0.2.0` | [![npm](https://img.shields.io/npm/v/@winplaybox/mcp?style=flat-square)](https://www.npmjs.com/package/@winplaybox/mcp) | [`packages/mcp`](packages/mcp) | Model Context Protocol server enabling Cursor, Claude, and Antigravity IDE integration |

---

## Architectural Principles

1. **Single Source of Truth**: All semantic colors, spacing scales, typography metrics, and elevation curves originate in `@winplaybox/tokens` and flow deterministically into web, native, and AI tools.
2. **Zero Emoji Policy**: In accordance with the system charter, Spectra UI exclusively renders authentic SVG vector glyphs from `@winplaybox/icons`. No casual emojis are permitted across components, notices, or documentation.
3. **Platform Isolation**: Clean separation between Web (`@winplaybox/react`) and Mobile (`@winplaybox/react-native`), allowing developers to consume platform-specific contracts without cross-platform bundle bloat.
4. **Accessibility First (WCAG 2.1 AA)**: Complete WAI-ARIA compliance, automatic focus traps, contrast verification, and full keyboard navigation across all overlay and form components.
5. **Zero-Runtime CSS**: Type-safe CSS generated ahead of time via Vanilla Extract, ensuring predictable performance without CSS-in-JS runtime overhead.

---

## Installation & Quick Start

### 1. Web Applications (React)

```bash
# Using pnpm (recommended)
pnpm add @winplaybox/react @winplaybox/tokens @winplaybox/icons

# Using npm
npm install @winplaybox/react @winplaybox/tokens @winplaybox/icons

# Using yarn
yarn add @winplaybox/react @winplaybox/tokens @winplaybox/icons
```

Import tokens in your root stylesheet or entry file:

```css
/* styles.css or index.css */
@import '@winplaybox/tokens/tokens.css';
```

Use components inside your React application:

```tsx
import React from 'react';
import { SpectraProvider, Button, Card, TextInput, Badge } from '@winplaybox/react';
import { SearchIcon } from '@winplaybox/icons';

export function App() {
  return (
    <SpectraProvider defaultTheme="dark">
      <Card variant="elevated" padding="large">
        <Badge variant="brand" label="Production Ready" />
        <h2>Welcome to Spectra UI</h2>
        <TextInput
          placeholder="Search components..."
          startIcon={<SearchIcon size={18} />}
        />
        <Button variant="primary" size="medium">
          Get Started
        </Button>
      </Card>
    </SpectraProvider>
  );
}
```

---

### 2. Mobile Applications (React Native)

```bash
pnpm add @winplaybox/react-native @winplaybox/tokens @winplaybox/primitives
```

```tsx
import React from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from '@winplaybox/react-native';

export function MobileScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card variant="elevated">
        <Text variant="title">Mobile Native Chassis</Text>
        <Button title="Confirm Action" variant="primary" />
      </Card>
    </View>
  );
}
```

---

### 3. AI Assistant Integration (MCP Server)

Connect Spectra UI directly to Cursor, Claude Desktop, or Antigravity IDE:

```bash
npx @winplaybox/mcp
```

Add to your IDE's `mcp.json`:

```json
{
  "mcpServers": {
    "spectra-ui": {
      "command": "npx",
      "args": ["-y", "@winplaybox/mcp"]
    }
  }
}
```

Now your AI assistant can inspect exact props, tokens, verified recipes, and icons directly from the design system.

---

## Component Catalog (58 Web Components)

The `@winplaybox/react` library provides 58 enterprise components organized into 8 functional categories:

- **Actions**: `Button`, `IconButton`, `ButtonGroup`, `SplitButton`
- **Data Display**: `Avatar`, `AvatarGroup`, `Badge`, `Calendar`, `Chip`, `List`, `Statistic`, `Table`, `Tag`, `Timeline`, `TreeView`
- **Feedback**: `Alert`, `Drawer`, `ProgressBar`, `Skeleton`, `Spinner`, `Toast`
- **Form**: `Autocomplete`, `Checkbox`, `CheckboxGroup`, `ColorPicker`, `Radio`, `Rating`, `Select`, `Slider`, `Switch`, `Textarea`, `TextInput`
- **Layout**: `Box`, `Container`, `Divider`, `Grid`, `Stack`, `Text`
- **Navigation**: `AppBar`, `Breadcrumbs`, `Link`, `Menu`, `Pagination`, `PlatformChassis`, `SpeedDial`, `Stepper`, `Tabs`
- **Overlay**: `Dialog`, `Popover`, `Tooltip`
- **Surfaces**: `Card`, `MediaCard`, `Paper`

---

## Headless Hooks Catalog (25 Primitives)

Available via `@winplaybox/primitives` (or exported via `@winplaybox/react`):

- **State & Disclosure**: `useDisclosure`, `useControllableState`, `useToggle`, `usePrevious`
- **Environment & Theme**: `useTheme`, `useColorScheme`, `usePlatform`, `useReducedMotion`, `useRTL`
- **DOM & Sizing**: `useClickOutside`, `useEventListener`, `useIntersectionObserver`, `useScrollLock`, `useWindowSize`, `useMediaQuery`
- **Performance & Async**: `useDebounce`, `useThrottle`, `useInterval`, `useTimeout`, `useAsync`, `useFetch`
- **Storage & Input**: `useLocalStorage`, `useClipboard`, `useHover`, `useToast`

---

## Monorepo Development

Spectra UI uses [Turborepo](https://turbo.build/repo) and [pnpm workspaces](https://pnpm.io/workspaces) for build orchestration:

```bash
# Install workspace dependencies
pnpm install

# Build tokens and all packages
pnpm run build

# Start interactive documentation sandbox
pnpm run dev

# Run Storybook component workbench
pnpm run storybook

# Verify release readiness across all packages
pnpm run release:check

# Generate distribution tarballs (.tgz)
pnpm run pack:packages
```

---

## Publishing to NPM

All packages are configured with public access, ESM exports, type declarations, and package metadata:

```bash
# 1. Verify release readiness
pnpm run release:check

# 2. Build design tokens and compile all packages
pnpm run build

# 3. Publish all workspace packages to the public npm registry
pnpm -r publish --access public
```

---

## License

Spectra UI is an open-source design system released under the [MIT License](LICENSE).  
Copyright (c) 2026 [Winplaybox](https://github.com/Winplaybox).

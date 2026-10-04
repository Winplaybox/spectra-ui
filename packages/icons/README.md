# @spectra/icons

> Accessible, tree-shakeable, multi-shade vector icon library for the **Spectra UI** design system by **Winplaybox**.

[![npm version](https://img.shields.io/npm/v/@spectra/icons.svg?style=flat-square&color=0969da)](https://www.npmjs.com/package/@spectra/icons)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Repository](https://img.shields.io/badge/GitHub-Winplaybox%2Fspectra--ui-181717.svg?style=flat-square)](https://github.com/Winplaybox/spectra-ui)

---

## Overview

`@spectra/icons` provides over 14,200+ accessible SVG vector glyphs across 7 distinct visual styles. Built specifically for Spectra UI, every icon automatically respects the active Light and Dark theme modes using `currentColor`, provides strict centered alignment guarantees, and supports subpath imports for maximum tree-shaking performance.

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
pnpm add @spectra/icons

# Using npm
npm install @spectra/icons

# Using yarn
yarn add @spectra/icons
```

---

## Quick Start

Import any icon directly by component name:

```tsx
import React from 'react';
import { CheckIcon, FilledHomeIcon, OutlinedSearchIcon } from '@spectra/icons';

export const IconDemo = () => {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <CheckIcon size={16} />
      <FilledHomeIcon size={24} color="var(--color-action-primary)" />
      <OutlinedSearchIcon size={20} />
    </div>
  );
};
```

---

## Multi-Shade Variants

Every core icon concept is available across 5 official design shades:

| Style Variant | Primary Import | Suffix Alias |
| :--- | :--- | :--- |
| **Filled** | `<FilledHomeIcon />` | `<HomeFilledIcon />` |
| **Outlined** | `<OutlinedHomeIcon />` | `<HomeOutlinedIcon />` |
| **Rounded** | `<RoundedHomeIcon />` | `<HomeRoundedIcon />` |
| **Sharp** | `<SharpHomeIcon />` | `<HomeSharpIcon />` |
| **Two-Tone** | `<TwoToneHomeIcon />` | `<HomeTwoToneIcon />` |

---

## Subpath Imports (Optimized Bundling)

To minimize compile times and bundle size, import directly from style subpaths:

```tsx
// Direct subpath imports
import { HomeIcon, SearchIcon } from '@spectra/icons/filled';
import { UserIcon, SettingsIcon } from '@spectra/icons/outlined';
import { GithubIcon, TwitterIcon } from '@spectra/icons/social';
```

---

## Dynamic Lazy Loading with `<DynamicIcon />`

For dashboards or menus where icons are configured dynamically from a database or CMS:

```tsx
import React from 'react';
import { DynamicIcon } from '@spectra/icons';

export function NavigationItem({ iconName, label }: { iconName: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <DynamicIcon name={iconName} size={20} fallback={<span>...</span>} />
      <span>{label}</span>
    </div>
  );
}
```

---

## Icon Props

All icons accept standard SVG attributes along with customized Spectra properties:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number \| string` | `24` | Width and height in pixels |
| `color` | `string` | `'currentColor'` | SVG fill or stroke color |
| `className` | `string` | `undefined` | Custom CSS class |
| `aria-label` | `string` | `undefined` | Accessible label for screen readers |
| `aria-hidden` | `boolean` | `true` | Hides decorative icons from screen readers |

---

## License

MIT (c) 2026 [Winplaybox](https://github.com/Winplaybox).

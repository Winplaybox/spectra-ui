# @winplaybox/tokens

> Multi-tier design token engine for the **Spectra UI** design system by **Winplaybox**.

[![npm version](https://img.shields.io/npm/v/@winplaybox/tokens.svg?style=flat-square&color=0969da)](https://www.npmjs.com/package/@winplaybox/tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Repository](https://img.shields.io/badge/GitHub-Winplaybox%2Fspectra--ui-181717.svg?style=flat-square)](https://github.com/Winplaybox/spectra-ui)

---

## Overview

`@winplaybox/tokens` is the single source of truth for all visual values across the Spectra UI ecosystem. Using a multi-tier token architecture (Primitives -> Semantic -> Theme Modes -> Brand Packs), it deterministically compiles into standard CSS variables, type-safe TypeScript definitions, and JSON contracts for consumption across Web, React Native, and design tools.

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
pnpm add @winplaybox/tokens

# Using npm
npm install @winplaybox/tokens

# Using yarn
yarn add @winplaybox/tokens
```

---

## Usage

### 1. In CSS / Vanilla Extract

Import the compiled tokens stylesheet into your application root:

```css
@import '@winplaybox/tokens/tokens.css';

.my-card {
  background-color: var(--color-background-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-medium);
  padding: var(--spacing-medium);
  box-shadow: var(--shadow-elevation-1);
}
```

### 2. In TypeScript / JavaScript

```typescript
import { tokens } from '@winplaybox/tokens';

const primaryColor = tokens.color.action.primary;
const baseSpacing = tokens.spacing.medium;
const defaultRadius = tokens.radius.medium;
```

### 3. In JSON / Style Dictionary

```typescript
import tokensJson from '@winplaybox/tokens/json';

console.log(tokensJson.color.action.primary.value);
```

---

## Token Architecture

Spectra UI adheres to a strict 4-tier token hierarchy:

1. **Primitives**: Raw palette values (`blue-500`, `gray-900`, `radii-4`, `space-16`).
2. **Semantic**: Intent-driven variables (`--color-action-primary`, `--color-background-canvas`, `--color-text-muted`).
3. **Themes**: Mode-specific token overrides (`[data-theme="light"]`, `[data-theme="dark"]`).
4. **Brand Packs**: Specialized brand palettes (e.g. Winplaybox Signature Crimson).

---

## Token Categories

- **Color Tokens**:
  - `action`: `primary`, `hover`, `active`, `disabled`
  - `background`: `canvas`, `surface`, `elevated`, `backdrop`
  - `text`: `primary`, `secondary`, `muted`, `inverse`
  - `border`: `subtle`, `default`, `focused`, `contrast`
  - `status`: `success`, `warning`, `danger`, `info`
- **Spacing Scale**: `none` (0px), `xxsmall` (2px), `xsmall` (4px), `small` (8px), `medium` (16px), `large` (24px), `xlarge` (32px), `xxlarge` (48px)
- **Border Radii**: `none` (0px), `small` (4px), `medium` (8px), `large` (12px), `full` (9999px)
- **Shadow Elevations**: `elevation-0`, `elevation-1`, `elevation-2`, `elevation-3`, `elevation-4`
- **Motion & Transitions**:
  - `duration`: `fast` (150ms), `normal` (250ms), `slow` (400ms)
  - `easing`: `easeInOut`, `easeOut`, `bounce`

---

## License

MIT (c) 2026 [Winplaybox](https://github.com/Winplaybox).

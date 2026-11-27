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

### 4. OVD base theme (Web and Expo)

The opt-in `base` pack comes from [anydownloader's OVD theme](https://github.com/Winplaybox/anydownloader/blob/main/src/index.css). Existing apps keep `minimal`. On web, load `@winplaybox/tokens/css` and use `<SpectraProvider defaultPack="base">`, or set both `data-pack="base"` and `data-mode="light"` (or `"dark"`) on the themed element. For raw token strings, use `getTokens('dark', 'base')`.

In Expo, install `@winplaybox/tokens` and use React Native's color scheme to select the mode. No CSS or Spectra provider is needed:

```tsx
import { getNativeTheme } from '@winplaybox/tokens';
import { Text, View, useColorScheme } from 'react-native';

export function Screen() {
  const theme = getNativeTheme(useColorScheme() === 'dark' ? 'dark' : 'light', 'base');

  return (
    <View style={{ backgroundColor: theme.colors.canvas, padding: theme.spacing.padding.md }}>
      <View style={{ backgroundColor: theme.colors.surface, borderRadius: theme.radii.md }}>
        <Text style={{ ...theme.typography.paragraph, color: theme.colors.text }}>Home</Text>
      </View>
    </View>
  );
}
```

Register Instrument Sans and Bricolage Grotesque with [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/) under the family names returned by `theme.typography`, including the weights your app uses. Omit `fontFamily` until fonts are available to use the system font. Use `theme.shadows.raised.boxShadow` (or `overlay.boxShadow`) on supported React Native New Architecture targets, or spread the separate `ios`/`android` style for a fallback. Motion durations are in milliseconds; honor the device's reduced-motion preference. Existing Spectra React Native components still use `minimal`; apply the returned values to your own styles.

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

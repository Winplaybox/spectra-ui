# @winplaybox/react-native

> Cross-platform mobile components and primitives for the **Spectra UI** design system by **Winplaybox**.

[![npm version](https://img.shields.io/npm/v/@winplaybox/react-native.svg?style=flat-square&color=0969da)](https://www.npmjs.com/package/@winplaybox/react-native)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Repository](https://img.shields.io/badge/GitHub-Winplaybox%2Fspectra--ui-181717.svg?style=flat-square)](https://github.com/Winplaybox/spectra-ui)

---

## Overview

`@winplaybox/react-native` brings the design language and token discipline of Spectra UI to iOS and Android applications. Engineered without heavy web DOM dependencies, it provides native components adhering to Apple Human Interface Guidelines (HIG) and Android Material standards while maintaining full visual parity with `@winplaybox/react`.

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
pnpm add @winplaybox/react-native @winplaybox/tokens @winplaybox/primitives

# Using npm
npm install @winplaybox/react-native @winplaybox/tokens @winplaybox/primitives

# Using yarn
yarn add @winplaybox/react-native @winplaybox/tokens @winplaybox/primitives
```

---

## Quick Start

```tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Text,
  Badge,
  TextInput,
  Stack,
} from '@winplaybox/react-native';

export function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Card variant="elevated">
        <Stack direction="row" justify="space-between" align="center">
          <Text variant="title">User Profile</Text>
          <Badge label="Verified" variant="brand" />
        </Stack>

        <TextInput
          placeholder="Display name"
          style={{ marginTop: 12 }}
        />

        <Button
          title="Save Changes"
          variant="primary"
          onPress={() => console.log('Saved!')}
          style={{ marginTop: 16 }}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
```

---

## Mobile Component Catalog

- **Actions**: `Button`
- **Data Display**: `Accordion`, `Avatar`, `Chip`, `List`, `Badge`
- **Feedback**: `Alert`, `Skeleton`, `Spinner`
- **Form Controls**: `Checkbox`, `Radio`, `Select`, `Switch`, `TextInput`
- **Layout**: `Container`, `Divider`, `Stack`, `Text`
- **Navigation**: `Breadcrumbs`, `Tabs`
- **Overlay**: `Dialog`, `Tooltip`
- **Surfaces**: `Card`

---

## Platform Chassis & Safe Area

All layout primitives in `@winplaybox/react-native` are tested against notch insets, dynamic islands, and system navigation bars across iOS and Android runtimes.

---

## License

MIT (c) 2026 [Winplaybox](https://github.com/Winplaybox).

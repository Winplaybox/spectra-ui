# @spectra/react-native

> Cross-platform mobile components and primitives for the **Spectra UI** design system by **Winplaybox**.

[![npm version](https://img.shields.io/npm/v/@spectra/react-native.svg?style=flat-square&color=0969da)](https://www.npmjs.com/package/@spectra/react-native)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Repository](https://img.shields.io/badge/GitHub-Winplaybox%2Fspectra--ui-181717.svg?style=flat-square)](https://github.com/Winplaybox/spectra-ui)

---

## Overview

`@spectra/react-native` brings the design language and token discipline of Spectra UI to iOS and Android applications. Engineered without heavy web DOM dependencies, it provides native components adhering to Apple Human Interface Guidelines (HIG) and Android Material standards while maintaining full visual parity with `@spectra/react`.

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
pnpm add @spectra/react-native @spectra/tokens @spectra/primitives

# Using npm
npm install @spectra/react-native @spectra/tokens @spectra/primitives

# Using yarn
yarn add @spectra/react-native @spectra/tokens @spectra/primitives
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
} from '@spectra/react-native';

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

All layout primitives in `@spectra/react-native` are tested against notch insets, dynamic islands, and system navigation bars across iOS and Android runtimes.

---

## License

MIT (c) 2026 [Winplaybox](https://github.com/Winplaybox).

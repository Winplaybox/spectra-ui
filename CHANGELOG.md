# Changelog

All notable changes to the **Spectra UI** monorepo are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-10-06

### Features & Architecture
- **Universal Multi-Platform Clipboard System**:
  - Implemented `Clipboard` static utility and `useClipboard` hook in `@winplaybox/primitives` supporting Modern Web (`navigator.clipboard`), Legacy Web fallback (`execCommand`), Bare React Native, Expo, and custom pluggable adapters.
  - Added `<CopyButton>` component to `@winplaybox/react` and `@winplaybox/react-native` with authentic SVG feedback icons (`CopyIcon` to `CheckIcon`).
- **First-Class React Native Layout & Interaction Primitives**:
  - Added token-aware native primitives to `@winplaybox/react-native`: `Box`, `Grid`, `ScrollView`, `Pressable`, `Image`, and `Icon`.
  - Purged anti-pattern raw React Native and third-party re-exports (`View`, `Image`, `TouchableOpacity`, `AsyncStorage`, `@expo/vector-icons`).
- **MCP Server Synchronized Registry (`@winplaybox/mcp`)**:
  - Synchronized registry pipeline covering all 62 components, 29 hooks, 56 color tokens, and curated vector icons.
  - Added `build: "node scripts/build-data.mjs"` and integrated with Turbo build pipeline.
- **Design System Guidelines & Compliance**:
  - Enforced Zero Emoji Policy and SVG vector alignment across all packages.
  - Upgraded sandbox documentation dashboard with release history and isolated platform architectures.

---

## [0.1.0] - Initial Release

### Features & Architecture
- **20 Multi-Platform Components**:
  - **Actions & Navigation**: `Button`, `Breadcrumbs`, `Tabs` (with Underline and Pills variants).
  - **Inputs & Form**: `TextInput`, `Select`, `Checkbox`, `Radio`, `Switch`.
  - **Feedback & Status**: `Alert`, `Badge`, `Skeleton`, `Spinner`, `Tooltip`.
  - **Surfaces & Layout**: `Card`, `Container`, `Divider`, `Stack`, `Text`.
  - **Data Display & Overlay**: `Accordion`, `Avatar`, `Chip`, `Dialog`, `List`.
- **Cross-Platform Parity**:
  - High-performance web components (`@winplaybox/react`) styled with zero-runtime Vanilla Extract.
  - Native mobile components (`@winplaybox/react-native`) running on iOS & Android with React Native StyleSheet.
  - Headless primitives (`@winplaybox/primitives`) managing state, ARIA roles, and keyboard navigation.
- **Design Tokens Engine (`@winplaybox/tokens`)**:
  - Unified token contract with 100% 1:1 parity between semantic definitions, minimal pack, and light/dark modes.
  - Strict Rule #0 enforcement: 0 hardcoded hex colors across all component source files.
- **Icon Suite (`@winplaybox/icons`)**:
  - Over 12,000 Material Symbols across Outlined, Filled, Rounded, Sharp, and TwoTone variants.
  - 20 canonical, authentic 24x24 vector SVGs for global social and brand platforms.
- **Algolia Agentic Search**:
  - 249 indexed records covering CSS rules, component APIs, tokens, hooks, and guidelines on Algolia App `777PLTTOXX`.
  - Interactive Search Palette with instant keyboard navigation (`⌘K` / `Ctrl+K`), token previews, and deep linking.
- **Interactive Documentation Sandbox**:
  - Live in-place editable code powered by Sucrase with instant real-time compilation.
  - Mobile Simulator with realistic iOS device frame.
  - Full API reference tables, guidelines, and keyboard/ARIA specifications.
- **Model Context Protocol (`@winplaybox/mcp`)**:
  - Native MCP server ready for AI agents in Cursor, Claude Desktop, and Antigravity IDE.
- **NPM Package Publishing Configuration**:
  - Dual CJS/ESM exports, `.d.ts` TypeScript types, and `publishConfig: { access: "public" }` across all packages.

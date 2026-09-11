# Changelog

All notable changes to the **Spectra UI** monorepo are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - Initial Release (In Development)

### Features & Architecture
- **20 Multi-Platform Components**:
  - **Actions & Navigation**: `Button`, `Breadcrumbs`, `Tabs` (with Underline and Pills variants).
  - **Inputs & Form**: `TextInput`, `Select`, `Checkbox`, `Radio`, `Switch`.
  - **Feedback & Status**: `Alert`, `Badge`, `Skeleton`, `Spinner`, `Tooltip`.
  - **Surfaces & Layout**: `Card`, `Container`, `Divider`, `Stack`, `Text`.
  - **Data Display & Overlay**: `Accordion`, `Avatar`, `Chip`, `Dialog`, `List`.
- **Cross-Platform Parity**:
  - High-performance web components (`@spectra/react`) styled with zero-runtime Vanilla Extract.
  - Native mobile components (`@spectra/react-native`) running on iOS & Android with React Native StyleSheet.
  - Headless primitives (`@spectra/primitives`) managing state, ARIA roles, and keyboard navigation.
- **Design Tokens Engine (`@spectra/tokens`)**:
  - Unified token contract with 100% 1:1 parity between semantic definitions, minimal pack, and light/dark modes.
  - Strict Rule #0 enforcement: 0 hardcoded hex colors across all component source files.
- **Icon Suite (`@spectra/icons`)**:
  - Over 12,000 Material Symbols across Outlined, Filled, Rounded, Sharp, and TwoTone variants.
  - 20 canonical, authentic 24x24 vector SVGs for global social and brand platforms.
- **Algolia Agentic Search**:
  - 249 indexed records covering CSS rules, component APIs, tokens, hooks, and guidelines on Algolia App `777PLTTOXX`.
  - Interactive Search Palette with instant keyboard navigation (`⌘K` / `Ctrl+K`), token previews, and deep linking.
- **Interactive Documentation Sandbox**:
  - Live in-place editable code powered by Sucrase with instant real-time compilation.
  - Mobile Simulator with realistic iOS device frame.
  - Full API reference tables, guidelines, and keyboard/ARIA specifications.
- **Model Context Protocol (`@spectra/mcp`)**:
  - Native MCP server ready for AI agents in Cursor, Claude Desktop, and Antigravity IDE.
- **NPM Package Publishing Configuration**:
  - Dual CJS/ESM exports, `.d.ts` TypeScript types, and `publishConfig: { access: "public" }` across all packages.

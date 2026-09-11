# Changelog

All notable changes to the **Spectra UI** monorepo are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.2.0] - 2026-09-11

### Added
- **6 New Multi-Platform Components**:
  - **`Alert`**: Prominent feedback banners supporting 4 semantic status variants (`info`, `success`, `warning`, `danger`), dismissible actions, and custom status icons.
  - **`Spinner`**: Circular rotating progress indicator across `sm` (16px), `md` (24px), and `lg` (36px) with inline button loading support.
  - **`Skeleton`**: Animated placeholders with continuous shimmer gradient waves for text lines, circular avatars, and rectangular hero surfaces.
  - **`Divider`**: Visual separators supporting horizontal and vertical orientations, dashed/dotted borders, and centered text label insets.
  - **`Chip`**: Interactive pill badges with filled and outlined styles, selectable multi-filter sets, and dismissible tag buttons.
  - **`Breadcrumbs`**: Hierarchical navigation trails with custom chevron/arrow separators and automatic maxItems collapsing.
- **Mobile Native Parity (`@spectra/react-native`)**:
  - Full React Native implementations for `Alert`, `Spinner`, `Skeleton`, `Divider`, `Chip`, and `Breadcrumbs` running on iOS and Android.
- **Algolia Agentic Search Database**:
  - Indexed 175 comprehensive records covering all CSS class rules (`.spectra-button--primary`, `.spectra-alert--danger`, etc.), component props, design tokens, hooks, and guidelines.
  - Upgraded Search Palette with 2-column curated navigation grid, categorized sections with `#` icons, active blue outline (`#007FFF`), and official Algolia branding.
- **Live In-Place Editable Code Editor**:
  - Real-time in-place code editing benchmarked against MUI and Fluent 2 with instant Sucrase TypeScript compilation and error handling.
- **MUI Version Release System**:
  - Version switcher in top navigation bar (`v0.2.0` / `v0.1.0`).
  - Component release badges (`v0.1.0` / `New in v0.2.0`).
  - Version-pinned GitHub source links.
- **NPM Package Publishing Pipeline**:
  - Configured `@spectra/react`, `@spectra/react-native`, `@spectra/primitives`, `@spectra/tokens`, `@spectra/icons`, and `@spectra/mcp` with `"publishConfig": { "access": "public" }`, dual CJS/ESM exports, and `.d.ts` declarations.

---

## [0.1.0] - 2026-08-15

### Added
- Initial release of the WinPlayBox Spectra UI Design System.
- 14 Core UI Components: `Button`, `TextInput`, `Select`, `Checkbox`, `Radio`, `Switch`, `Accordion`, `Avatar`, `Badge`, `Card`, `Tabs`, `Dialog`, `Tooltip`, `List`.
- Design tokens system: colors, typography, spacing, radii, shadows, and motion curves.
- Icon catalog featuring 12,253 Material Symbols across curated, filled, outlined, rounded, sharp, and twotone styles.
- Model Context Protocol (MCP) server for Cursor, Claude Desktop, and Antigravity IDE integration.

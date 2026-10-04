# @winplaybox/mcp

> Model Context Protocol (MCP) server for the **Spectra UI** design system by **Winplaybox**.

[![npm version](https://img.shields.io/npm/v/@winplaybox/mcp.svg?style=flat-square&color=0969da)](https://www.npmjs.com/package/@winplaybox/mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Repository](https://img.shields.io/badge/GitHub-Winplaybox%2Fspectra--ui-181717.svg?style=flat-square)](https://github.com/Winplaybox/spectra-ui)

---

## Overview

The **Spectra UI MCP Server** implements the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) to connect the Spectra UI Design System directly to AI coding assistants including **Cursor**, **Claude Desktop**, and **Antigravity IDE**.

It provides AI agents with grounded, real-time access to components, props, design tokens, icons, and code recipes—**eliminating hallucinations** and ensuring AI-generated code strictly adheres to design system contracts.

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

## Available MCP Tools

| MCP Tool | Description |
| :--- | :--- |
| `spectra_search_components` | Search components by keyword, category, or UI requirement. |
| `spectra_get_component_api` | Retrieve exact TypeScript props, types, defaults, CSS classes, design tokens, and mobile native props. |
| `spectra_search_tokens` | Query light/dark semantic color tokens, spacing scale, and motion easing curves. |
| `spectra_get_recipe` | Retrieve verified, runnable JSX/TSX implementation recipes (e.g. password field, modal dialog). |
| `spectra_search_icons` | Search across 14,200+ vector SVG icons and authentic social brand marks. |
| `spectra_search_hooks` | Inspect headless functional state hooks (`useDisclosure`, `useColorScheme`, `useId`, etc.). |
| `spectra_search_algolia` | Perform sub-10ms semantic vector queries against the Algolia `spectra_ui_docs` index. |

---

## Configuration

### 1. Cursor IDE Configuration

Add the following to your Cursor MCP configuration (`~/.cursor/mcp.json` or Project `.cursor/mcp.json`):

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

### 2. Claude Desktop Configuration

Add the following to your `claude_desktop_config.json`:

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

### 3. Antigravity IDE Configuration

Add to your `.gemini/antigravity-ide/mcp_config.json`:

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

---

## Running Locally / Testing

You can run the MCP server directly in stdio mode:

```bash
# Start MCP server directly
pnpm --filter @winplaybox/mcp start

# Run automated MCP test suite
node packages/mcp/scripts/test-mcp.js
```

---

## License

MIT (c) 2026 [Winplaybox](https://github.com/Winplaybox).

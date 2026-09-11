# Spectra UI Design System MCP Server (`@spectra/mcp`)

The **Spectra UI MCP Server** implements the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) to connect the Spectra UI Design System directly to AI coding assistants like **Cursor**, **Claude Desktop**, and **Antigravity IDE**.

It provides AI agents with grounded, real-time access to components, props, design tokens, icons, and code recipes—**eliminating hallucinations** and ensuring AI-generated code strictly adheres to your design system.

---

## Features & Tools

| MCP Tool | Description |
| :--- | :--- |
| `spectra_search_components` | Search components by keyword, category, or UI requirement. |
| `spectra_get_component_api` | Retrieve exact TypeScript props, types, defaults, CSS classes, design tokens, and mobile native props. |
| `spectra_search_tokens` | Query light/dark semantic color tokens, spacing scale, and motion easing curves. |
| `spectra_get_recipe` | Retrieve verified, runnable JSX/TSX implementation recipes (e.g. password field, modal dialog). |
| `spectra_search_icons` | Search across 12,253 vector SVG icons and authentic social brand marks. |
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
      "command": "node",
      "args": [
        "c:/Users/sagar/Desktop/Project/spectra-ui/packages/mcp/src/index.js"
      ]
    }
  }
}
```

### 2. Claude Desktop Configuration

Add the following to your `claude_desktop_config.json` (`%APPDATA%\\Claude\\claude_desktop_config.json` on Windows or `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "spectra-ui": {
      "command": "node",
      "args": [
        "c:/Users/sagar/Desktop/Project/spectra-ui/packages/mcp/src/index.js"
      ]
    }
  }
}
```

### 3. Antigravity IDE Configuration

Add to your `.gemini/antigravity-ide/mcp_config.json` or workspace configuration:

```json
{
  "mcpServers": {
    "spectra-ui": {
      "command": "node",
      "args": [
        "${workspaceFolder}/packages/mcp/src/index.js"
      ]
    }
  }
}
```

---

## Running Locally / Testing

You can run the MCP server in standard I/O mode:

```bash
# Start MCP server directly
pnpm --filter @spectra/mcp start

# Run automated MCP test suite
node packages/mcp/scripts/test-mcp.js
```

---

## Algolia Index Synchronization

To refresh the Algolia documentation and design system index:

```bash
pnpm run index:algolia
```

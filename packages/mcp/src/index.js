#!/usr/bin/env node

/**
 * Spectra UI Design System - Model Context Protocol (MCP) Server
 * Compatible with Cursor, Claude Desktop, Antigravity IDE, and external AI agents.
 */

import readline from 'readline';
import { COMPONENTS, HOOKS, TOKENS, ICONS } from './data.js';

const ALGOLIA_APP_ID = '777PLTTOXX';
const ALGOLIA_SEARCH_KEY = '9b0347744440efd1b8ed3ba4b058055d';
const ALGOLIA_INDEX = 'spectra_ui_docs';

const SERVER_NAME = 'spectra-ui-mcp';
const SERVER_VERSION = '0.1.0';

// Tools Definitions
const TOOLS = [
  {
    name: 'spectra_search_components',
    description: 'Search Spectra UI components by keyword, category, or UI requirement.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search term or intent (e.g. "button", "input", "dropdown", "modal")' },
        category: { type: 'string', description: 'Filter by category (Actions, Inputs, Feedback, Surfaces, Navigation, Data Display)' }
      },
      required: ['query']
    }
  },
  {
    name: 'spectra_get_component_api',
    description: 'Retrieve full API reference (props, types, defaults, CSS classes, design tokens, native props) for a Spectra component.',
    inputSchema: {
      type: 'object',
      properties: {
        component: { type: 'string', description: 'Component name or ID (e.g. "button", "text-input", "dialog", "card")' }
      },
      required: ['component']
    }
  },
  {
    name: 'spectra_search_tokens',
    description: 'Look up Spectra UI design tokens (colors, spacing, typography, motion curves) with light/dark values and CSS variable names.',
    inputSchema: {
      type: 'object',
      properties: {
        category: { type: 'string', enum: ['colors', 'spacing', 'motion'], description: 'Token category' },
        search: { type: 'string', description: 'Search term (e.g. "surface", "primary", "danger", "sunken")' },
        theme: { type: 'string', enum: ['light', 'dark'], description: 'Filter color by theme mode' }
      }
    }
  },
  {
    name: 'spectra_get_recipe',
    description: 'Retrieve verified, runnable JSX/TSX implementation recipes (e.g. password toggle, accessible modal, danger button).',
    inputSchema: {
      type: 'object',
      properties: {
        component: { type: 'string', description: 'Component name (e.g. "text-input", "dialog", "button")' },
        recipe: { type: 'string', description: 'Specific recipe title or pattern' }
      },
      required: ['component']
    }
  },
  {
    name: 'spectra_search_icons',
    description: 'Search across 12,253 vector icons and authentic social brand marks from @spectra/icons.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Icon name or concept (e.g. "search", "eye", "close", "chevron", "github")' }
      },
      required: ['query']
    }
  },
  {
    name: 'spectra_search_hooks',
    description: 'Look up functional headless state hooks, signatures, return values, and accessibility ARIA bindings.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Hook name or intent (e.g. "disclosure", "outside-click", "color-scheme")' }
      },
      required: ['query']
    }
  },
  {
    name: 'spectra_search_algolia',
    description: 'Perform sub-10ms semantic search directly against the Algolia spectra_ui_docs index.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query for Algolia' },
        hitsPerPage: { type: 'number', description: 'Max hits to return (default 5)' }
      },
      required: ['query']
    }
  }
];

// Tool Executors
async function executeTool(name, args = {}) {
  switch (name) {
    case 'spectra_search_components': {
      const q = (args.query || '').toLowerCase();
      const cat = (args.category || '').toLowerCase();
      const matches = Object.values(COMPONENTS).filter((c) => {
        const matchesQuery = c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
        const matchesCat = !cat || c.category.toLowerCase() === cat;
        return matchesQuery && matchesCat;
      });
      return {
        results: matches.map((m) => ({
          name: m.name,
          category: m.category,
          import: m.importStatement,
          description: m.description,
          propsCount: m.props.length
        }))
      };
    }

    case 'spectra_get_component_api': {
      const compKey = (args.component || '').toLowerCase().replace(/^spectra-?/, '');
      const comp = COMPONENTS[compKey] || Object.values(COMPONENTS).find((c) => c.name.toLowerCase() === compKey);
      if (!comp) {
        return { error: `Component "${args.component}" not found. Available components: ${Object.keys(COMPONENTS).join(', ')}` };
      }
      return comp;
    }

    case 'spectra_search_tokens': {
      const cat = args.category || 'colors';
      const search = (args.search || '').toLowerCase();
      const theme = args.theme || 'dark';

      if (cat === 'colors') {
        const results = {};
        for (const [key, val] of Object.entries(TOKENS.colors)) {
          if (!search || key.toLowerCase().includes(search) || val.role.toLowerCase().includes(search)) {
            results[key] = {
              value: val[theme] || val.dark,
              theme,
              role: val.role
            };
          }
        }
        return results;
      }

      if (cat === 'spacing') return TOKENS.spacing;
      if (cat === 'motion') return TOKENS.motion;
      return TOKENS;
    }

    case 'spectra_get_recipe': {
      const compKey = (args.component || '').toLowerCase().replace(/^spectra-?/, '');
      const comp = COMPONENTS[compKey] || Object.values(COMPONENTS).find((c) => c.name.toLowerCase() === compKey);
      if (!comp) return { error: `Component "${args.component}" not found.` };
      return {
        component: comp.name,
        importStatement: comp.importStatement,
        recipes: comp.recipes || []
      };
    }

    case 'spectra_search_icons': {
      const q = (args.query || '').toLowerCase();
      const matches = ICONS.filter((icon) => icon.toLowerCase().includes(q));
      return {
        query: args.query,
        count: matches.length,
        icons: matches.map((name) => ({
          name,
          import: `import { ${name} } from '@spectra/icons';`
        }))
      };
    }

    case 'spectra_search_hooks': {
      const q = (args.query || '').toLowerCase();
      const matches = Object.entries(HOOKS).filter(([k, v]) => k.includes(q) || v.name.toLowerCase().includes(q) || v.description.toLowerCase().includes(q));
      return {
        hooks: matches.map(([id, hook]) => ({
          id,
          name: hook.name,
          import: `import { ${hook.name} } from '@spectra/react';`,
          signature: hook.signature,
          description: hook.description,
          returns: hook.returns,
          accessibility: hook.accessibility
        }))
      };
    }

    case 'spectra_search_algolia': {
      try {
        const res = await fetch(`https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${ALGOLIA_INDEX}/query`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Algolia-Application-Id': ALGOLIA_APP_ID,
            'X-Algolia-API-Key': ALGOLIA_SEARCH_KEY,
          },
          body: JSON.stringify({
            query: args.query,
            hitsPerPage: args.hitsPerPage || 5,
          }),
        });
        const data = await res.json();
        return {
          hits: (data.hits || []).map((h) => ({
            title: h.title,
            type: h.type,
            category: h.category,
            path: h.path,
            description: h.description
          })),
          nbHits: data.nbHits,
          processingTimeMS: data.processingTimeMS
        };
      } catch (err) {
        return { error: 'Algolia query failed: ' + err.message };
      }
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// JSON-RPC stdio Handler
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', async (line) => {
  if (!line.trim()) return;

  let request;
  try {
    request = JSON.parse(line);
  } catch (e) {
    sendResponse({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32700, message: 'Parse error' }
    });
    return;
  }

  const { id, method, params } = request;

  try {
    switch (method) {
      case 'initialize':
        sendResponse({
          jsonrpc: '2.0',
          id,
          result: {
            protocolVersion: '2024-11-05',
            serverInfo: {
              name: SERVER_NAME,
              version: SERVER_VERSION,
            },
            capabilities: {
              tools: {},
              resources: {},
              prompts: {},
            }
          }
        });
        break;

      case 'notifications/initialized':
        // Acknowledge notification (no response needed)
        break;

      case 'tools/list':
        sendResponse({
          jsonrpc: '2.0',
          id,
          result: { tools: TOOLS }
        });
        break;

      case 'tools/call': {
        const { name, arguments: toolArgs } = params;
        const result = await executeTool(name, toolArgs);
        sendResponse({
          jsonrpc: '2.0',
          id,
          result: {
            content: [
              {
                type: 'text',
                text: typeof result === 'string' ? result : JSON.stringify(result, null, 2)
              }
            ]
          }
        });
        break;
      }

      case 'resources/list':
        sendResponse({
          jsonrpc: '2.0',
          id,
          result: {
            resources: [
              {
                uri: 'spectra://tokens/colors',
                name: 'Spectra Semantic Colors',
                description: 'Light and Dark mode semantic tokens including sunken surface and primary colors',
                mimeType: 'application/json'
              },
              {
                uri: 'spectra://components/catalog',
                name: 'Spectra Components Catalog',
                description: 'Complete manifest of all 14 universal UI components',
                mimeType: 'application/json'
              }
            ]
          }
        });
        break;

      case 'resources/read': {
        const { uri } = params;
        let content = '';
        if (uri === 'spectra://tokens/colors') {
          content = JSON.stringify(TOKENS.colors, null, 2);
        } else if (uri === 'spectra://components/catalog') {
          content = JSON.stringify(Object.keys(COMPONENTS), null, 2);
        } else {
          sendResponse({
            jsonrpc: '2.0',
            id,
            error: { code: -32602, message: `Resource ${uri} not found` }
          });
          return;
        }

        sendResponse({
          jsonrpc: '2.0',
          id,
          result: {
            contents: [
              {
                uri,
                mimeType: 'application/json',
                text: content
              }
            ]
          }
        });
        break;
      }

      case 'prompts/list':
        sendResponse({
          jsonrpc: '2.0',
          id,
          result: {
            prompts: [
              {
                name: 'spectra-code-assistant',
                description: 'System prompt instructing AI coding assistants to write code strictly using Spectra UI tokens and components without hardcoded styling.',
              }
            ]
          }
        });
        break;

      case 'prompts/get':
        sendResponse({
          jsonrpc: '2.0',
          id,
          result: {
            description: 'Spectra UI Coding Standard Prompt',
            messages: [
              {
                role: 'user',
                content: {
                  type: 'text',
                  text: 'You are a frontend expert building an application using Spectra UI (@spectra/react, @spectra/tokens, @spectra/icons). Follow these strict rules:\n1. Never use raw color hex codes. Always use CSS tokens: var(--color-primary-default), var(--color-surface), var(--color-surface-sunken).\n2. Use @spectra/react components (<Button>, <TextInput>, <Dialog>, <Card>, <Checkbox>) instead of standard HTML equivalents.\n3. Use @spectra/icons for icons.\n4. Ensure full keyboard accessibility (a11y) and ARIA attributes.'
                }
              }
            ]
          }
        });
        break;

      default:
        sendResponse({
          jsonrpc: '2.0',
          id,
          error: { code: -32601, message: `Method ${method} not found` }
        });
    }
  } catch (err) {
    sendResponse({
      jsonrpc: '2.0',
      id,
      error: { code: -32603, message: err.message }
    });
  }
});

function sendResponse(msg) {
  process.stdout.write(JSON.stringify(msg) + '\n');
}

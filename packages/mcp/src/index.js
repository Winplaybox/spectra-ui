#!/usr/bin/env node

/**
 * Spectra UI Design System - Model Context Protocol (MCP) Server
 * Compatible with Cursor, Claude Desktop, Antigravity IDE, and external AI agents.
 */

import readline from 'readline';
import { COMPONENTS, HOOKS, TOKENS, ICONS, PLATFORMS, PLATFORM_CAPABILITIES, HOOKS_CAPABILITIES } from './data.js';

const ALGOLIA_APP_ID = '777PLTTOXX';
const ALGOLIA_SEARCH_KEY = '9b0347744440efd1b8ed3ba4b058055d';
const ALGOLIA_INDEX = 'spectra_ui_docs';

const SERVER_NAME = 'spectra-ui-mcp';
const SERVER_VERSION = '0.2.0';

// Tools Definitions
const TOOLS = [
  {
    name: 'spectra_get_platform_capabilities',
    description: 'Retrieve capability matrix, renderer specs, touch target standard, and feature support for a target platform (Web, Android, iOS, Windows, macOS) or for a specific component across all 5 platforms.',
    inputSchema: {
      type: 'object',
      properties: {
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Target operating system platform' },
        component: { type: 'string', description: 'Optional component name to inspect across all 5 platforms' }
      },
      required: ['platform']
    }
  },
  {
    name: 'spectra_get_component_for_platform',
    description: 'Retrieve platform-specific component contract, verified support level (native, adapted, partial, unsupported), implementation package, variants, recipes, states, accessibility guidelines, and platform-specific best practices. NEVER hallucinates unsupported capabilities.',
    inputSchema: {
      type: 'object',
      properties: {
        component: { type: 'string', description: 'Component name or ID (e.g. "TextInput", "Button", "CopyButton", "Dialog", "LiveIndicator")' },
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Target platform' }
      },
      required: ['component', 'platform']
    }
  },
  {
    name: 'spectra_get_recipes_for_platform',
    description: 'Retrieve verified, runnable recipes strictly filtered for the target platform. Only returns recipes supported on that platform; hides unsupported recipes and gives explicit guidance.',
    inputSchema: {
      type: 'object',
      properties: {
        component: { type: 'string', description: 'Component name or ID' },
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Target platform' }
      },
      required: ['component', 'platform']
    }
  },
  {
    name: 'spectra_get_hook_for_platform',
    description: 'Look up headless hook platform support, lifecycle behavior, native alternatives, and platform limitations (e.g., useHover on mobile touch vs desktop pointer, useMediaQuery on web vs useWindowDimensions on native).',
    inputSchema: {
      type: 'object',
      properties: {
        hook: { type: 'string', description: 'Hook name or ID (e.g. "useHover", "useMediaQuery", "useReducedMotion", "useFocusTrap", "useClipboard")' },
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Target platform' }
      },
      required: ['hook', 'platform']
    }
  },
  {
    name: 'spectra_get_supported_components',
    description: 'List all components genuinely supported on the specified platform. Adheres to Rule 18 & 34: unsupported components are completely omitted from platform results.',
    inputSchema: {
      type: 'object',
      properties: {
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Target platform' },
        category: { type: 'string', description: 'Optional category filter (Actions, Inputs, Feedback, Surfaces, Navigation, Data Display, Layout)' }
      },
      required: ['platform']
    }
  },
  {
    name: 'spectra_search_components',
    description: 'Search Spectra UI components by keyword, category, or UI requirement.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search term or intent (e.g. "button", "input", "dropdown", "modal")' },
        category: { type: 'string', description: 'Filter by category (Actions, Inputs, Feedback, Surfaces, Navigation, Data Display)' },
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Filter only components supported on this platform' }
      },
      required: ['query']
    }
  },
  {
    name: 'spectra_get_component_api',
    description: 'Retrieve full API reference (props, types, defaults, CSS classes, design tokens, native props) for a Spectra component with optional platform filtering.',
    inputSchema: {
      type: 'object',
      properties: {
        component: { type: 'string', description: 'Component name or ID (e.g. "button", "text-input", "dialog", "card")' },
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Target platform (filters props and import accordingly)' }
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
    description: 'Retrieve verified, runnable JSX/TSX implementation recipes with optional platform filtering.',
    inputSchema: {
      type: 'object',
      properties: {
        component: { type: 'string', description: 'Component name (e.g. "text-input", "dialog", "button")' },
        recipe: { type: 'string', description: 'Specific recipe title or pattern' },
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Target platform' }
      },
      required: ['component']
    }
  },
  {
    name: 'spectra_search_icons',
    description: 'Search across 12,253 vector icons and authentic social brand marks from @winplaybox/icons.',
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
    description: 'Look up functional headless state hooks, signatures, return values, and accessibility ARIA bindings with optional platform filtering.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Hook name or intent (e.g. "disclosure", "outside-click", "color-scheme")' },
        platform: { type: 'string', enum: ['web', 'android', 'ios', 'windows', 'macos'], description: 'Filter only hooks supported on this platform' }
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
    case 'getCapabilities':
    case 'spectra_get_platform_capabilities': {
      const platform = (args.platform || 'web').toLowerCase();
      const pDef = PLATFORMS[platform];
      if (!pDef) {
        return { error: `Platform "${args.platform}" not recognized. Valid: ${Object.keys(PLATFORMS).join(', ')}` };
      }

      if (args.component) {
        const compKey = args.component.toLowerCase().replace(/^spectra-?/, '').replace(/[\s_]+/g, '-');
        const comp = COMPONENTS[compKey] || Object.values(COMPONENTS).find((c) => c.name.toLowerCase() === compKey.replace(/-/g, ''));
        if (!comp) return { error: `Component "${args.component}" not found.` };
        return {
          component: comp.name,
          category: comp.category,
          platforms: comp.platforms || {}
        };
      }

      const supportedComps = Object.values(COMPONENTS).filter((c) => {
        const cCap = c.platforms?.[platform];
        return cCap && cCap.support !== 'unsupported';
      });

      return {
        platform: pDef.id,
        name: pDef.name,
        renderer: pDef.renderer,
        primaryParadigm: pDef.primaryParadigm,
        touchStandard: pDef.touchStandard,
        package: pDef.package,
        primitivesPackage: pDef.primitivesPackage,
        features: pDef.features,
        supportedComponentsCount: supportedComps.length,
        supportedComponents: supportedComps.map((c) => ({
          name: c.name,
          category: c.category,
          support: c.platforms[platform].support
        }))
      };
    }

    case 'getComponent':
    case 'spectra_get_component_for_platform': {
      const compKey = (args.component || '').toLowerCase().replace(/^spectra-?/, '').replace(/[\s_]+/g, '-');
      const comp = COMPONENTS[compKey] || Object.values(COMPONENTS).find((c) => c.name.toLowerCase() === compKey.replace(/-/g, ''));
      if (!comp) {
        return { error: `Component "${args.component}" not found in Spectra registry.` };
      }
      const platform = (args.platform || 'web').toLowerCase();
      const cap = comp.platforms?.[platform];
      if (!cap || cap.support === 'unsupported') {
        return {
          component: comp.name,
          platform,
          support: 'unsupported',
          message: `${comp.name} is NOT supported on ${platform}. As per Rule 1, 18, and 34, it must not be rendered or recommended.`,
          alternative: cap?.alternative || 'Consult Spectra platform capability matrix for supported alternatives.'
        };
      }

      return {
        component: comp.name,
        platform,
        support: cap.support,
        implementation: cap.implementation || (platform === 'web' ? '@winplaybox/react' : '@winplaybox/react-native'),
        importStatement: platform === 'web'
          ? `import { ${comp.name} } from '@winplaybox/react';`
          : `import { ${comp.name} } from '${cap.implementation || '@winplaybox/react-native'}';`,
        variants: cap.variants || ['default'],
        recipes: cap.recipes || (comp.recipes || []).map((r) => r.title),
        states: cap.states || (platform === 'web' ? ['default', 'hover', 'focus', 'disabled'] : ['default', 'pressed', 'disabled']),
        accessibility: cap.accessibility || [],
        unsupportedRecipes: cap.unsupportedRecipes || [],
        bestPractices: comp.bestPractices || { do: [], dont: [] },
        testStatus: cap.testStatus || 'verified'
      };
    }

    case 'getRecipes':
    case 'spectra_get_recipes_for_platform': {
      const compKey = (args.component || '').toLowerCase().replace(/^spectra-?/, '').replace(/[\s_]+/g, '-');
      const comp = COMPONENTS[compKey] || Object.values(COMPONENTS).find((c) => c.name.toLowerCase() === compKey.replace(/-/g, ''));
      if (!comp) return { error: `Component "${args.component}" not found.` };
      const platform = (args.platform || 'web').toLowerCase();
      const cap = comp.platforms?.[platform];

      if (cap && cap.support === 'unsupported') {
        return {
          component: comp.name,
          platform,
          support: 'unsupported',
          error: `${comp.name} is unsupported on ${platform}. Recipes cannot be provided for unsupported platforms.`,
          alternative: cap.alternative
        };
      }

      const unsupportedList = cap?.unsupportedRecipes || [];
      const recipes = (comp.recipes || []).filter((r) => {
        const isExcluded = unsupportedList.some((un) => r.title.toLowerCase().includes(un.toLowerCase()));
        if (isExcluded) return false;
        if (r.platforms) return r.platforms.includes(platform);
        return true;
      });

      return {
        component: comp.name,
        platform,
        support: cap?.support || 'native',
        implementation: cap?.implementation || (platform === 'web' ? '@winplaybox/react' : '@winplaybox/react-native'),
        recipesCount: recipes.length,
        recipes
      };
    }

    case 'getHook':
    case 'spectra_get_hook_for_platform': {
      const hookKey = (args.hook || '').toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      const hook = HOOKS[hookKey] || Object.values(HOOKS).find((h) => h.name.toLowerCase() === hookKey.replace(/-/g, ''));
      if (!hook) return { error: `Hook "${args.hook}" not found in Spectra registry.` };
      const platform = (args.platform || 'web').toLowerCase();
      const cap = hook.platforms?.[platform];

      if (!cap || cap.support === 'unsupported') {
        return {
          hook: hook.name,
          platform,
          support: 'unsupported',
          message: `${hook.name} is NOT supported on ${platform}.`,
          alternative: cap?.alternative || 'Use native platform gesture, lifecycle, or layout measurement APIs.',
          notes: cap?.notes || ''
        };
      }

      return {
        hook: hook.name,
        platform,
        support: cap.support,
        implementation: cap.implementation || (platform === 'web' ? '@winplaybox/primitives' : '@winplaybox/react-native'),
        importStatement: `import { ${hook.name} } from '${cap.implementation || (platform === 'web' ? '@winplaybox/primitives' : '@winplaybox/react-native')}';`,
        signature: hook.signature,
        notes: cap.notes || '',
        alternative: cap.alternative || null
      };
    }

    case 'getSupportedComponents':
    case 'spectra_get_supported_components': {
      const platform = (args.platform || 'web').toLowerCase();
      const pDef = PLATFORMS[platform];
      if (!pDef) {
        return { error: `Platform "${args.platform}" not recognized. Valid: ${Object.keys(PLATFORMS).join(', ')}` };
      }
      const cat = (args.category || '').toLowerCase();
      const matches = Object.values(COMPONENTS).filter((c) => {
        const cCap = c.platforms?.[platform];
        const isSupported = cCap && cCap.support !== 'unsupported';
        const matchesCat = !cat || c.category.toLowerCase() === cat;
        return isSupported && matchesCat;
      });

      return {
        platform: pDef.name,
        count: matches.length,
        components: matches.map((m) => ({
          name: m.name,
          category: m.category,
          support: m.platforms[platform].support,
          importStatement: platform === 'web' ? m.importStatement : m.nativeImport,
          description: m.description
        }))
      };
    }

    case 'spectra_search_components': {
      const q = (args.query || '').toLowerCase();
      const cat = (args.category || '').toLowerCase();
      const platform = args.platform ? args.platform.toLowerCase() : null;

      const matches = Object.values(COMPONENTS).filter((c) => {
        const matchesQuery = c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
        const matchesCat = !cat || c.category.toLowerCase() === cat;
        const matchesPlatform = !platform || (c.platforms?.[platform] && c.platforms[platform].support !== 'unsupported');
        return matchesQuery && matchesCat && matchesPlatform;
      });
      return {
        results: matches.map((m) => ({
          name: m.name,
          category: m.category,
          import: platform && platform !== 'web' ? m.nativeImport : m.importStatement,
          description: m.description,
          propsCount: m.props.length,
          platformSupport: platform ? m.platforms?.[platform]?.support : undefined
        }))
      };
    }

    case 'spectra_get_component_api': {
      const compKey = (args.component || '').toLowerCase().replace(/^spectra-?/, '').replace(/[\s_]+/g, '-');
      const comp = COMPONENTS[compKey] || Object.values(COMPONENTS).find((c) => c.name.toLowerCase() === compKey.replace(/-/g, ''));
      if (!comp) {
        return { error: `Component "${args.component}" not found. Available components: ${Object.keys(COMPONENTS).join(', ')}` };
      }
      if (args.platform) {
        const platform = args.platform.toLowerCase();
        const cap = comp.platforms?.[platform];
        if (!cap || cap.support === 'unsupported') {
          return {
            component: comp.name,
            platform,
            support: 'unsupported',
            error: `${comp.name} is unsupported on ${platform}.`,
            alternative: cap?.alternative || 'Consult Spectra platform capability matrix.'
          };
        }
        return {
          ...comp,
          activePlatform: platform,
          support: cap.support,
          importStatement: platform === 'web' ? comp.importStatement : comp.nativeImport,
          props: platform === 'web' ? comp.props : (comp.nativeProps?.length ? comp.nativeProps : comp.props),
          variants: cap.variants || ['default'],
          states: cap.states
        };
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
      const compKey = (args.component || '').toLowerCase().replace(/^spectra-?/, '').replace(/[\s_]+/g, '-');
      const comp = COMPONENTS[compKey] || Object.values(COMPONENTS).find((c) => c.name.toLowerCase() === compKey.replace(/-/g, ''));
      if (!comp) return { error: `Component "${args.component}" not found.` };
      const platform = args.platform ? args.platform.toLowerCase() : null;

      let recipes = comp.recipes || [];
      if (platform) {
        const cap = comp.platforms?.[platform];
        if (cap && cap.support === 'unsupported') {
          return {
            component: comp.name,
            platform,
            support: 'unsupported',
            error: `${comp.name} is unsupported on ${platform}.`
          };
        }
        const unsupportedList = cap?.unsupportedRecipes || [];
        recipes = recipes.filter((r) => !unsupportedList.some((un) => r.title.toLowerCase().includes(un.toLowerCase())));
      }

      return {
        component: comp.name,
        importStatement: platform && platform !== 'web' ? comp.nativeImport : comp.importStatement,
        recipes
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
          import: `import { ${name} } from '@winplaybox/icons';`
        }))
      };
    }

    case 'spectra_search_hooks': {
      const q = (args.query || '').toLowerCase();
      const platform = args.platform ? args.platform.toLowerCase() : null;
      const matches = Object.entries(HOOKS).filter(([k, v]) => {
        const matchesQuery = k.includes(q) || v.name.toLowerCase().includes(q) || v.description.toLowerCase().includes(q);
        const matchesPlatform = !platform || (v.platforms?.[platform] && v.platforms[platform].support !== 'unsupported');
        return matchesQuery && matchesPlatform;
      });
      return {
        hooks: matches.map(([id, hook]) => ({
          id,
          name: hook.name,
          import: platform && platform !== 'web' ? `import { ${hook.name} } from '@winplaybox/react-native';` : `import { ${hook.name} } from '@winplaybox/react';`,
          signature: hook.signature,
          description: hook.description,
          returns: hook.returns,
          accessibility: hook.accessibility,
          platformSupport: platform ? hook.platforms?.[platform]?.support : undefined
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
            description: 'Spectra UI Multi-Platform Design System Assistant Prompt',
            messages: [
              {
                role: 'user',
                content: {
                  type: 'text',
                  text: 'You are an elite multi-platform design system engineer building with Spectra UI across 5 targets: Web, Android, iOS, Windows, macOS.\n\nStrict Architectural Rules:\n1. Target Platform Isolation: Identify the target platform first. Use @winplaybox/react for Web, @winplaybox/react-native for Android and iOS, @winplaybox/react-native-windows for Windows, and @winplaybox/react-native-macos for macOS.\n2. No Platform Leakage: Never use web DOM APIs (document, window, querySelector) on native platforms. Use native layout (useWindowDimensions, Pressable, AccessibilityInfo).\n3. Platform Capability First: Never hallucinate unsupported features. If a component, recipe, or hook is unsupported on the target platform, hide it and provide the native alternative.\n4. Design Tokens: Always consume semantic tokens from @winplaybox/tokens. Never hardcode colors, spacing, or radii.\n5. Zero Emoji Policy: Always use authentic SVG vector icons from @winplaybox/icons with centered wrappers. Never use emojis.\n6. Baseline Mode: The official documentation and design system UX baseline is Light Mode.'
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

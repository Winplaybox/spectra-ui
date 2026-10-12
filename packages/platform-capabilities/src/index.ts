export * from './types';
export * from './platforms';
export * from './components';
export * from './hooks';

import {
  Platform,
  ComponentCapability,
  PlatformCapability,
  RecipeDefinition,
  PropDefinition,
  BestPractices,
  PlaygroundConfig,
  PlatformSupportMatrixRow,
  PlatformDefinition,
  HookCapability,
} from './types';
import { getComponentCapability, componentsCapabilities } from './components';
import { getHookCapability, hooksCapabilities } from './hooks';
import { getPlatformDefinition } from './platforms';

/**
 * Sanitize any string, title, or kebab-case ID to clean PascalCase.
 * Guaranteed to eliminate unwanted spaces in code generation.
 * e.g. "Copy Button" -> "CopyButton", "text-input" -> "TextInput"
 */
export function toPascalCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/[^a-zA-Z0-9\s-_]/g, '')
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Check if a component is supported on a given platform.
 * Web is the baseline platform.
 * Non-web platforms (Android, iOS, Windows, macOS) require explicit, verified capability declarations.
 * If a component has no registered capability on that platform, it is strictly unsupported.
 */
export function isPlatformSupported(componentId: string, platform: Platform): boolean {
  if (platform === 'web') return true;
  const comp = getComponentCapability(componentId);
  if (!comp) return false;
  const cap = comp.platforms[platform];
  return cap ? cap.support !== 'unsupported' : false;
}

/**
 * Get platform-specific capability for a component.
 */
export function getComponentPlatformCapability(
  componentId: string,
  platform: Platform
): PlatformCapability | undefined {
  const comp = getComponentCapability(componentId);
  return comp?.platforms[platform];
}

/**
 * Get recipes supported for a given platform.
 */
export function getRecipesForPlatform(
  componentId: string,
  platform: Platform
): RecipeDefinition[] {
  return getRecipes(componentId, platform);
}

/**
 * Get list of all components supported on a target platform.
 * Adheres strictly to Rule 18 & Rule 34: unsupported components are completely omitted.
 */
export function getSupportedComponents(platform: Platform): ComponentCapability[] {
  return getComponents(platform);
}

/**
 * Check if a component is verified (stable implementation + verified docs) on a target platform.
 */
export function isComponentVerified(componentId: string, platform: Platform): boolean {
  const comp = getComponentCapability(componentId);
  if (!comp) return false;
  const cap = comp.platforms[platform];
  if (!cap || cap.support === 'unsupported') return false;
  if (cap.implementationStatus && cap.implementationStatus !== 'stable') return false;
  if (cap.documentationStatus && cap.documentationStatus !== 'verified') return false;
  return true;
}

/**
 * Primary resolver: get all components genuinely supported on a platform.
 */
export function getComponents(platform: Platform): ComponentCapability[] {
  return Object.values(componentsCapabilities).filter((comp) => {
    const cap = comp.platforms[platform];
    return cap && cap.support !== 'unsupported';
  });
}

/**
 * Primary resolver: get verified production-ready components for a platform.
 * Enforces the dual status gate: implementationStatus === 'stable' && documentationStatus === 'verified'
 */
export function getVerifiedComponents(platform: Platform): ComponentCapability[] {
  return Object.values(componentsCapabilities).filter((comp) => {
    const cap = comp.platforms[platform];
    if (!cap || cap.support === 'unsupported') return false;
    if (cap.implementationStatus && cap.implementationStatus !== 'stable') return false;
    if (cap.documentationStatus && cap.documentationStatus !== 'verified') return false;
    return true;
  });
}

/**
 * Primary resolver: get a component capability, strictly filtered by platform if supplied.
 * If the component is unsupported on that platform, returns undefined.
 */
export function getComponent(
  componentId: string,
  platform?: Platform
): ComponentCapability | undefined {
  const comp = getComponentCapability(componentId);
  if (!comp) return undefined;
  if (platform) {
    const cap = comp.platforms[platform];
    if (!cap || cap.support === 'unsupported') {
      return undefined;
    }
  }
  return comp;
}

/**
 * Primary resolver: get verified visual variants supported on a target platform.
 */
export function getVariants(componentId: string, platform: Platform): string[] {
  const comp = getComponentCapability(componentId);
  if (!comp) return [];
  const cap = comp.platforms[platform];
  if (!cap || cap.support === 'unsupported') return [];
  return cap.variants || [];
}

/**
 * Primary resolver: get verified density sizes supported on a target platform.
 */
export function getSizes(componentId: string, platform: Platform): string[] {
  const comp = getComponentCapability(componentId);
  if (!comp) return [];
  const cap = comp.platforms[platform];
  if (!cap || cap.support === 'unsupported') return [];
  return cap.sizes || ['sm', 'md', 'lg'];
}

/**
 * Primary resolver: get verified interaction states supported on a target platform.
 */
export function getStates(componentId: string, platform: Platform): string[] {
  const comp = getComponentCapability(componentId);
  if (!comp) return [];
  const cap = comp.platforms[platform];
  if (!cap || cap.support === 'unsupported') return [];
  return cap.states || [];
}

/**
 * Primary resolver: get verified production recipes supported on a target platform.
 */
export function getRecipes(componentId: string, platform: Platform): RecipeDefinition[] {
  const comp = getComponentCapability(componentId);
  if (!comp || !comp.recipes) return [];
  const cap = comp.platforms[platform];
  if (!cap || cap.support === 'unsupported') return [];
  return comp.recipes.filter((r) => r.platforms.includes(platform));
}

/**
 * Primary resolver: get verified props supported on a target platform.
 */
export function getProps(componentId: string, platform: Platform): PropDefinition[] {
  const comp = getComponentCapability(componentId);
  if (!comp || !comp.props) return [];
  const cap = comp.platforms[platform];
  if (!cap || cap.support === 'unsupported') return [];
  return comp.props.filter((p) => p.platforms.includes(platform));
}

/**
 * Primary resolver: get all headless hooks genuinely supported on a target platform.
 * Unsupported browser-only hooks (e.g. useHover on mobile) are completely omitted.
 */
export function getHooks(platform: Platform): HookCapability[] {
  return Object.values(hooksCapabilities).filter((hook) => {
    const pCap = hook.platforms[platform];
    return pCap && pCap.support !== 'unsupported';
  });
}

/**
 * Alias for getHooks(platform).
 */
export function getSupportedHooks(platform: Platform): HookCapability[] {
  return getHooks(platform);
}

/**
 * Primary resolver: get a hook capability, strictly filtered by platform if supplied.
 * If the hook is unsupported on that platform, returns undefined.
 */
export function getHook(hookId: string, platform?: Platform): HookCapability | undefined {
  const hook = getHookCapability(hookId);
  if (!hook) return undefined;
  if (platform) {
    const pCap = hook.platforms[platform];
    if (!pCap || pCap.support === 'unsupported') {
      return undefined;
    }
  }
  return hook;
}

/**
 * Primary resolver: get functions supported on a target platform.
 */
export function getFunctions(platform: Platform): string[] {
  const base = ['createTheme', 'getTokens', 'resolveTokenValue'];
  if (platform === 'web') {
    return [...base, 'generateCssVariables', 'injectGlobalTokens'];
  }
  return [...base, 'createNativeStyleSheet', 'createDynamicValue'];
}

/**
 * Primary resolver: get utilities supported on a target platform.
 */
export function getUtilities(platform: Platform): string[] {
  const base = ['clamp', 'mergeRefs', 'formatNumber', 'cx'];
  if (platform === 'web') {
    return [...base, 'getScrollParent', 'isFocusVisible', 'copyToClipboard'];
  }
  return [...base, 'getHitSlop', 'getNativeElevation'];
}

/**
 * Primary resolver: get platform-specific accessibility standards and guidelines.
 */
export function getAccessibility(componentId: string, platform: Platform): string[] {
  const comp = getComponentCapability(componentId);
  if (!comp) return [];
  const cap = comp.platforms[platform];
  return cap?.accessibility || [];
}

/**
 * Primary resolver: get platform-specific best practices.
 */
export function getBestPractices(
  componentId: string,
  platform: Platform
): BestPractices {
  const comp = getComponentCapability(componentId);
  if (!comp || !comp.bestPractices) {
    return { do: [], dont: [] };
  }
  if ('do' in comp.bestPractices && Array.isArray(comp.bestPractices.do)) {
    return comp.bestPractices as BestPractices;
  }
  const byPlatform = comp.bestPractices as unknown as Record<Platform, BestPractices>;
  return byPlatform[platform] || { do: [], dont: [] };
}

/**
 * Primary resolver: get playground configuration strictly filtered for target platform.
 */
export function getPlayground(
  componentId: string,
  platform: Platform
): PlaygroundConfig | undefined {
  const comp = getComponent(componentId, platform);
  if (!comp) return undefined;

  const cap = comp.platforms[platform];
  const variants = cap.variants || [];
  const sizes = cap.sizes || ['sm', 'md', 'lg'];
  const states = cap.states || ['default', 'hover', 'focus', 'disabled'];
  const recipes = getRecipes(componentId, platform).map((r) => r.id);
  const props = getProps(componentId, platform);
  const pascal = toPascalCase(comp.name);

  const codeSnippet =
    platform === 'web'
      ? `<${pascal} variant="${variants[0] || 'default'}" size="${sizes[0] || 'md'}" />`
      : `<${pascal} variant="${variants[0] || 'default'}" />`;

  return {
    componentId,
    platform,
    defaultVariant: variants[0],
    supportedVariants: variants,
    supportedSizes: sizes,
    supportedStates: states,
    supportedRecipes: recipes,
    supportedProps: props,
    codeSnippet,
  };
}

/**
 * Primary resolver: get operating system and runtime definitions for target platform.
 */
export function getPlatformCapabilities(platform: Platform): PlatformDefinition {
  return getPlatformDefinition(platform);
}

/**
 * Primary resolver: build authoritative cross-platform support matrix for Architecture view.
 */
export function getPlatformSupportMatrix(): PlatformSupportMatrixRow[] {
  const rows: PlatformSupportMatrixRow[] = [];

  // 1. Components
  Object.values(componentsCapabilities).forEach((comp) => {
    rows.push({
      id: comp.id,
      name: comp.name,
      displayName: comp.displayName,
      category: comp.category,
      type: 'component',
      platforms: {
        web: {
          support: comp.platforms.web.support,
          testStatus: comp.platforms.web.testStatus,
          notes: comp.platforms.web.fallback,
        },
        android: {
          support: comp.platforms.android.support,
          testStatus: comp.platforms.android.testStatus,
          notes: comp.platforms.android.fallback,
        },
        ios: {
          support: comp.platforms.ios.support,
          testStatus: comp.platforms.ios.testStatus,
          notes: comp.platforms.ios.fallback,
        },
        windows: {
          support: comp.platforms.windows.support,
          testStatus: comp.platforms.windows.testStatus,
          notes: comp.platforms.windows.fallback,
        },
        macos: {
          support: comp.platforms.macos.support,
          testStatus: comp.platforms.macos.testStatus,
          notes: comp.platforms.macos.fallback,
        },
      },
    });
  });

  // 2. Hooks
  Object.values(hooksCapabilities).forEach((hook) => {
    rows.push({
      id: hook.id,
      name: hook.name,
      displayName: hook.name,
      category: hook.category,
      type: 'hook',
      platforms: {
        web: {
          support: hook.platforms.web.support,
          testStatus: hook.platforms.web.testStatus,
          notes: hook.platforms.web.alternative,
        },
        android: {
          support: hook.platforms.android.support,
          testStatus: hook.platforms.android.testStatus,
          notes: hook.platforms.android.alternative,
        },
        ios: {
          support: hook.platforms.ios.support,
          testStatus: hook.platforms.ios.testStatus,
          notes: hook.platforms.ios.alternative,
        },
        windows: {
          support: hook.platforms.windows.support,
          testStatus: hook.platforms.windows.testStatus,
          notes: hook.platforms.windows.alternative,
        },
        macos: {
          support: hook.platforms.macos.support,
          testStatus: hook.platforms.macos.testStatus,
          notes: hook.platforms.macos.alternative,
        },
      },
    });
  });

  return rows;
}

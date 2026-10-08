export * from './types';
export * from './platforms';
export * from './components';
export * from './hooks';

import { Platform, ComponentCapability, PlatformCapability, RecipeDefinition } from './types';
import { getComponentCapability, componentsCapabilities } from './components';

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
 */
export function isPlatformSupported(componentId: string, platform: Platform): boolean {
  const comp = getComponentCapability(componentId);
  if (!comp) return true; // Default fallback to available unless explicitly marked unsupported
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
  const comp = getComponentCapability(componentId);
  if (!comp || !comp.recipes) return [];
  return comp.recipes.filter((r) => r.platforms.includes(platform));
}

/**
 * Get list of all components supported on a target platform.
 */
export function getSupportedComponents(platform: Platform): ComponentCapability[] {
  return Object.values(componentsCapabilities).filter((comp) => {
    const cap = comp.platforms[platform];
    return cap && cap.support !== 'unsupported';
  });
}

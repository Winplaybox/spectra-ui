import React, { useState, useEffect } from 'react';
import { IconProps } from './types';
import { parseIconName, ResolvedIconMeta } from './registry';
import {
  CheckIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  SpinnerIcon,
  AlertCircleIcon,
  InfoIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
  SparklesIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  CopyIcon,
  ExternalLinkIcon,
} from './curated';

// Curated icons map for synchronous instant rendering (0ms delay)
const curatedMap: Record<string, React.FC<IconProps>> = {
  CheckIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  SpinnerIcon,
  AlertCircleIcon,
  InfoIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
  SparklesIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  CopyIcon,
  ExternalLinkIcon,
};

// Global in-memory cache of dynamically loaded icon components
const componentCache = new Map<string, React.FC<IconProps>>();

// Populate curated icons in componentCache
Object.entries(curatedMap).forEach(([name, comp]) => {
  componentCache.set(name, comp);
});

// Category loader registry for modular code-splitting
const loaders: Record<string, () => Promise<any>> = {
  // Social suite
  'social': () => import('./generated/social/index'),

  // Core (DesignCode) suite
  'core': () => import('./generated/core/index'),

  // Filled shade categories
  'filled:action': () => import('./generated/filled/action'),
  'filled:alert': () => import('./generated/filled/alert'),
  'filled:av': () => import('./generated/filled/av'),
  'filled:communication': () => import('./generated/filled/communication'),
  'filled:content': () => import('./generated/filled/content'),
  'filled:device': () => import('./generated/filled/device'),
  'filled:editor': () => import('./generated/filled/editor'),
  'filled:file': () => import('./generated/filled/file'),
  'filled:hardware': () => import('./generated/filled/hardware'),
  'filled:home': () => import('./generated/filled/home'),
  'filled:image': () => import('./generated/filled/image'),
  'filled:maps': () => import('./generated/filled/maps'),
  'filled:math': () => import('./generated/filled/math'),
  'filled:navigation': () => import('./generated/filled/navigation'),
  'filled:notification': () => import('./generated/filled/notification'),
  'filled:places': () => import('./generated/filled/places'),
  'filled:search': () => import('./generated/filled/search'),
  'filled:shopping': () => import('./generated/filled/shopping'),
  'filled:social': () => import('./generated/filled/social'),
  'filled:toggle': () => import('./generated/filled/toggle'),

  // Outlined shade categories
  'outlined:action': () => import('./generated/outlined/action'),
  'outlined:alert': () => import('./generated/outlined/alert'),
  'outlined:av': () => import('./generated/outlined/av'),
  'outlined:communication': () => import('./generated/outlined/communication'),
  'outlined:content': () => import('./generated/outlined/content'),
  'outlined:device': () => import('./generated/outlined/device'),
  'outlined:editor': () => import('./generated/outlined/editor'),
  'outlined:file': () => import('./generated/outlined/file'),
  'outlined:hardware': () => import('./generated/outlined/hardware'),
  'outlined:home': () => import('./generated/outlined/home'),
  'outlined:image': () => import('./generated/outlined/image'),
  'outlined:maps': () => import('./generated/outlined/maps'),
  'outlined:math': () => import('./generated/outlined/math'),
  'outlined:navigation': () => import('./generated/outlined/navigation'),
  'outlined:notification': () => import('./generated/outlined/notification'),
  'outlined:places': () => import('./generated/outlined/places'),
  'outlined:search': () => import('./generated/outlined/search'),
  'outlined:shopping': () => import('./generated/outlined/shopping'),
  'outlined:social': () => import('./generated/outlined/social'),
  'outlined:toggle': () => import('./generated/outlined/toggle'),

  // Rounded shade categories
  'rounded:action': () => import('./generated/rounded/action'),
  'rounded:alert': () => import('./generated/rounded/alert'),
  'rounded:av': () => import('./generated/rounded/av'),
  'rounded:communication': () => import('./generated/rounded/communication'),
  'rounded:content': () => import('./generated/rounded/content'),
  'rounded:device': () => import('./generated/rounded/device'),
  'rounded:editor': () => import('./generated/rounded/editor'),
  'rounded:file': () => import('./generated/rounded/file'),
  'rounded:hardware': () => import('./generated/rounded/hardware'),
  'rounded:home': () => import('./generated/rounded/home'),
  'rounded:image': () => import('./generated/rounded/image'),
  'rounded:maps': () => import('./generated/rounded/maps'),
  'rounded:math': () => import('./generated/rounded/math'),
  'rounded:navigation': () => import('./generated/rounded/navigation'),
  'rounded:notification': () => import('./generated/rounded/notification'),
  'rounded:places': () => import('./generated/rounded/places'),
  'rounded:search': () => import('./generated/rounded/search'),
  'rounded:shopping': () => import('./generated/rounded/shopping'),
  'rounded:social': () => import('./generated/rounded/social'),
  'rounded:toggle': () => import('./generated/rounded/toggle'),

  // Sharp shade categories
  'sharp:action': () => import('./generated/sharp/action'),
  'sharp:alert': () => import('./generated/sharp/alert'),
  'sharp:av': () => import('./generated/sharp/av'),
  'sharp:communication': () => import('./generated/sharp/communication'),
  'sharp:content': () => import('./generated/sharp/content'),
  'sharp:device': () => import('./generated/sharp/device'),
  'sharp:editor': () => import('./generated/sharp/editor'),
  'sharp:file': () => import('./generated/sharp/file'),
  'sharp:hardware': () => import('./generated/sharp/hardware'),
  'sharp:home': () => import('./generated/sharp/home'),
  'sharp:image': () => import('./generated/sharp/image'),
  'sharp:maps': () => import('./generated/sharp/maps'),
  'sharp:math': () => import('./generated/sharp/math'),
  'sharp:navigation': () => import('./generated/sharp/navigation'),
  'sharp:notification': () => import('./generated/sharp/notification'),
  'sharp:places': () => import('./generated/sharp/places'),
  'sharp:search': () => import('./generated/sharp/search'),
  'sharp:shopping': () => import('./generated/sharp/shopping'),
  'sharp:social': () => import('./generated/sharp/social'),
  'sharp:toggle': () => import('./generated/sharp/toggle'),

  // TwoTone shade categories
  'twotone:action': () => import('./generated/twotone/action'),
  'twotone:alert': () => import('./generated/twotone/alert'),
  'twotone:av': () => import('./generated/twotone/av'),
  'twotone:communication': () => import('./generated/twotone/communication'),
  'twotone:content': () => import('./generated/twotone/content'),
  'twotone:device': () => import('./generated/twotone/device'),
  'twotone:editor': () => import('./generated/twotone/editor'),
  'twotone:file': () => import('./generated/twotone/file'),
  'twotone:hardware': () => import('./generated/twotone/hardware'),
  'twotone:home': () => import('./generated/twotone/home'),
  'twotone:image': () => import('./generated/twotone/image'),
  'twotone:maps': () => import('./generated/twotone/maps'),
  'twotone:math': () => import('./generated/twotone/math'),
  'twotone:navigation': () => import('./generated/twotone/navigation'),
  'twotone:notification': () => import('./generated/twotone/notification'),
  'twotone:places': () => import('./generated/twotone/places'),
  'twotone:search': () => import('./generated/twotone/search'),
  'twotone:shopping': () => import('./generated/twotone/shopping'),
  'twotone:social': () => import('./generated/twotone/social'),
  'twotone:toggle': () => import('./generated/twotone/toggle'),
};

export interface DynamicIconProps extends IconProps {
  /**
   * Icon name, alias, or ID to render.
   * Examples:
   * - "FilledHomeIcon" or "HomeFilledIcon"
   * - "OutlinedSearchIcon"
   * - "TwoToneFavoriteIcon"
   * - "GithubIcon" or "FacebookIcon"
   * - "CheckIcon"
   * - "filled-action-account-circle"
   */
  name: string;
  /**
   * Optional custom fallback placeholder rendered while the module is loading.
   * Defaults to an accessible size-matched placeholder element.
   */
  fallback?: React.ReactNode;
}

/**
 * Load an icon component dynamically on-demand with automatic category chunk resolution.
 */
export async function loadIcon(name: string): Promise<React.FC<IconProps> | null> {
  const cached = componentCache.get(name);
  if (cached) return cached;

  const meta = parseIconName(name);

  // If curated
  if (meta.style === 'curated' && curatedMap[meta.componentName]) {
    componentCache.set(name, curatedMap[meta.componentName]);
    return curatedMap[meta.componentName];
  }

  // Determine loader key
  let loaderKey: string | null = null;
  if (meta.style === 'social') {
    loaderKey = 'social';
  } else if (meta.style === 'core') {
    loaderKey = 'core';
  } else if (['filled', 'outlined', 'rounded', 'sharp', 'twotone'].includes(meta.style)) {
    const cat = (meta.category || 'action').toLowerCase();
    loaderKey = `${meta.style}:${cat}`;
  }

  if (loaderKey && loaders[loaderKey]) {
    try {
      const mod = await loaders[loaderKey]();
      const comp = mod[meta.componentName] || mod[name];
      if (comp) {
        componentCache.set(name, comp);
        componentCache.set(meta.componentName, comp);
        return comp;
      }
    } catch (err) {
      console.warn(`[Spectra UI] Failed to dynamically load icon "${name}":`, err);
    }
  }

  return null;
}

/**
 * DynamicIcon Component
 *
 * Superpower performance component for Spectra UI:
 * - Curated icons load synchronously with 0ms delay.
 * - Multi-shade and social icons are dynamically code-split by category.
 * - Once loaded, components are cached in memory for instant reuse.
 * - Zero upfront bundle bloat for unused icons.
 */
export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  fallback,
  ...rest
}) => {
  const initialComp = componentCache.get(name);
  const [Comp, setComp] = useState<React.FC<IconProps> | null>(() => initialComp || null);

  useEffect(() => {
    let isMounted = true;
    const existing = componentCache.get(name);
    if (existing) {
      setComp(() => existing);
      return;
    }

    loadIcon(name).then((loaded) => {
      if (isMounted && loaded) {
        setComp(() => loaded);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [name]);

  if (Comp) {
    return <Comp size={size} color={color} {...rest} />;
  }

  if (fallback !== undefined) {
    return <>{fallback}</>;
  }

  // Default accessible size-matched placeholder
  return (
    <span
      role="img"
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '25%',
        backgroundColor: 'currentColor',
        opacity: 0.12,
        verticalAlign: 'middle',
      }}
    />
  );
};

// Export LazyIcon as an alias
export const LazyIcon = DynamicIcon;

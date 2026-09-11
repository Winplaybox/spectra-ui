// Deep Linking URL Router for Spectra UI Documentation Dashboard
// Mimics Wikipedia, MUI, and Fluent 2 shareable URL patterns

export type RouteType = 'overview' | 'installation' | 'cross-platform' | 'tokens' | 'components' | 'hooks' | 'icons';

export interface RouteState {
  type: RouteType;
  id?: string;         // e.g. 'button', 'accordion', 'use-disclosure', etc.
  subId?: string;      // optional sub-section
  anchor?: string;     // e.g. 'button-sizes', 'accordion-multiple'
  path: string;        // canonical path, e.g. '/components/button'
}

export function parsePath(rawPath: string): RouteState {
  let clean = rawPath.trim();
  let anchor = '';

  const hashIdx = clean.indexOf('#');
  if (hashIdx !== -1) {
    anchor = clean.substring(hashIdx + 1);
    clean = clean.substring(0, hashIdx);
  }

  if (clean.startsWith('#/')) {
    clean = clean.substring(1);
  } else if (clean.startsWith('#')) {
    clean = '/';
  }
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  
  // Remove trailing slashes
  clean = clean.replace(/\/+$/, '') || '/';

  const segments = clean.split('/').filter(Boolean);

  if (segments.length === 0 || segments[0] === 'overview') {
    return { type: 'overview', path: '/overview', anchor };
  }

  if (segments[0] === 'installation') {
    return { type: 'installation', path: '/installation', anchor };
  }

  if (segments[0] === 'cross-platform') {
    return { type: 'cross-platform', path: '/cross-platform', anchor };
  }

  if (segments[0] === 'tokens') {
    const tokenId = segments[1] || 'colors';
    return { type: 'tokens', id: tokenId, path: `/tokens/${tokenId}`, anchor };
  }

  if (segments[0] === 'components') {
    const componentId = segments[1] || 'button';
    return { type: 'components', id: componentId, path: `/components/${componentId}`, anchor };
  }

  if (segments[0] === 'hooks') {
    const hookId = segments[1] || 'use-disclosure';
    return { type: 'hooks', id: hookId, path: `/hooks/${hookId}`, anchor };
  }

  if (segments[0] === 'icons') {
    return { type: 'icons', id: segments[1], path: '/icons', anchor };
  }

  // Fallback to overview
  return { type: 'overview', path: '/overview', anchor };
}

export function getCurrentRoute(): RouteState {
  if (typeof window === 'undefined') {
    return { type: 'overview', path: '/overview' };
  }
  let targetPath = window.location.pathname;
  const hash = window.location.hash;

  if (hash && hash.startsWith('#/')) {
    targetPath = hash.substring(1);
  } else if (hash && hash.length > 1) {
    targetPath = targetPath + hash;
  }

  if (targetPath && targetPath !== '/') {
    return parsePath(targetPath);
  }
  return { type: 'overview', path: '/overview' };
}

type RouteListener = (route: RouteState) => void;
const listeners: Set<RouteListener> = new Set();

export function subscribeToRoute(listener: RouteListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function navigate(toPath: string, replace = false) {
  if (typeof window === 'undefined') return;

  const nextRoute = parsePath(toPath);
  const currentCanonical = nextRoute.path;

  // Use pushState or replaceState with both history URL and hash compatibility
  if (replace) {
    window.history.replaceState(null, '', currentCanonical);
  } else {
    window.history.pushState(null, '', currentCanonical);
  }

  listeners.forEach((fn) => fn(nextRoute));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global popstate & hashchange listener
if (typeof window !== 'undefined') {
  const handleUrlChange = () => {
    const route = getCurrentRoute();
    listeners.forEach((fn) => fn(route));
  };
  window.addEventListener('popstate', handleUrlChange);
  window.addEventListener('hashchange', handleUrlChange);
}

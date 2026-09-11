export * from './types';
export * from './curated';
export * from './DynamicIcon';
export { parseIconName } from './registry';

let _manifestPromise: Promise<any> | null = null;
/**
 * Asynchronously loads the full 12,000+ icon metadata manifest.
 * Code-split on-demand so it doesn't inflate base bundle size.
 */
export const getIconManifest = async () => {
  if (!_manifestPromise) {
    _manifestPromise = import('./manifest.json').then((m) => m.default || m);
  }
  return _manifestPromise;
};

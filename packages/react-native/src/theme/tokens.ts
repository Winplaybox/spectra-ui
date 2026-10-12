import { getTokens, lightTokens, darkTokens, ColorScheme } from '@winplaybox/tokens';

export { getTokens, lightTokens, darkTokens };
export * from './ios';
export * from './android';

export function useNativeTokens(mode: ColorScheme = 'light') {
  return getTokens(mode);
}

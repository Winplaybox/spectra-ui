import { getTokens, lightTokens, darkTokens, ColorScheme } from '@winplaybox/tokens';

export { getTokens, lightTokens, darkTokens };

export function useNativeTokens(mode: ColorScheme = 'light') {
  return getTokens(mode);
}

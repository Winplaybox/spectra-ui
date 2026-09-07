import { getTokens, lightTokens, darkTokens, ColorScheme } from '@spectra/tokens';

export { getTokens, lightTokens, darkTokens };

export function useNativeTokens(mode: ColorScheme = 'light') {
  return getTokens(mode);
}

import { getTokens, lightTokens, darkTokens, amoledTokens, ColorScheme } from '@spectra/tokens';

export { getTokens, lightTokens, darkTokens, amoledTokens };

export function useNativeTokens(mode: ColorScheme = 'light') {
  return getTokens(mode);
}

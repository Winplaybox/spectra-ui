import { getTokens, lightTokens, darkTokens, type ColorScheme, type StylePack } from '@winplaybox/tokens';

export { getTokens, lightTokens, darkTokens };
export { getNativeTheme, type NativeTheme } from '@winplaybox/tokens';
export * from './ios';
export * from './android';

export function useNativeTokens(mode: ColorScheme = 'light', pack: StylePack = 'minimal') {
  return getTokens(mode, pack);
}

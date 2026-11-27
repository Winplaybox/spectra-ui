import { describe, it, expect } from 'vitest';
import { getNativeTheme, getTokens, lightTokens, darkTokens, useNativeTokens } from './theme/tokens';

describe('@winplaybox/react-native token parity', () => {
  it('provides complete lightTokens with semantic tokens', () => {
    expect(lightTokens['color-action-primary']).toBeDefined();
    expect(lightTokens['color-surface']).toBeDefined();
    expect(lightTokens['radius-component-md']).toBeDefined();
  });

  it('provides darkTokens with dark scheme values', () => {
    expect(darkTokens['color-action-primary']).toBeDefined();
    expect(darkTokens['color-surface']).toBeDefined();
  });

  it('getTokens returns respective mode dictionaries', () => {
    expect(getTokens('light')).toEqual(lightTokens);
    expect(getTokens('dark')).toEqual(darkTokens);
  });

  it('useNativeTokens defaults to light mode tokens', () => {
    expect(useNativeTokens()).toEqual(lightTokens);
    expect(useNativeTokens('dark')).toEqual(darkTokens);
  });

  it('exposes the base pack and native theme for explicit opt-in', () => {
    expect(useNativeTokens('dark', 'base')).toBe(getTokens('dark', 'base'));
    expect(getNativeTheme('dark', 'base').colors.canvas).toBe('#0A0A0A');
  });
});

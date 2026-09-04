import { describe, it, expect } from 'vitest';
import { getTokens, lightTokens, darkTokens, amoledTokens, useNativeTokens } from './theme/tokens';

describe('@spectra/react-native token parity', () => {
  it('provides complete lightTokens with semantic tokens', () => {
    expect(lightTokens['color-action-primary']).toBeDefined();
    expect(lightTokens['color-surface']).toBeDefined();
    expect(lightTokens['radius-component-md']).toBeDefined();
  });

  it('provides darkTokens with dark scheme values', () => {
    expect(darkTokens['color-action-primary']).toBeDefined();
    expect(darkTokens['color-surface']).toBeDefined();
  });

  it('provides amoledTokens with true black surface', () => {
    expect(amoledTokens['color-surface']).toBe('#000000');
  });

  it('getTokens returns respective mode dictionaries', () => {
    expect(getTokens('light')).toEqual(lightTokens);
    expect(getTokens('dark')).toEqual(darkTokens);
    expect(getTokens('amoled')).toEqual(amoledTokens);
  });

  it('useNativeTokens defaults to light mode tokens', () => {
    expect(useNativeTokens()).toEqual(lightTokens);
    expect(useNativeTokens('amoled')).toEqual(amoledTokens);
  });
});

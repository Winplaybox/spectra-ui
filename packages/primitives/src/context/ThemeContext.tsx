import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorScheme = 'light' | 'dark';
export type StylePack = 'minimal';

export interface ThemeContextValue {
  pack: StylePack;
  setPack: (pack: StylePack) => void;
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  isDark: boolean;
  isReducedMotion: boolean;
  isRTL: boolean;
  setIsRTL: (isRTL: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultPack?: StylePack;
  defaultColorScheme?: ColorScheme;
  defaultRTL?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultPack = 'minimal',
  defaultColorScheme = 'light',
  defaultRTL = false,
}) => {
  const [pack, setPack] = useState<StylePack>(defaultPack);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = window.localStorage?.getItem('spectra-color-scheme') as ColorScheme;
        if (saved && ['light', 'dark'].includes(saved)) return saved;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
      } catch {
        // Ignore storage/matchMedia errors in restricted test environments
      }
    }
    return defaultColorScheme;
  });

  const [isRTL, setIsRTL] = useState(defaultRTL);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    try {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(media?.matches ?? false);
      const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
      media?.addEventListener?.('change', listener);
      return () => media?.removeEventListener?.('change', listener);
    } catch {
      // Ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage?.setItem('spectra-color-scheme', colorScheme);
    } catch {
      // Ignore
    }

    // Set dataset on root element for CSS variables
    const root = document.documentElement;
    root?.setAttribute('data-pack', pack);
    root?.setAttribute('data-mode', colorScheme);
    root?.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [pack, colorScheme, isRTL]);

  const isDark = colorScheme === 'dark';

  const value: ThemeContextValue = {
    pack,
    setPack,
    colorScheme,
    setColorScheme,
    isDark,
    isReducedMotion,
    isRTL,
    setIsRTL,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

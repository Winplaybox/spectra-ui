import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorScheme = 'light' | 'dark';
export type ThemeMode = 'light' | 'dark' | 'system';
export type StylePack = 'minimal';

export interface ThemeContextValue {
  pack: StylePack;
  setPack: (pack: StylePack) => void;
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
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
  defaultMode?: ThemeMode;
  defaultRTL?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultPack = 'minimal',
  defaultColorScheme = 'light',
  defaultMode = 'system',
  defaultRTL = false,
}) => {
  const [pack, setPack] = useState<StylePack>(defaultPack);

  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedMode = window.localStorage?.getItem('spectra-theme-mode') as ThemeMode;
        if (savedMode && ['light', 'dark', 'system'].includes(savedMode)) return savedMode;
        const savedScheme = window.localStorage?.getItem('spectra-color-scheme') as ColorScheme;
        if (savedScheme && ['light', 'dark'].includes(savedScheme)) return savedScheme;
      } catch {
        // Ignore storage errors in restricted test environments
      }
    }
    return defaultMode;
  });

  const getSystemScheme = (): ColorScheme => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(() => {
    if (mode === 'system') return getSystemScheme();
    return mode;
  });

  // Listen to OS system color scheme changes when in 'system' mode
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    if (mode === 'system') {
      setColorSchemeState(getSystemScheme());
      try {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
          setColorSchemeState(e.matches ? 'dark' : 'light');
        };
        media.addEventListener?.('change', handler);
        return () => media.removeEventListener?.('change', handler);
      } catch {
        // Ignore
      }
    } else {
      setColorSchemeState(mode);
    }
  }, [mode]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage?.setItem('spectra-theme-mode', newMode);
      } catch {
        // Ignore
      }
    }
    if (newMode === 'system') {
      setColorSchemeState(getSystemScheme());
    } else {
      setColorSchemeState(newMode);
    }
  };

  const setColorScheme = (scheme: ColorScheme) => {
    setMode(scheme);
  };

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
    mode,
    setMode,
    isDark,
    isReducedMotion,
    isRTL,
    setIsRTL,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

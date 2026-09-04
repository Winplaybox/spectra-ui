import { useContext } from 'react';
import { ThemeContext, ThemeContextValue } from '../context/ThemeContext';

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback default if not wrapped in ThemeProvider
    return {
      pack: 'minimal',
      setPack: () => {},
      colorScheme: 'light',
      setColorScheme: () => {},
      isDark: false,
      isReducedMotion: false,
      isRTL: false,
      setIsRTL: () => {},
    };
  }
  return context;
}

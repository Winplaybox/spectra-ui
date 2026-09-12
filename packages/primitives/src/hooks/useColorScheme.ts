import { useTheme } from './useTheme';

export function useColorScheme() {
  const { colorScheme, setColorScheme, mode, setMode, isDark } = useTheme();
  return {
    colorScheme,
    setColorScheme,
    mode,
    setMode,
    isDark,
    toggleColorScheme: () => {
      setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
    },
  };
}

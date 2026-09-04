import { useTheme } from './useTheme';

export function useColorScheme() {
  const { colorScheme, setColorScheme, isDark } = useTheme();
  return {
    colorScheme,
    setColorScheme,
    isDark,
    toggleColorScheme: () => {
      setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
    },
  };
}

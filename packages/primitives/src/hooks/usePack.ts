import { useTheme } from './useTheme';
import { StylePack } from '../context/ThemeContext';

export function usePack() {
  const { pack, setPack } = useTheme();
  return {
    pack,
    setPack,
    availablePacks: ['minimal'] as const,
  };
}

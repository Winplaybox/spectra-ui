import { useTheme } from './useTheme';

export function useReducedMotion(): boolean {
  const { isReducedMotion } = useTheme();
  return isReducedMotion;
}

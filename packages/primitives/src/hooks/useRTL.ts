import { useTheme } from './useTheme';

export function useRTL() {
  const { isRTL, setIsRTL } = useTheme();

  return {
    isRTL,
    setIsRTL,
    toggleRTL: () => setIsRTL(!isRTL),
    dir: isRTL ? ('rtl' as const) : ('ltr' as const),
    startProp: isRTL ? 'right' : 'left',
    endProp: isRTL ? 'left' : 'right',
  };
}

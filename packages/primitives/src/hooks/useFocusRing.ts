import { useState, useCallback, useRef } from 'react';

export function useFocusRing(isVisible: boolean = true) {
  const ref = useRef<HTMLElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    if (isVisible) setIsFocused(true);
  }, [isVisible]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return {
    ref,
    isFocused,
    focusProps: {
      onFocus: handleFocus,
      onBlur: handleBlur,
    },
  };
}

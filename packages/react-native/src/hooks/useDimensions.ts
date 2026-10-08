// @winplaybox/react-native - Enterprise Window & Screen Dimensions Hook

import { useState, useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export interface DimensionsState {
  window: ScaledSize;
  screen: ScaledSize;
  width: number;
  height: number;
  scale: number;
  fontScale: number;
}

/**
 * Custom hook to dynamically monitor window and screen dimensions changes.
 */
export function useDimensions(): DimensionsState {
  const [dimensions, setDimensions] = useState<DimensionsState>(() => {
    const window = Dimensions.get('window');
    const screen = Dimensions.get('screen');
    return {
      window,
      screen,
      width: window.width,
      height: window.height,
      scale: window.scale,
      fontScale: window.fontScale,
    };
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
      setDimensions({
        window,
        screen,
        width: window.width,
        height: window.height,
        scale: window.scale,
        fontScale: window.fontScale,
      });
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return dimensions;
}

export default useDimensions;

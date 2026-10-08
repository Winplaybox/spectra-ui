// @winplaybox/react-native - Enterprise Android / System Hardware Back Button Hook

import { useEffect } from 'react';
import { BackHandler } from 'react-native';

/**
 * Custom hook to register Android hardware back button handler.
 * Automatically cleans up on unmount or when handler changes.
 * 
 * @param handler Return true to prevent default back action, false to bubble up.
 * @param enabled Whether the handler is currently active. Defaults to true.
 */
export function useBackHandler(handler: () => boolean, enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const subscription = BackHandler.addEventListener('hardwareBackPress', handler);
    return () => {
      subscription.remove();
    };
  }, [handler, enabled]);
}

export default useBackHandler;

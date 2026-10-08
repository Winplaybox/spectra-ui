// @winplaybox/react-native - Enterprise AppState Hook

import { useState, useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

/**
 * Custom hook to monitor React Native application lifecycle state ('active' | 'background' | 'inactive').
 * 
 * @param onStateChange Optional callback fired whenever app state changes.
 * @returns Current AppStateStatus ('active' | 'background' | 'inactive').
 */
export function useAppState(onStateChange?: (state: AppStateStatus) => void): AppStateStatus {
  const [appState, setAppState] = useState<AppStateStatus>(
    () => (AppState.currentState || 'active') as AppStateStatus
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextState) => {
      setAppState(nextState);
      onStateChange?.(nextState);
    });

    return () => {
      subscription.remove();
    };
  }, [onStateChange]);

  return appState;
}

export default useAppState;

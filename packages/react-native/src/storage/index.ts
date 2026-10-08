// @winplaybox/react-native - Enterprise Storage Module
// Safe dynamic integration with @react-native-async-storage/async-storage
// Benchmarked against Microsoft Fluent UI & Apple HIG persistence patterns.

import { useState, useEffect, useCallback } from 'react';

// Fallback in-memory storage for SSR, web testing, and environments where native bridge is unlinked
const memoryStore = new Map<string, string>();

let nativeStorage: any = null;
try {
  const mod = require('@react-native-async-storage/async-storage');
  nativeStorage = mod.default || mod;
} catch {
  // Graceful fallback to memory storage
}

export interface IAsyncStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
  getAllKeys(): Promise<string[]>;
  multiGet(keys: string[]): Promise<[string, string | null][]>;
  multiSet(keyValuePairs: [string, string][]): Promise<void>;
  multiRemove(keys: string[]): Promise<void>;
}

export const AsyncStorage: IAsyncStorage = {
  getItem: async (key: string): Promise<string | null> => {
    if (nativeStorage?.getItem) {
      return nativeStorage.getItem(key);
    }
    return memoryStore.has(key) ? memoryStore.get(key)! : null;
  },

  setItem: async (key: string, value: string): Promise<void> => {
    if (nativeStorage?.setItem) {
      return nativeStorage.setItem(key, value);
    }
    memoryStore.set(key, String(value));
  },

  removeItem: async (key: string): Promise<void> => {
    if (nativeStorage?.removeItem) {
      return nativeStorage.removeItem(key);
    }
    memoryStore.delete(key);
  },

  clear: async (): Promise<void> => {
    if (nativeStorage?.clear) {
      return nativeStorage.clear();
    }
    memoryStore.clear();
  },

  getAllKeys: async (): Promise<string[]> => {
    if (nativeStorage?.getAllKeys) {
      return nativeStorage.getAllKeys();
    }
    return Array.from(memoryStore.keys());
  },

  multiGet: async (keys: string[]): Promise<[string, string | null][]> => {
    if (nativeStorage?.multiGet) {
      return nativeStorage.multiGet(keys);
    }
    return keys.map((k) => [k, memoryStore.has(k) ? memoryStore.get(k)! : null]);
  },

  multiSet: async (keyValuePairs: [string, string][]): Promise<void> => {
    if (nativeStorage?.multiSet) {
      return nativeStorage.multiSet(keyValuePairs);
    }
    keyValuePairs.forEach(([k, v]) => memoryStore.set(k, String(v)));
  },

  multiRemove: async (keys: string[]): Promise<void> => {
    if (nativeStorage?.multiRemove) {
      return nativeStorage.multiRemove(keys);
    }
    keys.forEach((k) => memoryStore.delete(k));
  },
};

/**
 * Enterprise JSON-aware storage helper
 */
export const storage = {
  getItem: (key: string) => AsyncStorage.getItem(key),
  setItem: (key: string, value: string) => AsyncStorage.setItem(key, value),
  removeItem: (key: string) => AsyncStorage.removeItem(key),
  clear: () => AsyncStorage.clear(),
  getAllKeys: () => AsyncStorage.getAllKeys(),

  async getJSON<T = any>(key: string, defaultValue: T | null = null): Promise<T | null> {
    try {
      const raw = await AsyncStorage.getItem(key);
      if (raw === null || raw === undefined) return defaultValue;
      return JSON.parse(raw) as T;
    } catch {
      return defaultValue;
    }
  },

  async setJSON<T = any>(key: string, value: T): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
};

/**
 * Reactive React hook for persistent storage synchronization
 */
export function useAsyncStorage<T = string>(
  key: string,
  initialValue?: T
): {
  value: T | null;
  setValue: (newValue: T | ((prev: T | null) => T)) => Promise<void>;
  removeValue: () => Promise<void>;
  loading: boolean;
  error: Error | null;
} {
  const [value, setLocalValue] = useState<T | null>(initialValue ?? null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(key);
        if (isMounted) {
          if (raw !== null) {
            try {
              setLocalValue(JSON.parse(raw));
            } catch {
              setLocalValue(raw as unknown as T);
            }
          } else if (initialValue !== undefined) {
            setLocalValue(initialValue);
          }
          setLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [key]);

  const setValue = useCallback(
    async (newValue: T | ((prev: T | null) => T)) => {
      try {
        const resolved = typeof newValue === 'function'
          ? (newValue as (prev: T | null) => T)(value)
          : newValue;
        setLocalValue(resolved);
        const serialized = typeof resolved === 'string' ? resolved : JSON.stringify(resolved);
        await AsyncStorage.setItem(key, serialized);
      } catch (err: any) {
        setError(err);
      }
    },
    [key, value]
  );

  const removeValue = useCallback(async () => {
    try {
      setLocalValue(null);
      await AsyncStorage.removeItem(key);
    } catch (err: any) {
      setError(err);
    }
  }, [key]);

  return { value, setValue, removeValue, loading, error };
}

export default AsyncStorage;

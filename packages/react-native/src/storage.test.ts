import { describe, it, expect, vi } from 'vitest';
import {
  AsyncStorage,
  storage,
  Dimensions,
  AppState,
  BackHandler,
  Share,
  Linking,
  NativeModules,
  Platform,
  useBackHandler,
  useAppState,
  useDimensions,
} from './index';

describe('Spectra UI - Storage & System Bridges', () => {
  it('exports AsyncStorage with in-memory fallback', async () => {
    expect(AsyncStorage).toBeDefined();
    await AsyncStorage.setItem('test_key', 'test_value');
    const val = await AsyncStorage.getItem('test_key');
    expect(val).toBe('test_value');

    await AsyncStorage.removeItem('test_key');
    const after = await AsyncStorage.getItem('test_key');
    expect(after).toBeNull();
  });

  it('provides JSON helper methods via storage utility', async () => {
    const payload = { theme: 'dark', fontSize: 16 };
    await storage.setJSON('settings', payload);
    const retrieved = await storage.getJSON('settings');
    expect(retrieved).toEqual(payload);
    await storage.removeItem('settings');
  });

  it('re-exports React Native system bridges and hooks', () => {
    expect(typeof useBackHandler).toBe('function');
    expect(typeof useAppState).toBe('function');
    expect(typeof useDimensions).toBe('function');
  });
});

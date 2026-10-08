import { useState, useCallback, useEffect, useRef } from 'react';

export interface ClipboardAdapter {
  setString: (text: string) => Promise<boolean> | boolean;
  getString: () => Promise<string> | string;
  hasString?: () => Promise<boolean> | boolean;
  isSupported?: () => boolean;
}

let customAdapter: ClipboardAdapter | null = null;

/**
 * Configure a custom clipboard adapter for specialized native environments.
 */
export function setClipboardAdapter(adapter: ClipboardAdapter | null): void {
  customAdapter = adapter;
}

/**
 * Dynamically resolves native clipboard modules in React Native / Expo runtimes.
 */
function getNativeClipboard(): any {
  try {
    // 1. @react-native-clipboard/clipboard (Standard community package)
    const mod = require('@react-native-clipboard/clipboard');
    return mod.default || mod;
  } catch (_) {
    try {
      // 2. expo-clipboard (Expo ecosystem)
      return require('expo-clipboard');
    } catch (_) {
      try {
        // 3. react-native legacy Clipboard
        const rn = require('react-native');
        return rn.Clipboard;
      } catch (_) {
        return null;
      }
    }
  }
}

/**
 * Universal cross-platform Clipboard manager.
 * Supports Modern Web, Legacy Web/execCommand fallback, React Native, and Expo.
 */
export const Clipboard = {
  /**
   * Copies string content to the system clipboard across any platform.
   */
  async setString(text: string): Promise<boolean> {
    // 1. Custom injected adapter
    if (customAdapter?.setString) {
      try {
        await customAdapter.setString(text);
        return true;
      } catch {
        return false;
      }
    }

    // 2. React Native / Expo environment
    const native = getNativeClipboard();
    if (native) {
      try {
        if (typeof native.setStringAsync === 'function') {
          await native.setStringAsync(text);
          return true;
        }
        if (typeof native.setString === 'function') {
          native.setString(text);
          return true;
        }
      } catch (_) {}
    }

    // 3. Modern Web Clipboard API
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // Fall through to legacy fallback on rejection (e.g. non-user gesture or HTTP)
      }
    }

    // 4. Legacy DOM execCommand fallback (Browsers, older WebViews, HTTP, iframes)
    if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (success) return true;
      } catch (_) {}
    }

    return false;
  },

  /**
   * Reads string content from the system clipboard across any platform.
   */
  async getString(): Promise<string> {
    // 1. Custom injected adapter
    if (customAdapter?.getString) {
      try {
        return await customAdapter.getString();
      } catch (_) {
        return '';
      }
    }

    // 2. React Native / Expo environment
    const native = getNativeClipboard();
    if (native) {
      try {
        if (typeof native.getStringAsync === 'function') {
          return await native.getStringAsync();
        }
        if (typeof native.getString === 'function') {
          return await native.getString();
        }
      } catch (_) {}
    }

    // 3. Modern Web Clipboard API
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.readText === 'function') {
      try {
        return await navigator.clipboard.readText();
      } catch (_) {}
    }

    return '';
  },

  /**
   * Determines if the clipboard currently has content without fetching it.
   */
  async hasString(): Promise<boolean> {
    if (customAdapter?.hasString) {
      try {
        return await customAdapter.hasString();
      } catch (_) {
        return false;
      }
    }

    const native = getNativeClipboard();
    if (native) {
      try {
        if (typeof native.hasStringAsync === 'function') {
          return await native.hasStringAsync();
        }
        if (typeof native.hasString === 'function') {
          return await native.hasString();
        }
      } catch (_) {}
    }

    const str = await Clipboard.getString();
    return str.length > 0;
  },

  /**
   * Checks whether clipboard operations are supported in the current runtime.
   */
  isSupported(): boolean {
    if (customAdapter?.isSupported) return customAdapter.isSupported();
    if (getNativeClipboard()) return true;
    if (typeof navigator !== 'undefined' && !!navigator.clipboard) return true;
    if (typeof document !== 'undefined' && typeof document.execCommand === 'function') return true;
    return false;
  },
};

export interface UseClipboardOptions {
  timeout?: number;
  defaultValue?: string;
}

export interface UseClipboardResult {
  value: string;
  setValue: (value: string) => void;
  copy: (textToCopy?: string) => Promise<boolean>;
  paste: () => Promise<string>;
  hasCopied: boolean;
  copied: boolean;
  error: Error | null;
  reset: () => void;
  isSupported: boolean;
}

/**
 * useClipboard - Universal headless clipboard hook for Spectra UI.
 * Seamlessly supports Web (modern & legacy), React Native, iOS, Android, and Desktop runtimes.
 */
export function useClipboard({
  timeout = 2000,
  defaultValue = '',
}: UseClipboardOptions = {}): UseClipboardResult {
  const [hasCopied, setHasCopied] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const reset = useCallback(() => {
    setHasCopied(false);
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const copy = useCallback(
    async (textToCopy?: string) => {
      const targetText = textToCopy !== undefined ? textToCopy : value;

      const success = await Clipboard.setString(targetText);

      if (success) {
        setValue(targetText);
        setHasCopied(true);
        setError(null);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setHasCopied(false);
        }, timeout);

        return true;
      } else {
        const err = new Error('Failed to copy text to clipboard in this environment');
        setError(err);
        setHasCopied(false);
        return false;
      }
    },
    [value, timeout]
  );

  const paste = useCallback(async () => {
    try {
      const text = await Clipboard.getString();
      setValue(text);
      setError(null);
      return text;
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Failed to read from clipboard');
      setError(errorObj);
      return '';
    }
  }, []);

  return {
    value,
    setValue,
    copy,
    paste,
    hasCopied,
    copied: hasCopied,
    error,
    reset,
    isSupported: Clipboard.isSupported(),
  };
}

import { useState, useCallback } from 'react';

export interface UseClipboardOptions {
  timeout?: number;
}

export interface UseClipboardResult {
  copy: (text: string) => Promise<boolean>;
  hasCopied: boolean;
  error: Error | null;
}

/**
 * useClipboard - Copies text to clipboard with temporary feedback state.
 */
export function useClipboard({ timeout = 2000 }: UseClipboardOptions = {}): UseClipboardResult {
  const [hasCopied, setHasCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        const err = new Error('Clipboard API is not supported in this environment');
        setError(err);
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setHasCopied(true);
        setError(null);
        setTimeout(() => setHasCopied(false), timeout);
        return true;
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to copy'));
        setHasCopied(false);
        return false;
      }
    },
    [timeout]
  );

  return { copy, hasCopied, error };
}

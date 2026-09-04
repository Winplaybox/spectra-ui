// packages/primitives/src/hooks/index.ts - All 14 Hooks Bundle

// 1. useTheme.ts
export { useTheme } from './useTheme';

// 2. usePack.ts
export { usePack } from './usePack';

// 3. useColorScheme.ts
export { useColorScheme } from './useColorScheme';

// 4. useReducedMotion.ts
export { useReducedMotion } from './useReducedMotion';

// 5. useControllableState.ts
export { useControllableState } from './useControllableState';

// 6. useDisclosure.ts
export { useDisclosure } from './useDisclosure';

// 7. useFocusTrap.ts
export { useFocusTrap } from './useFocusTrap';

// 8. useFocusRing.ts
import { useRef, useCallback, useState } from 'react';

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
    onFocus: handleFocus,
    onBlur: handleBlur,
  };
}

// 9. useId.ts
let counter = 0;

export function useId(prefix = 'id'): string {
  const [id] = useState(() => {
    if (typeof window === 'undefined') return `${prefix}-${counter}`;
    counter++;
    return `${prefix}-${Date.now()}-${counter}`;
  });

  return id;
}

// 10. useMediaQuery.ts
import { useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// 11. useToast.ts
export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

let toastId = 0;
const toastListeners: Array<(toast: Toast[]) => void> = [];

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (newToasts: Toast[]) => setToasts(newToasts);
    toastListeners.push(listener);
    return () => {
      const index = toastListeners.indexOf(listener);
      if (index > -1) toastListeners.splice(index, 1);
    };
  }, []);

  const add = useCallback(
    (message: string, type: 'success' | 'error' | 'warning' | 'info', duration = 3000) => {
      const id = String(++toastId);
      const toast: Toast = { id, message, type, duration };
      const newToasts = [...toasts, toast];
      setToasts(newToasts);
      toastListeners.forEach((listener) => listener(newToasts));

      if (duration > 0) {
        setTimeout(() => {
          remove(id);
        }, duration);
      }

      return id;
    },
    [toasts]
  );

  const remove = useCallback((id: string) => {
    setToasts((prev) => {
      const next = prev.filter((t) => t.id !== id);
      toastListeners.forEach((listener) => listener(next));
      return next;
    });
  }, []);

  return { toasts, add, remove };
}

// 12. useFormField.ts
export interface UseFormFieldProps {
  label?: string;
  error?: string;
  description?: string;
  required?: boolean;
}

export function useFormField(props?: UseFormFieldProps) {
  const { label, error, description, required } = props || {};
  const labelId = useId('label');
  const descriptionId = useId('description');
  const errorId = useId('error');

  const ariaDescribedBy = [
    description && descriptionId,
    error && errorId,
  ]
    .filter(Boolean)
    .join(' ');

  return {
    labelId,
    descriptionId,
    errorId,
    ariaDescribedBy: ariaDescribedBy || undefined,
    isRequired: required,
  };
}

// 13. useListNavigation.ts
export interface UseListNavigationProps {
  items: HTMLElement[];
  onNavigate?: (index: number) => void;
}

export function useListNavigation(ref: React.RefObject<HTMLElement>) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const items = container.querySelectorAll('[role="option"], li, [role="menuitem"]');
      const itemArray = Array.from(items) as HTMLElement[];

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) => Math.min(prev + 1, itemArray.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => Math.max(prev - 1, 0));
          break;
        case 'Home':
          e.preventDefault();
          setActiveIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setActiveIndex(itemArray.length - 1);
          break;
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [ref]);

  return { activeIndex, setActiveIndex };
}

// 14. useOutsideClick.ts
export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
}

---

// Usage in components:
// import { useTheme, useDisclosure, useFocusTrap, useFormField } from '@spectra/primitives';

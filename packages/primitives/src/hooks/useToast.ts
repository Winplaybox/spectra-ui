import { useState, useCallback, useEffect } from 'react';

export interface ToastItem {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}

let toastListeners: Array<(toasts: ToastItem[]) => void> = [];
let toastMemoryStore: ToastItem[] = [];

function notifyListeners() {
  toastListeners.forEach((listener) => listener([...toastMemoryStore]));
}

export function toast(message: string, options?: Omit<ToastItem, 'id' | 'message'>) {
  const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const item: ToastItem = {
    id,
    message,
    type: options?.type || 'info',
    duration: options?.duration ?? 4000,
  };

  toastMemoryStore.push(item);
  notifyListeners();

  if (item.duration && item.duration > 0) {
    setTimeout(() => {
      dismissToast(id);
    }, item.duration);
  }

  return id;
}

export function dismissToast(id: string) {
  toastMemoryStore = toastMemoryStore.filter((t) => t.id !== id);
  notifyListeners();
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>(toastMemoryStore);

  useEffect(() => {
    toastListeners.push(setToasts);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== setToasts);
    };
  }, []);

  const add = useCallback((message: string, options?: Omit<ToastItem, 'id' | 'message'>) => {
    return toast(message, options);
  }, []);

  const dismiss = useCallback((id: string) => {
    dismissToast(id);
  }, []);

  return {
    toasts,
    toast: add,
    dismiss,
  };
}

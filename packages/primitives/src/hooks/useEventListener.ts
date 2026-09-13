import { useEffect, useRef } from 'react';

/**
 * useEventListener - Declaratively binds an event listener to window, document, or a target element.
 * Automatically cleans up on unmount or target change.
 */
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: HTMLElement | Window | Document | null
): void;
export function useEventListener<K extends string>(
  eventName: K,
  handler: (event: Event) => void,
  element?: HTMLElement | Window | Document | null
): void;
export function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element?: HTMLElement | Window | Document | null
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element ?? (typeof window !== 'undefined' ? window : null);
    if (!targetElement?.addEventListener) return;

    const eventListener: EventListener = (event) => savedHandler.current(event);
    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

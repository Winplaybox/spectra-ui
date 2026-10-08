import { HookCapability } from '../types';
import { useHoverCapability } from './use-hover';
import { useMediaQueryCapability } from './use-media-query';
import { useClipboardCapability } from './use-clipboard';
import { useReducedMotionCapability } from './use-reduced-motion';
import { useFocusTrapCapability } from './use-focus-trap';

export const hooksCapabilities: Record<string, HookCapability> = {
  'use-hover': useHoverCapability,
  'use-media-query': useMediaQueryCapability,
  'use-clipboard': useClipboardCapability,
  'use-reduced-motion': useReducedMotionCapability,
  'use-focus-trap': useFocusTrapCapability,
};

export function getHookCapability(hookId: string): HookCapability | undefined {
  const normalized = hookId.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return hooksCapabilities[normalized] || hooksCapabilities[hookId];
}

export {
  useHoverCapability,
  useMediaQueryCapability,
  useClipboardCapability,
  useReducedMotionCapability,
  useFocusTrapCapability,
};


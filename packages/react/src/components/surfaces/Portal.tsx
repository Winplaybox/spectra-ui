// packages/react/src/components/surfaces/Portal.tsx
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  mountNode?: HTMLElement | null;
}

export const Portal: React.FC<PortalProps> = ({ children, mountNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  const target = mountNode || document.body;
  return createPortal(children, target);
};
Portal.displayName = 'Portal';

export interface ToMountNodeProps {
  element?: HTMLElement | null;
  className?: string;
}

export function toMountNodeProps(options?: ToMountNodeProps): { mountNode: HTMLElement | null } {
  if (typeof document === 'undefined') return { mountNode: null };
  return {
    mountNode: options?.element || document.body,
  };
}

import { useState, useId as reactUseId } from 'react';

let globalCounter = 0;

export function useId(prefix = 'spectra'): string {
  // Use React 18 useId if available, fallback for SSR/older environments
  if (typeof reactUseId === 'function') {
    const id = reactUseId();
    return `${prefix}-${id.replace(/:/g, '')}`;
  }

  const [id] = useState(() => {
    globalCounter += 1;
    return `${prefix}-${globalCounter}`;
  });

  return id;
}

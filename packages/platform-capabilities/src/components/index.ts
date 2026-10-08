import { ComponentCapability } from '../types';
import { buttonCapability } from './button';
import { copyButtonCapability } from './copy-button';
import { textInputCapability } from './text-input';
import { dialogCapability } from './dialog';
import { liveIndicatorCapability } from './live-indicator';
import { iconButtonCapability } from './icon-button';
import { cardCapability } from './card';

export const componentsCapabilities: Record<string, ComponentCapability> = {
  button: buttonCapability,
  'copy-button': copyButtonCapability,
  'text-input': textInputCapability,
  dialog: dialogCapability,
  'live-indicator': liveIndicatorCapability,
  'icon-button': iconButtonCapability,
  card: cardCapability,
};

export function getComponentCapability(componentId: string): ComponentCapability | undefined {
  const normalized = componentId.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return componentsCapabilities[normalized] || componentsCapabilities[componentId];
}

export {
  buttonCapability,
  copyButtonCapability,
  textInputCapability,
  dialogCapability,
  liveIndicatorCapability,
  iconButtonCapability,
  cardCapability,
};


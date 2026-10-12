import { ComponentCapability } from '../types';
import { buttonCapability } from './button';
import { copyButtonCapability } from './copy-button';
import { textInputCapability } from './text-input';
import { dialogCapability } from './dialog';
import { liveIndicatorCapability } from './live-indicator';
import { iconButtonCapability } from './icon-button';
import { cardCapability } from './card';
import { selectCapability } from './select';
import { hoverCardCapability } from './hover-card';
import { bottomSheetCapability } from './bottom-sheet';
import { datePickerCapability } from './date-picker';
import { splitButtonCapability } from './split-button';
import { buttonGroupCapability } from './button-group';
import { compoundButtonCapability } from './compound-button';
import { tableCapability } from './table';
import { accordionCapability } from './accordion';
import { avatarCapability } from './avatar';
import { badgeCapability } from './badge';
import { breadcrumbCapability } from './breadcrumb';

export const componentsCapabilities: Record<string, ComponentCapability> = {
  button: buttonCapability,
  'copy-button': copyButtonCapability,
  'text-input': textInputCapability,
  dialog: dialogCapability,
  'live-indicator': liveIndicatorCapability,
  'icon-button': iconButtonCapability,
  card: cardCapability,
  select: selectCapability,
  'hover-card': hoverCardCapability,
  'bottom-sheet': bottomSheetCapability,
  'date-picker': datePickerCapability,
  'split-button': splitButtonCapability,
  'button-group': buttonGroupCapability,
  'compound-button': compoundButtonCapability,
  table: tableCapability,
  accordion: accordionCapability,
  avatar: avatarCapability,
  badge: badgeCapability,
  breadcrumb: breadcrumbCapability,
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
  selectCapability,
  hoverCardCapability,
  bottomSheetCapability,
  datePickerCapability,
  splitButtonCapability,
  buttonGroupCapability,
  compoundButtonCapability,
  tableCapability,
  accordionCapability,
  avatarCapability,
  badgeCapability,
  breadcrumbCapability,
};



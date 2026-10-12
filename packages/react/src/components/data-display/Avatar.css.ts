import { style, styleVariants } from '@vanilla-extract/css';

export const avatar = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-primary, #18181B)',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans, system-ui, -apple-system, sans-serif))',
  fontWeight: 'var(--font-primitive-weight-semibold, 600)',
  overflow: 'visible',
  userSelect: 'none',
  flexShrink: 0,
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  transition: 'transform var(--motion-instant, 150ms ease), box-shadow var(--motion-subtle, 200ms ease)',
});

export const inner = style({
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--color-surface-raised, #F4F4F5)',
  border: '1px solid var(--color-border-subtle, #E4E4E7)',
  boxSizing: 'border-box',
  transition: 'background-color var(--motion-subtle, 150ms ease), border-color var(--motion-subtle, 150ms ease)',
});

export const shapeCircular = style({
  borderRadius: 'var(--radius-control-full, 9999px)',
});

export const shapeSquare = style({
  borderRadius: 'var(--radius-component-md, 8px)',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

// Size variants for the avatar container
export const sizeVariant = styleVariants({
  16: {
    width: '16px',
    height: '16px',
    fontSize: '8px',
  },
  20: {
    width: '20px',
    height: '20px',
    fontSize: '9px',
  },
  24: {
    width: '24px',
    height: '24px',
    fontSize: '10px',
  },
  28: {
    width: '28px',
    height: '28px',
    fontSize: '11px',
  },
  32: {
    width: '32px',
    height: '32px',
    fontSize: '12px',
  },
  36: {
    width: '36px',
    height: '36px',
    fontSize: '13px',
  },
  40: {
    width: '40px',
    height: '40px',
    fontSize: '14px',
  },
  48: {
    width: '48px',
    height: '48px',
    fontSize: '16px',
  },
  56: {
    width: '56px',
    height: '56px',
    fontSize: '18px',
  },
  64: {
    width: '64px',
    height: '64px',
    fontSize: '20px',
  },
  72: {
    width: '72px',
    height: '72px',
    fontSize: '22px',
  },
  96: {
    width: '96px',
    height: '96px',
    fontSize: '28px',
  },
  120: {
    width: '120px',
    height: '120px',
    fontSize: '34px',
  },
  128: {
    width: '128px',
    height: '128px',
    fontSize: '38px',
  },
  // Backward compatibility named sizes
  xs: {
    width: '24px',
    height: '24px',
    fontSize: '10px',
  },
  sm: {
    width: '32px',
    height: '32px',
    fontSize: '12px',
  },
  md: {
    width: '40px',
    height: '40px',
    fontSize: '14px',
  },
  lg: {
    width: '56px',
    height: '56px',
    fontSize: '18px',
  },
  xl: {
    width: '64px',
    height: '64px',
    fontSize: '20px',
  },
});

// Active halo appearances
export const activeRing = style({
  boxShadow: '0 0 0 2px var(--color-surface, #ffffff), 0 0 0 4px var(--color-action-primary, #2563EB)',
});

export const activeRingShadow = style({
  boxShadow: '0 0 0 2px var(--color-surface, #ffffff), 0 0 0 4px var(--color-action-primary, #2563EB), 0 4px 14px rgba(37, 99, 235, 0.28)',
});

export const activeShadow = style({
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
});

// Color Themes
export const colorThemes = styleVariants({
  neutral: {
    backgroundColor: 'var(--color-surface-raised, #F4F4F5)',
    color: 'var(--color-text-secondary, #3F3F46)',
    borderColor: 'var(--color-border-subtle, #E4E4E7)',
  },
  brand: {
    backgroundColor: 'var(--color-action-primary, #2563EB)',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  'dark-red': {
    backgroundColor: '#7F1D1D',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  cranberry: {
    backgroundColor: '#9F1239',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  red: {
    backgroundColor: '#DC2626',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  pumpkin: {
    backgroundColor: '#C2410C',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  peach: {
    backgroundColor: '#FFEDD5',
    color: '#9A3412',
    borderColor: '#FED7AA',
  },
  marigold: {
    backgroundColor: '#D97706',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  gold: {
    backgroundColor: '#FEF3C7',
    color: '#92400E',
    borderColor: '#FDE68A',
  },
  brass: {
    backgroundColor: '#78716C',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  brown: {
    backgroundColor: '#713F12',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  forest: {
    backgroundColor: '#14532D',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  seafoam: {
    backgroundColor: '#D1FAE5',
    color: '#065F46',
    borderColor: '#A7F3D0',
  },
  'dark-green': {
    backgroundColor: '#166534',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  'light-teal': {
    backgroundColor: '#CCFBF1',
    color: '#115E59',
    borderColor: '#99F6E4',
  },
  teal: {
    backgroundColor: '#0D9488',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  steel: {
    backgroundColor: '#475569',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  blue: {
    backgroundColor: '#2563EB',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  'royal-blue': {
    backgroundColor: '#1D4ED8',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  cornflower: {
    backgroundColor: '#DBEAFE',
    color: '#1E40AF',
    borderColor: '#BFDBFE',
  },
  navy: {
    backgroundColor: '#1E3A8A',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  lavender: {
    backgroundColor: '#EDE9FE',
    color: '#5B21B6',
    borderColor: '#DDD6FE',
  },
  purple: {
    backgroundColor: '#7C3AED',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  grape: {
    backgroundColor: '#581C87',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  lilac: {
    backgroundColor: '#F3E8FF',
    color: '#6B21A8',
    borderColor: '#E9D5FF',
  },
  pink: {
    backgroundColor: '#DB2777',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  magenta: {
    backgroundColor: '#BE185D',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  plum: {
    backgroundColor: '#831843',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  beige: {
    backgroundColor: '#F5F5F4',
    color: '#44403C',
    borderColor: '#E7E5E4',
  },
  mink: {
    backgroundColor: '#A8A29E',
    color: '#ffffff',
    borderColor: 'transparent',
  },
  platinum: {
    backgroundColor: '#E2E8F0',
    color: '#334155',
    borderColor: '#CBD5E1',
  },
  anchor: {
    backgroundColor: '#334155',
    color: '#ffffff',
    borderColor: 'transparent',
  },
});

// Status Dot Base
export const statusBadge = style({
  position: 'absolute',
  borderRadius: 'var(--radius-control-full, 9999px)',
  border: '2px solid var(--color-surface, #ffffff)',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  pointerEvents: 'none',
  flexShrink: 0,
});

export const statusPositionBottomEnd = style({
  bottom: 0,
  insetInlineEnd: 0,
  transform: 'translate(10%, 10%)',
});

export const statusPositionTopEnd = style({
  top: 0,
  insetInlineEnd: 0,
  transform: 'translate(10%, -10%)',
});

// Status Badge Size Variants
export const statusBadgeSize = styleVariants({
  16: {
    width: '6px',
    height: '6px',
    borderWidth: '1px',
  },
  20: {
    width: '7px',
    height: '7px',
    borderWidth: '1.2px',
  },
  24: {
    width: '8px',
    height: '8px',
    borderWidth: '1.5px',
  },
  28: {
    width: '9px',
    height: '9px',
    borderWidth: '1.5px',
  },
  32: {
    width: '10px',
    height: '10px',
    borderWidth: '2px',
  },
  36: {
    width: '11px',
    height: '11px',
    borderWidth: '2px',
  },
  40: {
    width: '12px',
    height: '12px',
    borderWidth: '2px',
  },
  48: {
    width: '14px',
    height: '14px',
    borderWidth: '2px',
  },
  56: {
    width: '15px',
    height: '15px',
    borderWidth: '2.5px',
  },
  64: {
    width: '16px',
    height: '16px',
    borderWidth: '2.5px',
  },
  72: {
    width: '18px',
    height: '18px',
    borderWidth: '2.5px',
  },
  96: {
    width: '22px',
    height: '22px',
    borderWidth: '3px',
  },
  120: {
    width: '26px',
    height: '26px',
    borderWidth: '3px',
  },
  128: {
    width: '28px',
    height: '28px',
    borderWidth: '3.5px',
  },
  xs: {
    width: '8px',
    height: '8px',
    borderWidth: '1.5px',
  },
  sm: {
    width: '10px',
    height: '10px',
    borderWidth: '2px',
  },
  md: {
    width: '12px',
    height: '12px',
    borderWidth: '2px',
  },
  lg: {
    width: '15px',
    height: '15px',
    borderWidth: '2.5px',
  },
  xl: {
    width: '16px',
    height: '16px',
    borderWidth: '2.5px',
  },
});

// Status Variants
export const statusVariants = styleVariants({
  available: {
    backgroundColor: 'var(--color-feedback-success, #16A34A)',
  },
  online: {
    backgroundColor: 'var(--color-feedback-success, #16A34A)',
  },
  busy: {
    backgroundColor: 'var(--color-feedback-error, #DC2626)',
  },
  away: {
    backgroundColor: 'var(--color-feedback-warning, #D97706)',
  },
  dnd: {
    backgroundColor: 'var(--color-feedback-error, #DC2626)',
    '::after': {
      content: '""',
      display: 'block',
      width: '50%',
      height: '2px',
      backgroundColor: '#ffffff',
      borderRadius: '1px',
    },
  },
  'do-not-disturb': {
    backgroundColor: 'var(--color-feedback-error, #DC2626)',
    '::after': {
      content: '""',
      display: 'block',
      width: '50%',
      height: '2px',
      backgroundColor: '#ffffff',
      borderRadius: '1px',
    },
  },
  'out-of-office': {
    backgroundColor: '#7C3AED',
  },
  oof: {
    backgroundColor: '#7C3AED',
  },
  offline: {
    backgroundColor: 'var(--color-surface, #ffffff)',
    borderStyle: 'solid',
    boxShadow: 'inset 0 0 0 2px var(--color-text-muted, #71717A)',
  },
  'in-meeting': {
    backgroundColor: '#8B5CF6',
  },
  meeting: {
    backgroundColor: '#8B5CF6',
  },
  focus: {
    backgroundColor: '#6366F1',
  },
  idle: {
    backgroundColor: 'var(--color-surface, #ffffff)',
    boxShadow: 'inset 0 0 0 2px #D97706',
  },
  invisible: {
    backgroundColor: 'var(--color-surface, #ffffff)',
    boxShadow: 'inset 0 0 0 2px #71717A',
  },
  streaming: {
    backgroundColor: '#A855F7',
    boxShadow: '0 0 6px rgba(168, 85, 247, 0.6)',
  },
  unknown: {
    backgroundColor: 'var(--color-text-muted, #71717A)',
  },
});

export const oofModifier = style({
  boxShadow: '0 0 0 1.5px #7C3AED',
});

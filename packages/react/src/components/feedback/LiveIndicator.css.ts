import { style, keyframes } from '@vanilla-extract/css';

const pulse = keyframes({
  '0%': { transform: 'scale(0.95)', opacity: 0.8 },
  '50%': { transform: 'scale(1.15)', opacity: 1 },
  '100%': { transform: 'scale(0.95)', opacity: 0.8 },
});

const beacon = keyframes({
  '0%': { transform: 'scale(1)', opacity: 0.75 },
  '100%': { transform: 'scale(2.2)', opacity: 0 },
});

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  verticalAlign: 'middle',
  userSelect: 'none',
});

export const dotWrapper = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const dot = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: 'var(--color-status-success, #10b981)',
  transition: 'transform 0.2s ease, background-color 0.2s ease',
});

export const dotPulse = style({
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
});

export const beaconRing = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: '50%',
  backgroundColor: 'var(--color-status-success, #10b981)',
  animation: `${beacon} 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
  pointerEvents: 'none',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      display: 'none',
    },
  },
});

export const label = style({
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: 'var(--color-text-primary, #0f172a)',
  lineHeight: 1,
});

export const sm = style({
  fontSize: '11px',
});

export const md = style({
  fontSize: '12px',
});

export const lg = style({
  fontSize: '14px',
});

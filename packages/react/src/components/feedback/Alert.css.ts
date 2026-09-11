import { style } from '@vanilla-extract/css';

export const alert = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  padding: '14px 16px',
  borderRadius: 'var(--radius-control-md, 8px)',
  border: '1px solid transparent',
  fontFamily: 'var(--font-primitive-family-sans, sans-serif)',
  fontSize: '14px',
  lineHeight: '20px',
  position: 'relative',
});

export const iconWrapper = style({
  flexShrink: 0,
  marginTop: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const content = style({
  flex: 1,
  minWidth: 0,
});

export const title = style({
  fontWeight: 600,
  fontSize: '14px',
  marginBottom: '2px',
});

export const description = style({
  fontSize: '13px',
  opacity: 0.9,
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexShrink: 0,
  marginLeft: '12px',
});

export const dismissButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
  borderRadius: '4px',
  color: 'inherit',
  opacity: 0.7,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
  },
});

export const info = style({
  backgroundColor: 'rgba(37, 99, 235, 0.08)',
  borderColor: 'rgba(37, 99, 235, 0.25)',
  color: 'var(--color-text-primary)',
});

export const success = style({
  backgroundColor: 'rgba(22, 163, 74, 0.08)',
  borderColor: 'rgba(22, 163, 74, 0.25)',
  color: 'var(--color-text-primary)',
});

export const warning = style({
  backgroundColor: 'rgba(217, 119, 6, 0.08)',
  borderColor: 'rgba(217, 119, 6, 0.25)',
  color: 'var(--color-text-primary)',
});

export const error = style({
  backgroundColor: 'rgba(220, 38, 38, 0.08)',
  borderColor: 'rgba(220, 38, 38, 0.25)',
  color: 'var(--color-text-primary)',
});

import { style } from '@vanilla-extract/css';

export const nav = style({
  display: 'flex',
  alignItems: 'center',
});

export const list = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  gap: '6px',
  fontSize: '13px',
  fontFamily: 'var(--font-primitive-family-sans, sans-serif)',
});

export const item = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'var(--color-text-secondary)',
});

export const separator = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'var(--color-text-muted)',
  userSelect: 'none',
  paddingLeft: '2px',
  paddingRight: '2px',
});

export const current = style({
  fontWeight: 600,
  color: 'var(--color-text-primary)',
});

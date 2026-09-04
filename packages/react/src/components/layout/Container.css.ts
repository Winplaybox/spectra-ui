// packages/react/src/components/layout/Container.css.ts
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  boxSizing: 'border-box',
});

export const centered = style({
  marginInline: 'auto',
});

export const sm = style({
  maxWidth: '640px',
});

export const md = style({
  maxWidth: '768px',
});

export const lg = style({
  maxWidth: '1024px',
});

export const xl = style({
  maxWidth: '1280px',
});

export const full = style({
  maxWidth: '100%',
});

export const paddingNone = style({ padding: '0' });
export const paddingSm = style({ padding: 'var(--space-component-padding-sm)' });
export const paddingMd = style({ padding: 'var(--space-component-padding-md)' });
export const paddingLg = style({ padding: 'var(--space-component-padding-lg)' });

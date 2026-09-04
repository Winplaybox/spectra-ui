// packages/react/src/components/layout/Container.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
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

export const centered = style({
  marginLeft: 'auto',
  marginRight: 'auto',
});

const paddingNone = { padding: 0 };
const paddingSm = { padding: 'var(--space-component-padding-sm)' };
const paddingMd = { padding: 'var(--space-component-padding-md)' };
const paddingLg = { padding: 'var(--space-component-padding-lg)' };

export const paddingVariants = styleVariants({
  'padding-none': paddingNone,
  'padding-sm': paddingSm,
  'padding-md': paddingMd,
  'padding-lg': paddingLg,
});

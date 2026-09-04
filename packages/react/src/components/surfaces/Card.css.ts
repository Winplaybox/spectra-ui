// packages/react/src/components/surfaces/Card.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const card = style({
  backgroundColor: 'var(--color-surface-raised)',
  borderRadius: 'var(--radius-component-md)',
  transition: 'all var(--motion-subtle)',
});

const paddingNone = { padding: 0 };
const paddingSm = { padding: 'var(--space-component-padding-sm)' };
const paddingMd = { padding: 'var(--space-component-padding-md)' };
const paddingLg = { padding: 'var(--space-component-padding-lg)' };

export const paddingVariants = styleVariants({
  none: paddingNone,
  sm: paddingSm,
  md: paddingMd,
  lg: paddingLg,
});

export const default = style({
  border: '1px solid var(--color-border-subtle)',
});

export const bordered = style({
  border: '1px solid var(--color-border-default)',
});

export const elevated = style({
  border: 'none',
  boxShadow: 'var(--elevation-raised)',
});

export const interactive = style({
  cursor: 'pointer',
  ':hover': {
    boxShadow: 'var(--elevation-overlay)',
  },
  ':focus-visible': {
    outline: '2px solid var(--color-action-primary)',
    outlineOffset: '2px',
  },
});

// packages/react/src/components/surfaces/Card.css.ts
import { style } from '@vanilla-extract/css';

export const card = style({
  backgroundColor: 'var(--color-surface-raised)',
  borderRadius: 'var(--radius-component-md)',
  transition: 'all var(--motion-subtle)',
});

export const paddingNone = style({
  padding: '0',
});

export const paddingSm = style({
  padding: 'var(--space-component-padding-sm)',
});

export const paddingMd = style({
  padding: 'var(--space-component-padding-md)',
});

export const paddingLg = style({
  padding: 'var(--space-component-padding-lg)',
});

export const defaultVariant = style({
  border: '1px solid var(--color-border-subtle)',
});

export const bordered = style({
  border: '1px solid var(--color-border-default)',
});

export const elevated = style({
  border: '1px solid var(--color-border-default)',
  boxShadow: 'var(--elevation-raised)',
});

export const interactive = style({
  cursor: 'pointer',
  ':hover': {
    borderColor: 'var(--color-border-strong)',
  },
  ':focus-visible': {
    outline: '2px solid var(--color-action-primary)',
    outlineOffset: '2px',
  },
});

export const header = style({
  paddingBottom: 'var(--space-component-gap-xs)',
});

export const title = style({
  fontSize: 'var(--fontSize-semantic-heading-md, var(--font-size-heading-md))',
  fontWeight: 'var(--font-primitive-weight-semibold, var(--font-weight-semibold))',
  color: 'var(--color-text-primary)',
  margin: '0',
});

export const description = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-text-muted)',
  margin: '0',
});

export const body = style({
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
  color: 'var(--color-text-primary)',
});

export const footer = style({
  paddingTop: 'var(--space-component-gap-sm)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 'var(--space-component-gap-xs)',
});

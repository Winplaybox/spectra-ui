// packages/react/src/components/layout/Text.css.ts
import { style } from '@vanilla-extract/css';

export const text = style({
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  margin: 0,
  padding: 0,
});

export const xs = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  lineHeight: 'var(--lineHeight-primitive-tight, 1.25)',
});

export const sm = style({
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
  lineHeight: 'var(--lineHeight-primitive-normal, 1.5)',
});

export const md = style({
  fontSize: 'var(--fontSize-semantic-body-md, var(--font-size-body-md))',
  lineHeight: 'var(--lineHeight-primitive-normal, 1.5)',
});

export const lg = style({
  fontSize: 'var(--fontSize-semantic-body-lg, var(--font-size-body-lg))',
  lineHeight: 'var(--lineHeight-primitive-relaxed, 1.75)',
});

export const xl = style({
  fontSize: 'var(--fontSize-semantic-heading-md, var(--font-size-heading-md))',
  lineHeight: 'var(--lineHeight-primitive-relaxed, 1.75)',
});

export const regular = style({
  fontWeight: 'var(--font-primitive-weight-regular, var(--font-weight-regular))',
});

export const medium = style({
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
});

export const semibold = style({
  fontWeight: 'var(--font-primitive-weight-semibold, var(--font-weight-semibold))',
});

export const bold = style({
  fontWeight: 'var(--font-primitive-weight-bold, var(--font-weight-bold))',
});

export const primary = style({
  color: 'var(--color-text-primary)',
});

export const secondary = style({
  color: 'var(--color-text-secondary)',
});

export const muted = style({
  color: 'var(--color-text-muted)',
});

export const inverse = style({
  color: 'var(--color-text-inverse)',
});

export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

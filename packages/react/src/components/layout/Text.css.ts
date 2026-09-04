// packages/react/src/components/layout/Text.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const text = style({
  fontFamily: 'var(--font-family-sans)',
  margin: 0,
  padding: 0,
});

export const xs = style({
  fontSize: 'var(--font-size-body-xs)',
  lineHeight: 'var(--line-height-tight)',
});

export const sm = style({
  fontSize: 'var(--font-size-body-sm)',
  lineHeight: 'var(--line-height-normal)',
});

export const md = style({
  fontSize: 'var(--font-size-body-md)',
  lineHeight: 'var(--line-height-normal)',
});

export const lg = style({
  fontSize: 'var(--font-size-body-lg)',
  lineHeight: 'var(--line-height-relaxed)',
});

export const xl = style({
  fontSize: '1.25rem',
  lineHeight: 'var(--line-height-relaxed)',
});

export const regular = style({
  fontWeight: 'var(--font-weight-regular)',
});

export const medium = style({
  fontWeight: 'var(--font-weight-medium)',
});

export const semibold = style({
  fontWeight: 'var(--font-weight-semibold)',
});

export const bold = style({
  fontWeight: 'var(--font-weight-bold)',
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

// packages/react/src/components/layout/Stack.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const stack = style({
  display: 'flex',
  boxSizing: 'border-box',
});

export const row = style({
  flexDirection: 'row',
});

export const column = style({
  flexDirection: 'column',
});

export const flex = style({
  flex: 1,
});

export const wrap = style({
  flexWrap: 'wrap',
});

const alignStart = { alignItems: 'flex-start' };
const alignCenter = { alignItems: 'center' };
const alignEnd = { alignItems: 'flex-end' };
const alignStretch = { alignItems: 'stretch' };

export const alignVariants = styleVariants({
  'align-start': alignStart,
  'align-center': alignCenter,
  'align-end': alignEnd,
  'align-stretch': alignStretch,
});

const justifyStart = { justifyContent: 'flex-start' };
const justifyCenter = { justifyContent: 'center' };
const justifyEnd = { justifyContent: 'flex-end' };
const justifyBetween = { justifyContent: 'space-between' };
const justifyAround = { justifyContent: 'space-around' };

export const justifyVariants = styleVariants({
  'justify-start': justifyStart,
  'justify-center': justifyCenter,
  'justify-end': justifyEnd,
  'justify-between': justifyBetween,
  'justify-around': justifyAround,
});

const gapXs = { gap: 'var(--space-component-gap-xs)' };
const gapSm = { gap: 'var(--space-component-gap-sm)' };
const gapMd = { gap: 'var(--space-component-gap-md)' };
const gapLg = { gap: 'var(--space-component-gap-lg)' };
const gapXl = { gap: 'var(--space-component-gap-xl)' };

export const gapVariants = styleVariants({
  'gap-xs': gapXs,
  'gap-sm': gapSm,
  'gap-md': gapMd,
  'gap-lg': gapLg,
  'gap-xl': gapXl,
});

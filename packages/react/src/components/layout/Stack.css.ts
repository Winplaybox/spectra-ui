// packages/react/src/components/layout/Stack.css.ts
import { style } from '@vanilla-extract/css';

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

export const alignStart = style({ alignItems: 'flex-start' });
export const alignCenter = style({ alignItems: 'center' });
export const alignEnd = style({ alignItems: 'flex-end' });
export const alignStretch = style({ alignItems: 'stretch' });

export const justifyStart = style({ justifyContent: 'flex-start' });
export const justifyCenter = style({ justifyContent: 'center' });
export const justifyEnd = style({ justifyContent: 'flex-end' });
export const justifyBetween = style({ justifyContent: 'space-between' });
export const justifyAround = style({ justifyContent: 'space-around' });

export const gapXs = style({ gap: 'var(--space-component-gap-xs)' });
export const gapSm = style({ gap: 'var(--space-component-gap-sm)' });
export const gapMd = style({ gap: 'var(--space-component-gap-md)' });
export const gapLg = style({ gap: 'var(--space-component-gap-lg)' });
export const gapXl = style({ gap: 'var(--space-component-gap-xl)' });

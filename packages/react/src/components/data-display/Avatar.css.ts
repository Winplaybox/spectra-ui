import { style } from '@vanilla-extract/css';

export const avatar = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--color-surface-raised)',
  color: 'var(--color-text-primary)',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  fontWeight: 'var(--font-primitive-weight-semibold, var(--font-weight-semibold))',
  overflow: 'hidden',
  userSelect: 'none',
  flexShrink: 0,
  border: '1px solid var(--color-border-subtle)',
});

export const circle = style({
  borderRadius: 'var(--radius-control-full)',
});

export const square = style({
  borderRadius: 'var(--radius-component-md)',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const xs = style({
  width: '24px',
  height: '24px',
  fontSize: '0.625rem',
});

export const sm = style({
  width: '32px',
  height: '32px',
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
});

export const md = style({
  width: '40px',
  height: '40px',
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
});

export const lg = style({
  width: '48px',
  height: '48px',
  fontSize: 'var(--fontSize-semantic-body-md, var(--font-size-body-md))',
});

export const xl = style({
  width: '64px',
  height: '64px',
  fontSize: 'var(--fontSize-semantic-heading-sm, var(--font-size-heading-sm))',
});

export const statusDot = style({
  position: 'absolute',
  bottom: 0,
  insetInlineEnd: 0,
  borderRadius: 'var(--radius-control-full)',
  border: '2px solid var(--color-surface)',
});

export const statusXs = style({
  width: '6px',
  height: '6px',
});

export const statusSm = style({
  width: '8px',
  height: '8px',
});

export const statusMd = style({
  width: '10px',
  height: '10px',
});

export const statusLg = style({
  width: '12px',
  height: '12px',
});

export const statusXl = style({
  width: '14px',
  height: '14px',
});

export const online = style({
  backgroundColor: 'var(--color-feedback-success)',
});

export const offline = style({
  backgroundColor: 'var(--color-text-muted)',
});

export const busy = style({
  backgroundColor: 'var(--color-feedback-error)',
});

export const away = style({
  backgroundColor: 'var(--color-feedback-warning)',
});

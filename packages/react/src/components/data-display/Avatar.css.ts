import { style } from '@vanilla-extract/css';

export const avatar = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-primary)',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  fontWeight: 'var(--font-primitive-weight-semibold, var(--font-weight-semibold))',
  overflow: 'visible',
  userSelect: 'none',
  flexShrink: 0,
});

export const inner = style({
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--color-surface-raised)',
  border: '1px solid var(--color-border-subtle)',
  boxSizing: 'border-box',
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
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  pointerEvents: 'none',
});

export const statusXs = style({
  width: '8px',
  height: '8px',
  borderWidth: '1.5px',
});

export const statusSm = style({
  width: '10px',
  height: '10px',
  borderWidth: '2px',
});

export const statusMd = style({
  width: '12px',
  height: '12px',
  borderWidth: '2px',
});

export const statusLg = style({
  width: '14px',
  height: '14px',
  borderWidth: '2px',
});

export const statusXl = style({
  width: '18px',
  height: '18px',
  borderWidth: '2.5px',
});

export const online = style({
  backgroundColor: 'var(--color-feedback-success, #10B981)',
});

export const offline = style({
  backgroundColor: 'var(--color-text-muted, #6B7280)',
});

export const busy = style({
  backgroundColor: 'var(--color-feedback-error, #EF4444)',
});

export const away = style({
  backgroundColor: 'var(--color-feedback-warning, #F59E0B)',
});

export const dnd = style({
  backgroundColor: 'var(--color-feedback-error, #EF4444)',
  '::after': {
    content: '""',
    display: 'block',
    width: '50%',
    height: '2px',
    backgroundColor: '#ffffff',
    borderRadius: '1px',
  },
});

export const inMeeting = style({
  backgroundColor: '#8B5CF6',
});

export const meeting = inMeeting;

export const focus = style({
  backgroundColor: '#6366F1',
});

export const idle = style({
  backgroundColor: 'var(--color-surface)',
  boxShadow: 'inset 0 0 0 2.5px var(--color-feedback-warning, #F59E0B)',
});

export const invisible = style({
  backgroundColor: 'var(--color-surface)',
  boxShadow: 'inset 0 0 0 2px var(--color-text-muted, #6B7280)',
});

export const streaming = style({
  backgroundColor: '#A855F7',
  boxShadow: '0 0 6px rgba(168, 85, 247, 0.6)',
});


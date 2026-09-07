import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'inline-flex',
});

export const tooltip = style({
  position: 'absolute',
  zIndex: 1000,
  paddingBlock: 'var(--space-component-padding-xs)',
  paddingInline: 'var(--space-component-padding-sm)',
  backgroundColor: 'var(--color-text-primary)',
  color: 'var(--color-text-inverse)',
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  borderRadius: 'var(--radius-component-sm)',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  transition: 'opacity var(--motion-subtle), transform var(--motion-subtle)',
});

export const top = style({
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-6px)',
});

export const bottom = style({
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%) translateY(6px)',
});

export const left = style({
  right: '100%',
  top: '50%',
  transform: 'translateY(-50%) translateX(-6px)',
});

export const right = style({
  left: '100%',
  top: '50%',
  transform: 'translateY(-50%) translateX(6px)',
});

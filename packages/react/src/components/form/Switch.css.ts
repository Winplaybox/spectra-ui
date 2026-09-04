// packages/react/src/components/form/Switch.css.ts
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: 'var(--space-component-gap-sm)',
  cursor: 'pointer',
  userSelect: 'none',
});

export const control = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: 'var(--radius-control-full)',
  backgroundColor: 'var(--color-border-default)',
  transition: 'background-color var(--motion-subtle)',
  border: '1px solid transparent',
  ':focus-visible': {
    boxShadow: '0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-action-primary)',
  },
});

export const controlChecked = style({
  backgroundColor: 'var(--color-action-primary)',
});

export const controlDisabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
});

export const thumb = style({
  position: 'absolute',
  backgroundColor: 'var(--color-text-inverse)',
  borderRadius: 'var(--radius-control-full)',
  boxShadow: '0 1px 2px 0 var(--color-border-default)',
  transition: 'transform var(--motion-subtle)',
  pointerEvents: 'none',
});

export const smControl = style({
  width: '32px',
  height: '18px',
});

export const smThumb = style({
  width: '14px',
  height: '14px',
  insetInlineStart: '2px',
});

export const smThumbChecked = style({
  transform: 'translateX(14px)',
});

export const mdControl = style({
  width: '44px',
  height: '24px',
});

export const mdThumb = style({
  width: '20px',
  height: '20px',
  insetInlineStart: '2px',
});

export const mdThumbChecked = style({
  transform: 'translateX(20px)',
});

export const lgControl = style({
  width: '56px',
  height: '30px',
});

export const lgThumb = style({
  width: '26px',
  height: '26px',
  insetInlineStart: '2px',
});

export const lgThumbChecked = style({
  transform: 'translateX(26px)',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-component-gap-xs)',
});

export const label = style({
  fontSize: 'var(--fontSize-semantic-label-sm, var(--font-size-label-sm))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  color: 'var(--color-text-primary)',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-component-gap-xs)',
});

export const required = style({
  color: 'var(--color-feedback-error)',
});

export const description = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-text-muted)',
});

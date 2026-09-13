import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: 'var(--space-component-gap-sm)',
  cursor: 'pointer',
  userSelect: 'none',
  selectors: {
    '&[data-disabled="true"]': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },
});

export const input = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
  margin: 0,
  padding: 0,
  pointerEvents: 'none',
});

export const box = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--radius-component-sm)',
  border: '1.5px solid var(--color-border-strong)',
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-text-on-action, #ffffff)',
  transition: 'all var(--motion-subtle)',
  flexShrink: 0,
  selectors: {
    [`${wrapper}:hover:not([data-disabled="true"]) &`]: {
      borderColor: 'var(--color-action-primary)',
    },
    [`${input}:focus-visible + &`]: {
      boxShadow: '0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-action-primary)',
    },
    '&[data-checked="true"], &[data-indeterminate="true"]': {
      backgroundColor: 'var(--color-action-primary)',
      borderColor: 'var(--color-action-primary)',
    },
    '&[data-error="true"]': {
      borderColor: 'var(--color-feedback-error)',
    },
  },
});

export const sm = style({
  width: '16px',
  height: '16px',
});

export const md = style({
  width: '20px',
  height: '20px',
});

export const lg = style({
  width: '24px',
  height: '24px',
});

export const labelContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-component-gap-xs)',
});

export const label = style({
  fontSize: 'var(--fontSize-semantic-label-sm, var(--font-size-label-sm))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  color: 'var(--color-text-primary)',
  lineHeight: '1.25',
});

export const description = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-text-muted)',
});

export const error = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-feedback-error)',
});

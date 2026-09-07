import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-component-gap-xs)',
  width: '100%',
});

export const label = style({
  fontSize: 'var(--fontSize-semantic-label-sm, var(--font-size-label-sm))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  color: 'var(--color-text-primary)',
});

export const selectContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const select = style({
  width: '100%',
  appearance: 'none',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-component-md)',
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-text-primary)',
  transition: 'all var(--motion-subtle)',
  outline: 'none',
  paddingInlineEnd: 'var(--space-component-padding-xl)',
  cursor: 'pointer',
  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: 'var(--color-border-strong)',
    },
    '&:focus': {
      borderColor: 'var(--color-action-primary)',
      boxShadow: '0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-action-primary)',
    },
    '&:disabled': {
      backgroundColor: 'var(--color-surface-raised)',
      color: 'var(--color-text-muted)',
      cursor: 'not-allowed',
    },
    '&[data-error="true"]': {
      borderColor: 'var(--color-feedback-error)',
    },
  },
});

export const sm = style({
  paddingBlock: 'var(--space-component-padding-xs)',
  paddingInlineStart: 'var(--space-component-padding-sm)',
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
});

export const md = style({
  paddingBlock: 'var(--space-component-padding-xs)',
  paddingInlineStart: 'var(--space-component-padding-md)',
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
});

export const lg = style({
  paddingBlock: 'var(--space-component-padding-sm)',
  paddingInlineStart: 'var(--space-component-padding-lg)',
  fontSize: 'var(--fontSize-semantic-body-md, var(--font-size-body-md))',
});

export const icon = style({
  position: 'absolute',
  insetInlineEnd: 'var(--space-component-padding-sm)',
  pointerEvents: 'none',
  color: 'var(--color-text-muted)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const description = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-text-muted)',
});

export const error = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-feedback-error)',
});

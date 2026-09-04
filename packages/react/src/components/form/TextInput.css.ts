// packages/react/src/components/form/TextInput.css.ts
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-component-gap-xs)',
  width: '100%',
});

export const fullWidth = style({
  width: '100%',
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

export const inputWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const input = style({
  width: '100%',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-component-md)',
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-text-primary)',
  transition: 'all var(--motion-subtle)',
  outline: 'none',
  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: 'var(--color-border-strong)',
    },
  },
  ':focus': {
    borderColor: 'var(--color-action-primary)',
    boxShadow: '0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-action-primary)',
  },
  ':disabled': {
    backgroundColor: 'var(--color-surface-raised)',
    color: 'var(--color-text-muted)',
    cursor: 'not-allowed',
  },
  '::placeholder': {
    color: 'var(--color-text-muted)',
  },
});

export const defaultVariant = style({
  border: '1px solid var(--color-border-default)',
});

export const filled = style({
  backgroundColor: 'var(--color-surface-raised)',
  border: '1px solid transparent',
  ':focus': {
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-action-primary)',
  },
});

export const outlined = style({
  border: '2px solid var(--color-border-default)',
  ':focus': {
    borderColor: 'var(--color-action-primary)',
  },
});

export const sm = style({
  paddingBlock: 'var(--space-component-padding-xs)',
  paddingInline: 'var(--space-component-padding-sm)',
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
});

export const md = style({
  paddingBlock: 'var(--space-component-padding-xs)',
  paddingInline: 'var(--space-component-padding-md)',
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
});

export const lg = style({
  paddingBlock: 'var(--space-component-padding-sm)',
  paddingInline: 'var(--space-component-padding-lg)',
  fontSize: 'var(--fontSize-semantic-body-md, var(--font-size-body-md))',
});

export const hasIconLeft = style({
  paddingInlineStart: 'var(--space-component-padding-xl)',
});

export const hasIconRight = style({
  paddingInlineEnd: 'var(--space-component-padding-xl)',
});

export const icon = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-muted)',
  pointerEvents: 'none',
});

export const iconLeft = style({
  insetInlineStart: 'var(--space-component-padding-sm)',
});

export const iconRight = style({
  insetInlineEnd: 'var(--space-component-padding-sm)',
});

export const errorInput = style({
  borderColor: 'var(--color-feedback-error)',
  ':focus': {
    borderColor: 'var(--color-feedback-error)',
    boxShadow: '0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-feedback-error)',
  },
});

export const error = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-feedback-error)',
});

export const description = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-text-muted)',
});

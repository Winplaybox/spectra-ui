import { style } from '@vanilla-extract/css';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-component-gap-xs)',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  borderRadius: 'var(--radius-control-full)',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  lineHeight: 1,
  border: '1px solid transparent',
});

export const sm = style({
  paddingBlock: '2px',
  paddingInline: 'var(--space-component-padding-xs)',
  fontSize: '0.6875rem',
});

export const md = style({
  paddingBlock: 'var(--space-component-padding-xs)',
  paddingInline: 'var(--space-component-padding-sm)',
  fontSize: 'var(--fontSize-semantic-label-xs, var(--font-size-label-xs))',
});

export const lg = style({
  paddingBlock: 'var(--space-component-padding-xs)',
  paddingInline: 'var(--space-component-padding-md)',
  fontSize: 'var(--fontSize-semantic-label-sm, var(--font-size-label-sm))',
});

export const defaultVariant = style({
  backgroundColor: 'var(--color-surface-raised)',
  color: 'var(--color-text-primary)',
  borderColor: 'var(--color-border-default)',
});

export const primary = style({
  backgroundColor: 'var(--color-action-primary)',
  color: 'var(--color-text-inverse)',
});

export const success = style({
  backgroundColor: 'var(--color-feedback-success-light)',
  color: 'var(--color-feedback-success)',
  borderColor: 'var(--color-feedback-success)',
});

export const warning = style({
  backgroundColor: 'var(--color-feedback-warning-light)',
  color: 'var(--color-feedback-warning)',
  borderColor: 'var(--color-feedback-warning)',
});

export const error = style({
  backgroundColor: 'var(--color-feedback-error-light)',
  color: 'var(--color-feedback-error)',
  borderColor: 'var(--color-feedback-error)',
});

export const info = style({
  backgroundColor: 'var(--color-feedback-info-light)',
  color: 'var(--color-feedback-info)',
  borderColor: 'var(--color-feedback-info)',
});

export const dot = style({
  width: '6px',
  height: '6px',
  borderRadius: 'var(--radius-control-full)',
  backgroundColor: 'currentColor',
});

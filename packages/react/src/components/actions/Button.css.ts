// packages/react/src/components/actions/Button.css.ts
import { style, keyframes } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-component-gap-sm)',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-component-md)',
  cursor: 'pointer',
  transition: 'all var(--motion-subtle)',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  selectors: {
    '&:hover:not(:disabled)': {
      opacity: 0.95,
    },
    '&:focus-visible': {
      boxShadow: '0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-action-primary)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },
});

export const primary = style({
  backgroundColor: 'var(--color-action-primary)',
  color: 'var(--color-text-on-action, #ffffff)',
  borderColor: 'var(--color-action-primary)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-action-primary-hover)',
      borderColor: 'var(--color-action-primary-hover)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--color-action-primary-active)',
      borderColor: 'var(--color-action-primary-active)',
    },
  },
});

export const secondary = style({
  backgroundColor: 'var(--color-surface-raised)',
  color: 'var(--color-text-primary)',
  borderColor: 'var(--color-border-default)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-surface)',
      borderColor: 'var(--color-border-strong)',
    },
  },
});

export const tertiary = style({
  backgroundColor: 'transparent',
  color: 'var(--color-action-primary)',
  borderColor: 'transparent',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-feedback-info-light)',
    },
  },
});

export const danger = style({
  backgroundColor: 'var(--color-feedback-error)',
  color: 'var(--color-text-on-action, #ffffff)',
  borderColor: 'var(--color-feedback-error)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-feedback-error)',
      opacity: 0.9,
    },
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

export const fullWidth = style({
  width: '100%',
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const spinner = style({
  display: 'inline-block',
  animation: `${spin} 1s linear infinite`,
});

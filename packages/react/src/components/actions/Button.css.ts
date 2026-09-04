// packages/react/src/components/actions/Button.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  fontFamily: 'var(--font-family-sans)',
  fontWeight: 'var(--font-weight-medium)',
  border: 'none',
  borderRadius: 'var(--radius-component-md)',
  cursor: 'pointer',
  transition: 'all var(--motion-subtle)',
  outline: 'none',
  ':hover:not(:disabled)': {
    transform: 'translateY(-1px)',
  },
  ':focus-visible': {
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
  },
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
});

export const primary = style({
  backgroundColor: 'var(--color-action-primary)',
  color: '#FFFFFF',
  ':hover:not(:disabled)': {
    backgroundColor: 'var(--color-action-primary-hover)',
  },
  ':active:not(:disabled)': {
    backgroundColor: 'var(--color-action-primary-active)',
  },
});

export const secondary = style({
  backgroundColor: 'var(--color-surface-raised)',
  color: 'var(--color-text-primary)',
  border: '1px solid var(--color-border-default)',
  ':hover:not(:disabled)': {
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-border-strong)',
  },
});

export const tertiary = style({
  backgroundColor: 'transparent',
  color: 'var(--color-action-primary)',
  ':hover:not(:disabled)': {
    backgroundColor: 'rgba(37, 99, 235, 0.05)',
  },
});

export const danger = style({
  backgroundColor: 'var(--color-feedback-error)',
  color: '#FFFFFF',
  ':hover:not(:disabled)': {
    backgroundColor: 'var(--color-feedback-error)',
    opacity: 0.9,
  },
});

export const sm = style({
  padding: '0.375rem 0.75rem',
  fontSize: 'var(--font-size-body-sm)',
});

export const md = style({
  padding: '0.5rem 1rem',
  fontSize: 'var(--font-size-body-md)',
});

export const lg = style({
  padding: '0.75rem 1.5rem',
  fontSize: 'var(--font-size-body-lg)',
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
  animation: 'spin 1s linear infinite',
  '@keyframes': {
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
});

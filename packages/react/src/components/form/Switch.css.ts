// packages/react/src/components/form/Switch.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
});

export const control = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
});

export const input = style({
  appearance: 'none',
  WebkitAppearance: 'none',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  margin: 0,
  padding: 0,
  background: 'var(--color-border-default)',
  border: 'none',
  borderRadius: '9999px',
  transition: 'background-color var(--motion-subtle)',
  ':focus-visible ~ .thumb': {
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
  },
  ':checked': {
    backgroundColor: 'var(--color-action-primary)',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const thumb = style({
  position: 'absolute',
  backgroundColor: '#FFFFFF',
  borderRadius: '50%',
  transition: 'left var(--motion-subtle)',
  pointerEvents: 'none',
});

export const sm = style({
  width: '2rem',
  height: '1rem',
  input: {
    ':checked ~ &': {
      left: 'calc(100% - 1rem)',
    },
  },
});

export const md = style({
  width: '2.5rem',
  height: '1.25rem',
  input: {
    ':checked ~ &': {
      left: 'calc(100% - 1.25rem)',
    },
  },
});

export const lg = style({
  width: '3rem',
  height: '1.5rem',
  input: {
    ':checked ~ &': {
      left: 'calc(100% - 1.5rem)',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  paddingTop: '0.25rem',
});

export const label = style({
  fontSize: 'var(--font-size-label-sm)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-primary)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const required = style({
  color: 'var(--color-feedback-error)',
});

export const description = style({
  fontSize: 'var(--font-size-body-xs)',
  color: 'var(--color-text-muted)',
});

// packages/react/src/components/form/TextInput.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  width: '100%',
});

export const fullWidth = style({
  width: '100%',
});

export const label = style({
  fontSize: 'var(--font-size-label-sm)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-primary)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
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
  fontFamily: 'var(--font-family-sans)',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-component-md)',
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-text-primary)',
  transition: 'all var(--motion-subtle)',
  outline: 'none',
  ':hover:not(:disabled)': {
    borderColor: 'var(--color-border-strong)',
  },
  ':focus': {
    borderColor: 'var(--color-action-primary)',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
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

export const sm = style({
  padding: '0.375rem 0.75rem',
  fontSize: 'var(--font-size-body-sm)',
  minHeight: '2rem',
});

export const md = style({
  padding: '0.5rem 1rem',
  fontSize: 'var(--font-size-body-md)',
  minHeight: '2.5rem',
});

export const lg = style({
  padding: '0.75rem 1.25rem',
  fontSize: 'var(--font-size-body-lg)',
  minHeight: '3rem',
});

export const default_ = style({});

export const filled = style({
  backgroundColor: 'var(--color-surface-raised)',
  borderColor: 'transparent',
  ':hover:not(:disabled)': {
    backgroundColor: 'var(--color-surface-raised)',
  },
});

export const flushed = style({
  border: 'none',
  borderBottom: '2px solid var(--color-border-default)',
  borderRadius: 0,
  backgroundColor: 'transparent',
  paddingLeft: 0,
  paddingRight: 0,
  ':focus': {
    borderBottomColor: 'var(--color-action-primary)',
    boxShadow: 'none',
  },
});

export const error = style({
  borderColor: 'var(--color-feedback-error)',
  ':focus': {
    borderColor: 'var(--color-feedback-error)',
    boxShadow: '0 0 0 3px var(--color-feedback-error-light)',
  },
});

export const withLeftIcon = style({
  paddingLeft: '2.5rem',
});

export const withRightIcon = style({
  paddingRight: '2.5rem',
});

export const leftIcon = style({
  position: 'absolute',
  left: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.5rem',
  height: '1.5rem',
  color: 'var(--color-text-muted)',
  pointerEvents: 'none',
});

export const rightIcon = style({
  position: 'absolute',
  right: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.5rem',
  height: '1.5rem',
  color: 'var(--color-text-muted)',
  pointerEvents: 'none',
});

export const description = style({
  fontSize: 'var(--font-size-body-xs)',
  color: 'var(--color-text-muted)',
  marginTop: '-0.25rem',
});

export const errorText = style({
  fontSize: 'var(--font-size-body-xs)',
  color: 'var(--color-feedback-error)',
  marginTop: '-0.25rem',
});

// Re-export with underscore removed for variant usage
export const variant = styleVariants({
  default: default_,
  filled,
  flushed,
});

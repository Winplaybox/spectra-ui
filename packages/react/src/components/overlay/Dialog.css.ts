// packages/react/src/components/overlay/Dialog.css.ts
import { style, keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const scaleIn = keyframes({
  from: { opacity: 0, transform: 'scale(0.96)' },
  to: { opacity: 1, transform: 'scale(1)' },
});

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'var(--color-surface-overlay)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--space-layout-gutter)',
  zIndex: 1000,
  animation: `${fadeIn} var(--motion-subtle)`,
});

export const content = style({
  position: 'relative',
  width: '100%',
  maxWidth: '520px',
  backgroundColor: 'var(--color-surface)',
  borderRadius: 'var(--radius-component-lg)',
  border: '1px solid var(--color-border-default)',
  boxShadow: 'var(--elevation-overlay)',
  padding: 'var(--space-component-padding-lg)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-component-gap-md)',
  outline: 'none',
  animation: `${scaleIn} var(--motion-emphasis)`,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-component-gap-xs)',
});

export const title = style({
  fontSize: 'var(--fontSize-semantic-heading-lg, var(--font-size-heading-lg))',
  fontWeight: 'var(--font-primitive-weight-semibold, var(--font-weight-semibold))',
  color: 'var(--color-text-primary)',
  margin: 0,
});

export const description = style({
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
  color: 'var(--color-text-muted)',
  margin: 0,
});

export const body = style({
  fontSize: 'var(--fontSize-semantic-body-md, var(--font-size-body-md))',
  color: 'var(--color-text-primary)',
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 'var(--space-component-gap-sm)',
  paddingTop: 'var(--space-component-gap-xs)',
});

export const closeButton = style({
  position: 'absolute',
  top: 'var(--space-component-padding-md)',
  insetInlineEnd: 'var(--space-component-padding-md)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: 'var(--radius-component-sm)',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'var(--color-text-muted)',
  cursor: 'pointer',
  transition: 'all var(--motion-subtle)',
  ':hover': {
    backgroundColor: 'var(--color-surface-raised)',
    color: 'var(--color-text-primary)',
  },
  ':focus-visible': {
    boxShadow: '0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-action-primary)',
  },
});

import { style } from '@vanilla-extract/css';

export const accordion = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '1px solid var(--color-border-default)',
  borderRadius: 'var(--radius-component-md)',
  backgroundColor: 'var(--color-surface)',
  overflow: 'hidden',
});

export const accordionItem = style({
  borderBottom: '1px solid var(--color-border-subtle)',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const accordionHeader = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 'var(--space-component-padding-md)',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  fontSize: 'var(--fontSize-semantic-body-md, var(--font-size-body-md))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  color: 'var(--color-text-primary)',
  cursor: 'pointer',
  transition: 'background-color var(--motion-subtle), color var(--motion-subtle)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-surface-hover)',
    },
    '&:focus-visible': {
      outline: '2px solid var(--color-action-primary)',
      outlineOffset: '-2px',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
});

export const chevron = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform var(--motion-subtle)',
  color: 'var(--color-text-secondary)',
  selectors: {
    '&[data-expanded="true"]': {
      transform: 'rotate(90deg)',
    },
  },
});

export const accordionPanel = style({
  padding: 'var(--space-component-padding-md)',
  paddingTop: '0',
  color: 'var(--color-text-secondary)',
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
  lineHeight: 1.6,
  backgroundColor: 'var(--color-surface)',
});

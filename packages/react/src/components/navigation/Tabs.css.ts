import { style } from '@vanilla-extract/css';

export const tabs = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const tabList = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  gap: 'var(--space-component-gap-xs)',
});

export const underlineList = style({
  borderBottom: '1px solid var(--color-border-default)',
  gap: 'var(--space-component-gap-md)',
});

export const pillsList = style({
  backgroundColor: 'var(--color-surface-raised)',
  padding: 'var(--space-component-padding-xs)',
  borderRadius: 'var(--radius-component-md)',
  border: '1px solid var(--color-border-subtle)',
});

export const tab = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-component-gap-xs)',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  transition: 'all var(--motion-subtle)',
  whiteSpace: 'nowrap',
  color: 'var(--color-text-secondary)',
  selectors: {
    '&:hover:not(:disabled)': {
      color: 'var(--color-text-primary)',
    },
    '&:focus-visible': {
      boxShadow: '0 0 0 2px var(--color-surface), 0 0 0 4px var(--color-action-primary)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export const underlineTab = style({
  paddingBlock: 'var(--space-component-padding-sm)',
  paddingInline: 'var(--space-component-padding-xs)',
  borderBottom: '2px solid transparent',
  marginBottom: '-1px',
  selectors: {
    '&[data-selected="true"]': {
      color: 'var(--color-action-primary)',
      borderBottomColor: 'var(--color-action-primary)',
    },
  },
});

export const pillsTab = style({
  paddingBlock: 'var(--space-component-padding-xs)',
  paddingInline: 'var(--space-component-padding-md)',
  borderRadius: 'var(--radius-component-sm)',
  selectors: {
    '&[data-selected="true"]': {
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-text-primary)',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
});

export const sm = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
});

export const md = style({
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
});

export const lg = style({
  fontSize: 'var(--fontSize-semantic-body-md, var(--font-size-body-md))',
});

export const tabPanel = style({
  paddingTop: 'var(--space-component-padding-md)',
  outline: 'none',
  selectors: {
    '&:focus-visible': {
      boxShadow: '0 0 0 2px var(--color-action-primary)',
    },
  },
});

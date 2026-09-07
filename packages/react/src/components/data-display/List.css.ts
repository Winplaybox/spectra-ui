import { style } from '@vanilla-extract/css';

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: 0,
  margin: 0,
  listStyle: 'none',
  backgroundColor: 'var(--color-surface)',
  borderRadius: 'var(--radius-component-md)',
  border: '1px solid var(--color-border-default)',
  overflow: 'hidden',
});

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  paddingBlock: 'var(--space-component-padding-sm)',
  paddingInline: 'var(--space-component-padding-md)',
  gap: 'var(--space-component-gap-sm)',
  borderBottom: '1px solid var(--color-border-subtle)',
  transition: 'background-color var(--motion-subtle)',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    '&[data-interactive="true"]': {
      cursor: 'pointer',
    },
    '&[data-interactive="true"]:hover': {
      backgroundColor: 'var(--color-surface-raised)',
    },
    '&[data-disabled="true"]': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export const itemIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-secondary)',
  flexShrink: 0,
});

export const itemContent = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '2px',
});

export const itemTitle = style({
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium))',
  color: 'var(--color-text-primary)',
  lineHeight: 1.25,
});

export const itemSubtitle = style({
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs))',
  color: 'var(--color-text-muted)',
});

export const itemAction = style({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-component-gap-xs)',
  color: 'var(--color-text-muted)',
  flexShrink: 0,
});

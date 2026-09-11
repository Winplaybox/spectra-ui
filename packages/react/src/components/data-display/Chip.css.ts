import { style } from '@vanilla-extract/css';

export const chip = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '4px',
  paddingBottom: '4px',
  borderRadius: '16px',
  fontSize: '13px',
  fontWeight: 500,
  lineHeight: 1,
  userSelect: 'none',
  border: '1px solid var(--color-border-default)',
  backgroundColor: 'var(--color-surface-raised)',
  color: 'var(--color-text-primary)',
  cursor: 'default',
  transition: 'all 0.15s ease',
});

export const clickable = style({
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-action-primary)',
  },
});

export const selected = style({
  backgroundColor: 'rgba(56, 189, 248, 0.15)',
  borderColor: 'var(--color-action-primary)',
  color: 'var(--color-action-primary)',
});

export const deleteButton = style({
  background: 'none',
  border: 'none',
  padding: 0,
  marginLeft: '2px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'inherit',
  opacity: 0.6,
  ':hover': {
    opacity: 1,
  },
});

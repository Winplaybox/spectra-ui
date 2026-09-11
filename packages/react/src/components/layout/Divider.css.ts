import { style } from '@vanilla-extract/css';

export const divider = style({
  border: 'none',
  backgroundColor: 'var(--color-border-default, rgba(255, 255, 255, 0.12))',
  margin: 0,
  flexShrink: 0,
});

export const horizontal = style({
  width: '100%',
  height: '1px',
});

export const vertical = style({
  width: '1px',
  height: '100%',
  alignSelf: 'stretch',
});

export const withText = style({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  backgroundColor: 'transparent',
  '::before': {
    content: '""',
    flex: 1,
    borderBottom: '1px solid var(--color-border-default, rgba(255, 255, 255, 0.12))',
  },
  '::after': {
    content: '""',
    flex: 1,
    borderBottom: '1px solid var(--color-border-default, rgba(255, 255, 255, 0.12))',
  },
});

export const textLabel = style({
  paddingLeft: '12px',
  paddingRight: '12px',
  fontSize: '12px',
  fontWeight: 600,
  color: 'var(--color-text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

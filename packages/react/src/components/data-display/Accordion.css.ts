import { style, styleVariants, globalStyle } from '@vanilla-extract/css';

export const accordion = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: 'var(--color-surface, #ffffff)',
  borderRadius: 'var(--radius-component-md, 8px)',
  overflow: 'hidden',
  boxSizing: 'border-box',
});

export const accordionItem = style({
  borderBottom: '1px solid var(--color-border-subtle, #edebe9)',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  boxSizing: 'border-box',
});

export const heading = style({
  margin: 0,
  padding: 0,
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
});

export const accordionHeader = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  borderRadius: 'var(--radius-component-sm, 4px)',
  textAlign: 'left',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans, system-ui, -apple-system, sans-serif))',
  color: 'var(--color-text-primary, #242424)',
  cursor: 'pointer',
  transition: 'background-color var(--motion-subtle, 150ms ease), color var(--motion-subtle, 150ms ease)',
  outline: 'none',
  boxSizing: 'border-box',
  userSelect: 'none',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-surface-hover, rgba(128, 128, 128, 0.08))',
      color: 'var(--color-text-primary)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--color-surface-active, rgba(128, 128, 128, 0.14))',
      color: 'var(--color-text-primary)',
    },
    '&:focus-visible': {
      outline: '2px solid var(--color-action-primary, #0078d4)',
      outlineOffset: '-2px',
    },
    '&:disabled': {
      opacity: 0.45,
      cursor: 'not-allowed',
    },
  },
});

export const headerSize = styleVariants({
  small: {
    minHeight: '32px',
    padding: '4px 8px',
    fontSize: 'var(--fontSize-semantic-body-sm, 12px)',
    fontWeight: 'var(--font-primitive-weight-medium, 500)',
    gap: '8px',
  },
  medium: {
    minHeight: '40px',
    padding: '8px 12px',
    fontSize: 'var(--fontSize-semantic-body-md, 14px)',
    fontWeight: 'var(--font-primitive-weight-semibold, 600)',
    gap: '12px',
  },
  large: {
    minHeight: '48px',
    padding: '12px 16px',
    fontSize: 'var(--fontSize-semantic-body-lg, 16px)',
    fontWeight: 'var(--font-primitive-weight-semibold, 600)',
    gap: '14px',
  },
  'extra-large': {
    minHeight: '56px',
    padding: '14px 20px',
    fontSize: 'var(--fontSize-semantic-title-sm, 18px)',
    fontWeight: 'var(--font-primitive-weight-bold, 700)',
    gap: '16px',
  },
});

export const headerLabel = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const inlineAction = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  marginLeft: 'auto',
});

export const chevron = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-secondary, #616161)',
  transition: 'transform var(--motion-subtle, 200ms cubic-bezier(0.4, 0, 0.2, 1))',
  flexShrink: 0,
  lineHeight: 1,
});

globalStyle(`${chevron} svg`, {
  display: 'block',
  verticalAlign: 'middle',
  flexShrink: 0,
});

export const chevronStart = style({
  transform: 'rotate(0deg)',
  selectors: {
    '&[data-expanded="true"]': {
      transform: 'rotate(90deg)',
    },
  },
});

export const chevronEnd = style({
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  selectors: {
    '&[data-expanded="true"]': {
      transform: 'rotate(180deg)',
    },
  },
});

export const accordionPanel = style({
  color: 'var(--color-text-secondary, #616161)',
  lineHeight: 1.6,
  backgroundColor: 'var(--color-surface, #ffffff)',
  boxSizing: 'border-box',
  animation: 'fadeIn var(--motion-subtle, 150ms ease)',
});

export const panelSize = styleVariants({
  small: {
    padding: '4px 8px 12px 8px',
    fontSize: 'var(--fontSize-semantic-body-sm, 12px)',
  },
  medium: {
    padding: '6px 12px 16px 12px',
    fontSize: 'var(--fontSize-semantic-body-md, 14px)',
  },
  large: {
    padding: '8px 16px 20px 16px',
    fontSize: 'var(--fontSize-semantic-body-lg, 16px)',
  },
  'extra-large': {
    padding: '10px 20px 24px 20px',
    fontSize: 'var(--fontSize-semantic-title-sm, 16px)',
  },
});

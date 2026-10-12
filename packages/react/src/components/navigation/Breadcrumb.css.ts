import { style, styleVariants, globalStyle } from '@vanilla-extract/css';

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%',
  fontFamily: 'var(--font-primitive-family-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
});

export const list = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  maxWidth: '100%',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const item = style({
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
  minWidth: 0,
});

export const sizeVariants = styleVariants({
  small: {
    fontSize: '12px',
    lineHeight: '16px',
    gap: '2px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '20px',
    gap: '4px',
  },
  large: {
    fontSize: '16px',
    lineHeight: '24px',
    gap: '6px',
  },
});

export const buttonSizeVariants = styleVariants({
  small: {
    padding: '2px 4px',
    minHeight: '22px',
    borderRadius: '4px',
    fontSize: '12px',
    gap: '4px',
  },
  medium: {
    padding: '4px 6px',
    minHeight: '28px',
    borderRadius: '4px',
    fontSize: '14px',
    gap: '6px',
  },
  large: {
    padding: '6px 8px',
    minHeight: '34px',
    borderRadius: '6px',
    fontSize: '16px',
    gap: '8px',
  },
});

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'inherit',
  fontWeight: 400,
  color: 'var(--color-text-secondary, #424242)',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  position: 'relative',
  userSelect: 'none',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  outline: 'none',
  maxWidth: '100%',
  whiteSpace: 'nowrap',

  ':hover': {
    color: 'var(--color-text-primary, #242424)',
    backgroundColor: 'var(--color-surface-hover, rgba(128, 128, 128, 0.08))',
    textDecoration: 'underline',
  },

  ':focus-visible': {
    outline: '2px solid var(--color-brand-primary, #0f6cbd)',
    outlineOffset: '2px',
    textDecoration: 'none',
  },

  ':active': {
    backgroundColor: 'var(--color-surface-active, rgba(128, 128, 128, 0.14))',
  },
});

export const buttonCurrent = style({
  fontWeight: 600,
  color: 'var(--color-text-primary, #242424)',
  cursor: 'default',

  ':hover': {
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
});

export const buttonDisabled = style({
  color: 'var(--color-text-disabled, #a19f9d)',
  cursor: 'not-allowed',
  pointerEvents: 'none',
  opacity: 0.6,

  ':hover': {
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
});

export const buttonDisabledFocusable = style({
  color: 'var(--color-text-disabled, #a19f9d)',
  cursor: 'not-allowed',
  opacity: 0.6,

  ':hover': {
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  ':focus-visible': {
    outline: '2px dashed var(--color-text-disabled, #a19f9d)',
    outlineOffset: '2px',
  },
});

export const iconSlot = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const labelSlot = style({
  display: 'inline-block',
  minWidth: 0,
});

export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const divider = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-muted, #707070)',
  userSelect: 'none',
  flexShrink: 0,
  padding: '0 2px',
  lineHeight: 1,
});

globalStyle(`${divider} svg`, {
  display: 'block',
  verticalAlign: 'middle',
  flexShrink: 0,
});

export const slashDivider = style({
  fontSize: '13px',
  fontWeight: 400,
  color: 'var(--color-text-muted, #707070)',
  lineHeight: 1,
});

export const overflowWrapper = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
});

export const overflowButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px',
  borderRadius: '4px',
  border: 'none',
  background: 'transparent',
  color: 'var(--color-text-secondary, #424242)',
  cursor: 'pointer',
  transition: 'background-color 150ms ease, color 150ms ease',
  outline: 'none',

  ':hover': {
    backgroundColor: 'var(--color-bg-subtle-hover, rgba(0, 0, 0, 0.04))',
    color: 'var(--color-text-primary, #242424)',
  },

  ':focus-visible': {
    outline: '2px solid var(--color-brand-primary, #0f6cbd)',
    outlineOffset: '2px',
  },
});

export const overflowMenu = style({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: 0,
  zIndex: 1000,
  minWidth: '180px',
  maxWidth: '300px',
  backgroundColor: 'var(--color-bg-surface, #ffffff)',
  borderRadius: '8px',
  boxShadow: 'var(--shadow-elevation-medium, 0 4px 16px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.08))',
  border: '1px solid var(--color-border-subtle, #e0e0e0)',
  padding: '4px',
  listStyle: 'none',
  margin: 0,
});

export const overflowMenuItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  padding: '6px 10px',
  borderRadius: '4px',
  fontSize: '13px',
  color: 'var(--color-text-primary, #242424)',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'background-color 120ms ease',

  ':hover': {
    backgroundColor: 'var(--color-surface-hover, rgba(128, 128, 128, 0.12))',
    color: 'var(--color-text-primary)',
  },

  ':focus-visible': {
    outline: '2px solid var(--color-brand-primary, #0f6cbd)',
    outlineOffset: '-2px',
  },
});

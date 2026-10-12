import { style, keyframes, globalStyle } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-component-gap-sm, 8px)',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans, inherit))',
  fontWeight: 'var(--font-primitive-weight-medium, var(--font-weight-medium, 600))',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-component-md, 6px)',
  cursor: 'pointer',
  transition: 'all 0.15s cubic-bezier(0.33, 1, 0.68, 1)',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  selectors: {
    '&:hover:not(:disabled)': {
      opacity: 0.95,
    },
    '&:focus-visible': {
      boxShadow: '0 0 0 2px var(--color-surface, #ffffff), 0 0 0 4px var(--color-action-primary, #0078d4)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

// Fluent 2 & Spectra Visual Appearances
export const primary = style({
  backgroundColor: 'var(--color-action-primary, #0078d4)',
  color: 'var(--color-text-on-action, #ffffff)',
  borderColor: 'var(--color-action-primary, #0078d4)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-action-primary-hover, #106ebe)',
      borderColor: 'var(--color-action-primary-hover, #106ebe)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--color-action-primary-active, #005a9e)',
      borderColor: 'var(--color-action-primary-active, #005a9e)',
    },
  },
});

export const secondary = style({
  backgroundColor: 'var(--color-surface-raised, #ffffff)',
  color: 'var(--color-text-primary, #242424)',
  borderColor: 'var(--color-border-default, #d1d1d1)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-surface-hover, rgba(128, 128, 128, 0.1))',
      borderColor: 'var(--color-border-strong, #8a8886)',
      color: 'var(--color-text-primary)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--color-surface-active, rgba(128, 128, 128, 0.18))',
      borderColor: 'var(--color-border-strong, #8a8886)',
      color: 'var(--color-text-primary)',
    },
  },
});

export const outline = style({
  backgroundColor: 'transparent',
  color: 'var(--color-text-primary, #242424)',
  borderColor: 'var(--color-border-default, #d1d1d1)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-surface-hover, rgba(128, 128, 128, 0.08))',
      borderColor: 'var(--color-border-strong, #8a8886)',
      color: 'var(--color-text-primary)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--color-surface-active, rgba(128, 128, 128, 0.14))',
      color: 'var(--color-text-primary)',
    },
  },
});

export const subtle = style({
  backgroundColor: 'transparent',
  color: 'var(--color-text-primary, #242424)',
  borderColor: 'transparent',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-surface-hover, rgba(128, 128, 128, 0.08))',
      color: 'var(--color-text-primary)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'var(--color-surface-active, rgba(128, 128, 128, 0.14))',
      color: 'var(--color-text-primary)',
    },
  },
});

export const transparent = style({
  backgroundColor: 'transparent',
  color: 'var(--color-action-primary, #0078d4)',
  borderColor: 'transparent',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'rgba(0, 120, 212, 0.08)',
    },
    '&:active:not(:disabled)': {
      backgroundColor: 'rgba(0, 120, 212, 0.16)',
    },
  },
});

export const tertiary = style({
  backgroundColor: 'transparent',
  color: 'var(--color-action-primary, #0078d4)',
  borderColor: 'transparent',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-feedback-info-light, rgba(0, 120, 212, 0.08))',
    },
  },
});

export const danger = style({
  backgroundColor: 'var(--color-feedback-error, #d13438)',
  color: 'var(--color-text-on-action, #ffffff)',
  borderColor: 'var(--color-feedback-error, #d13438)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-feedback-error, #b1282c)',
      borderColor: 'var(--color-feedback-error, #b1282c)',
      opacity: 0.95,
    },
    '&:active:not(:disabled)': {
      backgroundColor: '#a4262c',
      borderColor: '#a4262c',
    },
  },
});

// Silhouettes / Shapes
export const rounded = style({
  borderRadius: 'var(--radius-component-md, 6px)',
});

export const circular = style({
  borderRadius: '9999px',
});

export const square = style({
  borderRadius: 0,
});

// Sizing Scale
export const sm = style({
  height: 24,
  paddingBlock: 'var(--space-component-padding-xs, 2px)',
  paddingInline: 'var(--space-component-padding-sm, 8px)',
  fontSize: 'var(--fontSize-semantic-body-xs, var(--font-size-body-xs, 12px))',
  lineHeight: '20px',
});

export const md = style({
  height: 32,
  paddingBlock: 'var(--space-component-padding-xs, 5px)',
  paddingInline: 'var(--space-component-padding-md, 12px)',
  fontSize: 'var(--fontSize-semantic-body-sm, var(--font-size-body-sm, 14px))',
  lineHeight: '20px',
});

export const lg = style({
  height: 40,
  paddingBlock: 'var(--space-component-padding-sm, 8px)',
  paddingInline: 'var(--space-component-padding-lg, 16px)',
  fontSize: 'var(--fontSize-semantic-body-md, var(--font-size-body-md, 16px))',
  lineHeight: '24px',
});

export const small = sm;
export const medium = md;
export const large = lg;

export const fullWidth = style({
  width: '100%',
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  lineHeight: 1,
});

export const content = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
});

globalStyle(`${button} svg`, {
  display: 'block',
  verticalAlign: 'middle',
  flexShrink: 0,
});

globalStyle(`${icon} svg`, {
  display: 'block',
  verticalAlign: 'middle',
  flexShrink: 0,
});

globalStyle(`${content} svg`, {
  display: 'block',
  verticalAlign: 'middle',
  flexShrink: 0,
});

export const spinner = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${spin} 1s linear infinite`,
  flexShrink: 0,
});

// DisabledFocusable (WCAG 2.1 AA Screen Reader Focusable Disabled State)
export const disabledFocusable = style({
  cursor: 'not-allowed',
  opacity: 0.55,
  pointerEvents: 'none',
  selectors: {
    '&:focus-visible': {
      boxShadow: '0 0 0 2px var(--color-surface, #ffffff), 0 0 0 4px var(--color-action-primary, #0078d4)',
    },
  },
});

// Toggle Checked State
export const toggleChecked = style({
  backgroundColor: 'var(--color-action-primary, #0078d4) !important',
  color: 'var(--color-text-on-action, #ffffff) !important',
  borderColor: 'var(--color-action-primary, #0078d4) !important',
  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.25)',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: 'var(--color-action-primary-hover, #106ebe) !important',
      borderColor: 'var(--color-action-primary-hover, #106ebe) !important',
    },
  },
});

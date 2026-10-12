import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-primitive-family-sans, var(--font-family-sans, inherit))',
  fontWeight: 'var(--font-primitive-weight-semibold, 600)',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  verticalAlign: 'middle',
  transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease',
});

// Sizes
export const sizes = styleVariants({
  tiny: {
    width: '6px',
    height: '6px',
    minWidth: '6px',
    minHeight: '6px',
    padding: 0,
    borderRadius: 'var(--radius-control-full, 9999px)',
  },
  'extra-small': {
    height: '16px',
    minWidth: '16px',
    fontSize: '0.625rem',
    paddingInline: '4px',
    gap: '3px',
  },
  small: {
    height: '20px',
    minWidth: '20px',
    fontSize: '0.6875rem',
    paddingInline: '6px',
    gap: '4px',
  },
  medium: {
    height: '24px',
    minWidth: '24px',
    fontSize: '0.75rem',
    paddingInline: '8px',
    gap: '5px',
  },
  large: {
    height: '28px',
    minWidth: '28px',
    fontSize: '0.8125rem',
    paddingInline: '10px',
    gap: '6px',
  },
  'extra-large': {
    height: '32px',
    minWidth: '32px',
    fontSize: '0.875rem',
    paddingInline: '12px',
    gap: '6px',
  },
});

// Shapes
export const shapes = styleVariants({
  rounded: {
    borderRadius: 'var(--radius-control-small, 4px)',
  },
  circular: {
    borderRadius: 'var(--radius-control-full, 9999px)',
  },
  square: {
    borderRadius: '0px',
  },
});

// Appearances & Colors matrix
// Keys format: `${appearance}_${color}`
export const variants = styleVariants({
  // Filled
  filled_brand: {
    backgroundColor: 'var(--color-action-primary, #0f6cbd)',
    color: 'var(--color-text-on-action, #ffffff)',
    border: '1px solid transparent',
  },
  filled_danger: {
    backgroundColor: 'var(--color-feedback-error, #d13438)',
    color: 'var(--color-text-on-action, #ffffff)',
    border: '1px solid transparent',
  },
  filled_important: {
    backgroundColor: 'var(--color-text-primary, #242424)',
    color: 'var(--color-surface-base, #ffffff)',
    border: '1px solid transparent',
  },
  filled_informative: {
    backgroundColor: 'var(--color-feedback-info, #0078d4)',
    color: 'var(--color-text-on-action, #ffffff)',
    border: '1px solid transparent',
  },
  filled_severe: {
    backgroundColor: 'var(--color-feedback-severe, #d83b01)',
    color: 'var(--color-text-on-action, #ffffff)',
    border: '1px solid transparent',
  },
  filled_subtle: {
    backgroundColor: 'var(--color-surface-subtle, #e1dfdd)',
    color: 'var(--color-text-primary, #242424)',
    border: '1px solid transparent',
  },
  filled_success: {
    backgroundColor: 'var(--color-feedback-success, #107c41)',
    color: 'var(--color-text-on-action, #ffffff)',
    border: '1px solid transparent',
  },
  filled_warning: {
    backgroundColor: 'var(--color-feedback-warning, #f7630c)',
    color: 'var(--color-text-on-action, #ffffff)',
    border: '1px solid transparent',
  },

  // Ghost
  ghost_brand: {
    backgroundColor: 'transparent',
    color: 'var(--color-action-primary, #0f6cbd)',
    border: '1px solid transparent',
  },
  ghost_danger: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-error, #d13438)',
    border: '1px solid transparent',
  },
  ghost_important: {
    backgroundColor: 'transparent',
    color: 'var(--color-text-primary, #242424)',
    border: '1px solid transparent',
  },
  ghost_informative: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-info, #0078d4)',
    border: '1px solid transparent',
  },
  ghost_severe: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-severe, #d83b01)',
    border: '1px solid transparent',
  },
  ghost_subtle: {
    backgroundColor: 'transparent',
    color: 'var(--color-text-secondary, #616161)',
    border: '1px solid transparent',
  },
  ghost_success: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-success, #107c41)',
    border: '1px solid transparent',
  },
  ghost_warning: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-warning, #f7630c)',
    border: '1px solid transparent',
  },

  // Outline
  outline_brand: {
    backgroundColor: 'transparent',
    color: 'var(--color-action-primary, #0f6cbd)',
    border: '1px solid var(--color-action-primary, #0f6cbd)',
  },
  outline_danger: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-error, #d13438)',
    border: '1px solid var(--color-feedback-error, #d13438)',
  },
  outline_important: {
    backgroundColor: 'transparent',
    color: 'var(--color-text-primary, #242424)',
    border: '1px solid var(--color-text-primary, #242424)',
  },
  outline_informative: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-info, #0078d4)',
    border: '1px solid var(--color-feedback-info, #0078d4)',
  },
  outline_severe: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-severe, #d83b01)',
    border: '1px solid var(--color-feedback-severe, #d83b01)',
  },
  outline_subtle: {
    backgroundColor: 'transparent',
    color: 'var(--color-text-secondary, #616161)',
    border: '1px solid var(--color-border-default, #d1d1d1)',
  },
  outline_success: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-success, #107c41)',
    border: '1px solid var(--color-feedback-success, #107c41)',
  },
  outline_warning: {
    backgroundColor: 'transparent',
    color: 'var(--color-feedback-warning, #f7630c)',
    border: '1px solid var(--color-feedback-warning, #f7630c)',
  },

  // Tint
  tint_brand: {
    backgroundColor: 'var(--color-action-primary-light, rgba(15, 108, 189, 0.12))',
    color: 'var(--color-action-primary, #0f6cbd)',
    border: '1px solid transparent',
  },
  tint_danger: {
    backgroundColor: 'var(--color-feedback-error-light, rgba(209, 52, 56, 0.12))',
    color: 'var(--color-feedback-error, #d13438)',
    border: '1px solid transparent',
  },
  tint_important: {
    backgroundColor: 'var(--color-surface-raised, rgba(0, 0, 0, 0.08))',
    color: 'var(--color-text-primary, #242424)',
    border: '1px solid transparent',
  },
  tint_informative: {
    backgroundColor: 'var(--color-feedback-info-light, rgba(0, 120, 212, 0.12))',
    color: 'var(--color-feedback-info, #0078d4)',
    border: '1px solid transparent',
  },
  tint_severe: {
    backgroundColor: 'var(--color-feedback-severe-light, rgba(216, 59, 1, 0.12))',
    color: 'var(--color-feedback-severe, #d83b01)',
    border: '1px solid transparent',
  },
  tint_subtle: {
    backgroundColor: 'var(--color-surface-hover, rgba(128, 128, 128, 0.12))',
    color: 'var(--color-text-secondary)',
    border: '1px solid transparent',
  },
  tint_success: {
    backgroundColor: 'var(--color-feedback-success-light, rgba(16, 124, 65, 0.12))',
    color: 'var(--color-feedback-success, #107c41)',
    border: '1px solid transparent',
  },
  tint_warning: {
    backgroundColor: 'var(--color-feedback-warning-light, rgba(247, 99, 12, 0.14))',
    color: 'var(--color-feedback-warning, #f7630c)',
    border: '1px solid transparent',
  },
});

// Icon wrapper
export const iconSlot = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  lineHeight: 0,
});

// Dot indicator inside badge
export const dotIndicator = style({
  width: '6px',
  height: '6px',
  borderRadius: 'var(--radius-control-full, 9999px)',
  backgroundColor: 'currentColor',
  flexShrink: 0,
  marginInlineEnd: '2px',
});

// Presence badge status colors and halo
export const presenceRing = style({
  boxShadow: '0 0 0 2px var(--color-surface-base, #ffffff)',
});

export const outOfOfficeRing = style({
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: 'inherit',
    border: '1.5px dashed currentColor',
    pointerEvents: 'none',
  },
});

// Backward compatibility legacy classes
export const badge = root;
export const sm = sizes.small;
export const md = sizes.medium;
export const lg = sizes.large;
export const dot = dotIndicator;

export const defaultVariant = variants.filled_subtle;
export const primary = variants.filled_brand;
export const success = variants.filled_success;
export const warning = variants.filled_warning;
export const error = variants.filled_danger;
export const info = variants.filled_informative;

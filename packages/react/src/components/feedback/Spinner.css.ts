import { style, keyframes } from '@vanilla-extract/css';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${rotate} 0.8s linear infinite`,
});

export const sm = style({
  width: '16px',
  height: '16px',
});

export const md = style({
  width: '24px',
  height: '24px',
});

export const lg = style({
  width: '36px',
  height: '36px',
});

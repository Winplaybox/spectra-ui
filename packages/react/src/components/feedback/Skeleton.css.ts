import { style, keyframes } from '@vanilla-extract/css';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

export const skeleton = style({
  display: 'block',
  backgroundColor: 'var(--color-surface-raised)',
  backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))',
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s infinite linear`,
  borderRadius: '4px',
});

export const circular = style({
  borderRadius: '50%',
});

export const rectangular = style({
  borderRadius: '8px',
});

export const text = style({
  borderRadius: '4px',
  height: '14px',
  marginTop: '4px',
  marginBottom: '4px',
});

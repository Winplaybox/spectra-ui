import React from 'react';
import { IconProps } from '../types';

export const ImageScissorIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M5 9L11 12L21.65 17.32" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.65 6.67004L11 12L5 15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21C6.65685 21 8 19.6569 8 18C8 16.3431 6.65685 15 5 15C3.34315 15 2 16.3431 2 18C2 19.6569 3.34315 21 5 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9C6.65685 9 8 7.65685 8 6C8 4.34315 6.65685 3 5 3C3.34315 3 2 4.34315 2 6C2 7.65685 3.34315 9 5 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11.9999C10.88 11.7499 10.98 11.4499 11.22 11.3299L20.65 6.60995C21.14 6.35995 21.74 6.55995 21.99 7.05995L11.66 12.2299C11.42 12.3499 11.12 12.2499 11 11.9999Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M22 16.94L11.67 11.78C11.42 11.65 11.12 11.75 11 12C10.88 12.25 10.98 12.55 11.22 12.67L20.65 17.39C21.15 17.64 21.75 17.44 22 16.94Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

ImageScissorIcon.displayName = 'ImageScissorIcon';

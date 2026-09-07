import React from 'react';
import { IconProps } from '../types';

export const NetworkRadioIcon: React.FC<IconProps> = ({
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
    <path d="M22 10V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V10C2 9.45 2.45 9 3 9H21C21.55 9 22 9.45 22 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 13H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 18C9.65685 18 11 16.6569 11 15C11 13.3431 9.65685 12 8 12C6.34315 12 5 13.3431 5 15C5 16.6569 6.34315 18 8 18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9L19 3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

NetworkRadioIcon.displayName = 'NetworkRadioIcon';

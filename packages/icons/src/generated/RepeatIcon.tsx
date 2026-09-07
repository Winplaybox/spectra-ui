import React from 'react';
import { IconProps } from '../types';

export const RepeatIcon: React.FC<IconProps> = ({
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
    <path d="M21 9C18.5 5.44 15.92 3 12 3C10.55 3 9.17 3.35 7.96 3.96C5.02 5.44 3 8.48 3 12C3 16.97 7.03 21 12 21C15.52 21 18.56 18.98 20.04 16.04" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 9H18.33H21V6.33V4" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

RepeatIcon.displayName = 'RepeatIcon';

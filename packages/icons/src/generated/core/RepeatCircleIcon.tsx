import React from 'react';
import { IconProps } from '../../types';

export const RepeatCircleIcon: React.FC<IconProps> = ({
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
    <path d="M19.71 7.29C17.59 4.68 15.25 3 12 3C10.55 3 9.17004 3.35 7.96004 3.96C5.02004 5.44 3.00004 8.48 3.00004 12C3.00004 16.97 7.03004 21 12 21C15.52 21 18.56 18.98 20.04 16.04" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9H19.4H21V7.4V6L18 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

RepeatCircleIcon.displayName = 'RepeatCircleIcon';

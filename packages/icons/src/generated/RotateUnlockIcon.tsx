import React from 'react';
import { IconProps } from '../types';

export const RotateUnlockIcon: React.FC<IconProps> = ({
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
    <path d="M11 21C6 21 2 17 2 12C2 7 6 3 11 3C16 3 20 7 20 12V13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 13L21.25 11H18.75L20 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M14 9C14 7.34315 12.6569 6 11 6C9.34315 6 8 7.34315 8 9V11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12C7 11.4477 7.44772 11 8 11H14C14.5523 11 15 11.4477 15 12V16C15 16.5523 14.5523 17 14 17H8C7.44772 17 7 16.5523 7 16V12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

RotateUnlockIcon.displayName = 'RotateUnlockIcon';

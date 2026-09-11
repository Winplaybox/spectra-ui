import React from 'react';
import { IconProps } from '../../types';

export const SwipeDoubleFingerRightIcon: React.FC<IconProps> = ({
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
    <path d="M8.64 21C7.93 21.62 7.01 22 6 22C3.79 22 2 20.21 2 18C2 15.79 3.79 14 6 14C7.01 14 7.93 14.38 8.64 15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 18L6 18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 14.5L22 18L18.5 21.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.64 9C7.93 9.62 7.01 10 6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C7.01 2 7.93 2.38 8.64 3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6L6 6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 2.5L22 6L18.5 9.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

SwipeDoubleFingerRightIcon.displayName = 'SwipeDoubleFingerRightIcon';

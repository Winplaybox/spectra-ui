import React from 'react';
import { IconProps } from '../../types';

export const SwipeDoubleFingerLeftIcon: React.FC<IconProps> = ({
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
    <path d="M15.36 21C16.07 21.62 16.99 22 18 22C20.21 22 22 20.21 22 18C22 15.79 20.21 14 18 14C16.99 14 16.07 14.38 15.36 15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 18L18 18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 14.5L2 18L5.5 21.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.36 9C16.07 9.62 16.99 10 18 10C20.21 10 22 8.21 22 6C22 3.79 20.21 2 18 2C16.99 2 16.07 2.38 15.36 3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 6L18 6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 2.5L2 6L5.5 9.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

SwipeDoubleFingerLeftIcon.displayName = 'SwipeDoubleFingerLeftIcon';

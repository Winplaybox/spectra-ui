import React from 'react';
import { IconProps } from '../../types';

export const UserScanIcon: React.FC<IconProps> = ({
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
    <path d="M6 2L3 2C2.44772 2 2 2.44772 2 3L2 6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 22L21 22C21.5523 22 22 21.5523 22 21L22 18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6V3C22 2.44772 21.5523 2 21 2L18 2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 18L2 21C2 21.5523 2.44772 22 3 22L6 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17.9259V17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17V17.9259C7 17.9668 7.03316 18 7.07407 18H16.9259C16.9668 18 17 17.9668 17 17.9259Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="9" r="3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

UserScanIcon.displayName = 'UserScanIcon';

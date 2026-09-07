import React from 'react';
import { IconProps } from '../types';

export const USBDriveIcon: React.FC<IconProps> = ({
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
    <path d="M17 2H7V9H17V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22H7C5.9 22 5 21.1 5 20V9H19V20C19 21.1 18.1 22 17 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 4V7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M14 4V7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
  </svg>
);

USBDriveIcon.displayName = 'USBDriveIcon';

import React from 'react';
import { IconProps } from '../types';

export const USBPortIcon: React.FC<IconProps> = ({
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
    <path d="M21 7H3V17H21V7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11H21" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square" strokeLinejoin="round"/>
<path d="M9 15H7V17H9V15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M17 15H15V17H17V15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

USBPortIcon.displayName = 'USBPortIcon';

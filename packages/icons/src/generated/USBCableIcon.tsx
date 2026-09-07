import React from 'react';
import { IconProps } from '../types';

export const USBCableIcon: React.FC<IconProps> = ({
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
    <path d="M21 22H14C11.79 22 10 20.21 10 18V17" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15H8V17H12V15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2H5V10H15V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10H3V15H17V10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 5V7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M12 5V7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
  </svg>
);

USBCableIcon.displayName = 'USBCableIcon';

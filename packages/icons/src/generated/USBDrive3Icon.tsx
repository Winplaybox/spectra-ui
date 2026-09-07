import React from 'react';
import { IconProps } from '../types';

export const USBDrive3Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M6 2H18V8H6L6 2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M9 5H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M13 5H15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M5 8H19V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M9 15L11.5 17L15 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

USBDrive3Icon.displayName = 'USBDrive3Icon';

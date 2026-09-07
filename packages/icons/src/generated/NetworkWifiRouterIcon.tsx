import React from 'react';
import { IconProps } from '../types';

export const NetworkWifiRouterIcon: React.FC<IconProps> = ({
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
    <path d="M4 6V12.1719" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M2 15C2 13.3431 3.34315 12 5 12H19C20.6569 12 22 13.3431 22 15V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="4" cy="4" r="2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M13 9C13 9 13.5 8.5 15 8.5C16.5 8.5 17 9 17 9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M12 6C12 6 13 5 15 5C17 5 18 6 18 6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M11 3C11 3 12.5 2 15 2C17.5 2 19 3 19 3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M5 17H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M18 17H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

NetworkWifiRouterIcon.displayName = 'NetworkWifiRouterIcon';

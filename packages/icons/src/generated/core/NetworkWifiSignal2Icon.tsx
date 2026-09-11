import React from 'react';
import { IconProps } from '../../types';

export const NetworkWifiSignal2Icon: React.FC<IconProps> = ({
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
    <path d="M12 4L12 18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M4 20C4 18.8954 4.89543 18 6 18H18C19.1046 18 20 18.8954 20 20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="12" cy="3" r="1" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M16.5 2C16.5 2 17 2.66667 17 4C17 5.33333 16.5 6 16.5 6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M7.5 5.98779C7.5 5.98779 7 5.32113 7 3.98779C7 2.65446 7.5 1.98779 7.5 1.98779" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M19.5 1C19.5 1 20 2.2 20 4C20 5.8 19.5 7 19.5 7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M4.5 7C4.5 7 4 5.8 4 4C4 2.2 4.5 1 4.5 1" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

NetworkWifiSignal2Icon.displayName = 'NetworkWifiSignal2Icon';

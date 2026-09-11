import React from 'react';
import { IconProps } from '../../types';

export const NetworkWifiSignalIcon: React.FC<IconProps> = ({
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
    <path d="M12 11V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M9 13L9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11V13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M3 15V11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11V15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M6 14V11C6 7.68629 8.68629 5 12 5C15.3137 5 18 7.68629 18 11V14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

NetworkWifiSignalIcon.displayName = 'NetworkWifiSignalIcon';

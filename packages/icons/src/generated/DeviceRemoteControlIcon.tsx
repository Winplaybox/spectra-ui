import React from 'react';
import { IconProps } from '../types';

export const DeviceRemoteControlIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V17C20 19.7614 17.7614 22 15 22H9C6.23858 22 4 19.7614 4 17V4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M12 8V10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M13 9H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square"/>
<path d="M10.5 15.9473V16.0527" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M13.5 15.9473V16.0527" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M13.5 18.9473V19.0527" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M10.5 18.9473V19.0527" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

DeviceRemoteControlIcon.displayName = 'DeviceRemoteControlIcon';

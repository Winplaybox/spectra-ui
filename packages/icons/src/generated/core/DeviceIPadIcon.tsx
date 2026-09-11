import React from 'react';
import { IconProps } from '../../types';

export const DeviceIPadIcon: React.FC<IconProps> = ({
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
    <path d="M4 2H20V22H4V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="19" r="0.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M17.25 4.75V16.25H6.75V4.75H17.25Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

DeviceIPadIcon.displayName = 'DeviceIPadIcon';

import React from 'react';
import { IconProps } from '../types';

export const DeviceTelevisionMusicSlashIcon: React.FC<IconProps> = ({
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
    <path d="M18 20L6 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<rect x="2" y="4" width="20" height="12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11.5V7L13.7 7.5C14.5 7.7 15 8.4 15 9.1V9.9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 13C11.3284 13 12 12.3284 12 11.5C12 10.6716 11.3284 10 10.5 10C9.67157 10 9 10.6716 9 11.5C9 12.3284 9.67157 13 10.5 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

DeviceTelevisionMusicSlashIcon.displayName = 'DeviceTelevisionMusicSlashIcon';

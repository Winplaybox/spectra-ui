import React from 'react';
import { IconProps } from '../types';

export const MediaVolumeUp3Icon: React.FC<IconProps> = ({
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
    <path d="M19 19C19 19 21 16.8943 21 12C21 7.10571 19 5 19 5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M17 16.5811C17 16.5811 18 14.7081 18 12C18 9.2276 17 7.41895 17 7.41895" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6 16L14 21V3L6 8V16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M3 16V8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

MediaVolumeUp3Icon.displayName = 'MediaVolumeUp3Icon';

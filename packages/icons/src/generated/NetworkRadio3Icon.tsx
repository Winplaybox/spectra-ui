import React from 'react';
import { IconProps } from '../types';

export const NetworkRadio3Icon: React.FC<IconProps> = ({
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
    <circle cx="7.5" cy="14.5" r="2.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<circle cx="16.5" cy="14.5" r="2.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M7 8V7H9V8H7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7.97009V4H20V8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8H3C2.44772 8 2 8.44772 2 9V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V9C22 8.44772 21.5523 8 21 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

NetworkRadio3Icon.displayName = 'NetworkRadio3Icon';

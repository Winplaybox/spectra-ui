import React from 'react';
import { IconProps } from '../types';

export const ChartLineIcon: React.FC<IconProps> = ({
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
    <path d="M21 7L15 17L8 8L3 15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16C3.55228 16 4 15.5523 4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8C21.5523 8 22 7.55228 22 7C22 6.44772 21.5523 6 21 6C20.4477 6 20 6.44772 20 7C20 7.55228 20.4477 8 21 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ChartLineIcon.displayName = 'ChartLineIcon';

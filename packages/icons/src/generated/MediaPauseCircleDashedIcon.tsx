import React from 'react';
import { IconProps } from '../types';

export const MediaPauseCircleDashedIcon: React.FC<IconProps> = ({
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
    <path d="M21.8001 10C21.3601 7.84002 20.2201 5.93002 18.6301 4.52002" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.37007 4.52002C3.78007 5.93002 2.64007 7.84002 2.20007 10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.83008 21.48C9.83008 21.82 10.8901 22 12.0001 22C13.1101 22 14.1701 21.82 15.1701 21.48" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.8001 14C21.3601 16.16 20.2201 18.07 18.6301 19.48" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.37007 19.48C3.78007 18.07 2.64007 16.16 2.20007 14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.83008 2.52C9.83008 2.18 10.8901 2 12.0001 2C13.1101 2 14.1701 2.18 15.1701 2.52" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.00006 16V8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.0001 16V8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaPauseCircleDashedIcon.displayName = 'MediaPauseCircleDashedIcon';

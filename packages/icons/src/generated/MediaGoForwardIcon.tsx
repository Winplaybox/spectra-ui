import React from 'react';
import { IconProps } from '../types';

export const MediaGoForwardIcon: React.FC<IconProps> = ({
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
    <path d="M21 13C21 18 17 22 12 22C7 22 3 18 3 13C3 8 7 4 12 4H13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 4L11 2.75V5.25L13 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

MediaGoForwardIcon.displayName = 'MediaGoForwardIcon';

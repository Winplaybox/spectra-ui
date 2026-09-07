import React from 'react';
import { IconProps } from '../types';

export const UndoIcon: React.FC<IconProps> = ({
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
    <path d="M3.96 16.04C5.44 18.98 8.48 21 12 21C16.97 21 21 16.97 21 12C21 8.48 18.98 5.44 16.04 3.96C14.83 3.35 13.45 3 12 3C8.08 3 5.5 5.44 3 9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 9H5.67H3V6.33V4" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UndoIcon.displayName = 'UndoIcon';

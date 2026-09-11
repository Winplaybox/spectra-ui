import React from 'react';
import { IconProps } from '../../types';

export const UndoSlashIcon: React.FC<IconProps> = ({
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
    <path d="M8 9H5.67H3V6.33V4" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9C5.5 5.44 8.08 3 12 3C13.45 3 14.83 3.35 16.04 3.96C18.98 5.44 21 8.48 21 12C21 16.97 16.97 21 12 21C8.48 21 5.44 18.98 3.96 16.04" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 2L22 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UndoSlashIcon.displayName = 'UndoSlashIcon';

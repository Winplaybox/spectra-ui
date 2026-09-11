import React from 'react';
import { IconProps } from '../../types';

export const ArchiveIcon: React.FC<IconProps> = ({
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
    <path d="M12 17V7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M8.5 13.5L12 17L15.5 13.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21H5C4.45 21 4 20.55 4 20V7H20V20C20 20.55 19.55 21 19 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 7H2.5C2.22 7 2 6.78 2 6.5V3.5C2 3.22 2.22 3 2.5 3H21.5C21.78 3 22 3.22 22 3.5V6.5C22 6.78 21.78 7 21.5 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArchiveIcon.displayName = 'ArchiveIcon';

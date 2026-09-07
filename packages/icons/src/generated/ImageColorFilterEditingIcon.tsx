import React from 'react';
import { IconProps } from '../types';

export const ImageColorFilterEditingIcon: React.FC<IconProps> = ({
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
    <path d="M3.09998 7.45996L8.66998 18.4" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.87 4.1001L11.24 14.6401" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.44995 2.33008L14.67 12.5701" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.87 2.18018L18.9 12.0402" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2C6.48 2 2 6.48 2 12C2 16.11 4.48 19.64 8.03 21.17V21.18H8.04L21.97 12.82C21.99 12.55 22 12.28 22 12C22 6.48 17.52 2 12 2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.03003 21.18C8.45003 16.04 12.76 12 18 12C19.41 12 20.75 12.29 21.97 12.82L8.03003 21.18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageColorFilterEditingIcon.displayName = 'ImageColorFilterEditingIcon';

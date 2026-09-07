import React from 'react';
import { IconProps } from '../types';

export const FileEditIcon: React.FC<IconProps> = ({
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
    <path d="M15 21H4C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3H16.59C16.85 3 17.11 3.11 17.29 3.29L20.71 6.71C20.89 6.89 21 7.15 21 7.41V12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17H7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12H17" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7H12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3V8H21V7.41C21 7.15 20.89 6.89 20.71 6.71L17.29 3.29C17.11 3.11 16.85 3 16.59 3H16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.55 15.6L18.07 19.89L18 21L18.93 20.39L21.4 16.1L20.55 15.6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

FileEditIcon.displayName = 'FileEditIcon';

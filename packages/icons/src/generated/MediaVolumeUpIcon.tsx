import React from 'react';
import { IconProps } from '../types';

export const MediaVolumeUpIcon: React.FC<IconProps> = ({
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
    <path d="M6 8H2V16H6L12 21V3L6 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19.75C19.45 18.86 22 15.73 22 12C22 8.27 19.45 5.14 16 4.25" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 15.46C17.2 14.77 18 13.48 18 12C18 10.52 17.2 9.22999 16 8.53999" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaVolumeUpIcon.displayName = 'MediaVolumeUpIcon';

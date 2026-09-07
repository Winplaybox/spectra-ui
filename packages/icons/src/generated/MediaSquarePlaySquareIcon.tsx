import React from 'react';
import { IconProps } from '../types';

export const MediaSquarePlaySquareIcon: React.FC<IconProps> = ({
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
    <path d="M19 22H5C3.34 22 2 20.66 2 19V5C2 3.34 3.34 2 5 2H19C20.66 2 22 3.34 22 5V19C22 20.66 20.66 22 19 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 7.54V16.46C8 16.87 8.44 17.13 8.79 16.93L16.73 12.47C17.09 12.27 17.09 11.74 16.73 11.53L8.79 7.07C8.44 6.87 8 7.13 8 7.54Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaSquarePlaySquareIcon.displayName = 'MediaSquarePlaySquareIcon';

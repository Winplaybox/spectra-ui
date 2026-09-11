import React from 'react';
import { IconProps } from '../../types';

export const MediaAutoplayStopIcon: React.FC<IconProps> = ({
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
    <path d="M20 6H19.99C18.17 3.57 15.27 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C16.1 22 19.62 19.53 21.16 16" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 3L20 6L17 5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M15.5 16H8.5C8.22 16 8 15.78 8 15.5V8.5C8 8.22 8.22 8 8.5 8H15.5C15.78 8 16 8.22 16 8.5V15.5C16 15.78 15.78 16 15.5 16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaAutoplayStopIcon.displayName = 'MediaAutoplayStopIcon';

import React from 'react';
import { IconProps } from '../../types';

export const Movie3Icon: React.FC<IconProps> = ({
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
    <path d="M4 6H8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M4 10H8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M4 14H8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M4 18H8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M16 6H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M16 10H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M16 14H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M16 18H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 11.5L11.5 12.5H12.5L12 11.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M8 2H16V22H8V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<rect x="4" y="2" width="16" height="20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

Movie3Icon.displayName = 'Movie3Icon';

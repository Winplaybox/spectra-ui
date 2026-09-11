import React from 'react';
import { IconProps } from '../../types';

export const Movie2Icon: React.FC<IconProps> = ({
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
    <path d="M18 16L18 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M14 16L14 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M10 16L10 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M6 16L6 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M18 4L18 8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M14 4L14 8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M10 4L10 8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M6 4L6 8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.5 12L11.5 11.5L11.5 12.5L12.5 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M22 8L22 16L2 16L2 8L22 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<rect x="22" y="4" width="16" height="20" transform="rotate(90 22 4)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

Movie2Icon.displayName = 'Movie2Icon';

import React from 'react';
import { IconProps } from '../types';

export const VideoStandSmallIcon: React.FC<IconProps> = ({
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
    <path d="M17 7H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M17 9.5L18.5 10.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M17 4.5L19 3.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M8 1L8 3.03404" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path fillRule="evenodd" clipRule="evenodd" d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M10 11V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M10 17L6 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M10 17L14 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6 5C6 3.89543 6.89543 3 8 3H12C13.1046 3 14 3.89543 14 5V10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10L6 5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

VideoStandSmallIcon.displayName = 'VideoStandSmallIcon';

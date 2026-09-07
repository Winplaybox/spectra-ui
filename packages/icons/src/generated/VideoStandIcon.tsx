import React from 'react';
import { IconProps } from '../types';

export const VideoStandIcon: React.FC<IconProps> = ({
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
    <circle cx="12" cy="12" r="2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M10 7V4.77778V4C10 3.44771 10.4477 3 11 3H18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17L10.5001 21.0001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M16.0001 17.0003L17.5001 21.0001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M3 8L7 9.14286V14.8571L3 16V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M7 9C7 7.89543 7.89543 7 9 7H19C20.1046 7 21 7.89543 21 9V15C21 16.1046 20.1046 17 19 17H9C7.89543 17 7 16.1046 7 15V9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

VideoStandIcon.displayName = 'VideoStandIcon';

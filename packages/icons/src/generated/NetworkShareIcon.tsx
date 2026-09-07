import React from 'react';
import { IconProps } from '../types';

export const NetworkShareIcon: React.FC<IconProps> = ({
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
    <path d="M12 17V8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.88003 7.12L5.41003 11.59" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.12 7.12L18.59 11.59" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15C5.10457 15 6 14.1046 6 13C6 11.8954 5.10457 11 4 11C2.89543 11 2 11.8954 2 13C2 14.1046 2.89543 15 4 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C13.3807 22 14.5 20.8807 14.5 19.5C14.5 18.1193 13.3807 17 12 17C10.6193 17 9.5 18.1193 9.5 19.5C9.5 20.8807 10.6193 22 12 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 15C21.1046 15 22 14.1046 22 13C22 11.8954 21.1046 11 20 11C18.8954 11 18 11.8954 18 13C18 14.1046 18.8954 15 20 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

NetworkShareIcon.displayName = 'NetworkShareIcon';

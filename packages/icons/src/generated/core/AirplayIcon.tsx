import React from 'react';
import { IconProps } from '../../types';

export const AirplayIcon: React.FC<IconProps> = ({
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
    <path d="M22 5V15C22 16.1 21.1 17 20 17H15.5L12 13L8.5 17H4C2.9 17 2 16.1 2 15V5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21H19L12 13L5 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

AirplayIcon.displayName = 'AirplayIcon';

import React from 'react';
import { IconProps } from '../types';

export const ToggleDownLineIcon: React.FC<IconProps> = ({
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
    <path d="M7 7V17C7 19.76 9.24 22 12 22C14.76 22 17 19.76 17 17V7C17 4.24 14.76 2 12 2C9.24 2 7 4.24 7 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12C14.7614 12 17 14.2386 17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17C7 14.2386 9.23858 12 12 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15.5V18.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ToggleDownLineIcon.displayName = 'ToggleDownLineIcon';

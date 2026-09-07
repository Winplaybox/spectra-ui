import React from 'react';
import { IconProps } from '../types';

export const ToggleRightLineIcon: React.FC<IconProps> = ({
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
    <path d="M7 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17C14.2386 17 12 14.7614 12 12C12 9.23858 14.2386 7 17 7C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10.5V13.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ToggleRightLineIcon.displayName = 'ToggleRightLineIcon';

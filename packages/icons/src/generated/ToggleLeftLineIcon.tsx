import React from 'react';
import { IconProps } from '../types';

export const ToggleLeftLineIcon: React.FC<IconProps> = ({
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
    <path d="M17 17H7C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7H17C19.76 7 22 9.24 22 12C22 14.76 19.76 17 17 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 10.5V13.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ToggleLeftLineIcon.displayName = 'ToggleLeftLineIcon';

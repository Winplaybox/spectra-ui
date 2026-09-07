import React from 'react';
import { IconProps } from '../types';

export const RepeatOnceIcon: React.FC<IconProps> = ({
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
    <path d="M6 17H5C3.3 17 2 15.7 2 14C2 12.3 3.3 11 5 11H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M11 11L9 9.75V12.25L11 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M20.29 11.28C21.31 11.74 22 12.77 22 14C22 15.7 20.7 17 19 17H13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M13 17L15 18.25L15 15.75L13 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M14 8C14 10.21 15.79 12 18 12C20.21 12 22 10.21 22 8C22 5.79 20.21 4 18 4C15.79 4 14 5.79 14 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 6V10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
  </svg>
);

RepeatOnceIcon.displayName = 'RepeatOnceIcon';

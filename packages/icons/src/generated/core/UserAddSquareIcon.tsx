import React from 'react';
import { IconProps } from '../../types';

export const UserAddSquareIcon: React.FC<IconProps> = ({
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
    <path d="M20 13C19.17 12.37 18.13 12 17 12C14.24 12 12 14.24 12 17C12 18.13 12.37 19.17 13 20H5C3.34 20 2 18.66 2 17V5C2 3.34 3.34 2 5 2H17C18.66 2 20 3.34 20 5V13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.84 14.22C12.31 15.02 12 15.97 12 17C12 18.13 12.37 19.17 13 20H5.00001C4.41001 20 3.85001 19.83 3.39001 19.53C4.43001 16.32 7.44001 14 11 14C11.64 14 12.25 14.07 12.84 14.22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22C19.76 22 22 19.76 22 17C22 14.24 19.76 12 17 12C14.24 12 12 14.24 12 17C12 19.76 14.24 22 17 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M17 14V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
  </svg>
);

UserAddSquareIcon.displayName = 'UserAddSquareIcon';

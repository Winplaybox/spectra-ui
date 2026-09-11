import React from 'react';
import { IconProps } from '../../types';

export const UserUnknownSquareIcon: React.FC<IconProps> = ({
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
    <path d="M20 11V5C20 3.34 18.66 2 17 2H5C3.34 2 2 3.34 2 5V17C2 18.07 2.55 19 3.39 19.53C3.48 19.59 3.58 19.65 3.68 19.69C3.73 19.72 3.78 19.74 3.83 19.76C3.92 19.8 4.01 19.83 4.11 19.86C4.16 19.88 4.22 19.9 4.28 19.91C4.29 19.91 4.29 19.91 4.3 19.91C4.35 19.93 4.42 19.94 4.47 19.95C4.54 19.97 4.6 19.98 4.67 19.98C4.78 19.99 4.89 20 5 20H17" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.08 15.12C13.88 14.41 12.49 14 11 14C7.44001 14 4.43001 16.32 3.39001 19.53C3.48001 19.59 3.58001 19.65 3.68001 19.69C3.73001 19.72 3.78001 19.74 3.83001 19.76C3.92001 19.8 4.01001 19.83 4.11001 19.86C4.16001 19.88 4.22001 19.9 4.28001 19.91C4.29001 19.91 4.29001 19.91 4.30001 19.91C4.35001 19.93 4.42001 19.94 4.47001 19.95C4.54001 19.97 4.60001 19.98 4.67001 19.98C4.78001 19.99 4.89001 20 5.00001 20H17" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 22H20.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 16.04C18.04 15.75 18.16 15.21 18.56 14.73C18.66 14.6 18.85 14.37 19.18 14.2C19.58 14 19.94 14 20.1 14C20.28 14 20.71 14.02 21.15 14.31C21.69 14.67 21.86 15.19 21.91 15.35C21.94 15.43 22.1 15.96 21.91 16.56C21.8 16.94 21.6 17.18 21.43 17.39C20.73 18.22 20.11 18.15 20 18.69C19.99 18.71 20 18.82 20 19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UserUnknownSquareIcon.displayName = 'UserUnknownSquareIcon';

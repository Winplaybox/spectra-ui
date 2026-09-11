import React from 'react';
import { IconProps } from '../../types';

export const UserEditSquareIcon: React.FC<IconProps> = ({
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
    <path d="M20 9.71V5C20 3.34 18.66 2 17 2H5C3.34 2 2 3.34 2 5V17C2 18.07 2.55 19 3.39 19.53C3.48 19.59 3.58 19.64 3.68 19.69C3.82 19.76 3.96 19.82 4.11 19.86C4.16 19.88 4.22 19.9 4.28 19.91C4.34 19.93 4.41 19.94 4.47 19.95C4.54 19.97 4.6 19.98 4.67 19.98C4.78 19.99 4.89 20 5 20H14.06" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.34 16.05C14.92 14.77 13.05 14 11 14C7.44001 14 4.43001 16.32 3.39001 19.53C3.48001 19.59 3.58001 19.65 3.68001 19.69C3.82001 19.76 3.96001 19.82 4.11001 19.86C4.16001 19.88 4.22001 19.9 4.28001 19.91C4.34001 19.93 4.41001 19.94 4.47001 19.95C4.54001 19.97 4.60001 19.98 4.67001 19.98C4.78001 19.99 4.89001 20 5.00001 20H14.06" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.64 15.6L18.16 19.89L18.1 21L19.02 20.39L21.5 16.1L20.64 15.6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

UserEditSquareIcon.displayName = 'UserEditSquareIcon';

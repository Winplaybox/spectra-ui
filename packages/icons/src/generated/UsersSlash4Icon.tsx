import React from 'react';
import { IconProps } from '../types';

export const UsersSlash4Icon: React.FC<IconProps> = ({
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
    <path d="M17.64 14.97C16.71 14.79 16 13.98 16 13C16 12.86 16.02 12.71 16.05 12.58C14.99 11.6 13.57 11 12 11C10.43 11 9.00997 11.6 7.94997 12.58C7.97997 12.71 7.99997 12.86 7.99997 13C7.99997 13.98 7.28997 14.79 6.35997 14.97C6.34997 14.99 6.33997 15 6.33997 15.02C8.38997 15.19 9.99997 16.9 9.99997 19H14C14 16.9 15.61 15.19 17.66 15.02C17.66 15 17.65 14.99 17.64 14.97Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15C15.79 15 14 16.79 14 19C14.01 19 22 19 22 19C22 16.79 20.21 15 18 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15C19.1046 15 20 14.1046 20 13C20 11.8954 19.1046 11 18 11C16.8954 11 16 11.8954 16 13C16 14.1046 16.8954 15 18 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15C3.79 15 2 16.79 2 19C2.01 19 10 19 10 19C10 16.79 8.21 15 6 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15C7.10457 15 8 14.1046 8 13C8 11.8954 7.10457 11 6 11C4.89543 11 4 11.8954 4 13C4 14.1046 4.89543 15 6 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.23001 2L17.77 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UsersSlash4Icon.displayName = 'UsersSlash4Icon';

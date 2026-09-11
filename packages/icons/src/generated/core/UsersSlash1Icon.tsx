import React from 'react';
import { IconProps } from '../../types';

export const UsersSlash1Icon: React.FC<IconProps> = ({
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
    <path d="M12 19C12 17.16 11 15.54 9.51001 14.67C10.78 13.04 12.77 12 15 12C18.87 12 22 15.13 22 19C22 19 16.14 19 12 19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12C16.933 12 18.5 10.433 18.5 8.5C18.5 6.567 16.933 5 15 5C13.067 5 11.5 6.567 11.5 8.5C11.5 10.433 13.067 12 15 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 14C4.24 14 2 16.24 2 19C2.01 19 12 19 12 19C12 16.24 9.76 14 7 14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 14C8.38071 14 9.5 12.8807 9.5 11.5C9.5 10.1193 8.38071 9 7 9C5.61929 9 4.5 10.1193 4.5 11.5C4.5 12.8807 5.61929 14 7 14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.22998 2L17.77 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UsersSlash1Icon.displayName = 'UsersSlash1Icon';

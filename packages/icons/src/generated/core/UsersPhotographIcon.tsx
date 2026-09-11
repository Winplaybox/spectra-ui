import React from 'react';
import { IconProps } from '../../types';

export const UsersPhotographIcon: React.FC<IconProps> = ({
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
    <path d="M15.5 16.5C12.46 16.5 10 18.96 10 22C10.01 22 21 22 21 22C21 18.96 18.54 16.5 15.5 16.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 16.5C17.0188 16.5 18.25 15.2688 18.25 13.75C18.25 12.2312 17.0188 11 15.5 11C13.9812 11 12.75 12.2312 12.75 13.75C12.75 15.2688 13.9812 16.5 15.5 16.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 22C7.86 22 3.01 22 3 22C3 19.79 4.79 18 7 18C8.45 18 9.71 18.77 10.41 19.92C10.15 20.56 10 21.26 10 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 18C8.10457 18 9 17.1046 9 16C9 14.8954 8.10457 14 7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8H2V22H22V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 2H16" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5H19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UsersPhotographIcon.displayName = 'UsersPhotographIcon';

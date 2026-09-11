import React from 'react';
import { IconProps } from '../../types';

export const ShareCirclesSlashIcon: React.FC<IconProps> = ({
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
    <path d="M17.5 9C19.433 9 21 7.433 21 5.5C21 3.567 19.433 2 17.5 2C15.567 2 14 3.567 14 5.5C14 7.433 15.567 9 17.5 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M17.5 22C19.433 22 21 20.433 21 18.5C21 16.567 19.433 15 17.5 15C15.567 15 14 16.567 14 18.5C14 20.433 15.567 22 17.5 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M6.5 15.5C8.433 15.5 10 13.933 10 12C10 10.067 8.433 8.5 6.5 8.5C4.567 8.5 3 10.067 3 12C3 13.933 4.567 15.5 6.5 15.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M14.49 7.28003L9.51001 10.22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.49 16.72L9.51001 13.78" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ShareCirclesSlashIcon.displayName = 'ShareCirclesSlashIcon';

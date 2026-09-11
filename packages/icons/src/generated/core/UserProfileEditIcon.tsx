import React from 'react';
import { IconProps } from '../../types';

export const UserProfileEditIcon: React.FC<IconProps> = ({
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
    <path d="M20.0001 21C16.4601 21.8 13.3501 22 11.0001 22C7.35006 22 4.28006 21.51 2.00006 21C2.00006 16.58 6.03006 13 11.0001 13C15.9701 13 20.0001 16.58 20.0001 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.0001 10C13.2092 10 15.0001 8.20914 15.0001 6C15.0001 3.79086 13.2092 2 11.0001 2C8.79092 2 7.00006 3.79086 7.00006 6C7.00006 8.20914 8.79092 10 11.0001 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.1401 3L18.6601 7.29L18.6001 8.4L19.5201 7.79L22.0001 3.5L21.1401 3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

UserProfileEditIcon.displayName = 'UserProfileEditIcon';

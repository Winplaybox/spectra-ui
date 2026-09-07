import React from 'react';
import { IconProps } from '../types';

export const UserSettingsIcon: React.FC<IconProps> = ({
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
    <path d="M9 11C10.933 11 12.5 9.433 12.5 7.5C12.5 5.567 10.933 4 9 4C7.067 4 5.5 5.567 5.5 7.5C5.5 9.433 7.067 11 9 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20H4C2.9 20 2 19.1 2 18C2 15.79 3.79 14 6 14H12C14.21 14 16 15.79 16 18C16 19.1 15.1 20 14 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 14V12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M18.5 7V5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M16 9.5H14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M23 9.5H21" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M21.68 12.68L20.27 11.27" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M16.73 7.73001L15.32 6.32001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M16.73 11.27L15.32 12.68" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M21.68 6.32001L20.27 7.73001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M18.5 12C19.8807 12 21 10.8807 21 9.5C21 8.11929 19.8807 7 18.5 7C17.1193 7 16 8.11929 16 9.5C16 10.8807 17.1193 12 18.5 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

UserSettingsIcon.displayName = 'UserSettingsIcon';

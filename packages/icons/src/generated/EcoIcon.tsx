import React from 'react';
import { IconProps } from '../types';

export const EcoIcon: React.FC<IconProps> = ({
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
    <path d="M3 13C3 18 7 22 12 22C17 22 21 18 21 13C21 8 17 4 12 4H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4L13 2.75V5.25L11 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M7.20739 7C8.10672 8.33306 9.40573 9.87122 11.2044 10.0763C12.7032 10.2814 13.5026 9.56359 14.402 10.0763C15.8009 10.9992 16.4005 14.0755 14.9016 15.7162C13.8024 17.0493 11.8039 17.2543 10.5049 16.7416C8.00679 15.8187 6.408 11.8195 7.20739 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5034 13.7678C12.5034 13.7678 14.6018 16.1263 17 16.5365" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

EcoIcon.displayName = 'EcoIcon';

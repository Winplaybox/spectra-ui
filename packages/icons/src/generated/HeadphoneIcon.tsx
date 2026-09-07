import React from 'react';
import { IconProps } from '../types';

export const HeadphoneIcon: React.FC<IconProps> = ({
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
    <path d="M2 19V12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12V19" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19 22H17V14H19C20.1 14 21 14.9 21 16V20C21 21.1 20.1 22 19 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5 14H7V22H5C3.9 22 3 21.1 3 20V16C3 14.9 3.9 14 5 14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

HeadphoneIcon.displayName = 'HeadphoneIcon';

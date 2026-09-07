import React from 'react';
import { IconProps } from '../types';

export const PhoneLeftSlashIcon: React.FC<IconProps> = ({
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
    <path d="M16.46 13.55L14.34 15.67L8.32999 9.66L10.45 7.54L5.90999 3L3.78999 5.12C1.83999 7.07 3.62999 12.03 7.79999 16.2C11.97 20.37 16.93 22.16 18.88 20.21L21 18.09L16.46 13.55Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3L3 21" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PhoneLeftSlashIcon.displayName = 'PhoneLeftSlashIcon';

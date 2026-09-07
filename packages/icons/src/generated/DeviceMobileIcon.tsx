import React from 'react';
import { IconProps } from '../types';

export const DeviceMobileIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M16 22H8C6.9 22 6 21.1 6 20V4C6 2.9 6.9 2 8 2H16C17.1 2 18 2.9 18 4V20C18 21.1 17.1 22 16 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.47 3H10.53C10.51 3 10.5 2.99 10.5 2.97V2H13.5V2.97C13.5 2.99 13.49 3 13.47 3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

DeviceMobileIcon.displayName = 'DeviceMobileIcon';

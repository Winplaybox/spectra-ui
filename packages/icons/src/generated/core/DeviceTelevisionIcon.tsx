import React from 'react';
import { IconProps } from '../../types';

export const DeviceTelevisionIcon: React.FC<IconProps> = ({
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
    <path d="M18.5 21H5.5C5.22 21 5 20.78 5 20.5C5 20.22 5.22 20 5.5 20H18.5C18.78 20 19 20.22 19 20.5C19 20.78 18.78 21 18.5 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16V20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 16H2.5C2.22 16 2 15.78 2 15.5V3.5C2 3.22 2.22 3 2.5 3H21.5C21.78 3 22 3.22 22 3.5V15.5C22 15.78 21.78 16 21.5 16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

DeviceTelevisionIcon.displayName = 'DeviceTelevisionIcon';

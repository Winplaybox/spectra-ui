import React from 'react';
import { IconProps } from '../../types';

export const DeviceLaptopIcon: React.FC<IconProps> = ({
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
    <path d="M19.5 17H4.5C4.22 17 4 16.78 4 16.5V6.5C4 6.22 4.22 6 4.5 6H19.5C19.78 6 20 6.22 20 6.5V16.5C20 16.78 19.78 17 19.5 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 18H22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

DeviceLaptopIcon.displayName = 'DeviceLaptopIcon';

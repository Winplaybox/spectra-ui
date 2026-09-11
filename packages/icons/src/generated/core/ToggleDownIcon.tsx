import React from 'react';
import { IconProps } from '../../types';

export const ToggleDownIcon: React.FC<IconProps> = ({
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
    <path d="M8 6L8 18C8 20.21 9.79 22 12 22C14.21 22 16 20.21 16 18L16 6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 18C8 15.7909 9.79086 14 12 14C14.2091 14 16 15.7909 16 18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ToggleDownIcon.displayName = 'ToggleDownIcon';

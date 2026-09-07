import React from 'react';
import { IconProps } from '../types';

export const PhoneRightIcon: React.FC<IconProps> = ({
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
    <path d="M13.55 7.54L15.67 9.66L9.66 15.67L7.54 13.55L3 18.09L5.12 20.21C7.07 22.16 12.03 20.37 16.2 16.2C20.37 12.03 22.16 7.07 20.21 5.12L18.09 3L13.55 7.54Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PhoneRightIcon.displayName = 'PhoneRightIcon';

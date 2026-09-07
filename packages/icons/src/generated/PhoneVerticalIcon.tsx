import React from 'react';
import { IconProps } from '../types';

export const PhoneVerticalIcon: React.FC<IconProps> = ({
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
    <path d="M8 12C8 6.48 10.24 2 13 2H16V8H13V16H16V22H13C10.24 22 8 17.52 8 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PhoneVerticalIcon.displayName = 'PhoneVerticalIcon';

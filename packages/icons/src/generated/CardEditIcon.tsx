import React from 'react';
import { IconProps } from '../types';

export const CardEditIcon: React.FC<IconProps> = ({
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
    <path d="M22 14V8H2V15.5C2 16.33 2.67 17 3.5 17H12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22 8H2V4.5C2 3.67 2.67 3 3.5 3H20.5C21.33 3 22 3.67 22 4.5V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 7H2V8H22V7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M17.84 14.6001L15.36 18.8901L15.3 20.0001L16.22 19.3901L18.7 15.1001L17.84 14.6001Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

CardEditIcon.displayName = 'CardEditIcon';

import React from 'react';
import { IconProps } from '../types';

export const PowerIcon: React.FC<IconProps> = ({
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
    <path d="M17 7.76001C18.83 9.22001 20 11.47 20 14C20 18.42 16.42 22 12 22C7.58 22 4 18.42 4 14C4 11.47 5.17 9.22001 7 7.76001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11C11.17 11 10.5 10.33 10.5 9.5V3.5C10.5 2.67 11.17 2 12 2C12.83 2 13.5 2.67 13.5 3.5V9.5C13.5 10.33 12.83 11 12 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PowerIcon.displayName = 'PowerIcon';

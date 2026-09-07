import React from 'react';
import { IconProps } from '../types';

export const ExclamationMark3Icon: React.FC<IconProps> = ({
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
    <path d="M4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13C12.76 13 13.33 12.48 13.42 11.78L13.99 6.56C14.09 5.7 13.42 5 12.57 5H11.43C10.58 5 9.91003 5.7 10.01 6.57L10.58 11.79C10.67 12.48 11.24 13 12 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19C12.83 19 13.5 18.33 13.5 17.5C13.5 16.67 12.83 16 12 16C11.17 16 10.5 16.67 10.5 17.5C10.5 18.33 11.17 19 12 19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ExclamationMark3Icon.displayName = 'ExclamationMark3Icon';

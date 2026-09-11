import React from 'react';
import { IconProps } from '../../types';

export const PrinterIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M19 7H5V3C5 2.45 5.45 2 6 2H18C18.55 2 19 2.45 19 3V7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18 17V14H6V17H3C2.45 17 2 16.55 2 16V8C2 7.45 2.45 7 3 7H21C21.55 7 22 7.45 22 8V16C22 16.55 21.55 17 21 17H18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M4 10H7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17 22H7C6.45 22 6 21.55 6 21V14H18V21C18 21.55 17.55 22 17 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

PrinterIcon.displayName = 'PrinterIcon';

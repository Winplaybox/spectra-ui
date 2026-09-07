import React from 'react';
import { IconProps } from '../types';

export const PrinterLargeIcon: React.FC<IconProps> = ({
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
    <path d="M7 2H17V8H7V2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M6 19H18L19 22H5L6 19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M2 9C2 8.44771 2.44772 8 3 8H21C21.5523 8 22 8.44772 22 9V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M2 14H22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M5 11H6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="bevel"/>
<path d="M9 11H10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="bevel"/>
  </svg>
);

PrinterLargeIcon.displayName = 'PrinterLargeIcon';

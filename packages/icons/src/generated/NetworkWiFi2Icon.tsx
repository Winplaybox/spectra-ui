import React from 'react';
import { IconProps } from '../types';

export const NetworkWiFi2Icon: React.FC<IconProps> = ({
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
    <path d="M11.99 19.5H12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20C12.2761 20 12.5 19.7761 12.5 19.5C12.5 19.2239 12.2761 19 12 19C11.7239 19 11.5 19.2239 11.5 19.5C11.5 19.7761 11.7239 20 12 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M8.44995 15.3C9.40995 14.49 10.65 14 12 14C13.35 14 14.59 14.49 15.55 15.3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M5.22998 11.48C7.04998 9.93 9.40998 9 12 9C14.59 9 16.95 9.93 18.77 11.48" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M2 7.66C4.7 5.37 8.19 4 12 4C15.81 4 19.3 5.37 22 7.66" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
  </svg>
);

NetworkWiFi2Icon.displayName = 'NetworkWiFi2Icon';

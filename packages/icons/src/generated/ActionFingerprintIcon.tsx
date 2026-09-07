import React from 'react';
import { IconProps } from '../types';

export const ActionFingerprintIcon: React.FC<IconProps> = ({
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
    <path d="M2 6.97C2.93 5.66 4.13 4.56 5.51 3.73C6 3.42 6.52 3.16 7.06 2.94C7.42 2.78 7.79 2.65 8.17 2.54C8.55 2.42 8.93 2.32 9.32 2.24C9.52 2.2 9.71 2.16 9.91 2.14C10.1 2.11 10.29 2.08 10.48 2.06C10.5 2.06 10.52 2.06 10.54 2.06C10.73 2.04 10.92 2.02 11.12 2.02C11.32 2.01 11.52 2 11.72 2H11.74C12.04 2 12.35 2.01 12.65 2.04C12.95 2.06 13.24 2.09 13.53 2.13C13.58 2.14 13.63 2.15 13.68 2.16C13.99 2.21 14.3 2.27 14.61 2.35C14.68 2.36 14.74 2.38 14.81 2.4" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.47 4.07007C18.78 4.28007 19.08 4.51007 19.38 4.74007C19.39 4.74007 19.4 4.75007 19.41 4.77007C20.16 5.40007 20.83 6.12007 21.42 6.93007C21.63 7.21007 21.82 7.51007 22 7.81007" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9399 5.04C11.1899 5.01 11.4499 5 11.7099 5C12.1799 5 12.6399 5.04 13.1099 5.11C15.4799 5.48 17.5699 6.76 18.9899 8.7C20.1399 10.28 20.7299 12.14 20.7199 14.06" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.95 18.0601C19.57 19.2201 18.99 20.6001 18.12 22.0001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.84998 12.43C3.31998 9.76 4.90998 7.54 7.11998 6.25" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.67 13.28C17.74 13.82 17.73 14.38 17.64 14.93C17.46 16.07 16.78 19.16 14.45 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.83 9.64C14.96 8.81 13.86 8.26 12.64 8.07C12.34 8.02 12.02 8 11.71 8C9.01001 8 6.71001 9.76 5.97001 12.28C5.89001 12.53 5.83001 12.79 5.79001 13.06C5.79001 13.08 5.57001 14.29 4.64001 14.85" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.17004 17.4199C8.28004 16.1699 8.71004 13.7999 8.75004 13.5399C9.01004 11.8999 10.54 10.7799 12.18 11.0399C13.81 11.2899 14.93 12.8299 14.68 14.4699C14.49 15.6399 13.64 19.4399 10.11 21.9999" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.71 14C11.63 14.5 11.02 18.03 7.70996 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionFingerprintIcon.displayName = 'ActionFingerprintIcon';

import React from 'react';
import { IconProps } from '../../types';

export const PhoneWavesIcon: React.FC<IconProps> = ({
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
    <path d="M15.0004 15.1788C15.6281 14.2934 16 13.1927 16 12C16 10.8073 15.6281 9.7066 15.0004 8.82111" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17.6072C18.2447 16.1128 19 14.1499 19 12C19 9.85019 18.2447 7.88725 17 6.3929" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 20C20.8598 17.9125 22 15.0974 22 12C22 8.90265 20.8598 6.08748 19 4" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15L11 9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2H6C8.20914 2 10 3.79086 10 6V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

PhoneWavesIcon.displayName = 'PhoneWavesIcon';

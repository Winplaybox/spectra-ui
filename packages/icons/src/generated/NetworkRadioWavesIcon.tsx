import React from 'react';
import { IconProps } from '../types';

export const NetworkRadioWavesIcon: React.FC<IconProps> = ({
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
    <path d="M8.99963 8.82117C8.37194 9.70665 8 10.8073 8 12C8 13.1927 8.37194 14.2934 8.99963 15.1789" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.0004 15.1788C15.6281 14.2934 16 13.1927 16 12C16 10.8073 15.6281 9.7066 15.0004 8.82111" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 6.39288C5.75527 7.88723 5 9.85016 5 12C5 14.1499 5.75527 16.1128 7 17.6072" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17.6071C18.2447 16.1128 19 14.1498 19 12C19 9.85012 18.2447 7.88719 17 6.39284" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 4C3.14015 6.08747 2 8.90265 2 12C2 15.0973 3.14015 17.9125 5 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 20C20.8598 17.9125 22 15.0974 22 12C22 8.90265 20.8598 6.08748 19 4" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="12" r="1" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

NetworkRadioWavesIcon.displayName = 'NetworkRadioWavesIcon';

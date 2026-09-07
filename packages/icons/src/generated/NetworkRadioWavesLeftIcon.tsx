import React from 'react';
import { IconProps } from '../types';

export const NetworkRadioWavesLeftIcon: React.FC<IconProps> = ({
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
    <path d="M13.7495 15.9736C12.9649 14.8667 12.5 13.4909 12.5 12C12.5 10.5091 12.9649 9.13327 13.7495 8.02642" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.25 19.0089C9.69409 17.141 8.75 14.6873 8.75 12C8.75 9.31267 9.69409 6.859 11.25 4.99107" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.75 22C6.42519 19.3907 5 15.8717 5 12C5 8.12831 6.42519 4.60934 8.75 2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<ellipse cx="1" cy="1" rx="1" ry="1" transform="matrix(-1 0 0 1 19 11)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

NetworkRadioWavesLeftIcon.displayName = 'NetworkRadioWavesLeftIcon';

import React from 'react';
import { IconProps } from '../../types';

export const NetworkRadioWavesRightIcon: React.FC<IconProps> = ({
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
    <path d="M10.2505 15.9736C11.0351 14.8667 11.5 13.4909 11.5 12C11.5 10.5091 11.0351 9.13327 10.2505 8.02642" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.75 19.0089C14.3059 17.141 15.25 14.6873 15.25 12C15.25 9.31267 14.3059 6.859 12.75 4.99107" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.25 22C17.5748 19.3907 19 15.8717 19 12C19 8.12831 17.5748 4.60934 15.25 2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<ellipse cx="6" cy="12" rx="1" ry="1" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

NetworkRadioWavesRightIcon.displayName = 'NetworkRadioWavesRightIcon';

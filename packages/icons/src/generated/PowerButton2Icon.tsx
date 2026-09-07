import React from 'react';
import { IconProps } from '../types';

export const PowerButton2Icon: React.FC<IconProps> = ({
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
    <circle cx="12" cy="12" r="10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path d="M9 7.3894C7.4949 8.37075 6.5 10.0692 6.5 11.9999C6.5 15.0375 8.96243 17.4999 12 17.4999C15.0376 17.4999 17.5 15.0375 17.5 11.9999C17.5 10.0692 16.5051 8.37075 15 7.3894" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

PowerButton2Icon.displayName = 'PowerButton2Icon';

import React from 'react';
import { IconProps } from '../types';

export const MediaGoReverseForwardIcon: React.FC<IconProps> = ({
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
    <path d="M21 11C21 6 17 2 12 2C7 2 3 6 3 11C3 16 7 20 12 20H13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 20L11 21.25V18.75L13 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

MediaGoReverseForwardIcon.displayName = 'MediaGoReverseForwardIcon';

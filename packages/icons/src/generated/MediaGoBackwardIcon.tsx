import React from 'react';
import { IconProps } from '../types';

export const MediaGoBackwardIcon: React.FC<IconProps> = ({
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
    <path d="M3 13C3 18 7 22 12 22C17 22 21 18 21 13C21 8 17 4 12 4H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4L13 2.75V5.25L11 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

MediaGoBackwardIcon.displayName = 'MediaGoBackwardIcon';

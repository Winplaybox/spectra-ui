import React from 'react';
import { IconProps } from '../../types';

export const MediaGoReverseBackwardIcon: React.FC<IconProps> = ({
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
    <path d="M3 11C3 6 7 2 12 2C17 2 21 6 21 11C21 16 17 20 12 20H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 20L13 21.25V18.75L11 20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

MediaGoReverseBackwardIcon.displayName = 'MediaGoReverseBackwardIcon';

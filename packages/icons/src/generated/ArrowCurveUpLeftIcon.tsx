import React from 'react';
import { IconProps } from '../types';

export const ArrowCurveUpLeftIcon: React.FC<IconProps> = ({
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
    <path d="M22 19.12C20.56 20.27 18.74 21 16.73 21C11.93 21 8 16.71 8 11.48V3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9L8 3L14 9" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArrowCurveUpLeftIcon.displayName = 'ArrowCurveUpLeftIcon';

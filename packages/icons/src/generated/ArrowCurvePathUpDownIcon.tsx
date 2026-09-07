import React from 'react';
import { IconProps } from '../types';

export const ArrowCurvePathUpDownIcon: React.FC<IconProps> = ({
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
    <path d="M18 2L18 16C18 17.7 16.7 19 15 19C13.3 19 12 17.7 12 16L12 8C12 6.3 10.7 5 9 5C7.3 5 6 6.3 6 8L6 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18L6 22L2 18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6L18 2L14 6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArrowCurvePathUpDownIcon.displayName = 'ArrowCurvePathUpDownIcon';

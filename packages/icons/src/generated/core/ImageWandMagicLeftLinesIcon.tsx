import React from 'react';
import { IconProps } from '../../types';

export const ImageWandMagicLeftLinesIcon: React.FC<IconProps> = ({
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
    <path d="M9.23999 9.23999L13.84 13.84" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M3.93994 3.93994L6.40994 6.40994" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.94995 2V5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9.94995H2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.49 21.49C20.81 22.17 19.7 22.17 19.02 21.49L9.24999 11.72C8.56999 11.04 8.56999 9.92999 9.24999 9.24999C9.92999 8.56999 11.04 8.56999 11.72 9.24999L21.49 19.02C22.17 19.7 22.17 20.8 21.49 21.49Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageWandMagicLeftLinesIcon.displayName = 'ImageWandMagicLeftLinesIcon';

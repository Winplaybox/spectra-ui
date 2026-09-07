import React from 'react';
import { IconProps } from '../types';

export const ImageWandMagicLeftStarsIcon: React.FC<IconProps> = ({
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
    <path d="M9.25 9.25L13.84 13.84" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M11.6 3.1L11.94 3.21L12.22 3L12.21 3.36L12.5 3.56L12.17 3.67L12.06 4L11.86 3.71L11.5 3.72L11.71 3.44L11.6 3.1Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M3.1 11.6L3.44 11.71L3.72 11.5L3.71 11.86L4 12.06L3.67 12.17L3.56 12.5L3.36 12.21L3 12.22L3.21 11.94L3.1 11.6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M3.7 3.7L4.37 3.93L4.94 3.5L4.93 4.21L5.5 4.62L4.83 4.83L4.62 5.5L4.21 4.93L3.5 4.94L3.93 4.37L3.7 3.7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M21.49 21.49C20.81 22.17 19.7 22.17 19.02 21.49L9.24999 11.72C8.56999 11.04 8.56999 9.92999 9.24999 9.24999C9.92999 8.56999 11.04 8.56999 11.72 9.24999L21.49 19.02C22.17 19.7 22.17 20.81 21.49 21.49Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageWandMagicLeftStarsIcon.displayName = 'ImageWandMagicLeftStarsIcon';

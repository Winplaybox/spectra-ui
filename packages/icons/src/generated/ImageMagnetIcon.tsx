import React from 'react';
import { IconProps } from '../types';

export const ImageMagnetIcon: React.FC<IconProps> = ({
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
    <path d="M4.94004 20.37C1.12004 17.35 1.06004 11.56 4.52004 8.13L10.67 2L13.26 4.58L7.01004 10.79C5.10004 12.69 5.13004 15.91 7.26004 17.55C9.31004 19.13 11.76 18.3 13.74 16.32L19.4 10.69L22 13.27L16.34 18.9C13.01 22.21 8.44004 23.13 4.94004 20.37Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.6701 7.15L8.08008 4.58L10.6701 2L13.2601 4.58L10.6701 7.15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.4101 15.8399L16.8201 13.2699L19.4101 10.6899L22.0001 13.2699L19.4101 15.8399Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageMagnetIcon.displayName = 'ImageMagnetIcon';

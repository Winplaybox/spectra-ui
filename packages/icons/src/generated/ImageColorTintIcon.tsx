import React from 'react';
import { IconProps } from '../types';

export const ImageColorTintIcon: React.FC<IconProps> = ({
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
    <path d="M17.2399 11.75L12.8199 3.51C12.4599 2.83 11.5299 2.83 11.1699 3.51L6.74995 11.75C6.39995 12.41 6.17995 13.09 6.06995 13.78C7.27995 13.05 9.06995 11.37 11.9899 13.84C14.3899 15.88 16.6999 14.59 17.9199 13.89C17.8399 13.17 17.6099 12.45 17.2399 11.75Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.94 13.8901C16.71 14.5901 14.41 15.8801 12.01 13.8401C9.08 11.3701 7.29 13.0501 6.09 13.7801C5.5 17.4001 8.15 21.0001 12 21.0001C15.81 21.0001 18.45 17.4701 17.94 13.8901Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageColorTintIcon.displayName = 'ImageColorTintIcon';

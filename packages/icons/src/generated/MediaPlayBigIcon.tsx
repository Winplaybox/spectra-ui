import React from 'react';
import { IconProps } from '../types';

export const MediaPlayBigIcon: React.FC<IconProps> = ({
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
    <path d="M18.51 11.14L6.51 4.13998C5.84 3.74998 5 4.22998 5 4.99998V19C5 19.77 5.84 20.25 6.5 19.86L18.5 12.86C19.17 12.48 19.17 11.52 18.51 11.14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaPlayBigIcon.displayName = 'MediaPlayBigIcon';

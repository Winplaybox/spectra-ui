import React from 'react';
import { IconProps } from '../types';

export const ImageContrastLeftIcon: React.FC<IconProps> = ({
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
    <circle cx="12" cy="12" r="10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M2 12C2 17.5228 6.47715 22 12 22V2C6.47715 2 2 6.47715 2 12Z" fill={color || 'currentColor'}/>
<path d="M2 12C2 17.5228 6.47715 22 12 22V2C6.47715 2 2 6.47715 2 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

ImageContrastLeftIcon.displayName = 'ImageContrastLeftIcon';

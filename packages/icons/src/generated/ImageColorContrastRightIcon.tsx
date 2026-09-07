import React from 'react';
import { IconProps } from '../types';

export const ImageColorContrastRightIcon: React.FC<IconProps> = ({
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
    <circle cx="10" cy="10" r="10" transform="matrix(-1 0 0 1 22 2)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M22 12C22 17.5228 17.5228 22 12 22V2C17.5228 2 22 6.47715 22 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M22 12C22 17.5228 17.5228 22 12 22V2C17.5228 2 22 6.47715 22 12Z" fill={color || 'currentColor'}/>
  </svg>
);

ImageColorContrastRightIcon.displayName = 'ImageColorContrastRightIcon';

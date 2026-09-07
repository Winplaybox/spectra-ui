import React from 'react';
import { IconProps } from '../types';

export const ImageGridIcon: React.FC<IconProps> = ({
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
    <path d="M15 22L15 13L22 13L22 20C22 21.1046 21.1046 22 20 22L15 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<rect x="9" y="22" width="9" height="6" transform="rotate(-90 9 22)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M4 22C2.89543 22 2 21.1046 2 20L2 13L9 13L9 22L4 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<rect x="2" y="13" width="5" height="10" transform="rotate(-90 2 13)" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M12 13L12 2L20 2C21.1046 2 22 2.89543 22 4L22 13L12 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M2 13L2 4C2 2.89543 2.89543 2 4 2L20 2C21.1046 2 22 2.89543 22 4L22 13L2 13Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

ImageGridIcon.displayName = 'ImageGridIcon';

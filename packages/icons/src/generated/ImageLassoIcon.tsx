import React from 'react';
import { IconProps } from '../types';

export const ImageLassoIcon: React.FC<IconProps> = ({
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
    <path d="M3.64848 22C3.05956 19.8004 3.64848 15.4011 10.7155 15.4011C12.5873 15.4011 14.3026 17.6111 9.1201 20.0107C2.64197 23.0102 -4.59641 5.80265 13.0712 2.20324C16.5498 1.49456 22.8473 2.4432 21.905 8.20226C20.9628 13.9613 16.8011 17.0008 14.838 17.8007" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

ImageLassoIcon.displayName = 'ImageLassoIcon';

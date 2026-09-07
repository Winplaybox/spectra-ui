import React from 'react';
import { IconProps } from '../types';

export const ActivityRectangleIcon: React.FC<IconProps> = ({
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
    <path d="M22 12H19L16 16L13 8L10 14.1L7 9L5 12H2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="square" strokeLinejoin="round"/>
<path d="M22 4H2V20H22V4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActivityRectangleIcon.displayName = 'ActivityRectangleIcon';

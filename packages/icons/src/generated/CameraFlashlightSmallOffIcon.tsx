import React from 'react';
import { IconProps } from '../types';

export const CameraFlashlightSmallOffIcon: React.FC<IconProps> = ({
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
    <path d="M18 10H11V4L4 14H11V20L18 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M16.5 1.5L21.5 6.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M21.5 1.5L16.5 6.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

CameraFlashlightSmallOffIcon.displayName = 'CameraFlashlightSmallOffIcon';

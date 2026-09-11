import React from 'react';
import { IconProps } from '../../types';

export const CameraFlashlightSmallIcon: React.FC<IconProps> = ({
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
    <path d="M19 10H12V4L5 14H12V20L19 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

CameraFlashlightSmallIcon.displayName = 'CameraFlashlightSmallIcon';

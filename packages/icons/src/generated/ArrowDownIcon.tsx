import React from 'react';
import { IconProps } from '../types';

export const ArrowDownIcon: React.FC<IconProps> = ({
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
    <path d="M12 21V3" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15L12 21L18 15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArrowDownIcon.displayName = 'ArrowDownIcon';

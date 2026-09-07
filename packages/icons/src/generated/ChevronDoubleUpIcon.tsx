import React from 'react';
import { IconProps } from '../types';

export const ChevronDoubleUpIcon: React.FC<IconProps> = ({
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
    <path d="M20 20L12 12L4 20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12L12 4L4 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ChevronDoubleUpIcon.displayName = 'ChevronDoubleUpIcon';

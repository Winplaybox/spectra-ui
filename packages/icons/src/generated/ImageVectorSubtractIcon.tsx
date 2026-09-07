import React from 'react';
import { IconProps } from '../types';

export const ImageVectorSubtractIcon: React.FC<IconProps> = ({
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
    <path d="M16 8H8V16H2V2H16V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M22 8H8V22H22V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M22 8H8V22H22V8Z" fill={color || 'currentColor'}/>
  </svg>
);

ImageVectorSubtractIcon.displayName = 'ImageVectorSubtractIcon';

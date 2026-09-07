import React from 'react';
import { IconProps } from '../types';

export const VideoArrowDownLeftIcon: React.FC<IconProps> = ({
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
    <path d="M17 18H3C2.45 18 2 17.55 2 17V7C2 6.45 2.45 6 3 6H17C17.55 6 18 6.45 18 7V17C18 17.55 17.55 18 17 18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 17V7L18 9V15L22 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 14L10 10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M8 14L6 12V14H8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

VideoArrowDownLeftIcon.displayName = 'VideoArrowDownLeftIcon';

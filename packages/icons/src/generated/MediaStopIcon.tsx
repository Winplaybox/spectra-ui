import React from 'react';
import { IconProps } from '../types';

export const MediaStopIcon: React.FC<IconProps> = ({
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
    <path d="M17 19H7C5.9 19 5 18.1 5 17V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V17C19 18.1 18.1 19 17 19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaStopIcon.displayName = 'MediaStopIcon';

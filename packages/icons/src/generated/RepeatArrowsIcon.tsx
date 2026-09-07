import React from 'react';
import { IconProps } from '../types';

export const RepeatArrowsIcon: React.FC<IconProps> = ({
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
    <path d="M6 15H5C3.3 15 2 13.7 2 12C2 10.3 3.3 9 5 9H12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M12 9L10 7.75V10.25L12 9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M18 9H19C20.7 9 22 10.3 22 12C22 13.7 20.7 15 19 15H12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M12 15L14 16.25L14 13.75L12 15Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

RepeatArrowsIcon.displayName = 'RepeatArrowsIcon';

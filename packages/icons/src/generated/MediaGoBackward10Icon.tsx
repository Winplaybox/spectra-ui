import React from 'react';
import { IconProps } from '../types';

export const MediaGoBackward10Icon: React.FC<IconProps> = ({
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
    <path d="M3 13C3 18 7 22 12 22C17 22 21 18 21 13C21 8 17 4 12 4H11" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4L13 2.75V5.25L11 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M8.99994 16V9L7.19995 10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 16H10.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.1 16H14.9C13.8 16 13 15.1 13 14.1V10.9C13 9.8 13.9 9 14.9 9H15.1C16.2 9 17 9.9 17 10.9V14.1C17 15.1 16.1 16 15.1 16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaGoBackward10Icon.displayName = 'MediaGoBackward10Icon';

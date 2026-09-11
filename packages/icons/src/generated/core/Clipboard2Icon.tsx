import React from 'react';
import { IconProps } from '../../types';

export const Clipboard2Icon: React.FC<IconProps> = ({
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
    <path d="M17 4H19C19.55 4 20 4.45 20 5V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V5C4 4.45 4.45 4 5 4H7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13 5H11V3C11 2.45 11.45 2 12 2C12.55 2 13 2.45 13 3V5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M15 4H9V5H15V4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Clipboard2Icon.displayName = 'Clipboard2Icon';

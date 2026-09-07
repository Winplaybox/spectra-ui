import React from 'react';
import { IconProps } from '../types';

export const DatabaseIcon: React.FC<IconProps> = ({
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
    <path d="M2 19C2 20.66 6.48 22 12 22C17.52 22 22 20.66 22 19V14C22 15.66 17.52 17 12 17C6.48 17 2 15.66 2 14V19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 14C22 15.66 17.52 17 12 17C6.48 17 2 15.66 2 14V9C2 10.66 6.48 12 12 12C17.52 12 22 10.66 22 9V14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 10.66 6.48 12 12 12C17.52 12 22 10.66 22 9V4.5C22 5.88 17.52 7 12 7C6.48 7 2 5.88 2 4.5V9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7C17.5228 7 22 5.88071 22 4.5C22 3.11929 17.5228 2 12 2C6.47715 2 2 3.11929 2 4.5C2 5.88071 6.47715 7 12 7Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

DatabaseIcon.displayName = 'DatabaseIcon';

import React from 'react';
import { IconProps } from '../../types';

export const FileMultipleIcon: React.FC<IconProps> = ({
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
    <path d="M6 6H3C2.45 6 2 6.45 2 7V21C2 21.55 2.45 22 3 22H17C17.55 22 18 21.55 18 21V18H7C6.45 18 6 17.55 6 17V6Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 18H7C6.45 18 6 17.55 6 17V3C6 2.45 6.45 2 7 2H17.59C17.86 2 18.11 2.11 18.3 2.29L21.71 5.7C21.89 5.89 22 6.15 22 6.41V17C22 17.55 21.55 18 21 18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 14H10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10H18" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6H15" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

FileMultipleIcon.displayName = 'FileMultipleIcon';

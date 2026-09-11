import React from 'react';
import { IconProps } from '../../types';

export const AlbumRemoveIcon: React.FC<IconProps> = ({
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
    <path d="M22 16.4C21.7 13.9 19.6 12 17 12C14.2 12 12 14.2 12 17C12 17.3 12 17.7 12.1 18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V16C22 16.1 22 16.3 22 16.4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2H7V18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10H12C11.4 10 11 9.6 11 9V7C11 6.4 11.4 6 12 6H17C17.6 6 18 6.4 18 7V9C18 9.6 17.6 10 17 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22C19.8 22 22 19.8 22 17C22 14.2 19.8 12 17 12C14.2 12 12 14.2 12 17C12 19.8 14.2 22 17 22Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
  </svg>
);

AlbumRemoveIcon.displayName = 'AlbumRemoveIcon';

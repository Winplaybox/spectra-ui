import React from 'react';
import { IconProps } from '../types';

export const PencilSlash1Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M18.17 2.29L3.77 16.7L2 22L7.3 20.23L21.71 5.83C22.1 5.44 22.1 4.81 21.71 4.42L19.58 2.29C19.19 1.9 18.56 1.9 18.17 2.29Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.2299 8.31001L15.6899 4.77001L18.1599 2.30001C18.5499 1.91001 19.1799 1.91001 19.5699 2.30001L21.6999 4.43001C22.0899 4.82001 22.0899 5.45001 21.6999 5.84001L19.2299 8.31001Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

PencilSlash1Icon.displayName = 'PencilSlash1Icon';

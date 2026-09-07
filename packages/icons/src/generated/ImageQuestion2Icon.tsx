import React from 'react';
import { IconProps } from '../types';

export const ImageQuestion2Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M15.07 11.46L11.58 17.05C11.26 17.56 10.57 17.67 10.11 17.3L6.91003 14.74C6.43003 14.35 5.72003 14.49 5.41003 15.03L2.33003 20.51C1.95003 21.18 2.43003 22 3.19003 22H20.8C21.56 22 22.04 21.19 21.68 20.52L16.8 11.51C16.44 10.84 15.48 10.81 15.07 11.46Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.98004 12C10.08 12 10.98 11.1 10.98 10C10.98 8.9 10.08 8 8.98004 8C7.88004 8 6.98004 8.9 6.98004 10C6.98004 11.1 7.88004 12 8.98004 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 10H20.01" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 4.04C18.04 3.75 18.16 3.21 18.56 2.73C18.66 2.6 18.85 2.37 19.18 2.2C19.58 2 19.94 2 20.1 2C20.28 2 20.71 2.02 21.15 2.31C21.69 2.67 21.86 3.19 21.91 3.35C21.94 3.43 22.1 3.96 21.91 4.56C21.8 4.94 21.6 5.18 21.43 5.39C20.73 6.22 20.11 6.15 20 6.69C19.99 6.71 20 6.82 20 7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageQuestion2Icon.displayName = 'ImageQuestion2Icon';

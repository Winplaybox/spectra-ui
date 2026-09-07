import React from 'react';
import { IconProps } from '../types';

export const ImageSettings2Icon: React.FC<IconProps> = ({
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
<path d="M18.5 10V8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M18.5 3V1" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M16 5.5H14" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M23 5.5H21" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M21.68 8.68002L20.27 7.27002" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M16.73 3.73001L15.32 2.32001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M16.73 7.27002L15.32 8.68002" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M21.68 2.32001L20.27 3.73001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M18.5 8C19.8807 8 21 6.88071 21 5.5C21 4.11929 19.8807 3 18.5 3C17.1193 3 16 4.11929 16 5.5C16 6.88071 17.1193 8 18.5 8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageSettings2Icon.displayName = 'ImageSettings2Icon';

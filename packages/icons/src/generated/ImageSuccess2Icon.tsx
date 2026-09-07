import React from 'react';
import { IconProps } from '../types';

export const ImageSuccess2Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M15.07 9.46002L11.58 15.05C11.26 15.56 10.57 15.67 10.11 15.3L6.91003 12.74C6.43003 12.35 5.72003 12.49 5.41003 13.03L2.33003 18.51C1.95003 19.18 2.43003 20 3.19003 20H20.8C21.56 20 22.04 19.19 21.68 18.52L16.8 9.51002C16.44 8.84002 15.48 8.81002 15.07 9.46002Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.97998 10C10.08 10 10.98 9.1 10.98 8C10.98 6.9 10.08 6 8.97998 6C7.87998 6 6.97998 6.9 6.97998 8C6.97998 9.1 7.87998 10 8.97998 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.6 4.35002L19.4 6.15002L22.4 3.15002" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10"/>
  </svg>
);

ImageSuccess2Icon.displayName = 'ImageSuccess2Icon';

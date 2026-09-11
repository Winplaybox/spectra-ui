import React from 'react';
import { IconProps } from '../../types';

export const ImageRemove2Icon: React.FC<IconProps> = ({
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
    <path d="M16.9999 5H22.9999" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.07 9.45996L11.58 15.05C11.26 15.56 10.57 15.67 10.11 15.3L6.90997 12.74C6.42997 12.35 5.71997 12.49 5.40997 13.03L2.32997 18.51C1.94997 19.18 2.42997 20 3.18997 20H20.8C21.56 20 22.04 19.19 21.68 18.52L16.8 9.50996C16.44 8.83996 15.48 8.80996 15.07 9.45996Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.97998 10C10.08 10 10.98 9.1 10.98 8C10.98 6.9 10.08 6 8.97998 6C7.87998 6 6.97998 6.9 6.97998 8C6.97998 9.1 7.87998 10 8.97998 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageRemove2Icon.displayName = 'ImageRemove2Icon';

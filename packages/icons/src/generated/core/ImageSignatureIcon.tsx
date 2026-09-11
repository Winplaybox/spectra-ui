import React from 'react';
import { IconProps } from '../../types';

export const ImageSignatureIcon: React.FC<IconProps> = ({
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
    <path d="M18 15H22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5 12C20.1 8.50004 19.7 6.10004 19.1 6.10004C18.4 6.10004 18.4 9.50004 17.2 9.80004C15.3 10.2 12 1.90004 11.9 2.00004C11.8 2.10004 14.8 6.70004 14.9 12.5C15 17.7 12.9 22.1 12.2 22C11.2 21.8 12.4 10.3 11.3 10.1C10.8 10 10.3 12.3 9.40002 12.2C8.80002 12.2 8.30002 10.9 7.90002 9.20004" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15H8" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9L5 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9L2 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageSignatureIcon.displayName = 'ImageSignatureIcon';

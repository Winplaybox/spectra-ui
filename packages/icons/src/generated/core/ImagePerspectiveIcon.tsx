import React from 'react';
import { IconProps } from '../../types';

export const ImagePerspectiveIcon: React.FC<IconProps> = ({
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
    <path d="M17.7 18.9937L6 18.0945C4.9 17.9946 4 16.9955 4 15.6967V8.30334C4 7.00451 4.9 6.00541 6 5.9055L17.7 5.00631C19 4.9064 20 6.00541 20 7.40415V16.5959C20 17.9946 19 19.0936 17.7 18.9937Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2V22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12H2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImagePerspectiveIcon.displayName = 'ImagePerspectiveIcon';

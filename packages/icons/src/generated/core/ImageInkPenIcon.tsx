import React from 'react';
import { IconProps } from '../../types';

export const ImageInkPenIcon: React.FC<IconProps> = ({
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
    <path d="M13.4 17H10.6C10.5 17.3 10.5 17.6 10.5 18C10.5 19.7 11.2 22 12 22C12.8 22 13.5 19.7 13.5 18C13.5 17.6 13.5 17.3 13.4 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4 17H13.5C14.4 17 15.1 16.4 15.4 15.6L18 8H6L8.5 15.6C8.8 16.4 9.6 17 10.4 17Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 2V7C19 7.6 18.6 8 18 8H6C5.4 8 5 7.6 5 7V2" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageInkPenIcon.displayName = 'ImageInkPenIcon';

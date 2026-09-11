import React from 'react';
import { IconProps } from '../../types';

export const ImageVectorPenToolIcon: React.FC<IconProps> = ({
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
    <path d="M2 2L10.21 10.21" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.21 10.71C10.4861 10.71 10.71 10.4861 10.71 10.21C10.71 9.93382 10.4861 9.70996 10.21 9.70996C9.93382 9.70996 9.70996 9.93382 9.70996 10.21C9.70996 10.4861 9.93382 10.71 10.21 10.71Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L4.5 15.21L12.36 17.36L17.36 12.36L15.22 4.5H15.21L2 2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.7843 10.9277L10.9285 18.7836L14.1458 22.0009L22.0017 14.145L18.7843 10.9277Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageVectorPenToolIcon.displayName = 'ImageVectorPenToolIcon';

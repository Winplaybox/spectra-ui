import React from 'react';
import { IconProps } from '../../types';

export const ImagePickerEmptyIcon: React.FC<IconProps> = ({
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
    <path d="M13.4286 4.85714C15.0066 3.27919 17.565 3.27919 19.1429 4.85714C20.7209 6.4351 20.7209 8.99347 19.1429 10.5714L11.4455 18.2688C10.9098 18.8045 10.1175 18.9915 9.39884 18.752L8.42862 18.4286L5.57148 19.8571L4.14291 18.4286L5.57148 15.5714L5.24807 14.6012C5.00852 13.8825 5.19556 13.0902 5.73123 12.5545L13.4286 4.85714Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5715 13.4286L10.5715 3.42859" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImagePickerEmptyIcon.displayName = 'ImagePickerEmptyIcon';

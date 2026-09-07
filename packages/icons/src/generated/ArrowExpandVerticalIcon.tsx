import React from 'react';
import { IconProps } from '../types';

export const ArrowExpandVerticalIcon: React.FC<IconProps> = ({
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
    <path d="M14 7.5H17.5L12 2L6.5 7.5H10V16.5H6.5L12 22L17.5 16.5H14V7.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArrowExpandVerticalIcon.displayName = 'ArrowExpandVerticalIcon';

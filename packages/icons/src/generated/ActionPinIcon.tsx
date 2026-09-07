import React from 'react';
import { IconProps } from '../types';

export const ActionPinIcon: React.FC<IconProps> = ({
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
    <path d="M11 11H13V19L12 22L11 19V11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 2H7L9.5 4.5V6.5L8.90112 6.67111C7.18391 7.16174 6 8.73128 6 10.5172V11H18V10.5172C18 8.73128 16.8161 7.16174 15.0989 6.67111L14.5 6.5V4.5L17 2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ActionPinIcon.displayName = 'ActionPinIcon';

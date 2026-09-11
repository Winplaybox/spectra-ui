import React from 'react';
import { IconProps } from '../../types';

export const ArrowExpandLeftIcon: React.FC<IconProps> = ({
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
    <path d="M12.2 20L14.7 17.5L6.6 9.4L6.5 9.3L4 11.8V4H11.8L9.3 6.5L17.4 14.6L17.5 14.7L20 12.2V20H12.2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArrowExpandLeftIcon.displayName = 'ArrowExpandLeftIcon';

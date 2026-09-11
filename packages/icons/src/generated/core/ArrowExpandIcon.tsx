import React from 'react';
import { IconProps } from '../../types';

export const ArrowExpandIcon: React.FC<IconProps> = ({
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
    <path d="M12.2 4L14.7 6.5L6.6 14.6L6.5 14.7L4 12.2V20H11.8L9.3 17.5L17.4 9.4L17.5 9.3L20 11.8V4H12.2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArrowExpandIcon.displayName = 'ArrowExpandIcon';

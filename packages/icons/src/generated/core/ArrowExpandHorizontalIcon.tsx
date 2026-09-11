import React from 'react';
import { IconProps } from '../../types';

export const ArrowExpandHorizontalIcon: React.FC<IconProps> = ({
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
    <path d="M16.5 14V17.5L22 12L16.5 6.5V10H7.5V6.5L2 12L7.5 17.5V14H16.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ArrowExpandHorizontalIcon.displayName = 'ArrowExpandHorizontalIcon';

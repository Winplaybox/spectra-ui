import React from 'react';
import { IconProps } from '../../types';

export const Book2Icon: React.FC<IconProps> = ({
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
    <path d="M20 18H6C5.4 18 5 18.2 4.6 18.6C4.2 19 4 19.5 4 20V4C4 2.9 4.9 2 6 2H18C19.1 2 20 2.9 20 4V18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 22H6C4.9 22 4 21.1 4 20C4 18.9 4.9 18 6 18H20" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H9C8.4 10 8 9.6 8 9V7C8 6.4 8.4 6 9 6H15C15.6 6 16 6.4 16 7V9C16 9.6 15.6 10 15 10Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Book2Icon.displayName = 'Book2Icon';

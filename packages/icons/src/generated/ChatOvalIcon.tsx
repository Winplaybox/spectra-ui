import React from 'react';
import { IconProps } from '../types';

export const ChatOvalIcon: React.FC<IconProps> = ({
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
    <path d="M12 2C6.48 2 2 5.58 2 10C2 12.61 3.58 14.93 6 16.39V22L10.14 17.86C10.75 17.95 11.36 18 12 18C17.52 18 22 14.42 22 10C22 5.58 17.52 2 12 2Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ChatOvalIcon.displayName = 'ChatOvalIcon';

import React from 'react';
import { IconProps } from '../types';

export const BigArrowRightIcon: React.FC<IconProps> = ({
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
    <path d="M22 12L13 4V9C13 9 5.34005 8.5 3.15005 13.3C1.55005 16.6 2.05005 19.2 2.15005 19.6C2.12005 19.48 2.65005 18.93 2.73005 18.82C2.95005 18.54 3.19005 18.27 3.43005 18C3.91005 17.48 4.43005 17 4.99005 16.57C5.80005 15.95 6.72005 15.45 7.71005 15.18C8.80005 14.89 9.92005 15 11.04 15C11.69 15 12.35 15 13 15V20L22 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

BigArrowRightIcon.displayName = 'BigArrowRightIcon';

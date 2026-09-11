import React from 'react';
import { IconProps } from '../../types';

export const DoubleBigArrowLeftIcon: React.FC<IconProps> = ({
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
    <path d="M9 18L2 12L9 6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12L14 6V10C14 10 19.2114 9.38 21.0405 12.97C22.3604 15.43 21.9655 17.37 21.8719 17.69C21.8719 17.69 19.1963 13.48 14 14V18L7 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

DoubleBigArrowLeftIcon.displayName = 'DoubleBigArrowLeftIcon';

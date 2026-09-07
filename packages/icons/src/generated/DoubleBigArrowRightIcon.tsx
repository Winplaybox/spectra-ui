import React from 'react';
import { IconProps } from '../types';

export const DoubleBigArrowRightIcon: React.FC<IconProps> = ({
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
    <path d="M15 18L22 12L15 6" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 12L10 6V10C10 10 4.78861 9.38 2.9595 12.97C1.63963 15.43 2.03455 17.37 2.12808 17.69C2.12808 17.69 4.80366 13.48 10 14V18L17 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

DoubleBigArrowRightIcon.displayName = 'DoubleBigArrowRightIcon';

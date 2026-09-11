import React from 'react';
import { IconProps } from '../../types';

export const HeadphoneSlash2Icon: React.FC<IconProps> = ({
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
    <path d="M19 12C19 6.5 16 4 12 4C8 4 5 6.5 5 12" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 20H19.5C20.8808 20 22 18.8809 22 17.5002C22 16.507 22 15.4326 22 14.4992C22 13.1185 20.8808 12 19.5 12H17V20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 20H4.49995C3.11924 20 1.99995 18.8809 1.99995 17.5002C1.99995 16.507 1.99995 15.4326 1.99995 14.4992C1.99995 13.1185 3.11924 12 4.49995 12H7V20Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L22 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

HeadphoneSlash2Icon.displayName = 'HeadphoneSlash2Icon';

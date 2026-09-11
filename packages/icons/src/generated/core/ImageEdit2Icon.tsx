import React from 'react';
import { IconProps } from '../../types';

export const ImageEdit2Icon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M15.07 11.4599L11.58 17.0499C11.26 17.5599 10.57 17.6699 10.11 17.2999L6.91 14.7399C6.43 14.3499 5.72 14.4899 5.41 15.0299L2.33 20.5099C1.95 21.1799 2.43 21.9999 3.19 21.9999H20.8C21.56 21.9999 22.04 21.1899 21.68 20.5199L16.8 11.5099C16.44 10.8399 15.48 10.8099 15.07 11.4599Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.97995 11.9999C10.0799 11.9999 10.9799 11.0999 10.9799 9.99994C10.9799 8.89994 10.0799 7.99994 8.97995 7.99994C7.87995 7.99994 6.97995 8.89994 6.97995 9.99994C6.97995 11.0999 7.87995 11.9999 8.97995 11.9999Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.84 2.29999L18.36 6.58999L18.3 7.69999L19.22 7.08999L21.7 2.79999L20.84 2.29999Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

ImageEdit2Icon.displayName = 'ImageEdit2Icon';

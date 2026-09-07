import React from 'react';
import { IconProps } from '../types';

export const CreditMastercardDouble10Icon: React.FC<IconProps> = ({
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
    <path d="M3.2 11C2.536 11 2 11.4786 2 12.0714L2 19.9286C2 20.5214 2.536 21 3.2 21L16.8 21C17.464 21 18 20.5214 18 19.9286L18 15.3686L18 12.0714C18 11.4786 17.464 11 16.8 11L3.2 11Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.00001 18.5L5.00001 18.5C4.72386 18.5 4.5 18.2762 4.5 18V17C4.5 16.7239 4.72385 16.5 5 16.5L6.99999 16.5C7.27614 16.5 7.5 16.7239 7.5 17V18C7.5 18.2761 7.27615 18.5 7.00001 18.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M10.5 13.5H9.5M4.5 13.5H7" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M12 18.5C12.8284 18.5 13.5 17.8284 13.5 17C13.5 16.1716 12.8284 15.5 12 15.5C11.1716 15.5 10.5 16.1716 10.5 17C10.5 17.8284 11.1716 18.5 12 18.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 18.5C14.8284 18.5 15.5 17.8284 15.5 17C15.5 16.1716 14.8284 15.5 14 15.5C13.6158 15.5 13.2654 15.6444 13 15.8819C13.3069 16.1566 13.5 16.5558 13.5 17C13.5 17.4442 13.3069 17.8434 13 18.1181C13.2654 18.3556 13.6158 18.5 14 18.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22 6.5H6V3.97222C6 3.43426 6.536 3 7.2 3H20.8C21.464 3 22 3.43426 22 3.97222V6.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12.0715C18 11.4786 17.464 11 16.8 11H6V6.5H22V12.2234C22 12.8508 21.464 13.3571 20.8 13.3571H18V12.0715Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6.14282H6V6.85711H22V6.14282Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

CreditMastercardDouble10Icon.displayName = 'CreditMastercardDouble10Icon';

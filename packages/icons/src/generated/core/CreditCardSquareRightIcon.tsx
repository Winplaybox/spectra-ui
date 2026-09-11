import React from 'react';
import { IconProps } from '../../types';

export const CreditCardSquareRightIcon: React.FC<IconProps> = ({
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
    <path fillRule="evenodd" clipRule="evenodd" d="M22 9H2V6.5C2 5.67 2.67 5 3.5 5H20.5C21.33 5 22 5.67 22 6.5V9Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.5 19H3.5C2.67 19 2 18.33 2 17.5V9H22V17.5C22 18.33 21.33 19 20.5 19Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8H2V9H22V8Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M15 15.5V13.5C15 13.2239 15.2239 13 15.5 13H18.5C18.7761 13 19 13.2239 19 13.5V15.5C19 15.7761 18.7761 16 18.5 16H15.5C15.2239 16 15 15.7761 15 15.5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M5 16H10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
<path d="M5 13H10" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeLinecap="round"/>
  </svg>
);

CreditCardSquareRightIcon.displayName = 'CreditCardSquareRightIcon';

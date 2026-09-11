import React from 'react';
import { IconProps } from '../../types';

export const CreditCardLinesIcon: React.FC<IconProps> = ({
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
<path d="M5 16.3V15.2C5 15.0895 5.08954 15 5.2 15H10.8C10.9105 15 11 15.0895 11 15.2V16.3C11 16.4105 10.9105 16.5 10.8 16.5H5.2C5.08954 16.5 5 16.4105 5 16.3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M13.5 16.3V15.2C13.5 15.0895 13.5895 15 13.7 15H14.8C14.9105 15 15 15.0895 15 15.2V16.3C15 16.4105 14.9105 16.5 14.8 16.5H13.7C13.5895 16.5 13.5 16.4105 13.5 16.3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M17.5 16.3V15.2C17.5 15.0895 17.5895 15 17.7 15H18.8C18.9105 15 19 15.0895 19 15.2V16.3C19 16.4105 18.9105 16.5 18.8 16.5H17.7C17.5895 16.5 17.5 16.4105 17.5 16.3Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
  </svg>
);

CreditCardLinesIcon.displayName = 'CreditCardLinesIcon';

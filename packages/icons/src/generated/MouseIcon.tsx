import React from 'react';
import { IconProps } from '../types';

export const MouseIcon: React.FC<IconProps> = ({
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
    <path d="M22 2L20.13 5.24C19.55 6.24 18.11 6.24 17.53 5.24L16.96 4.25C16.38 3.25 14.94 3.25 14.36 4.25L12.5 7.47" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.49998 21.33C2.10998 19.95 1.28998 16.89 2.66998 14.5L5.66998 9.29997C7.04998 6.90997 10.11 6.08997 12.5 7.46997C14.89 8.84997 15.71 11.91 14.33 14.3L11.33 19.5C9.94998 21.89 6.88998 22.71 4.49998 21.33Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.49992 12.67L12.4999 7.46997C10.1099 6.08997 7.04992 6.90997 5.66992 9.29997L5.16992 10.17L9.49992 12.67Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M9.5 12.67L12.5 7.46997C14.89 8.84997 15.71 11.91 14.33 14.3L13.83 15.17L9.5 12.67Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

MouseIcon.displayName = 'MouseIcon';

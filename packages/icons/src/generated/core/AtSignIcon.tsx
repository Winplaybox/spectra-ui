import React from 'react';
import { IconProps } from '../../types';

export const AtSignIcon: React.FC<IconProps> = ({
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
    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="9.3333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21.16C14.36 21.89 12.49 22.18 10.52 21.9C6.32997 21.3 2.89997 17.99 2.15997 13.82C1.36997 9.33998 3.56997 5.25998 7.10997 3.27998C8.54997 2.46998 10.19 2.00998 11.95 1.99998C17.17 1.96998 21.66 6.15998 21.98 11.38C22.02 12.06 21.99 12.73 21.91 13.38C21.7 14.86 20.41 15.95 18.93 15.95C18.88 15.95 18.84 15.95 18.79 15.95C17.23 15.89 16 14.6 16 13.04V12V7.99998" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="9.3333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

AtSignIcon.displayName = 'AtSignIcon';

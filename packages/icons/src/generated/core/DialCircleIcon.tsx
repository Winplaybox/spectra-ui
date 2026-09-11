import React from 'react';
import { IconProps } from '../../types';

export const DialCircleIcon: React.FC<IconProps> = ({
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
    <path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="bevel"/>
<path d="M21 14C21.5523 14 22 13.5523 22 13C22 12.4477 21.5523 12 21 12C20.4477 12 20 12.4477 20 13C20 13.5523 20.4477 14 21 14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="bevel"/>
<path d="M3 14C3.55228 14 4 13.5523 4 13C4 12.4477 3.55228 12 3 12C2.44772 12 2 12.4477 2 13C2 13.5523 2.44772 14 3 14Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="bevel"/>
<path d="M5.59998 7.59998C6.15226 7.59998 6.59998 7.15226 6.59998 6.59998C6.59998 6.04769 6.15226 5.59998 5.59998 5.59998C5.04769 5.59998 4.59998 6.04769 4.59998 6.59998C4.59998 7.15226 5.04769 7.59998 5.59998 7.59998Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="bevel"/>
<path d="M18.4 21C18.9523 21 19.4 20.5523 19.4 20C19.4 19.4477 18.9523 19 18.4 19C17.8477 19 17.4 19.4477 17.4 20C17.4 20.5523 17.8477 21 18.4 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="bevel"/>
<path d="M18.4 7.59998C18.9523 7.59998 19.4 7.15226 19.4 6.59998C19.4 6.04769 18.9523 5.59998 18.4 5.59998C17.8477 5.59998 17.4 6.04769 17.4 6.59998C17.4 7.15226 17.8477 7.59998 18.4 7.59998Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="bevel"/>
<path d="M5.59998 21C6.15226 21 6.59998 20.5523 6.59998 20C6.59998 19.4477 6.15226 19 5.59998 19C5.04769 19 4.59998 19.4477 4.59998 20C4.59998 20.5523 5.04769 21 5.59998 21Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="bevel"/>
<path d="M12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13L8.5 16.5" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

DialCircleIcon.displayName = 'DialCircleIcon';

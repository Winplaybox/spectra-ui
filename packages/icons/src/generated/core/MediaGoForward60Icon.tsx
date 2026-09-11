import React from 'react';
import { IconProps } from '../../types';

export const MediaGoForward60Icon: React.FC<IconProps> = ({
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
    <path d="M21 13C21 18 17 22 12 22C7 22 3 18 3 13C3 8 7 4 12 4H13" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 4L11 2.75V5.25L13 4Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5}/>
<path d="M15.1 16H14.9C13.8 16 13 15.1 13 14.1V10.9C13 9.8 13.9 9 14.9 9H15.1C16.2 9 17 9.9 17 10.9V14.1C17 15.1 16.1 16 15.1 16Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.70004 14.0001C6.69991 12.8852 6.69993 12.1873 6.70004 11.1452C6.69993 10.0946 7.49538 8.97773 8.61923 9.00009C9.17731 9.01119 9.52833 9.22589 9.93237 9.5646" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.59995 12C7.59995 12 6.69995 12.7581 6.69995 14C6.70007 15 7.52289 16 8.6002 16C9.6775 16 10.5552 15.0759 10.5 14C10.5 12.7581 9.59995 12 8.59995 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

MediaGoForward60Icon.displayName = 'MediaGoForward60Icon';

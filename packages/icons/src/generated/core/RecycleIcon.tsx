import React from 'react';
import { IconProps } from '../../types';

export const RecycleIcon: React.FC<IconProps> = ({
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
    <path d="M7.59863 7.59586L10.3986 2.93264C11.0986 1.68912 12.8986 1.68912 13.6986 2.93264L17.6986 9.77202" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9987 9.46118L17.8987 9.97931L18.4987 7.07776" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29862 19.8238H3.89862C2.39862 19.8238 1.49862 18.1658 2.29862 16.8186L6.29862 9.97925" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.29863 12.6735L6.39863 9.77197L3.59863 10.4974" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0987 12.259L21.6987 16.8186C22.4987 18.1658 21.5987 19.8238 20.0987 19.8238H11.3987" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.7987 17.6477L10.8987 19.9275L13.0987 22" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

RecycleIcon.displayName = 'RecycleIcon';

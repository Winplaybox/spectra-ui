import React from 'react';
import { IconProps } from '../../types';

export const ImageDropperIcon: React.FC<IconProps> = ({
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
    <path d="M3.68 20.3201L2 22.0001" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.8401 6.6001L6.72005 13.7401C6.35005 14.1101 6.05005 14.5601 5.85005 15.0401L3.68005 20.3201L8.95005 18.1401C9.44005 17.9401 9.88005 17.6501 10.2501 17.2801L17.3801 10.1501L13.8401 6.6001Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.84 6.59998L17.38 10.15L21.27 6.24998C22.3 5.20998 22.24 3.48998 21.08 2.52998C20.06 1.69998 18.55 1.87998 17.63 2.80998L13.84 6.59998Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.1601 10.5157L13.5033 4.85889L12.7962 5.56599L18.453 11.2228L19.1601 10.5157Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

ImageDropperIcon.displayName = 'ImageDropperIcon';

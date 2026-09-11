import React from 'react';
import { IconProps } from '../../types';

export const BigArrowLeftIcon: React.FC<IconProps> = ({
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
    <path d="M1.99873 12L10.9987 4V9C10.9987 9 18.6587 8.5 20.8487 13.3C22.4487 16.6 21.9487 19.2 21.8487 19.6C21.8787 19.48 21.3487 18.93 21.2687 18.82C21.0487 18.54 20.8087 18.27 20.5687 18C20.0887 17.48 19.5687 17 19.0087 16.57C18.1987 15.95 17.2787 15.45 16.2887 15.18C15.1987 14.89 14.0787 15 12.9587 15C12.3087 15 11.6487 15 10.9987 15V20L1.99873 12Z" stroke={color || 'currentColor'} strokeWidth={strokeWidth ?? 1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

BigArrowLeftIcon.displayName = 'BigArrowLeftIcon';

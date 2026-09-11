import React from 'react';
import { IconProps } from '../../types';

export const OutlinedBarcodeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 6h1v12H2zm2 0h2v12H4zm4 0h1v12H8zm2 0h3v12h-3zm4 0h1v12h-1zm3 0h1v12h-1zm2 0h1v12h-1zm2 0h1v12h-1z" fillRule="evenodd"/>
  </svg>
);
OutlinedBarcodeIcon.displayName = 'OutlinedBarcodeIcon';
export const BarcodeOutlinedIcon = OutlinedBarcodeIcon;

export const OutlinedQrcodeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1 1h10v10H1V1zm2 2v6h6V3H3z" fillRule="nonzero"/><path fill={color || 'currentColor'} d="M5 5h2v2H5z" fillRule="evenodd"/><path fill={color || 'currentColor'} d="M13 1h10v10H13V1zm2 2v6h6V3h-6z" fillRule="nonzero"/><path fill={color || 'currentColor'} d="M17 5h2v2h-2z" fillRule="evenodd"/><path fill={color || 'currentColor'} d="M1 13h10v10H1V13zm2 2v6h6v-6H3z" fillRule="nonzero"/><path fill={color || 'currentColor'} d="M5 17h2v2H5z" fillRule="evenodd"/><path fill={color || 'currentColor'} d="M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2v6zm0 2v2h-2v-2h2z" fillRule="nonzero"/>
  </svg>
);
OutlinedQrcodeIcon.displayName = 'OutlinedQrcodeIcon';
export const QrcodeOutlinedIcon = OutlinedQrcodeIcon;

import React from 'react';
import { IconProps } from '../../types';

export const FilledDivideIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 11h14v2H5zm7.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4zm0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4z"/>
  </svg>
);
FilledDivideIcon.displayName = 'FilledDivideIcon';
export const DivideFilledIcon = FilledDivideIcon;

export const FilledEqualsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9.998H5v-2h14zm0 6H5v-2h14z"/>
  </svg>
);
FilledEqualsIcon.displayName = 'FilledEqualsIcon';
export const EqualsFilledIcon = FilledEqualsIcon;

export const FilledGreaterThanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" fillRule="evenodd"/>
  </svg>
);
FilledGreaterThanIcon.displayName = 'FilledGreaterThanIcon';
export const GreaterThanFilledIcon = FilledGreaterThanIcon;

export const FilledGreaterThanEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10L7.5 17z" fillRule="evenodd"/><path fill={color || 'currentColor'} fillRule="nonzero" d="M18 20.998H6v-2h12z"/>
  </svg>
);
FilledGreaterThanEqualIcon.displayName = 'FilledGreaterThanEqualIcon';
export const GreaterThanEqualFilledIcon = FilledGreaterThanEqualIcon;

export const FilledLessThanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z" fillRule="evenodd"/>
  </svg>
);
FilledLessThanIcon.displayName = 'FilledLessThanIcon';
export const LessThanFilledIcon = FilledLessThanIcon;

export const FilledLessThanEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 15.5L9.25 10l8.25-5.5l-1-1.5L6 10l10.5 7z" fillRule="evenodd"/><path fill={color || 'currentColor'} fillRule="nonzero" d="M18 20.998H6v-2h12z"/>
  </svg>
);
FilledLessThanEqualIcon.displayName = 'FilledLessThanEqualIcon';
export const LessThanEqualFilledIcon = FilledLessThanEqualIcon;

export const FilledMinusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12.998H5v-2h14z"/>
  </svg>
);
FilledMinusIcon.displayName = 'FilledMinusIcon';
export const MinusFilledIcon = FilledMinusIcon;

export const FilledNotEqualIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9.998H5v-2h14zm0 6H5v-2h14z"/><path fill={color || 'currentColor'} d="M14.08 4.605l1.84.79l-6 14l-1.84-.79z"/>
  </svg>
);
FilledNotEqualIcon.displayName = 'FilledNotEqualIcon';
export const NotEqualFilledIcon = FilledNotEqualIcon;

export const FilledPercentageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.501 3.5l-15 15.001l1.996 1.996l15-15zM7.002 5a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4zm10 10a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4z"/>
  </svg>
);
FilledPercentageIcon.displayName = 'FilledPercentageIcon';
export const PercentageFilledIcon = FilledPercentageIcon;

export const FilledPlusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
  </svg>
);
FilledPlusIcon.displayName = 'FilledPlusIcon';
export const PlusFilledIcon = FilledPlusIcon;

export const FilledPlusMinusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 10.998h-6v6h-2v-6H5v-2h6v-6h2v6h6zm0 10H5v-2h14z"/>
  </svg>
);
FilledPlusMinusIcon.displayName = 'FilledPlusMinusIcon';
export const PlusMinusFilledIcon = FilledPlusMinusIcon;

export const FilledPlusMinusAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7.998H8v4H6v-4H2v-2h4v-4h2v4h4zm10 10h-8v-2h8zM18.5 4L4 18.5L5.5 20L20 5.5z"/>
  </svg>
);
FilledPlusMinusAltIcon.displayName = 'FilledPlusMinusAltIcon';
export const PlusMinusAltFilledIcon = FilledPlusMinusAltIcon;

import React from 'react';
import { IconProps } from '../../types';

export const TwoToneBathroomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zm5-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5v1H7v-1z"/><circle cx="15" cy="14" r="1"/><circle cx="12" cy="14" r="1"/><circle cx="15" cy="17" r="1"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/><path fill={color || 'currentColor'} d="M17 11c0-2.76-2.24-5-5-5s-5 2.24-5 5v1h10v-1zm-8.46-.5c.24-1.69 1.7-3 3.46-3s3.22 1.31 3.47 3H8.54z"/><circle cx="9" cy="17" r="1"/><circle cx="9" cy="14" r="1"/><circle cx="12" cy="17" r="1"/>
  </svg>
);
TwoToneBathroomIcon.displayName = 'TwoToneBathroomIcon';
export const BathroomTwoToneIcon = TwoToneBathroomIcon;

export const TwoToneBedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2h6V8zm-8 0c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v2h6V8zm8 4H5c-.55 0-1 .45-1 1v2h16v-2c0-.55-.45-1-1-1z"/><path fill={color || 'currentColor'} d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM13 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2h-6V8zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm15 7H4v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"/>
  </svg>
);
TwoToneBedIcon.displayName = 'TwoToneBedIcon';
export const BedTwoToneIcon = TwoToneBedIcon;

export const TwoToneBedroomBabyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zm2.45-9.5l-.95-1L7 7.76L6 7h3.65l1.73 3H17v1h-1v2.5l.84 1.46c.39-.28.76-.58 1.1-.92L19 15.1c-1.87 1.87-4.36 2.9-7 2.9s-5.13-1.03-7-2.9l1.06-1.06c.34.34.71.65 1.1.92L8 13.5V9.51l-1.55.99z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15.53 15.71l-.03-.06l-.81-1.41a7.72 7.72 0 0 1-5.4 0l-.81 1.41l-.03.06c1.1.52 2.28.79 3.53.79s2.45-.28 3.55-.79z"/><path fill={color || 'currentColor'} d="M7.16 14.96c-.39-.27-.76-.58-1.1-.92L5 15.1c1.87 1.87 4.36 2.9 7 2.9s5.13-1.03 7-2.9l-1.06-1.06c-.34.34-.71.64-1.1.92L16 13.5V11h1v-1h-5.62L9.65 7H6l1 .76L5.5 9.5l.95 1L8 9.51v3.99l-.84 1.46zm1.32.69l.81-1.41c1.74.65 3.66.65 5.4 0l.81 1.41l.03.06c-1.1.51-2.3.79-3.55.79s-2.43-.27-3.53-.79l.03-.06z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/>
  </svg>
);
TwoToneBedroomBabyIcon.displayName = 'TwoToneBedroomBabyIcon';
export const BedroomBabyTwoToneIcon = TwoToneBedroomBabyIcon;

export const TwoToneBedroomChildIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zm2-7.13c0-1 .62-1.85 1.5-2.2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v1.67c.88.35 1.5 1.2 1.5 2.2V17h-1.5v-1.5h-9V17H6v-4.13z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/><path fill={color || 'currentColor'} d="M7.5 15.5h9V17H18v-4.13c0-1-.62-1.85-1.5-2.2V9c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v1.67c-.88.35-1.5 1.2-1.5 2.2V17h1.5v-1.5zm1.5-7h6v2H9v-2zM8.37 12h7.27c.48 0 .87.39.87.87V14h-9v-1.13H7.5c0-.48.39-.87.87-.87z"/>
  </svg>
);
TwoToneBedroomChildIcon.displayName = 'TwoToneBedroomChildIcon';
export const BedroomChildTwoToneIcon = TwoToneBedroomChildIcon;

export const TwoToneBedroomParentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zm1-6.83c0-.66.25-1.26.65-1.72V9c0-1.1.9-2 2-2H11c.37 0 .72.12 1 .32c.28-.2.63-.32 1-.32h3.35c1.1 0 2 .9 2 2v2.45c.4.46.65 1.06.65 1.72V17h-1.5v-1.5h-11V17H5v-3.83z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/><path fill={color || 'currentColor'} d="M6.5 15.5h11V17H19v-3.83c0-.66-.25-1.26-.65-1.72V9c0-1.1-.9-2-2-2H13c-.37 0-.72.12-1 .32c-.28-.2-.63-.32-1-.32H7.65c-1.1 0-2 .9-2 2v2.45c-.4.46-.65 1.06-.65 1.72V17h1.5v-1.5zm6.25-7h4v2h-4v-2zm-5.5 0h4v2h-4v-2zM6.5 13c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v1h-11v-1z"/>
  </svg>
);
TwoToneBedroomParentIcon.displayName = 'TwoToneBedroomParentIcon';
export const BedroomParentTwoToneIcon = TwoToneBedroomParentIcon;

export const TwoToneBlenderIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13 16h-2c-1.65 0-3 1.35-3 3v1h8v-1c0-1.65-1.35-3-3-3zm-1 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M16.13 15.13L18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm10.67-4l-1.38 9H9.72L8.33 5h7.34zM16 20H8v-1c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v1z"/><circle cx="12" cy="18" r="1"/>
  </svg>
);
TwoToneBlenderIcon.displayName = 'TwoToneBlenderIcon';
export const BlenderTwoToneIcon = TwoToneBlenderIcon;

export const TwoToneCameraIndoorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 10v9h12v-9l-6-4.5L6 10zm8 2v1l2-1.06v4.12L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1z"/><path fill={color || 'currentColor'} d="M8 12v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L14 13v-1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1z"/><path fill={color || 'currentColor'} d="M12 3L4 9v12h16V9l-8-6zm6 16H6v-9l6-4.5l6 4.5v9z"/>
  </svg>
);
TwoToneCameraIndoorIcon.displayName = 'TwoToneCameraIndoorIcon';
export const CameraIndoorTwoToneIcon = TwoToneCameraIndoorIcon;

export const TwoToneCameraOutdoorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L18 14v-1zM12 3L4 9v12h16v-2H6v-9l6-4.5l6 4.5v1h2V9l-8-6z"/>
  </svg>
);
TwoToneCameraOutdoorIcon.displayName = 'TwoToneCameraOutdoorIcon';
export const CameraOutdoorTwoToneIcon = TwoToneCameraOutdoorIcon;

export const TwoToneChairIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 13h10v-2c0-.88.39-1.67 1-2.22V6c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2.78c.61.55 1 1.34 1 2.22v2z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M20 10c-.55 0-1 .45-1 1v4H5v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z"/><path fill={color || 'currentColor'} d="M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22V6zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1v5z"/>
  </svg>
);
TwoToneChairIcon.displayName = 'TwoToneChairIcon';
export const ChairTwoToneIcon = TwoToneChairIcon;

export const TwoToneChairAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 14h10v2H7zm0-9h10v3H7z"/><path fill={color || 'currentColor'} d="M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v7h2v-3h10v3h2v-7c0-1.1-.9-2-2-2h-1v-2h1zm0 4v2H7v-2h10zm-7-2v-2h4v2h-4zM7 8V5h10v3H7z"/>
  </svg>
);
TwoToneChairAltIcon.displayName = 'TwoToneChairAltIcon';
export const ChairAltTwoToneIcon = TwoToneChairAltIcon;

export const TwoToneCoffeeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 11c0 2.76 2.24 5 5 5s5-2.24 5-5v-1H6v1z"/><path fill={color || 'currentColor'} d="M4 19h16v2H4zM18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29c3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 11c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1h10v1zm0-3H6V5h10v3zm2.5 0H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8z"/>
  </svg>
);
TwoToneCoffeeIcon.displayName = 'TwoToneCoffeeIcon';
export const CoffeeTwoToneIcon = TwoToneCoffeeIcon;

export const TwoToneCoffeeMakerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13 19c1.65 0 3-1.35 3-3v-3h-6v3c0 1.65 1.35 3 3 3z"/><path fill={color || 'currentColor'} d="M9 7h8c.55 0 1-.45 1-1V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.966 4.966 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1zm1 9v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3z"/><circle cx="13" cy="9" r="1"/>
  </svg>
);
TwoToneCoffeeMakerIcon.displayName = 'TwoToneCoffeeMakerIcon';
export const CoffeeMakerTwoToneIcon = TwoToneCoffeeMakerIcon;

export const TwoToneDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zM14.75 6c1.38 0 2.5 1.53 2.5 3.41c0 1.48-.7 2.71-1.67 3.18l-.08.03V19H14v-6.38l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18c0-1.88 1.13-3.4 2.5-3.4zm-8.25.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9H10V6.5c0-.28.23-.5.5-.5c.28 0 .5.22.5.5v3.8c0 .93-.64 1.71-1.5 1.93V19H8v-6.77c-.86-.22-1.5-1-1.5-1.93V6.5z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/><path fill={color || 'currentColor'} d="M8 12.23V19h1.5v-6.77c.86-.22 1.5-1 1.5-1.93V6.5c0-.28-.22-.5-.5-.5c-.27 0-.5.22-.5.5V9h-.75V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V9H7.5V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3.8c0 .93.64 1.71 1.5 1.93zm5.92.35l.08.04V19h1.5v-6.38l.08-.03c.97-.47 1.67-1.7 1.67-3.18c0-1.88-1.12-3.41-2.5-3.41c-1.37 0-2.5 1.52-2.5 3.4c0 1.48.7 2.71 1.67 3.18z"/>
  </svg>
);
TwoToneDiningIcon.displayName = 'TwoToneDiningIcon';
export const DiningTwoToneIcon = TwoToneDiningIcon;

export const TwoToneDoorBackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 19h10V5H7v14zm2-8h2v2H9v-2z"/><path fill={color || 'currentColor'} d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"/><path fill={color || 'currentColor'} d="M9 11h2v2H9z"/>
  </svg>
);
TwoToneDoorBackIcon.displayName = 'TwoToneDoorBackIcon';
export const DoorBackTwoToneIcon = TwoToneDoorBackIcon;

export const TwoToneDoorFrontIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 19h10V5H7v14zm6-8h2v2h-2v-2z"/><path fill={color || 'currentColor'} d="M13 11h2v2h-2z"/><path fill={color || 'currentColor'} d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"/>
  </svg>
);
TwoToneDoorFrontIcon.displayName = 'TwoToneDoorFrontIcon';
export const DoorFrontTwoToneIcon = TwoToneDoorFrontIcon;

export const TwoToneDoorSlidingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13 19h5V5h-5v14zm1-8h2v2h-2v-2zm-8 8h5V5H6v14zm2-8h2v2H8v-2z"/><path fill={color || 'currentColor'} d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2h-1zm-9 0H6V5h5v14zm7 0h-5V5h5v14z"/><path fill={color || 'currentColor'} d="M8 11h2v2H8zm6 0h2v2h-2z"/>
  </svg>
);
TwoToneDoorSlidingIcon.displayName = 'TwoToneDoorSlidingIcon';
export const DoorSlidingTwoToneIcon = TwoToneDoorSlidingIcon;

export const TwoToneDoorbellIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 10v9h12v-9l-6-4.5L6 10zm6 7.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1zm.75-8.25v.25c1.44.34 2.25 1.62 2.25 3.16V15h1v1H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75z"/><path fill={color || 'currentColor'} d="M12 3L4 9v12h16V9l-8-6zm6 16H6v-9l6-4.5l6 4.5v9z"/><path fill={color || 'currentColor'} d="M11.25 9.25v.25C9.82 9.84 9 11.12 9 12.66V15H8v1h8v-1h-1v-2.34c0-1.54-.81-2.82-2.25-3.16v-.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75zM12 17.5c.55 0 1-.45 1-1h-2c0 .55.45 1 1 1z"/>
  </svg>
);
TwoToneDoorbellIcon.displayName = 'TwoToneDoorbellIcon';
export const DoorbellTwoToneIcon = TwoToneDoorbellIcon;

export const TwoToneFeedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15 5H5v14h14V9h-4V5zM7 7h5v2H7V7zm10 10H7v-2h10v2zm0-6v2H7v-2h10z"/><path fill={color || 'currentColor'} d="M7 13h10v-2H7v2zm0 4h10v-2H7v2zm9-14H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zm3 16H5V5h10v4h4v10zM12 7H7v2h5V7z"/>
  </svg>
);
TwoToneFeedIcon.displayName = 'TwoToneFeedIcon';
export const FeedTwoToneIcon = TwoToneFeedIcon;

export const TwoToneFlatwareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 7.08c0 1.77-.84 3.25-2 3.82V21h-2V10.9c-1.16-.57-2-2.05-2-3.82C10.01 4.83 11.35 3 13 3c1.66 0 3 1.83 3 4.08zM17 3v18h2v-8h2V7c0-1.76-1.24-4-4-4zM8.28 3c-.4 0-.72.32-.72.72V7h-.84V3.72C6.72 3.32 6.4 3 6 3s-.72.32-.72.72V7h-.84V3.72c0-.4-.32-.72-.72-.72S3 3.32 3 3.72V9c0 1.1.9 2 2 2v10h2V11c1.1 0 2-.9 2-2V3.72c0-.4-.32-.72-.72-.72z"/>
  </svg>
);
TwoToneFlatwareIcon.displayName = 'TwoToneFlatwareIcon';
export const FlatwareTwoToneIcon = TwoToneFlatwareIcon;

export const TwoToneGarageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M17 11.51v-.01H7v3h10v-2.99zM9 14c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zm1-8.81c.82-2.47 1.34-4.03 1.56-4.69c.05-.16.12-.29.19-.4c.02-.02.03-.04.05-.06c.38-.53.92-.54.92-.54h8.56s.54.01.92.53c.02.03.03.05.05.07c.07.11.14.24.19.4c.22.66.74 2.23 1.56 4.69v6.5c0 .45-.35.81-.78.81h-.44c-.44 0-.78-.36-.78-.81V16.5H7v1.19c0 .45-.35.81-.78.81h-.44c-.43 0-.78-.36-.78-.81v-6.5z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path fill={color || 'currentColor'} d="M5.78 18.5h.44c.43 0 .78-.36.78-.81V16.5h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5c-.82-2.46-1.34-4.03-1.56-4.69c-.05-.16-.12-.29-.19-.4c-.02-.02-.03-.04-.05-.07c-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06c-.07.11-.14.24-.19.4c-.22.66-.74 2.22-1.56 4.69v6.5c0 .45.35.81.78.81zm2.55-11h7.34l.23.69l.43 1.31H7.67l.66-2zM7 11.51v-.01h10v3H7v-2.99z"/>
  </svg>
);
TwoToneGarageIcon.displayName = 'TwoToneGarageIcon';
export const GarageTwoToneIcon = TwoToneGarageIcon;

export const TwoToneLightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10 17c0 1.1.9 2 2 2s2-.9 2-2h-4z"/><path fill={color || 'currentColor'} d="M13 6.06V3h-2v3.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01c0-4.62-3.5-8.43-8-8.93zM12 19c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm0-4H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"/>
  </svg>
);
TwoToneLightIcon.displayName = 'TwoToneLightIcon';
export const LightTwoToneIcon = TwoToneLightIcon;

export const TwoToneLivingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zm1-7.5c0-.92.51-1.72 1.25-2.15V9c0-1.66 1.34-3 3-3h5.5c1.66 0 3 1.34 3 3v1.35c.74.43 1.25 1.23 1.25 2.15V16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-3.5z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM7 18h10c1.1 0 2-.9 2-2v-3.5c0-.92-.51-1.72-1.25-2.15V9c0-1.66-1.34-3-3-3h-5.5c-1.66 0-3 1.34-3 3v1.35C5.51 10.78 5 11.58 5 12.5V16c0 1.1.9 2 2 2zm.75-9c0-.83.67-1.5 1.5-1.5h5.5c.83 0 1.5.67 1.5 1.5v1.03A2.48 2.48 0 0 0 14 12.5v.5h-4v-.5c0-1.3-.99-2.35-2.25-2.47V9zM6.5 12.5c0-.55.45-1 1-1s1 .45 1 1v2h7v-2c0-.55.45-1 1-1s1 .45 1 1V16c0 .28-.22.5-.5.5H7c-.28 0-.5-.22-.5-.5v-3.5z"/>
  </svg>
);
TwoToneLivingIcon.displayName = 'TwoToneLivingIcon';
export const LivingTwoToneIcon = TwoToneLivingIcon;

export const TwoToneManageSearchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 12h5v2H2zm16.17 1.75c.52-.79.83-1.73.83-2.75c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.02 0 1.96-.31 2.76-.83L20.59 19L22 17.59l-3.83-3.84zM14 14c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3zM2 7h5v2H2zm0 10h10v2H2z"/>
  </svg>
);
TwoToneManageSearchIcon.displayName = 'TwoToneManageSearchIcon';
export const ManageSearchTwoToneIcon = TwoToneManageSearchIcon;

export const TwoTonePodcastsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 12c0 .74-.4 1.38-1 1.72V22h-2v-8.28c-.6-.35-1-.98-1-1.72c0-1.1.9-2 2-2s2 .9 2 2zm-2-6c-3.31 0-6 2.69-6 6c0 1.74.75 3.31 1.94 4.4l1.42-1.42A3.957 3.957 0 0 1 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42A5.957 5.957 0 0 0 18 12c0-3.31-2.69-6-6-6zm0-4C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42A7.987 7.987 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.98 4.36-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
);
TwoTonePodcastsIcon.displayName = 'TwoTonePodcastsIcon';
export const PodcastsTwoToneIcon = TwoTonePodcastsIcon;

export const TwoToneShowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z"/><circle cx="8" cy="20" r="1"/><circle cx="16" cy="17" r="1"/><path fill={color || 'currentColor'} d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5H7z"/><circle cx="16" cy="20" r="1"/><circle cx="12" cy="17" r="1"/><circle cx="8" cy="17" r="1"/><circle cx="12" cy="20" r="1"/>
  </svg>
);
TwoToneShowerIcon.displayName = 'TwoToneShowerIcon';
export const ShowerTwoToneIcon = TwoToneShowerIcon;

export const TwoToneTableBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <ellipse cx="12" cy="7.5" fillOpacity={fillOpacity ?? 0.3} rx="7.72" ry="1.5"/><path fill={color || 'currentColor'} d="M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26L6 20h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48zM12 9c-4.05 0-6.74-.86-7.72-1.5C5.26 6.86 7.95 6 12 6s6.74.86 7.72 1.5C18.74 8.14 16.05 9 12 9z"/>
  </svg>
);
TwoToneTableBarIcon.displayName = 'TwoToneTableBarIcon';
export const TableBarTwoToneIcon = TwoToneTableBarIcon;

export const TwoToneTableRestaurantIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5.18 6l-.85 3h15.34l-.85-3z"/><path fill={color || 'currentColor'} d="M21.96 9.73l-1.43-5a.996.996 0 0 0-.96-.73H4.43c-.45 0-.84.3-.96.73l-1.43 5c-.18.63.3 1.27.96 1.27h2.2L4 20h2l.67-5h10.67l.66 5h2l-1.2-9H21c.66 0 1.14-.64.96-1.27zM6.93 13l.27-2h9.6l.27 2H6.93zm-2.6-4l.86-3h13.63l.86 3H4.33z"/>
  </svg>
);
TwoToneTableRestaurantIcon.displayName = 'TwoToneTableRestaurantIcon';
export const TableRestaurantTwoToneIcon = TwoToneTableRestaurantIcon;

export const TwoToneWindowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13 13h6v6h-6zm-8 0h6v6H5zm0-8h6v6H5zm8 0h6v6h-6z"/><path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>
  </svg>
);
TwoToneWindowIcon.displayName = 'TwoToneWindowIcon';
export const WindowTwoToneIcon = TwoToneWindowIcon;

export const TwoToneYardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 20h16V4H4v16zM8 8.22a1.562 1.562 0 0 1 2.45-1.28l-.01-.12c0-.86.7-1.56 1.56-1.56s1.56.7 1.56 1.56l-.01.12A1.562 1.562 0 0 1 16 8.22c0 .62-.37 1.16-.89 1.4c.52.25.89.79.89 1.41c0 .86-.7 1.56-1.56 1.56c-.33 0-.64-.11-.89-.28l.01.12c0 .86-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56l.01-.12A1.562 1.562 0 0 1 8 11.03c0-.62.37-1.16.89-1.4C8.37 9.38 8 8.84 8 8.22zM12 19c0-3.31 2.69-6 6-6c0 3.31-2.69 6-6 6s-6-2.69-6-6c3.31 0 6 2.69 6 6z"/><path fill={color || 'currentColor'} d="M8 11.03a1.562 1.562 0 0 0 2.45 1.28l-.01.12c0 .86.7 1.56 1.56 1.56s1.56-.7 1.56-1.56l-.01-.12c.25.17.56.28.89.28c.86 0 1.56-.7 1.56-1.56c0-.62-.37-1.16-.89-1.41c.52-.24.89-.78.89-1.4a1.562 1.562 0 0 0-2.45-1.28l.01-.12c0-.86-.7-1.56-1.56-1.56s-1.56.7-1.56 1.56l.01.12A1.562 1.562 0 0 0 8 8.22c0 .62.37 1.16.89 1.41c-.52.24-.89.78-.89 1.4zm4-2.97c.86 0 1.56.7 1.56 1.56s-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56s.7-1.56 1.56-1.56zM18 13c-3.31 0-6 2.69-6 6c3.31 0 6-2.69 6-6zm-6 6c0-3.31-2.69-6-6-6c0 3.31 2.69 6 6 6z"/><path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"/>
  </svg>
);
TwoToneYardIcon.displayName = 'TwoToneYardIcon';
export const YardTwoToneIcon = TwoToneYardIcon;

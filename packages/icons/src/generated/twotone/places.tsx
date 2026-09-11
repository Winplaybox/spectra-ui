import React from 'react';
import { IconProps } from '../../types';

export const TwoToneAcUnitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 11h-4.17l3.24-3.24l-1.41-1.42L15 11h-2V9l4.66-4.66l-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93L6.34 4.34L11 9v2H9L4.34 6.34L2.93 7.76L6.17 11H2v2h4.17l-3.24 3.24l1.41 1.42L9 13h2v2l-4.66 4.66l1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24l1.42-1.41L13 15v-2h2l4.66 4.66l1.41-1.42L17.83 13H22v-2z"/>
  </svg>
);
TwoToneAcUnitIcon.displayName = 'TwoToneAcUnitIcon';
export const AcUnitTwoToneIcon = TwoToneAcUnitIcon;

export const TwoToneAirportShuttleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M3 14h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1h7.56c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H21v-2H3v2z"/><path fill={color || 'currentColor'} d="M17 5H3a2 2 0 0 0-2 2v9h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-6-6zm-2 2h1l3 3h-4V7zM9 7h4v3H9V7zM3 7h4v3H3V7zm3 10.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5zm12 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5zM21 14h-.78c-.55-.61-1.34-1-2.22-1s-1.67.39-2.22 1H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3v-2h18v2z"/>
  </svg>
);
TwoToneAirportShuttleIcon.displayName = 'TwoToneAirportShuttleIcon';
export const AirportShuttleTwoToneIcon = TwoToneAirportShuttleIcon;

export const TwoToneAllInclusiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99c-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1l1.51-1.34L9.22 8.2A5.37 5.37 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99c1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01l-1.51 1.34l1.27 1.12a5.386 5.386 0 0 0 3.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/>
  </svg>
);
TwoToneAllInclusiveIcon.displayName = 'TwoToneAllInclusiveIcon';
export const AllInclusiveTwoToneIcon = TwoToneAllInclusiveIcon;

export const TwoToneApartmentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
  </svg>
);
TwoToneApartmentIcon.displayName = 'TwoToneApartmentIcon';
export const ApartmentTwoToneIcon = TwoToneApartmentIcon;

export const TwoToneBabyChangingStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 8v2h-3L8.31 8.82L7 12.75V22H3V12l1.58-4.63A2.003 2.003 0 0 1 7.3 6.18l4.15 1.83L14 8zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm1 18h12v-2H9v2zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5zM13 12c0-.55-.45-1-1-1H9v2h2v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3h-2v2h-2v-1z"/>
  </svg>
);
TwoToneBabyChangingStationIcon.displayName = 'TwoToneBabyChangingStationIcon';
export const BabyChangingStationTwoToneIcon = TwoToneBabyChangingStationIcon;

export const TwoToneBackpackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v12zM7.5 12v2h7v2h2v-4h-9z"/><path fill={color || 'currentColor'} d="M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86zM18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v12zM7.5 12v2h7v2h2v-4h-9z"/>
  </svg>
);
TwoToneBackpackIcon.displayName = 'TwoToneBackpackIcon';
export const BackpackTwoToneIcon = TwoToneBackpackIcon;

export const TwoToneBalconyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 16H5v4h2v-4zm4 0H9v4h2v-4zm-5-6v4h5V4.08C8.16 4.56 6 7.03 6 10zm4 2H8v-2h2v2zm3-7.92V14h5v-4c0-2.97-2.16-5.44-5-5.92zM16 12h-2v-2h2v2zm-1 4h-2v4h2v-4zm4 0h-2v4h2v-4z"/><path fill={color || 'currentColor'} d="M10 10v2H8v-2h2zm6 2v-2h-2v2h2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4h1zM7 16H5v4h2v-4zm4 0H9v4h2v-4zm0-11.92C8.16 4.56 6 7.03 6 10v4h5V4.08zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92V14zm2 2h-2v4h2v-4zm4 0h-2v4h2v-4z"/>
  </svg>
);
TwoToneBalconyIcon.displayName = 'TwoToneBalconyIcon';
export const BalconyTwoToneIcon = TwoToneBalconyIcon;

export const TwoToneBathtubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 15h16v4H4z"/><circle cx="7" cy="7" r="2"/><path fill={color || 'currentColor'} d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08c-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08c0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1c1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z"/>
  </svg>
);
TwoToneBathtubIcon.displayName = 'TwoToneBathtubIcon';
export const BathtubTwoToneIcon = TwoToneBathtubIcon;

export const TwoToneBeachAccessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7.6 7.6c-.47 2.34.03 4.78 1.39 6.83l5.45-5.45a9.126 9.126 0 0 0-5.08-1.56c-.6 0-1.19.06-1.76.18zM13.12 5c-.93 0-1.82.16-2.67.46c1.91.19 3.79.89 5.44 2.07l1.39-1.39A8.126 8.126 0 0 0 13.12 5zM5 13.12c0 1.49.4 2.91 1.14 4.15l1.39-1.39a11.247 11.247 0 0 1-2.07-5.44c-.3.86-.46 1.76-.46 2.68z"/><path fill={color || 'currentColor'} d="M13.126 14.56l1.428-1.428l6.442 6.442l-1.43 1.428zM13.12 3c-2.58 0-5.16.98-7.14 2.95l-.01.01c-3.95 3.95-3.95 10.36 0 14.31l14.3-14.31A10.086 10.086 0 0 0 13.12 3zM6.14 17.27a8.063 8.063 0 0 1-.68-6.82c.19 1.91.89 3.79 2.07 5.44l-1.39 1.38zm2.84-2.84C7.63 12.38 7.12 9.93 7.6 7.6c.58-.12 1.16-.18 1.75-.18c1.8 0 3.55.55 5.08 1.56l-5.45 5.45zm1.47-8.97a8.063 8.063 0 0 1 6.82.68l-1.39 1.39a11.25 11.25 0 0 0-5.43-2.07z"/>
  </svg>
);
TwoToneBeachAccessIcon.displayName = 'TwoToneBeachAccessIcon';
export const BeachAccessTwoToneIcon = TwoToneBeachAccessIcon;

export const TwoToneBentoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 17h8V7H4v10zm4-6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm6 2.5h6v4h-6v-4zm6-6v4h-6V7h6z"/><path fill={color || 'currentColor'} d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 6h-6V7h6v4zM4 7h8v10H4V7zm10 10v-4h6v4h-6zm-4.5-5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
  </svg>
);
TwoToneBentoIcon.displayName = 'TwoToneBentoIcon';
export const BentoTwoToneIcon = TwoToneBentoIcon;

export const TwoToneBungalowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 6.78l-3 4.8V19h2v-3h2v3h2v-7.42l-3-4.8zM13 14h-2v-2h2v2z"/><path fill={color || 'currentColor'} d="M13 14h-2v-2h2v2zm5.1 2.56L17 14.79V21H7v-6.2l-1.1 1.76l-1.7-1.06L12 3l7.8 12.5l-1.7 1.06zM15 11.59l-3-4.8l-3 4.8V19h2v-3h2v3h2v-7.41z"/>
  </svg>
);
TwoToneBungalowIcon.displayName = 'TwoToneBungalowIcon';
export const BungalowTwoToneIcon = TwoToneBungalowIcon;

export const TwoToneBusinessCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15 17H9v-1H5v3h14v-3h-4zM4 14h5v-3h6v3h5V9H4z"/><path fill={color || 'currentColor'} d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm9 14H5v-3h4v1h6v-1h4v3zm-8-4v-2h2v2h-2zm9-1h-5v-3H9v3H4V9h16v5z"/>
  </svg>
);
TwoToneBusinessCenterIcon.displayName = 'TwoToneBusinessCenterIcon';
export const BusinessCenterTwoToneIcon = TwoToneBusinessCenterIcon;

export const TwoToneCabinIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13.94 7h-3.89L12 5.52L13.94 7zm-6.5 2h9.12L18 10.1v.9H6v-.9L7.44 9zM18 13v2H6v-2h12zM6 19v-2h12v2H6z"/><path fill={color || 'currentColor'} d="M10 1c0 1.66-1.34 3-3 3c-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3c.55 0 1-.45 1-1h2zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4L12 3zm1.94 4h-3.89L12 5.52L13.94 7zm-6.5 2h9.12L18 10.1v.9H6v-.9L7.44 9zM18 13v2H6v-2h12zM6 19v-2h12v2H6z"/>
  </svg>
);
TwoToneCabinIcon.displayName = 'TwoToneCabinIcon';
export const CabinTwoToneIcon = TwoToneCabinIcon;

export const TwoToneCarpenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5.71 5.62L7 4.33l8.49 8.49l-2.81 2.81L5.71 5.62z"/><path fill={color || 'currentColor'} d="M19.73 14.23L7 1.5L3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zM5.71 5.62L7 4.33l8.49 8.49l-2.81 2.81L5.71 5.62zm8.36 14.26l-1.41-1.41l4.24-4.24l1.41 1.41l-4.24 4.24z"/>
  </svg>
);
TwoToneCarpenterIcon.displayName = 'TwoToneCarpenterIcon';
export const CarpenterTwoToneIcon = TwoToneCarpenterIcon;

export const TwoToneCasinoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 19h14V5H5v14zM16.5 6c.83 0 1.5.67 1.5 1.5S17.33 9 16.5 9S15 8.33 15 7.5S15.67 6 16.5 6zm0 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zM12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zM7.5 6C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9S6 8.33 6 7.5S6.67 6 7.5 6zm0 9c.83 0 1.5.67 1.5 1.5S8.33 18 7.5 18S6 17.33 6 16.5S6.67 15 7.5 15z"/><path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="7.5" cy="7.5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="7.5" r="1.5"/>
  </svg>
);
TwoToneCasinoIcon.displayName = 'TwoToneCasinoIcon';
export const CasinoTwoToneIcon = TwoToneCasinoIcon;

export const TwoToneChaletIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13 18h-2v-3H9v3H7v-4.67l3-3l3 3z"/><path fill={color || 'currentColor'} d="M17.5 15L10 7.5L2.5 15l1.41 1.41L5 15.33V20h10v-4.67l1.09 1.09L17.5 15zM13 18h-2v-3H9v3H7v-4.67l3-3l3 3V18zm9-10.5h-1.19l.75.75l-.71.71l-1.46-1.46h-.89v.89l1.45 1.45l-.71.71l-.74-.74V11h-1V9.81l-.75.75l-.71-.71l1.45-1.45v-.9h-.89l-1.45 1.45l-.71-.71l.75-.75H14v-1h1.19l-.75-.75l.71-.71l1.45 1.45h.89v-.87l-1.45-1.45l.71-.71l.75.75V3h1v1.19l.75-.75l.71.71l-1.46 1.46v.89h.89l1.45-1.45l.71.71l-.74.74H22v1z"/>
  </svg>
);
TwoToneChaletIcon.displayName = 'TwoToneChaletIcon';
export const ChaletTwoToneIcon = TwoToneChaletIcon;

export const TwoToneChargingStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M17 3v1H7V3h10m0 17H7v1h10v-1"/><path fill={color || 'currentColor'} d="M14.5 11l-3 6v-4h-2l3-6v4h2zM17 3H7v1h10V3m0 17H7v1h10v-1m0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10zM7 18h10V6H7v12z"/>
  </svg>
);
TwoToneChargingStationIcon.displayName = 'TwoToneChargingStationIcon';
export const ChargingStationTwoToneIcon = TwoToneChargingStationIcon;

export const TwoToneCheckroomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.6 18.2L13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75A3.51 3.51 0 0 0 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5c-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5l6 4.5H6z"/>
  </svg>
);
TwoToneCheckroomIcon.displayName = 'TwoToneCheckroomIcon';
export const CheckroomTwoToneIcon = TwoToneCheckroomIcon;

export const TwoToneChildCareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 10c-.1 0-.19.02-.29.03c-.2-.67-.49-1.29-.86-1.86C16.6 6.26 14.45 5 12 5S7.4 6.26 6.15 8.17c-.37.57-.66 1.19-.86 1.86c-.1-.01-.19-.03-.29-.03c-1.1 0-2 .9-2 2s.9 2 2 2c.1 0 .19-.02.29-.03c.2.67.49 1.29.86 1.86C7.4 17.74 9.55 19 12 19s4.6-1.26 5.85-3.17c.37-.57.66-1.19.86-1.86c.1.01.19.03.29.03c1.1 0 2-.9 2-2s-.9-2-2-2zm-4.5-.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm-5 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zM12 17c-2.01 0-3.74-1.23-4.5-3h9c-.76 1.77-2.49 3-4.5 3z"/><circle cx="14.5" cy="10.5" r="1.25"/><circle cx="9.5" cy="10.5" r="1.25"/><path fill={color || 'currentColor'} d="M12 17c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3zm10.94-5.66a4.008 4.008 0 0 0-2.81-3.17a9.114 9.114 0 0 0-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91a3.994 3.994 0 0 0-2.81 3.17c-.04.21-.06.43-.06.66c0 .23.02.45.06.66a4.008 4.008 0 0 0 2.81 3.17a8.977 8.977 0 0 0 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89a3.998 3.998 0 0 0 2.8-3.17c.04-.21.06-.43.06-.66c0-.23-.02-.45-.06-.66zM19 14c-.1 0-.19-.02-.29-.03c-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86c-.1.01-.19.03-.29.03c-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03c.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86c.1-.01.19-.03.29-.03c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
TwoToneChildCareIcon.displayName = 'TwoToneChildCareIcon';
export const ChildCareTwoToneIcon = TwoToneChildCareIcon;

export const TwoToneChildFriendlyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15 4.34V8h3.66A6.082 6.082 0 0 0 15 4.34zM8.04 14.36l.44.67c1.19.16 2.19.92 2.68 1.97h2.68a3.505 3.505 0 0 1 3.62-1.97l.29-.37c.4-.51.7-1.07.92-1.66H7.37c.32.67.57 1.19.67 1.36z"/><path fill={color || 'currentColor'} d="M13 2v8h8c0-4.42-3.58-8-8-8zm2 6V4.34c1.7.6 3.05 1.95 3.66 3.66H15zm-8.56 3l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3c1.93 0 3.5-1.57 3.5-3.5c0-1.04-.46-1.97-1.18-2.61A7.948 7.948 0 0 0 21 11H6.44zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20zm.74-5.34l-.29.37A3.505 3.505 0 0 0 13.84 17h-2.68c-.5-1.04-1.5-1.8-2.68-1.97l-.44-.67c-.1-.17-.34-.69-.67-1.36h11.29c-.21.59-.52 1.15-.92 1.66z"/>
  </svg>
);
TwoToneChildFriendlyIcon.displayName = 'TwoToneChildFriendlyIcon';
export const ChildFriendlyTwoToneIcon = TwoToneChildFriendlyIcon;

export const TwoToneCorporateFareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10 19H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z"/><path fill={color || 'currentColor'} d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z"/>
  </svg>
);
TwoToneCorporateFareIcon.displayName = 'TwoToneCorporateFareIcon';
export const CorporateFareTwoToneIcon = TwoToneCorporateFareIcon;

export const TwoToneCottageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M18 19h-5v-4h-2v4H6v-8.9l6-4.58l6 4.58z"/><path fill={color || 'currentColor'} d="M12 3L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4L12 3zm6 16h-5v-4h-2v4H6v-8.9l6-4.58l6 4.58V19zM10 1c0 1.66-1.34 3-3 3c-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3c.55 0 1-.45 1-1h2z"/>
  </svg>
);
TwoToneCottageIcon.displayName = 'TwoToneCottageIcon';
export const CottageTwoToneIcon = TwoToneCottageIcon;

export const TwoToneCountertopsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 6h2v2H6V6zm0 12v-6h5v6H6zm12 0h-5v-6h5v6z"/><path fill={color || 'currentColor'} d="M22 10h-4V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zM6 6h2v2H6V6zm0 12v-6h5v6H6zm12 0h-5v-6h5v6z"/>
  </svg>
);
TwoToneCountertopsIcon.displayName = 'TwoToneCountertopsIcon';
export const CountertopsTwoToneIcon = TwoToneCountertopsIcon;

export const TwoToneCribIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M18 14H6V8c0-1.1.9-2 2-2h2v5h8v3z"/><path fill={color || 'currentColor'} d="M18 9h-6V4H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22c2.76 0 5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-4 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4v3.75zM18 14H6V8c0-1.1.9-2 2-2h2v5h8v3z"/>
  </svg>
);
TwoToneCribIcon.displayName = 'TwoToneCribIcon';
export const CribTwoToneIcon = TwoToneCribIcon;

export const TwoToneDeskIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M16 8h4v2h-4zm0 4h4v2h-4z"/><path fill={color || 'currentColor'} d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 8h-4v-2h4v2zm0-4h-4V8h4v2z"/>
  </svg>
);
TwoToneDeskIcon.displayName = 'TwoToneDeskIcon';
export const DeskTwoToneIcon = TwoToneDeskIcon;

export const TwoToneDoNotStepIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14.98 12.15l3.07-3.07l-4.25-4.26l-3.08 3.07l4.26 4.26zm-2.56 3.11l-1.67-1.68l-3.33 3.32c-.78.78-2.05.78-2.83-.01l-.19-.17l-.47.24c-.29.14-.59.27-.89.39l-.01.65h6.64l2.75-2.74z"/><path fill={color || 'currentColor'} d="M18.51 15.68l-1.41-1.41l4.48-4.48L23 11.2l-4.49 4.48zm-3.53-3.53l3.07-3.07l-4.25-4.26l-3.08 3.07L9.3 6.47L13.8 2l7.08 7.08l-4.48 4.48l-1.42-1.41zm6.2 9.05l-1.41 1.41l-5.94-5.94L10.5 20H1v-2.63c0-.84.52-1.57 1.3-1.88c.58-.23 1.28-.56 1.97-1.02l1.38 1.38c.09.1.22.15.35.15s.26-.05.36-.15c.2-.2.2-.51 0-.71l-1.28-1.28c.27-.24.53-.51.77-.8l1.27 1.27a.485.485 0 0 0 .7 0c.2-.2.2-.51 0-.71l-1.4-1.4c.19-.34.34-.72.45-1.12l1.71 1.72a.485.485 0 0 0 .7 0c.19-.2.19-.5.01-.7l-7.9-7.9l1.42-1.41L21.18 21.2zm-8.76-5.94l-1.67-1.68l-3.33 3.32c-.78.78-2.05.78-2.83-.01l-.19-.17l-.47.24c-.29.14-.59.27-.89.39l-.01.65h6.64l2.75-2.74z"/>
  </svg>
);
TwoToneDoNotStepIcon.displayName = 'TwoToneDoNotStepIcon';
export const DoNotStepTwoToneIcon = TwoToneDoNotStepIcon;

export const TwoToneDoNotTouchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M18 15.17V13h-2.17L18 15.17zm-9-3.34l8.14 8.14c-.05.01-.09.03-.14.03h-6c-.39 0-.64-.23-.75-.36L6.87 16H9v-4.17z"/><path fill={color || 'currentColor'} d="M2.81 2.81L1.39 4.22L7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14c-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.66-.52l1.12 1.12l1.41-1.41L2.81 2.81zM17 20h-6c-.39 0-.64-.23-.75-.36L6.87 16H9v-4.17l8.14 8.14c-.05.01-.09.03-.14.03zm-3.17-9H14V3.25a1.25 1.25 0 0 1 2.5 0V11h1V5.25a1.25 1.25 0 0 1 2.5 0v11.92l-2-2V13h-2.17l-2-2zm-.83-.83V2.25a1.25 1.25 0 0 0-2.5 0v5.42l2.5 2.5zm-3.5-3.5V4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67z"/>
  </svg>
);
TwoToneDoNotTouchIcon.displayName = 'TwoToneDoNotTouchIcon';
export const DoNotTouchTwoToneIcon = TwoToneDoNotTouchIcon;

export const TwoToneDryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9z"/><path fill={color || 'currentColor'} d="M20.75 16a1.25 1.25 0 0 0 0-2.5H12v-1h6.75c.69 0 1.25-.56 1.25-1.25c0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54c0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9zm5.65-16.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L15 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L19 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z"/>
  </svg>
);
TwoToneDryIcon.displayName = 'TwoToneDryIcon';
export const DryTwoToneIcon = TwoToneDryIcon;

export const TwoToneElevatorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 5v14H5V5h14m-9 13v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5zM18 11l-2.5-4l-2.5 4h5zm-5 2l2.5 4l2.5-4h-5z"/><path fill={color || 'currentColor'} d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5zM18 11l-2.5-4l-2.5 4h5zm-5 2l2.5 4l2.5-4h-5z"/>
  </svg>
);
TwoToneElevatorIcon.displayName = 'TwoToneElevatorIcon';
export const ElevatorTwoToneIcon = TwoToneElevatorIcon;

export const TwoToneEscalatorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 5v14H5V5h14m-2 1h-3.3l-5 9H7c-.83 0-1.5.67-1.5 1.5S6.17 18 7 18h3.3l5-9H17c.83 0 1.5-.67 1.5-1.5S17.83 6 17 6z"/><path fill={color || 'currentColor'} d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 3h-3.3l-5 9H7c-.83 0-1.5.67-1.5 1.5S6.17 18 7 18h3.3l5-9H17c.83 0 1.5-.67 1.5-1.5S17.83 6 17 6z"/>
  </svg>
);
TwoToneEscalatorIcon.displayName = 'TwoToneEscalatorIcon';
export const EscalatorTwoToneIcon = TwoToneEscalatorIcon;

export const TwoToneEscalatorWarningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5zm3 2.5h-2.84c-.58.01-1.14.32-1.45.86l-.92 1.32L9.72 8a2.02 2.02 0 0 0-1.71-1H5c-1.1 0-2 .9-2 2v6h1.5v7h5V11.61L12.03 16h2.2l.77-1.1V22h4v-5h1v-3.5c0-.82-.67-1.5-1.5-1.5z"/>
  </svg>
);
TwoToneEscalatorWarningIcon.displayName = 'TwoToneEscalatorWarningIcon';
export const EscalatorWarningTwoToneIcon = TwoToneEscalatorWarningIcon;

export const TwoToneFamilyRestroomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z"/>
  </svg>
);
TwoToneFamilyRestroomIcon.displayName = 'TwoToneFamilyRestroomIcon';
export const FamilyRestroomTwoToneIcon = TwoToneFamilyRestroomIcon;

export const TwoToneFenceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M16 6.83l1 1V10h-2V7.83l.41-.41l.59-.59zm-4 0l.59.59l.41.41V10h-2V7.83l.41-.41l.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1l.59.59l.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/><path fill={color || 'currentColor'} d="M21 12v-2h-2V7l-3-3l-2 2l-2-2l-2 2l-2-2l-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2h2zm-5-5.17l1 1V10h-2V7.83l.41-.41l.59-.59zm-4 0l.59.59l.41.41V10h-2V7.83l.41-.41l.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1l.59.59l.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
  </svg>
);
TwoToneFenceIcon.displayName = 'TwoToneFenceIcon';
export const FenceTwoToneIcon = TwoToneFenceIcon;

export const TwoToneFireExtinguisherIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 19h10v1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-1zm0-1h10v-5H7v5zM17 3v6l-3.15-.66c-.01 0-.01.01-.02.02c1.55.62 2.72 1.98 3.07 3.64H7.1c.34-1.66 1.52-3.02 3.07-3.64c-.33-.26-.6-.58-.8-.95L5 6.5v-1l4.37-.91C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66L17 3zm-4 3c-.03-.59-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1z"/>
  </svg>
);
TwoToneFireExtinguisherIcon.displayName = 'TwoToneFireExtinguisherIcon';
export const FireExtinguisherTwoToneIcon = TwoToneFireExtinguisherIcon;

export const TwoToneFitnessCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29l-1.43-1.43z"/>
  </svg>
);
TwoToneFitnessCenterIcon.displayName = 'TwoToneFitnessCenterIcon';
export const FitnessCenterTwoToneIcon = TwoToneFitnessCenterIcon;

export const TwoToneFoodBankIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 5.5l6 4.5v9H6v-9l6-4.5m-.5 4v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z"/><path fill={color || 'currentColor'} d="M12 5.5l6 4.5v9H6v-9l6-4.5M12 3L4 9v12h16V9l-8-6zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3h-1zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2z"/>
  </svg>
);
TwoToneFoodBankIcon.displayName = 'TwoToneFoodBankIcon';
export const FoodBankTwoToneIcon = TwoToneFoodBankIcon;

export const TwoToneFoundationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"/><path fill={color || 'currentColor'} d="M19 12h3L12 3L2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"/>
  </svg>
);
TwoToneFoundationIcon.displayName = 'TwoToneFoundationIcon';
export const FoundationTwoToneIcon = TwoToneFoundationIcon;

export const TwoToneFreeBreakfastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6 13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5H6v8z"/><path fill={color || 'currentColor'} d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2zm-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10v8zm4-5h-2V5h2v3z"/>
  </svg>
);
TwoToneFreeBreakfastIcon.displayName = 'TwoToneFreeBreakfastIcon';
export const FreeBreakfastTwoToneIcon = TwoToneFreeBreakfastIcon;

export const TwoToneGiteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 12h10v5H4v-5zm16 5h-4v-6.17l2-2l2 2V17z"/><path fill={color || 'currentColor'} d="M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2l2 2V17z"/>
  </svg>
);
TwoToneGiteIcon.displayName = 'TwoToneGiteIcon';
export const GiteTwoToneIcon = TwoToneGiteIcon;

export const TwoToneGolfCourseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="19.5" cy="19.5" fillOpacity={fillOpacity ?? 0.3} r="1.5"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73c0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"/><circle cx="19.5" cy="19.5" r="1.5"/><path fill={color || 'currentColor'} d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73c0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"/>
  </svg>
);
TwoToneGolfCourseIcon.displayName = 'TwoToneGolfCourseIcon';
export const GolfCourseTwoToneIcon = TwoToneGolfCourseIcon;

export const TwoToneGrassIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 20H2v-2h5.75A8.032 8.032 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26c4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26c-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 0 1 .87 4.07h8v-2h-5.75A8.061 8.061 0 0 1 22 12.26zm-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61c.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29z"/>
  </svg>
);
TwoToneGrassIcon.displayName = 'TwoToneGrassIcon';
export const GrassTwoToneIcon = TwoToneGrassIcon;

export const TwoToneHolidayVillageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8 6.83l-4 4V18h3v-3h2v3h3v-7.17l-4-4zM9 13H7v-2h2v2z"/><path fill={color || 'currentColor'} d="M8 4l-6 6v10h12V10L8 4zm4 14H9v-3H7v3H4v-7.17l4-4l4 4V18zm-3-5H7v-2h2v2zm9 7V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2z"/>
  </svg>
);
TwoToneHolidayVillageIcon.displayName = 'TwoToneHolidayVillageIcon';
export const HolidayVillageTwoToneIcon = TwoToneHolidayVillageIcon;

export const TwoToneHotTubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="7" cy="6" r="2"/><path fill={color || 'currentColor'} d="M17.42 7.21c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06zM11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5c-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zM13.42 7.21c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06z"/>
  </svg>
);
TwoToneHotTubIcon.displayName = 'TwoToneHotTubIcon';
export const HotTubTwoToneIcon = TwoToneHotTubIcon;

export const TwoToneHouseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5l-5 4.5zm7-.19h-4c0-1.1.9-2 2-2s2 .9 2 2z"/><path fill={color || 'currentColor'} d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h6v-6h2v6h6v-8h3l-3-2.7zM17 18h-2v-6H9v6H7v-7.81l5-4.5l5 4.5V18z"/><path fill={color || 'currentColor'} d="M10 10h4c0-1.1-.9-2-2-2s-2 .9-2 2z"/>
  </svg>
);
TwoToneHouseIcon.displayName = 'TwoToneHouseIcon';
export const HouseTwoToneIcon = TwoToneHouseIcon;

export const TwoToneHouseSidingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7.21 10h9.58l.21.19V12H7v-1.81l.21-.19zm7.36-2H9.43L12 5.69L14.57 8zM7 16v-2h10v2H7z"/><path fill={color || 'currentColor'} d="M19 12h3L12 3L2 12h3v8h2v-2h10v2h2v-8zM7.21 10h9.58l.21.19V12H7v-1.81l.21-.19zm7.36-2H9.43L12 5.69L14.57 8zM7 16v-2h10v2H7z"/>
  </svg>
);
TwoToneHouseSidingIcon.displayName = 'TwoToneHouseSidingIcon';
export const HouseSidingTwoToneIcon = TwoToneHouseSidingIcon;

export const TwoToneHouseboatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13 13v-2h-2v2H9V8.18l3-2.2l3 2.2V13z"/><path fill={color || 'currentColor'} d="M12 16c-1.95 0-2.1 1-3.34 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1c1.19 0 1.42 1 3.33 1c1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1c1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1c-1.91 0-2.14 1-3.33 1c-1.24 0-1.39-1-3.34-1zm8.34-4.66l-1.37 1.37c-.19.18-.45.29-.71.29H17V9.65l1.32.97L19.5 9L12 3.5L4.5 9l1.18 1.61L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-1.37-1.37l-1.41 1.41l1.37 1.37c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l1.37-1.37l-1.4-1.41zM13 13v-2h-2v2H9V8.18l3-2.2l3 2.2V13h-2z"/>
  </svg>
);
TwoToneHouseboatIcon.displayName = 'TwoToneHouseboatIcon';
export const HouseboatTwoToneIcon = TwoToneHouseboatIcon;

export const TwoToneIronIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15 16H4v-1c0-1.1.9-2 2-2h9v3z"/><path fill={color || 'currentColor'} d="M21 6c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v3h15v-2c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1h1V6h-1zm-6 10H4v-1c0-1.1.9-2 2-2h9v3z"/>
  </svg>
);
TwoToneIronIcon.displayName = 'TwoToneIronIcon';
export const IronTwoToneIcon = TwoToneIronIcon;

export const TwoToneKitchenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8 5h2v3H8zm0 7h2v5H8zm-2 8h12v-9.02H6V20zm2-8h2v5H8v-5zM6 9h12V4H6v5zm2-4h2v3H8V5z"/><path fill={color || 'currentColor'} d="M18 2.01L6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>
  </svg>
);
TwoToneKitchenIcon.displayName = 'TwoToneKitchenIcon';
export const KitchenTwoToneIcon = TwoToneKitchenIcon;

export const TwoToneMeetingRoomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 19h6V5H7v14zm3-8h2v2h-2v-2z"/><path fill={color || 'currentColor'} d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z"/>
  </svg>
);
TwoToneMeetingRoomIcon.displayName = 'TwoToneMeetingRoomIcon';
export const MeetingRoomTwoToneIcon = TwoToneMeetingRoomIcon;

export const TwoToneMicrowaveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4 18h10V6H4v12zM7.75 8c.8 0 1.39.39 1.81.67c.31.21.51.33.69.33c.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.22 1.19-2.37 1.19c-.79 0-1.37-.38-1.79-.66c-.33-.22-.52-.34-.71-.34c-.37 0-.8.41-.95.61L5.37 9.19C5.73 8.79 6.59 8 7.75 8zm0 5c.8 0 1.39.39 1.81.67c.31.21.51.33.69.33c.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.22 1.19-2.37 1.19c-.79 0-1.37-.38-1.79-.66c-.33-.22-.52-.34-.71-.34c-.37 0-.8.41-.95.61l-1.42-1.42c.35-.4 1.21-1.19 2.37-1.19zM16 6v12h4V6h-4zm2 11c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm1-4h-2V7h2v2z"/><path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h10v12H4V6zm16 12h-4V6h4v12zm-1-9h-2V7h2v2zm-1 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-7.75-1c-.79 0-1.37-.38-1.79-.66c-.33-.22-.52-.34-.71-.34c-.37 0-.8.41-.95.61l-1.42-1.42c.35-.4 1.21-1.19 2.37-1.19c.8 0 1.39.39 1.81.67c.31.21.51.33.69.33c.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.21 1.19-2.37 1.19zm0-5c-.79 0-1.37-.38-1.79-.66c-.33-.22-.52-.34-.71-.34c-.37 0-.8.41-.95.61L5.37 9.19C5.73 8.79 6.59 8 7.75 8c.8 0 1.39.39 1.81.67c.31.21.51.33.69.33c.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.21 1.19-2.37 1.19z"/>
  </svg>
);
TwoToneMicrowaveIcon.displayName = 'TwoToneMicrowaveIcon';
export const MicrowaveTwoToneIcon = TwoToneMicrowaveIcon;

export const TwoToneNightShelterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 5.5l6 4.5v9H6v-9l6-4.5m3 6.5h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5z"/><path fill={color || 'currentColor'} d="M12 5.5l6 4.5v9H6v-9l6-4.5M12 3L4 9v12h16V9l-8-6zm3 9h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5z"/>
  </svg>
);
TwoToneNightShelterIcon.displayName = 'TwoToneNightShelterIcon';
export const NightShelterTwoToneIcon = TwoToneNightShelterIcon;

export const TwoToneNoBackpackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M18 15.17V8c0-1.1-.9-2-2-2H8.83l6 6h1.67v1.67l1.5 1.5zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20h11.17z"/><path fill={color || 'currentColor'} d="M6.98 4.15c.01 0 .01-.01.02-.01V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86v9.17l-2-2V8c0-1.1-.9-2-2-2H8.83L6.98 4.15zM14.83 12l1.67 1.67V12h-1.67zm4.95 10.61l-.85-.85c-.28.15-.59.24-.93.24H6c-1.1 0-2-.9-2-2V8c0-.36.06-.69.15-1.02L1.39 4.22L2.8 2.81l18.38 18.38l-1.4 1.42zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20h11.17z"/>
  </svg>
);
TwoToneNoBackpackIcon.displayName = 'TwoToneNoBackpackIcon';
export const NoBackpackTwoToneIcon = TwoToneNoBackpackIcon;

export const TwoToneNoCellIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 21h10v-1H7v1zM7 3v1h10V3H7z"/><path fill={color || 'currentColor'} d="M17 6v8.17l2 2V3c0-1.1-.9-1.99-2-1.99L7 1c-.85 0-1.58.55-1.87 1.3L8.83 6H17zM7 3h10v1H7V3zm14.19 18.19L2.81 2.81L1.39 4.22L5 7.83V21c0 1.1.9 2 2 2h10c.85 0 1.58-.55 1.87-1.3l.91.91l1.41-1.42zM17 21H7v-1h10v1zM7 18V9.83L15.17 18H7z"/>
  </svg>
);
TwoToneNoCellIcon.displayName = 'TwoToneNoCellIcon';
export const NoCellTwoToneIcon = TwoToneNoCellIcon;

export const TwoToneNoDrinksIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14.77 9h-2.94l1.55 1.56z"/><path fill={color || 'currentColor'} d="M21.19 21.19L2.81 2.81L1.39 4.22l8.23 8.23L11 14v5H6v2h12v-.17l1.78 1.78l1.41-1.42zM13 19v-3.17L16.17 19H13zM7.83 5l-2-2H21v2l-6.2 6.97l-1.42-1.42L14.77 9h-2.94l-2-2h6.74l1.78-2H7.83z"/>
  </svg>
);
TwoToneNoDrinksIcon.displayName = 'TwoToneNoDrinksIcon';
export const NoDrinksTwoToneIcon = TwoToneNoDrinksIcon;

export const TwoToneNoFlashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13.42 16.24l2.55 2.55l-.01 1.21H4v-8.6h3.02l.59-.65l.15-.16l1.5 1.5A3.486 3.486 0 0 0 6.5 15.5c0 1.93 1.57 3.5 3.5 3.5c1.68 0 3.07-1.18 3.42-2.76zM16 13.17V11.4h-1.77L16 13.17z"/><path fill={color || 'currentColor'} d="M20.4 5.6H22L19 11V7h-1V2h4l-1.6 3.6zM16 11.4v1.77l2 2V11c0-.88-.72-1.6-1.6-1.6h-2.54L12.58 8h-1.75l3.4 3.4H16zm1.97 6.57L2.1 2.1L.69 3.51l5.66 5.66l-.21.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l2.54 2.54l1.41-1.41l-3.93-3.94zM11.5 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5zm4.46 4.5H4v-8.6h3.02l.59-.65l.15-.16l1.5 1.5A3.486 3.486 0 0 0 6.5 15.5c0 1.93 1.57 3.5 3.5 3.5c1.68 0 3.07-1.18 3.42-2.76l2.55 2.55l-.01 1.21z"/>
  </svg>
);
TwoToneNoFlashIcon.displayName = 'TwoToneNoFlashIcon';
export const NoFlashTwoToneIcon = TwoToneNoFlashIcon;

export const TwoToneNoFoodIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8.16 11c-1.43.07-3.52.57-4.54 2h6.55l-2.01-2z"/><path fill={color || 'currentColor'} d="M1 21h15.01v.98c0 .56-.45 1.01-1.01 1.01H2.01c-.56 0-1.01-.45-1.01-1.01V21zm19.49 2.31L16 18.83V19H1v-2h13.17l-2-2H1c0-3.24 2.46-5.17 5.38-5.79l-5.7-5.7L2.1 2.1L13 13l2 2l6.9 6.9l-1.41 1.41zM10.17 13l-2-2c-1.42.06-3.52.56-4.55 2h6.55zM23 5h-5V1h-2v4h-5l.23 2h9.56l-1 9.97l1.83 1.83L23 5z"/>
  </svg>
);
TwoToneNoFoodIcon.displayName = 'TwoToneNoFoodIcon';
export const NoFoodTwoToneIcon = TwoToneNoFoodIcon;

export const TwoToneNoMeetingRoomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 5H8.12L12 8.88V6zM7 19h5v-4.46l-5-5z"/><path fill={color || 'currentColor'} d="M12 5v3.88l2 2V6h3v7.88l2 2V4h-5V3H6.12l2 2zM2.41 2.13L1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41L2.41 2.13zM12 19H7V9.54l5 5V19z"/>
  </svg>
);
TwoToneNoMeetingRoomIcon.displayName = 'TwoToneNoMeetingRoomIcon';
export const NoMeetingRoomTwoToneIcon = TwoToneNoMeetingRoomIcon;

export const TwoToneNoPhotographyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10.94 8.12L8.9 6.07L9.88 5h4.24l1.83 2H20v10.17l-3.12-3.12c.08-.34.12-.69.12-1.05c0-2.76-2.24-5-5-5c-.36 0-.71.04-1.06.12zM12 18c-2.76 0-5-2.24-5-5c0-.91.25-1.76.68-2.49L4.17 7H4v12h12.17l-1.68-1.68c-.73.43-1.58.68-2.49.68z"/><path fill={color || 'currentColor'} d="M8.9 6.07L7.48 4.66L9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16L20 17.17V7h-4.05l-1.83-2H9.88L8.9 6.07zm11.59 17.24L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49l-2-2L2.1 2.1L7 7l2.01 2.01l1.43 1.43l4.1 4.1l1.43 1.43L19 19l1.82 1.82l1.08 1.08l-1.41 1.41zM9.19 12.02c-.11.31-.19.63-.19.98c0 1.65 1.35 3 3 3c.35 0 .67-.08.98-.19l-3.79-3.79zM16.17 19l-1.68-1.68c-.73.43-1.58.68-2.49.68c-2.76 0-5-2.24-5-5c0-.91.25-1.76.68-2.49L4.17 7H4v12h12.17zm-1.36-7.02l2.08 2.08c.07-.35.11-.7.11-1.06c0-2.76-2.24-5-5-5c-.36 0-.71.04-1.06.12l2.08 2.08a3 3 0 0 1 1.79 1.78z"/>
  </svg>
);
TwoToneNoPhotographyIcon.displayName = 'TwoToneNoPhotographyIcon';
export const NoPhotographyTwoToneIcon = TwoToneNoPhotographyIcon;

export const TwoToneNoStrollerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8.1 5.27A7.09 7.09 0 0 1 10 5c.29 0 .58.02.86.05L9.49 6.67L8.1 5.27zm6.9 6.9V8.66l-1.61 1.89L15 12.17zM12.17 15l-1.39-1.39L9.6 15h2.57z"/><path fill={color || 'currentColor'} d="M8 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm7-11.34v3.51l2 2v-7.9c.58-.68.97-1.27 1.65-1.27c.77 0 1.35.66 1.35 1.48V7h2v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11l1.42 1.42L15 8.66zm4.78 13.95l-1.91-1.91c-.29.76-1.01 1.3-1.87 1.3c-1.1 0-2-.9-2-2c0-.86.54-1.58 1.3-1.87L14.17 17H7.43c-.85 0-1.31-1-.76-1.65l2.69-3.16l-7.97-7.97L2.8 2.81l7.86 7.86l1.42 1.42l9.11 9.11l-1.41 1.41zM12.17 15l-1.39-1.39L9.6 15h2.57zM10 5c.29 0 .58.02.86.05L9.49 6.67l1.42 1.42L14.3 4.1C13.03 3.4 11.56 3 10 3c-1.23 0-2.4.25-3.47.7L8.1 5.27A7.09 7.09 0 0 1 10 5z"/>
  </svg>
);
TwoToneNoStrollerIcon.displayName = 'TwoToneNoStrollerIcon';
export const NoStrollerTwoToneIcon = TwoToneNoStrollerIcon;

export const TwoToneOtherHousesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 5.52L6 10.1V19h12v-8.9l-6-4.58zM8 15c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M12 3L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4L12 3zm6 16H6v-8.9l6-4.58l6 4.58V19zm-9-5c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1zm3-1c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm3 1c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1z"/>
  </svg>
);
TwoToneOtherHousesIcon.displayName = 'TwoToneOtherHousesIcon';
export const OtherHousesTwoToneIcon = TwoToneOtherHousesIcon;

export const TwoTonePoolIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M22 21c-1.11 0-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36c-.56 0-.78.13-1.15.36c-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36c-.56 0-.78.13-1.15.36c-.46.27-1.08.64-2.19.64s-1.73-.37-2.18-.64c-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36c.56 0 .78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36c-.56 0-.78.13-1.15.36c-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36c-.56 0-.78.13-1.15.36c-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36c.56 0 .78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2H22zM8.67 12c.56 0 .78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1l-3.25 3.25c.31.12.56.27.77.39c.37.23.59.36 1.15.36z"/><circle cx="16.5" cy="5.5" fillOpacity={fillOpacity ?? 0.3} r="2.5"/><path fill={color || 'currentColor'} d="M22 16.5h-.02h.02zM10 8l-3.25 3.25c.31.12.56.27.77.39c.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36c.55 0 .78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1zm-4.65 7.5c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.06.63 2.16.64v-2c-.55 0-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36c-.55 0-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.2-.64c.37-.23.6-.36 1.15-.36zM18.67 18c-1.11 0-1.73.37-2.18.64c-.37.23-.6.36-1.15.36c-.55 0-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36s-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.19-.64c.37-.23.6-.36 1.15-.36c.55 0 .78.13 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.19-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64s1.72-.37 2.18-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64v-2c-.56 0-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64z"/><circle cx="16.5" cy="5.5" r="2.5"/>
  </svg>
);
TwoTonePoolIcon.displayName = 'TwoTonePoolIcon';
export const PoolTwoToneIcon = TwoTonePoolIcon;

export const TwoToneRiceBowlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.49V20h-4v-1.12l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33"/><path fill={color || 'currentColor'} d="M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.49V20h-4v-1.12l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33M12 2C6.48 2 2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25c0-5.52-4.48-10-10-10zm-2 10V4.26c.64-.16 1.31-.26 2-.26s1.36.1 2 .26V12h-4zm6 0V5.08c2.39 1.39 4 3.96 4 6.92h-4zM4 12c0-2.95 1.61-5.53 4-6.92V12H4z"/>
  </svg>
);
TwoToneRiceBowlIcon.displayName = 'TwoToneRiceBowlIcon';
export const RiceBowlTwoToneIcon = TwoToneRiceBowlIcon;

export const TwoToneRoofingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M11 16h2v2h-2z"/><path fill={color || 'currentColor'} d="M13 18h-2v-2h2v2zm2-4H9v6h6v-6zm4-4.7V4h-3v2.6L12 3L2 12h3l7-6.31L19 12h3l-3-2.7z"/>
  </svg>
);
TwoToneRoofingIcon.displayName = 'TwoToneRoofingIcon';
export const RoofingTwoToneIcon = TwoToneRoofingIcon;

export const TwoToneRoomPreferencesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13 12.11V5H7v14h4.29c-.19-.63-.29-1.3-.29-2c0-1.91.76-3.63 2-4.89zM10 11h2v2h-2v-2z"/><path fill={color || 'currentColor'} d="M12 13h-2v-2h2v2zm-5 6V5h6v7.11c.57-.59 1.25-1.07 2-1.42V6h2v4h2V4h-4V3H5v16H3v2h9.26c-.42-.6-.75-1.28-.97-2H7zm14.69-1.37l1.14 1l-1 1.73l-1.45-.49c-.32.27-.68.48-1.08.63L19 22h-2l-.3-1.49c-.4-.15-.76-.36-1.08-.63l-1.45.49l-1-1.73l1.14-1c-.08-.5-.08-.76 0-1.26l-1.14-1l1-1.73l1.45.49c.32-.27.68-.48 1.08-.63L17 12h2l.3 1.49c.4.15.76.36 1.08.63l1.45-.49l1 1.73l-1.14 1c.08.51.08.77 0 1.27zM20 17c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2z"/>
  </svg>
);
TwoToneRoomPreferencesIcon.displayName = 'TwoToneRoomPreferencesIcon';
export const RoomPreferencesTwoToneIcon = TwoToneRoomPreferencesIcon;

export const TwoToneRoomServiceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13A7.002 7.002 0 0 0 12 9.58z"/><path fill={color || 'currentColor'} d="M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21zM12 9.58c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z"/>
  </svg>
);
TwoToneRoomServiceIcon.displayName = 'TwoToneRoomServiceIcon';
export const RoomServiceTwoToneIcon = TwoToneRoomServiceIcon;

export const TwoToneRvHookupIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3l3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3l-3-3z"/><path fill={color || 'currentColor'} d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3l3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3l-3-3z"/>
  </svg>
);
TwoToneRvHookupIcon.displayName = 'TwoToneRvHookupIcon';
export const RvHookupTwoToneIcon = TwoToneRvHookupIcon;

export const TwoToneSmokeFreeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.5 13H22v3h-1.5zM18 13h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.76c0-2.22-1.28-4.14-3.15-5.03zM14.5 8.65h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5a3.35 3.35 0 0 0 0 6.7zM17 13h-2.34L17 15.34zM3.41 4.59L2 6l7 7H2v3h10l7 7l1.41-1.41z"/>
  </svg>
);
TwoToneSmokeFreeIcon.displayName = 'TwoToneSmokeFreeIcon';
export const SmokeFreeTwoToneIcon = TwoToneSmokeFreeIcon;

export const TwoToneSmokingRoomsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M2 16h15v3H2v-3zm18.5 0H22v3h-1.5v-3zM18 16h1.5v3H18v-3zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5a3.35 3.35 0 0 0 0 6.7h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z"/><path fill={color || 'currentColor'} d="M2 16h15v3H2v-3zm18.5 0H22v3h-1.5v-3zM18 16h1.5v3H18v-3zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5a3.35 3.35 0 0 0 0 6.7h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z"/>
  </svg>
);
TwoToneSmokingRoomsIcon.displayName = 'TwoToneSmokingRoomsIcon';
export const SmokingRoomsTwoToneIcon = TwoToneSmokingRoomsIcon;

export const TwoToneSoapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M20 5.5c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9z"/><path fill={color || 'currentColor'} d="M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25zm5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-3.5-3c-.83 0-1.5.67-1.5 1.5S15.67 4 16.5 4S18 3.33 18 2.5S17.33 1 16.5 1zm4.25 15a1.25 1.25 0 0 0 0-2.5H12v-1h6.75c.69 0 1.25-.56 1.25-1.25c0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54c0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9z"/>
  </svg>
);
TwoToneSoapIcon.displayName = 'TwoToneSoapIcon';
export const SoapTwoToneIcon = TwoToneSoapIcon;

export const TwoToneSpaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.55 12zm10.43-1.61z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8.94 12.25c0-.01 0-.01 0 0c-.13-.09-.27-.17-.4-.26c.13.1.27.17.4.26zm4.41-3.67a9.659 9.659 0 0 0-1.3-3.38c-.66 1.04-1.12 2.19-1.37 3.39c.46.3.9.62 1.33.97c.42-.35.87-.68 1.34-.98zm3.19 5.08l.01.02c-.09.06-.18.12-.27.17l-.07.05c-.98.71-1.84 1.61-2.53 2.66L12 19.1l-1.67-2.55c-.68-1.03-1.52-1.92-2.51-2.65l-.07-.04c-.13-.08-.26-.16-.39-.25l.01-.01a9.68 9.68 0 0 0-3.12-1.33c.75 3.36 3.16 6.17 6.45 7.35c.42.15.84.27 1.28.36c.45-.09.89-.21 1.33-.37c3.27-1.17 5.67-3.98 6.43-7.34c-1.14.26-2.23.73-3.2 1.39zm-7.55-1.38"/><path fill={color || 'currentColor'} d="M12 15.45a12.11 12.11 0 0 0-3.06-3.2c-.13-.09-.27-.16-.4-.26c.13.09.27.17.39.25A11.777 11.777 0 0 0 2 10c0 5.32 3.36 9.82 8.03 11.49c.63.23 1.29.4 1.97.51c.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45zm1.32 4.15c-.44.15-.88.27-1.33.37c-.44-.09-.87-.21-1.28-.36c-3.29-1.18-5.7-3.99-6.45-7.35c1.1.26 2.15.71 3.12 1.33l-.02.01c.13.09.26.18.39.25l.07.04c.99.72 1.84 1.61 2.51 2.65L12 19.1l1.67-2.55a10.19 10.19 0 0 1 2.53-2.66l.07-.05c.09-.05.18-.11.27-.17l-.01-.02c.98-.65 2.07-1.13 3.21-1.4c-.75 3.37-3.15 6.18-6.42 7.35zm2.17-9.97c-.18-2.79-1.31-5.51-3.43-7.63a12.188 12.188 0 0 0-3.55 7.63c1.28.68 2.46 1.56 3.49 2.63c1.03-1.06 2.21-1.94 3.49-2.63zm-3.44-4.44c.63 1.03 1.07 2.18 1.3 3.38c-.47.3-.91.63-1.34.98c-.42-.34-.87-.67-1.33-.97c.25-1.2.71-2.35 1.37-3.39z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8.99 12.28c-.02-.01-.04-.03-.05-.04c0 0 .01 0 .01.01c.01.01.02.02.04.03z"/>
  </svg>
);
TwoToneSpaIcon.displayName = 'TwoToneSpaIcon';
export const SpaTwoToneIcon = TwoToneSpaIcon;

export const TwoToneSportsBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2v10zm-8-8.5c-1.1 0-2-.9-2-2c0-.85.55-1.6 1.37-1.88l.8-.27l.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5z"/><path fill={color || 'currentColor'} d="M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2v10zM10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-1.56c.35-.59.56-1.27.56-2c0-2.21-1.79-4-4-4c-.34 0-.66.05-.98.13A4.707 4.707 0 0 0 10 2.02zM7 10.5c-1.1 0-2-.9-2-2c0-.85.55-1.6 1.37-1.88l.8-.27l.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM17 17v-6h2v6h-2z"/>
  </svg>
);
TwoToneSportsBarIcon.displayName = 'TwoToneSportsBarIcon';
export const SportsBarTwoToneIcon = TwoToneSportsBarIcon;

export const TwoToneStairsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M19 5v14H5V5h14m-1 1h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18V6z"/><path fill={color || 'currentColor'} d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18V6z"/>
  </svg>
);
TwoToneStairsIcon.displayName = 'TwoToneStairsIcon';
export const StairsTwoToneIcon = TwoToneStairsIcon;

export const TwoToneStorefrontIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M6.44 9.86L7.02 5H5.05L4.04 9.36c-.1.42-.01.84.25 1.17c.14.18.44.47.94.47c.61 0 1.13-.49 1.21-1.14zM9.71 11c.74 0 1.29-.59 1.29-1.31V5H9.04l-.55 4.52c-.05.39.07.78.33 1.07c.23.26.55.41.89.41zm4.51 0c.41 0 .72-.15.96-.41c.25-.29.37-.68.33-1.07L14.96 5H13v4.69c0 .72.55 1.31 1.22 1.31zm4.69-6.01L16.98 5l.58 4.86c.08.65.6 1.14 1.21 1.14c.49 0 .8-.29.93-.47c.26-.33.35-.76.25-1.17l-1.04-4.37z"/><path fill={color || 'currentColor'} d="M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88c.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28c.64-.82.87-1.87.62-2.89zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07c-.22.26-.54.41-.95.41c-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52L9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31c-.34 0-.65-.15-.89-.41a1.42 1.42 0 0 1-.33-1.07zm-4.2 1.01c-.26-.33-.35-.76-.25-1.17L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14c-.5 0-.8-.29-.94-.47zM19 19H5v-6.03c.08.01.15.03.23.03c.87 0 1.66-.36 2.24-.95c.6.6 1.4.95 2.31.95c.87 0 1.65-.36 2.23-.93c.59.57 1.39.93 2.29.93c.84 0 1.64-.35 2.24-.95c.58.59 1.37.95 2.24.95c.08 0 .15-.02.23-.03V19zm.71-8.47c-.14.18-.44.47-.94.47c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01l1.05 4.37c.1.42.01.85-.25 1.17z"/>
  </svg>
);
TwoToneStorefrontIcon.displayName = 'TwoToneStorefrontIcon';
export const StorefrontTwoToneIcon = TwoToneStorefrontIcon;

export const TwoToneStrollerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10 5c.29 0 .58.02.86.05L9.49 6.66l-1.4-1.4C8.71 5.09 9.35 5 10 5m5 3.66V15H9.6L15 8.66"/><path fill={color || 'currentColor'} d="M10 5c.29 0 .58.02.86.05L9.49 6.66l-1.4-1.4C8.71 5.09 9.35 5 10 5m5 3.66V15H9.6L15 8.66M18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27c.77 0 1.35.66 1.35 1.48V7h2v-.52C22 4.56 20.52 3 18.65 3zM10 3c-1.97 0-3.79.64-5.28 1.72l4.89 4.89l4.7-5.51C13.03 3.4 11.56 3 10 3zm6 15c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zM6 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
TwoToneStrollerIcon.displayName = 'TwoToneStrollerIcon';
export const StrollerTwoToneIcon = TwoToneStrollerIcon;

export const TwoToneTapasIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M16 10V8h4v2c0 1.1-.9 2-2 2s-2-.9-2-2zM4 6c-.28 0-.5-.22-.5-.5S3.72 5 4 5h6c.28 0 .5.22.5.5s-.22.5-.5.5H4zm6 6H4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5z"/><path fill={color || 'currentColor'} d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zm-4 7V8h4v2c0 1.1-.9 2-2 2s-2-.9-2-2zm-6-1H8V8h2a2.5 2.5 0 0 0 0-5H8V1H6v2H4a2.5 2.5 0 0 0 0 5h2v1H4a2.5 2.5 0 0 0 0 5h2v9h2v-9h2a2.5 2.5 0 0 0 0-5zM4 6c-.28 0-.5-.22-.5-.5S3.72 5 4 5h6c.28 0 .5.22.5.5s-.22.5-.5.5H4zm6 6H4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5z"/>
  </svg>
);
TwoToneTapasIcon.displayName = 'TwoToneTapasIcon';
export const TapasTwoToneIcon = TwoToneTapasIcon;

export const TwoToneTtyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M4.13 5c.17 1.37.53 2.71 1.05 3.99l1.65-1.65L6.36 5H4.13zm11.53 11.17l-1.65 1.65c1.28.52 2.63.87 3.99 1.05v-2.23l-2.34-.47z"/><path fill={color || 'currentColor'} d="M19.2 14.84l-3.67-.73a.99.99 0 0 0-.9.27L12.1 16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52c.24-.24.34-.58.28-.9L8.16 3.8c-.09-.46-.5-.8-.98-.8H3.03c-.56 0-1.03.47-1 1.03c.17 2.89 1.02 5.6 2.4 7.97c1.58 2.73 3.85 4.99 6.57 6.57c2.37 1.37 5.08 2.23 7.97 2.4c.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98zM4.13 5h2.23l.47 2.34l-1.65 1.65A15.77 15.77 0 0 1 4.13 5zM18 18.87a15.77 15.77 0 0 1-3.99-1.05l1.65-1.65l2.34.47v2.23zM14 4h2v2h-2V4zm-1 3h2v2h-2V7zm-2-3h2v2h-2V4zm7 5h-2V7h2v2zm1-3h-2V4h2v2zm2 3h-2V7h2v2zm1-3h-2V4h2v2zm-8 4h2v2h-2v-2zm-3 0h2v2h-2v-2zm8 2h-2v-2h2v2zm3 0h-2v-2h2v2z"/>
  </svg>
);
TwoToneTtyIcon.displayName = 'TwoToneTtyIcon';
export const TtyTwoToneIcon = TwoToneTtyIcon;

export const TwoToneUmbrellaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M13.28 8.5l.76.58l.92-.23L13 14.8V8.29l.28.21zm-4.25.36L11 14.8V8.29l-.28.21l-.76.59l-.93-.23z"/><path fill={color || 'currentColor'} d="M14.5 6.92L13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92L6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07l-3.5.85zM13.28 8.5l.76.58l.92-.23L13 14.8V8.29l.28.21zm-3.32.59l.76-.58l.28-.22v6.51L9.03 8.86l.93.23z"/>
  </svg>
);
TwoToneUmbrellaIcon.displayName = 'TwoToneUmbrellaIcon';
export const UmbrellaTwoToneIcon = TwoToneUmbrellaIcon;

export const TwoToneVapeFreeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="10.5" cy="17.5" fillOpacity={fillOpacity ?? 0.3} r=".5"/><path fill={color || 'currentColor'} d="M2 16.5h1c1.33 0 2.71-.18 4-.5v3c-1.29-.32-2.67-.5-4-.5H2v-2zM16.17 19H8v-3h5.17L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41l-3.6-3.6zm2.66-3H22v3h-.17l-3-3zM11 17.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5zm11-4.74V15h-1.5v-2.23c0-2.24-1.76-4.07-4-4.07V7.2c1.02 0 1.85-.83 1.85-1.85S17.52 3.5 16.5 3.5V2c1.85 0 3.35 1.5 3.35 3.35c0 .93-.38 1.77-1 2.38c1.87.89 3.15 2.81 3.15 5.03zM11.15 8.32V8.3c0-1.85 1.5-3.35 3.35-3.35v1.5c-1.02 0-1.85.73-1.85 1.75s.83 2 1.85 2h1.53c1.87 0 3.47 1.35 3.47 3.16V15H18v-1.3c0-1.31-.92-2.05-1.97-2.05h-1.55l-3.33-3.33z"/>
  </svg>
);
TwoToneVapeFreeIcon.displayName = 'TwoToneVapeFreeIcon';
export const VapeFreeTwoToneIcon = TwoToneVapeFreeIcon;

export const TwoToneVapingRoomsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="10.5" cy="17.5" fillOpacity={fillOpacity ?? 0.3} r=".5"/><path fill={color || 'currentColor'} d="M2 16.5h1c1.33 0 2.71-.18 4-.5v3c-1.29-.32-2.67-.5-4-.5H2v-2zm20-.5v3H8v-3h14zm-11 1.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5zm11-4.74V15h-1.5v-2.23c0-2.24-1.76-4.07-4-4.07V7.2c1.02 0 1.85-.83 1.85-1.85S17.52 3.5 16.5 3.5V2c1.85 0 3.35 1.5 3.35 3.35c0 .93-.38 1.77-1 2.38c1.87.89 3.15 2.81 3.15 5.03zm-2.5.6V15H18v-1.3c0-1.31-.92-2.05-1.97-2.05H14.5a3.35 3.35 0 0 1 0-6.7v1.5c-1.02 0-1.85.73-1.85 1.75s.83 2 1.85 2h1.53c1.87 0 3.47 1.35 3.47 3.16z"/>
  </svg>
);
TwoToneVapingRoomsIcon.displayName = 'TwoToneVapingRoomsIcon';
export const VapingRoomsTwoToneIcon = TwoToneVapingRoomsIcon;

export const TwoToneVillaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z"/><path fill={color || 'currentColor'} d="M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z"/>
  </svg>
);
TwoToneVillaIcon.displayName = 'TwoToneVillaIcon';
export const VillaTwoToneIcon = TwoToneVillaIcon;

export const TwoToneWashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9zm8.5-14.5c-.55 0-1-.45-1-1c0-.4.43-1.22 1-2.05c.57.83 1 1.65 1 2.05c0 .55-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M20.75 16a1.25 1.25 0 0 0 0-2.5H12v-1h6.75c.69 0 1.25-.56 1.25-1.25c0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54c0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3v9zm3.5-12c.83 0 1.5-.67 1.5-1.5c0-.84-1.5-2.5-1.5-2.5S12 6.66 12 7.5c0 .83.67 1.5 1.5 1.5zm5-8S16 3.83 16 5.5a2.5 2.5 0 0 0 5 0C21 3.83 18.5 1 18.5 1zm0 5.5c-.55 0-1-.45-1-1c0-.4.43-1.22 1-2.05c.57.83 1 1.65 1 2.05c0 .55-.45 1-1 1z"/>
  </svg>
);
TwoToneWashIcon.displayName = 'TwoToneWashIcon';
export const WashTwoToneIcon = TwoToneWashIcon;

export const TwoToneWaterDamageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 5.69l-5 4.5V18h10v-7.81l-5-4.5zM12 16c-1.1 0-2-.9-2-2s2-4 2-4s2 2.9 2 4s-.9 2-2 2z"/><path fill={color || 'currentColor'} d="M12 3L2 12h3v8h14v-8h3L12 3zM7 18v-7.81l5-4.5l5 4.5V18H7zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2s2-4 2-4s2 2.9 2 4z"/>
  </svg>
);
TwoToneWaterDamageIcon.displayName = 'TwoToneWaterDamageIcon';
export const WaterDamageTwoToneIcon = TwoToneWaterDamageIcon;

export const TwoToneWheelchairPickupIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.5 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2zm5.5 6.95V9c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6h2v7h3.5v-.11c-1.24-1.26-2-2.99-2-4.89c0-2.58 1.41-4.84 3.5-6.05zM16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74c0 2.76 2.24 5 5 5s5-2.24 5-5h-2zm3.04-3H15V8h-2v8h5.46l2.47 3.71l1.66-1.11l-3.05-4.6z"/>
  </svg>
);
TwoToneWheelchairPickupIcon.displayName = 'TwoToneWheelchairPickupIcon';
export const WheelchairPickupTwoToneIcon = TwoToneWheelchairPickupIcon;

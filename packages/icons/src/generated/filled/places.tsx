import React from 'react';
import { IconProps } from '../../types';

export const FilledAcUnitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 11h-4.17l3.24-3.24l-1.41-1.42L15 11h-2V9l4.66-4.66l-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93L6.34 4.34L11 9v2H9L4.34 6.34L2.93 7.76L6.17 11H2v2h4.17l-3.24 3.24l1.41 1.42L9 13h2v2l-4.66 4.66l1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24l1.42-1.41L13 15v-2h2l4.66 4.66l1.41-1.42L17.83 13H22z"/>
  </svg>
);
FilledAcUnitIcon.displayName = 'FilledAcUnitIcon';
export const AcUnitFilledIcon = FilledAcUnitIcon;

export const FilledAirportShuttleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 5H3a2 2 0 0 0-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/>
  </svg>
);
FilledAirportShuttleIcon.displayName = 'FilledAirportShuttleIcon';
export const AirportShuttleFilledIcon = FilledAirportShuttleIcon;

export const FilledAllInclusiveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66L10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99c-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1l1.51-1.34L9.22 8.2A5.37 5.37 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5l.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99c1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01l-1.51 1.34l1.27 1.12a5.386 5.386 0 0 0 3.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/>
  </svg>
);
FilledAllInclusiveIcon.displayName = 'FilledAllInclusiveIcon';
export const AllInclusiveFilledIcon = FilledAllInclusiveIcon;

export const FilledApartmentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
  </svg>
);
FilledApartmentIcon.displayName = 'FilledApartmentIcon';
export const ApartmentFilledIcon = FilledApartmentIcon;

export const FilledBabyChangingStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 8v2h-3L8.31 8.82L7 12.75V22H3V12l1.58-4.63A2.003 2.003 0 0 1 7.3 6.18l4.15 1.83L14 8zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm1 18h12v-2H9v2zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5zM13 12c0-.55-.45-1-1-1H9v2h2v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3h-2v2h-2v-1z"/>
  </svg>
);
FilledBabyChangingStationIcon.displayName = 'FilledBabyChangingStationIcon';
export const BabyChangingStationFilledIcon = FilledBabyChangingStationIcon;

export const FilledBackpackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z"/>
  </svg>
);
FilledBackpackIcon.displayName = 'FilledBackpackIcon';
export const BackpackFilledIcon = FilledBackpackIcon;

export const FilledBalconyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 10v2H8v-2h2zm6 2v-2h-2v2h2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4h1zM7 16H5v4h2v-4zm4 0H9v4h2v-4zm0-11.92C8.16 4.56 6 7.03 6 10v4h5V4.08zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92V14zm2 2h-2v4h2v-4zm4 0h-2v4h2v-4z"/>
  </svg>
);
FilledBalconyIcon.displayName = 'FilledBalconyIcon';
export const BalconyFilledIcon = FilledBalconyIcon;

export const FilledBathtubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="7" cy="7" r="2"/><path fill={color || 'currentColor'} d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08c-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08c0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1c1.1 0 2-.9 2-2v-6h-2z"/>
  </svg>
);
FilledBathtubIcon.displayName = 'FilledBathtubIcon';
export const BathtubFilledIcon = FilledBathtubIcon;

export const FilledBeachAccessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.127 14.56l1.43-1.43l6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02c3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"/>
  </svg>
);
FilledBeachAccessIcon.displayName = 'FilledBeachAccessIcon';
export const BeachAccessFilledIcon = FilledBeachAccessIcon;

export const FilledBentoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 11V5h4c1.1 0 2 .9 2 2v4h-6zm4 8c1.1 0 2-.9 2-2v-4h-6v6h4zM14 5v14H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5z"/>
  </svg>
);
FilledBentoIcon.displayName = 'FilledBentoIcon';
export const BentoFilledIcon = FilledBentoIcon;

export const FilledBungalowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3L4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77l1.7-1.06L12 3zm1 11h-2v-2h2v2z"/>
  </svg>
);
FilledBungalowIcon.displayName = 'FilledBungalowIcon';
export const BungalowFilledIcon = FilledBungalowIcon;

export const FilledBusinessCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/>
  </svg>
);
FilledBusinessCenterIcon.displayName = 'FilledBusinessCenterIcon';
export const BusinessCenterFilledIcon = FilledBusinessCenterIcon;

export const FilledCabinIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 1c0 1.66-1.34 3-3 3c-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3c.55 0 1-.45 1-1h2zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4L12 3zm1.94 4h-3.89L12 5.52L13.94 7zm-6.5 2h9.12L18 10.1v.9H6v-.9L7.44 9zM18 13v2H6v-2h12zM6 19v-2h12v2H6z"/>
  </svg>
);
FilledCabinIcon.displayName = 'FilledCabinIcon';
export const CabinFilledIcon = FilledCabinIcon;

export const FilledCarpenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.73 14.23L7 1.5L3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zm-5.66 5.65l-1.41-1.41l4.24-4.24l1.41 1.41l-4.24 4.24z"/>
  </svg>
);
FilledCarpenterIcon.displayName = 'FilledCarpenterIcon';
export const CarpenterFilledIcon = FilledCarpenterIcon;

export const FilledCasinoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/>
  </svg>
);
FilledCasinoIcon.displayName = 'FilledCasinoIcon';
export const CasinoFilledIcon = FilledCasinoIcon;

export const FilledChaletIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 7.5l7.5 7.5l-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15L10 7.5zm12-1h-1.19l.75-.75l-.71-.71l-1.46 1.46h-.89v-.89l1.45-1.45l-.71-.71l-.74.74V3h-1v1.19l-.75-.75l-.71.71l1.45 1.45v.9h-.89l-1.45-1.45l-.71.71l.75.75H14v1h1.19l-.75.75l.71.71l1.45-1.45h.89v.89l-1.45 1.45l.71.71l.75-.75V11h1V9.81l.75.75l.71-.71l-1.46-1.46V7.5h.89l1.45 1.45l.71-.71l-.74-.74H22v-1z"/>
  </svg>
);
FilledChaletIcon.displayName = 'FilledChaletIcon';
export const ChaletFilledIcon = FilledChaletIcon;

export const FilledChargingStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.5 11l-3 6v-4h-2l3-6v4h2zM7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 5v12h10V6H7z"/>
  </svg>
);
FilledChargingStationIcon.displayName = 'FilledChargingStationIcon';
export const ChargingStationFilledIcon = FilledChargingStationIcon;

export const FilledCheckroomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.6 18.2L13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75A3.51 3.51 0 0 0 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5c-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5l6 4.5H6z"/>
  </svg>
);
FilledCheckroomIcon.displayName = 'FilledCheckroomIcon';
export const CheckroomFilledIcon = FilledCheckroomIcon;

export const FilledChildCareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="14.5" cy="10.5" r="1.25"/><circle cx="9.5" cy="10.5" r="1.25"/><path fill={color || 'currentColor'} d="M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66a4.008 4.008 0 0 0-2.81-3.17a9.114 9.114 0 0 0-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91a3.994 3.994 0 0 0-2.81 3.17c-.04.21-.06.43-.06.66s.02.45.06.66a4.008 4.008 0 0 0 2.81 3.17a8.977 8.977 0 0 0 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89a3.998 3.998 0 0 0 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03c-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86c-.1.01-.19.03-.29.03c-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03c.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86c.1-.01.19-.03.29-.03c1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z"/>
  </svg>
);
FilledChildCareIcon.displayName = 'FilledChildCareIcon';
export const ChildCareFilledIcon = FilledChildCareIcon;

export const FilledChildFriendlyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89A7.948 7.948 0 0 0 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3c1.93 0 3.5-1.57 3.5-3.5c0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"/>
  </svg>
);
FilledChildFriendlyIcon.displayName = 'FilledChildFriendlyIcon';
export const ChildFriendlyFilledIcon = FilledChildFriendlyIcon;

export const FilledCorporateFareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z"/>
  </svg>
);
FilledCorporateFareIcon.displayName = 'FilledCorporateFareIcon';
export const CorporateFareFilledIcon = FilledCorporateFareIcon;

export const FilledCottageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4L12 3zm-2-2c0 1.66-1.34 3-3 3c-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3c.55 0 1-.45 1-1h2z"/>
  </svg>
);
FilledCottageIcon.displayName = 'FilledCottageIcon';
export const CottageFilledIcon = FilledCottageIcon;

export const FilledCountertopsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 10V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2h-4zm-5 8h-2v-6h2v6z"/>
  </svg>
);
FilledCountertopsIcon.displayName = 'FilledCountertopsIcon';
export const CountertopsFilledIcon = FilledCountertopsIcon;

export const FilledCribIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 9h-6V4H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22c2.76 0 5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-4 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4v3.75z"/>
  </svg>
);
FilledCribIcon.displayName = 'FilledCribIcon';
export const CribFilledIcon = FilledCribIcon;

export const FilledDeskIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 2v2h-4V8h4zm-4 6v-2h4v2h-4z"/>
  </svg>
);
FilledDeskIcon.displayName = 'FilledDeskIcon';
export const DeskFilledIcon = FilledDeskIcon;

export const FilledDoNotStepIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1.39 4.22l7.9 7.9c.18.2.18.5-.01.7a.485.485 0 0 1-.7 0L6.87 11.1c-.11.4-.26.78-.45 1.12l1.4 1.4c.2.2.2.51 0 .71a.485.485 0 0 1-.7 0l-1.27-1.27c-.24.29-.5.56-.77.8l1.28 1.28c.2.2.2.51 0 .71c-.1.1-.23.15-.36.15s-.26-.05-.35-.15l-1.38-1.38c-.69.46-1.39.79-1.97 1.02c-.78.31-1.3 1.04-1.3 1.88V20h9.5l3.33-3.33l5.94 5.94l1.41-1.41L2.81 2.81L1.39 4.22zm17.12 11.46l-1.41-1.41l4.48-4.48L23 11.2l-4.49 4.48zm2.37-6.6l-4.48 4.48l-7.1-7.09L13.8 2l7.08 7.08z"/>
  </svg>
);
FilledDoNotStepIcon.displayName = 'FilledDoNotStepIcon';
export const DoNotStepFilledIcon = FilledDoNotStepIcon;

export const FilledDoNotTouchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 10.17l-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm3.5 5.92l-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm11.69 16.94L2.81 2.81L1.39 4.22l5.63 5.63L7 9.83v4.3c-1.11-.64-2.58-1.47-2.6-1.48c-.17-.09-.34-.14-.54-.14c-.26 0-.5.09-.7.26c-.04.01-1.16 1.11-1.16 1.11l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.65-.52l-.02-.02l1.15 1.15l1.41-1.42z"/>
  </svg>
);
FilledDoNotTouchIcon.displayName = 'FilledDoNotTouchIcon';
export const DoNotTouchFilledIcon = FilledDoNotTouchIcon;

export const FilledDryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.65 4.86l-.07-.07c-.57-.62-.82-1.41-.67-2.2L15 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L19 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zM9.12 5l-7.18 6.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75a1.25 1.25 0 0 0 0-2.5H12v-1h6.75a1.25 1.25 0 0 0 0-2.5H8.86c.64-1.11 1.48-2.58 1.49-2.61a1.065 1.065 0 0 0-.12-1.23C10.22 6.12 9.12 5 9.12 5z"/>
  </svg>
);
FilledDryIcon.displayName = 'FilledDryIcon';
export const DryFilledIcon = FilledDryIcon;

export const FilledElevatorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm2.5 8h-1v4H7v-4H6v-2.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2V14zm4.5 3L13 13h5l-2.5 4zM13 11l2.5-4l2.5 4h-5z"/>
  </svg>
);
FilledElevatorIcon.displayName = 'FilledElevatorIcon';
export const ElevatorFilledIcon = FilledElevatorIcon;

export const FilledEscalatorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 6h-1.7l-5 9H7c-.83 0-1.5-.67-1.5-1.5S6.17 15 7 15h1.7l5-9H17c.83 0 1.5.67 1.5 1.5S17.83 9 17 9z"/>
  </svg>
);
FilledEscalatorIcon.displayName = 'FilledEscalatorIcon';
export const EscalatorFilledIcon = FilledEscalatorIcon;

export const FilledEscalatorWarningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5zm3 2.5h-2.84c-.58.01-1.14.32-1.45.86l-.92 1.32L9.72 8a2.02 2.02 0 0 0-1.71-1H5c-1.1 0-2 .9-2 2v6h1.5v7h5V11.61L12.03 16h2.2l.77-1.1V22h4v-5h1v-3.5c0-.82-.67-1.5-1.5-1.5z"/>
  </svg>
);
FilledEscalatorWarningIcon.displayName = 'FilledEscalatorWarningIcon';
export const EscalatorWarningFilledIcon = FilledEscalatorWarningIcon;

export const FilledFamilyRestroomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z"/>
  </svg>
);
FilledFamilyRestroomIcon.displayName = 'FilledFamilyRestroomIcon';
export const FamilyRestroomFilledIcon = FilledFamilyRestroomIcon;

export const FilledFenceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 12v-2h-2V7l-3-3l-2 2l-2-2l-2 2l-2-2l-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2h2zm-5-5.17l1 1V10h-2V7.83l.41-.41l.59-.59zm-4 0l.59.59l.41.41V10h-2V7.83l.41-.41l.59-.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1l.59.59l.41.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
  </svg>
);
FilledFenceIcon.displayName = 'FilledFenceIcon';
export const FenceFilledIcon = FilledFenceIcon;

export const FilledFireExtinguisherIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 19h10v1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-1zm0-1h10v-5H7v5zM17 3v6l-3.15-.66c-.01 0-.01.01-.02.02c1.55.62 2.72 1.98 3.07 3.64H7.1c.34-1.66 1.52-3.02 3.07-3.64c-.33-.26-.6-.58-.8-.95L5 6.5v-1l4.37-.91C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66L17 3zm-4 3c-.03-.59-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1z"/>
  </svg>
);
FilledFireExtinguisherIcon.displayName = 'FilledFireExtinguisherIcon';
export const FireExtinguisherFilledIcon = FilledFireExtinguisherIcon;

export const FilledFitnessCenterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29z"/>
  </svg>
);
FilledFitnessCenterIcon.displayName = 'FilledFitnessCenterIcon';
export const FitnessCenterFilledIcon = FilledFitnessCenterIcon;

export const FilledFoodBankIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3L4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"/>
  </svg>
);
FilledFoodBankIcon.displayName = 'FilledFoodBankIcon';
export const FoodBankFilledIcon = FilledFoodBankIcon;

export const FilledFoundationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12h3L12 3L2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"/>
  </svg>
);
FilledFoundationIcon.displayName = 'FilledFoundationIcon';
export const FoundationFilledIcon = FilledFoundationIcon;

export const FilledFreeBreakfastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
  </svg>
);
FilledFreeBreakfastIcon.displayName = 'FilledFreeBreakfastIcon';
export const FreeBreakfastFilledIcon = FilledFreeBreakfastIcon;

export const FilledGiteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2l2 2V17z"/>
  </svg>
);
FilledGiteIcon.displayName = 'FilledGiteIcon';
export const GiteFilledIcon = FilledGiteIcon;

export const FilledGolfCourseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="19.5" cy="19.5" r="1.5"/><path fill={color || 'currentColor'} d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73c0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"/>
  </svg>
);
FilledGolfCourseIcon.displayName = 'FilledGolfCourseIcon';
export const GolfCourseFilledIcon = FilledGolfCourseIcon;

export const FilledGrassIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 20H2v-2h5.75A8.032 8.032 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26c4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26c-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 0 1 .87 4.07h8v-2h-5.75A8.061 8.061 0 0 1 22 12.26zm-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61c.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29z"/>
  </svg>
);
FilledGrassIcon.displayName = 'FilledGrassIcon';
export const GrassFilledIcon = FilledGrassIcon;

export const FilledHolidayVillageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 20V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2zM8 4l-6 6v10h5v-5h2v5h5V10L8 4zm1 9H7v-2h2v2z"/>
  </svg>
);
FilledHolidayVillageIcon.displayName = 'FilledHolidayVillageIcon';
export const HolidayVillageFilledIcon = FilledHolidayVillageIcon;

export const FilledHotTubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="7" cy="6" r="2"/><path fill={color || 'currentColor'} d="M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5c-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z"/>
  </svg>
);
FilledHotTubIcon.displayName = 'FilledHotTubIcon';
export const HotTubFilledIcon = FilledHotTubIcon;

export const FilledHouseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
  </svg>
);
FilledHouseIcon.displayName = 'FilledHouseIcon';
export const HouseFilledIcon = FilledHouseIcon;

export const FilledHouseSidingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 12h3L12 3L2 12h3v8h2v-2h10v2h2v-8zM7.21 10h9.58l.21.19V12H7v-1.81l.21-.19zm7.36-2H9.43L12 5.69L14.57 8zM7 16v-2h10v2H7z"/>
  </svg>
);
FilledHouseSidingIcon.displayName = 'FilledHouseSidingIcon';
export const HouseSidingFilledIcon = FilledHouseSidingIcon;

export const FilledHouseboatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 16c-1.95 0-2.1 1-3.34 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1c1.19 0 1.42 1 3.33 1c1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1c1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1c-1.91 0-2.14 1-3.33 1c-1.24 0-1.39-1-3.34-1zm8.34-4.66l-1.37 1.37c-.19.18-.45.29-.71.29H17V9.65l1.32.97L19.5 9L12 3.5L4.5 9l1.18 1.61L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-1.37-1.37l-1.41 1.41l1.37 1.37c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l1.37-1.37l-1.4-1.41zM13 13h-2v-2h2v2z"/>
  </svg>
);
FilledHouseboatIcon.displayName = 'FilledHouseboatIcon';
export const HouseboatFilledIcon = FilledHouseboatIcon;

export const FilledIronIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 6c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v3h15v-2c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1h1V6h-1z"/>
  </svg>
);
FilledIronIcon.displayName = 'FilledIronIcon';
export const IronFilledIcon = FilledIronIcon;

export const FilledKitchenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 9V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v5h16zM8 5h2v3H8V5zm-4 6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9H4zm6 6H8v-5h2v5z"/>
  </svg>
);
FilledKitchenIcon.displayName = 'FilledKitchenIcon';
export const KitchenFilledIcon = FilledKitchenIcon;

export const FilledMeetingRoomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"/>
  </svg>
);
FilledMeetingRoomIcon.displayName = 'FilledMeetingRoomIcon';
export const MeetingRoomFilledIcon = FilledMeetingRoomIcon;

export const FilledMicrowaveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.8 10.61L5.37 9.19C5.73 8.79 6.59 8 7.75 8c.8 0 1.39.39 1.81.67c.31.21.51.33.69.33c.37 0 .8-.41.95-.61l1.42 1.42c-.36.4-1.22 1.19-2.37 1.19c-.79 0-1.37-.38-1.79-.66c-.33-.22-.52-.34-.71-.34c-.37 0-.8.41-.95.61zM7.75 15c.19 0 .38.12.71.34c.42.28 1 .66 1.79.66c1.16 0 2.01-.79 2.37-1.19l-1.42-1.42c-.15.2-.59.61-.95.61c-.18 0-.38-.12-.69-.33c-.42-.28-1.01-.67-1.81-.67c-1.16 0-2.02.79-2.38 1.19l1.42 1.42c.16-.2.59-.61.96-.61zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-8 0H4v12h10V6zm5 10c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1zm0-4c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1zm0-5h-2v2h2V7z"/>
  </svg>
);
FilledMicrowaveIcon.displayName = 'FilledMicrowaveIcon';
export const MicrowaveFilledIcon = FilledMicrowaveIcon;

export const FilledNightShelterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3L4 9v12h16V9l-8-6zm-2.25 9.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zM17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1 0 2 .9 2 2v4z"/>
  </svg>
);
FilledNightShelterIcon.displayName = 'FilledNightShelterIcon';
export const NightShelterFilledIcon = FilledNightShelterIcon;

export const FilledNoBackpackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.19 21.19L2.81 2.81L1.39 4.22l2.76 2.76C4.06 7.31 4 7.64 4 8v12c0 1.1.9 2 2 2h12c.34 0 .65-.09.93-.24l.85.85l1.41-1.42zM6 14v-2h3.17l2 2H6zm8.83-2L6.98 4.15c.01 0 .01-.01.02-.01V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86v9.17l-2-2V12h-3.17z"/>
  </svg>
);
FilledNoBackpackIcon.displayName = 'FilledNoBackpackIcon';
export const NoBackpackFilledIcon = FilledNoBackpackIcon;

export const FilledNoCellIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.83 6l-3.7-3.7C5.42 1.55 6.15 1 7 1l10 .01c1.1 0 2 .89 2 1.99v13.17l-2-2V6H8.83zm10.95 16.61l-.91-.91c-.29.75-1.02 1.3-1.87 1.3H7c-1.1 0-2-.9-2-2V7.83L1.39 4.22L2.8 2.81l18.38 18.38l-1.4 1.42zM15.17 18L7 9.83V18h8.17z"/>
  </svg>
);
FilledNoCellIcon.displayName = 'FilledNoCellIcon';
export const NoCellFilledIcon = FilledNoCellIcon;

export const FilledNoDrinksIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.83 3H21v2l-6.2 6.97L9.83 7h6.74l1.78-2H7.83l-2-2zm13.95 19.61L18 20.83V21H6v-2h5v-5l-1.37-1.54l-8.24-8.24L2.8 2.81L3 3l18.19 18.19l-1.41 1.42zM16.17 19L13 15.83V19h3.17z"/>
  </svg>
);
FilledNoDrinksIcon.displayName = 'FilledNoDrinksIcon';
export const NoDrinksFilledIcon = FilledNoDrinksIcon;

export const FilledNoFlashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.93 13.93L2.45 2.45L1.04 3.87l5.3 5.3l-.2.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l2.18 2.18l1.41-1.41L18 18l-4.07-4.07zM10 20c-2.21 0-4-1.79-4-4c0-1.95 1.4-3.57 3.25-3.92l1.57 1.57c-.26-.09-.53-.15-.82-.15a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 2.5-2.5c0-.29-.06-.56-.15-.82l1.57 1.57A3.993 3.993 0 0 1 10 20zm8-4.83L10.83 8h1.75l1.28 1.4h2.54c.88 0 1.6.72 1.6 1.6v4.17zm2.4-9.57H22L19 11V7h-1V2h4l-1.6 3.6z"/>
  </svg>
);
FilledNoFlashIcon.displayName = 'FilledNoFlashIcon';
export const NoFlashFilledIcon = FilledNoFlashIcon;

export const FilledNoFoodIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.35 8.52L11 5h5V1h2v4h5l-1.38 13.79L11.35 8.52zM1 21v1c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-1H1zm20.9.9L2.1 2.1L.69 3.51l5.7 5.7C3.28 9.87 1 11.99 1 15h11.17l2 2H1v2h15v-.17l4.49 4.49l1.41-1.42z"/>
  </svg>
);
FilledNoFoodIcon.displayName = 'FilledNoFoodIcon';
export const NoFoodFilledIcon = FilledNoFoodIcon;

export const FilledNoMeetingRoomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 11h-1v2h2v-1l9.73 9.73L20.46 23L14 16.54V21H3v-2h2V7.54l-4-4l1.27-1.27L11 11zm3 .49L5.51 3H14v1h5v12.49l-2-2V6h-3v5.49z"/>
  </svg>
);
FilledNoMeetingRoomIcon.displayName = 'FilledNoMeetingRoomIcon';
export const NoMeetingRoomFilledIcon = FilledNoMeetingRoomIcon;

export const FilledNoPhotographyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.94 8.12L7.48 4.66L9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-5.1-5.1c.08-.35.12-.7.12-1.06c0-2.76-2.24-5-5-5c-.36 0-.71.04-1.06.12zm9.55 15.19L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49l-2-2L2.1 2.1l19.8 19.8l-1.41 1.41zm-6-5.99l-1.5-1.5c-.32.1-.64.18-.99.18c-1.66 0-3-1.34-3-3c0-.35.08-.67.19-.98l-1.5-1.5A4.74 4.74 0 0 0 7 13c0 2.76 2.24 5 5 5c.91 0 1.76-.25 2.49-.68z"/>
  </svg>
);
FilledNoPhotographyIcon.displayName = 'FilledNoPhotographyIcon';
export const NoPhotographyFilledIcon = FilledNoPhotographyIcon;

export const FilledNoStrollerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zM18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11L17 14.17v-7.9c.58-.68.97-1.27 1.65-1.27c.77 0 1.35.66 1.35 1.48V7h2v-.52C22 4.56 20.52 3 18.65 3zm-7.98 7.67L2.81 2.81L1.39 4.22l7.97 7.97l-2.66 3.12c-.55.65-.09 1.65.76 1.65h6.66l1.17 1.17C14.54 18.42 14 19.14 14 20c0 1.1.9 2 2 2c.86 0 1.58-.54 1.87-1.3l1.91 1.91l1.41-1.41l-4.8-4.8l-5.72-5.73zm2.8-5.64c.27-.32.58-.72.98-1.09a9.347 9.347 0 0 0-7.81-.13l4.25 4.25l2.58-3.03z"/>
  </svg>
);
FilledNoStrollerIcon.displayName = 'FilledNoStrollerIcon';
export const NoStrollerFilledIcon = FilledNoStrollerIcon;

export const FilledOtherHousesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4L12 3zM8 15c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
FilledOtherHousesIcon.displayName = 'FilledOtherHousesIcon';
export const OtherHousesFilledIcon = FilledOtherHousesIcon;

export const FilledPoolIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 21c-1.11 0-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36c-.56 0-.78.13-1.15.36c-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36c-.56 0-.78.13-1.15.36c-.46.27-1.08.64-2.19.64c-1.11 0-1.73-.37-2.18-.64c-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36c.56 0 .78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64c1.11 0 1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36c-.56 0-.78.13-1.15.36c-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36c-.56 0-.78.13-1.15.36c-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36c.56 0 .78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64c1.11 0 1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1l-3.25 3.25c.31.12.56.27.77.39c.37.23.59.36 1.15.36z"/><circle cx="16.5" cy="5.5" r="2.5"/>
  </svg>
);
FilledPoolIcon.displayName = 'FilledPoolIcon';
export const PoolFilledIcon = FilledPoolIcon;

export const FilledRiceBowlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25zm-2 0h-4V5.08c2.39 1.39 4 3.97 4 6.92zm-6-7.74V12h-4V4.26c.64-.16 1.31-.26 2-.26s1.36.1 2 .26zM4 12c0-2.95 1.61-5.53 4-6.92V12H4z"/>
  </svg>
);
FilledRiceBowlIcon.displayName = 'FilledRiceBowlIcon';
export const RiceBowlFilledIcon = FilledRiceBowlIcon;

export const FilledRoofingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 18h-2v-2h2v2zm2-4H9v6h6v-6zm4-4.7V4h-3v2.6L12 3L2 12h3l7-6.31L19 12h3l-3-2.7z"/>
  </svg>
);
FilledRoofingIcon.displayName = 'FilledRoofingIcon';
export const RoofingFilledIcon = FilledRoofingIcon;

export const FilledRoomPreferencesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 11.26V6h3v4h2V4h-5V3H5v16H3v2h9.26A6.963 6.963 0 0 1 11 17c0-2.38 1.19-4.47 3-5.74zM10 11h2v2h-2v-2zm11.69 5.37l1.14-1l-1-1.73l-1.45.49c-.32-.27-.68-.48-1.08-.63L19 12h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49l-1 1.73l1.14 1c-.08.5-.08.76 0 1.26l-1.14 1l1 1.73l1.45-.49c.32.27.68.48 1.08.63L17 22h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49l1-1.73l-1.14-1c.08-.51.08-.77 0-1.27zM18 19c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
FilledRoomPreferencesIcon.displayName = 'FilledRoomPreferencesIcon';
export const RoomPreferencesFilledIcon = FilledRoomPreferencesIcon;

export const FilledRoomServiceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z"/>
  </svg>
);
FilledRoomServiceIcon.displayName = 'FilledRoomServiceIcon';
export const RoomServiceFilledIcon = FilledRoomServiceIcon;

export const FilledRvHookupIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3l3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z"/>
  </svg>
);
FilledRvHookupIcon.displayName = 'FilledRvHookupIcon';
export const RvHookupFilledIcon = FilledRvHookupIcon;

export const FilledSmokeFreeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 6l6.99 7H2v3h9.99l7 7l1.26-1.25l-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2a3.35 3.35 0 0 0 0 6.7zm2.5 7.23V13h-2.93z"/>
  </svg>
);
FilledSmokeFreeIcon.displayName = 'FilledSmokeFreeIcon';
export const SmokeFreeFilledIcon = FilledSmokeFreeIcon;

export const FilledSmokingRoomsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5a3.35 3.35 0 0 0 0 6.7h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z"/>
  </svg>
);
FilledSmokingRoomsIcon.displayName = 'FilledSmokingRoomsIcon';
export const SmokingRoomsFilledIcon = FilledSmokingRoomsIcon;

export const FilledSoapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.12 5l-7.18 6.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75a1.25 1.25 0 0 0 0-2.5H12v-1h6.75a1.25 1.25 0 0 0 0-2.5H8.86c.64-1.11 1.48-2.58 1.49-2.61a1.065 1.065 0 0 0-.12-1.23C10.22 6.12 9.12 5 9.12 5zM14 6.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75m0-1.5c-1.24 0-2.25 1.01-2.25 2.25S12.76 9.25 14 9.25S16.25 8.24 16.25 7S15.24 4.75 14 4.75zm5.75.75c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5m0-1.5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zM16.5 1c-.83 0-1.5.67-1.5 1.5S15.67 4 16.5 4S18 3.33 18 2.5S17.33 1 16.5 1z"/>
  </svg>
);
FilledSoapIcon.displayName = 'FilledSoapIcon';
export const SoapFilledIcon = FilledSoapIcon;

export const FilledSpaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.55 12zm10.43-1.61zm-3.49-.76c-.18-2.79-1.31-5.51-3.43-7.63a12.188 12.188 0 0 0-3.55 7.63c1.28.68 2.46 1.56 3.49 2.63c1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29c.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26c.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49c.63.23 1.29.4 1.97.51c.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z"/>
  </svg>
);
FilledSpaIcon.displayName = 'FilledSpaIcon';
export const SpaFilledIcon = FilledSpaIcon;

export const FilledSportsBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9h-1.56c.35-.59.56-1.27.56-2c0-2.21-1.79-4-4-4c-.34 0-.66.05-.98.13A4.707 4.707 0 0 0 10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM7 10.5c-1.1 0-2-.9-2-2c0-.85.55-1.6 1.37-1.88l.8-.27l.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5zM19 17h-2v-6h2v6z"/>
  </svg>
);
FilledSportsBarIcon.displayName = 'FilledSportsBarIcon';
export const SportsBarFilledIcon = FilledSportsBarIcon;

export const FilledStairsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 5h-2.42v3.33H13v3.33h-2.58V18H6v-2h2.42v-3.33H11V9.33h2.58V6H18v2z"/>
  </svg>
);
FilledStairsIcon.displayName = 'FilledStairsIcon';
export const StairsFilledIcon = FilledStairsIcon;

export const FilledStorefrontIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88c.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28c.64-.82.87-1.87.62-2.89zm-2.99-3.9l1.05 4.37c.1.42.01.84-.25 1.17c-.14.18-.44.47-.94.47c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07c-.22.26-.54.41-.95.41c-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52L9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31c-.34 0-.65-.15-.89-.41a1.42 1.42 0 0 1-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14c-.49 0-.8-.29-.93-.47c-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03c.87 0 1.66-.36 2.24-.95c.6.6 1.4.95 2.31.95c.87 0 1.65-.36 2.23-.93c.59.57 1.39.93 2.29.93c.84 0 1.64-.35 2.24-.95c.58.59 1.37.95 2.24.95c.08 0 .15-.02.23-.03V19H5z"/>
  </svg>
);
FilledStorefrontIcon.displayName = 'FilledStorefrontIcon';
export const StorefrontFilledIcon = FilledStorefrontIcon;

export const FilledStrollerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="16" cy="20" r="2"/><circle cx="6" cy="20" r="2"/><path fill={color || 'currentColor'} d="M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27c.77 0 1.35.66 1.35 1.48V7h2zm-7.7-2.9a8.962 8.962 0 0 0-9.58.62l4.89 4.89L14.3 4.1z"/>
  </svg>
);
FilledStrollerIcon.displayName = 'FilledStrollerIcon';
export const StrollerFilledIcon = FilledStrollerIcon;

export const FilledTapasIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zm-7.5 8.5A2.5 2.5 0 0 1 10 14H8v9H6v-9H4a2.5 2.5 0 0 1 0-5h2V8H4a2.5 2.5 0 0 1 0-5h2V1h2v2h2a2.5 2.5 0 0 1 0 5H8v1h2a2.5 2.5 0 0 1 2.5 2.5z"/>
  </svg>
);
FilledTapasIcon.displayName = 'FilledTapasIcon';
export const TapasFilledIcon = FilledTapasIcon;

export const FilledTtyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 4h2v2h-2V4zm-1 3h2v2h-2V7zm-2-3h2v2h-2V4zm7 5h-2V7h2v2zm1-3h-2V4h2v2zm2 3h-2V7h2v2zm1-3h-2V4h2v2zm-7.38 8.38L12.1 16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52c.24-.24.34-.58.28-.9L8.16 3.8c-.09-.46-.5-.8-.98-.8H3.03c-.56 0-1.03.47-1 1.03c.17 2.89 1.02 5.6 2.4 7.97c1.58 2.73 3.85 4.99 6.57 6.57c2.37 1.37 5.08 2.23 7.97 2.4c.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73a.99.99 0 0 0-.91.27zM14 10h2v2h-2v-2zm-3 0h2v2h-2v-2zm8 2h-2v-2h2v2zm3 0h-2v-2h2v2z"/>
  </svg>
);
FilledTtyIcon.displayName = 'FilledTtyIcon';
export const TtyFilledIcon = FilledTtyIcon;

export const FilledUmbrellaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.5 6.92L13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92L6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07l-3.5.85zM13.28 8.5l.76.58l.92-.23L13 14.8V8.29l.28.21zm-3.32.59l.76-.58l.28-.22v6.51L9.03 8.86l.93.23z"/>
  </svg>
);
FilledUmbrellaIcon.displayName = 'FilledUmbrellaIcon';
export const UmbrellaFilledIcon = FilledUmbrellaIcon;

export const FilledVapeFreeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 16.5h1c1.33 0 2.71-.18 4-.5v3c-1.29-.32-2.67-.5-4-.5H2v-2zM16.17 19H8v-3h5.17L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41l-3.6-3.6zm2.66-3H22v3h-.17l-3-3zM11 17.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5zm11-4.74V15h-1.5v-2.23c0-2.24-1.76-4.07-4-4.07V7.2c1.02 0 1.85-.83 1.85-1.85S17.52 3.5 16.5 3.5V2c1.85 0 3.35 1.5 3.35 3.35c0 .93-.38 1.77-1 2.38c1.87.89 3.15 2.81 3.15 5.03zM11.15 8.32V8.3c0-1.85 1.5-3.35 3.35-3.35v1.5c-1.02 0-1.85.73-1.85 1.75s.83 2 1.85 2h1.53c1.87 0 3.47 1.35 3.47 3.16V15H18v-1.3c0-1.31-.92-2.05-1.97-2.05h-1.55l-3.33-3.33z"/>
  </svg>
);
FilledVapeFreeIcon.displayName = 'FilledVapeFreeIcon';
export const VapeFreeFilledIcon = FilledVapeFreeIcon;

export const FilledVapingRoomsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 16.5h1c1.33 0 2.71-.18 4-.5v3c-1.29-.32-2.67-.5-4-.5H2v-2zm20-.5v3H8v-3h14zm-11 1.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5zm11-4.74V15h-1.5v-2.23c0-2.24-1.76-4.07-4-4.07V7.2c1.02 0 1.85-.83 1.85-1.85S17.52 3.5 16.5 3.5V2c1.85 0 3.35 1.5 3.35 3.35c0 .93-.38 1.77-1 2.38c1.87.89 3.15 2.81 3.15 5.03zm-2.5.6V15H18v-1.3c0-1.31-.92-2.05-1.97-2.05H14.5a3.35 3.35 0 0 1 0-6.7v1.5c-1.02 0-1.85.73-1.85 1.75s.83 2 1.85 2h1.53c1.87 0 3.47 1.35 3.47 3.16z"/>
  </svg>
);
FilledVapingRoomsIcon.displayName = 'FilledVapingRoomsIcon';
export const VapingRoomsFilledIcon = FilledVapingRoomsIcon;

export const FilledVillaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 21H3V8l13-5v7H7v11zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2z"/>
  </svg>
);
FilledVillaIcon.displayName = 'FilledVillaIcon';
export const VillaFilledIcon = FilledVillaIcon;

export const FilledWashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.5 8A2.5 2.5 0 0 0 21 5.5C21 3.83 18.5 1 18.5 1S16 3.83 16 5.5A2.5 2.5 0 0 0 18.5 8zm-5 1c.83 0 1.5-.67 1.5-1.5c0-.84-1.5-2.5-1.5-2.5S12 6.66 12 7.5c0 .83.67 1.5 1.5 1.5zM9.12 5l-7.18 6.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12v-1h7.75a1.25 1.25 0 0 0 0-2.5H12v-1h8.75a1.25 1.25 0 0 0 0-2.5H12v-1h6.75a1.25 1.25 0 0 0 0-2.5H8.86c.64-1.11 1.48-2.58 1.49-2.61a1.065 1.065 0 0 0-.12-1.23C10.22 6.12 9.12 5 9.12 5z"/>
  </svg>
);
FilledWashIcon.displayName = 'FilledWashIcon';
export const WashFilledIcon = FilledWashIcon;

export const FilledWaterDamageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3L2 12h3v8h14v-8h3L12 3zm0 13c-1.1 0-2-.9-2-2s2-4 2-4s2 2.9 2 4s-.9 2-2 2z"/>
  </svg>
);
FilledWaterDamageIcon.displayName = 'FilledWaterDamageIcon';
export const WaterDamageFilledIcon = FilledWaterDamageIcon;

export const FilledWheelchairPickupIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.5 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2zm5.5 6.95V9c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6h2v7h3.5v-.11c-1.24-1.26-2-2.99-2-4.89c0-2.58 1.41-4.84 3.5-6.05zM16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74c0 2.76 2.24 5 5 5s5-2.24 5-5h-2zm3.04-3H15V8h-2v8h5.46l2.47 3.71l1.66-1.11l-3.05-4.6z"/>
  </svg>
);
FilledWheelchairPickupIcon.displayName = 'FilledWheelchairPickupIcon';
export const WheelchairPickupFilledIcon = FilledWheelchairPickupIcon;

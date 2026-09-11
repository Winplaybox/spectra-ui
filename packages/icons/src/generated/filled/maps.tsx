import React from 'react';
import { IconProps } from '../../types';

export const FilledIcon360Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4l-4-4v2.73c-3.15-.56-5-1.9-5-2.73c0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58c0-2.76-4.48-5-10-5z"/>
  </svg>
);
FilledIcon360Icon.displayName = 'FilledIcon360Icon';
export const Icon360FilledIcon = FilledIcon360Icon;

export const FilledAddBusinessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zM2 4h15v2H2z"/><path fill={color || 'currentColor'} d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/>
  </svg>
);
FilledAddBusinessIcon.displayName = 'FilledAddBusinessIcon';
export const AddBusinessFilledIcon = FilledAddBusinessIcon;

export const FilledAddLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z"/>
  </svg>
);
FilledAddLocationIcon.displayName = 'FilledAddLocationIcon';
export const AddLocationFilledIcon = FilledAddLocationIcon;

export const FilledAddLocationAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 1v3h3v2h-3v3h-2V6h-3V4h3V1h2zm-8 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm2-9.75V7h3v3h2.92c.05.39.08.79.08 1.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.68 0 1.35.08 2 .25z"/>
  </svg>
);
FilledAddLocationAltIcon.displayName = 'FilledAddLocationAltIcon';
export const AddLocationAltFilledIcon = FilledAddLocationAltIcon;

export const FilledAddRoadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2zM18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z"/>
  </svg>
);
FilledAddRoadIcon.displayName = 'FilledAddRoadIcon';
export const AddRoadFilledIcon = FilledAddRoadIcon;

export const FilledAgricultureIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.5 12c.93 0 1.78.28 2.5.76V8c0-1.1-.9-2-2-2h-6.29l-1.06-1.06l1.41-1.41l-.71-.71l-3.53 3.53l.71.71l1.41-1.41L13 6.71V9c0 1.1-.9 2-2 2h-.54A5.98 5.98 0 0 1 12 15c0 .34-.04.67-.09 1h3.14c.25-2.25 2.14-4 4.45-4z"/><path fill={color || 'currentColor'} d="M19.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM4 9h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1s.45 1 1 1zm5.83 4.82l-.18-.47l.93-.35a4.92 4.92 0 0 0-2.31-2.43l-.4.89l-.46-.21l.4-.9C7.26 10.13 6.64 10 6 10c-.53 0-1.04.11-1.52.26l.34.91l-.47.18l-.35-.93a4.92 4.92 0 0 0-2.43 2.31l.89.4l-.21.46l-.9-.4C1.13 13.74 1 14.36 1 15c0 .53.11 1.04.26 1.52l.91-.34l.18.47l-.93.35a4.92 4.92 0 0 0 2.31 2.43l.4-.89l.46.21l-.4.9c.55.22 1.17.35 1.81.35c.53 0 1.04-.11 1.52-.26l-.34-.91l.47-.18l.35.93a4.92 4.92 0 0 0 2.43-2.31l-.89-.4l.21-.46l.9.4c.22-.55.35-1.17.35-1.81c0-.53-.11-1.04-.26-1.52l-.91.34zm-2.68 3.95c-1.53.63-3.29-.09-3.92-1.62c-.63-1.53.09-3.29 1.62-3.92c1.53-.63 3.29.09 3.92 1.62c.64 1.53-.09 3.29-1.62 3.92z"/>
  </svg>
);
FilledAgricultureIcon.displayName = 'FilledAgricultureIcon';
export const AgricultureFilledIcon = FilledAgricultureIcon;

export const FilledAirlineStopsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.21 9.21C15.93 10.78 13.45 13.3 13 17h2v2H9v-2h2c-.5-4.5-4.37-8-9-8V7c4.39 0 8.22 2.55 10 6.3c1.13-2.43 2.99-4.25 4.78-5.52L14 5h7v7l-2.79-2.79z"/>
  </svg>
);
FilledAirlineStopsIcon.displayName = 'FilledAirlineStopsIcon';
export const AirlineStopsFilledIcon = FilledAirlineStopsIcon;

export const FilledAirlinesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 4L2 20h17l3-16h-9zm1.5 10a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/>
  </svg>
);
FilledAirlinesIcon.displayName = 'FilledAirlinesIcon';
export const AirlinesFilledIcon = FilledAirlinesIcon;

export const FilledAltRouteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.78 11.16l-1.42 1.42a7.282 7.282 0 0 1-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zM11 6L7 2L3 6h3.02c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H11zm10 0l-4-4l-4 4h2.99c-.1 3.68-1.28 4.75-2.54 5.88c-.5.44-1.01.92-1.45 1.55c-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v5h2v-5c0-2.02.71-2.66 1.79-3.63c1.38-1.24 3.08-2.78 3.2-7.37H21z"/>
  </svg>
);
FilledAltRouteIcon.displayName = 'FilledAltRouteIcon';
export const AltRouteFilledIcon = FilledAltRouteIcon;

export const FilledAtmIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 9v1.5h2.25V15h1.5v-4.5H14V9zM6 9H3c-.55 0-1 .45-1 1v5h1.5v-1.5h2V15H7v-5c0-.55-.45-1-1-1zm-.5 3h-2v-1.5h2V12zM21 9h-4.5c-.55 0-1 .45-1 1v5H17v-4.5h1V14h1.5v-3.51h1V15H22v-5c0-.55-.45-1-1-1z"/>
  </svg>
);
FilledAtmIcon.displayName = 'FilledAtmIcon';
export const AtmFilledIcon = FilledAtmIcon;

export const FilledAttractionsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.43 18.75c.37-.46.94-.75 1.57-.75c.63 0 1.19.29 1.56.75c.39-.09.76-.21 1.12-.36l-1.42-3.18a3.522 3.522 0 0 1-2.56-.02l-1.43 3.19c.38.16.76.29 1.16.37zM5.15 10a7.06 7.06 0 0 0 .08 4c.63.05 1.22.4 1.56.99c.33.57.35 1.23.11 1.79c.27.27.56.53.87.76l1.52-3.39c-.47-.58-.75-1.32-.75-2.13c0-1.89 1.55-3.41 3.46-3.41s3.46 1.53 3.46 3.41c0 .82-.29 1.57-.78 2.16l1.5 3.35c.32-.24.62-.5.9-.79c-.22-.55-.2-1.2.12-1.75c.33-.57.9-.92 1.52-.99a7.025 7.025 0 0 0 .09-4.02c-.64-.04-1.26-.39-1.6-1c-.36-.62-.35-1.36-.03-1.95c-.91-.98-2.1-1.71-3.44-2.05C13.39 5.6 12.74 6 12 6s-1.39-.41-1.74-1.01a7.053 7.053 0 0 0-3.44 2.03c.33.6.35 1.35-.02 1.98c-.35.62-.99.97-1.65 1zm-1.3-.42c-.78-.6-1.02-1.7-.51-2.58c.51-.88 1.58-1.23 2.49-.85a8.53 8.53 0 0 1 4.18-2.42C10.15 2.75 10.99 2 12 2s1.85.75 1.98 1.73c1.63.39 3.07 1.24 4.18 2.42a1.99 1.99 0 0 1 2.49.85c.51.88.27 1.98-.51 2.58c.23.77.35 1.58.35 2.42s-.12 1.65-.35 2.42c.78.6 1.02 1.7.51 2.58c-.51.88-1.58 1.23-2.49.85c-.4.43-.85.81-1.34 1.15l1.34 3H16.3l-.97-2.17c-.43.18-.88.33-1.34.44c-.14.98-.98 1.73-1.99 1.73s-1.85-.75-1.98-1.73c-.48-.12-.94-.27-1.38-.46L7.66 22H5.78l1.36-3.03a8.72 8.72 0 0 1-1.3-1.12c-.92.38-1.99.03-2.5-.85s-.27-1.98.51-2.58c-.23-.77-.35-1.58-.35-2.42s.12-1.65.35-2.42z"/>
  </svg>
);
FilledAttractionsIcon.displayName = 'FilledAttractionsIcon';
export const AttractionsFilledIcon = FilledAttractionsIcon;

export const FilledBadgeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12zm3 6H6v-.75c0-1 2-1.5 3-1.5s3 .5 3 1.5V18zm1-9h-2V4h2v5zm5 7.5h-4V15h4v1.5zm0-3h-4V12h4v1.5z"/>
  </svg>
);
FilledBadgeIcon.displayName = 'FilledBadgeIcon';
export const BadgeFilledIcon = FilledBadgeIcon;

export const FilledBakeryDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.28 16.34L17.46 15s.32-.59.96-1.78a.944.944 0 0 1 1.6 0l.81 1.26c.19.3.21.68.06 1l-.22.47a.94.94 0 0 1-1.39.39zm-14.56 0a.946.946 0 0 1-1.39-.38l-.23-.47c-.15-.32-.13-.7.06-1l.81-1.26a.944.944 0 0 1 1.6 0c.65 1.18.97 1.77.97 1.77l-1.82 1.34zm10.64-6.97c.09-.68.73-1.06 1.27-.75l1.59.9c.46.26.63.91.36 1.41L16.5 15h-1.8l.66-5.63zm-6.73 0L9.3 15H7.5l-2.09-4.08c-.27-.5-.1-1.15.36-1.41l1.59-.9c.53-.3 1.18.08 1.27.76zM13.8 15h-3.6l-.74-6.88c-.07-.59.35-1.12.88-1.12h3.3c.53 0 .94.53.88 1.12L13.8 15z" fillRule="evenodd"/>
  </svg>
);
FilledBakeryDiningIcon.displayName = 'FilledBakeryDiningIcon';
export const BakeryDiningFilledIcon = FilledBakeryDiningIcon;

export const FilledBeenhereIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5l1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/>
  </svg>
);
FilledBeenhereIcon.displayName = 'FilledBeenhereIcon';
export const BeenhereFilledIcon = FilledBeenhereIcon;

export const FilledBikeScooterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 14h.74L8.82 5.56A2.009 2.009 0 0 0 6.87 4H3v2h3.87l1.42 6.25h-.01A6.008 6.008 0 0 0 4.09 17H0v2h6v-1c0-2.21 1.79-4 4-4zm9-6h-.82l-1.35-3.69A1.976 1.976 0 0 0 14.96 3H11v2h3.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 5.25-5C24 10.2 21.8 8 19 8zm0 8c-1.68 0-3-1.32-3-3c0-.93.41-1.73 1.05-2.28l.96 2.64l1.88-.68l-.97-2.67c.03 0 .06-.01.09-.01c1.68 0 3 1.32 3 3s-1.33 3-3.01 3z"/><path fill={color || 'currentColor'} d="M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
FilledBikeScooterIcon.displayName = 'FilledBikeScooterIcon';
export const BikeScooterFilledIcon = FilledBikeScooterIcon;

export const FilledBreakfastDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45c0-2.21-1.79-4-4-4zm-4 12h-4v-4h4v4z" fillRule="evenodd"/>
  </svg>
);
FilledBreakfastDiningIcon.displayName = 'FilledBreakfastDiningIcon';
export const BreakfastDiningFilledIcon = FilledBreakfastDiningIcon;

export const FilledBrunchDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 8h2V4h-2v4zm-2.49 14H2.49c-.27 0-.49-.22-.49-.5V20h14v1.5c0 .28-.22.5-.49.5zM18 15.89l-.4-.42a5.852 5.852 0 0 1-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4v-6.11zM7 16v-2h4v2h4.5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5H7z" fillRule="evenodd"/>
  </svg>
);
FilledBrunchDiningIcon.displayName = 'FilledBrunchDiningIcon';
export const BrunchDiningFilledIcon = FilledBrunchDiningIcon;

export const FilledBusAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 1a7 7 0 0 0-5.78 3.05l.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V22a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22v-3.08A7 7 0 0 0 16 1zM4.5 19a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zM3 13V8h6c0 1.96.81 3.73 2.11 5H3zm10.5 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm2.5-6a5 5 0 1 1 0-10a5 5 0 0 1 0 10zm-1-9h2v5h-2zm0 6h2v2h-2z"/>
  </svg>
);
FilledBusAlertIcon.displayName = 'FilledBusAlertIcon';
export const BusAlertFilledIcon = FilledBusAlertIcon;

export const FilledCarCrashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm.5 6h-1V3h1v4zm0 1v1h-1V8h1zm-.59 5c.06.16.09.33.09.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1.01A7.032 7.032 0 0 1 11.68 9H5.81l1.04-3H11c0-.69.1-1.37.29-2H6.5c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-6.68c-1.05.51-2.16.69-3.09.68zM7.5 15c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15z"/>
  </svg>
);
FilledCarCrashIcon.displayName = 'FilledCarCrashIcon';
export const CarCrashFilledIcon = FilledCarCrashIcon;

export const FilledCarRentalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.39 9H7.61c-.43 0-.81.28-.95.68l-1.66 5v6.81c0 .29.23.51.5.51h1c.28 0 .5-.22.5-.5V20h10v1.5c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-6.81l-1.66-5a1.01 1.01 0 0 0-.95-.69zm-8.61 9c-.68 0-1.22-.54-1.22-1.22s.54-1.22 1.22-1.22S9 16.11 9 16.78S8.46 18 7.78 18zm8.44 0c-.67 0-1.22-.54-1.22-1.22s.54-1.22 1.22-1.22s1.22.54 1.22 1.22S16.9 18 16.22 18zm-9.93-4l1.33-4h8.78l1.33 4H6.29zm4.54-11A3.01 3.01 0 0 0 8 1C6.34 1 5 2.34 5 4c0 1.65 1.34 3 3 3c1.3 0 2.41-.84 2.83-2H16v2h2V5h1V3h-8.17zM8 5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
FilledCarRentalIcon.displayName = 'FilledCarRentalIcon';
export const CarRentalFilledIcon = FilledCarRentalIcon;

export const FilledCarRepairIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.22 12c.68 0 1.22-.54 1.22-1.22c0-.67-.54-1.22-1.22-1.22S15 10.11 15 10.78c0 .68.55 1.22 1.22 1.22zm-9.66-1.22c0 .67.54 1.22 1.22 1.22S9 11.46 9 10.78c0-.67-.54-1.22-1.22-1.22s-1.22.55-1.22 1.22zM7.61 4L6.28 8h11.43l-1.33-4H7.61zm8.67-1s.54.01.92.54c.02.02.03.04.05.07c.07.11.14.24.19.4c.22.65 1.56 4.68 1.56 4.68v6.5c0 .45-.35.81-.78.81h-.44c-.43 0-.78-.36-.78-.81V14H7v1.19c0 .45-.35.81-.78.81h-.44c-.43 0-.78-.36-.78-.81v-6.5S6.34 4.67 6.55 4c.05-.16.12-.28.19-.4c.03-.02.04-.04.06-.06c.38-.53.92-.54.92-.54h8.56zM4 17.01h16V19h-7v3h-2v-3H4v-1.99z"/>
  </svg>
);
FilledCarRepairIcon.displayName = 'FilledCarRepairIcon';
export const CarRepairFilledIcon = FilledCarRepairIcon;

export const FilledCastleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9h-2zm-10 3H9V9h2v3zm4 0h-2V9h2v3z"/>
  </svg>
);
FilledCastleIcon.displayName = 'FilledCastleIcon';
export const CastleFilledIcon = FilledCastleIcon;

export const FilledCategoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2l-5.5 9h11z"/><circle cx="17.5" cy="17.5" r="4.5"/><path fill={color || 'currentColor'} d="M3 13.5h8v8H3z"/>
  </svg>
);
FilledCategoryIcon.displayName = 'FilledCategoryIcon';
export const CategoryFilledIcon = FilledCategoryIcon;

export const FilledCelebrationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 22l14-5l-9-9zm12.53-9.47l5.59-5.59a1.25 1.25 0 0 1 1.77 0l.59.59l1.06-1.06l-.59-.59a2.758 2.758 0 0 0-3.89 0l-5.59 5.59l1.06 1.06zm-4.47-5.65l-.59.59l1.06 1.06l.59-.59a2.758 2.758 0 0 0 0-3.89l-.59-.59l-1.06 1.07l.59.59c.48.48.48 1.28 0 1.76zm7 5l-1.59 1.59l1.06 1.06l1.59-1.59a1.25 1.25 0 0 1 1.77 0l1.61 1.61l1.06-1.06l-1.61-1.61a2.758 2.758 0 0 0-3.89 0zm-2-6l-3.59 3.59l1.06 1.06l3.59-3.59a2.758 2.758 0 0 0 0-3.89l-1.59-1.59l-1.06 1.06l1.59 1.59c.48.49.48 1.29 0 1.77z"/>
  </svg>
);
FilledCelebrationIcon.displayName = 'FilledCelebrationIcon';
export const CelebrationFilledIcon = FilledCelebrationIcon;

export const FilledChurchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h8v-3c0-1.1.9-2 2-2s2 .9 2 2v3h8v-8l-4-1.78zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
FilledChurchIcon.displayName = 'FilledChurchIcon';
export const ChurchFilledIcon = FilledChurchIcon;

export const FilledCleaningServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"/>
  </svg>
);
FilledCleaningServicesIcon.displayName = 'FilledCleaningServicesIcon';
export const CleaningServicesFilledIcon = FilledCleaningServicesIcon;

export const FilledCompassCalibrationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="17" r="4"/><path fill={color || 'currentColor'} d="M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 5-2.08z"/>
  </svg>
);
FilledCompassCalibrationIcon.displayName = 'FilledCompassCalibrationIcon';
export const CompassCalibrationFilledIcon = FilledCompassCalibrationIcon;

export const FilledConnectingAirportsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.4 17l1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2l.6 2h-1l-.75-1H15.4zM5.75 7L5 6H4l.6 2l-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7H5.75z"/>
  </svg>
);
FilledConnectingAirportsIcon.displayName = 'FilledConnectingAirportsIcon';
export const ConnectingAirportsFilledIcon = FilledConnectingAirportsIcon;

export const FilledCrisisAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5a2.5 2.5 0 0 1 5 0zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm4.08-4.89c.18-.75.33-1.47.39-2.06A9.996 9.996 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95c.07.59.21 1.32.39 2.06A8.028 8.028 0 0 0 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89zM18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86c.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79c0 0 .41-1.22.65-2.07A5.998 5.998 0 0 1 18 12z"/>
  </svg>
);
FilledCrisisAlertIcon.displayName = 'FilledCrisisAlertIcon';
export const CrisisAlertFilledIcon = FilledCrisisAlertIcon;

export const FilledDeliveryDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
FilledDeliveryDiningIcon.displayName = 'FilledDeliveryDiningIcon';
export const DeliveryDiningFilledIcon = FilledDeliveryDiningIcon;

export const FilledDepartureBoardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 1c-2.4 0-4.52 1.21-5.78 3.05c.01-.01.01-.02.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V22c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22v-3.08c3.39-.49 6-3.39 6-6.92c0-3.87-3.13-7-7-7zM4.5 19c-.83 0-1.5-.67-1.5-1.5S3.67 16 4.5 16s1.5.67 1.5 1.5S5.33 19 4.5 19zM3 13V8h6c0 1.96.81 3.73 2.11 5H3zm10.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm2.5-6c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm.5-9H15v5l3.62 2.16l.75-1.23l-2.87-1.68z"/>
  </svg>
);
FilledDepartureBoardIcon.displayName = 'FilledDepartureBoardIcon';
export const DepartureBoardFilledIcon = FilledDepartureBoardIcon;

export const FilledDesignServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.24 11.51l1.57-1.57l-3.75-3.75l-1.57 1.57l-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76l4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31L7.02 7.5l1.41 1.41l1.19-1.19l1.45 1.45l-1.89 1.9zm7.88 7.89l-4.13-4.13l1.9-1.9l1.45 1.45l-1.19 1.19l1.41 1.41l1.19-1.19l1.27 1.27l-1.9 1.9zm3.65-11.92a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/>
  </svg>
);
FilledDesignServicesIcon.displayName = 'FilledDesignServicesIcon';
export const DesignServicesFilledIcon = FilledDesignServicesIcon;

export const FilledDiamondIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.16 3h-.32L9.21 8.25h5.58zm4.3 5.25h5.16L19 3h-5.16zm4.92 1.5h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25L10.16 3H5L2.38 8.25z"/>
  </svg>
);
FilledDiamondIcon.displayName = 'FilledDiamondIcon';
export const DiamondFilledIcon = FilledDiamondIcon;

export const FilledDinnerDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 19h20l-2 2H4l-2-2zM5 6h1v1H5V6zm0-2h1v1H5V4zm4 0v1H7V4h2zm0 3H7V6h2v1zm-3 8.23c-.36.11-.69.28-1 .47V8h1v7.23zm-2 1.29c-.38.44-.68.93-.84 1.48h16.82c.01-.16.03-.33.03-.5a5.497 5.497 0 0 0-10.58-2.1c-.59-.25-1.24-.4-1.93-.4c-.17 0-.33.02-.5.04V8h2c1.03.06 1.9-.96 2-2h10V5H11c-.1-1.05-.97-1.97-2-2H3v1h1v1H3v1h1v1H3v1h1v8.52z"/>
  </svg>
);
FilledDinnerDiningIcon.displayName = 'FilledDinnerDiningIcon';
export const DinnerDiningFilledIcon = FilledDinnerDiningIcon;

export const FilledDirectionsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.41 10.59l-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"/>
  </svg>
);
FilledDirectionsIcon.displayName = 'FilledDirectionsIcon';
export const DirectionsFilledIcon = FilledDirectionsIcon;

export const FilledDirectionsBikeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4l.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4c0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5z"/>
  </svg>
);
FilledDirectionsBikeIcon.displayName = 'FilledDirectionsBikeIcon';
export const DirectionsBikeFilledIcon = FilledDirectionsBikeIcon;

export const FilledDirectionsBoatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 21c-1.39 0-2.78-.47-4-1.32c-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2c.98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42a1.007 1.007 0 0 0-.66 1.28L3.95 19zM6 6h12v3.97L12 8L6 9.97V6z"/>
  </svg>
);
FilledDirectionsBoatIcon.displayName = 'FilledDirectionsBoatIcon';
export const DirectionsBoatFilledIcon = FilledDirectionsBoatIcon;

export const FilledDirectionsBoatFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 21c-1.39 0-2.78-.47-4-1.32c-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2c.98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19zM6 6h12v3.97L12 8L6 9.97V6z"/>
  </svg>
);
FilledDirectionsBoatFilledIcon.displayName = 'FilledDirectionsBoatFilledIcon';
export const DirectionsBoatFilledFilledIcon = FilledDirectionsBoatFilledIcon;

export const FilledDirectionsBusIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
  </svg>
);
FilledDirectionsBusIcon.displayName = 'FilledDirectionsBusIcon';
export const DirectionsBusFilledIcon = FilledDirectionsBusIcon;

export const FilledDirectionsBusFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm2.5-6H6V7h12v3z"/>
  </svg>
);
FilledDirectionsBusFilledIcon.displayName = 'FilledDirectionsBusFilledIcon';
export const DirectionsBusFilledFilledIcon = FilledDirectionsBusFilledIcon;

export const FilledDirectionsCarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);
FilledDirectionsCarIcon.displayName = 'FilledDirectionsCarIcon';
export const DirectionsCarFilledIcon = FilledDirectionsCarIcon;

export const FilledDirectionsCarFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z"/>
  </svg>
);
FilledDirectionsCarFilledIcon.displayName = 'FilledDirectionsCarFilledIcon';
export const DirectionsCarFilledFilledIcon = FilledDirectionsCarFilledIcon;

export const FilledDirectionsRailwayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm6-7H6V5h12v5z"/>
  </svg>
);
FilledDirectionsRailwayIcon.displayName = 'FilledDirectionsRailwayIcon';
export const DirectionsRailwayFilledIcon = FilledDirectionsRailwayIcon;

export const FilledDirectionsRailwayFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 14c-.83 0-1.5-.67-1.5-1.5S11.17 13 12 13s1.5.67 1.5 1.5S12.83 16 12 16zm6-6H6V7h12v3z"/>
  </svg>
);
FilledDirectionsRailwayFilledIcon.displayName = 'FilledDirectionsRailwayFilledIcon';
export const DirectionsRailwayFilledFilledIcon = FilledDirectionsRailwayFilledIcon;

export const FilledDirectionsRunIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1c-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7l-1.6 8.1l-4.9-1l-.4 2l7 1.4z"/>
  </svg>
);
FilledDirectionsRunIcon.displayName = 'FilledDirectionsRunIcon';
export const DirectionsRunFilledIcon = FilledDirectionsRunIcon;

export const FilledDirectionsSubwayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/>
  </svg>
);
FilledDirectionsSubwayIcon.displayName = 'FilledDirectionsSubwayIcon';
export const DirectionsSubwayFilledIcon = FilledDirectionsSubwayIcon;

export const FilledDirectionsSubwayFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm2.5-6H6V7h5v3zm4.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm2.5-6h-5V7h5v3z"/>
  </svg>
);
FilledDirectionsSubwayFilledIcon.displayName = 'FilledDirectionsSubwayFilledIcon';
export const DirectionsSubwayFilledFilledIcon = FilledDirectionsSubwayFilledIcon;

export const FilledDirectionsTransitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/>
  </svg>
);
FilledDirectionsTransitIcon.displayName = 'FilledDirectionsTransitIcon';
export const DirectionsTransitFilledIcon = FilledDirectionsTransitIcon;

export const FilledDirectionsTransitFilledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h12v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm2.5-6H6V7h5v3zm4.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm2.5-6h-5V7h5v3z"/>
  </svg>
);
FilledDirectionsTransitFilledIcon.displayName = 'FilledDirectionsTransitFilledIcon';
export const DirectionsTransitFilledFilledIcon = FilledDirectionsTransitFilledIcon;

export const FilledDirectionsWalkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8l2.1 2v6h2v-7.5l-2.1-2l.6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
  </svg>
);
FilledDirectionsWalkIcon.displayName = 'FilledDirectionsWalkIcon';
export const DirectionsWalkFilledIcon = FilledDirectionsWalkIcon;

export const FilledDryCleaningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.56 11.36L13 8.44V7c0-.55-.45-1-1-1s-1-.45-1-1s.45-1 1-1s1 .45 1 1h2c0-1.84-1.66-3.3-3.56-2.95c-1.18.22-2.15 1.17-2.38 2.35c-.3 1.56.6 2.94 1.94 3.42v.63l-6.56 2.92c-.88.38-1.44 1.25-1.44 2.2v.01C3 14.92 4.08 16 5.42 16H7v6h10v-6h1.58c1.34 0 2.42-1.08 2.42-2.42v-.01c0-.95-.56-1.82-1.44-2.21zM18.58 14H17v-1H7v1H5.42c-.23 0-.42-.19-.42-.43c0-.17.1-.32.25-.38l6.75-3l6.75 3a.423.423 0 0 1-.17.81z"/>
  </svg>
);
FilledDryCleaningIcon.displayName = 'FilledDryCleaningIcon';
export const DryCleaningFilledIcon = FilledDryCleaningIcon;

export const FilledEditAttributesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zM7.24 14.46l-2.57-2.57l.7-.7l1.87 1.87l3.52-3.52l.7.7l-4.22 4.22z"/>
  </svg>
);
FilledEditAttributesIcon.displayName = 'FilledEditAttributesIcon';
export const EditAttributesFilledIcon = FilledEditAttributesIcon;

export const FilledEditLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34l1.43 1.43L10.44 12zm4.45-4.45l-.7.7l-1.44-1.44l.7-.7a.38.38 0 0 1 .54 0l.9.9c.15.15.15.39 0 .54z"/>
  </svg>
);
FilledEditLocationIcon.displayName = 'FilledEditLocationIcon';
export const EditLocationFilledIcon = FilledEditLocationIcon;

export const FilledEditLocationAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.95 13H9V8.05l5.61-5.61A8.17 8.17 0 0 0 12 2c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8c0-1.01-.16-1.94-.45-2.8l-5.6 5.6z"/><path fill={color || 'currentColor'} d="M11 11h2.12l6.16-6.16l-2.12-2.12L11 8.88zm9.71-9L20 1.29c-.2-.19-.45-.29-.71-.29c-.13 0-.48.07-.71.29l-.72.72l2.12 2.12l.72-.72c.4-.39.4-1.02.01-1.41z"/>
  </svg>
);
FilledEditLocationAltIcon.displayName = 'FilledEditLocationAltIcon';
export const EditLocationAltFilledIcon = FilledEditLocationAltIcon;

export const FilledEditRoadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4h-2v7.9l2-2zM4 4h2v16H4zm6 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm12.56-3.41l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L14 16.73V20h3.27l5.29-5.29c.59-.59.59-1.54 0-2.12zm-5.98 5.86h-1.03v-1.03L19 13.97L20.03 15l-3.45 3.45z"/>
  </svg>
);
FilledEditRoadIcon.displayName = 'FilledEditRoadIcon';
export const EditRoadFilledIcon = FilledEditRoadIcon;

export const FilledEggIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm1 15c-3 0-5-1.99-5-5c0-.55.45-1 1-1s1 .45 1 1c0 2.92 2.42 3 3 3c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
FilledEggIcon.displayName = 'FilledEggIcon';
export const EggFilledIcon = FilledEggIcon;

export const FilledEggAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52C2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02C22 12 21.01 11 19 9zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"/>
  </svg>
);
FilledEggAltIcon.displayName = 'FilledEggAltIcon';
export const EggAltFilledIcon = FilledEggAltIcon;

export const FilledElectricBikeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 7h-.82l-1.7-4.68A2.008 2.008 0 0 0 14.6 1H12v2h2.6l1.46 4h-4.81l-.36-1H12V4H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 6.87 0 9.2 0 12c0 2.8 2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 5.25-5C24 9.2 21.8 7 19 7zM7.82 13c-.4 1.17-1.49 2-2.82 2c-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2h2.82zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.9 4c-1.68 0-3-1.32-3-3c0-.93.41-1.73 1.05-2.28l.96 2.64l1.88-.68l-.97-2.67c.02 0 .05-.01.08-.01c1.68 0 3 1.32 3 3s-1.32 3-3 3zm-8 5H7l6 3v-2h4l-6-3z"/>
  </svg>
);
FilledElectricBikeIcon.displayName = 'FilledElectricBikeIcon';
export const ElectricBikeFilledIcon = FilledElectricBikeIcon;

export const FilledElectricCarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8l-2.08-5.99zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12zm11 0c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 7l1.5-4.5h11L19 7H5zm2 13h4v-2l6 3h-4v2z"/>
  </svg>
);
FilledElectricCarIcon.displayName = 'FilledElectricCarIcon';
export const ElectricCarFilledIcon = FilledElectricCarIcon;

export const FilledElectricMopedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 5c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 12H10V7H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 8.35V5zM7 15c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M5 4h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM7 20h4v-2l6 3h-4v2z"/>
  </svg>
);
FilledElectricMopedIcon.displayName = 'FilledElectricMopedIcon';
export const ElectricMopedFilledIcon = FilledElectricMopedIcon;

export const FilledElectricRickshawIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37a2.996 2.996 0 0 0 5.82-1c-.01-1.3-.85-2.4-2.01-2.82zM18.4 9H16V6.12L18.4 9zM3 5h4v4H3V5zm3 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm3-2v-2h3V9H9V5h5v8H9zm11 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM7 20h4v-2l6 3h-4v2z"/>
  </svg>
);
FilledElectricRickshawIcon.displayName = 'FilledElectricRickshawIcon';
export const ElectricRickshawFilledIcon = FilledElectricRickshawIcon;

export const FilledElectricScooterIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.009 2.009 0 0 0 15.89 1H12v2h3.89l1.4 6.25h-.01A6.008 6.008 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2zM5 16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"/>
  </svg>
);
FilledElectricScooterIcon.displayName = 'FilledElectricScooterIcon';
export const ElectricScooterFilledIcon = FilledElectricScooterIcon;

export const FilledElectricalServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-8-3h-2v4h2c0 1.1.9 2 2 2h3v-8h-3c-1.1 0-2 .9-2 2z"/><path fill={color || 'currentColor'} d="M5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2z"/>
  </svg>
);
FilledElectricalServicesIcon.displayName = 'FilledElectricalServicesIcon';
export const ElectricalServicesFilledIcon = FilledElectricalServicesIcon;

export const FilledEmergencyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.79 9.23l-2-3.46L14 8.54V3h-4v5.54L5.21 5.77l-2 3.46L8 12l-4.79 2.77l2 3.46L10 15.46V21h4v-5.54l4.79 2.77l2-3.46L16 12z"/>
  </svg>
);
FilledEmergencyIcon.displayName = 'FilledEmergencyIcon';
export const EmergencyFilledIcon = FilledEmergencyIcon;

export const FilledEmergencyRecordingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zM12 12l3 1.73l-1 1.73l-3-1.73V17H9v-3.27l-3 1.73l-1-1.73L8 12l-3-1.73l1-1.73l3 1.73V7h2v3.27l3-1.73l1 1.73L12 12z"/>
  </svg>
);
FilledEmergencyRecordingIcon.displayName = 'FilledEmergencyRecordingIcon';
export const EmergencyRecordingFilledIcon = FilledEmergencyRecordingIcon;

export const FilledEmergencyShareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 9c-3.15 0-6 2.41-6 6.15c0 2.49 2 5.44 6 8.85c4-3.41 6-6.36 6-8.85C18 11.41 15.15 9 12 9zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM12 4c1.93 0 3.68.78 4.95 2.05l-1.41 1.41a5.022 5.022 0 0 0-7.08 0L7.05 6.05A6.976 6.976 0 0 1 12 4zm7.78-.77l-1.41 1.41C16.74 3.01 14.49 2 12.01 2S7.27 3.01 5.64 4.63L4.22 3.22C6.22 1.23 8.97 0 12.01 0s5.78 1.23 7.77 3.23z"/>
  </svg>
);
FilledEmergencyShareIcon.displayName = 'FilledEmergencyShareIcon';
export const EmergencyShareFilledIcon = FilledEmergencyShareIcon;

export const FilledEvStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"/>
  </svg>
);
FilledEvStationIcon.displayName = 'FilledEvStationIcon';
export const EvStationFilledIcon = FilledEvStationIcon;

export const FilledFactoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 10v12H2V10l7-3v2l5-2v3h8zm-4.8-1.5L18 2h3l.8 6.5h-4.6zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z"/>
  </svg>
);
FilledFactoryIcon.displayName = 'FilledFactoryIcon';
export const FactoryFilledIcon = FilledFactoryIcon;

export const FilledFastfoodIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/>
  </svg>
);
FilledFastfoodIcon.displayName = 'FilledFastfoodIcon';
export const FastfoodFilledIcon = FilledFastfoodIcon;

export const FilledFestivalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 5.7V4h3l-1-1.49L16 1h-5v4.7L2 12v10h7v-5l3.03-2L15 17v5h7V12z"/>
  </svg>
);
FilledFestivalIcon.displayName = 'FilledFestivalIcon';
export const FestivalFilledIcon = FilledFestivalIcon;

export const FilledFireHydrantAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 11h-1V8h2V6h-2.35a5.99 5.99 0 0 0-11.3 0H4v2h2v3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3H4v2h16v-2h-2v-3h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"/><circle cx="12" cy="14" r="1.5"/>
  </svg>
);
FilledFireHydrantAltIcon.displayName = 'FilledFireHydrantAltIcon';
export const FireHydrantAltFilledIcon = FilledFireHydrantAltIcon;

export const FilledFireTruckIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22.9 10.69l-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-2c-1.1 0-2 .9-2 2v4H1v5c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h3v-6.68c0-.21-.03-.42-.1-.63zM7 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-3-8V7h5.56l1.33 4H14z"/><path fill={color || 'currentColor'} d="M11 8.5h-1v-2h1V5H1v1.5h1v2H1V10h10V8.5zm-5.75 0H3.5v-2h1.75v2zm3.25 0H6.75v-2H8.5v2z"/>
  </svg>
);
FilledFireTruckIcon.displayName = 'FilledFireTruckIcon';
export const FireTruckFilledIcon = FilledFireTruckIcon;

export const FilledFlightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1l3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
);
FilledFlightIcon.displayName = 'FilledFlightIcon';
export const FlightFilledIcon = FilledFlightIcon;

export const FilledFlightClassIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 16H18v2H9.49c-.88 0-1.66-.58-1.92-1.43L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z"/>
  </svg>
);
FilledFlightClassIcon.displayName = 'FilledFlightClassIcon';
export const FlightClassFilledIcon = FilledFlightClassIcon;

export const FilledForestIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 12L9 2L2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z"/><path fill={color || 'currentColor'} d="M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"/>
  </svg>
);
FilledForestIcon.displayName = 'FilledForestIcon';
export const ForestFilledIcon = FilledForestIcon;

export const FilledForkLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.41 15.59L8 17l-4-4l4-4l1.41 1.41L7.83 12c1.51-.33 3.73.08 5.17 1.36V6.83l-1.59 1.59L10 7l4-4l4 4l-1.41 1.41L15 6.83V21h-2v-4c-.73-2.58-3.07-3.47-5.17-3l1.58 1.59z"/>
  </svg>
);
FilledForkLeftIcon.displayName = 'FilledForkLeftIcon';
export const ForkLeftFilledIcon = FilledForkLeftIcon;

export const FilledForkRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.59 15.59L16 17l4-4l-4-4l-1.41 1.41L16.17 12c-1.51-.33-3.73.08-5.17 1.36V6.83l1.59 1.59L14 7l-4-4l-4 4l1.41 1.41L9 6.83V21h2v-4c.73-2.58 3.07-3.47 5.17-3l-1.58 1.59z"/>
  </svg>
);
FilledForkRightIcon.displayName = 'FilledForkRightIcon';
export const ForkRightFilledIcon = FilledForkRightIcon;

export const FilledFortIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9v-4l-2-2V9l2-2V3h-2z"/>
  </svg>
);
FilledFortIcon.displayName = 'FilledFortIcon';
export const FortFilledIcon = FilledFortIcon;

export const FilledHailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm5-4h2v.4c-.1 2.2-.8 3.9-2.3 5.1c-.5.4-1.1.7-1.7.9V22h-2v-6h-2v6H9V10.1c-.3.1-.5.2-.6.3c-.9.7-1.39 1.6-1.4 3.1v.5H5v-.5c0-2 .71-3.59 2.11-4.79C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06C16.48 5.14 17 4 17 2.5V2zM4 16h3v6H4v-6z"/>
  </svg>
);
FilledHailIcon.displayName = 'FilledHailIcon';
export const HailFilledIcon = FilledHailIcon;

export const FilledHandymanIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.67 18.17l-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41z"/><path fill={color || 'currentColor'} d="M17.34 10.19l1.41-1.41l2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54l-1.41 1.41V1.71l-.7-.71l-3.54 3.54l.71.71h2.83l-1.41 1.41l1.06 1.06l-2.89 2.89l-4.13-4.13V5.06L4.83 2.04L2 4.87L5.03 7.9h1.41l4.13 4.13l-.85.85H7.6l-5.3 5.3a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15l1.06 1.05z"/>
  </svg>
);
FilledHandymanIcon.displayName = 'FilledHandymanIcon';
export const HandymanFilledIcon = FilledHandymanIcon;

export const FilledHardwareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 3l-3 3V3H9C6.24 3 4 5.24 4 8h5v3h6V8l3 3h2V3h-2zM9 13v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7H9z"/>
  </svg>
);
FilledHardwareIcon.displayName = 'FilledHardwareIcon';
export const HardwareFilledIcon = FilledHardwareIcon;

export const FilledHomeRepairServiceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2zm-5 0H9V6h6v2z"/>
  </svg>
);
FilledHomeRepairServiceIcon.displayName = 'FilledHomeRepairServiceIcon';
export const HomeRepairServiceFilledIcon = FilledHomeRepairServiceIcon;

export const FilledHotelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3s1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
  </svg>
);
FilledHotelIcon.displayName = 'FilledHotelIcon';
export const HotelFilledIcon = FilledHotelIcon;

export const FilledHvacIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1zm-3.44-2h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5zM12 8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1zm-3.44 2c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5H8.56z"/><path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6z"/>
  </svg>
);
FilledHvacIcon.displayName = 'FilledHvacIcon';
export const HvacFilledIcon = FilledHvacIcon;

export const FilledIcecreamIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.79 12.4l3.26 6.22l3.17-6.21c-.11-.08-.21-.16-.3-.25c-.84.53-1.85.84-2.92.84s-2.08-.31-2.92-.84c-.09.09-.19.17-.29.24zm-1.96.59A2.995 2.995 0 0 1 4 10a3 3 0 0 1 2.52-2.96C6.75 4.22 9.12 2 12 2s5.25 2.22 5.48 5.04A3 3 0 0 1 20 10c0 1.59-1.24 2.9-2.81 2.99L12.07 23L6.83 12.99z" fillRule="evenodd"/>
  </svg>
);
FilledIcecreamIcon.displayName = 'FilledIcecreamIcon';
export const IcecreamFilledIcon = FilledIcecreamIcon;

export const FilledKebabDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.75 8H11v5H7.75v1h.75a2.5 2.5 0 0 1 0 5h-.75v4h-1.5v-4H5.5a2.5 2.5 0 0 1 0-5h.75v-1H3V8h3.25V7H5.5a2.5 2.5 0 0 1 0-5h.75V1h1.5v1h.75a2.5 2.5 0 0 1 0 5h-.75v1zm10-1h.75a2.5 2.5 0 0 0 0-5h-.75V1h-1.5v1h-.75a2.5 2.5 0 0 0 0 5h.75v1H13v5h3.25v1h-.75a2.5 2.5 0 0 0 0 5h.75v4h1.5v-4h.75a2.5 2.5 0 0 0 0-5h-.75v-1H21V8h-3.25V7z"/>
  </svg>
);
FilledKebabDiningIcon.displayName = 'FilledKebabDiningIcon';
export const KebabDiningFilledIcon = FilledKebabDiningIcon;

export const FilledLayersIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.99 18.54l-7.37-5.73L3 14.07l9 7l9-7l-1.63-1.27l-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7l-9 7l1.63 1.27L12 16z"/>
  </svg>
);
FilledLayersIcon.displayName = 'FilledLayersIcon';
export const LayersFilledIcon = FilledLayersIcon;

export const FilledLayersClearIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.81 14.99l1.19-.92l-1.43-1.43l-1.19.92l1.43 1.43zm-.45-4.72L21 9l-9-7l-2.91 2.27l7.87 7.88l2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63l1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7l4.95-3.85L20.73 21L22 19.73L3.27 1z"/>
  </svg>
);
FilledLayersClearIcon.displayName = 'FilledLayersClearIcon';
export const LayersClearFilledIcon = FilledLayersClearIcon;

export const FilledLiquorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zm15.63.54l-.95-.32a.991.991 0 0 1-.68-.94V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28c0 .43-.28.81-.68.95l-.95.32c-.82.27-1.37 1.03-1.37 1.89V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.37-1.9zM16 4h1v1h-1V4zm-3 6.44l.95-.32C15.18 9.72 16 8.57 16 7.28V7h1v.28a3 3 0 0 0 2.05 2.85l.95.31V12h-7v-1.56zM20 20h-7v-2h7v2z"/>
  </svg>
);
FilledLiquorIcon.displayName = 'FilledLiquorIcon';
export const LiquorFilledIcon = FilledLiquorIcon;

export const FilledLocalActivityIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3l1.08-4.12l-3.29-2.69l4.24-.25L12 5.8l1.54 3.95l4.24.25l-3.29 2.69l1.09 4.11z"/>
  </svg>
);
FilledLocalActivityIcon.displayName = 'FilledLocalActivityIcon';
export const LocalActivityFilledIcon = FilledLocalActivityIcon;

export const FilledLocalAirportIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-5.5L22 16z"/>
  </svg>
);
FilledLocalAirportIcon.displayName = 'FilledLocalAirportIcon';
export const LocalAirportFilledIcon = FilledLocalAirportIcon;

export const FilledLocalAtmIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"/>
  </svg>
);
FilledLocalAtmIcon.displayName = 'FilledLocalAtmIcon';
export const LocalAtmFilledIcon = FilledLocalAtmIcon;

export const FilledLocalBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/>
  </svg>
);
FilledLocalBarIcon.displayName = 'FilledLocalBarIcon';
export const LocalBarFilledIcon = FilledLocalBarIcon;

export const FilledLocalCafeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
  </svg>
);
FilledLocalCafeIcon.displayName = 'FilledLocalCafeIcon';
export const LocalCafeFilledIcon = FilledLocalCafeIcon;

export const FilledLocalCarWashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 5c.83 0 1.5-.67 1.5-1.5c0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5c0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z"/>
  </svg>
);
FilledLocalCarWashIcon.displayName = 'FilledLocalCarWashIcon';
export const LocalCarWashFilledIcon = FilledLocalCarWashIcon;

export const FilledLocalConvenienceStoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"/>
  </svg>
);
FilledLocalConvenienceStoreIcon.displayName = 'FilledLocalConvenienceStoreIcon';
export const LocalConvenienceStoreFilledIcon = FilledLocalConvenienceStoreIcon;

export const FilledLocalDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38c1.91-1.91 2.28-4.65.81-6.12c-1.46-1.46-4.2-1.1-6.12.81c-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88l1.41-1.41L13.41 13l1.47-1.47z"/>
  </svg>
);
FilledLocalDiningIcon.displayName = 'FilledLocalDiningIcon';
export const LocalDiningFilledIcon = FilledLocalDiningIcon;

export const FilledLocalDrinkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/>
  </svg>
);
FilledLocalDrinkIcon.displayName = 'FilledLocalDrinkIcon';
export const LocalDrinkFilledIcon = FilledLocalDrinkIcon;

export const FilledLocalFireDepartmentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 12.9l-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07L12 12.9z"/><path fill={color || 'currentColor'} d="M16 6l-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86c-.56-.79-.89-1.76-.89-2.8c0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5c0 1.02-.31 1.96-.85 2.75c1.89-1.15 3.29-3.06 3.71-5.3c.66-3.55-1.07-6.9-3.86-8.52z"/>
  </svg>
);
FilledLocalFireDepartmentIcon.displayName = 'FilledLocalFireDepartmentIcon';
export const LocalFireDepartmentFilledIcon = FilledLocalFireDepartmentIcon;

export const FilledLocalFloristIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 22a9 9 0 0 0 9-9a9 9 0 0 0-9 9zM5.6 10.25a2.5 2.5 0 0 0 3.92 2.06l-.02.19a2.5 2.5 0 0 0 5 0l-.02-.19c.4.28.89.44 1.42.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.02-.19a2.5 2.5 0 0 0-5 0l.02.19c-.4-.28-.89-.44-1.42-.44a2.5 2.5 0 0 0-2.5 2.5c0 1 .59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25zM12 5.5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5zM3 13a9 9 0 0 0 9 9a9 9 0 0 0-9-9z"/>
  </svg>
);
FilledLocalFloristIcon.displayName = 'FilledLocalFloristIcon';
export const LocalFloristFilledIcon = FilledLocalFloristIcon;

export const FilledLocalGasStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
FilledLocalGasStationIcon.displayName = 'FilledLocalGasStationIcon';
export const LocalGasStationFilledIcon = FilledLocalGasStationIcon;

export const FilledLocalGroceryStoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
FilledLocalGroceryStoreIcon.displayName = 'FilledLocalGroceryStoreIcon';
export const LocalGroceryStoreFilledIcon = FilledLocalGroceryStoreIcon;

export const FilledLocalHospitalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
  </svg>
);
FilledLocalHospitalIcon.displayName = 'FilledLocalHospitalIcon';
export const LocalHospitalFilledIcon = FilledLocalHospitalIcon;

export const FilledLocalHotelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3s1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
  </svg>
);
FilledLocalHotelIcon.displayName = 'FilledLocalHotelIcon';
export const LocalHotelFilledIcon = FilledLocalHotelIcon;

export const FilledLocalLaundryServiceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.17 16.83a4.008 4.008 0 0 0 5.66 0a4.008 4.008 0 0 0 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6z"/>
  </svg>
);
FilledLocalLaundryServiceIcon.displayName = 'FilledLocalLaundryServiceIcon';
export const LocalLaundryServiceFilledIcon = FilledLocalLaundryServiceIcon;

export const FilledLocalLibraryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55c2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3z"/>
  </svg>
);
FilledLocalLibraryIcon.displayName = 'FilledLocalLibraryIcon';
export const LocalLibraryFilledIcon = FilledLocalLibraryIcon;

export const FilledLocalMallIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/>
  </svg>
);
FilledLocalMallIcon.displayName = 'FilledLocalMallIcon';
export const LocalMallFilledIcon = FilledLocalMallIcon;

export const FilledLocalMoviesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
  </svg>
);
FilledLocalMoviesIcon.displayName = 'FilledLocalMoviesIcon';
export const LocalMoviesFilledIcon = FilledLocalMoviesIcon;

export const FilledLocalOfferIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58c.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7z"/>
  </svg>
);
FilledLocalOfferIcon.displayName = 'FilledLocalOfferIcon';
export const LocalOfferFilledIcon = FilledLocalOfferIcon;

export const FilledLocalParkingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
FilledLocalParkingIcon.displayName = 'FilledLocalParkingIcon';
export const LocalParkingFilledIcon = FilledLocalParkingIcon;

export const FilledLocalPharmacyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6l-2 6v2h18v-2l-2-6l2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"/>
  </svg>
);
FilledLocalPharmacyIcon.displayName = 'FilledLocalPharmacyIcon';
export const LocalPharmacyFilledIcon = FilledLocalPharmacyIcon;

export const FilledLocalPhoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);
FilledLocalPhoneIcon.displayName = 'FilledLocalPhoneIcon';
export const LocalPhoneFilledIcon = FilledLocalPhoneIcon;

export const FilledLocalPizzaIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
FilledLocalPizzaIcon.displayName = 'FilledLocalPizzaIcon';
export const LocalPizzaFilledIcon = FilledLocalPizzaIcon;

export const FilledLocalPlayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3l1.08-4.12l-3.29-2.69l4.24-.25L12 5.8l1.54 3.95l4.24.25l-3.29 2.69l1.09 4.11z"/>
  </svg>
);
FilledLocalPlayIcon.displayName = 'FilledLocalPlayIcon';
export const LocalPlayFilledIcon = FilledLocalPlayIcon;

export const FilledLocalPoliceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm2.5 11.59l.9 3.88l-3.4-2.05l-3.4 2.05l.9-3.87l-3-2.59l3.96-.34L12 6.02l1.54 3.64l3.96.34l-3 2.59z"/>
  </svg>
);
FilledLocalPoliceIcon.displayName = 'FilledLocalPoliceIcon';
export const LocalPoliceFilledIcon = FilledLocalPoliceIcon;

export const FilledLocalPostOfficeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
  </svg>
);
FilledLocalPostOfficeIcon.displayName = 'FilledLocalPostOfficeIcon';
export const LocalPostOfficeFilledIcon = FilledLocalPostOfficeIcon;

export const FilledLocalPrintshopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-1-9H6v4h12V3z"/>
  </svg>
);
FilledLocalPrintshopIcon.displayName = 'FilledLocalPrintshopIcon';
export const LocalPrintshopFilledIcon = FilledLocalPrintshopIcon;

export const FilledLocalSeeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="3.2"/><path fill={color || 'currentColor'} d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"/>
  </svg>
);
FilledLocalSeeIcon.displayName = 'FilledLocalSeeIcon';
export const LocalSeeFilledIcon = FilledLocalSeeIcon;

export const FilledLocalShippingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
FilledLocalShippingIcon.displayName = 'FilledLocalShippingIcon';
export const LocalShippingFilledIcon = FilledLocalShippingIcon;

export const FilledLocalTaxiIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
  </svg>
);
FilledLocalTaxiIcon.displayName = 'FilledLocalTaxiIcon';
export const LocalTaxiFilledIcon = FilledLocalTaxiIcon;

export const FilledLunchDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 10c.32-3.28-4.28-6-9.99-6S1.7 6.72 2.02 10H22zM5.35 13.5c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36c.55 0 .78.14 1.15.36c.45.27 1.07.63 2.17.64v-1.98s-.79-.16-1.16-.38c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36c-.55 0-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.21-.64c.37-.23.59-.36 1.14-.36zM2 16v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2H2z" fillRule="evenodd"/>
  </svg>
);
FilledLunchDiningIcon.displayName = 'FilledLunchDiningIcon';
export const LunchDiningFilledIcon = FilledLunchDiningIcon;

export const FilledMapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.5 3l-.16.03L15 5.1L9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1l5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
  </svg>
);
FilledMapIcon.displayName = 'FilledMapIcon';
export const MapFilledIcon = FilledMapIcon;

export const FilledMapsUgcIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97c5.52 0 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3h-2v-3H8v-2h3V8h2v3h3v2z" fillRule="evenodd"/>
  </svg>
);
FilledMapsUgcIcon.displayName = 'FilledMapsUgcIcon';
export const MapsUgcFilledIcon = FilledMapsUgcIcon;

export const FilledMedicalInformationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9-3h2v5h-2V4zm0 12H9v2H7v-2H5v-2h2v-2h2v2h2v2zm2-1.5V13h6v1.5h-6zm0 3V16h4v1.5h-4z"/>
  </svg>
);
FilledMedicalInformationIcon.displayName = 'FilledMedicalInformationIcon';
export const MedicalInformationFilledIcon = FilledMedicalInformationIcon;

export const FilledMedicalServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/>
  </svg>
);
FilledMedicalServicesIcon.displayName = 'FilledMedicalServicesIcon';
export const MedicalServicesFilledIcon = FilledMedicalServicesIcon;

export const FilledMenuBookIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 5c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5v11.5z"/><path fill={color || 'currentColor'} d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99c.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24c-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99c.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"/>
  </svg>
);
FilledMenuBookIcon.displayName = 'FilledMenuBookIcon';
export const MenuBookFilledIcon = FilledMenuBookIcon;

export const FilledMergeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.41 21L5 19.59l4.83-4.83c.75-.75 1.17-1.77 1.17-2.83v-5.1L9.41 8.41L8 7l4-4l4 4l-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83L19 19.59L17.59 21L12 15.41L6.41 21z"/>
  </svg>
);
FilledMergeIcon.displayName = 'FilledMergeIcon';
export const MergeFilledIcon = FilledMergeIcon;

export const FilledMinorCrashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 9.01C18.72 8.42 18.16 8 17.5 8h-11c-.66 0-1.21.42-1.42 1.01L3 15v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19S6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zM9.41 5L8 6.41l-3-3L6.41 2l3 3zM16 6.41L14.59 5l3-3L19 3.41l-3 3zM13 5h-2V0h2v5z"/>
  </svg>
);
FilledMinorCrashIcon.displayName = 'FilledMinorCrashIcon';
export const MinorCrashFilledIcon = FilledMinorCrashIcon;

export const FilledMiscellaneousServicesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 0 0-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm13.11 7.67l-.96-.74c.02-.14.04-.29.04-.44c0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 0 0-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 0 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 0 0 0 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 1 1 .001-2.701a1.35 1.35 0 0 1-.001 2.701z"/>
  </svg>
);
FilledMiscellaneousServicesIcon.displayName = 'FilledMiscellaneousServicesIcon';
export const MiscellaneousServicesFilledIcon = FilledMiscellaneousServicesIcon;

export const FilledModeOfTravelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4 0 7.64 2.92 7.97 7.5h3.53L19 14l-4.5-4.5h3.47C17.65 6.24 15.13 4 12 4c-3.35 0-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c.64-.59 1.23-1.16 1.77-1.71a2.5 2.5 0 0 1-.27-1.12a2.5 2.5 0 0 1 5 0a2.492 2.492 0 0 1-3.19 2.39z"/>
  </svg>
);
FilledModeOfTravelIcon.displayName = 'FilledModeOfTravelIcon';
export const ModeOfTravelFilledIcon = FilledModeOfTravelIcon;

export const FilledMoneyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"/><path fill={color || 'currentColor'} d="M2 4v16h20V4H2zm2 14V6h16v12H4z"/>
  </svg>
);
FilledMoneyIcon.displayName = 'FilledMoneyIcon';
export const MoneyFilledIcon = FilledMoneyIcon;

export const FilledMopedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
FilledMopedIcon.displayName = 'FilledMopedIcon';
export const MopedFilledIcon = FilledMopedIcon;

export const FilledMosqueIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 8h10c.29 0 .57.06.84.13c.09-.33.16-.67.16-1.04c0-1.31-.65-2.53-1.74-3.25L12 1L7.74 3.84A3.887 3.887 0 0 0 6 7.09c0 .37.07.71.16 1.04c.27-.07.55-.13.84-.13z"/><path fill={color || 'currentColor'} d="M24 7c0-1.1-2-3-2-3s-2 1.9-2 3c0 .74.4 1.38 1 1.72V13h-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3V8.72c.6-.34 1-.98 1-1.72c0-1.1-2-3-2-3S0 5.9 0 7c0 .74.4 1.38 1 1.72V21h9v-4c0-1.1.9-2 2-2s2 .9 2 2v4h9V8.72c.6-.34 1-.98 1-1.72z"/>
  </svg>
);
FilledMosqueIcon.displayName = 'FilledMosqueIcon';
export const MosqueFilledIcon = FilledMosqueIcon;

export const FilledMovingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.71 9.71L22 12V6h-6l2.29 2.29l-4.17 4.17a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2 16.59L3.41 18l5.29-5.29a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0l4.19-4.17z"/>
  </svg>
);
FilledMovingIcon.displayName = 'FilledMovingIcon';
export const MovingFilledIcon = FilledMovingIcon;

export const FilledMultipleStopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 4l4 4l-4 4V9h-4V7h4V4zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zM6 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm1 10h4v-2H7v-3l-4 4l4 4v-3zm7 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
FilledMultipleStopIcon.displayName = 'FilledMultipleStopIcon';
export const MultipleStopFilledIcon = FilledMultipleStopIcon;

export const FilledMuseumIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 11V9L12 2L2 9v2h2v9H2v2h20v-2h-2v-9h2zm-6 7h-2v-4l-2 3l-2-3v4H8v-7h2l2 3l2-3h2v7z"/>
  </svg>
);
FilledMuseumIcon.displayName = 'FilledMuseumIcon';
export const MuseumFilledIcon = FilledMuseumIcon;

export const FilledMyLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"/>
  </svg>
);
FilledMyLocationIcon.displayName = 'FilledMyLocationIcon';
export const MyLocationFilledIcon = FilledMyLocationIcon;

export const FilledNavigationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z"/>
  </svg>
);
FilledNavigationIcon.displayName = 'FilledNavigationIcon';
export const NavigationFilledIcon = FilledNavigationIcon;

export const FilledNearMeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
  </svg>
);
FilledNearMeIcon.displayName = 'FilledNearMeIcon';
export const NearMeFilledIcon = FilledNearMeIcon;

export const FilledNearMeDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 6.34L21 3l-3.34 9L12 6.34zm10.61 13.44L4.22 1.39L2.81 2.81l5.07 5.07L3 9.69v1.41l7.07 2.83L12.9 21h1.41l1.81-4.88l5.07 5.07l1.42-1.41z"/>
  </svg>
);
FilledNearMeDisabledIcon.displayName = 'FilledNearMeDisabledIcon';
export const NearMeDisabledFilledIcon = FilledNearMeDisabledIcon;

export const FilledNightlifeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1 5h14l-6 9v4h2v2H5v-2h2v-4L1 5zm9.1 4l1.4-2H4.49l1.4 2h4.21zM17 5h5v3h-3v9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3a3 3 0 0 1 1 .17V5z"/>
  </svg>
);
FilledNightlifeIcon.displayName = 'FilledNightlifeIcon';
export const NightlifeFilledIcon = FilledNightlifeIcon;

export const FilledNoCrashIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.92 9.01C18.72 8.42 18.16 8 17.5 8h-11c-.66 0-1.21.42-1.42 1.01L3 15v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19S6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zM12 6.36L9.17 3.54l1.41-1.41L12 3.54L15.54 0l1.41 1.41L12 6.36z"/>
  </svg>
);
FilledNoCrashIcon.displayName = 'FilledNoCrashIcon';
export const NoCrashFilledIcon = FilledNoCrashIcon;

export const FilledNoMealsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 14V6c0-1.76 2.24-4 5-4v16.17l-2-2V14h-3zm4.49 9.31L10.02 12.85c-.33.09-.66.15-1.02.15v9H7v-9c-2.21 0-4-1.79-4-4V5.83L.69 3.51L2.1 2.1l19.8 19.8l-1.41 1.41zM6.17 9L5 7.83V9h1.17zM9 2H7v2.17l2 2V2zm4 7V2h-2v6.17l1.85 1.85c.09-.33.15-.66.15-1.02z"/>
  </svg>
);
FilledNoMealsIcon.displayName = 'FilledNoMealsIcon';
export const NoMealsFilledIcon = FilledNoMealsIcon;

export const FilledNoTransferIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.19 21.19L2.81 2.81L1.39 4.22L4 6.83V16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.05 0 .09-.02.14-.03l1.64 1.64l1.41-1.42zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zM6 11V8.83L8.17 11H6zm2.83-5L5.78 2.95C7.24 2.16 9.48 2 12 2c4.42 0 8 .5 8 4v10c0 .35-.08.67-.19.98L13.83 11H18V6H8.83z"/>
  </svg>
);
FilledNoTransferIcon.displayName = 'FilledNoTransferIcon';
export const NoTransferFilledIcon = FilledNoTransferIcon;

export const FilledNotListedLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm.88 13.75h-1.75V14h1.75v1.75zm0-2.87h-1.75c0-2.84 2.62-2.62 2.62-4.38c0-.96-.79-1.75-1.75-1.75s-1.75.79-1.75 1.75H8.5C8.5 6.57 10.07 5 12 5s3.5 1.57 3.5 3.5c0 2.19-2.62 2.41-2.62 4.38z"/>
  </svg>
);
FilledNotListedLocationIcon.displayName = 'FilledNotListedLocationIcon';
export const NotListedLocationFilledIcon = FilledNotListedLocationIcon;

export const FilledParkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 12h2L12 2L5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z"/>
  </svg>
);
FilledParkIcon.displayName = 'FilledParkIcon';
export const ParkFilledIcon = FilledParkIcon;

export const FilledPedalBikeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.18 10l-1.7-4.68A2.008 2.008 0 0 0 14.6 4H12v2h2.6l1.46 4h-4.81l-.36-1H12V7H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15c0 2.8 2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 5.25-5c0-2.8-2.2-5-5-5h-.82zM7.82 16c-.4 1.17-1.49 2-2.82 2c-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2h2.82zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.9 4c-1.68 0-3-1.32-3-3c0-.93.41-1.73 1.05-2.28l.96 2.64l1.88-.68l-.97-2.67c.03 0 .06-.01.09-.01c1.68 0 3 1.32 3 3s-1.33 3-3.01 3z"/>
  </svg>
);
FilledPedalBikeIcon.displayName = 'FilledPedalBikeIcon';
export const PedalBikeFilledIcon = FilledPedalBikeIcon;

export const FilledPersonPinIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm0 14.3a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08c1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"/>
  </svg>
);
FilledPersonPinIcon.displayName = 'FilledPersonPinIcon';
export const PersonPinFilledIcon = FilledPersonPinIcon;

export const FilledPersonPinCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2a2 2 0 1 1 .001 4.001A2 2 0 0 1 12 4zm0 10c-1.67 0-3.14-.85-4-2.15c.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05A4.783 4.783 0 0 1 12 14z"/>
  </svg>
);
FilledPersonPinCircleIcon.displayName = 'FilledPersonPinCircleIcon';
export const PersonPinCircleFilledIcon = FilledPersonPinCircleIcon;

export const FilledPestControlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 15v-2h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49l-1-1.73L16.92 10c-.28-.48-.62-.91-.99-1.29c.04-.23.07-.46.07-.71c0-.8-.24-1.55-.65-2.18L17 4.17l-1.41-1.41l-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.76L7 4.17l1.65 1.65A3.99 3.99 0 0 0 8 8c0 .25.03.48.07.72c-.37.38-.71.81-.99 1.28L4.71 8.63l-1 1.73l2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49l1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37l1-1.73l-2.58-1.49c.1-.37.17-.75.22-1.14H21zm-8 2h-2v-6h2v6z"/>
  </svg>
);
FilledPestControlIcon.displayName = 'FilledPestControlIcon';
export const PestControlFilledIcon = FilledPestControlIcon;

export const FilledPestControlRodentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.31 17.38l-2.39-2.13c.52-2.36-1.36-4.25-3.42-4.25c-1.16 0-3.5.9-3.5 3.5c0 .97.39 1.84 1.03 2.47l-.71.71A4.457 4.457 0 0 1 11 14.5c0-1.7.96-3.17 2.35-3.93a5 5 0 0 0-2.28-.57c-2.38 0-4.37 1.65-4.91 3.87A2.997 2.997 0 0 1 4 11c0-1.66 1.34-3 3-3h2.5a2.5 2.5 0 0 0 0-5H8c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7a5.002 5.002 0 0 0-1 9.9v.03C6 18.73 8.27 21 11.07 21h8.86c1.87 0 2.81-2.34 1.38-3.62zM18 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
FilledPestControlRodentIcon.displayName = 'FilledPestControlRodentIcon';
export const PestControlRodentFilledIcon = FilledPestControlRodentIcon;

export const FilledPinDropIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2a2 2 0 1 1-4 0zM5 20v2h14v-2H5z"/>
  </svg>
);
FilledPinDropIcon.displayName = 'FilledPinDropIcon';
export const PinDropFilledIcon = FilledPinDropIcon;

export const FilledPlaceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/>
  </svg>
);
FilledPlaceIcon.displayName = 'FilledPlaceIcon';
export const PlaceFilledIcon = FilledPlaceIcon;

export const FilledPlumbingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.28 4.93l-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12l2.12-2.12l3.54 3.54a3.012 3.012 0 0 0 0-4.25zM5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47l-2.12-2.13l-2.47 2.47c-.59.59-.59 1.54 0 2.13z"/><path fill={color || 'currentColor'} d="M15.04 7.76l-.71.71l-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01a1.49 1.49 0 0 0 0 2.12l3.18 3.18l-.71.71l-6.36 6.36c-.78.78-.78 2.05 0 2.83c.78.78 2.05.78 2.83 0L16.45 12a.996.996 0 1 0 1.41-1.41l-2.82-2.83z"/>
  </svg>
);
FilledPlumbingIcon.displayName = 'FilledPlumbingIcon';
export const PlumbingFilledIcon = FilledPlumbingIcon;

export const FilledRailwayAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 8a7 7 0 0 0-11.95-4.95A33.8 33.8 0 0 0 9 3c-4.42 0-8 .5-8 4v10.5A3.5 3.5 0 0 0 4.5 21L3 22.5v.5h12v-.5L13.5 21a3.5 3.5 0 0 0 3.5-3.5v-2.58A7 7 0 0 0 23 8zM3 12V7h6.08a6.96 6.96 0 0 0 1.18 5H3zm6 7c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm7.71-6.06l-.2.03L16 13l-.47-.02l-.16-.02l-.29-.04l-.2-.04l-.22-.06a1.55 1.55 0 0 1-.23-.07l-.13-.05A4.99 4.99 0 0 1 11.1 7c.04-.19.09-.37.15-.54l.05-.14l.15-.38l.07-.15l.2-.36l.07-.12l.3-.42l.02-.02c.24-.3.52-.57.82-.81l.01-.01l.46-.32l.03-.02A5.25 5.25 0 0 1 16 3a5 5 0 0 1 .71 9.94zM15 4h2v5h-2zm0 6h2v2h-2z"/>
  </svg>
);
FilledRailwayAlertIcon.displayName = 'FilledRailwayAlertIcon';
export const RailwayAlertFilledIcon = FilledRailwayAlertIcon;

export const FilledRamenDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 6H8V4.65l1-.12V6zm0 6H8V7h1v5zM6 7h1v5H6V7zm0-2.12l1-.12V6H6V4.88zM22 3V2L5 4v8H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10V7h12V6H10V4.41L22 3z"/>
  </svg>
);
FilledRamenDiningIcon.displayName = 'FilledRamenDiningIcon';
export const RamenDiningFilledIcon = FilledRamenDiningIcon;

export const FilledRampLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 21h-2V6.83L9.41 8.41L8 7l4-4l4 4l-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z"/>
  </svg>
);
FilledRampLeftIcon.displayName = 'FilledRampLeftIcon';
export const RampLeftFilledIcon = FilledRampLeftIcon;

export const FilledRampRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 21h2V6.83l1.59 1.59L16 7l-4-4l-4 4l1.41 1.41L11 6.83V9c0 4.27-4.03 7.13-6 8.27l1.46 1.46C8.37 17.56 9.9 16.19 11 14.7V21z"/>
  </svg>
);
FilledRampRightIcon.displayName = 'FilledRampRightIcon';
export const RampRightFilledIcon = FilledRampRightIcon;

export const FilledRateReviewIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"/>
  </svg>
);
FilledRateReviewIcon.displayName = 'FilledRateReviewIcon';
export const RateReviewFilledIcon = FilledRateReviewIcon;

export const FilledRemoveRoadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm11.5.41L21.09 15L19 17.09L16.91 15l-1.41 1.41l2.09 2.09l-2.09 2.09L16.91 22L19 19.91L21.09 22l1.41-1.41l-2.09-2.09z"/>
  </svg>
);
FilledRemoveRoadIcon.displayName = 'FilledRemoveRoadIcon';
export const RemoveRoadFilledIcon = FilledRemoveRoadIcon;

export const FilledRestaurantIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
  </svg>
);
FilledRestaurantIcon.displayName = 'FilledRestaurantIcon';
export const RestaurantFilledIcon = FilledRestaurantIcon;

export const FilledRestaurantMenuIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38c1.91-1.91 2.28-4.65.81-6.12c-1.46-1.46-4.2-1.1-6.12.81c-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88l1.41-1.41L13.41 13l1.47-1.47z"/>
  </svg>
);
FilledRestaurantMenuIcon.displayName = 'FilledRestaurantMenuIcon';
export const RestaurantMenuFilledIcon = FilledRestaurantMenuIcon;

export const FilledRoundaboutLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.08 8A6 6 0 0 1 16 3c3.31 0 6 2.69 6 6c0 2.97-2.16 5.44-5 5.92V21h-2v-6.09c0-.98.71-1.8 1.67-1.97a3.999 3.999 0 1 0-4.61-4.61c-.17.96-.99 1.67-1.97 1.67H5.83l1.59 1.59L6 13L2 9l4-4l1.41 1.41L5.83 8h4.25z"/>
  </svg>
);
FilledRoundaboutLeftIcon.displayName = 'FilledRoundaboutLeftIcon';
export const RoundaboutLeftFilledIcon = FilledRoundaboutLeftIcon;

export const FilledRoundaboutRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.92 8C13.44 5.16 10.97 3 8 3C4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-6.09c0-.98-.71-1.8-1.67-1.97a3.999 3.999 0 1 1 4.61-4.61c.17.96.99 1.67 1.97 1.67h4.26l-1.59 1.59L18 13l4-4l-4-4l-1.41 1.41L18.17 8h-4.25z"/>
  </svg>
);
FilledRoundaboutRightIcon.displayName = 'FilledRoundaboutRightIcon';
export const RoundaboutRightFilledIcon = FilledRoundaboutRightIcon;

export const FilledRouteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 15.18V7c0-2.21-1.79-4-4-4s-4 1.79-4 4v10c0 1.1-.9 2-2 2s-2-.9-2-2V8.82C8.16 8.4 9 7.3 9 6c0-1.66-1.34-3-3-3S3 4.34 3 6c0 1.3.84 2.4 2 2.82V17c0 2.21 1.79 4 4 4s4-1.79 4-4V7c0-1.1.9-2 2-2s2 .9 2 2v8.18A2.996 2.996 0 0 0 18 21c1.66 0 3-1.34 3-3c0-1.3-.84-2.4-2-2.82z"/>
  </svg>
);
FilledRouteIcon.displayName = 'FilledRouteIcon';
export const RouteFilledIcon = FilledRouteIcon;

export const FilledRunCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1.5 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm2.5 6c-.7 0-2.01-.54-2.91-1.76l-.41 2.35L14 14.03V18h-1v-3.58l-1.11-1.21l-.52 2.64l-3.77-.77l.2-.98l2.78.57l.96-4.89l-1.54.57V12H9V9.65l3.28-1.21c.49-.18 1.03.06 1.26.53c.83 1.7 2.05 2.03 2.46 2.03v1z"/>
  </svg>
);
FilledRunCircleIcon.displayName = 'FilledRunCircleIcon';
export const RunCircleFilledIcon = FilledRunCircleIcon;

export const FilledSafetyCheckIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85l-.7.71z"/>
  </svg>
);
FilledSafetyCheckIcon.displayName = 'FilledSafetyCheckIcon';
export const SafetyCheckFilledIcon = FilledSafetyCheckIcon;

export const FilledSailingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 13.5V2L3 13.5h8zm10 0C21 6.5 14.5 1 12.5 1c0 0 1 3 1 6.5s-1 6-1 6H21zm1 1.5H2a6.233 6.233 0 0 0 2.33 3.73c.65-.27 1.22-.72 1.67-1.23c.73.84 1.8 1.5 3 1.5s2.27-.66 3-1.5c.73.84 1.8 1.5 3 1.5s2.26-.66 3-1.5c.45.51 1.02.96 1.67 1.23c1.17-.89 2.02-2.2 2.33-3.73zm0 8v-2h-1c-1.04 0-2.08-.35-3-1c-1.83 1.3-4.17 1.3-6 0c-1.83 1.3-4.17 1.3-6 0c-.91.65-1.96 1-3 1H2v2h1c1.03 0 2.05-.25 3-.75c1.89 1 4.11 1 6 0c1.89 1 4.11 1 6 0c.95.5 1.97.75 3 .75h1z"/>
  </svg>
);
FilledSailingIcon.displayName = 'FilledSailingIcon';
export const SailingFilledIcon = FilledSailingIcon;

export const FilledSatelliteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5l2.5 3.01L14.5 12l4.5 6H5z"/>
  </svg>
);
FilledSatelliteIcon.displayName = 'FilledSatelliteIcon';
export const SatelliteFilledIcon = FilledSatelliteIcon;

export const FilledScreenRotationAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 7.59l5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4L5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5l-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5V19z"/>
  </svg>
);
FilledScreenRotationAltIcon.displayName = 'FilledScreenRotationAltIcon';
export const ScreenRotationAltFilledIcon = FilledScreenRotationAltIcon;

export const FilledSetMealIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.05 17.56l-17.97.94L3 17l17.98-.94l.07 1.5zM21 19.48H3v1.5h18v-1.5zM22 5v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-2 1c-1.68 0-3.04.98-3.21 2.23c-.64-.73-2.73-2.73-6.54-2.73c-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11V6z"/>
  </svg>
);
FilledSetMealIcon.displayName = 'FilledSetMealIcon';
export const SetMealFilledIcon = FilledSetMealIcon;

export const FilledShareArrivalTimeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm10.5 8c0 .69-.28 1.32-.73 1.77l1.41 1.41c.82-.81 1.32-1.94 1.32-3.18s-.5-2.37-1.32-3.18l-1.41 1.41c.45.45.73 1.08.73 1.77zm3.5 0c0 1.66-.67 3.16-1.76 4.24l1.41 1.41C23.1 16.21 24 14.21 24 12s-.9-4.21-2.35-5.65l-1.41 1.41A5.944 5.944 0 0 1 22 12zm-10.19 2.42l-1.39 1.39L7 12.39V8h2v3.61l2.81 2.81z"/>
  </svg>
);
FilledShareArrivalTimeIcon.displayName = 'FilledShareArrivalTimeIcon';
export const ShareArrivalTimeFilledIcon = FilledShareArrivalTimeIcon;

export const FilledSignpostIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13 10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3 3l3 3h5v4h2v-4h7v-6h-7z"/>
  </svg>
);
FilledSignpostIcon.displayName = 'FilledSignpostIcon';
export const SignpostFilledIcon = FilledSignpostIcon;

export const FilledSnowmobileIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l1.45 1.3L11 11l-9.5-1L0 13l4.54 1.36l-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2z"/>
  </svg>
);
FilledSnowmobileIcon.displayName = 'FilledSnowmobileIcon';
export const SnowmobileFilledIcon = FilledSnowmobileIcon;

export const FilledSosIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.5 7h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8h-3V9h3v6zM1 15h4v-2H3c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2H3v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H1v-2zm16 0h4v-2h-2c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2h-4v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4v-2z"/>
  </svg>
);
FilledSosIcon.displayName = 'FilledSosIcon';
export const SosFilledIcon = FilledSosIcon;

export const FilledSoupKitchenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.4 7c-.34.55-.4.97-.4 1.38C6 9.15 7 11 7 12c0 .95-.4 1.5-.4 1.5H5.1s.4-.55.4-1.5c0-1-1-2.85-1-3.62c0-.41.06-.83.4-1.38h1.5zm5 0c-.34.55-.4.97-.4 1.38c0 .77 1 2.62 1 3.62c0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62c0-.41.06-.83.4-1.38h-1.5zM8.15 7c-.34.55-.4.97-.4 1.38c0 .77 1 2.63 1 3.62c0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62c0-.41.06-.83.4-1.38h-1.5zm13.32-.5s.13-1.06.13-1.5c0-1.65-1.35-3-3-3c-1.54 0-2.81 1.16-2.98 2.65L14.53 15H4.01c-.6 0-1.09.53-1 1.13C3.53 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9c.55 0 1 .45 1 1c0 .3-.1 1.25-.1 1.25l1.97.25z"/>
  </svg>
);
FilledSoupKitchenIcon.displayName = 'FilledSoupKitchenIcon';
export const SoupKitchenFilledIcon = FilledSoupKitchenIcon;

export const FilledStadiumIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 5L3 7V3l4 2zm11-2v4l4-2l-4-2zm-7-1v4l4-2l-4-2zm-6 8.04c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zM15 17H9v4.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87V17z"/>
  </svg>
);
FilledStadiumIcon.displayName = 'FilledStadiumIcon';
export const StadiumFilledIcon = FilledStadiumIcon;

export const FilledStoreMallDirectoryIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
  </svg>
);
FilledStoreMallDirectoryIcon.displayName = 'FilledStoreMallDirectoryIcon';
export const StoreMallDirectoryFilledIcon = FilledStoreMallDirectoryIcon;

export const FilledStraightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 6.83L9.41 8.41L8 7l4-4l4 4l-1.41 1.41L13 6.83V21h-2z"/>
  </svg>
);
FilledStraightIcon.displayName = 'FilledStraightIcon';
export const StraightFilledIcon = FilledStraightIcon;

export const FilledStreetviewIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52c-2.03 0-3.93.7-5.44 1.83z"/><circle cx="18" cy="6" r="5"/><path fill={color || 'currentColor'} d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82A6.435 6.435 0 0 1 11.5 6z"/>
  </svg>
);
FilledStreetviewIcon.displayName = 'FilledStreetviewIcon';
export const StreetviewFilledIcon = FilledStreetviewIcon;

export const FilledSubwayIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="15.5" cy="16" r="1"/><circle cx="8.5" cy="16" r="1"/><path fill={color || 'currentColor'} d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3c3.32 0 6 .38 6 3v6.88z"/>
  </svg>
);
FilledSubwayIcon.displayName = 'FilledSubwayIcon';
export const SubwayFilledIcon = FilledSubwayIcon;

export const FilledSynagogueIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 8v13h4v-5c0-1.1.9-2 2-2s2 .9 2 2v5h4V8l-6-5l-6 5zm7.5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5zM3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zM1 9h4v12H1zm20-4c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm-2 4h4v12h-4z"/>
  </svg>
);
FilledSynagogueIcon.displayName = 'FilledSynagogueIcon';
export const SynagogueFilledIcon = FilledSynagogueIcon;

export const FilledTakeoutDiningIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.26 11h13.48l-.67 9H5.93l-.67-9zm3.76-7h5.95L19 7.38l1.59-1.59L22 7.21L19.21 10H4.79L2 7.21L3.41 5.8L5 7.38L9.02 4z" fillRule="evenodd"/>
  </svg>
);
FilledTakeoutDiningIcon.displayName = 'FilledTakeoutDiningIcon';
export const TakeoutDiningFilledIcon = FilledTakeoutDiningIcon;

export const FilledTaxiAlertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 8A7 7 0 0 0 9.68 5H7v2H4.5a1.5 1.5 0 0 0-1.42 1.01L1 14v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.68A7.01 7.01 0 0 0 23 8zm-18.5.5h4.53a6.93 6.93 0 0 0 2.08 4.5H3l1.5-4.5zm0 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm2.93-5.63l-.21.11l-.18.09a4.97 4.97 0 0 1-.42.16l-.22.07l-.23.06l-.2.05a5 5 0 0 1-5.94-4.41A4.07 4.07 0 0 1 11 8l.02-.47l.02-.17l.04-.28l.04-.21l.05-.21l.07-.24l.05-.13a4.99 4.99 0 0 1 9.69 1.7a4.96 4.96 0 0 1-2.55 4.38zM15 4h2v5h-2zm0 6h2v2h-2z"/>
  </svg>
);
FilledTaxiAlertIcon.displayName = 'FilledTaxiAlertIcon';
export const TaxiAlertFilledIcon = FilledTaxiAlertIcon;

export const FilledTempleBuddhistIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 9.02c0 1.09-.89 1.98-1.98 1.98H4.98C3.89 11 3 10.11 3 9.02H1c0 1.86 1.28 3.4 3 3.84V22h6v-3c0-1.1.9-2 2-2s2 .9 2 2v3h6v-9.14c.55-.14 3-1.04 3-3.86l-2 .02z"/><path fill={color || 'currentColor'} d="M6 8.86V10h12V8.86c.55-.14 3-1.04 3-3.86l-2 .02C19 6.11 18.11 7 17.02 7H6.98C5.89 7 5 6.11 5 5.02H3c0 1.85 1.28 3.4 3 3.84z"/><path fill={color || 'currentColor'} d="M12 1L8.25 6h7.5z"/>
  </svg>
);
FilledTempleBuddhistIcon.displayName = 'FilledTempleBuddhistIcon';
export const TempleBuddhistFilledIcon = FilledTempleBuddhistIcon;

export const FilledTempleHinduIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zm-4.1-5L15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z"/>
  </svg>
);
FilledTempleHinduIcon.displayName = 'FilledTempleHinduIcon';
export const TempleHinduFilledIcon = FilledTempleHinduIcon;

export const FilledTerrainIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
  </svg>
);
FilledTerrainIcon.displayName = 'FilledTerrainIcon';
export const TerrainFilledIcon = FilledTerrainIcon;

export const FilledTheaterComedyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 16.5C2 19.54 4.46 22 7.5 22s5.5-2.46 5.5-5.5V10H2v6.5zm5.5 2C6.12 18.5 5 17.83 5 17h5c0 .83-1.12 1.5-2.5 1.5zM10 13c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm-5 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z"/><path fill={color || 'currentColor'} d="M11 3v6h3v2.5c0-.83 1.12-1.5 2.5-1.5s2.5.67 2.5 1.5h-5v2.89c.75.38 1.6.61 2.5.61c3.04 0 5.5-2.46 5.5-5.5V3H11zm3 5.08c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1z"/>
  </svg>
);
FilledTheaterComedyIcon.displayName = 'FilledTheaterComedyIcon';
export const TheaterComedyFilledIcon = FilledTheaterComedyIcon;

export const FilledTireRepairIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 7a1.003 1.003 0 0 0 1.71.71c.4-.4 1.04-2.46 1.04-2.46s-2.06.64-2.46 1.04c-.18.18-.29.43-.29.71z"/><path fill={color || 'currentColor'} d="M19 2c-2.76 0-5 2.24-5 5c0 2.05 1.23 3.81 3 4.58V13h1v5c0 .55-.45 1-1 1s-1-.45-1-1v-2a3.009 3.009 0 0 0-4-2.83V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-3c0-.55.45-1 1-1s1 .45 1 1v2c0 1.65 1.35 3 3 3s3-1.35 3-3v-5h1v-1.42c1.77-.77 3-2.53 3-4.58c0-2.76-2.24-5-5-5zM6 19.5l-2-2v-2.83l2 2v2.83zm0-5l-2-2V9.67l2 2v2.83zm0-5l-2-2V4.67l2 2V9.5zm4 8l-2 2v-2.83l2-2v2.83zm0-5l-2 2v-2.83l2-2v2.83zm0-5l-2 2V6.67l2-2V7.5zm9 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/>
  </svg>
);
FilledTireRepairIcon.displayName = 'FilledTireRepairIcon';
export const TireRepairFilledIcon = FilledTireRepairIcon;

export const FilledTrafficIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 19zm0-5a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14zm0-5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 1 1 0 4z"/>
  </svg>
);
FilledTrafficIcon.displayName = 'FilledTrafficIcon';
export const TrafficFilledIcon = FilledTrafficIcon;

export const FilledTrainIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);
FilledTrainIcon.displayName = 'FilledTrainIcon';
export const TrainFilledIcon = FilledTrainIcon;

export const FilledTramIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"/>
  </svg>
);
FilledTramIcon.displayName = 'FilledTramIcon';
export const TramFilledIcon = FilledTramIcon;

export const FilledTransferWithinAStationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5L19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75"/>
  </svg>
);
FilledTransferWithinAStationIcon.displayName = 'FilledTransferWithinAStationIcon';
export const TransferWithinAStationFilledIcon = FilledTransferWithinAStationIcon;

export const FilledTransitEnterexitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 18H6V8h3v4.77L15.98 6L18 8.03L11.15 15H16v3z"/>
  </svg>
);
FilledTransitEnterexitIcon.displayName = 'FilledTransitEnterexitIcon';
export const TransitEnterexitFilledIcon = FilledTransitEnterexitIcon;

export const FilledTripOriginIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6z"/>
  </svg>
);
FilledTripOriginIcon.displayName = 'FilledTripOriginIcon';
export const TripOriginFilledIcon = FilledTripOriginIcon;

export const FilledTurnLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.83 11l1.59 1.59L7 14l-4-4l4-4l1.41 1.41L6.83 9H15c1.1 0 2 .9 2 2v9h-2v-9H6.83z"/>
  </svg>
);
FilledTurnLeftIcon.displayName = 'FilledTurnLeftIcon';
export const TurnLeftFilledIcon = FilledTurnLeftIcon;

export const FilledTurnRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.17 11l-1.59 1.59L17 14l4-4l-4-4l-1.41 1.41L17.17 9H9c-1.1 0-2 .9-2 2v9h2v-9h8.17z"/>
  </svg>
);
FilledTurnRightIcon.displayName = 'FilledTurnRightIcon';
export const TurnRightFilledIcon = FilledTurnRightIcon;

export const FilledTurnSharpLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 6.83L4.41 8.41L3 7l4-4l4 4l-1.41 1.41L8 6.83V13h8c1.1 0 2 .9 2 2v6h-2v-6H8c-1.1 0-2-.9-2-2V6.83z"/>
  </svg>
);
FilledTurnSharpLeftIcon.displayName = 'FilledTurnSharpLeftIcon';
export const TurnSharpLeftFilledIcon = FilledTurnSharpLeftIcon;

export const FilledTurnSharpRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 6.83l1.59 1.59L21 7l-4-4l-4 4l1.41 1.41L16 6.83V13H8c-1.1 0-2 .9-2 2v6h2v-6h8c1.1 0 2-.9 2-2V6.83z"/>
  </svg>
);
FilledTurnSharpRightIcon.displayName = 'FilledTurnSharpRightIcon';
export const TurnSharpRightFilledIcon = FilledTurnSharpRightIcon;

export const FilledTurnSlightLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-7.58c0-.53-.21-1.04-.59-1.41l-5-5h2.25z"/>
  </svg>
);
FilledTurnSlightLeftIcon.displayName = 'FilledTurnSlightLeftIcon';
export const TurnSlightLeftFilledIcon = FilledTurnSlightLeftIcon;

export const FilledTurnSlightRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-7.58c0-.53.21-1.04.59-1.41l5-5h-2.25z"/>
  </svg>
);
FilledTurnSlightRightIcon.displayName = 'FilledTurnSlightRightIcon';
export const TurnSlightRightFilledIcon = FilledTurnSlightRightIcon;

export const FilledTwoWheelerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 11c-.18 0-.36.03-.53.05L17.41 9H20V6l-3.72 1.86L13.41 5H9v2h3.59l2 2H11l-4 2l-2-2H0v2h4c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4l2 2h3l3.49-6.1l1.01 1.01c-.91.73-1.5 1.84-1.5 3.09c0 2.21 1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm16 0c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
FilledTwoWheelerIcon.displayName = 'FilledTwoWheelerIcon';
export const TwoWheelerFilledIcon = FilledTwoWheelerIcon;

export const FilledUTurnLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 9v12h-2V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l1.59-1.59L11 13l-4 4l-4-4l1.41-1.41L6 13.17V9c0-3.31 2.69-6 6-6s6 2.69 6 6z"/>
  </svg>
);
FilledUTurnLeftIcon.displayName = 'FilledUTurnLeftIcon';
export const UTurnLeftFilledIcon = FilledUTurnLeftIcon;

export const FilledUTurnRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 9v12h2V9c0-2.21 1.79-4 4-4s4 1.79 4 4v4.17l-1.59-1.59L13 13l4 4l4-4l-1.41-1.41L18 13.17V9c0-3.31-2.69-6-6-6S6 5.69 6 9z"/>
  </svg>
);
FilledUTurnRightIcon.displayName = 'FilledUTurnRightIcon';
export const UTurnRightFilledIcon = FilledUTurnRightIcon;

export const FilledVolunteerActivismIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1 11h4v11H1zm15-7.75C16.65 2.49 17.66 2 18.7 2C20.55 2 22 3.45 22 5.3c0 2.27-2.91 4.9-6 7.7c-3.09-2.81-6-5.44-6-7.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25zM20 17h-7l-2.09-.73l.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18c0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8.01-3c-.01-1.1-.9-2-2.01-2z"/>
  </svg>
);
FilledVolunteerActivismIcon.displayName = 'FilledVolunteerActivismIcon';
export const VolunteerActivismFilledIcon = FilledVolunteerActivismIcon;

export const FilledWarehouseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 21V7L12 3L2 7v14h5v-9h10v9h5zm-11-2H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z"/>
  </svg>
);
FilledWarehouseIcon.displayName = 'FilledWarehouseIcon';
export const WarehouseFilledIcon = FilledWarehouseIcon;

export const FilledWineBarIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3H6zm10 5H8V5h8v3z"/>
  </svg>
);
FilledWineBarIcon.displayName = 'FilledWineBarIcon';
export const WineBarFilledIcon = FilledWineBarIcon;

export const FilledWrongLocationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 10V3.26c-.65-.17-1.32-.26-2-.26c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8c0-.41-.04-.81-.09-1.2H14zm-2 3c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/><path fill={color || 'currentColor'} d="M22.54 2.88l-1.42-1.42L19 3.59l-2.12-2.13l-1.42 1.42L17.59 5l-2.13 2.12l1.42 1.42L19 6.41l2.12 2.13l1.42-1.42L20.41 5z"/>
  </svg>
);
FilledWrongLocationIcon.displayName = 'FilledWrongLocationIcon';
export const WrongLocationFilledIcon = FilledWrongLocationIcon;

export const FilledZoomInMapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 9V3H7v2.59L3.91 2.5L2.5 3.91L5.59 7H3v2h6zm12 0V7h-2.59l3.09-3.09l-1.41-1.41L17 5.59V3h-2v6h6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6H3zm12 0v6h2v-2.59l3.09 3.09l1.41-1.41L18.41 17H21v-2h-6z"/>
  </svg>
);
FilledZoomInMapIcon.displayName = 'FilledZoomInMapIcon';
export const ZoomInMapFilledIcon = FilledZoomInMapIcon;

export const FilledZoomOutMapIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 3l2.3 2.3l-2.89 2.87l1.42 1.42L18.7 6.7L21 9V3h-6zM3 9l2.3-2.3l2.87 2.89l1.42-1.42L6.7 5.3L9 3H3v6zm6 12l-2.3-2.3l2.89-2.87l-1.42-1.42L5.3 17.3L3 15v6h6zm12-6l-2.3 2.3l-2.87-2.89l-1.42 1.42l2.89 2.87L15 21h6v-6z"/>
  </svg>
);
FilledZoomOutMapIcon.displayName = 'FilledZoomOutMapIcon';
export const ZoomOutMapFilledIcon = FilledZoomOutMapIcon;

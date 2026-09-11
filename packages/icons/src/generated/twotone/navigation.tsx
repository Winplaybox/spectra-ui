import React from 'react';
import { IconProps } from '../../types';

export const TwoToneAddHomeWorkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 5v1.4l5 3.57v1.11c.33-.05.66-.08 1-.08c1.08 0 2.09.25 3 .68V5h-9zm7 4h-2V7h2v2z"/><path fill={color || 'currentColor'} d="M12 5h9v6.68c.75.36 1.43.84 2 1.42V3H10v1.97l2 1.43V5z"/><path fill={color || 'currentColor'} d="M17 7h2v2h-2zM8 6l-7 5v10h6v-5h2v5h2.68c-.43-.91-.68-1.92-.68-3v-4H5v5H3v-6.97l5-3.57l5 3.57v1.08c.57-.59 1.25-1.07 2-1.42V11L8 6z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8 8.46l-5 3.57V19h2v-5h6v4c0-1.91.76-3.63 2-4.89v-1.08L8 8.46z"/><path fill={color || 'currentColor'} d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z"/>
  </svg>
);
TwoToneAddHomeWorkIcon.displayName = 'TwoToneAddHomeWorkIcon';
export const AddHomeWorkTwoToneIcon = TwoToneAddHomeWorkIcon;

export const TwoToneAppSettingsAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.81 12.74l-.82-.63v-.22l.8-.63c.16-.12.2-.34.1-.51l-.85-1.48a.395.395 0 0 0-.35-.2c-.05 0-.1.01-.15.03l-.95.38c-.08-.05-.11-.07-.19-.11l-.15-1.01a.408.408 0 0 0-.4-.36h-1.71c-.2 0-.37.15-.4.34l-.14 1.01c-.03.02-.07.03-.1.05l-.09.06l-.95-.38a.401.401 0 0 0-.5.17l-.85 1.48c-.1.17-.06.39.1.51l.8.63v.23l-.8.63a.39.39 0 0 0-.1.51l.85 1.48c.07.13.21.2.35.2c.05 0 .1-.01.15-.03l.95-.37c.08.05.12.07.2.11l.15 1.01c.03.2.2.34.4.34h1.71c.2 0 .37-.15.4-.34l.15-1.01c.03-.02.07-.03.1-.05l.09-.06l.95.38a.401.401 0 0 0 .5-.17l.85-1.48a.39.39 0 0 0-.1-.51zM18 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M7 3h10v1H7zm0 17h10v1H7z"/>
  </svg>
);
TwoToneAppSettingsAltIcon.displayName = 'TwoToneAppSettingsAltIcon';
export const AppSettingsAltTwoToneIcon = TwoToneAppSettingsAltIcon;

export const TwoToneAppsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
  </svg>
);
TwoToneAppsIcon.displayName = 'TwoToneAppsIcon';
export const AppsTwoToneIcon = TwoToneAppsIcon;

export const TwoToneAppsOutageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6 6h4v-4h-4v4zm3-20c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm.5 8h-1V7h1v1zm0-2h-1V2h1v4zM16 14h4v-2.07c-.33.05-.66.07-1 .07c-1.07 0-2.09-.24-3-.68V14zM10 4v4h2.68c-.44-.91-.68-1.93-.68-3c0-.34.02-.67.07-1H10z"/>
  </svg>
);
TwoToneAppsOutageIcon.displayName = 'TwoToneAppsOutageIcon';
export const AppsOutageTwoToneIcon = TwoToneAppsOutageIcon;

export const TwoToneArrowBackIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"/>
  </svg>
);
TwoToneArrowBackIcon.displayName = 'TwoToneArrowBackIcon';
export const ArrowBackTwoToneIcon = TwoToneArrowBackIcon;

export const TwoToneArrowBackIosIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12l8.13-8.13z"/>
  </svg>
);
TwoToneArrowBackIosIcon.displayName = 'TwoToneArrowBackIosIcon';
export const ArrowBackIosTwoToneIcon = TwoToneArrowBackIosIcon;

export const TwoToneArrowBackIosNewIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"/>
  </svg>
);
TwoToneArrowBackIosNewIcon.displayName = 'TwoToneArrowBackIosNewIcon';
export const ArrowBackIosNewTwoToneIcon = TwoToneArrowBackIosNewIcon;

export const TwoToneArrowDownwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8l8-8z"/>
  </svg>
);
TwoToneArrowDownwardIcon.displayName = 'TwoToneArrowDownwardIcon';
export const ArrowDownwardTwoToneIcon = TwoToneArrowDownwardIcon;

export const TwoToneArrowDropDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 10l5 5l5-5H7z"/>
  </svg>
);
TwoToneArrowDropDownIcon.displayName = 'TwoToneArrowDropDownIcon';
export const ArrowDropDownTwoToneIcon = TwoToneArrowDropDownIcon;

export const TwoToneArrowDropDownCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm0 11l-4-4h8l-4 4z"/><path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-5l4-4H8z"/>
  </svg>
);
TwoToneArrowDropDownCircleIcon.displayName = 'TwoToneArrowDropDownCircleIcon';
export const ArrowDropDownCircleTwoToneIcon = TwoToneArrowDropDownCircleIcon;

export const TwoToneArrowDropUpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 14l5-5l5 5H7z"/>
  </svg>
);
TwoToneArrowDropUpIcon.displayName = 'TwoToneArrowDropUpIcon';
export const ArrowDropUpTwoToneIcon = TwoToneArrowDropUpIcon;

export const TwoToneArrowForwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"/>
  </svg>
);
TwoToneArrowForwardIcon.displayName = 'TwoToneArrowForwardIcon';
export const ArrowForwardTwoToneIcon = TwoToneArrowForwardIcon;

export const TwoToneArrowForwardIosIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"/>
  </svg>
);
TwoToneArrowForwardIosIcon.displayName = 'TwoToneArrowForwardIosIcon';
export const ArrowForwardIosTwoToneIcon = TwoToneArrowForwardIosIcon;

export const TwoToneArrowLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 7l-5 5l5 5V7z"/>
  </svg>
);
TwoToneArrowLeftIcon.displayName = 'TwoToneArrowLeftIcon';
export const ArrowLeftTwoToneIcon = TwoToneArrowLeftIcon;

export const TwoToneArrowRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 17l5-5l-5-5v10z"/>
  </svg>
);
TwoToneArrowRightIcon.displayName = 'TwoToneArrowRightIcon';
export const ArrowRightTwoToneIcon = TwoToneArrowRightIcon;

export const TwoToneArrowUpwardIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8l-8 8z"/>
  </svg>
);
TwoToneArrowUpwardIcon.displayName = 'TwoToneArrowUpwardIcon';
export const ArrowUpwardTwoToneIcon = TwoToneArrowUpwardIcon;

export const TwoToneAssistantDirectionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 3c-4.99 0-9 4.01-9 9s4.01 9 9 9s9-4.01 9-9s-4.01-9-9-9zm.54 16.8c-.35.27-.79.27-1.15 0L4.2 12.58a.932.932 0 0 1 0-1.16l7.19-7.22c.35-.27.79-.27 1.15 0l7.19 7.22c.36.27.36.8 0 1.16l-7.19 7.22z"/><path fill={color || 'currentColor'} d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11s11-4.9 11-11S18.1 1 12 1zm0 20c-4.99 0-9-4.01-9-9s4.01-9 9-9s9 4.01 9 9s-4.01 9-9 9z"/><path fill={color || 'currentColor'} d="M19.73 11.42L12.54 4.2c-.36-.27-.8-.27-1.15 0L4.2 11.42c-.27.36-.27.8 0 1.16l7.19 7.22c.36.27.8.27 1.15 0l7.19-7.22c.36-.36.36-.89 0-1.16zM13.5 14.5V12H10v3H8v-4c0-.6.4-1 1-1h4.5V7.5L17 11l-3.5 3.5z"/>
  </svg>
);
TwoToneAssistantDirectionIcon.displayName = 'TwoToneAssistantDirectionIcon';
export const AssistantDirectionTwoToneIcon = TwoToneAssistantDirectionIcon;

export const TwoToneCampaignIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39c.4-.53.8-1.07 1.2-1.6c-.99-.74-2.24-1.68-3.2-2.4c-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6c-.99.74-2.24 1.68-3.2 2.4c.4.53.8 1.07 1.2 1.6c.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm5.03 1.71L11 9.53v4.94l-1.97-1.18l-.48-.29H4v-2h4.55l.48-.29zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M9.03 10.71L11 9.53v4.94l-1.97-1.18l-.48-.29H4v-2h4.55l.48-.29z"/>
  </svg>
);
TwoToneCampaignIcon.displayName = 'TwoToneCampaignIcon';
export const CampaignTwoToneIcon = TwoToneCampaignIcon;

export const TwoToneCancelIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8zm5 11.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"/><path fill={color || 'currentColor'} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm3.59-13L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"/>
  </svg>
);
TwoToneCancelIcon.displayName = 'TwoToneCancelIcon';
export const CancelTwoToneIcon = TwoToneCancelIcon;

export const TwoToneCheckIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"/>
  </svg>
);
TwoToneCheckIcon.displayName = 'TwoToneCheckIcon';
export const CheckTwoToneIcon = TwoToneCheckIcon;

export const TwoToneChevronLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12l4.58-4.59z"/>
  </svg>
);
TwoToneChevronLeftIcon.displayName = 'TwoToneChevronLeftIcon';
export const ChevronLeftTwoToneIcon = TwoToneChevronLeftIcon;

export const TwoToneChevronRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"/>
  </svg>
);
TwoToneChevronRightIcon.displayName = 'TwoToneChevronRightIcon';
export const ChevronRightTwoToneIcon = TwoToneChevronRightIcon;

export const TwoToneCloseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
  </svg>
);
TwoToneCloseIcon.displayName = 'TwoToneCloseIcon';
export const CloseTwoToneIcon = TwoToneCloseIcon;

export const TwoToneDoubleArrowIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.5 5H11l5 7l-5 7h4.5l5-7z"/><path fill={color || 'currentColor'} d="M8.5 5H4l5 7l-5 7h4.5l5-7z"/>
  </svg>
);
TwoToneDoubleArrowIcon.displayName = 'TwoToneDoubleArrowIcon';
export const DoubleArrowTwoToneIcon = TwoToneDoubleArrowIcon;

export const TwoToneEastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7l-7-7z"/>
  </svg>
);
TwoToneEastIcon.displayName = 'TwoToneEastIcon';
export const EastTwoToneIcon = TwoToneEastIcon;

export const TwoToneExpandCircleDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm0 11.5L7.5 11l1.42-1.41L12 12.67l3.08-3.08L16.5 11L12 15.5z"/><path fill={color || 'currentColor'} d="M15.08 9.59L12 12.67L8.92 9.59L7.5 11l4.5 4.5l4.5-4.5l-1.42-1.41zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"/>
  </svg>
);
TwoToneExpandCircleDownIcon.displayName = 'TwoToneExpandCircleDownIcon';
export const ExpandCircleDownTwoToneIcon = TwoToneExpandCircleDownIcon;

export const TwoToneExpandLessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
  </svg>
);
TwoToneExpandLessIcon.displayName = 'TwoToneExpandLessIcon';
export const ExpandLessTwoToneIcon = TwoToneExpandLessIcon;

export const TwoToneExpandMoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z"/>
  </svg>
);
TwoToneExpandMoreIcon.displayName = 'TwoToneExpandMoreIcon';
export const ExpandMoreTwoToneIcon = TwoToneExpandMoreIcon;

export const TwoToneFirstPageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6l1.41-1.41zM6 6h2v12H6V6z"/>
  </svg>
);
TwoToneFirstPageIcon.displayName = 'TwoToneFirstPageIcon';
export const FirstPageTwoToneIcon = TwoToneFirstPageIcon;

export const TwoToneFullscreenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
  </svg>
);
TwoToneFullscreenIcon.displayName = 'TwoToneFullscreenIcon';
export const FullscreenTwoToneIcon = TwoToneFullscreenIcon;

export const TwoToneFullscreenExitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
  </svg>
);
TwoToneFullscreenExitIcon.displayName = 'TwoToneFullscreenExitIcon';
export const FullscreenExitTwoToneIcon = TwoToneFullscreenExitIcon;

export const TwoToneHomeWorkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M17 11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5 3.57V11zm0-4h2v2h-2V7z"/><path fill={color || 'currentColor'} d="M10 3v1.97l.96.69L12 6.4V5h9v14h-4v2h6V3z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M3 12v7h2v-5h6v5h2v-7L8 8.5z"/><path fill={color || 'currentColor'} d="M17 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5l5 3.5v7z"/>
  </svg>
);
TwoToneHomeWorkIcon.displayName = 'TwoToneHomeWorkIcon';
export const HomeWorkTwoToneIcon = TwoToneHomeWorkIcon;

export const TwoToneLastPageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6l-1.41 1.41zM16 6h2v12h-2V6z"/>
  </svg>
);
TwoToneLastPageIcon.displayName = 'TwoToneLastPageIcon';
export const LastPageTwoToneIcon = TwoToneLastPageIcon;

export const TwoToneLegendToggleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 15H4v-2h16v2zm0 2H4v2h16v-2zm-5-6l5-3.55V5l-5 3.55L10 5L4 8.66V11l5.92-3.61L15 11z"/>
  </svg>
);
TwoToneLegendToggleIcon.displayName = 'TwoToneLegendToggleIcon';
export const LegendToggleTwoToneIcon = TwoToneLegendToggleIcon;

export const TwoToneMapsHomeWorkIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M17 11h2v2h-2v2h2v2h-2v2h4V5h-9v1.4l5 3.57V11zm0-4h2v2h-2V7z"/><path fill={color || 'currentColor'} d="M10 3v1.97l.96.69L12 6.4V5h9v14h-4v2h6V3z"/><path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M3 12v7h2v-5h6v5h2v-7L8 8.5z"/><path fill={color || 'currentColor'} d="M17 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5l5 3.5v7z"/>
  </svg>
);
TwoToneMapsHomeWorkIcon.displayName = 'TwoToneMapsHomeWorkIcon';
export const MapsHomeWorkTwoToneIcon = TwoToneMapsHomeWorkIcon;

export const TwoToneMenuIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);
TwoToneMenuIcon.displayName = 'TwoToneMenuIcon';
export const MenuTwoToneIcon = TwoToneMenuIcon;

export const TwoToneMenuOpenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12L21 8.41L19.59 7l-5 5l5 5L21 15.59z"/>
  </svg>
);
TwoToneMenuOpenIcon.displayName = 'TwoToneMenuOpenIcon';
export const MenuOpenTwoToneIcon = TwoToneMenuOpenIcon;

export const TwoToneMoreHorizIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
TwoToneMoreHorizIcon.displayName = 'TwoToneMoreHorizIcon';
export const MoreHorizTwoToneIcon = TwoToneMoreHorizIcon;

export const TwoToneMoreVertIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
TwoToneMoreVertIcon.displayName = 'TwoToneMoreVertIcon';
export const MoreVertTwoToneIcon = TwoToneMoreVertIcon;

export const TwoToneNorthIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 9l1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7l-7 7z"/>
  </svg>
);
TwoToneNorthIcon.displayName = 'TwoToneNorthIcon';
export const NorthTwoToneIcon = TwoToneNorthIcon;

export const TwoToneNorthEastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 5v2h6.59L4 18.59L5.41 20L17 8.41V15h2V5H9z"/>
  </svg>
);
TwoToneNorthEastIcon.displayName = 'TwoToneNorthEastIcon';
export const NorthEastTwoToneIcon = TwoToneNorthEastIcon;

export const TwoToneNorthWestIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 15h2V8.41L18.59 20L20 18.59L8.41 7H15V5H5v10z"/>
  </svg>
);
TwoToneNorthWestIcon.displayName = 'TwoToneNorthWestIcon';
export const NorthWestTwoToneIcon = TwoToneNorthWestIcon;

export const TwoToneOfflineShareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 5H4v16c0 1.1.9 2 2 2h10v-2H6V5z"/><path fill={color || 'currentColor'} d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16h-8v-1h8v1zm0-3h-8V6h8v8zm0-10h-8V3h8v1z"/><path fill={color || 'currentColor'} d="M12.5 10.25h2V12L17 9.5L14.5 7v1.75H12c-.55 0-1 .45-1 1V12h1.5v-1.75z"/>
  </svg>
);
TwoToneOfflineShareIcon.displayName = 'TwoToneOfflineShareIcon';
export const OfflineShareTwoToneIcon = TwoToneOfflineShareIcon;

export const TwoTonePaymentsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M17 6H3v8h14V6zm-7 7c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/><path fill={color || 'currentColor'} d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 14V6h14v8H3z"/><path fill={color || 'currentColor'} d="M10 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"/>
  </svg>
);
TwoTonePaymentsIcon.displayName = 'TwoTonePaymentsIcon';
export const PaymentsTwoToneIcon = TwoTonePaymentsIcon;

export const TwoTonePivotTableChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 5c0-1.1-.9-2-2-2h-9v5h11V5zM3 19c0 1.1.9 2 2 2h3V10H3v9zM3 5v3h5V3H5c-1.1 0-2 .9-2 2zm15 4l-4 4h3v2c0 1.1-.9 2-2 2h-2v-3l-4 4l4 4v-3h2c2.21 0 4-1.79 4-4v-2h3l-4-4z"/>
  </svg>
);
TwoTonePivotTableChartIcon.displayName = 'TwoTonePivotTableChartIcon';
export const PivotTableChartTwoToneIcon = TwoTonePivotTableChartIcon;

export const TwoToneRefreshIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
  </svg>
);
TwoToneRefreshIcon.displayName = 'TwoToneRefreshIcon';
export const RefreshTwoToneIcon = TwoToneRefreshIcon;

export const TwoToneSouthIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 15l-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7l7-7z"/>
  </svg>
);
TwoToneSouthIcon.displayName = 'TwoToneSouthIcon';
export const SouthTwoToneIcon = TwoToneSouthIcon;

export const TwoToneSouthEastIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 9h-2v6.59L5.41 4L4 5.41L15.59 17H9v2h10V9z"/>
  </svg>
);
TwoToneSouthEastIcon.displayName = 'TwoToneSouthEastIcon';
export const SouthEastTwoToneIcon = TwoToneSouthEastIcon;

export const TwoToneSouthWestIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 19v-2H8.41L20 5.41L18.59 4L7 15.59V9H5v10h10z"/>
  </svg>
);
TwoToneSouthWestIcon.displayName = 'TwoToneSouthWestIcon';
export const SouthWestTwoToneIcon = TwoToneSouthWestIcon;

export const TwoToneSubdirectoryArrowLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6l6-6z"/>
  </svg>
);
TwoToneSubdirectoryArrowLeftIcon.displayName = 'TwoToneSubdirectoryArrowLeftIcon';
export const SubdirectoryArrowLeftTwoToneIcon = TwoToneSubdirectoryArrowLeftIcon;

export const TwoToneSubdirectoryArrowRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 15l-6 6l-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"/>
  </svg>
);
TwoToneSubdirectoryArrowRightIcon.displayName = 'TwoToneSubdirectoryArrowRightIcon';
export const SubdirectoryArrowRightTwoToneIcon = TwoToneSubdirectoryArrowRightIcon;

export const TwoToneSwitchLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M8.5 8.62v6.76L5.12 12L8.5 8.62"/><path fill={color || 'currentColor'} d="M8.5 8.62v6.76L5.12 12L8.5 8.62M10 5l-7 7l7 7V5zm4 0v14l7-7l-7-7z"/>
  </svg>
);
TwoToneSwitchLeftIcon.displayName = 'TwoToneSwitchLeftIcon';
export const SwitchLeftTwoToneIcon = TwoToneSwitchLeftIcon;

export const TwoToneSwitchRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} fillOpacity={fillOpacity ?? 0.3} d="M15.5 15.38V8.62L18.88 12l-3.38 3.38"/><path fill={color || 'currentColor'} d="M15.5 15.38V8.62L18.88 12l-3.38 3.38M14 19l7-7l-7-7v14zm-4 0V5l-7 7l7 7z"/>
  </svg>
);
TwoToneSwitchRightIcon.displayName = 'TwoToneSwitchRightIcon';
export const SwitchRightTwoToneIcon = TwoToneSwitchRightIcon;

export const TwoToneUnfoldLessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.41 18.59L8.83 20L12 16.83L15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4L12 7.17L8.83 4L7.41 5.41L12 10l4.59-4.59z"/>
  </svg>
);
TwoToneUnfoldLessIcon.displayName = 'TwoToneUnfoldLessIcon';
export const UnfoldLessTwoToneIcon = TwoToneUnfoldLessIcon;

export const TwoToneUnfoldMoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 5.83L15.17 9l1.41-1.41L12 3L7.41 7.59L8.83 9L12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15L12 18.17z"/>
  </svg>
);
TwoToneUnfoldMoreIcon.displayName = 'TwoToneUnfoldMoreIcon';
export const UnfoldMoreTwoToneIcon = TwoToneUnfoldMoreIcon;

export const TwoToneWaterfallChartIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18 4h3v16h-3V4zM3 13h3v7H3v-7zm11-9h3v3h-3V4zm-4 1h3v4h-3V5zm-3 5h3v4H7v-4z"/>
  </svg>
);
TwoToneWaterfallChartIcon.displayName = 'TwoToneWaterfallChartIcon';
export const WaterfallChartTwoToneIcon = TwoToneWaterfallChartIcon;

export const TwoToneWestIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7l7 7z"/>
  </svg>
);
TwoToneWestIcon.displayName = 'TwoToneWestIcon';
export const WestTwoToneIcon = TwoToneWestIcon;

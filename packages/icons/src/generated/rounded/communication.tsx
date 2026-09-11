import React from 'react';
import { IconProps } from '../../types';

export const RoundedIcon3pIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4.01c-1.1 0-2 .9-2 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 4c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 13.43V14z"/>
  </svg>
);
RoundedIcon3pIcon.displayName = 'RoundedIcon3pIcon';
export const Icon3pRoundedIcon = RoundedIcon3pIcon;

export const RoundedAddIcCallIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1zm5.21 7.27l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84A15.045 15.045 0 0 1 6.6 10.8l1.85-1.85c.43-.43.64-1.04.57-1.64l-.29-2.52a2 2 0 0 0-1.98-1.78H5.02c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1-.76-1.86-1.77-1.97z"/>
  </svg>
);
RoundedAddIcCallIcon.displayName = 'RoundedAddIcCallIcon';
export const AddIcCallRoundedIcon = RoundedAddIcCallIcon;

export const RoundedAlternateEmailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.72 2.03A9.991 9.991 0 0 0 2.03 12.72C2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03c-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12a5.008 5.008 0 0 0-5.66 5.87a4.996 4.996 0 0 0 3.72 3.94c1.84.43 3.59-.16 4.74-1.33c.89 1.22 2.67 1.86 4.3 1.21c1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/>
  </svg>
);
RoundedAlternateEmailIcon.displayName = 'RoundedAlternateEmailIcon';
export const AlternateEmailRoundedIcon = RoundedAlternateEmailIcon;

export const RoundedAppRegistrationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><path fill={color || 'currentColor'} d="M11 18.07v1.43c0 .28.22.5.5.5h1.4c.13 0 .26-.05.35-.15l5.83-5.83l-2.12-2.12l-5.81 5.81c-.1.1-.15.23-.15.36zM12.03 14L14 12.03V12c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2h.03zm8.82-2.44l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06l2.12 2.12l1.06-1.06c.2-.2.2-.51 0-.71z"/>
  </svg>
);
RoundedAppRegistrationIcon.displayName = 'RoundedAppRegistrationIcon';
export const AppRegistrationRoundedIcon = RoundedAppRegistrationIcon;

export const RoundedBusinessIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);
RoundedBusinessIcon.displayName = 'RoundedBusinessIcon';
export const BusinessRoundedIcon = RoundedBusinessIcon;

export const RoundedCallIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/>
  </svg>
);
RoundedCallIcon.displayName = 'RoundedCallIcon';
export const CallRoundedIcon = RoundedCallIcon;

export const RoundedCallEndIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.51 15.48l2-1.59c.48-.38.76-.96.76-1.57v-2.6c3.02-.98 6.29-.99 9.32 0v2.61c0 .61.28 1.19.76 1.57l1.99 1.58c.8.63 1.94.57 2.66-.15l1.22-1.22c.8-.8.8-2.13-.05-2.88c-6.41-5.66-16.07-5.66-22.48 0c-.85.75-.85 2.08-.05 2.88l1.22 1.22c.71.72 1.85.78 2.65.15z"/>
  </svg>
);
RoundedCallEndIcon.displayName = 'RoundedCallEndIcon';
export const CallEndRoundedIcon = RoundedCallEndIcon;

export const RoundedCallMadeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedCallMadeIcon.displayName = 'RoundedCallMadeIcon';
export const CallMadeRoundedIcon = RoundedCallMadeIcon;

export const RoundedCallMergeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.7 19.7a.996.996 0 0 0 0-1.41l-2.7-2.7L13.59 17l2.7 2.7c.39.39 1.03.39 1.41 0zM8.71 8H11v5.59l-4.71 4.7A.996.996 0 1 0 7.7 19.7l5.3-5.3V8h2.29c.45 0 .67-.54.35-.85l-3.29-3.29c-.2-.2-.51-.2-.71 0L8.35 7.15a.5.5 0 0 0 .36.85z"/>
  </svg>
);
RoundedCallMergeIcon.displayName = 'RoundedCallMergeIcon';
export const CallMergeRoundedIcon = RoundedCallMergeIcon;

export const RoundedCallMissedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.89 7.7L12 14.59L6.41 9H10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-3.59l6.29 6.29c.39.39 1.02.39 1.41 0l7.59-7.59a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.4 0z"/>
  </svg>
);
RoundedCallMissedIcon.displayName = 'RoundedCallMissedIcon';
export const CallMissedRoundedIcon = RoundedCallMissedIcon;

export const RoundedCallMissedOutgoingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.7 9.11l7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59L5.11 7.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41z"/>
  </svg>
);
RoundedCallMissedOutgoingIcon.displayName = 'RoundedCallMissedOutgoingIcon';
export const CallMissedOutgoingRoundedIcon = RoundedCallMissedOutgoingIcon;

export const RoundedCallReceivedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.3 4.71a.996.996 0 0 0-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8.41L19.3 6.11c.38-.38.38-1.02 0-1.4z"/>
  </svg>
);
RoundedCallReceivedIcon.displayName = 'RoundedCallReceivedIcon';
export const CallReceivedRoundedIcon = RoundedCallReceivedIcon;

export const RoundedCallSplitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.85 4.85l1.44 1.44l-2.88 2.88l1.42 1.42l2.88-2.88l1.44 1.44a.5.5 0 0 0 .85-.36V4.5c0-.28-.22-.5-.5-.5h-4.29a.5.5 0 0 0-.36.85zM8.79 4H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35L6.29 7.7L11 12.4V19c0 .55.45 1 1 1s1-.45 1-1v-7c0-.26-.11-.52-.29-.71l-5-5.01l1.44-1.44c.31-.3.09-.84-.36-.84z"/>
  </svg>
);
RoundedCallSplitIcon.displayName = 'RoundedCallSplitIcon';
export const CallSplitRoundedIcon = RoundedCallSplitIcon;

export const RoundedCancelPresentationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12zm-5.71-9.3a.996.996 0 0 0-1.41 0L12 10.59L10.11 8.7a.996.996 0 1 0-1.41 1.41L10.59 12L8.7 13.89a.996.996 0 1 0 1.41 1.41L12 13.41l1.89 1.89a.996.996 0 1 0 1.41-1.41L13.41 12l1.89-1.89c.38-.38.38-1.02-.01-1.41z"/>
  </svg>
);
RoundedCancelPresentationIcon.displayName = 'RoundedCancelPresentationIcon';
export const CancelPresentationRoundedIcon = RoundedCancelPresentationIcon;

export const RoundedCellTowerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.9 14.1l.09-.09c.27-.27.32-.71.08-1.01C7.36 12.09 7 11.01 7 10c0-1.08.35-2.16 1.04-3.01c.25-.3.21-.75-.07-1.02L7.9 5.9c-.34-.34-.9-.3-1.2.08c-.91 1.18-1.4 2.6-1.4 4.02c0 1.42.49 2.84 1.4 4.02c.3.38.86.42 1.2.08zM18.51 3.49l-.08.08c-.3.3-.29.76-.03 1.08c1.26 1.53 1.9 3.48 1.9 5.35c0 1.87-.63 3.81-1.9 5.35c-.28.33-.23.83.08 1.14c.35.35.93.31 1.24-.07C21.29 14.54 22 12.31 22 10c0-2.32-.79-4.55-2.31-6.43c-.3-.37-.85-.41-1.18-.08z"/><path fill={color || 'currentColor'} d="M5.57 3.57l-.08-.08c-.33-.33-.88-.29-1.18.08C2.79 5.45 2 7.68 2 10c0 2.32.79 4.55 2.31 6.43c.3.37.85.42 1.18.08l.08-.08c.3-.3.29-.76.03-1.08c-1.27-1.54-1.9-3.48-1.9-5.35c0-1.87.63-3.81 1.9-5.35c.26-.32.27-.78-.03-1.08zm10.5 10.5c.36.36.95.32 1.26-.09c.9-1.18 1.37-2.58 1.37-3.98c-.08-1.41-.51-2.83-1.4-4.01a.797.797 0 0 0-1.2-.09l-.08.08c-.27.27-.32.71-.08 1.01c.7.92 1.06 2 1.06 3.01c0 1.07-.34 2.13-1.01 2.98c-.26.32-.22.79.08 1.09zM14.5 10c0-1.6-1.51-2.85-3.18-2.41c-.8.21-1.46.85-1.7 1.65c-.32 1.06.06 2.04.76 2.64l-2.96 8.87c-.21.62.25 1.25.9 1.25c.41 0 .77-.26.9-.65L9.67 20h4.67l.45 1.35a.949.949 0 1 0 1.8-.6l-2.96-8.87c.53-.46.87-1.12.87-1.88zm-4.17 8L12 13l1.67 5h-3.34z"/>
  </svg>
);
RoundedCellTowerIcon.displayName = 'RoundedCellTowerIcon';
export const CellTowerRoundedIcon = RoundedCellTowerIcon;

export const RoundedCellWifiIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.29 7.68L7.7 20.29c-.63.63-.18 1.71.71 1.71H21c.55 0 1-.45 1-1V8.39c0-.89-1.08-1.34-1.71-.71zM20 20h-2v-7.22l2-2V20zM9.61 10.68c-.28.17-.32.56-.09.79l.82.82c.39.39 1.02.39 1.41 0l.82-.82c.23-.23.18-.62-.09-.79c-.87-.54-1.99-.54-2.87 0zM8.42 9.3a4.553 4.553 0 0 1 5.27 0c.36.26.85.22 1.16-.1c.39-.39.35-1.06-.1-1.38a6.402 6.402 0 0 0-7.4 0c-.45.32-.5.99-.1 1.38a.9.9 0 0 0 1.17.1z"/><path fill={color || 'currentColor'} d="M16.26 6.69c.34.28.83.28 1.14-.03l.12-.12c.35-.35.31-.92-.08-1.24c-3.67-3.05-9.02-3.07-12.7-.06c-.43.35-.47.99-.08 1.37c.32.33.84.37 1.19.08c3.01-2.48 7.4-2.48 10.41 0z"/>
  </svg>
);
RoundedCellWifiIcon.displayName = 'RoundedCellWifiIcon';
export const CellWifiRoundedIcon = RoundedCellWifiIcon;

export const RoundedChatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedChatIcon.displayName = 'RoundedChatIcon';
export const ChatRoundedIcon = RoundedChatIcon;

export const RoundedChatBubbleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);
RoundedChatBubbleIcon.displayName = 'RoundedChatBubbleIcon';
export const ChatBubbleRoundedIcon = RoundedChatBubbleIcon;

export const RoundedChatBubbleOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4v12H5.17L4 17.17V4h16m0-2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);
RoundedChatBubbleOutlineIcon.displayName = 'RoundedChatBubbleOutlineIcon';
export const ChatBubbleOutlineRoundedIcon = RoundedChatBubbleOutlineIcon;

export const RoundedClearAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 13h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm-2 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm3-9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedClearAllIcon.displayName = 'RoundedClearAllIcon';
export const ClearAllRoundedIcon = RoundedClearAllIcon;

export const RoundedCoPresentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><circle cx="9" cy="10" r="4"/><path fill={color || 'currentColor'} d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"/>
  </svg>
);
RoundedCoPresentIcon.displayName = 'RoundedCoPresentIcon';
export const CoPresentRoundedIcon = RoundedCoPresentIcon;

export const RoundedCommentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4l-.01-18zM17 14H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedCommentIcon.displayName = 'RoundedCommentIcon';
export const CommentRoundedIcon = RoundedCommentIcon;

export const RoundedCommentsDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1.39 2.81a.996.996 0 0 0 0 1.41l.61.61V16c0 1.1.9 2 2 2h11.17l4.61 4.61a.996.996 0 1 0 1.41-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0zm4.99 6.4L8.17 11H7a1.003 1.003 0 0 1-.62-1.79zM7 14c-.55 0-1-.45-1-1s.45-1 1-1h2.17l2 2H7zm7.83-2l-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1h-5.17l-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1H8.83l-4-4H20c1.1 0 2 .9 2 2v15.17L16.83 14H17c.55 0 1-.45 1-1s-.45-1-1-1h-2.17z"/>
  </svg>
);
RoundedCommentsDisabledIcon.displayName = 'RoundedCommentsDisabledIcon';
export const CommentsDisabledRoundedIcon = RoundedCommentsDisabledIcon;

export const RoundedContactEmergencyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3zM2.08 19c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4H2.08zm18.52-8.5c-.21.36-.67.48-1.02.27l-.82-.48v.95c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.94l-.82.48a.746.746 0 0 1-.75-1.29L16.5 9l-.82-.48a.742.742 0 0 1-.27-1.02c.21-.36.67-.48 1.02-.27l.82.48v-.96c0-.41.34-.75.75-.75s.75.34.75.75v.95l.82-.48a.746.746 0 0 1 .75 1.29L19.5 9l.82.48c.36.2.49.66.28 1.02z"/>
  </svg>
);
RoundedContactEmergencyIcon.displayName = 'RoundedContactEmergencyIcon';
export const ContactEmergencyRoundedIcon = RoundedContactEmergencyIcon;

export const RoundedContactMailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 8V7l-3 2l-3-2v1l2.72 1.82a.5.5 0 0 0 .55 0L21 8zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm7.5-6h-7c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5z"/>
  </svg>
);
RoundedContactMailIcon.displayName = 'RoundedContactMailIcon';
export const ContactMailRoundedIcon = RoundedContactMailIcon;

export const RoundedContactPhoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.39c.16 0 .3.07.4.2l1.1 1.45c.15.2.13.48-.05.65l-1.36 1.36c-.18.18-.48.2-.67.04a7.557 7.557 0 0 1-2.38-3.71a7.248 7.248 0 0 1 0-3.99a7.513 7.513 0 0 1 2.38-3.71c.2-.17.49-.14.67.04l1.36 1.36c.18.18.2.46.05.65l-1.1 1.45a.48.48 0 0 1-.4.2h-1.39c-.22.63-.35 1.3-.35 2s.13 1.38.35 2.01z"/>
  </svg>
);
RoundedContactPhoneIcon.displayName = 'RoundedContactPhoneIcon';
export const ContactPhoneRoundedIcon = RoundedContactPhoneIcon;

export const RoundedContactsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 0H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 24h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9S10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/>
  </svg>
);
RoundedContactsIcon.displayName = 'RoundedContactsIcon';
export const ContactsRoundedIcon = RoundedContactsIcon;

export const RoundedDesktopAccessDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M.31 2a.996.996 0 0 0 0 1.41l.69.68V16c0 1.1.9 2 2 2h7v2H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h.9l5.29 5.29a.996.996 0 1 0 1.41-1.41L1.72 2A.996.996 0 0 0 .31 2zm2.68 13V6.09L12.9 16H3.99c-.55 0-1-.45-1-1zM4.55 2l2 2H20c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-1.45l2 2h.44c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4.55z"/>
  </svg>
);
RoundedDesktopAccessDisabledIcon.displayName = 'RoundedDesktopAccessDisabledIcon';
export const DesktopAccessDisabledRoundedIcon = RoundedDesktopAccessDisabledIcon;

export const RoundedDialerSipIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.5 8c.28 0 .5-.22.5-.5v-4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v4c0 .28.22.5.5.5zm-4-1c-.28 0-.5.22-.5.5s.22.5.5.5h1.95c.3 0 .55-.25.55-.55v-1.9c0-.3-.25-.55-.55-.55H13V4h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.95c-.3 0-.55.25-.55.55v1.89c0 .31.25.56.55.56H14v1h-1.5zm7.95-4h-1.89c-.31 0-.56.25-.56.55V7.5c0 .28.22.5.5.5s.5-.22.5-.5V6h1.45c.3 0 .55-.25.55-.55v-1.9c0-.3-.25-.55-.55-.55zM20 5h-1V4h1v1zm-.79 10.27l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84A15.045 15.045 0 0 1 6.6 10.8l1.85-1.85c.43-.43.64-1.04.57-1.64l-.29-2.52a2 2 0 0 0-1.98-1.78H5.02c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1-.76-1.86-1.77-1.97z"/>
  </svg>
);
RoundedDialerSipIcon.displayName = 'RoundedDialerSipIcon';
export const DialerSipRoundedIcon = RoundedDialerSipIcon;

export const RoundedDialpadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>
  </svg>
);
RoundedDialpadIcon.displayName = 'RoundedDialpadIcon';
export const DialpadRoundedIcon = RoundedDialpadIcon;

export const RoundedDocumentScannerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 6c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1H4v2c0 .55-.45 1-1 1zm14-4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1zM3 18c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H4v-2c0-.55-.45-1-1-1zm14 4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1zm2-4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12zM9 9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zm0 3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zm0 3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedDocumentScannerIcon.displayName = 'RoundedDocumentScannerIcon';
export const DocumentScannerRoundedIcon = RoundedDocumentScannerIcon;

export const RoundedDomainDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M.71 2.39a.996.996 0 0 0 0 1.41L2 5.1V19c0 1.1.9 2 2 2h13.9l2.29 2.29a.996.996 0 1 0 1.41-1.41L2.12 2.39a.996.996 0 0 0-1.41 0zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm-2-4V9h2v2H4zm6 8H8v-2h2v2zm-2-4v-2h2v2H8zm4 4v-2h1.9l2 2H12zM8 5h2v2h-.45L12 9.45V9h7c.55 0 1 .45 1 1v7.45l2 2V9c0-1.1-.9-2-2-2h-8V5c0-1.1-.9-2-2-2H5.55L8 5.45V5zm8 6h2v2h-2z"/>
  </svg>
);
RoundedDomainDisabledIcon.displayName = 'RoundedDomainDisabledIcon';
export const DomainDisabledRoundedIcon = RoundedDomainDisabledIcon;

export const RoundedDomainVerificationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.23 15.83c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0l-3.54 3.53l-1.41-1.41c-.39-.39-1.02-.39-1.42 0s-.39 1.02 0 1.41l2.13 2.13z"/><path fill={color || 'currentColor'} d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8h14v9z"/>
  </svg>
);
RoundedDomainVerificationIcon.displayName = 'RoundedDomainVerificationIcon';
export const DomainVerificationRoundedIcon = RoundedDomainVerificationIcon;

export const RoundedDuoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2h-8C6.38 2 2 6.66 2 12.28C2 17.5 6.49 22 11.72 22C17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2zm-3 13l-3-2v2H7V9h7v2l3-2v6z"/>
  </svg>
);
RoundedDuoIcon.displayName = 'RoundedDuoIcon';
export const DuoRoundedIcon = RoundedDuoIcon;

export const RoundedEmailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/>
  </svg>
);
RoundedEmailIcon.displayName = 'RoundedEmailIcon';
export const EmailRoundedIcon = RoundedEmailIcon;

export const RoundedForumIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"/>
  </svg>
);
RoundedForumIcon.displayName = 'RoundedForumIcon';
export const ForumRoundedIcon = RoundedForumIcon;

export const RoundedForwardToInboxIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 5.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V20h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-1.79z"/>
  </svg>
);
RoundedForwardToInboxIcon.displayName = 'RoundedForwardToInboxIcon';
export const ForwardToInboxRoundedIcon = RoundedForwardToInboxIcon;

export const RoundedHourglassBottomIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 22c1.1 0 2-.9 2-2l-.01-3.18c0-.53-.21-1.03-.58-1.41L14 12l3.41-3.43c.37-.37.58-.88.58-1.41L18 4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3.16c0 .53.21 1.04.58 1.42L10 12l-3.41 3.4c-.38.38-.59.89-.59 1.42V20c0 1.1.9 2 2 2h8zM8 7.09V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.09c0 .27-.11.52-.29.71L12 11.5L8.29 7.79c-.18-.18-.29-.44-.29-.7z"/>
  </svg>
);
RoundedHourglassBottomIcon.displayName = 'RoundedHourglassBottomIcon';
export const HourglassBottomRoundedIcon = RoundedHourglassBottomIcon;

export const RoundedHourglassTopIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8 2c-1.1 0-2 .9-2 2l.01 3.18c0 .53.21 1.03.58 1.41L10 12l-3.41 3.43c-.37.37-.58.88-.58 1.41L6 20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8zm8 14.91V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.09c0-.27.11-.52.29-.71L12 12.5l3.71 3.71c.18.18.29.44.29.7z"/>
  </svg>
);
RoundedHourglassTopIcon.displayName = 'RoundedHourglassTopIcon';
export const HourglassTopRoundedIcon = RoundedHourglassTopIcon;

export const RoundedHubIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.4 18.2c.38.5.6 1.12.6 1.8c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3c.44 0 .85.09 1.23.26l1.41-1.77a4.504 4.504 0 0 1-1.09-3.69l-2.03-.68A2.997 2.997 0 0 1 0 9.5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .07 0 .14-.01.21l2.03.68a4.468 4.468 0 0 1 3.22-2.32V5.91A3.018 3.018 0 0 1 9 3c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.4-.96 2.57-2.25 2.91v2.16c1.4.23 2.58 1.11 3.22 2.32L18 9.71V9.5c0-1.66 1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3c-1.06 0-1.98-.55-2.52-1.37l-2.03.68a4.49 4.49 0 0 1-1.09 3.69l1.41 1.77c.38-.18.79-.27 1.23-.27c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3c0-.68.22-1.3.6-1.8l-1.41-1.77c-1.35.75-3.01.76-4.37 0L8.4 18.2z"/>
  </svg>
);
RoundedHubIcon.displayName = 'RoundedHubIcon';
export const HubRoundedIcon = RoundedHubIcon;

export const RoundedImportContactsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94c.98-.25 2.02-.36 3.02-.36c1.56 0 3.22.26 4.56.92c.6.3 1.28.3 1.87 0c1.34-.67 3-.92 4.56-.92c1 0 2.04.11 3.02.36c1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85c-1.28-.57-2.82-.79-4.27-.79zM21 17.23c0 .63-.58 1.09-1.2.98c-.75-.14-1.53-.2-2.3-.2c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c.92 0 1.83.09 2.7.28c.46.1.8.51.8.98v9.47z"/>
  </svg>
);
RoundedImportContactsIcon.displayName = 'RoundedImportContactsIcon';
export const ImportContactsRoundedIcon = RoundedImportContactsIcon;

export const RoundedImportExportIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 0 0-.7 0zM16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16z"/>
  </svg>
);
RoundedImportExportIcon.displayName = 'RoundedImportExportIcon';
export const ImportExportRoundedIcon = RoundedImportExportIcon;

export const RoundedInvertColorsOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.49 20.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l3.5 3.5a7.73 7.73 0 0 0-1.6 4.7C4 17.48 7.58 21 12 21c1.75 0 3.36-.56 4.67-1.5l2.4 2.4c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41zM12 19c-3.31 0-6-2.63-6-5.87c0-1.19.36-2.32 1.02-3.28L12 14.83V19zM8.38 5.56l2.91-2.87c.39-.38 1.01-.38 1.4 0l4.95 4.87C19.1 8.99 20 10.96 20 13.13c0 1.18-.27 2.29-.74 3.3L12 9.17V4.81L9.8 6.97L8.38 5.56z"/>
  </svg>
);
RoundedInvertColorsOffIcon.displayName = 'RoundedInvertColorsOffIcon';
export const InvertColorsOffRoundedIcon = RoundedInvertColorsOffIcon;

export const RoundedKeyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20.59 10h-7.94a6.004 6.004 0 0 0-6.88-3.88c-2.29.46-4.15 2.3-4.63 4.58A6.002 6.002 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H13l1.29 1.29c.39.39 1.02.39 1.41 0L17 14l1.29 1.29c.39.39 1.03.39 1.42 0l2.59-2.61a.999.999 0 0 0-.01-1.42l-.99-.97c-.2-.19-.45-.29-.71-.29zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3z"/>
  </svg>
);
RoundedKeyIcon.displayName = 'RoundedKeyIcon';
export const KeyRoundedIcon = RoundedKeyIcon;

export const RoundedKeyOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.83 10l4.09 4.09L17 14l1.29 1.29c.39.39 1.03.39 1.42 0l2.59-2.61a.999.999 0 0 0-.01-1.42l-.99-.97c-.2-.19-.45-.29-.71-.29h-7.76zm6.24 11.9a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92L3.98 6.8A6.041 6.041 0 0 0 1 12c0 3.31 2.69 6 6 6c2.21 0 4.15-1.2 5.18-2.99l6.89 6.89zm-9.16-9.16A3.015 3.015 0 0 1 7 15c-1.65 0-3-1.35-3-3c0-1.4.97-2.58 2.26-2.91l3.65 3.65z"/>
  </svg>
);
RoundedKeyOffIcon.displayName = 'RoundedKeyOffIcon';
export const KeyOffRoundedIcon = RoundedKeyOffIcon;

export const RoundedListAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 9h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20 3H4c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 16H5V5h14v14z"/>
  </svg>
);
RoundedListAltIcon.displayName = 'RoundedListAltIcon';
export const ListAltRoundedIcon = RoundedListAltIcon;

export const RoundedLiveHelpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92c-.58.59-.99 1.1-1.12 2.06c-.06.43-.41.76-.85.76h-.31a.86.86 0 0 1-.85-.98c.11-.91.53-1.72 1.14-2.34l1.24-1.26c.36-.36.58-.86.58-1.41c0-1.1-.9-2-2-2c-.87 0-1.62.57-1.89 1.35c-.13.37-.44.64-.83.64h-.3c-.58 0-.98-.56-.82-1.12A4.002 4.002 0 0 1 16 8c0 .88-.36 1.68-.93 2.25z"/>
  </svg>
);
RoundedLiveHelpIcon.displayName = 'RoundedLiveHelpIcon';
export const LiveHelpRoundedIcon = RoundedLiveHelpIcon;

export const RoundedLocationOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.71 3.56a.996.996 0 0 0 0 1.41l2.47 2.47C5.07 7.95 5 8.47 5 9c0 4.17 4.42 9.92 6.23 12.11c.4.48 1.13.48 1.53 0c.65-.78 1.62-2.01 2.61-3.46l2.65 2.65a.996.996 0 1 0 1.41-1.41L4.12 3.56a.996.996 0 0 0-1.41 0zM12 2c-1.84 0-3.5.71-4.75 1.86l3.19 3.19c.43-.34.97-.55 1.56-.55A2.5 2.5 0 0 1 14.5 9c0 .59-.21 1.13-.56 1.56l3.55 3.55C18.37 12.36 19 10.57 19 9c0-3.87-3.13-7-7-7z"/>
  </svg>
);
RoundedLocationOffIcon.displayName = 'RoundedLocationOffIcon';
export const LocationOffRoundedIcon = RoundedLocationOffIcon;

export const RoundedLocationOnIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedLocationOnIcon.displayName = 'RoundedLocationOnIcon';
export const LocationOnRoundedIcon = RoundedLocationOnIcon;

export const RoundedMailLockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 9.97V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h12v-5.03c0-2.76 2.24-5 5-5h1zm-2.4-1.72l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 0 1 1.3.72c0 .29-.15.56-.4.72z"/><path fill={color || 'currentColor'} d="M23 15v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>
  </svg>
);
RoundedMailLockIcon.displayName = 'RoundedMailLockIcon';
export const MailLockRoundedIcon = RoundedMailLockIcon;

export const RoundedMailOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z"/>
  </svg>
);
RoundedMailOutlineIcon.displayName = 'RoundedMailOutlineIcon';
export const MailOutlineRoundedIcon = RoundedMailOutlineIcon;

export const RoundedMarkChatReadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.05 19.29a.996.996 0 0 1-1.41 0l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.25zM12 17a6.995 6.995 0 0 1 10-6.32V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h6c0-.17.01-.33.03-.5c-.02-.17-.03-.33-.03-.5z"/>
  </svg>
);
RoundedMarkChatReadIcon.displayName = 'RoundedMarkChatReadIcon';
export const MarkChatReadRoundedIcon = RoundedMarkChatReadIcon;

export const RoundedMarkChatUnreadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 6.98V16c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z"/>
  </svg>
);
RoundedMarkChatUnreadIcon.displayName = 'RoundedMarkChatUnreadIcon';
export const MarkChatUnreadRoundedIcon = RoundedMarkChatUnreadIcon;

export const RoundedMarkEmailReadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.05 21.29a.996.996 0 0 1-1.41 0l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.25zM12.08 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6.68A6.995 6.995 0 0 0 12 19c0 .34.03.67.08 1zm-.61-7.33c.32.2.74.2 1.06 0l7.07-4.42a.85.85 0 1 0-.9-1.44L12 11L5.3 6.81a.85.85 0 1 0-.9 1.44l7.07 4.42z"/>
  </svg>
);
RoundedMarkEmailReadIcon.displayName = 'RoundedMarkEmailReadIcon';
export const MarkEmailReadRoundedIcon = RoundedMarkEmailReadIcon;

export const RoundedMarkEmailUnreadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19 10c1.13 0 2.16-.39 3-1.02V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1c0 1.48.65 2.79 1.67 3.71L12 11L5.3 6.81a.85.85 0 1 0-.9 1.44l7.07 4.42c.32.2.74.2 1.06 0l4.77-2.98c.54.19 1.1.31 1.7.31zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z"/>
  </svg>
);
RoundedMarkEmailUnreadIcon.displayName = 'RoundedMarkEmailUnreadIcon';
export const MarkEmailUnreadRoundedIcon = RoundedMarkEmailUnreadIcon;

export const RoundedMarkUnreadChatAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="19" cy="3" r="3"/><path fill={color || 'currentColor'} d="M7 8c-.55 0-1-.45-1-1s.45-1 1-1h8.03a4.906 4.906 0 0 1-.92-4H4.01a2 2 0 0 0-2 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V6.97C21.16 7.61 20.13 8 19 8H7zm6 6H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedMarkUnreadChatAltIcon.displayName = 'RoundedMarkUnreadChatAltIcon';
export const MarkUnreadChatAltRoundedIcon = RoundedMarkUnreadChatAltIcon;

export const RoundedMessageIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedMessageIcon.displayName = 'RoundedMessageIcon';
export const MessageRoundedIcon = RoundedMessageIcon;

export const RoundedMobileScreenShareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-4.2-5.78v1.75l2.81-2.62c.21-.2.21-.53 0-.73L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7c1.11-1.5 2.58-2.18 4.8-2.18z"/>
  </svg>
);
RoundedMobileScreenShareIcon.displayName = 'RoundedMobileScreenShareIcon';
export const MobileScreenShareRoundedIcon = RoundedMobileScreenShareIcon;

export const RoundedMoreTimeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.75 8c-.41 0-.75.34-.75.75v4.69c0 .35.18.67.47.85l3.64 2.24a.713.713 0 1 0 .74-1.22L11.5 13.3V8.75c0-.41-.34-.75-.75-.75z"/><path fill={color || 'currentColor'} d="M17.92 12A6.957 6.957 0 0 1 11 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23c-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 0 0 8.94-10h-2.02z"/><path fill={color || 'currentColor'} d="M22 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1z"/>
  </svg>
);
RoundedMoreTimeIcon.displayName = 'RoundedMoreTimeIcon';
export const MoreTimeRoundedIcon = RoundedMoreTimeIcon;

export const RoundedNatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6.82 13H11v-2H6.82C6.4 9.84 5.3 9 4 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2zM4 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/><path fill={color || 'currentColor'} d="M22.47 12.4c.27-.2.27-.6 0-.8L19 9v2h-4.05c-.47-4.69-4.16-8.42-8.83-8.94c-.6-.06-1.12.4-1.12 1c0 .5.37.93.87.99C9.88 4.48 13 7.87 13 12s-3.12 7.52-7.13 7.95c-.5.06-.87.49-.87.99a1 1 0 0 0 1.11 1c4.67-.52 8.37-4.25 8.83-8.94H19v2l3.47-2.6z"/>
  </svg>
);
RoundedNatIcon.displayName = 'RoundedNatIcon';
export const NatRoundedIcon = RoundedNatIcon;

export const RoundedNoSimIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.09 4.44a.996.996 0 0 0 0 1.41l2.03 2.03l-.12.13V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.17 1.17a.996.996 0 1 0 1.41-1.41L4.5 4.44a.996.996 0 0 0-1.41 0zM19 16.11V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06L19 16.11z"/>
  </svg>
);
RoundedNoSimIcon.displayName = 'RoundedNoSimIcon';
export const NoSimRoundedIcon = RoundedNoSimIcon;

export const RoundedPausePresentationIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12zM10 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1zm4 0c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1z"/>
  </svg>
);
RoundedPausePresentationIcon.displayName = 'RoundedPausePresentationIcon';
export const PausePresentationRoundedIcon = RoundedPausePresentationIcon;

export const RoundedPersonAddDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.48 11.95c.17.02.34.05.52.05c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4c0 .18.03.35.05.52l3.43 3.43zm2.21 2.21l5.74 5.74c.33-.17.57-.5.57-.9v-1c0-2.14-3.56-3.5-6.31-3.84zM2.12 2.42A.996.996 0 1 0 .71 3.83L4 7.12V10H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v1c0 .55.45 1 1 1h8.88l3.29 3.29a.996.996 0 1 0 1.41-1.41L2.12 2.42zM6 10v-.88l.88.88H6z"/>
  </svg>
);
RoundedPersonAddDisabledIcon.displayName = 'RoundedPersonAddDisabledIcon';
export const PersonAddDisabledRoundedIcon = RoundedPersonAddDisabledIcon;

export const RoundedPersonSearchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="10" cy="8" r="4"/><path fill={color || 'currentColor'} d="M10.35 14.01C7.62 13.91 2 15.27 2 18v1c0 .55.45 1 1 1h8.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.47-.8.7-1.77.48-2.82c-.34-1.64-1.72-2.95-3.38-3.16c-2.63-.34-4.85 1.87-4.5 4.5c.22 1.66 1.52 3.04 3.16 3.38c1.05.22 2.02-.01 2.82-.48l1.86 1.86a.996.996 0 1 0 1.41-1.41l-1.85-1.87zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedPersonSearchIcon.displayName = 'RoundedPersonSearchIcon';
export const PersonSearchRoundedIcon = RoundedPersonSearchIcon;

export const RoundedPhoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/>
  </svg>
);
RoundedPhoneIcon.displayName = 'RoundedPhoneIcon';
export const PhoneRoundedIcon = RoundedPhoneIcon;

export const RoundedPhoneDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.54 17.37a16.868 16.868 0 0 1-9.45 3.61c-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98l2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c.81-.41 1.59-.9 2.31-1.45L2.1 4.93a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0L20.49 20.5a.996.996 0 1 1-1.41 1.41l-4.54-4.54zm2.85-6.57l-1.85-1.85a1.99 1.99 0 0 1-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07a16.94 16.94 0 0 1-3.62 9.47l-1.43-1.43c.55-.73 1.04-1.51 1.46-2.33z"/>
  </svg>
);
RoundedPhoneDisabledIcon.displayName = 'RoundedPhoneDisabledIcon';
export const PhoneDisabledRoundedIcon = RoundedPhoneDisabledIcon;

export const RoundedPhoneEnabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4.78 15.27l2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c2.83-1.44 5.15-3.75 6.59-6.59l-1.85-1.85a1.99 1.99 0 0 1-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07c-.53 8.54-7.36 15.36-15.89 15.89c-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98z"/>
  </svg>
);
RoundedPhoneEnabledIcon.displayName = 'RoundedPhoneEnabledIcon';
export const PhoneEnabledRoundedIcon = RoundedPhoneEnabledIcon;

export const RoundedPhonelinkEraseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.5 7.7a.7.7 0 0 0-1 0L8 11.2L4.5 7.7c-.28-.28-.72-.28-1 0s-.28.72 0 1L7 12.2l-3.5 3.5c-.28.28-.28.72 0 1s.72.28 1 0L8 13.2l3.5 3.5c.28.28.72.28 1 0s.28-.72 0-1L9 12.2l3.5-3.5a.7.7 0 0 0 0-1zM19 1H9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/>
  </svg>
);
RoundedPhonelinkEraseIcon.displayName = 'RoundedPhonelinkEraseIcon';
export const PhonelinkEraseRoundedIcon = RoundedPhonelinkEraseIcon;

export const RoundedPhonelinkLockIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1z"/><path fill={color || 'currentColor'} d="M20 11v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>
  </svg>
);
RoundedPhonelinkLockIcon.displayName = 'RoundedPhonelinkLockIcon';
export const PhonelinkLockRoundedIcon = RoundedPhonelinkLockIcon;

export const RoundedPhonelinkRingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16zm6.63-11.74a.699.699 0 0 0-1.04-.06l-.03.03c-.25.25-.26.65-.05.93c1.26 1.64 1.25 3.87-.02 5.57c-.21.28-.19.67.05.92l.05.05c.29.29.76.26 1.03-.05c1.8-2.13 1.8-5.19.01-7.39zm-3.21 2.11l-.06.06c-.2.2-.26.5-.15.76c.21.49.21 1.03 0 1.52c-.11.26-.05.56.15.76l.08.08c.32.32.87.25 1.09-.15c.49-.89.49-1.94-.01-2.86a.687.687 0 0 0-1.1-.17z"/>
  </svg>
);
RoundedPhonelinkRingIcon.displayName = 'RoundedPhonelinkRingIcon';
export const PhonelinkRingRoundedIcon = RoundedPhonelinkRingIcon;

export const RoundedPhonelinkSetupIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7 3v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2zm2.5 12.5c.29-.12.55-.29.8-.48l-.02.03l1.01.39c.23.09.49 0 .61-.22l.84-1.46c.12-.21.07-.49-.12-.64l-.85-.68l-.02.03c.02-.16.05-.32.05-.48s-.03-.32-.05-.48l.02.03l.85-.68c.19-.15.24-.43.12-.64l-.84-1.46a.499.499 0 0 0-.61-.22l-1.01.39l.02.03c-.25-.17-.51-.34-.8-.46l-.17-1.08A.488.488 0 0 0 8.84 7H7.16c-.25 0-.46.18-.49.42L6.5 8.5c-.29.12-.55.29-.8.48l.02-.03l-1.02-.39c-.23-.09-.49 0-.61.22l-.84 1.46c-.12.21-.07.49.12.64l.85.68l.02-.03c-.02.15-.05.31-.05.47s.03.32.05.48l-.02-.03l-.85.68c-.19.15-.24.43-.12.64l.84 1.46c.12.21.38.31.61.22l1.01-.39l-.01-.04c.25.19.51.36.8.48l.17 1.07c.03.25.24.43.49.43h1.68c.25 0 .46-.18.49-.42l.17-1.08zM6 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2z"/>
  </svg>
);
RoundedPhonelinkSetupIcon.displayName = 'RoundedPhonelinkSetupIcon';
export const PhonelinkSetupRoundedIcon = RoundedPhonelinkSetupIcon;

export const RoundedPortableWifiOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.71 3.07a.996.996 0 0 0 0 1.41L4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.3 1.6 6.22 4.06 8.04c.48.35 1.16.21 1.46-.31c.25-.43.14-.99-.26-1.29C5.29 16.98 4 14.65 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44a5.97 5.97 0 0 0 1.1 7.76c.46.4 1.19.25 1.5-.28l.01-.01c.24-.42.13-.94-.23-1.26A3.947 3.947 0 0 1 8 12c0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02l6.81 6.81a.996.996 0 1 0 1.41-1.41L4.13 3.07c-.39-.39-1.03-.39-1.42 0zm15 10.75c.18-.57.29-1.19.29-1.82c0-3.31-2.69-6-6-6c-.63 0-1.25.11-1.82.29l1.72 1.72c.03 0 .06-.01.1-.01c2.21 0 4 1.79 4 4c0 .04-.01.07-.01.11l1.72 1.71zM12 4c4.42 0 8 3.58 8 8c0 1.2-.29 2.32-.77 3.35l1.49 1.49A9.82 9.82 0 0 0 22 12c0-5.52-4.48-10-10-10c-1.76 0-3.4.48-4.84 1.28l1.48 1.48C9.66 4.28 10.8 4 12 4z"/>
  </svg>
);
RoundedPortableWifiOffIcon.displayName = 'RoundedPortableWifiOffIcon';
export const PortableWifiOffRoundedIcon = RoundedPortableWifiOffIcon;

export const RoundedPresentToAllIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-1 16.02H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.04c0 .55-.45 1-1 1zM10 12H8l3.65-3.65c.2-.2.51-.2.71 0L16 12h-2v4h-4v-4z"/>
  </svg>
);
RoundedPresentToAllIcon.displayName = 'RoundedPresentToAllIcon';
export const PresentToAllRoundedIcon = RoundedPresentToAllIcon;

export const RoundedPrintDisabledIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.12 2.32A.996.996 0 1 0 .71 3.73L4.98 8A2.998 2.998 0 0 0 2 11v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c.55 0 1.04-.22 1.4-.58l2.83 2.83a.996.996 0 1 0 1.41-1.41L2.12 2.32zM15 19H9c-.55 0-1-.45-1-1v-4h2.98l4.72 4.72c-.19.17-.43.28-.7.28zm4-11h-8.37l9 9H20c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-2-5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H7c-.37 0-.68.21-.85.51L9.63 7H17z"/>
  </svg>
);
RoundedPrintDisabledIcon.displayName = 'RoundedPrintDisabledIcon';
export const PrintDisabledRoundedIcon = RoundedPrintDisabledIcon;

export const RoundedQrCodeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 11h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0-6h4v4H5V5zm0 16h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0-6h4v4H5v-4zm8-10v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2zm6 4h-4V5h4v4zm2 11.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5zm-8-7v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5zm3.5 1.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5zM13 17.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5zm2.5 3.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zm2-2h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5zm1-6h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5zm1 4h1c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5z"/>
  </svg>
);
RoundedQrCodeIcon.displayName = 'RoundedQrCodeIcon';
export const QrCodeRoundedIcon = RoundedQrCodeIcon;

export const RoundedQrCode2Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM8 9H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm-3.5 7.5v3h3v-3h-3zM8 21H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm8.5-16.5v3h3v-3h-3zM20 9h-4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm-1 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"/>
  </svg>
);
RoundedQrCode2Icon.displayName = 'RoundedQrCode2Icon';
export const QrCode2RoundedIcon = RoundedQrCode2Icon;

export const RoundedQrCodeScannerIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6 8h1.5v1.5H13V13zm1.5 1.5H16V16h-1.5v-1.5zM16 13h1.5v1.5H16V13zm-3 3h1.5v1.5H13V16zm1.5 1.5H16V19h-1.5v-1.5zM16 16h1.5v1.5H16V16zm1.5-1.5H19V16h-1.5v-1.5zm0 3H19V19h-1.5v-1.5zM21 7c-.55 0-1-.45-1-1V4h-2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1zm1 14v-3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1zM3 22h3c.55 0 1-.45 1-1s-.45-1-1-1H4v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1zM2 3v3c0 .55.45 1 1 1s1-.45 1-1V4h2c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedQrCodeScannerIcon.displayName = 'RoundedQrCodeScannerIcon';
export const QrCodeScannerRoundedIcon = RoundedQrCodeScannerIcon;

export const RoundedReadMoreIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14 9h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1zm7 6h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm0-4h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zM8.85 7.85a.5.5 0 0 0-.85.36V11H3c-.55 0-1 .45-1 1s.45 1 1 1h5v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71L8.85 7.85z"/>
  </svg>
);
RoundedReadMoreIcon.displayName = 'RoundedReadMoreIcon';
export const ReadMoreRoundedIcon = RoundedReadMoreIcon;

export const RoundedRingVolumeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M11.98 7h.03c.55 0 .99-.44.99-.98V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98v3.03c0 .55.44.99.98.99zm4.92 2.11c.39.39 1.01.39 1.4 0c.62-.63 1.52-1.54 2.15-2.17a.972.972 0 0 0 0-1.39a.99.99 0 0 0-1.39 0L16.89 7.7a.972.972 0 0 0 0 1.39l.01.02zM5.71 9.1c.38.39 1.01.39 1.4 0a.99.99 0 0 0 0-1.39L4.96 5.54a.972.972 0 0 0-1.39 0l-.02.01a.972.972 0 0 0 0 1.39c.63.62 1.54 1.53 2.16 2.16zm17.58 7.13c-6.41-5.66-16.07-5.66-22.48 0c-.85.75-.85 2.08-.05 2.88l1.22 1.22c.72.72 1.86.78 2.66.15l2-1.59c.48-.38.76-.96.76-1.57v-2.6c3.02-.98 6.29-.99 9.32 0v2.61c0 .61.28 1.19.76 1.57l1.99 1.58c.8.63 1.94.57 2.66-.15l1.22-1.22c.79-.8.79-2.13-.06-2.88z"/>
  </svg>
);
RoundedRingVolumeIcon.displayName = 'RoundedRingVolumeIcon';
export const RingVolumeRoundedIcon = RoundedRingVolumeIcon;

export const RoundedRssFeedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="6.18" cy="17.82" r="2.18"/><path fill={color || 'currentColor'} d="M5.59 10.23c-.84-.14-1.59.55-1.59 1.4c0 .71.53 1.28 1.23 1.4c2.92.51 5.22 2.82 5.74 5.74c.12.7.69 1.23 1.4 1.23c.85 0 1.54-.75 1.41-1.59a9.894 9.894 0 0 0-8.19-8.18zm-.03-5.71C4.73 4.43 4 5.1 4 5.93c0 .73.55 1.33 1.27 1.4c6.01.6 10.79 5.38 11.39 11.39c.07.73.67 1.28 1.4 1.28c.84 0 1.5-.73 1.42-1.56c-.73-7.34-6.57-13.19-13.92-13.92z"/>
  </svg>
);
RoundedRssFeedIcon.displayName = 'RoundedRssFeedIcon';
export const RssFeedRoundedIcon = RoundedRssFeedIcon;

export const RoundedRttIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M8.76 4.69l-.61 3.89c-.12.78.48 1.49 1.28 1.49c.64 0 1.18-.46 1.28-1.09l.53-3.41h2.58L11.8 18.43h-1.24c-.63 0-1.16.46-1.26 1.08v.01c-.13.78.47 1.48 1.26 1.48h4.67c.63 0 1.17-.46 1.26-1.08v-.01a1.28 1.28 0 0 0-1.26-1.48h-.86l2-12.86h2.58l-.47 3.01c-.12.78.48 1.49 1.28 1.49h.03c.64 0 1.18-.46 1.28-1.09l.57-3.67A2 2 0 0 0 19.66 3h-8.92c-.98 0-1.82.72-1.98 1.69zM8 5H4.86c-.5 0-.92.36-.99.85c-.1.6.37 1.15.99 1.15h2.83L8 5zm-.61 4H4.25c-.5 0-.92.36-.99.85c-.1.6.37 1.15.99 1.15h2.83l.31-2zm.92 8H3.17c-.49 0-.91.36-.99.85c-.1.6.37 1.15.99 1.15H8l.31-2zm.62-4H3.79c-.49 0-.91.36-.99.85c-.1.6.37 1.15.99 1.15h4.84l.3-2z"/>
  </svg>
);
RoundedRttIcon.displayName = 'RoundedRttIcon';
export const RttRoundedIcon = RoundedRttIcon;

export const RoundedScreenShareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1h-3zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72c.56-2.67 2.11-5.33 6-5.87V7l3.61 3.36c.21.2.21.53 0 .73L13 14.47z"/>
  </svg>
);
RoundedScreenShareIcon.displayName = 'RoundedScreenShareIcon';
export const ScreenShareRoundedIcon = RoundedScreenShareIcon;

export const RoundedSendTimeExtensionIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5V6z"/><path fill={color || 'currentColor'} d="M13 12v4l4 1l-4 1v4l10-5z"/>
  </svg>
);
RoundedSendTimeExtensionIcon.displayName = 'RoundedSendTimeExtensionIcon';
export const SendTimeExtensionRoundedIcon = RoundedSendTimeExtensionIcon;

export const RoundedSentimentSatisfiedAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path fill={color || 'currentColor'} d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm4.41-6.11a.745.745 0 0 0-1.03.24C14.64 15.3 13.38 16 12 16s-2.64-.7-3.38-1.88a.747.747 0 1 0-1.27.79C8.37 16.54 10.1 17.5 12 17.5s3.63-.97 4.65-2.58c.22-.35.11-.81-.24-1.03z"/>
  </svg>
);
RoundedSentimentSatisfiedAltIcon.displayName = 'RoundedSentimentSatisfiedAltIcon';
export const SentimentSatisfiedAltRoundedIcon = RoundedSentimentSatisfiedAltIcon;

export const RoundedSipIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.5 10.5h2v1h-2z"/><path fill={color || 'currentColor'} d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM10 9.75c0 .41-.34.75-.75.75H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H8.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3.25c.41 0 .75.34.75.75zM12 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm7-3c0 .55-.45 1-1 1h-2.5v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2z"/>
  </svg>
);
RoundedSipIcon.displayName = 'RoundedSipIcon';
export const SipRoundedIcon = RoundedSipIcon;

export const RoundedSpeakerPhoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.76 7.83l.02.02c.35.35.89.38 1.3.09c.83-.57 1.84-.92 2.92-.92s2.09.35 2.92.93c.4.29.95.26 1.3-.09l.02-.02c.42-.42.39-1.14-.09-1.49C14.98 5.5 13.55 5 12 5s-2.98.5-4.14 1.34c-.49.35-.52 1.07-.1 1.49z"/><path fill={color || 'currentColor'} d="M12 1c-2.62 0-5.03.93-6.92 2.47A1 1 0 0 0 5 4.96c.36.36.93.39 1.32.07C7.86 3.76 9.85 3 12 3s4.14.76 5.69 2.03c.39.32.96.29 1.32-.07c.42-.42.38-1.11-.08-1.49C17.03 1.93 14.62 1 12 1zm3 9H9c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.99c.55 0 1-.45 1-1L16 11c0-.55-.45-1-1-1zm0 10H9v-8h6v8z"/>
  </svg>
);
RoundedSpeakerPhoneIcon.displayName = 'RoundedSpeakerPhoneIcon';
export const SpeakerPhoneRoundedIcon = RoundedSpeakerPhoneIcon;

export const RoundedSpokeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4s4 1.79 4 4zm-9 6c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm10 0c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4z"/>
  </svg>
);
RoundedSpokeIcon.displayName = 'RoundedSpokeIcon';
export const SpokeRoundedIcon = RoundedSpokeIcon;

export const RoundedStayCurrentLandscapeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/>
  </svg>
);
RoundedStayCurrentLandscapeIcon.displayName = 'RoundedStayCurrentLandscapeIcon';
export const StayCurrentLandscapeRoundedIcon = RoundedStayCurrentLandscapeIcon;

export const RoundedStayCurrentPortraitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
  </svg>
);
RoundedStayCurrentPortraitIcon.displayName = 'RoundedStayCurrentPortraitIcon';
export const StayCurrentPortraitRoundedIcon = RoundedStayCurrentPortraitIcon;

export const RoundedStayPrimaryLandscapeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/>
  </svg>
);
RoundedStayPrimaryLandscapeIcon.displayName = 'RoundedStayPrimaryLandscapeIcon';
export const StayPrimaryLandscapeRoundedIcon = RoundedStayPrimaryLandscapeIcon;

export const RoundedStayPrimaryPortraitIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
  </svg>
);
RoundedStayPrimaryPortraitIcon.displayName = 'RoundedStayPrimaryPortraitIcon';
export const StayPrimaryPortraitRoundedIcon = RoundedStayPrimaryPortraitIcon;

export const RoundedStopScreenShareIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M23 18h-1.2l1.79 1.79c.24-.18.41-.46.41-.79c0-.55-.45-1-1-1zM3.23 2.28c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41l.84.86s-.66.57-.66 1.47C2 6.92 2 16 2 16l.01.01c0 1.09.88 1.98 1.97 1.99H1c-.55 0-1 .45-1 1s.45 1 1 1h17.13l2 2a.996.996 0 1 0 1.41-1.41L3.23 2.28zM7 15c.31-1.48.94-2.93 2.08-4.05l1.59 1.59C9.13 12.92 7.96 13.71 7 15zm6-5.87v-.98c0-.44.52-.66.84-.37L15 8.87l1.61 1.5c.21.2.21.53 0 .73l-.89.83l5.58 5.58c.43-.37.7-.9.7-1.51V6c0-1.09-.89-1.98-1.98-1.98H7.8l5.14 5.13c.02-.01.04-.02.06-.02z"/>
  </svg>
);
RoundedStopScreenShareIcon.displayName = 'RoundedStopScreenShareIcon';
export const StopScreenShareRoundedIcon = RoundedStopScreenShareIcon;

export const RoundedSwapCallsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.65 4.35l-2.79 2.79c-.32.32-.1.86.35.86H17v6.88c0 1-.67 1.93-1.66 2.09c-1.25.21-2.34-.76-2.34-1.97V8.17c0-2.09-1.53-3.95-3.61-4.15A3.998 3.998 0 0 0 5 8v7H3.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.36-.85H7V8.12c0-1 .67-1.93 1.66-2.09C9.91 5.82 11 6.79 11 8v6.83c0 2.09 1.53 3.95 3.61 4.15C16.99 19.21 19 17.34 19 15V8h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01z"/>
  </svg>
);
RoundedSwapCallsIcon.displayName = 'RoundedSwapCallsIcon';
export const SwapCallsRoundedIcon = RoundedSwapCallsIcon;

export const RoundedTextsmsIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
  </svg>
);
RoundedTextsmsIcon.displayName = 'RoundedTextsmsIcon';
export const TextsmsRoundedIcon = RoundedTextsmsIcon;

export const RoundedUnsubscribeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.5 11.5c.92 0 1.75.26 2.49.69V5c0-1.1-.89-2-1.99-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h8.55c-.02-.17-.05-.33-.05-.5c0-2.76 2.24-5 5-5zm-5.61-1.45c-.56.28-1.23.28-1.79 0l-5.61-2.8a.893.893 0 0 1-.49-.8c0-.66.7-1.1 1.29-.8L12 8.5l5.71-2.85a.89.89 0 0 1 1.29.8c0 .34-.19.65-.49.8l-5.62 2.8zM18.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm2 3.5c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5z"/>
  </svg>
);
RoundedUnsubscribeIcon.displayName = 'RoundedUnsubscribeIcon';
export const UnsubscribeRoundedIcon = RoundedUnsubscribeIcon;

export const RoundedVoicemailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5S2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8S9 9.57 9 11.5S7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8S22 9.57 22 11.5S20.43 15 18.5 15z"/>
  </svg>
);
RoundedVoicemailIcon.displayName = 'RoundedVoicemailIcon';
export const VoicemailRoundedIcon = RoundedVoicemailIcon;

export const RoundedVpnKeyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12.65 10a5.998 5.998 0 0 0-6.88-3.88c-2.29.46-4.15 2.29-4.63 4.58A6.006 6.006 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);
RoundedVpnKeyIcon.displayName = 'RoundedVpnKeyIcon';
export const VpnKeyRoundedIcon = RoundedVpnKeyIcon;

export const RoundedVpnKeyOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3.98 6.81A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6c2.21 0 4.15-1.2 5.18-2.99l6.89 6.89a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92l1.88 1.89zm5.01 5.01c.01.06.01.12.01.18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2c.06 0 .12 0 .18.01l1.81 1.81zm11.33 5.68c.42-.37.68-.91.68-1.5v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.17l7.49 7.5"/>
  </svg>
);
RoundedVpnKeyOffIcon.displayName = 'RoundedVpnKeyOffIcon';
export const VpnKeyOffRoundedIcon = RoundedVpnKeyOffIcon;

export const RoundedWifiCallingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M22 4.95C21.79 4.78 19.67 3 16.5 3c-3.18 0-5.29 1.78-5.5 1.95L16.5 12L22 4.95z"/><path fill={color || 'currentColor'} d="M19.2 15.28l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.04.57-1.64L8.72 4.8a2.001 2.001 0 0 0-1.99-1.77H5c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.37 15.9 15.9c1.13.07 2.07-.87 2.07-2v-1.73c0-1.02-.76-1.87-1.77-1.99z"/>
  </svg>
);
RoundedWifiCallingIcon.displayName = 'RoundedWifiCallingIcon';
export const WifiCallingRoundedIcon = RoundedWifiCallingIcon;

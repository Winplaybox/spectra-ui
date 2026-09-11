import React from 'react';
import { IconProps } from '../../types';

export const RoundedApprovalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M4 16v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm13 2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zM12 2C9.54 2 7.48 3.79 7.07 6.13c-.08.52.06 1.05.36 1.47l3.76 5.26a1 1 0 0 0 1.63 0l3.76-5.26c.3-.42.44-.95.35-1.47A5.016 5.016 0 0 0 12 2z"/>
  </svg>
);
RoundedApprovalIcon.displayName = 'RoundedApprovalIcon';
export const ApprovalRoundedIcon = RoundedApprovalIcon;

export const RoundedAttachEmailIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3h4zm-9.47.67c-.32.2-.74.2-1.06 0L3.4 6.25a.85.85 0 1 1 .9-1.44L11 9l6.7-4.19a.85.85 0 1 1 .9 1.44l-7.07 4.42z"/><path fill={color || 'currentColor'} d="M22 14c-.55 0-1 .45-1 1v3c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V17c0 .55.45 1 1 1s1-.45 1-1v-3.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-3c0-.55-.45-1-1-1z"/>
  </svg>
);
RoundedAttachEmailIcon.displayName = 'RoundedAttachEmailIcon';
export const AttachEmailRoundedIcon = RoundedAttachEmailIcon;

export const RoundedAttachmentIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.75 16H7.17c-2.09 0-3.95-1.53-4.15-3.61A3.998 3.998 0 0 1 7 8h12.36c1.31 0 2.5.94 2.63 2.24A2.5 2.5 0 0 1 19.5 13H9c-.55 0-1-.45-1-1s.45-1 1-1h8.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 0 0 9 14.5h10.33c2.09 0 3.95-1.53 4.15-3.61A3.993 3.993 0 0 0 19.5 6.5H7.23c-2.87 0-5.44 2.1-5.71 4.96A5.505 5.505 0 0 0 7 17.5h10.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>
  </svg>
);
RoundedAttachmentIcon.displayName = 'RoundedAttachmentIcon';
export const AttachmentRoundedIcon = RoundedAttachmentIcon;

export const RoundedCloudIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96z"/>
  </svg>
);
RoundedCloudIcon.displayName = 'RoundedCloudIcon';
export const CloudRoundedIcon = RoundedCloudIcon;

export const RoundedCloudCircleIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3h.14c.44-1.73 1.99-3 3.86-3c2.21 0 4 1.79 4 4h.5a2.5 2.5 0 0 1 0 5z"/>
  </svg>
);
RoundedCloudCircleIcon.displayName = 'RoundedCloudCircleIcon';
export const CloudCircleRoundedIcon = RoundedCloudCircleIcon;

export const RoundedCloudDoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zm-8.64 6.25a.996.996 0 0 1-1.41 0L7.2 14.2a.996.996 0 1 1 1.41-1.41L10 14.18l4.48-4.48a.996.996 0 1 1 1.41 1.41l-5.18 5.18z"/>
  </svg>
);
RoundedCloudDoneIcon.displayName = 'RoundedCloudDoneIcon';
export const CloudDoneRoundedIcon = RoundedCloudDoneIcon;

export const RoundedCloudDownloadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3z"/>
  </svg>
);
RoundedCloudDownloadIcon.displayName = 'RoundedCloudDownloadIcon';
export const CloudDownloadRoundedIcon = RoundedCloudDownloadIcon;

export const RoundedCloudOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M24 15c0-2.64-2.05-4.78-4.65-4.96A7.49 7.49 0 0 0 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19a2.996 2.996 0 0 1 1.79 5.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81zM3.71 4.56a.996.996 0 0 0 0 1.41l2.06 2.06h-.42a5.99 5.99 0 0 0-5.29 6.79C.46 17.84 3.19 20 6.22 20h11.51l1.29 1.29a.996.996 0 1 0 1.41-1.41L5.12 4.56a.996.996 0 0 0-1.41 0zM6 18c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8H6z"/>
  </svg>
);
RoundedCloudOffIcon.displayName = 'RoundedCloudOffIcon';
export const CloudOffRoundedIcon = RoundedCloudOffIcon;

export const RoundedCloudQueueIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
  </svg>
);
RoundedCloudQueueIcon.displayName = 'RoundedCloudQueueIcon';
export const CloudQueueRoundedIcon = RoundedCloudQueueIcon;

export const RoundedCloudSyncIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M24 17.48a2.5 2.5 0 0 1-2.5 2.5L15 20c-1.66 0-3-1.34-3-3c0-1.6 1.26-2.9 2.84-2.98A3.495 3.495 0 0 1 18 12c1.76 0 3.2 1.3 3.45 2.99c.02 0 .03-.01.05-.01a2.5 2.5 0 0 1 2.5 2.5zM10 15c0-.55-.45-1-1-1s-1 .45-1 1v1.44c-1.22-1.1-2-2.67-2-4.44c0-2.38 1.39-4.43 3.4-5.4c.37-.18.6-.56.6-.97c0-.71-.73-1.18-1.37-.88C5.89 6.03 4 8.79 4 12c0 2.4 1.06 4.54 2.73 6H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4zm9-9c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7.56c.98.89 1.68 2.08 1.92 3.44h2.02a7.98 7.98 0 0 0-2.66-5H19z"/>
  </svg>
);
RoundedCloudSyncIcon.displayName = 'RoundedCloudSyncIcon';
export const CloudSyncRoundedIcon = RoundedCloudSyncIcon;

export const RoundedCloudUploadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"/>
  </svg>
);
RoundedCloudUploadIcon.displayName = 'RoundedCloudUploadIcon';
export const CloudUploadRoundedIcon = RoundedCloudUploadIcon;

export const RoundedCreateNewFolderIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2 8h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedCreateNewFolderIcon.displayName = 'RoundedCreateNewFolderIcon';
export const CreateNewFolderRoundedIcon = RoundedCreateNewFolderIcon;

export const RoundedDifferenceIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M3 7c.55 0 1 .45 1 1v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V8c0-.55.45-1 1-1zm12.59-5.41c-.38-.38-.89-.59-1.42-.59H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM15.5 15h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1zm0-6h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V6c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedDifferenceIcon.displayName = 'RoundedDifferenceIcon';
export const DifferenceRoundedIcon = RoundedDifferenceIcon;

export const RoundedDownloadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedDownloadIcon.displayName = 'RoundedDownloadIcon';
export const DownloadRoundedIcon = RoundedDownloadIcon;

export const RoundedDownloadDoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm5.01-4.1a2 2 0 0 1-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97c.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96l-7 6.93z"/>
  </svg>
);
RoundedDownloadDoneIcon.displayName = 'RoundedDownloadDoneIcon';
export const DownloadDoneRoundedIcon = RoundedDownloadDoneIcon;

export const RoundedDownloadForOfflineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V7c0-.55.45-1 1-1s1 .45 1 1v3h1.79c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.51.2-.71 0l-2.79-2.79a.5.5 0 0 1 .36-.85H11zm5 7H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedDownloadForOfflineIcon.displayName = 'RoundedDownloadForOfflineIcon';
export const DownloadForOfflineRoundedIcon = RoundedDownloadForOfflineIcon;

export const RoundedDownloadingIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M17.33 3.55c-.94-.6-1.99-1.04-3.12-1.3a.998.998 0 0 0-1.21.98c0 .45.3.87.74.97c.91.2 1.77.56 2.53 1.05c.39.25.89.17 1.22-.16c.45-.45.38-1.2-.16-1.54zM20.77 11c.64 0 1.13-.59.98-1.21c-.26-1.12-.7-2.17-1.3-3.12c-.34-.54-1.1-.61-1.55-.16c-.32.32-.4.83-.16 1.22c.49.77.85 1.62 1.05 2.53a1 1 0 0 0 .98.74zm-1.87 6.49c.45.45 1.21.38 1.55-.15c.6-.94 1.04-1.99 1.3-3.11c.14-.62-.35-1.21-.98-1.21c-.45 0-.87.3-.97.74c-.2.91-.57 1.76-1.05 2.53c-.25.37-.17.88.15 1.2zM13 20.77c0 .64.59 1.13 1.21.98c1.12-.26 2.17-.7 3.11-1.3c.54-.34.61-1.1.16-1.55c-.32-.32-.83-.4-1.21-.15c-.76.49-1.61.85-2.53 1.05c-.44.1-.74.51-.74.97zM13 12V8c0-.55-.45-1-1-1s-1 .45-1 1v4H9.41c-.89 0-1.34 1.08-.71 1.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H13zm-2 8.77c0 .64-.59 1.13-1.21.99C5.33 20.75 2 16.77 2 12s3.33-8.75 7.79-9.75a.998.998 0 0 1 1.21.98c0 .46-.31.87-.76.97C6.67 5 4 8.19 4 12s2.67 7 6.24 7.8c.45.1.76.51.76.97z"/>
  </svg>
);
RoundedDownloadingIcon.displayName = 'RoundedDownloadingIcon';
export const DownloadingRoundedIcon = RoundedDownloadingIcon;

export const RoundedDriveFileMoveIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 9.79V14H9c-.55 0-1-.45-1-1s.45-1 1-1h3v-1.79c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36z"/>
  </svg>
);
RoundedDriveFileMoveIcon.displayName = 'RoundedDriveFileMoveIcon';
export const DriveFileMoveRoundedIcon = RoundedDriveFileMoveIcon;

export const RoundedDriveFileMoveRtlIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8.85 10.15l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79c.31-.32.85-.1.85.35V12h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1.79a.5.5 0 0 1-.85.36z"/>
  </svg>
);
RoundedDriveFileMoveRtlIcon.displayName = 'RoundedDriveFileMoveRtlIcon';
export const DriveFileMoveRtlRoundedIcon = RoundedDriveFileMoveRtlIcon;

export const RoundedDriveFileRenameOutlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/>
  </svg>
);
RoundedDriveFileRenameOutlineIcon.displayName = 'RoundedDriveFileRenameOutlineIcon';
export const DriveFileRenameOutlineRoundedIcon = RoundedDriveFileRenameOutlineIcon;

export const RoundedDriveFolderUploadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7 7v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H9.21c-.45 0-.67-.54-.35-.85l2.8-2.79c.2-.2.51-.19.71 0l2.79 2.79c.3.31.08.85-.36.85H13z"/>
  </svg>
);
RoundedDriveFolderUploadIcon.displayName = 'RoundedDriveFolderUploadIcon';
export const DriveFolderUploadRoundedIcon = RoundedDriveFolderUploadIcon;

export const RoundedFileDownloadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedFileDownloadIcon.displayName = 'RoundedFileDownloadIcon';
export const FileDownloadRoundedIcon = RoundedFileDownloadIcon;

export const RoundedFileDownloadDoneIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.42 4.71a.996.996 0 0 0-1.41 0L9.53 13.2L5.99 9.66a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.19-9.19c.4-.39.4-1.02 0-1.41zM6 20h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z"/>
  </svg>
);
RoundedFileDownloadDoneIcon.displayName = 'RoundedFileDownloadDoneIcon';
export const FileDownloadDoneRoundedIcon = RoundedFileDownloadDoneIcon;

export const RoundedFileDownloadOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M9 6.17V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v5h1.59c.89 0 1.33 1.08.7 1.71l-1.88 1.88L9 6.17zm11.49 14.32L3.51 3.51A.996.996 0 1 0 2.1 4.92l4.5 4.5c-.26.37-.28.91.1 1.28l4.59 4.59c.35.35.88.37 1.27.09L15.17 18H6c-.55 0-1 .45-1 1s.45 1 1 1h11.17l1.9 1.9c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41z"/>
  </svg>
);
RoundedFileDownloadOffIcon.displayName = 'RoundedFileDownloadOffIcon';
export const FileDownloadOffRoundedIcon = RoundedFileDownloadOffIcon;

export const RoundedFileOpenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M13.17 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9v-6c0-1.1.9-2 2-2h3V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM13 8V3.5L18.5 9H14c-.55 0-1-.45-1-1zm9.66 9c0 .55-.45 1-1 1h-1.24l2.24 2.24a.996.996 0 1 1-1.41 1.41L19 19.41v1.24c0 .55-.45 1-1 1s-1-.45-1-1V17c0-.55.45-1 1-1h3.66c.55 0 1 .45 1 1z"/>
  </svg>
);
RoundedFileOpenIcon.displayName = 'RoundedFileOpenIcon';
export const FileOpenRoundedIcon = RoundedFileOpenIcon;

export const RoundedFileUploadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M7.4 10h1.59v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.7 3.7a.996.996 0 0 0-1.41 0L6.7 8.29c-.63.63-.19 1.71.7 1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/>
  </svg>
);
RoundedFileUploadIcon.displayName = 'RoundedFileUploadIcon';
export const FileUploadRoundedIcon = RoundedFileUploadIcon;

export const RoundedFolderIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10.59 4.59C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-1.41-1.41z"/>
  </svg>
);
RoundedFolderIcon.displayName = 'RoundedFolderIcon';
export const FolderRoundedIcon = RoundedFolderIcon;

export const RoundedFolderCopyIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2 6c-.55 0-1 .45-1 1v12c0 1.1.9 2 2 2h16c.55 0 1-.45 1-1s-.45-1-1-1H3V7c0-.55-.45-1-1-1z"/><path fill={color || 'currentColor'} d="M21 4h-7l-1.41-1.41c-.38-.38-.89-.59-1.42-.59H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
  </svg>
);
RoundedFolderCopyIcon.displayName = 'RoundedFolderCopyIcon';
export const FolderCopyRoundedIcon = RoundedFolderCopyIcon;

export const RoundedFolderDeleteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M16.5 15.5h-2v-4h2v4zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1.75 5.5H18v4c0 .83-.67 1.5-1.5 1.5h-2c-.83 0-1.5-.67-1.5-1.5v-4h-.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75v-.25c0-.41.34-.75.75-.75h.5c.41 0 .75.34.75.75V10h1.75c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  </svg>
);
RoundedFolderDeleteIcon.displayName = 'RoundedFolderDeleteIcon';
export const FolderDeleteRoundedIcon = RoundedFolderDeleteIcon;

export const RoundedFolderOffIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l.85.85c-.14.28-.23.59-.23.93L2 18c0 1.1.9 2 2 2h13.17l2.61 2.61a.996.996 0 1 0 1.41-1.41L2.81 2.81zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2z"/>
  </svg>
);
RoundedFolderOffIcon.displayName = 'RoundedFolderOffIcon';
export const FolderOffRoundedIcon = RoundedFolderOffIcon;

export const RoundedFolderOpenIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 12H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z"/>
  </svg>
);
RoundedFolderOpenIcon.displayName = 'RoundedFolderOpenIcon';
export const FolderOpenRoundedIcon = RoundedFolderOpenIcon;

export const RoundedFolderSharedIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"/>
  </svg>
);
RoundedFolderSharedIcon.displayName = 'RoundedFolderSharedIcon';
export const FolderSharedRoundedIcon = RoundedFolderSharedIcon;

export const RoundedFolderZipIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2v2h2v2z"/>
  </svg>
);
RoundedFolderZipIcon.displayName = 'RoundedFolderZipIcon';
export const FolderZipRoundedIcon = RoundedFolderZipIcon;

export const RoundedFormatOverlineIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1zm7 3c-3.87 0-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7s-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z"/>
  </svg>
);
RoundedFormatOverlineIcon.displayName = 'RoundedFormatOverlineIcon';
export const FormatOverlineRoundedIcon = RoundedFormatOverlineIcon;

export const RoundedGridViewIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M5 11h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0 10h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm8-16v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2zm2 16h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2z"/>
  </svg>
);
RoundedGridViewIcon.displayName = 'RoundedGridViewIcon';
export const GridViewRoundedIcon = RoundedGridViewIcon;

export const RoundedNewspaperIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M21.15 3.85l-.82.82l-.95-.96c-.39-.39-1.02-.39-1.42 0l-.96.96l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96l-.96-.96a.996.996 0 0 0-1.41 0l-.96.96l-.96-.96c-.39-.39-1.02-.39-1.42 0L7 4.67l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96l-.82-.82a.5.5 0 0 0-.85.36V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4.21a.5.5 0 0 0-.85-.36zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z"/>
  </svg>
);
RoundedNewspaperIcon.displayName = 'RoundedNewspaperIcon';
export const NewspaperRoundedIcon = RoundedNewspaperIcon;

export const RoundedRequestQuoteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zM14 13c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1c0 .55-.45 1-1 1s-1-.45-1-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h3v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-.55.45-1 1-1s1 .45 1 1h1c.55 0 1 .45 1 1s-.45 1-1 1h-3v1h3zm0-5c-.55 0-1-.45-1-1V3.5L17.5 8H14z"/>
  </svg>
);
RoundedRequestQuoteIcon.displayName = 'RoundedRequestQuoteIcon';
export const RequestQuoteRoundedIcon = RoundedRequestQuoteIcon;

export const RoundedRuleFolderIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM7.12 15.29l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71l2.83-2.83a.996.996 0 1 1 1.41 1.41L8.53 15.3c-.39.38-1.02.38-1.41-.01zM17.41 13l.88.88a.996.996 0 1 1-1.41 1.41l-.88-.88l-.88.88a.996.996 0 1 1-1.41-1.41l.88-.88l-.88-.88a.996.996 0 1 1 1.41-1.41l.88.88l.88-.88a.996.996 0 1 1 1.41 1.41l-.88.88z"/>
  </svg>
);
RoundedRuleFolderIcon.displayName = 'RoundedRuleFolderIcon';
export const RuleFolderRoundedIcon = RoundedRuleFolderIcon;

export const RoundedSnippetFolderIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M15.88 10.5l1.62 1.62v3.38h-3v-5h1.38zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h5.17c.53 0 1.04.21 1.41.59L12 6h8c1.1 0 2 .9 2 2zm-3 3.91c0-.27-.11-.52-.29-.71L16.8 9.29c-.19-.18-.45-.29-.71-.29H14c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4.09z"/>
  </svg>
);
RoundedSnippetFolderIcon.displayName = 'RoundedSnippetFolderIcon';
export const SnippetFolderRoundedIcon = RoundedSnippetFolderIcon;

export const RoundedTextSnippetIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M14.17 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM8 15h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zm0-4h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zm0-4h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
RoundedTextSnippetIcon.displayName = 'RoundedTextSnippetIcon';
export const TextSnippetRoundedIcon = RoundedTextSnippetIcon;

export const RoundedTopicIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7 10H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/>
  </svg>
);
RoundedTopicIcon.displayName = 'RoundedTopicIcon';
export const TopicRoundedIcon = RoundedTopicIcon;

export const RoundedUploadIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M10 16h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 3.7a.996.996 0 0 0-1.41 0L6.71 8.29c-.63.63-.19 1.71.7 1.71H9v5c0 .55.45 1 1 1zm-4 2h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1z"/>
  </svg>
);
RoundedUploadIcon.displayName = 'RoundedUploadIcon';
export const UploadRoundedIcon = RoundedUploadIcon;

export const RoundedUploadFileIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zM14.8 15H13v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H9.21c-.45 0-.67-.54-.35-.85l2.8-2.79c.2-.19.51-.19.71 0l2.79 2.79c.3.31.08.85-.36.85zM14 9c-.55 0-1-.45-1-1V3.5L18.5 9H14z"/>
  </svg>
);
RoundedUploadFileIcon.displayName = 'RoundedUploadFileIcon';
export const UploadFileRoundedIcon = RoundedUploadFileIcon;

export const RoundedWorkspacesIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', fillOpacity, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fill={color || 'currentColor'} d="M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4zm6-10C9.8 3 8 4.8 8 7s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4zm6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4z"/>
  </svg>
);
RoundedWorkspacesIcon.displayName = 'RoundedWorkspacesIcon';
export const WorkspacesRoundedIcon = RoundedWorkspacesIcon;

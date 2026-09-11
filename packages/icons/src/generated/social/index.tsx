import React from 'react';
import { IconProps } from '../../types';

// 1. Facebook
export const FacebookIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="11" fill="#1877F2" />
    <path d="M15.12 12.75L15.6 9.6H12.58V7.55C12.58 6.69 13 5.85 14.34 5.85H15.75V3.17C15.75 3.17 14.47 2.95 13.25 2.95C10.7 2.95 9.03 4.5 9.03 7.31V9.6H6.25V12.75H9.03V20.37C9.59 20.46 10.16 20.5 10.74 20.5C11.37 20.5 11.99 20.45 12.58 20.35V12.75H15.12Z" fill="white" />
  </svg>
);
FacebookIcon.displayName = 'FacebookIcon';

export const FacebookMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" fill={color} />
  </svg>
);
FacebookMonoIcon.displayName = 'FacebookMonoIcon';

// 2. TikTok
export const TiktokIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 5.2 1.83v-3.46a4.83 4.83 0 0 1-1.43-.43Z" fill="#000000" />
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-1.5v2.44a4.83 4.83 0 0 0 3.77 4.25v-2Z" fill="#25F4EE" />
    <path d="M12.37 15.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V11a6.34 6.34 0 0 0-3.17.84 2.89 2.89 0 0 0-2.31 4.64 2.89 2.89 0 0 0 5.2-1.74v-.07h2.31v1Z" fill="#FE2C55" />
  </svg>
);
TiktokIcon.displayName = 'TiktokIcon';

export const TiktokMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 5.2 1.83v-3.46a4.83 4.83 0 0 1-1.43-.43Z" fill={color} />
  </svg>
);
TiktokMonoIcon.displayName = 'TiktokMonoIcon';

// 3. Google
export const GoogleIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);
GoogleIcon.displayName = 'GoogleIcon';

export const GoogleMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill={color} />
  </svg>
);
GoogleMonoIcon.displayName = 'GoogleMonoIcon';

// 4. YouTube
export const YoutubeIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
  </svg>
);
YoutubeIcon.displayName = 'YoutubeIcon';

export const YoutubeMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568l6.273-3.568-6.273-3.568v7.136z" fill={color} />
  </svg>
);
YoutubeMonoIcon.displayName = 'YoutubeMonoIcon';

// 5. Twitter / X
export const TwitterIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#000000" />
  </svg>
);
TwitterIcon.displayName = 'TwitterIcon';

export const TwitterMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill={color} />
  </svg>
);
TwitterMonoIcon.displayName = 'TwitterMonoIcon';

// 6. Behance
export const BehanceIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M7.79 10.74c.91-.4 1.45-1.18 1.45-2.22 0-2.03-1.63-2.92-3.8-2.92H1v12.8h4.74c2.4 0 4.18-1.04 4.18-3.32 0-1.89-1.25-2.78-2.13-3.14zm-4.14-3.1h1.56c1.17 0 1.93.42 1.93 1.5 0 1-.77 1.49-1.93 1.49H3.65V7.64zm1.74 8.68H3.65V12.1h1.82c1.35 0 2.22.51 2.22 1.68 0 1.25-.92 1.74-2.3 1.74zm11.39-7.27c-3.18 0-5.18 2.24-5.18 5.25 0 3.19 1.96 5.3 5.3 5.3 2.37 0 4.07-1.15 4.74-3.12h-2.33c-.37.76-1.19 1.15-2.32 1.15-1.58 0-2.61-.95-2.73-2.45h7.52c.07-.36.09-.7.09-1.05 0-3.04-1.88-5.08-5.09-5.08zm-2.58 4.14c.2-1.35 1.13-2.2 2.5-2.2 1.34 0 2.25.86 2.38 2.2h-4.88zm.27-5.59h4.63V5.1h-4.63v1.5z" fill="#0057FF" />
  </svg>
);
BehanceIcon.displayName = 'BehanceIcon';

export const BehanceMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M7.79 10.74c.91-.4 1.45-1.18 1.45-2.22 0-2.03-1.63-2.92-3.8-2.92H1v12.8h4.74c2.4 0 4.18-1.04 4.18-3.32 0-1.89-1.25-2.78-2.13-3.14zm-4.14-3.1h1.56c1.17 0 1.93.42 1.93 1.5 0 1-.77 1.49-1.93 1.49H3.65V7.64zm1.74 8.68H3.65V12.1h1.82c1.35 0 2.22.51 2.22 1.68 0 1.25-.92 1.74-2.3 1.74zm11.39-7.27c-3.18 0-5.18 2.24-5.18 5.25 0 3.19 1.96 5.3 5.3 5.3 2.37 0 4.07-1.15 4.74-3.12h-2.33c-.37.76-1.19 1.15-2.32 1.15-1.58 0-2.61-.95-2.73-2.45h7.52c.07-.36.09-.7.09-1.05 0-3.04-1.88-5.08-5.09-5.08zm-2.58 4.14c.2-1.35 1.13-2.2 2.5-2.2 1.34 0 2.25.86 2.38 2.2h-4.88zm.27-5.59h4.63V5.1h-4.63v1.5z" fill={color} />
  </svg>
);
BehanceMonoIcon.displayName = 'BehanceMonoIcon';

// 7. Pinterest
export const PinterestIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="11" fill="#E60023" />
    <path d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 3.18 1.98 5.9 4.79 6.99-.07-.59-.13-1.5.03-2.15.14-.59.93-3.95.93-3.95s-.24-.48-.24-1.18c0-1.11.64-1.94 1.44-1.94.68 0 1.01.51 1.01 1.12 0 .68-.44 1.71-.66 2.66-.19.79.4 1.44 1.18 1.44 1.41 0 2.5-1.49 2.5-3.64 0-1.9-1.37-3.23-3.32-3.23-2.26 0-3.59 1.7-3.59 3.45 0 .68.26 1.42.59 1.81.07.08.08.15.06.23-.06.26-.2.83-.23.95-.04.15-.13.18-.3.11-1.12-.52-1.82-2.16-1.82-3.48 0-2.83 2.06-5.43 5.93-5.43 3.11 0 5.53 2.22 5.53 5.18 0 3.09-1.95 5.58-4.65 5.58-.91 0-1.76-.47-2.06-1.03l-.56 2.14c-.2.78-.75 1.75-1.12 2.35.84.26 1.74.4 2.68.4 4.14 0 7.5-3.36 7.5-7.5S16.14 4.5 12 4.5z" fill="#FFFFFF" />
  </svg>
);
PinterestIcon.displayName = 'PinterestIcon';

export const PinterestMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.98-.12-2.49.03-3.56l1.55-6.57s-.4-.8-.4-1.97c0-1.85 1.07-3.23 2.4-3.23 1.13 0 1.68.85 1.68 1.87 0 1.14-.72 2.84-1.1 4.42-.31 1.32.66 2.4 1.96 2.4 2.35 0 4.16-2.48 4.16-6.06 0-3.17-2.28-5.38-5.53-5.38-3.77 0-5.98 2.83-5.98 5.75 0 1.14.44 2.36.99 3.02.11.13.12.25.09.38l-.37 1.54c-.06.25-.2.3-.46.18-1.73-.8-2.81-3.32-2.81-5.35 0-4.35 3.16-8.35 9.12-8.35 4.79 0 8.51 3.41 8.51 7.97 0 4.76-3 8.59-7.16 8.59-1.4 0-2.72-.73-3.17-1.59l-.86 3.29c-.31 1.2-1.16 2.7-1.73 3.63A12 12 0 1 0 12 0z" fill={color} />
  </svg>
);
PinterestMonoIcon.displayName = 'PinterestMonoIcon';

// 8. Threads
export const ThreadsIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.88 12.82c-.52 2.1-2.18 3.1-4.38 3.1-2.64 0-4.66-1.76-4.66-4.64 0-2.82 2.05-4.66 4.74-4.66 2.65 0 4.29 1.63 4.29 4.09 0 .42-.05.86-.14 1.34h-6.7c.18 1.48 1.25 2.34 2.57 2.34 1.09 0 1.94-.52 2.27-1.53h2.01zm-4.33-4.94c-1.28 0-2.19.86-2.39 2.17h4.74c-.16-1.3-.98-2.17-2.35-2.17z" fill="#000000" />
  </svg>
);
ThreadsIcon.displayName = 'ThreadsIcon';

export const ThreadsMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.88 12.82c-.52 2.1-2.18 3.1-4.38 3.1-2.64 0-4.66-1.76-4.66-4.64 0-2.82 2.05-4.66 4.74-4.66 2.65 0 4.29 1.63 4.29 4.09 0 .42-.05.86-.14 1.34h-6.7c.18 1.48 1.25 2.34 2.57 2.34 1.09 0 1.94-.52 2.27-1.53h2.01zm-4.33-4.94c-1.28 0-2.19.86-2.39 2.17h4.74c-.16-1.3-.98-2.17-2.35-2.17z" fill={color} />
  </svg>
);
ThreadsMonoIcon.displayName = 'ThreadsMonoIcon';

// 9. GitHub
export const GithubIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" fill="#24292F" />
  </svg>
);
GithubIcon.displayName = 'GithubIcon';

export const GithubMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" fill={color} />
  </svg>
);
GithubMonoIcon.displayName = 'GithubMonoIcon';

// 10. Apple
export const AppleIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.83 1.11-1.98.99-3.13-1 .04-2.2.66-2.91 1.49-.62.72-1.16 1.88-1.02 3 1.11.09 2.28-.53 2.94-1.36z" fill="#000000" />
  </svg>
);
AppleIcon.displayName = 'AppleIcon';

export const AppleMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.83 1.11-1.98.99-3.13-1 .04-2.2.66-2.91 1.49-.62.72-1.16 1.88-1.02 3 1.11.09 2.28-.53 2.94-1.36z" fill={color} />
  </svg>
);
AppleMonoIcon.displayName = 'AppleMonoIcon';

// 11. WhatsApp
export const WhatsappIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="11" fill="#25D366" />
    <path d="M17.5 14.33c-.28-.14-1.63-.8-1.89-.89-.25-.09-.44-.14-.62.14-.19.28-.72.89-.88 1.08-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.62-1.5-.86-2.06-.23-.54-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.42 0 1.43 1.04 2.81 1.19 3 .14.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.66.61.7.22 1.34.19 1.84.11.56-.08 1.63-.67 1.86-1.31.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" fill="#FFFFFF" />
  </svg>
);
WhatsappIcon.displayName = 'WhatsappIcon';

export const WhatsappMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.46 12.33c-.28-.14-1.63-.8-1.89-.89-.25-.09-.44-.14-.62.14-.19.28-.72.89-.88 1.08-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.62-1.5-.86-2.06-.23-.54-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.42 0 1.43 1.04 2.81 1.19 3 .14.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.66.61.7.22 1.34.19 1.84.11.56-.08 1.63-.67 1.86-1.31.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" fill={color} />
  </svg>
);
WhatsappMonoIcon.displayName = 'WhatsappMonoIcon';

// 12. Figma
export const FigmaIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M8.5 12a3.5 3.5 0 1 1 0-7H12v7H8.5z" fill="#F24E1E" />
    <path d="M12 5h3.5a3.5 3.5 0 0 1 0 7H12V5z" fill="#FF7262" />
    <path d="M12 12h3.5a3.5 3.5 0 0 1 0 7H12v-7z" fill="#1ABCFE" />
    <path d="M8.5 22.5A3.5 3.5 0 0 1 5 19a3.5 3.5 0 0 1 3.5-3.5H12v3.5a3.5 3.5 0 0 1-3.5 3.5z" fill="#0ACF83" />
    <path d="M5 15.5A3.5 3.5 0 0 1 8.5 12H12v7H8.5A3.5 3.5 0 0 1 5 15.5z" fill="#A259FF" />
  </svg>
);
FigmaIcon.displayName = 'FigmaIcon';

export const FigmaMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M8.5 12a3.5 3.5 0 1 1 0-7H12v7H8.5zm3.5-7h3.5a3.5 3.5 0 0 1 0 7H12V5zm0 7h3.5a3.5 3.5 0 0 1 0 7H12v-7zm-3.5 10.5A3.5 3.5 0 0 1 5 19a3.5 3.5 0 0 1 3.5-3.5H12v3.5a3.5 3.5 0 0 1-3.5 3.5zm-3.5-7A3.5 3.5 0 0 1 8.5 12H12v7H8.5A3.5 3.5 0 0 1 5 15.5z" fill={color} />
  </svg>
);
FigmaMonoIcon.displayName = 'FigmaMonoIcon';

// 13. Reddit
export const RedditIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="11" fill="#FF4500" />
    <path d="M19.5 12a1.5 1.5 0 0 0-2.5-1.1 6.55 6.55 0 0 0-4.25-1.28l.8-3.76 2.61.56a1.25 1.25 0 1 0 1.25-1.25c-.43 0-.8.22-1.03.54l-2.9-.62a.31.31 0 0 0-.37.23l-.93 4.34c-1.63.04-3.13.51-4.28 1.28A1.5 1.5 0 0 0 4.5 12c0 .59.34 1.1.84 1.34a3.86 3.86 0 0 0-.09.84c0 2.48 2.91 4.5 6.5 4.5s6.5-2.02 6.5-4.5c0-.29-.03-.57-.09-.84.5-.24.84-.75.84-1.34zm-10.5.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 2.75c-.75.75-2.18.8-3 .8s-2.25-.05-3-.8a.31.31 0 0 1 .44-.44c.54.54 1.69.62 2.56.62.88 0 2.03-.08 2.56-.62a.31.31 0 0 1 .44.44zm-.75-3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFFFFF" />
  </svg>
);
RedditIcon.displayName = 'RedditIcon';

export const RedditMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm7.5 12a1.5 1.5 0 0 1-.84 1.34c.06.27.09.55.09.84 0 2.48-2.91 4.5-6.5 4.5s-6.5-2.02-6.5-4.5c0-.29.03-.57.09-.84A1.5 1.5 0 0 1 4.5 12a1.5 1.5 0 0 1 2.5-1.1 6.55 6.55 0 0 1 4.28-1.28l.93-4.34a.31.31 0 0 1 .37-.23l2.9.62c.23-.32.6-.54 1.03-.54a1.25 1.25 0 1 1-1.25 1.25l-2.61-.56-.8 3.76a6.55 6.55 0 0 1 4.25 1.28A1.5 1.5 0 0 1 19.5 12zm-10.5.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 2.75a.31.31 0 0 0-.44-.44c-.53.54-1.68.62-2.56.62-.87 0-2.02-.08-2.56-.62a.31.31 0 0 0-.44.44c.75.75 2.18.8 3 .8s2.25-.05 3-.8zm-.75-3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill={color} />
  </svg>
);
RedditMonoIcon.displayName = 'RedditMonoIcon';

// 14. Discord
export const DiscordIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2" />
  </svg>
);
DiscordIcon.displayName = 'DiscordIcon';

export const DiscordMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill={color} />
  </svg>
);
DiscordMonoIcon.displayName = 'DiscordMonoIcon';

// 15. Instagram
export const InstagramIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <defs>
      <linearGradient id="igGradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#F77737" />
        <stop offset="50%" stopColor="#FD1D1D" />
        <stop offset="75%" stopColor="#E1306C" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igGradient)" />
    <circle cx="12" cy="12" r="4.5" stroke="#FFFFFF" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="#FFFFFF" />
  </svg>
);
InstagramIcon.displayName = 'InstagramIcon';

export const InstagramMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="12" r="4.5" stroke={color} strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill={color} />
  </svg>
);
InstagramMonoIcon.displayName = 'InstagramMonoIcon';

// 16. Telegram
export const TelegramIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="11" fill="#229ED9" />
    <path d="M17.43 6.64L5.61 11.23c-.81.32-.8.78-.15.98l3.03.95 7.03-4.44c.33-.2.64-.09.39.13l-5.7 5.14-.21 3.12c.31 0 .44-.14.61-.31l1.47-1.43 3.05 2.25c.56.31.97.15 1.11-.52l2-9.42c.2-.82-.31-1.19-.84-.47z" fill="#FFFFFF" />
  </svg>
);
TelegramIcon.displayName = 'TelegramIcon';

export const TelegramMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.43 6.64l-2 9.42c-.14.67-.55.83-1.11.52l-3.05-2.25-1.47 1.43c-.17.17-.3.31-.61.31l.21-3.12 5.7-5.14c.25-.22-.06-.33-.39-.13l-7.03 4.44-3.03-.95c-.65-.2-.66-.66.15-.98l11.82-4.59c.53-.72 1.04-.35.81.47z" fill={color} />
  </svg>
);
TelegramMonoIcon.displayName = 'TelegramMonoIcon';

// 17. LinkedIn
export const LinkedinIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
    <path d="M6.94 9.09H4.25V18h2.69V9.09zM5.59 4.5A1.56 1.56 0 1 0 5.6 7.62 1.56 1.56 0 0 0 5.59 4.5zM19.75 18v-4.9c0-2.62-1.4-3.84-3.27-3.84-1.51 0-2.18.83-2.56 1.41V9.09h-2.69c.04.76 0 8.91 0 8.91h2.69v-4.98c0-.27.02-.53.1-.72.22-.53.7-.1.08 1.52-1.08 1.08 0 1.52.82 1.52 2.03V18h2.69z" fill="#FFFFFF" />
  </svg>
);
LinkedinIcon.displayName = 'LinkedinIcon';

export const LinkedinMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.4 9.74V9.94H5.06v8.56z" fill={color} />
  </svg>
);
LinkedinMonoIcon.displayName = 'LinkedinMonoIcon';

// 18. Spotify
export const SpotifyIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="11" fill="#1ED760" />
    <path d="M16.5 15.42a.66.66 0 0 1-.92.21c-2.52-1.54-5.7-1.89-9.45-1.03a.66.66 0 1 1-.3-1.28c4.1-.94 7.63-.54 10.46 1.18.32.2.42.61.21.92zm1.26-2.8a.83.83 0 0 1-1.15.27c-2.89-1.78-7.3-2.3-10.72-1.26a.83.83 0 1 1-.48-1.59c3.9-1.18 8.77-.61 12.08 1.43.39.24.52.75.27 1.15zm.13-2.92c-3.46-2.06-9.17-2.25-12.5-1.24a1 1 0 0 1-.58-1.91c3.83-1.16 10.13-.94 14.12 1.43a1 1 0 0 1-.34 1.88c-.24 0-.47-.06-.7-.16z" fill="#000000" />
  </svg>
);
SpotifyIcon.displayName = 'SpotifyIcon';

export const SpotifyMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.3c-.22.35-.68.46-1.02.24-2.8-1.71-6.32-2.1-10.47-1.15-.39.09-.78-.15-.87-.54-.09-.39.15-.78.54-.87 4.55-1.04 8.44-.6 11.58 1.3.34.22.46.68.24 1.02zm1.48-3.26c-.28.45-.87.59-1.32.31-3.21-1.97-8.11-2.54-11.91-1.39-.5.15-1.03-.13-1.18-.63-.15-.5.13-1.03.63-1.18 4.35-1.32 9.75-.68 13.47 1.6.45.27.59.86.31 1.29zm.13-3.37C15.28 8.39 8.94 8.18 5.25 9.3c-.6.18-1.24-.16-1.42-.76-.18-.6.16-1.24.76-1.42 4.25-1.29 11.26-1.04 15.69 1.59.54.32.72 1.03.4 1.57-.32.54-1.03.72-1.57.39z" fill={color} />
  </svg>
);
SpotifyMonoIcon.displayName = 'SpotifyMonoIcon';

// 19. Twitch
export const TwitchIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.149 0L.537 4.119v16.446h5.373V24l3.76-3.435h3.763L23.463 10.53V0H2.149zm19.165 9.697l-3.224 3.224h-4.298l-2.687 2.687v-2.687H6.448V2.149h14.866v7.548zM17.015 4.836h-2.149V9.67h2.149V4.836zm-5.373 0H9.493V9.67h2.149V4.836z" fill="#9146FF" />
  </svg>
);
TwitchIcon.displayName = 'TwitchIcon';

export const TwitchMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.149 0L.537 4.119v16.446h5.373V24l3.76-3.435h3.763L23.463 10.53V0H2.149zm19.165 9.697l-3.224 3.224h-4.298l-2.687 2.687v-2.687H6.448V2.149h14.866v7.548zM17.015 4.836h-2.149V9.67h2.149V4.836zm-5.373 0H9.493V9.67h2.149V4.836z" fill={color} />
  </svg>
);
TwitchMonoIcon.displayName = 'TwitchMonoIcon';

// 20. Messenger
export const MessengerIcon: React.FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="12" cy="12" r="11" fill="#0084FF" />
    <path d="M12 4.5C7.86 4.5 4.5 7.55 4.5 11.31c0 2.14 1.09 4.05 2.8 5.31V19.5l2.76-1.52c.62.17 1.27.27 1.94.27 4.14 0 7.5-3.05 7.5-6.81C19.5 7.55 16.14 4.5 12 4.5zm.77 9.17l-1.96-2.09-3.82 2.09 4.2-4.46 2.01 2.09 3.77-2.09-4.2 4.46z" fill="#FFFFFF" />
  </svg>
);
MessengerIcon.displayName = 'MessengerIcon';

export const MessengerMonoIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 2C6.48 2 2 6.07 2 11.08c0 2.85 1.45 5.4 3.73 7.08V22l3.68-2.02c.83.23 1.7.35 2.59.35 5.52 0 10-4.07 10-9.08S17.52 2 12 2zm1.03 12.23l-2.61-2.79-5.1 2.79 5.6-5.95 2.68 2.79 5.03-2.79-5.6 5.95z" fill={color} />
  </svg>
);
MessengerMonoIcon.displayName = 'MessengerMonoIcon';

import React, { useState } from 'react';
import { UserIcon } from '@spectra/icons';
import * as styles from './Avatar.css';

export type AvatarStatus =
  | 'online'
  | 'offline'
  | 'busy'
  | 'away'
  | 'dnd'
  | 'in-meeting'
  | 'meeting'
  | 'focus'
  | 'idle'
  | 'invisible'
  | 'streaming';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  status?: AvatarStatus;
  className?: string;
}

function getInitials(name?: string): string {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const statusClassMap: Record<AvatarStatus, string> = {
  online: styles.online,
  offline: styles.offline,
  busy: styles.busy,
  away: styles.away,
  dnd: styles.dnd,
  'in-meeting': styles.inMeeting,
  meeting: styles.inMeeting,
  focus: styles.focus,
  idle: styles.idle,
  invisible: styles.invisible,
  streaming: styles.streaming,
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  className,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const initials = getInitials(name);
  const iconSize = size === 'xs' ? 12 : size === 'sm' ? 16 : size === 'lg' ? 24 : size === 'xl' ? 32 : 20;

  const showImage = src && !hasError;

  return (
    <div
      role="img"
      aria-label={alt || name || 'Avatar'}
      className={`${styles.avatar} ${styles[shape]} ${styles[size]} ${className || ''}`}
      {...props}
    >
      <div className={styles.inner}>
        {showImage ? (
          <img
            src={src}
            alt=""
            aria-hidden="true"
            onError={() => setHasError(true)}
            className={styles.image}
          />
        ) : initials ? (
          <span>{initials}</span>
        ) : (
          <UserIcon size={iconSize} color="currentColor" />
        )}
      </div>

      {status && (
        <span
          data-status={status}
          className={`${styles.statusDot} ${styles[`status${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles]} ${statusClassMap[status] || styles.offline}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

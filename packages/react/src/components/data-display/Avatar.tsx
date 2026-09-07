import React, { useState } from 'react';
import { UserIcon } from '@spectra/icons';
import * as styles from './Avatar.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
}

function getInitials(name?: string): string {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

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

      {status && (
        <span
          data-status={status}
          className={`${styles.statusDot} ${styles[`status${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles]} ${styles[status]}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

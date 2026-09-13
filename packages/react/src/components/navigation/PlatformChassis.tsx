import React, { forwardRef, ReactNode } from 'react';

export type ChassisPlatform = 'web' | 'ios' | 'android' | 'macos' | 'windows';

export interface PlatformChassisProps extends React.ComponentPropsWithoutRef<'div'> {
  platform?: ChassisPlatform;
  title?: string;
  url?: string;
  children?: ReactNode;
}

/**
 * PlatformChassis - Interactive multi-platform device simulator frame.
 * Faithfully mirrors native chassis chrome across Web, iOS, Android, macOS, and Windows.
 */
export const PlatformChassis = forwardRef<HTMLDivElement, PlatformChassisProps>(
  (
    {
      platform = 'web',
      title = 'Spectra UI Application',
      url = 'https://spectra-ui.internal',
      children,
      style,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          borderRadius: platform === 'ios' ? 40 : platform === 'android' ? 28 : 10,
          border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))',
          backgroundColor: 'var(--color-surface, #0f172a)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: platform === 'ios' || platform === 'android' ? 340 : '100%',
          width: '100%',
          margin: '0 auto',
          transition: 'all 0.3s ease',
          ...style,
        }}
        {...rest}
      >
        {/* macOS Desktop Chrome */}
        {platform === 'macos' && (
          <div
            style={{
              height: 38,
              padding: '0 14px',
              backgroundColor: 'var(--color-surface-elevated, #1e293b)',
              borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-text-muted, #94a3b8)' }}>{title}</span>
            <div style={{ width: 45 }} />
          </div>
        )}

        {/* Windows 11 Mica Chrome */}
        {platform === 'windows' && (
          <div
            style={{
              height: 36,
              padding: '0 12px 0 16px',
              backgroundColor: 'var(--color-surface-elevated, #1e293b)',
              borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-text-primary, #ffffff)' }}>{title}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <svg width="10" height="1" viewBox="0 0 10 1" fill="currentColor">
                <rect width="10" height="1" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="0.5" y="0.5" width="9" height="9" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
                <line x1="1" y1="1" x2="9" y2="9" />
                <line x1="9" y1="1" x2="1" y2="9" />
              </svg>
            </div>
          </div>
        )}

        {/* Web Browser Chrome */}
        {platform === 'web' && (
          <div
            style={{
              padding: '8px 14px',
              backgroundColor: 'var(--color-surface-elevated, #1e293b)',
              borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: 6,
                padding: '4px 10px',
                fontSize: 12,
                fontFamily: 'monospace',
                color: 'var(--color-text-muted, #94a3b8)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>{url}</span>
            </div>
          </div>
        )}

        {/* iOS Native Status Bar + Dynamic Island */}
        {platform === 'ios' && (
          <div
            style={{
              height: 48,
              padding: '0 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'transparent',
              position: 'relative',
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>9:41</span>
            {/* Dynamic Island pill */}
            <div
              style={{
                width: 90,
                height: 26,
                backgroundColor: '#000000',
                borderRadius: 14,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: 8,
              }}
            />
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                <path d="M0 8h2v2H0zM3 6h2v4H3zM6 4h2v6H6zM9 2h2v8H9zM12 0h2v10h-2z" />
              </svg>
              <svg width="18" height="10" viewBox="0 0 22 11" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="0.75" y="0.75" width="18" height="9.5" rx="2.5" />
                <rect x="2.5" y="2.5" width="12" height="6" rx="1" fill="currentColor" />
                <path d="M20 4v3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        )}

        {/* Android Native Status Bar */}
        {platform === 'android' && (
          <div
            style={{
              height: 36,
              padding: '0 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'transparent',
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff' }}>10:30</span>
            {/* Camera cutout */}
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: '#000000',
                borderRadius: '50%',
              }}
            />
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C7.5 3 3.75 4.8 1 7.7L12 21 23 7.7C20.25 4.8 16.5 3 12 3z" />
              </svg>
              <svg width="10" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.34C7 21.4 7.6 22 8.33 22h7.34c.73 0 1.33-.6 1.33-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
              </svg>
            </div>
          </div>
        )}

        {/* Chassis Viewport Body */}
        <div
          style={{
            flex: 1,
            padding: platform === 'ios' || platform === 'android' ? 16 : 24,
            overflowY: 'auto',
          }}
        >
          {children}
        </div>

        {/* iOS Home Indicator */}
        {platform === 'ios' && (
          <div style={{ height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 110, height: 4, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.4)' }} />
          </div>
        )}

        {/* Android Navigation Pill */}
        {platform === 'android' && (
          <div style={{ height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 72, height: 3, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.3)' }} />
          </div>
        )}
      </div>
    );
  }
);

PlatformChassis.displayName = 'PlatformChassis';

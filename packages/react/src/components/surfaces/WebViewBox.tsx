import React, { useState, forwardRef } from 'react';
import { ExternalLinkIcon, SpinnerIcon, GlobeIcon } from '@winplaybox/icons';

export interface WebViewBoxProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  /**
   * Optional header title displayed above the web preview.
   */
  title?: string;
  /**
   * Target URL to display.
   */
  src?: string;
  /**
   * Raw HTML content to display inside the frame.
   */
  srcDoc?: string;
  /**
   * Whether to show an optional address / header bar.
   * Defaults to false.
   */
  showHeader?: boolean;
  /**
   * Height of the web frame. Defaults to '500px'.
   */
  height?: number | string;
  /**
   * Container style overrides.
   */
  containerStyle?: React.CSSProperties;
}

/**
 * Universal WebViewBox component for Web React applications.
 * Provides a responsive, sandboxed web frame container with Spectra tokens,
 * theme-aligned loading indicators, and external navigation actions.
 */
export const WebViewBox = forwardRef<HTMLIFrameElement, WebViewBoxProps>(
  (
    {
      src,
      srcDoc,
      title = 'Web View',
      showHeader = false,
      height = '500px',
      sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups',
      className,
      style,
      containerStyle,
      ...iframeProps
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
      setIsLoading(false);
      iframeProps.onLoad?.(e);
    };

    return (
      <div
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          borderRadius: 'var(--radius-component-lg, 12px)',
          border: '1px solid var(--color-border-default, #e5e7eb)',
          backgroundColor: 'var(--color-surface, #ffffff)',
          overflow: 'hidden',
          position: 'relative',
          ...containerStyle,
        }}
      >
        {/* Optional Header / Address bar */}
        {showHeader && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px',
              backgroundColor: 'var(--color-surface-raised, #f9fafb)',
              borderBottom: '1px solid var(--color-border-subtle, #f3f4f6)',
              fontSize: 'var(--font-size-body-sm, 13px)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-text-secondary, #6b7280)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GlobeIcon size={14} color="currentColor" />
              </span>
              <span
                style={{
                  fontWeight: 'var(--font-weight-medium, 500)',
                  color: 'var(--color-text-primary, #111827)',
                }}
              >
                {title}
              </span>
              {src && (
                <span
                  style={{
                    color: 'var(--color-text-tertiary, #9ca3af)',
                    fontSize: '12px',
                  }}
                >
                  ({src})
                </span>
              )}
            </div>

            {src && (
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in new tab"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px',
                  borderRadius: '4px',
                  color: 'var(--color-text-secondary, #6b7280)',
                  textDecoration: 'none',
                }}
              >
                <ExternalLinkIcon size={14} color="currentColor" />
              </a>
            )}
          </div>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div
            role="status"
            aria-live="polite"
            style={{
              position: 'absolute',
              top: showHeader ? '45px' : 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              backgroundColor: 'var(--color-surface, #ffffff)',
              zIndex: 5,
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'spectra-spin 1s linear infinite',
              }}
            >
              <SpinnerIcon size={24} color="var(--color-primary-default, #2563eb)" />
            </div>
            <span
              style={{
                fontSize: 'var(--font-size-body-sm, 14px)',
                color: 'var(--color-text-secondary, #6b7280)',
              }}
            >
              Loading content...
            </span>
          </div>
        )}

        {/* Iframe View */}
        <iframe
          ref={ref}
          src={src}
          srcDoc={srcDoc}
          title={title}
          sandbox={sandbox}
          onLoad={handleLoad}
          style={{
            width: '100%',
            height,
            border: 'none',
            display: 'block',
            backgroundColor: 'var(--color-surface, #ffffff)',
            ...style,
          }}
          {...iframeProps}
        />
      </div>
    );
  }
);

WebViewBox.displayName = 'WebViewBox';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  GlobeIcon,
  SmartphoneIcon,
  SparklesIcon,
  LightningIcon,
  CubeIcon,
  CopyIcon,
  CheckIcon,
  FocusTargetIcon,
  RotateCcwIcon,
  MoreVerticalIcon,
  ExternalLinkIcon,
  CodeIcon,
} from '@spectra/icons';
import { openInCodeSandbox, openInStackBlitz, openInExpoSnack, toJavaScript } from '../../utils/sandbox';
import { compileAndRender } from '../../utils/liveCompiler';
import { useVersion } from '../../context/VersionContext';
import { usePlatform } from '../../context/PlatformContext';
import { useColorScheme } from '@spectra/react';
import { EditableCodeBlock } from './EditableCodeBlock';
import { EditInChatModal } from './EditInChatModal';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackKey: any;
  fallbackElement?: React.ReactNode;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string | null;
}

class LiveErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true, errorMessage: error?.message || 'Component runtime error' };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (prevProps.fallbackKey !== this.props.fallbackKey && this.state.hasError) {
      this.setState({ hasError: false, errorMessage: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 8,
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#EF4444',
            fontSize: 12,
            fontFamily: "'JetBrains Mono', Consolas, monospace",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            width: '100%',
            maxWidth: 500,
          }}
        >
          <span>Runtime Error: {this.state.errorMessage}</span>
          {this.props.onReset && (
            <button
              onClick={this.props.onReset}
              style={{
                padding: '4px 10px',
                borderRadius: 4,
                border: '1px solid rgba(239, 68, 68, 0.4)',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#EF4444',
                cursor: 'pointer',
                fontSize: 11,
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              Reset demo
            </button>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export const GITHUB_REPO_URL = 'https://github.com/Winplaybox/spectra-ui';

/**
 * Extracts concise JSX snippet from full component code for the collapsed preview
 */
export function extractCompactCode(code: string): string {
  // Find return ( ... ) inside component function
  const match = code.match(/return\s*\(\s*([\s\S]*?)\s*\);?\s*(\}\s*)?$/);
  if (!match) return code;

  let inner = match[1].trim();

  // If outer element is a simple wrapper like <div> or <View> or <Stack>, extract inner children
  const wrapperRegex = /^<([A-Za-z0-9_]+)(?:\s+[^>]*)?>\s*([\s\S]*?)\s*<\/\1>$/;
  const wrapperMatch = inner.match(wrapperRegex);
  if (wrapperMatch && ['div', 'View', 'Stack', 'Box', 'Group'].includes(wrapperMatch[1])) {
    const children = wrapperMatch[2].trim();
    if (children) {
      inner = children;
    }
  }

  // Remove common leading whitespace
  const lines = inner.split('\n');
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^(\s*)/)?.[1].length || 0);
  const minIndent = indents.length > 0 ? Math.min(...indents) : 0;

  return lines
    .map((line) => (line.length >= minIndent ? line.slice(minIndent) : line))
    .join('\n');
}

export interface ComponentDemoCardProps {
  id: string;
  title: string;
  description: string;
  webPreview: React.ReactNode;
  nativePreview: React.ReactNode;
  webCode: string;
  nativeCode: string;
  compactCode?: string;
  componentId?: string;
}

export const ComponentDemoCard: React.FC<ComponentDemoCardProps> = ({
  id,
  title,
  description,
  webPreview,
  nativePreview,
  webCode,
  nativeCode,
  compactCode,
  componentId,
}) => {
  const { currentVersion, getGitHubUrl } = useVersion();
  const { currentPlatform } = usePlatform();
  const platform = currentPlatform === 'web' ? 'web' : 'native';
  const [codeLang, setCodeLang] = useState<'ts' | 'js'>('ts');
  const [isExpanded, setIsExpanded] = useState(false);
  const [editedFullCodeTs, setEditedFullCodeTs] = useState<string | null>(null);
  const [editedFullCodeJs, setEditedFullCodeJs] = useState<string | null>(null);
  const [editedCompactCode, setEditedCompactCode] = useState<string | null>(null);

  const { colorScheme } = useColorScheme();
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);
  const [demoKey, setDemoKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const previewContainerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Compute base code
  const activeRawCode = platform === 'web' ? webCode : nativeCode;
  const defaultFullCodeTs = activeRawCode;
  const defaultFullCodeJs = toJavaScript(activeRawCode);
  const currentFullCode = codeLang === 'ts'
    ? (editedFullCodeTs !== null ? editedFullCodeTs : defaultFullCodeTs)
    : (editedFullCodeJs !== null ? editedFullCodeJs : defaultFullCodeJs);

  const defaultCompactCode = compactCode || extractCompactCode(defaultFullCodeTs);
  const currentCompactCode = editedCompactCode !== null ? editedCompactCode : defaultCompactCode;

  const currentDisplayCode = isExpanded ? currentFullCode : currentCompactCode;

  // Derive component key for GitHub and routes
  let compKey = componentId || id.split('-')[0] || 'button';
  if (id.startsWith('input-') || id.startsWith('text-input')) compKey = 'text-input';
  else if (id.startsWith('radio-')) compKey = 'radio';
  else if (id.startsWith('select-')) compKey = 'select';
  else if (id.startsWith('check-') || id.startsWith('checkbox-')) compKey = 'checkbox';
  else if (id.startsWith('switch-')) compKey = 'switch';
  else if (id.startsWith('tab-') || id.startsWith('tabs-')) compKey = 'tabs';
  else if (id.startsWith('avatar-')) compKey = 'avatar';
  else if (id.startsWith('badge-')) compKey = 'badge';
  else if (id.startsWith('chip-')) compKey = 'chip';
  else if (id.startsWith('list-')) compKey = 'list';
  else if (id.startsWith('accordion-')) compKey = 'accordion';
  else if (id.startsWith('card-')) compKey = 'card';
  else if (id.startsWith('dialog-')) compKey = 'dialog';
  else if (id.startsWith('tooltip-')) compKey = 'tooltip';
  else if (id.startsWith('alert-')) compKey = 'alert';
  else if (id.startsWith('spinner-')) compKey = 'spinner';
  else if (id.startsWith('skeleton-')) compKey = 'skeleton';
  else if (id.startsWith('divider-')) compKey = 'divider';
  else if (id.startsWith('breadcrumbs-')) compKey = 'breadcrumbs';

  const githubSourceUrl = getGitHubUrl(compKey, platform);

  // Whether user has made any in-place edits to code
  const isCodeModified = isExpanded
    ? (codeLang === 'ts' ? editedFullCodeTs !== null : editedFullCodeJs !== null)
    : editedCompactCode !== null;

  // Dynamic Real-Time Compilation via Sucrase for instant live updates on edit
  const { Component: DynamicComponent, error: compileError } = useMemo(() => {
    if (!isCodeModified) {
      return { Component: null, error: null };
    }
    return compileAndRender(currentDisplayCode, { platform });
  }, [currentDisplayCode, isCodeModified, platform]);

  // Keep last valid component to avoid flickering while typing
  const lastValidComponentRef = useRef<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (DynamicComponent) {
      lastValidComponentRef.current = DynamicComponent;
    }
  }, [DynamicComponent]);

  // Close 3-dots menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Reset edited code when switching platform
  useEffect(() => {
    setEditedFullCodeTs(null);
    setEditedFullCodeJs(null);
    setEditedCompactCode(null);
    lastValidComponentRef.current = null;
  }, [platform]);

  const handleCopy = (textToCopy?: string, label?: string) => {
    const content = textToCopy || currentDisplayCode;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setCopiedMessage(label || 'Copied the source!');
    setTimeout(() => {
      setCopied(false);
      setCopiedMessage(null);
    }, 2000);
  };

  const handleCopyJsLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#/components/${compKey}#${id}.js`;
    navigator.clipboard.writeText(url);
    window.history.replaceState(null, '', `#/components/${compKey}#${id}.js`);
    setCopiedMessage('Copied link to JavaScript source!');
    setIsMenuOpen(false);
    setTimeout(() => setCopiedMessage(null), 2000);
  };

  const handleCopyTsLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#/components/${compKey}#${id}.tsx`;
    navigator.clipboard.writeText(url);
    window.history.replaceState(null, '', `#/components/${compKey}#${id}.tsx`);
    setCopiedMessage('Copied link to TypeScript source!');
    setIsMenuOpen(false);
    setTimeout(() => setCopiedMessage(null), 2000);
  };

  const handleResetDemo = () => {
    setDemoKey((k) => k + 1);
    setEditedFullCodeTs(null);
    setEditedFullCodeJs(null);
    setEditedCompactCode(null);
    lastValidComponentRef.current = null;
    setActiveTooltip('Demo reset!');
    setTimeout(() => setActiveTooltip(null), 1500);
  };

  const handleCodeChange = (newCode: string) => {
    if (isExpanded) {
      if (codeLang === 'ts') {
        setEditedFullCodeTs(newCode);
      } else {
        setEditedFullCodeJs(newCode);
      }
    } else {
      setEditedCompactCode(newCode);
    }
  };

  const handleResetFocus = () => {
    if (previewContainerRef.current) {
      const focusable = previewContainerRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) {
        focusable.focus();
      } else {
        previewContainerRef.current.tabIndex = -1;
        previewContainerRef.current.focus();
      }
      setActiveTooltip('Focus moved to demo!');
      setTimeout(() => setActiveTooltip(null), 1500);
    }
  };

  const handleOpenSandbox = () => {
    if (platform === 'web') {
      openInCodeSandbox({ title, code: currentFullCode, theme: colorScheme });
    } else {
      openInExpoSnack({ title, code: currentFullCode });
    }
  };

  const handleOpenStackBlitz = () => {
    openInStackBlitz({ title, code: currentFullCode, theme: colorScheme });
  };

  return (
    <div
      id={id}
      style={{
        borderRadius: 'var(--radius-component-md)',
        border: '1px solid var(--color-border-default)',
        backgroundColor: 'var(--color-surface)',
        overflow: 'hidden',
        scrollMarginTop: 80,
        boxShadow: 'var(--elevation-raised)',
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          padding: '16px 20px',
          borderBottom: '1px solid var(--color-border-subtle)',
          backgroundColor: 'var(--color-surface-raised)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {title}
            </h3>
            <a
              href={`#${id}`}
              style={{
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                fontSize: 14,
              }}
              title="Direct link to this demo"
            >
              #
            </a>
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('spectra:section-feedback', { detail: title }));
              }}
              title={`Give feedback on "${title}"`}
              aria-label={`Give feedback on ${title}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                borderRadius: 5,
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                transition: 'all 0.12s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-action-primary)';
                e.currentTarget.style.borderColor = 'var(--color-action-primary)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 127, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
              }}
            >
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <line x1="12" y1="8" x2="12" y2="14" />
                <line x1="9" y1="11" x2="15" y2="11" />
              </svg>
            </button>
          </div>
          <p style={{ margin: '4px 0 0 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>
            {description}
          </p>
        </div>
      </div>

      {/* Demo Canvas Preview Area */}
      <div
        ref={previewContainerRef}
        key={demoKey}
        style={{
          position: 'relative',
          padding: '40px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 150,
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border-subtle)',
          transition: 'background-color 0.15s ease',
          outline: 'none',
        }}
      >
        {platform === 'web' ? (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LiveErrorBoundary
              fallbackKey={`${currentDisplayCode}-${demoKey}`}
              fallbackElement={webPreview}
              onReset={handleResetDemo}
            >
              {isCodeModified && (DynamicComponent || lastValidComponentRef.current) ? (
                React.createElement(DynamicComponent || lastValidComponentRef.current!)
              ) : (
                webPreview
              )}
            </LiveErrorBoundary>
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              maxWidth: 380,
              padding: 20,
              borderRadius: 16,
              border: '2px solid var(--color-border-default)',
              backgroundColor: 'var(--color-surface)',
              boxShadow: 'var(--elevation-overlay)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                borderBottom: '1px solid var(--color-border-subtle)',
                paddingBottom: 6,
                marginBottom: 4,
              }}
            >
              <span>9:41 · 5G</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <SmartphoneIcon size={12} />
                React Native (iOS/Android)
              </span>
            </div>
            <LiveErrorBoundary
              fallbackKey={`${currentDisplayCode}-${demoKey}`}
              fallbackElement={nativePreview}
              onReset={handleResetDemo}
            >
              {isCodeModified && (DynamicComponent || lastValidComponentRef.current) ? (
                React.createElement(DynamicComponent || lastValidComponentRef.current!)
              ) : (
                nativePreview
              )}
            </LiveErrorBoundary>
          </div>
        )}

        {/* Real-Time Syntax Error Banner While Typing */}
        {isCodeModified && compileError && (
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              left: 16,
              right: 16,
              padding: '6px 12px',
              borderRadius: 6,
              backgroundColor: 'rgba(239, 68, 68, 0.14)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(239, 68, 68, 0.35)',
              color: '#F87171',
              fontSize: 11.5,
              fontFamily: "'JetBrains Mono', Consolas, monospace",
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              zIndex: 20,
              animation: 'fadeIn 0.15s ease',
            }}
          >
            <span style={{ fontWeight: 700, color: '#EF4444' }}>!</span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Syntax: {compileError}
            </span>
          </div>
        )}
      </div>

      {/* MUI-Style Interactive Sandbox Action Toolbar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          backgroundColor: 'var(--color-surface-raised)',
          borderBottom: '1px solid var(--color-border-subtle)',
          gap: 12,
          position: 'relative',
        }}
      >
        {/* Left Side: Edit in Chat Pill + Dynamic JS/TS Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Edit in Chat Pill Button (Matching MUI Screenshots) */}
          <button
            onClick={() => setIsAiModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '3px 12px',
              borderRadius: 9999,
              border: '1px solid rgba(139, 92, 246, 0.4)',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.12))',
              color: 'var(--color-text-primary)',
              fontSize: 11.5,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: '0 1px 4px rgba(99, 102, 241, 0.1)',
            }}
            title="Edit this component in AI Chat"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.8)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.22), rgba(168, 85, 247, 0.22))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.12))';
            }}
          >
            <SparklesIcon size={13} color="#A855F7" />
            <span>Edit in Chat</span>
          </button>

          {/* JS / TS Language Toggle (Appears when expanded, matching MUI Image 2) */}
          {isExpanded && (
            <div
              style={{
                display: 'inline-flex',
                backgroundColor: 'var(--color-surface)',
                borderRadius: 6,
                padding: 2,
                border: '1px solid var(--color-border-subtle)',
                animation: 'fadeIn 0.15s ease',
              }}
            >
              <button
                onClick={() => setCodeLang('js')}
                style={{
                  padding: '2px 9px',
                  border: 'none',
                  borderRadius: 4,
                  backgroundColor: codeLang === 'js' ? 'var(--color-action-primary)' : 'transparent',
                  color: codeLang === 'js' ? '#FFFFFF' : 'var(--color-text-secondary)',
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                title="View JavaScript code"
              >
                JS
              </button>
              <button
                onClick={() => setCodeLang('ts')}
                style={{
                  padding: '2px 9px',
                  border: 'none',
                  borderRadius: 4,
                  backgroundColor: codeLang === 'ts' ? 'var(--color-action-primary)' : 'transparent',
                  color: codeLang === 'ts' ? '#FFFFFF' : 'var(--color-text-secondary)',
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                title="View TypeScript code"
              >
                TS
              </button>
            </div>
          )}
        </div>

        {/* Right Side: MUI Action Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {/* Collapse / Expand Code Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '4px 10px',
              borderRadius: 999,
              border: '1px solid var(--color-border-subtle)',
              backgroundColor: isExpanded ? 'var(--color-surface-sunken)' : 'var(--color-surface)',
              color: isExpanded ? 'var(--color-action-primary)' : 'var(--color-text-primary)',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              marginRight: 4,
              transition: 'all 0.15s ease',
            }}
          >
            <CodeIcon size={12} color="currentColor" />
            <span>{isExpanded ? 'Collapse code' : 'Expand code'}</span>
          </button>

          {/* Edit in StackBlitz (Web only) */}
          {platform === 'web' && (
            <button
              onClick={handleOpenStackBlitz}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: 6,
                border: 'none',
                background: 'transparent',
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'background 0.15s ease, color 0.15s ease',
              }}
              title="Edit in StackBlitz"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
              }}
            >
              <LightningIcon size={16} />
            </button>
          )}

          {/* Edit in CodeSandbox (Web) or Expo Snack (Native) */}
          <button
            onClick={handleOpenSandbox}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 6,
              border: 'none',
              background: 'transparent',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'background 0.15s ease, color 0.15s ease',
            }}
            title={platform === 'web' ? 'Edit in CodeSandbox' : 'Edit in Expo Snack'}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-surface)';
              e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            <CubeIcon size={16} />
          </button>

          {/* Copy the source */}
          <button
            onClick={() => handleCopy()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 6,
              border: 'none',
              background: 'transparent',
              color: copied ? 'var(--color-semantic-success)' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'background 0.15s ease, color 0.15s ease',
            }}
            title={copied ? 'Copied!' : 'Copy the source'}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-surface)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          </button>

          {/* Reset focus to test keyboard navigation */}
          <button
            onClick={handleResetFocus}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 6,
              border: 'none',
              background: 'transparent',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'background 0.15s ease, color 0.15s ease',
            }}
            title="Reset focus to test keyboard navigation"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-surface)';
              e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            <FocusTargetIcon size={16} />
          </button>

          {/* Reset demo */}
          <button
            onClick={handleResetDemo}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 6,
              border: 'none',
              background: 'transparent',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              transition: 'background 0.15s ease, color 0.15s ease',
            }}
            title="Reset demo"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-surface)';
              e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            <RotateCcwIcon size={16} />
          </button>

          {/* 3-Dots More Menu */}
          <div style={{ position: 'relative' }} ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: 6,
                border: 'none',
                background: isMenuOpen ? 'var(--color-surface)' : 'transparent',
                color: isMenuOpen ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'background 0.15s ease, color 0.15s ease',
              }}
              title="See more"
            >
              <MoreVerticalIcon size={16} />
            </button>

            {/* Dropdown Popover Menu (Matching MUI Screenshot Image 4 & 5) */}
            {isMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '100%',
                  marginTop: 4,
                  minWidth: 240,
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                  padding: '6px 0',
                  zIndex: 100,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* 1. View the source on GitHub (Anchor link with Release Version) */}
                <a
                  href={githubSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={githubSourceUrl}
                  style={{
                    padding: '8px 16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: 13,
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background-color 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>View the source on GitHub</span>
                  <ExternalLinkIcon size={12} color="var(--color-text-muted)" />
                </a>

                {/* 2. Copy link to JavaScript source */}
                <button
                  onClick={handleCopyJsLink}
                  style={{
                    padding: '8px 16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: 13,
                    color: 'var(--color-text-primary)',
                    cursor: 'pointer',
                    transition: 'background-color 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Copy link to JavaScript source
                </button>

                {/* 3. Copy link to TypeScript source */}
                <button
                  onClick={handleCopyTsLink}
                  style={{
                    padding: '8px 16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: 13,
                    color: 'var(--color-text-primary)',
                    cursor: 'pointer',
                    transition: 'background-color 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-raised)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Copy link to TypeScript source
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Feedback Tooltip Notification */}
        {(activeTooltip || copiedMessage) && (
          <div
            style={{
              position: 'absolute',
              bottom: -28,
              right: 16,
              backgroundColor: '#1E293B',
              color: '#F8FAFC',
              fontSize: 11,
              fontWeight: 600,
              padding: '3px 8px',
              borderRadius: 4,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              pointerEvents: 'none',
              zIndex: 50,
              animation: 'fadeIn 0.15s ease',
            }}
          >
            {activeTooltip || copiedMessage}
          </div>
        )}
      </div>

      {/* Editable Live Code Block (MUI Collapsed / Expanded Behavior) */}
      <EditableCodeBlock
        code={currentDisplayCode}
        onChange={handleCodeChange}
        language={codeLang}
        isExpanded={isExpanded}
        isModified={isCodeModified}
        onResetCode={handleResetDemo}
        onCopy={() => handleCopy(currentDisplayCode)}
        copied={copied}
        fileBadge={
          isExpanded
            ? `${codeLang === 'ts' ? 'App.tsx (TypeScript)' : 'App.jsx (JavaScript)'}`
            : undefined
        }
        maxHeight={isExpanded ? 520 : 200}
      />

      {/* Edit in Chat AI Modal */}
      <EditInChatModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        title={title}
        code={currentDisplayCode}
        language={codeLang}
        platform={platform}
        onApplyCode={(newCode) => {
          if (isExpanded) {
            if (codeLang === 'ts') {
              setEditedFullCodeTs(newCode);
            } else {
              setEditedFullCodeJs(newCode);
            }
          } else {
            setEditedCompactCode(newCode);
          }
        }}
      />
    </div>
  );
};

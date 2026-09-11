import React, { useRef } from 'react';
import { CopyIcon, CheckIcon, RotateCcwIcon } from '@spectra/icons';

interface EditableCodeBlockProps {
  code: string;
  onChange: (newCode: string) => void;
  language?: 'tsx' | 'jsx' | 'ts' | 'js';
  isExpanded: boolean;
  isModified: boolean;
  onResetCode: () => void;
  onCopy: () => void;
  copied: boolean;
  fileBadge?: string;
  maxHeight?: number | string;
}

// Lightweight single-pass syntax highlighter for JSX / TSX / JS
export function highlightCode(code: string): string {
  if (!code) return '';

  // Escape HTML characters
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Tokenize comments, strings, tags, props, and keywords in a single pass
  const tokenRegex = /(\/\/[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(&lt;\/?[A-Za-z0-9_]+)|(\b[a-zA-Z0-9_$-]+(?=\s*=))|(\b(?:import|export|default|function|return|from|const|let|var|type|interface|as|void|boolean|string|number|null|undefined|true|false|new|if|else|switch|case)\b)/g;

  return escaped.replace(tokenRegex, (match, comment, str, tag, prop, keyword) => {
    if (comment) {
      return `<span style="color: #64748B; font-style: italic;">${comment}</span>`;
    }
    if (str) {
      return `<span style="color: #F472B6;">${str}</span>`;
    }
    if (tag) {
      return `<span style="color: #4ADE80; font-weight: 600;">${tag}</span>`;
    }
    if (prop) {
      return `<span style="color: #FBBF24;">${prop}</span>`;
    }
    if (keyword) {
      return `<span style="color: #38BDF8; font-weight: 600;">${keyword}</span>`;
    }
    return match;
  });
}

export const EditableCodeBlock: React.FC<EditableCodeBlockProps> = ({
  code,
  onChange,
  language = 'tsx',
  isExpanded,
  isModified,
  onResetCode,
  onCopy,
  copied,
  fileBadge,
  maxHeight = isExpanded ? 520 : 220,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  // Synchronize scroll between textarea and syntax highlight pre
  const handleScroll = () => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  // Support Tab key (2 spaces indentation)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;

      const nextVal = val.substring(0, start) + '  ' + val.substring(end);
      onChange(nextVal);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  const lineCount = code.split('\n').length;
  const editorHeight = Math.min(
    typeof maxHeight === 'number' ? maxHeight : 520,
    Math.max(120, lineCount * 22 + 32)
  );

  // Prevent pre tag from collapsing trailing newline
  const formattedHtml = highlightCode(code) + (code.endsWith('\n') ? ' ' : '');

  const sharedTypography: React.CSSProperties = {
    fontFamily: 'Consolas, "JetBrains Mono", Menlo, Monaco, "Courier New", monospace',
    fontSize: 13,
    lineHeight: '22px',
    letterSpacing: '0px',
    tabSize: 2,
    whiteSpace: 'pre',
    wordBreak: 'normal',
    overflowWrap: 'normal',
    boxSizing: 'border-box',
    padding: '14px 18px',
    margin: 0,
    border: 'none',
  };

  return (
    <div
      style={{
        margin: '12px 16px 16px 16px',
        borderRadius: 8,
        border: isFocused
          ? '1px solid #007FFF'
          : isModified
          ? '1px solid rgba(56, 189, 248, 0.6)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#0B0F19',
        overflow: 'hidden',
        boxShadow: isFocused
          ? '0 0 0 1px #007FFF, 0 4px 20px rgba(0, 127, 255, 0.15)'
          : isModified
          ? '0 0 0 1px rgba(56, 189, 248, 0.2), 0 4px 16px rgba(0, 0, 0, 0.4)'
          : '0 4px 16px rgba(0, 0, 0, 0.3)',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
      }}
    >
      <style>{`
        .spectra-live-textarea::selection {
          background: rgba(56, 189, 248, 0.35) !important;
        }
      `}</style>

      {/* Code Block Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 14px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          backgroundColor: '#0F172A',
          fontSize: 11,
          fontFamily: "'JetBrains Mono', Consolas, monospace",
          color: '#94A3B8',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {fileBadge && (
            <span
              style={{
                fontWeight: 600,
                color: language.includes('ts') ? '#38BDF8' : '#FBBF24',
              }}
            >
              {fileBadge}
            </span>
          )}
          {isModified && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                padding: '1px 6px',
                borderRadius: 4,
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38BDF8',
                border: '1px solid rgba(56, 189, 248, 0.3)',
              }}
            >
              Editable (Modified)
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {isModified && (
            <button
              onClick={onResetCode}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#E2E8F0',
                padding: '2px 8px',
                borderRadius: 4,
                cursor: 'pointer',
                fontSize: 11,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                transition: 'background 0.15s ease',
              }}
              title="Reset code to original"
            >
              <RotateCcwIcon size={11} />
              <span>Reset</span>
            </button>
          )}

          <button
            onClick={onCopy}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: copied ? '#4ADE80' : '#E2E8F0',
              padding: '2px 8px',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: 11,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              transition: 'all 0.15s ease',
            }}
            title="Copy code"
          >
            {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Editable Live Editor Area with Real-Time Syntax Layer */}
      <div
        style={{
          position: 'relative',
          height: editorHeight,
          overflow: 'hidden',
        }}
      >
        {/* Layer 1: Syntax Highlight Display */}
        <pre
          ref={preRef}
          aria-hidden="true"
          style={{
            ...sharedTypography,
            overflow: 'hidden',
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            color: '#E2E8F0',
          }}
          dangerouslySetInnerHTML={{ __html: formattedHtml }}
        />

        {/* Layer 2: Editable Transparent Textarea with Visible Caret */}
        <textarea
          ref={textareaRef}
          className="spectra-live-textarea"
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          style={{
            ...sharedTypography,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            background: 'transparent',
            color: 'transparent',
            caretColor: '#38BDF8',
            outline: 'none',
            resize: 'none',
          }}
          title="Click to edit code in-place"
        />
      </div>
    </div>
  );
};

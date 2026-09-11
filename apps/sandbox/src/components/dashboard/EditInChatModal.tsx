import React, { useState, useEffect } from 'react';
import { SparklesIcon, CloseIcon, CopyIcon, CheckIcon, ExternalLinkIcon } from '@spectra/icons';

interface EditInChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;
  language: 'ts' | 'js';
  platform: 'web' | 'native';
  onApplyCode: (newCode: string) => void;
}

const QUICK_PROMPTS = [
  'Add a leading vector icon and custom label',
  'Add an asynchronous loading state with spinner',
  'Change visual variant to destructive danger',
  'Make full-width block layout for mobile',
  'Add accessible aria-label and keyboard focus ring',
];

export const EditInChatModal: React.FC<EditInChatModalProps> = ({
  isOpen,
  onClose,
  title,
  code,
  language,
  platform,
  onApplyCode,
}) => {
  const [prompt, setPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [applied, setApplied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buildAiPrompt = (customPrompt?: string) => {
    const instruction = customPrompt || prompt || 'Refactor and enhance this component';
    return `You are an expert React UI engineer working with Spectra UI design system.
Target Platform: ${platform === 'web' ? 'Web (React 18 & 19)' : 'React Native (iOS & Android)'}
Language: ${language === 'ts' ? 'TypeScript (TSX)' : 'JavaScript (JSX)'}
Component: ${title}

Here is the current source code:
\`\`\`${language === 'ts' ? 'tsx' : 'jsx'}
${code}
\`\`\`

Task:
${instruction}

Please provide the updated, clean runnable code for Spectra UI.`;
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(buildAiPrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenChatGPT = () => {
    const text = encodeURIComponent(buildAiPrompt());
    window.open(`https://chatgpt.com/?q=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenClaude = () => {
    const text = encodeURIComponent(buildAiPrompt());
    window.open(`https://claude.ai/new?q=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleApplySimulatedChange = () => {
    // Modify code with simulated AI modification based on prompt or default enhancement
    let modified = code;
    if (prompt.toLowerCase().includes('icon')) {
      if (!modified.includes('SparklesIcon')) {
        modified = modified.replace(
          /import {([^}]+)} from '@spectra\/icons';/,
          "import { $1, SparklesIcon } from '@spectra/icons';"
        );
        modified = modified.replace(
          /<Button([^>]*)>/,
          '<Button$1 icon={<SparklesIcon size={16} />}>'
        );
      }
    } else if (prompt.toLowerCase().includes('loading')) {
      modified = modified.replace(/<Button([^>]*)>/, '<Button$1 isLoading>');
    } else if (prompt.toLowerCase().includes('danger') || prompt.toLowerCase().includes('destructive')) {
      modified = modified.replace(/variant="[^"]*"/, 'variant="danger"');
    } else if (prompt.toLowerCase().includes('full') || prompt.toLowerCase().includes('block')) {
      modified = modified.replace(/<Button([^>]*)>/, '<Button$1 style={{ width: "100%" }}>');
    } else {
      // Default: add an interactive comment and onClick handler
      modified = modified.replace(
        /<Button([^>]*)>/,
        '<Button$1 onClick={() => alert("AI modified action triggered!")}>'
      );
    }
    onApplyCode(modified);
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      onClose();
    }, 800);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        animation: 'fadeIn 0.15s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 620,
          backgroundColor: '#0F172A',
          borderRadius: 14,
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#1E293B',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #6366F1, #A855F7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <SparklesIcon size={18} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#F8FAFC' }}>
                Edit with AI / Chat
              </h3>
              <p style={{ margin: '2px 0 0 0', fontSize: 12, color: '#94A3B8' }}>
                Prompt changes for <strong style={{ color: '#E2E8F0' }}>{title}</strong> ({language.toUpperCase()})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              padding: 6,
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease',
            }}
            title="Close modal (Esc)"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div
          style={{
            padding: 20,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Quick Action Suggestion Chips */}
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#94A3B8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Suggested AI Prompts
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {QUICK_PROMPTS.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => setPrompt(qp)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 9999,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: prompt === qp ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    color: prompt === qp ? '#818CF8' : '#CBD5E1',
                    fontSize: 11,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {qp}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Textarea */}
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#E2E8F0', marginBottom: 6 }}>
              Custom Prompt Instructions
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Add an onClick handler that toggles loading state and logs to telemetry..."
              rows={3}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '10px 12px',
                borderRadius: 8,
                border: '1px solid rgba(255, 255, 255, 0.14)',
                backgroundColor: '#0B0F19',
                color: '#F8FAFC',
                fontSize: 13,
                fontFamily: 'inherit',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          {/* Compact Code Preview */}
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#94A3B8', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Target Code Context
            </label>
            <pre
              style={{
                margin: 0,
                padding: 12,
                borderRadius: 8,
                backgroundColor: '#0B0F19',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#CBD5E1',
                fontSize: 11.5,
                fontFamily: "'JetBrains Mono', Consolas, monospace",
                lineHeight: 1.5,
                maxHeight: 140,
                overflowY: 'auto',
              }}
            >
              {code}
            </pre>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div
          style={{
            padding: '14px 20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#1E293B',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={handleOpenChatGPT}
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#E2E8F0',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.15s ease',
              }}
              title="Open prompt in ChatGPT"
            >
              <ExternalLinkIcon size={12} />
              <span>ChatGPT</span>
            </button>

            <button
              onClick={handleOpenClaude}
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#E2E8F0',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.15s ease',
              }}
              title="Open prompt in Claude"
            >
              <ExternalLinkIcon size={12} />
              <span>Claude</span>
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={handleCopyPrompt}
              style={{
                padding: '6px 14px',
                borderRadius: 6,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: copied ? 'rgba(74, 222, 128, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                color: copied ? '#4ADE80' : '#F8FAFC',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.15s ease',
              }}
            >
              {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} />}
              <span>{copied ? 'Prompt Copied!' : 'Copy AI Prompt'}</span>
            </button>

            <button
              onClick={handleApplySimulatedChange}
              style={{
                padding: '6px 16px',
                borderRadius: 6,
                border: 'none',
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                color: '#FFFFFF',
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: '0 2px 8px rgba(79, 70, 229, 0.4)',
                transition: 'all 0.15s ease',
              }}
            >
              <SparklesIcon size={13} />
              <span>{applied ? 'Applied!' : 'Apply to Code'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

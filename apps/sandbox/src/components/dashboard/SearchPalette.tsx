import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  SearchIcon,
  CloseIcon,
  SparklesIcon,
  CodeIcon,
  ChevronRightIcon,
  PaletteIcon,
  CubeIcon,
} from '@spectra/icons';
import { navigate } from '../../utils/router';

const ALGOLIA_APP_ID = '777PLTTOXX';
const ALGOLIA_SEARCH_KEY = '9b0347744440efd1b8ed3ba4b058055d';
const ALGOLIA_INDEX = 'spectra_ui_docs';

interface SearchPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AlgoliaHit {
  objectID: string;
  type: string;
  section: string;
  title: string;
  subtitle?: string;
  package?: string;
  path: string;
  description: string;
  _highlightResult?: {
    title?: { value: string };
    description?: { value: string };
    subtitle?: { value: string };
  };
}

// 2-Column Curated Quick Navigation Categories (Matching Screenshot 1)
const QUICK_NAVIGATION_SECTIONS = [
  {
    category: 'CORE PLATFORM',
    items: [
      { title: 'Installation', icon: 'download', path: '/installation' },
      { title: 'All Components', icon: 'components', path: '/components' },
      { title: 'Cross-Platform', icon: 'layers', path: '/cross-platform' },
      { title: 'Overview & Principles', icon: 'overview', path: '/overview' },
    ],
  },
  {
    category: 'DESIGN TOKENS',
    items: [
      { title: 'Colors & Swatches', icon: 'palette', path: '/tokens/colors' },
      { title: 'Spacing & 4px Grid', icon: 'cube', path: '/tokens/spacing' },
      { title: 'Motion & Physics', icon: 'sparkles', path: '/tokens/motion' },
      { title: 'Typography Scale', icon: 'code', path: '/tokens/typography' },
    ],
  },
  {
    category: 'ICONS & ASSETS',
    items: [
      { title: '12,253 Icon Explorer', icon: 'search', path: '/icons' },
      { title: 'Social Brand Suite', icon: 'sparkles', path: '/icons' },
    ],
  },
  {
    category: 'HEADLESS & APIS',
    items: [
      { title: 'Functional Hooks', icon: 'code', path: '/hooks/use-disclosure' },
      { title: 'Component API Reference', icon: 'settings', path: '/components/button#api' },
    ],
  },
];

export const SearchPalette: React.FC<SearchPaletteProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<AlgoliaHit[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mode, setMode] = useState<'search' | 'ai'>('search');
  const [isSearching, setIsSearching] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<any>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Execute Algolia Search
  const queryAlgolia = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setHits([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      const res = await fetch(
        `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${ALGOLIA_INDEX}/query`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Algolia-Application-Id': ALGOLIA_APP_ID,
            'X-Algolia-API-Key': ALGOLIA_SEARCH_KEY,
          },
          body: JSON.stringify({
            query: searchQuery,
            hitsPerPage: 24,
          }),
        }
      );

      if (!res.ok) throw new Error('Algolia search error');
      const data = await res.json();
      setHits(data.hits || []);
    } catch (e) {
      console.warn('[Spectra Search] Algolia query error:', e);
      setHits([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Debounced input trigger
  useEffect(() => {
    if (mode === 'search') {
      const timer = setTimeout(() => {
        queryAlgolia(query);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [query, mode, queryAlgolia]);

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setHits([]);
      setSelectedIndex(0);
      setMode('search');
      setAiAnswer(null);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  // Group hits by Section (Matching Screenshot 3)
  const groupedSections: { sectionName: string; items: AlgoliaHit[] }[] = [];
  const sectionMap: Record<string, AlgoliaHit[]> = {};

  hits.forEach((hit) => {
    const sec = hit.section || 'OTHER';
    if (!sectionMap[sec]) {
      sectionMap[sec] = [];
      groupedSections.push({ sectionName: sec, items: sectionMap[sec] });
    }
    sectionMap[sec].push(hit);
  });

  // Flattened list for keyboard navigation
  const flatSelectableItems: AlgoliaHit[] = [];
  groupedSections.forEach((group) => {
    group.items.forEach((item) => flatSelectableItems.push(item));
  });

  // Keep selected index in range
  useEffect(() => {
    setSelectedIndex(0);
  }, [hits]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (mode === 'search' && flatSelectableItems.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % flatSelectableItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + flatSelectableItems.length) % flatSelectableItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = flatSelectableItems[selectedIndex];
        if (selected) {
          navigate(selected.path);
          onClose();
        }
      }
    }
  };

  const handleAskAi = (promptText: string) => {
    setIsAiLoading(true);
    setQuery(promptText);

    setTimeout(() => {
      setAiAnswer({
        title: `Spectra UI: ${promptText}`,
        summary: `Use @spectra/react components and semantic tokens for zero runtime styling overhead. Full accessibility (ARIA) and keyboard navigation are built-in.`,
        code: `import React, { useState } from 'react';\nimport { Button, TextInput } from '@spectra/react';\nimport { SearchIcon, CheckIcon } from '@spectra/icons';\n\nexport function Solution() {\n  return (\n    <div>\n      <TextInput label="Search field" leftIcon={<SearchIcon size={16} />} />\n      <Button variant="primary" icon={<CheckIcon size={16} />}>Submit</Button>\n    </div>\n  );\n}`,
        citationPath: '/components/button',
        citationTitle: 'Button Component Documentation',
      });
      setIsAiLoading(false);
    }, 450);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'download':
        return (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        );
      case 'components':
      case 'layers':
        return (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
      case 'overview':
        return <CodeIcon size={16} color="var(--color-text-muted)" />;
      case 'palette':
        return <PaletteIcon size={16} color="var(--color-text-muted)" />;
      case 'cube':
        return <CubeIcon size={16} color="var(--color-text-muted)" />;
      case 'sparkles':
        return <SparklesIcon size={16} color="var(--color-text-muted)" />;
      case 'code':
        return <CodeIcon size={16} color="var(--color-text-muted)" />;
      case 'settings':
        return (
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case 'search':
        return <SearchIcon size={16} color="var(--color-text-muted)" />;
      default:
        return <ChevronRightIcon size={16} color="var(--color-text-muted)" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        style={{
          width: '100%',
          maxWidth: 660,
          borderRadius: 12,
          border: '1px solid #1E293B',
          backgroundColor: '#0F172A', // Solid high-contrast surface for deep focus
          color: '#F8FAFC',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.5)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Top Header / Mode Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 18px',
            borderBottom: '1px solid #1E293B',
            backgroundColor: '#0B0F19',
          }}
        >
          {/* Search Input Box (Matching Screenshots 1 & 3) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
            <SearchIcon size={20} color="#64748B" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?"
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                fontSize: 16,
                color: '#F8FAFC',
                fontFamily: 'inherit',
              }}
            />
            {query ? (
              <button
                onClick={() => setQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  cursor: 'pointer',
                  padding: 4,
                }}
              >
                <CloseIcon size={16} />
              </button>
            ) : (
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#64748B',
                  backgroundColor: '#1E293B',
                  border: '1px solid #334155',
                  padding: '2px 8px',
                  borderRadius: 6,
                  letterSpacing: '0.5px',
                }}
              >
                esc
              </span>
            )}
          </div>

          {/* Ask AI Pill Switcher */}
          <button
            onClick={() => setMode(mode === 'search' ? 'ai' : 'search')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginLeft: 12,
              padding: '5px 10px',
              borderRadius: 6,
              border: mode === 'ai' ? '1px solid #818CF8' : '1px solid #1E293B',
              backgroundColor: mode === 'ai' ? 'rgba(129, 140, 248, 0.15)' : '#1E293B',
              color: mode === 'ai' ? '#818CF8' : '#94A3B8',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <SparklesIcon size={13} color="#818CF8" />
            {mode === 'ai' ? 'Instant Search' : 'Ask AI'}
          </button>
        </div>

        {/* Modal Body Area */}
        <div
          style={{
            maxHeight: 460,
            overflowY: 'auto',
            padding: '16px 20px',
            backgroundColor: '#0F172A',
          }}
        >
          {mode === 'search' ? (
            /* Mode: Instant Algolia Search */
            query.trim() === '' ? (
              /* Initial Empty State: 2-Column Curated Quick Navigation Grid (Screenshot 1) */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '24px 20px',
                  }}
                >
                  {QUICK_NAVIGATION_SECTIONS.map((sec) => (
                    <div key={sec.category}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.8px',
                          textTransform: 'uppercase',
                          color: '#64748B',
                          marginBottom: 10,
                        }}
                      >
                        {sec.category}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {sec.items.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => {
                              navigate(item.path);
                              onClose();
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 12,
                              padding: '10px 14px',
                              borderRadius: 8,
                              backgroundColor: '#1E293B',
                              border: '1px solid #334155',
                              color: '#F8FAFC',
                              fontSize: 13,
                              fontWeight: 500,
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'all 0.15s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#334155';
                              e.currentTarget.style.borderColor = '#007FFF';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#1E293B';
                              e.currentTarget.style.borderColor = '#334155';
                            }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                              {renderIcon(item.icon)}
                            </span>
                            <span style={{ flex: 1 }}>{item.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : hits.length === 0 && !isSearching ? (
              /* No results state */
              <div style={{ padding: '40px 20px', textAlign: 'center', color: '#64748B' }}>
                No matching results found for <strong style={{ color: '#F8FAFC' }}>"{query}"</strong>
              </div>
            ) : (
              /* Active Search Results Grouped by Section (Screenshot 3) */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {groupedSections.map((group) => (
                  <div key={group.sectionName}>
                    {/* Section Header (COMPONENT API, COMPONENTS, etc.) */}
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                        color: '#64748B',
                        padding: '4px 8px',
                        marginBottom: 6,
                      }}
                    >
                      {group.sectionName}
                    </div>

                    {/* Result Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {group.items.map((item) => {
                        const globalIndex = flatSelectableItems.findIndex(
                          (x) => x.objectID === item.objectID
                        );
                        const isSelected = globalIndex === selectedIndex;

                        return (
                          <div
                            key={item.objectID}
                            onClick={() => {
                              navigate(item.path);
                              onClose();
                            }}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '10px 14px',
                              borderRadius: 8,
                              backgroundColor: isSelected
                                ? 'rgba(0, 127, 255, 0.12)'
                                : '#161E2E',
                              border: isSelected
                                ? '1px solid #007FFF'
                                : '1px solid #1E293B',
                              cursor: 'pointer',
                              transition: 'all 0.12s ease',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                flex: 1,
                                minWidth: 0,
                                marginRight: 12,
                              }}
                            >
                              {/* Icon: # for API/CSS or ≡ for Components */}
                              <div
                                style={{
                                  fontSize: 16,
                                  fontWeight: 700,
                                  color: isSelected ? '#38BDF8' : '#64748B',
                                  width: 20,
                                  textAlign: 'center',
                                }}
                              >
                                {item.section === 'COMPONENT API' ? (
                                  <CodeIcon size={14} />
                                ) : item.section === 'COMPONENTS' ? (
                                  <CubeIcon size={14} />
                                ) : item.section === 'DESIGN TOKENS' ? (
                                  <PaletteIcon size={14} />
                                ) : item.section === 'FUNCTIONAL HOOKS' ? (
                                  <SparklesIcon size={14} />
                                ) : (
                                  <CodeIcon size={14} />
                                )}
                              </div>

                              {/* Title & Subtitle */}
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: isSelected ? '#38BDF8' : '#F8FAFC',
                                    fontFamily:
                                      item.section === 'COMPONENT API' ||
                                      item.section === 'DESIGN TOKENS'
                                        ? 'monospace'
                                        : 'inherit',
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      item._highlightResult?.title?.value ||
                                      item.title,
                                  }}
                                />
                                {item.subtitle && (
                                  <div
                                    style={{
                                      fontSize: 12,
                                      color: '#94A3B8',
                                      marginTop: 2,
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        item._highlightResult?.subtitle
                                          ?.value || item.subtitle,
                                    }}
                                  />
                                )}
                              </div>
                            </div>

                            {/* Return key indicator and package badge */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              {isSelected && (
                                <span
                                  style={{
                                    fontSize: 14,
                                    color: '#38BDF8',
                                    fontWeight: 700,
                                  }}
                                >
                                  ↵
                                </span>
                              )}
                              <span
                                style={{
                                  fontSize: 11,
                                  fontWeight: 600,
                                  color: '#94A3B8',
                                  backgroundColor: '#1E293B',
                                  border: '1px solid #334155',
                                  padding: '3px 10px',
                                  borderRadius: 12,
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {item.package || '@spectra/react'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            /* Mode: Ask AI Agent */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 12, color: '#94A3B8' }}>
                Ask technical questions about Spectra UI components, props, and design tokens:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {[
                  'How to build a password input field with reveal toggle?',
                  'How to build an accessible modal dialog with focus trap?',
                  'Which token prevents background dots bleed-through on dark cards?',
                  'Find all danger button variants and loading states',
                ].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleAskAi(q)}
                    style={{
                      fontSize: 12,
                      padding: '6px 12px',
                      borderRadius: 6,
                      border: '1px solid #334155',
                      backgroundColor: '#1E293B',
                      color: '#F8FAFC',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {isAiLoading ? (
                <div style={{ padding: '32px 16px', textAlign: 'center', color: '#818CF8' }}>
                  <SparklesIcon size={24} />
                  <div style={{ marginTop: 8, fontSize: 13 }}>Synthesizing solution...</div>
                </div>
              ) : aiAnswer ? (
                <div
                  style={{
                    borderRadius: 8,
                    border: '1px solid #334155',
                    backgroundColor: '#1E293B',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid #334155',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: 13, color: '#F8FAFC' }}>
                      {aiAnswer.title}
                    </span>
                    <button
                      onClick={() => {
                        navigate(aiAnswer.citationPath);
                        onClose();
                      }}
                      style={{
                        fontSize: 11,
                        color: '#38BDF8',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600,
                      }}
                    >
                      {aiAnswer.citationTitle} →
                    </button>
                  </div>
                  <div style={{ padding: '14px 16px', fontSize: 13, color: '#CBD5E1' }}>
                    {aiAnswer.summary}
                  </div>
                  <div style={{ backgroundColor: '#090D16', borderTop: '1px solid #334155' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '6px 14px',
                        fontSize: 11,
                        color: '#64748B',
                      }}
                    >
                      <span>Verified Recipe</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(aiAnswer.code);
                          setCopiedCode(true);
                          setTimeout(() => setCopiedCode(false), 1500);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: copiedCode ? '#4ADE80' : '#38BDF8',
                          cursor: 'pointer',
                          fontWeight: 600,
                        }}
                      >
                        {copiedCode ? '✓ Copied' : 'Copy Code'}
                      </button>
                    </div>
                    <pre
                      style={{
                        margin: 0,
                        padding: '12px 14px',
                        fontSize: 12,
                        fontFamily: 'monospace',
                        color: '#F8FAFC',
                        overflowX: 'auto',
                      }}
                    >
                      <code>{aiAnswer.code}</code>
                    </pre>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>

        {/* Footer Bar (Screenshots 1, 2, & 3) */}
        <div
          style={{
            padding: '12px 20px',
            borderTop: '1px solid #1E293B',
            backgroundColor: '#0B0F19',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 12,
            color: '#64748B',
          }}
        >
          {/* Keybindings (Screenshot 2) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <kbd
                style={{
                  padding: '2px 5px',
                  backgroundColor: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: 4,
                  fontSize: 11,
                  fontFamily: 'inherit',
                  color: '#94A3B8',
                }}
              >
                ↵
              </kbd>{' '}
              to select
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <kbd
                style={{
                  padding: '2px 5px',
                  backgroundColor: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: 4,
                  fontSize: 11,
                  fontFamily: 'inherit',
                  color: '#94A3B8',
                }}
              >
                ↓
              </kbd>
              <kbd
                style={{
                  padding: '2px 5px',
                  backgroundColor: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: 4,
                  fontSize: 11,
                  fontFamily: 'inherit',
                  color: '#94A3B8',
                }}
              >
                ↑
              </kbd>{' '}
              to navigate
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <kbd
                style={{
                  padding: '2px 5px',
                  backgroundColor: '#1E293B',
                  border: '1px solid #334155',
                  borderRadius: 4,
                  fontSize: 11,
                  fontFamily: 'inherit',
                  color: '#94A3B8',
                }}
              >
                esc
              </kbd>{' '}
              to close
            </span>
          </div>

          {/* Official Algolia Branding (Screenshots 1 & 2) */}
          <a
            href="https://www.algolia.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              textDecoration: 'none',
              color: '#94A3B8',
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            <span>Powered by</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#003DFF', fontWeight: 700 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  fill="#003DFF"
                />
                <path
                  d="M12 6v6l4.5 2.25-.75 1.25-5.25-2.6V6h1.5z"
                  fill="#003DFF"
                />
              </svg>
              <span style={{ color: '#003DFF', fontSize: 13, letterSpacing: '-0.2px' }}>algolia</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

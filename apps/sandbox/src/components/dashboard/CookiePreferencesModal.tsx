import React, { useState, useEffect } from 'react';
import { Dialog, Button, Switch, Badge, Card } from '@spectra/react';
import { CheckIcon, CloseIcon, SettingsIcon } from '@spectra/icons';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CookiePreferences {
  strictlyNecessary: boolean;
  analytics: boolean;
  personalization: boolean;
  savedAt: string;
}

const STORAGE_KEY = 'spectra_cookie_preferences';

export function getSavedCookiePreferences(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveCookiePreferences(prefs: CookiePreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (e) {
    console.warn('Could not save cookie preferences', e);
  }
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ isOpen, onClose }) => {
  const [analytics, setAnalytics] = useState(true);
  const [personalization, setPersonalization] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const existing = getSavedCookiePreferences();
    if (existing) {
      setAnalytics(existing.analytics);
      setPersonalization(existing.personalization);
    }
  }, [isOpen]);

  const handleSave = (analyticsVal: boolean, personalizationVal: boolean) => {
    saveCookiePreferences({
      strictlyNecessary: true,
      analytics: analyticsVal,
      personalization: personalizationVal,
      savedAt: new Date().toISOString(),
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div
        style={{
          padding: '28px 32px',
          maxWidth: 580,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          backgroundColor: 'var(--color-surface)',
          borderRadius: 16,
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <SettingsIcon size={20} color="var(--color-action-primary)" />
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  margin: 0,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Cookie & Privacy Preferences
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Spectra UI respects your privacy. Customize your cookie settings for our documentation,
              interactive playgrounds, and live compiler sandboxes.
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              padding: 4,
              borderRadius: '50%',
            }}
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Categories List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* 1. Strictly Necessary */}
          <Card
            variant="bordered"
            style={{
              padding: '16px 18px',
              backgroundColor: 'var(--color-surface-raised)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Strictly Necessary
                </span>
                <Badge variant="primary">Always Active</Badge>
              </div>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                Required for core website operations, dark/light theme persistence, design token caching,
                and session security.
              </p>
            </div>
            <Switch checked={true} disabled readOnly label="" />
          </Card>

          {/* 2. Performance & Analytics */}
          <Card
            variant="bordered"
            style={{
              padding: '16px 18px',
              backgroundColor: 'var(--color-surface-raised)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Performance & Telemetry
                </span>
                {analytics && <Badge variant="success">Enabled</Badge>}
              </div>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                Allows us to analyze Algolia search query performance, component copy clicks, and
                anonymous runtime errors to improve the documentation.
              </p>
            </div>
            <Switch
              checked={analytics}
              onChange={(checked) => setAnalytics(checked)}
              label=""
            />
          </Card>

          {/* 3. Developer Personalization */}
          <Card
            variant="bordered"
            style={{
              padding: '16px 18px',
              backgroundColor: 'var(--color-surface-raised)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Developer Personalization
                </span>
                {personalization && <Badge variant="success">Enabled</Badge>}
              </div>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                Remembers code playground modifications, active TypeScript/JavaScript preferences, and
                mobile simulator states.
              </p>
            </div>
            <Switch
              checked={personalization}
              onChange={(checked) => setPersonalization(checked)}
              label=""
            />
          </Card>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 12,
            borderTop: '1px solid var(--color-border-subtle)',
          }}
        >
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleSave(false, false)}
          >
            Reject Non-Essential
          </Button>

          <div style={{ display: 'flex', gap: 10 }}>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleSave(analytics, personalization)}
            >
              {savedSuccess ? 'Saved!' : 'Save Preferences'}
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleSave(true, true)}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

'use client';

import { useLanguage, type LanguageCode } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const LANGUAGE_OPTIONS: Array<{ code: LanguageCode; label: string }> = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ta', label: 'தமிழ்' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { t, isTranslating } = useTranslation();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 12px',
        borderRadius: 8,
        border: '1px solid rgba(92,74,42,0.18)',
        background: '#F5EFE0',
        fontFamily: 'var(--app-font-sans)',
        opacity: isTranslating ? 0.8 : 1,
        pointerEvents: isTranslating ? 'none' : 'auto',
      }}
    >
      <label
        htmlFor="language-switcher"
        style={{ fontSize: 13, fontWeight: 600, color: '#5C4A2A', whiteSpace: 'nowrap' }}
      >
        {t('nav.language')}
      </label>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {isTranslating && (
          <span
            aria-hidden="true"
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              border: '2px solid rgba(92,74,42,0.18)',
              borderTopColor: '#5C4A2A',
              animation: 'language-switcher-spin 0.8s linear infinite',
            }}
          />
        )}
        <select
          id="language-switcher"
          value={language}
          onChange={(event) => setLanguage(event.target.value as LanguageCode)}
          disabled={isTranslating}
          style={{
            border: 'none',
            background: 'transparent',
            color: '#2C1F0E',
            fontSize: 14,
            fontWeight: 600,
            outline: 'none',
            cursor: isTranslating ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {LANGUAGE_OPTIONS.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {isTranslating && (
        <span style={{ fontSize: 12, color: '#8B7355', whiteSpace: 'nowrap' }}>
          {t('nav.translating')}
        </span>
      )}
      <style>{`
        @keyframes language-switcher-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

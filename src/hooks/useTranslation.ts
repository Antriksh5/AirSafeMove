'use client';

import { useEffect, useMemo, useState } from 'react';
// import { GoogleAIBackend, getAI, getGenerativeModel } from 'firebase/ai';
import enTranslations from '../translations/en.json';
// import { app } from '../lib/firebase';
import { type LanguageCode, useLanguage } from '../context/LanguageContext';

type TranslationValue = string | TranslationDictionary;

interface TranslationDictionary {
  [key: string]: TranslationValue;
}

const STORAGE_PREFIX = 'translations_';
export const languageNames: Record<LanguageCode, string> = {
  en: 'English',
  hi: 'Hindi',
  mr: 'Marathi',
  gu: 'Gujarati',
  te: 'Telugu',
  ta: 'Tamil',
};
const translationRequests = new Map<LanguageCode, Promise<TranslationDictionary>>();
const sourceTranslations = enTranslations as TranslationDictionary;

export function useTranslation() {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<TranslationDictionary>(sourceTranslations);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    let isActive = true;

    const loadTranslations = async () => {
      if (language === 'en') {
        setTranslations(sourceTranslations);
        setIsTranslating(false);
        return;
      }

      const cacheKey = `${STORAGE_PREFIX}${language}`;
      const cached = window.sessionStorage.getItem(cacheKey);

      if (cached) {
        try {
          const parsed = JSON.parse(cached) as TranslationDictionary;
          if (isActive) {
            setTranslations(parsed);
            setIsTranslating(false);
          }
          return;
        } catch {
          window.sessionStorage.removeItem(cacheKey);
        }
      }

      setIsTranslating(true);

      try {
        const translated = await getOrCreateTranslation(language);
        window.sessionStorage.setItem(cacheKey, JSON.stringify(translated));
        if (isActive) {
          setTranslations(translated);
        }
      } catch (error) {
        console.error('Failed to load translated copy:', error);
        if (isActive) {
          setTranslations(sourceTranslations);
        }
      } finally {
        if (isActive) {
          setIsTranslating(false);
        }
      }
    };

    loadTranslations();

    return () => {
      isActive = false;
    };
  }, [language]);

  const t = useMemo(
    () => (key: string, placeholders?: Record<string, string | number>) => {
      const value = resolveKey(translations, key) ?? resolveKey(sourceTranslations, key);
      if (typeof value !== 'string') {
        return key;
      }

      if (!placeholders) {
        return value;
      }

      return value.replace(/\{(\w+)\}/g, (_, placeholder) => {
        const replacement = placeholders[placeholder];
        return replacement === undefined ? `{${placeholder}}` : String(replacement);
      });
    },
    [translations]
  );

  return { t, isTranslating, translations };
}

export function clearTranslationCache() {
  if (typeof window === 'undefined') {
    return;
  }

  const keysToRemove: string[] = [];
  for (let index = 0; index < window.sessionStorage.length; index += 1) {
    const key = window.sessionStorage.key(index);
    if (key?.startsWith(STORAGE_PREFIX)) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => window.sessionStorage.removeItem(key));
}

async function getOrCreateTranslation(language: Exclude<LanguageCode, 'en'>): Promise<TranslationDictionary> {
  const pending = translationRequests.get(language);
  if (pending) {
    return pending;
  }

  const request = translateDictionary(language)
    .finally(() => {
      translationRequests.delete(language);
    });

  translationRequests.set(language, request);
  return request;
}

async function translateDictionary(language: Exclude<LanguageCode, 'en'>): Promise<TranslationDictionary> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  const prompt = [
    'You are a professional translator.',
    `Translate the following JSON object's values into ${languageNames[language]}.`,
    'Rules:',
    '- Keep ALL JSON keys exactly as-is',
    '- Do NOT translate proper nouns, city names, or brand names',
    '- Do NOT translate the app name "शहर AI"',
    '- Do NOT translate values that are currency symbols (₹) or units (km, km/h)',
    '- Preserve all {placeholder} tokens exactly as they appear e.g. {name}, {city}',
    '- Return ONLY valid JSON. No markdown, no backticks, no explanation.',
    JSON.stringify(sourceTranslations, null, 2),
  ].join('\n');

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  const parsed = JSON.parse(stripCodeFences(responseText)) as TranslationDictionary;

  return parsed;
}

function resolveKey(dictionary: TranslationDictionary, key: string): TranslationValue | undefined {
  return key.split('.').reduce<TranslationValue | undefined>((current, segment) => {
    if (!current || typeof current === 'string') {
      return undefined;
    }

    return current[segment];
  }, dictionary);
}

function stripCodeFences(value: string): string {
  return value
    .trim()
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/, '')
    .trim();
}

'use client';

import { clearTranslationCache } from '../hooks/useTranslation';

const RESULTS_STORAGE_KEY = 'airsafe_results';

interface DirectExploreSessionInput {
  profession: string;
  professions?: string[];
  children?: number | null;
  elderly?: number | null;
}

interface SessionSnapshot {
  userProfile?: {
    profession?: string;
    professions?: string[];
  };
  familyHealth?: {
    children?: number;
    elderly?: number;
  };
}

export function clearAssessmentResults() {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.removeItem(RESULTS_STORAGE_KEY);
}

export function resetPlanningSession() {
  clearAssessmentResults();
  clearTranslationCache();
}

export function storeDirectExploreSession(input: DirectExploreSessionInput) {
  if (typeof window === 'undefined') {
    return;
  }

  const profession = input.profession.trim();
  const professions = (input.professions ?? [profession])
    .map((value) => value.trim())
    .filter(Boolean);

  let existing: SessionSnapshot = {};

  try {
    const raw = window.sessionStorage.getItem(RESULTS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as SessionSnapshot;
      if (parsed && typeof parsed === 'object') {
        existing = parsed;
      }
    }
  } catch (error) {
    console.error('Failed to parse existing planning session:', error);
  }

  const nextSnapshot: SessionSnapshot = {
    ...existing,
    userProfile: {
      ...existing.userProfile,
      profession,
      professions,
    },
    familyHealth: {
      ...existing.familyHealth,
      children: input.children ?? existing.familyHealth?.children ?? 0,
      elderly: input.elderly ?? existing.familyHealth?.elderly ?? 0,
    },
  };

  window.sessionStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(nextSnapshot));
}

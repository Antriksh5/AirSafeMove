'use client';

import { clearTranslationCache } from '../hooks/useTranslation';

const RESULTS_STORAGE_KEY = 'airsafe_results';

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

import type { Language } from "@/context/LanguageContext";

/**
 * Data-layer content (gallery items, case studies) only ships one Tamil
 * variant (`_ta` fields), unlike the `ta` / `ta-native` / `ta-modern` UI
 * copy in lib/translations.ts. Any non-English language uses that single
 * Tamil field, falling back to English if it's missing.
 */
export function localize(language: Language, en: string, ta?: string): string {
  if (language === "en") return en;
  return ta && ta.trim().length > 0 ? ta : en;
}

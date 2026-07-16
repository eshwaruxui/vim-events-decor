"use client";

import { useLanguage, type Language } from "@/context/LanguageContext";

const OPTIONS: { value: Language; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ta", label: "தமிழ்" },
  { value: "ta-native", label: "செந்தமிழ்" },
  { value: "ta-modern", label: "Tanglish" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Choose language"
      className="flex items-center gap-1 rounded-full border border-gold-light/40 bg-white/40 p-1"
    >
      {OPTIONS.map((option) => {
        const isActive = language === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors ${
              isActive
                ? "bg-maroon text-cream"
                : "text-maroon hover:bg-maroon/10"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

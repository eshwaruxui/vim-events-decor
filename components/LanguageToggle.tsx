"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage, type Language } from "@/context/LanguageContext";

const TAMIL_OPTIONS: { value: Language; label: string }[] = [
  { value: "ta", label: "தமிழ்" },
  { value: "ta-native", label: "செந்தமிழ்" },
  { value: "ta-modern", label: "Tanglish" },
];

const TAMIL_VALUES: Language[] = ["ta", "ta-native", "ta-modern"];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isTamilActive = TAMIL_VALUES.includes(language);

  useEffect(() => {
    if (!menuOpen) return;
    function onPointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div
      role="group"
      aria-label="Choose language"
      className="inline-flex w-fit shrink-0 items-center gap-1 self-start rounded-full border border-gold-light/40 bg-white/40 p-1"
    >
      <button
        type="button"
        onClick={() => {
          setLanguage("en");
          setMenuOpen(false);
        }}
        aria-pressed={language === "en"}
        // VIM standard: ease-in-out var(--ease-vim)
        className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-fast ease-vim ${
          language === "en" ? "bg-maroon text-cream" : "text-maroon hover:bg-maroon/10"
        }`}
      >
        EN
      </button>

      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-haspopup="true"
          aria-expanded={menuOpen}
          // VIM standard: ease-in-out var(--ease-vim)
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-fast ease-vim ${
            isTamilActive ? "bg-maroon text-cream" : "text-maroon hover:bg-maroon/10"
          }`}
        >
          தமிழ்
          {/* VIM standard: ease-in-out var(--ease-vim) */}
          <svg
            viewBox="0 0 12 12"
            className={`h-2.5 w-2.5 transition-transform duration-fast ease-vim ${menuOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 4.5l3 3 3-3" />
          </svg>
        </button>

        {menuOpen && (
          <div
            role="menu"
            className="animate-vim-in absolute right-0 top-full z-20 mt-1 min-w-[7rem] origin-top-right overflow-hidden rounded-lg border border-gold-light/40 bg-cream shadow-lg"
          >
            {TAMIL_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                onClick={() => {
                  setLanguage(option.value);
                  setMenuOpen(false);
                }}
                aria-checked={language === option.value}
                // VIM standard: ease-in-out var(--ease-vim)
                className={`block w-full px-3 py-2 text-left text-xs font-medium tracking-wide transition-colors duration-fast ease-vim ${
                  language === option.value
                    ? "bg-maroon text-cream"
                    : "text-maroon hover:bg-maroon/10"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

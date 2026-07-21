"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="reveal border-t border-gold-light/30 py-6 text-center font-body text-sm text-ink"
      style={{ "--d": "0.92s" } as React.CSSProperties}
    >
      <p>{t("footer.since")}</p>
      <a
        href="https://www.eswarcreatives.in"
        target="_blank"
        rel="noopener noreferrer"
        // VIM standard: ease-in-out var(--ease-vim)
        className="text-maroon underline decoration-transparent underline-offset-2 transition-colors duration-fast ease-vim hover:decoration-gold"
      >
        {t("footer.credit")}
      </a>
    </footer>
  );
}

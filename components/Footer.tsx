"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gold-light/30 py-6 text-center font-body text-sm text-ink">
      <p>{t("footer.since")}</p>
      <a
        href="https://www.eswarcreatives.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-maroon underline decoration-transparent underline-offset-2 transition-colors hover:decoration-gold"
      >
        {t("footer.credit")}
      </a>
    </footer>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-20 text-center">
      <h1 className="font-display text-4xl italic text-ink">{t("nav.gallery")}</h1>
      <p className="max-w-md font-body text-muted">
        Our gallery of weddings and celebrations is being curated. Check back soon.
      </p>
    </section>
  );
}

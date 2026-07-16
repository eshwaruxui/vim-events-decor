"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudiesPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-20 text-center">
      <h1 className="font-display text-4xl italic text-ink">{t("nav.caseStudies")}</h1>
      <p className="max-w-md font-body text-muted">
        Detailed stories from our weddings, corporate events, and celebrations are coming soon.
      </p>
    </section>
  );
}

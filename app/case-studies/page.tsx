"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { getCaseStudies } from "@/lib/data/case-studies";

const items = getCaseStudies();

export default function CaseStudiesPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl italic text-ink sm:text-5xl">
          {t("caseStudies.title")}
        </h1>
        <p className="mt-3 font-body text-muted">{t("caseStudies.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {items.map((caseStudy, i) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} priority={i < 3} />
        ))}
      </div>
    </section>
  );
}

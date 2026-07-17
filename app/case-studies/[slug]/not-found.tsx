"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudyNotFound() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-6 py-24 text-center">
      <p className="font-display text-3xl italic text-maroon">
        {t("caseStudies.notFound")}
      </p>
      <Link href="/case-studies" className="font-body text-sm text-maroon hover:underline">
        {t("caseStudies.back")}
      </Link>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/localize";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import type { CaseStudy } from "@/lib/data/case-studies";

const CLIENT_TYPE_BADGE: Record<CaseStudy["client_type"], string> = {
  B2C: "border-gold/40 bg-gold/20 text-maroon",
  B2B: "border-maroon/30 bg-maroon/10 text-maroon",
  B2G: "border-maroon/20 bg-cream-dark text-maroon",
};

function summarize(text: string, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  priority?: boolean;
}

export function CaseStudyCard({ caseStudy, priority = false }: CaseStudyCardProps) {
  const { language, t } = useLanguage();
  const title = localize(language, caseStudy.title, caseStudy.title_ta);
  const clientTypeLabel = localize(
    language,
    caseStudy.client_type_label,
    caseStudy.client_type_label_ta
  );
  const brief = localize(language, caseStudy.brief, caseStudy.brief_ta);

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      // VIM standard: ease-in-out var(--ease-vim)
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-fast ease-vim hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <span
          className={`absolute left-2 top-2 z-10 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${CLIENT_TYPE_BADGE[caseStudy.client_type]}`}
        >
          {clientTypeLabel}
        </span>
        <ImageWithFallback
          src={caseStudy.hero_image_url}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-ink line-clamp-3">
          {title}
        </h3>
        <p className="mt-2 font-body text-[13px] font-light text-muted">
          {summarize(brief)}
        </p>
        <p className="mt-2 font-body text-xs text-muted">
          {caseStudy.location} · {caseStudy.year}
        </p>
        <span className="mt-3 inline-block font-body text-[13px] font-medium text-maroon">
          {t("caseStudies.readMore")} →
        </span>
      </div>
    </Link>
  );
}

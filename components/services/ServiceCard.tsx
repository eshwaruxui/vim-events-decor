"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/localize";
import type { ServiceItem } from "@/lib/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { language, t } = useLanguage();
  const title = localize(language, service.title, service.title_ta);
  const description = localize(language, service.description, service.description_ta);

  return (
    <div className="flex flex-col rounded-lg border border-maroon/10 bg-white p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {service.is_featured && (
          <span className="rounded-full border border-gold/40 bg-gold/20 px-2.5 py-0.5 text-[11px] font-medium text-maroon">
            {t("services.featuredBadge")}
          </span>
        )}
        {service.is_addon && (
          <span className="rounded-full border border-muted/30 bg-cream-dark px-2.5 py-0.5 text-[11px] font-medium text-muted">
            {t("services.addonBadge")}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>

      <p className="mt-2 flex-1 font-body text-sm leading-[1.75] text-muted">
        {description}
      </p>

      <Link
        href={`/contact?service=${service.id}`}
        className="mt-4 inline-flex items-center gap-1 font-body text-[13px] font-medium text-maroon hover:underline"
      >
        {t("services.enquireButton")} →
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/localize";
import { ENQUIRY_MAILTO_URL, WHATSAPP_URL } from "@/lib/constants";
import { CategoryNav } from "@/components/services/CategoryNav";
import { ServiceCard } from "@/components/services/ServiceCard";
import { getServiceCategories } from "@/lib/data/services";

const categories = getServiceCategories();

export default function ServicesPage() {
  const { language, t } = useLanguage();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-12 text-center sm:px-6 sm:pt-16">
        <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
          {t("services.title")}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl font-body font-light text-muted">
          {t("services.subtitle")}
        </p>
        <Link
          href="/gallery"
          className="mt-4 inline-block font-body text-sm text-maroon hover:underline"
        >
          {t("services.viewGallery")} →
        </Link>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-4 lg:gap-10">
        <div className="lg:col-span-1">
          <CategoryNav categories={categories} />
        </div>

        <div className="mt-8 lg:col-span-3 lg:mt-0">
          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-32 pb-14"
            >
              <h2 className="mb-6 flex items-center gap-3 font-display text-[28px] font-bold text-ink">
                <span aria-hidden="true" className="text-maroon">
                  {category.category_icon}
                </span>
                {localize(language, category.category, category.category_ta)}
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="no-print mt-4 bg-maroon px-4 py-12 text-center sm:px-6">
        <h2 className="font-display text-2xl italic text-cream sm:text-3xl">
          {t("services.ctaTitle")}
        </h2>
        <p className="mt-2 font-body text-sm text-cream/80">
          {t("services.ctaSubtitle")}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            // VIM standard: ease-in-out var(--ease-vim)
            className="inline-flex items-center justify-center rounded-xl border border-cream px-6 py-2.5 font-body text-sm text-cream transition-colors duration-fast ease-vim hover:bg-cream hover:text-maroon"
          >
            {t("services.ctaWhatsApp")}
          </a>
          {/* VIM standard: ease-in-out var(--ease-vim) */}
          <a
            href={ENQUIRY_MAILTO_URL}
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-2.5 font-body text-sm text-maroon transition-colors duration-fast ease-vim hover:bg-gold-light"
          >
            {t("services.ctaEnquiry")}
          </a>
        </div>
      </section>
    </div>
  );
}

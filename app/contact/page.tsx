"use client";

import { Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="mt-3 font-body font-light text-muted">{t("contact.subtitle")}</p>
        <a href={`tel:${BRAND.phone}`} className="mt-2 inline-block font-body text-sm text-maroon hover:underline">
          {BRAND.phone}
        </a>
      </div>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </section>
  );
}

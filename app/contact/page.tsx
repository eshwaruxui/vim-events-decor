"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BRAND, ENQUIRY_MAILTO_URL, WHATSAPP_URL } from "@/lib/constants";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-5 px-6 py-20 text-center">
      <h1 className="font-display text-4xl italic text-ink">{t("nav.contact")}</h1>
      <p className="max-w-md font-body text-muted">
        We would love to hear about your celebration. Reach us any of these ways.
      </p>

      <div className="flex flex-col gap-3 font-body text-sm text-maroon">
        <a href={`tel:${BRAND.phone}`} className="hover:underline">
          {BRAND.phone}
        </a>
        <a href={ENQUIRY_MAILTO_URL} className="hover:underline">
          {BRAND.email.hello}
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {t("cta.whatsapp")}
        </a>
      </div>
    </section>
  );
}

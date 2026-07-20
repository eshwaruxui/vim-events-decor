"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/localize";
import { BRAND, ENQUIRY_MAILTO_URL, WHATSAPP_URL } from "@/lib/constants";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ExpandableSection } from "@/components/case-studies/ExpandableSection";
import { Lightbox, type LightboxItem } from "@/components/gallery/Lightbox";
import type { CaseStudy } from "@/lib/data/case-studies";

const CLIENT_TYPE_BADGE: Record<CaseStudy["client_type"], string> = {
  B2C: "border-gold/40 bg-gold/20 text-maroon",
  B2B: "border-maroon/30 bg-maroon/10 text-maroon",
  B2G: "border-maroon/20 bg-cream-dark text-maroon",
};

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [cameFromListing, setCameFromListing] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    try {
      const referrer = document.referrer;
      if (referrer) {
        setCameFromListing(new URL(referrer).pathname === "/case-studies");
      }
    } catch {
      // ignore malformed referrer
    }
  }, []);

  const title = localize(language, caseStudy.title, caseStudy.title_ta);
  const clientTypeLabel = localize(
    language,
    caseStudy.client_type_label,
    caseStudy.client_type_label_ta
  );
  const outcome = localize(language, caseStudy.outcome, caseStudy.outcome_ta);
  const brief = localize(language, caseStudy.brief, caseStudy.brief_ta);
  const challenge = localize(language, caseStudy.challenge, caseStudy.challenge_ta);
  const whatWeDid = localize(language, caseStudy.what_we_did, caseStudy.what_we_did_ta);
  const result = localize(language, caseStudy.result, caseStudy.result_ta);

  const galleryLightboxItems: LightboxItem[] = useMemo(
    () =>
      caseStudy.gallery_images.map((src, i) => ({
        id: `${caseStudy.id}-gallery-${i}`,
        src,
        width: 1200,
        height: 800,
        title: `${title} — ${i + 1}`,
      })),
    [caseStudy.gallery_images, caseStudy.id, title]
  );

  const metaRows = [
    { label: t("caseStudies.location"), value: caseStudy.location },
    {
      label: t("caseStudies.scale"),
      value: `${caseStudy.guest_count} ${t("caseStudies.guestCount")}`,
    },
    { label: t("caseStudies.timeline"), value: caseStudy.timeline },
  ];

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        {cameFromListing ? (
          <button
            type="button"
            onClick={() => router.back()}
            className="font-body text-sm text-maroon hover:underline"
          >
            {t("caseStudies.back")}
          </button>
        ) : (
          <Link
            href="/case-studies"
            className="font-body text-sm text-maroon hover:underline"
          >
            {t("caseStudies.back")}
          </Link>
        )}
      </div>

      <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-maroon">
          {caseStudy.hero_image_url ? (
            <ImageWithFallback
              src={caseStudy.hero_image_url}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-maroon to-maroon-light">
              <Image
                src="/vim-logo.svg"
                alt={BRAND.name}
                width={160}
                height={88}
                className="w-32 opacity-90 sm:w-40"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:grid lg:grid-cols-5 lg:gap-10">
        {/* Mobile compact meta chips */}
        <div className="mb-6 flex gap-2 overflow-x-auto lg:hidden">
          <span
            className={`flex-none whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium ${CLIENT_TYPE_BADGE[caseStudy.client_type]}`}
          >
            {clientTypeLabel}
          </span>
          {metaRows.map((row) => (
            <span
              key={row.label}
              className="flex-none whitespace-nowrap rounded-full border border-muted/20 px-3 py-1 text-xs text-muted"
            >
              {row.label}: <span className="font-medium text-maroon">{row.value}</span>
            </span>
          ))}
          <span className="flex-none whitespace-nowrap rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
            {outcome}
          </span>
        </div>

        <h1 className="mb-6 font-display text-3xl italic text-ink sm:text-4xl lg:col-span-3 lg:order-1">
          {title}
        </h1>

        <div className="lg:order-3 lg:col-span-3">
          <ExpandableSection title={t("caseStudies.theBrief")} defaultOpen>
            <p>{brief}</p>
          </ExpandableSection>
          <ExpandableSection title={t("caseStudies.theChallenge")} defaultOpen>
            <p>{challenge}</p>
          </ExpandableSection>
          <ExpandableSection title={t("caseStudies.whatWeDid")}>
            <p>{whatWeDid}</p>
          </ExpandableSection>
          <ExpandableSection title={t("caseStudies.theResult")}>
            <p>{result}</p>
          </ExpandableSection>
          <ExpandableSection title={t("caseStudies.eventGallery")}>
            <div className="grid grid-cols-2 gap-2">
              {caseStudy.gallery_images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="relative aspect-square overflow-hidden rounded-md"
                >
                  <ImageWithFallback
                    src={src}
                    alt={`${title} — ${i + 1}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </ExpandableSection>
        </div>

        {/* Desktop sticky sidebar */}
        <aside className="hidden lg:sticky lg:top-24 lg:col-span-2 lg:order-2 lg:block lg:h-fit">
          <div className="rounded-lg border border-gold-light/30 bg-white/60 p-5">
            <span
              className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${CLIENT_TYPE_BADGE[caseStudy.client_type]}`}
            >
              {clientTypeLabel}
            </span>

            <dl className="mt-4 space-y-3">
              <MetaRow label={t("caseStudies.clientType")} value={clientTypeLabel} />
              {metaRows.map((row) => (
                <MetaRow key={row.label} label={row.label} value={row.value} />
              ))}
              <div>
                <dt className="font-body text-[11px] uppercase tracking-wide text-muted">
                  {t("caseStudies.outcome")}
                </dt>
                <dd className="mt-1 inline-block rounded-full bg-green-50 px-3 py-1 font-body text-[13px] font-medium text-green-700">
                  {outcome}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={galleryLightboxItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      <section className="no-print mt-4 bg-maroon px-4 py-12 pb-24 text-center sm:px-6 lg:pb-12">
        <h2 className="font-display text-2xl italic text-cream sm:text-3xl">
          {t("caseStudies.ctaTitle")}
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-cream px-6 py-2.5 font-body text-sm text-cream transition-colors hover:bg-cream hover:text-maroon"
          >
            {t("caseStudies.ctaWhatsApp")}
          </a>
          <a
            href={ENQUIRY_MAILTO_URL}
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-2.5 font-body text-sm text-maroon transition-colors hover:bg-gold-light"
          >
            {t("caseStudies.ctaEnquiry")}
          </a>
        </div>
      </section>

      {/* Mobile sticky CTA bar */}
      <div
        className="no-print fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-gold-light/30 bg-white p-3 lg:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl border border-maroon px-4 py-2.5 text-center font-body text-sm text-maroon"
        >
          {t("caseStudies.ctaWhatsApp")}
        </a>
        <a
          href={ENQUIRY_MAILTO_URL}
          className="flex-1 rounded-xl bg-maroon px-4 py-2.5 text-center font-body text-sm text-cream"
        >
          {t("caseStudies.ctaEnquiry")}
        </a>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-body text-[11px] uppercase tracking-wide text-muted">
        {label}
      </dt>
      <dd className="mt-0.5 font-body text-[13px] font-medium text-maroon">
        {value}
      </dd>
    </div>
  );
}

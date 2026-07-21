"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ENQUIRY_MAILTO_URL, WHATSAPP_URL } from "@/lib/constants";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      <Image
        src="/mandala-design-pattern.svg"
        alt=""
        aria-hidden="true"
        width={760}
        height={760}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 w-[min(150vw,760px)] max-w-none -translate-x-1/2 -translate-y-[90%] opacity-[0.13]"
      />
      <Image
        src="/mandala-design-pattern.svg"
        alt=""
        aria-hidden="true"
        width={760}
        height={760}
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-[min(150vw,760px)] max-w-none translate-x-[-50%] translate-y-[68%] opacity-[0.13]"
      />

      <section className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-24">
        <Image
          src="/vim-logo.svg"
          alt="VIM Events & Décor by Thiagarajan — since 1993"
          width={230}
          height={127}
          className="reveal w-40 sm:w-56"
          style={{ "--d": "0.05s" } as React.CSSProperties}
          priority
        />

        <div
          className="reveal flex w-full max-w-sm items-center gap-2"
          style={{ "--d": "0.20s" } as React.CSSProperties}
          aria-hidden="true"
        >
          <Image src="/edge-details.svg" alt="" width={9} height={20} />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-light/60 to-gold/70" />
          <Image src="/middle-details.svg" alt="" width={78} height={20} />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-light/60 to-gold/70" />
          <Image
            src="/edge-details.svg"
            alt=""
            width={9}
            height={20}
            className="-scale-x-100"
          />
        </div>

        <h1
          className="reveal font-display text-4xl italic text-ink sm:text-5xl"
          style={{ "--d": "0.32s" } as React.CSSProperties}
        >
          &ldquo;{t("hero.tagline")}&rdquo;
        </h1>

        <span
          className="reveal inline-flex items-center gap-2 rounded-full border border-gold-light/50 bg-white/40 px-5 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-maroon"
          style={{ "--d": "0.44s" } as React.CSSProperties}
        >
          + {t("hero.pill")} +
        </span>

        <p
          className="reveal max-w-md font-body text-[1.1em] leading-relaxed text-muted"
          style={{ "--d": "0.56s" } as React.CSSProperties}
        >
          {t("hero.body")}
        </p>

        <div
          className="reveal flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center"
          style={{ "--d": "0.68s" } as React.CSSProperties}
        >
          {/* VIM standard: ease-in-out var(--ease-vim) */}
          <a
            href={ENQUIRY_MAILTO_URL}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold-light/50 bg-white/45 px-6 py-2.5 font-body text-sm tracking-wide text-maroon transition-all duration-fast ease-vim hover:-translate-y-0.5 hover:border-maroon hover:bg-maroon hover:text-cream"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span>{t("cta.enquiry")}</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            // VIM standard: ease-in-out var(--ease-vim)
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold-light/50 bg-white/45 px-6 py-2.5 font-body text-sm tracking-wide text-maroon transition-all duration-fast ease-vim hover:-translate-y-0.5 hover:border-maroon hover:bg-maroon hover:text-cream"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24Zm-3.2 4.4c-.15 0-.4.06-.6.29-.21.23-.8.78-.8 1.91 0 1.12.82 2.21.93 2.36.11.15 1.6 2.45 3.89 3.43.54.23.97.37 1.3.48.55.17 1.04.15 1.44.09.44-.07 1.35-.55 1.54-1.08.19-.53.19-.99.13-1.08-.06-.09-.21-.15-.44-.27-.23-.11-1.35-.67-1.56-.74-.21-.08-.36-.11-.51.11-.15.23-.59.74-.72.89-.13.15-.27.17-.5.06-.23-.12-.96-.36-1.84-1.13-.68-.61-1.14-1.36-1.27-1.59-.13-.23-.01-.35.1-.47.1-.1.23-.27.34-.4.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.5-1.25-.7-1.71-.18-.44-.37-.38-.51-.39-.13 0-.28-.01-.43-.01Z" />
            </svg>
            <span>{t("cta.whatsapp")}</span>
          </a>
        </div>

        <div
          className="reveal flex w-full max-w-xs items-center gap-2"
          style={{ "--d": "0.80s" } as React.CSSProperties}
          aria-hidden="true"
        >
          <Image src="/edge-details.svg" alt="" width={9} height={20} />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-light/60 to-gold/70" />
          <Image src="/middle-details-minimal.svg" alt="" width={40} height={20} />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-light/60 to-gold/70" />
          <Image
            src="/edge-details.svg"
            alt=""
            width={9}
            height={20}
            className="-scale-x-100"
          />
        </div>
      </section>
    </div>
  );
}

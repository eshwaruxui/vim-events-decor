"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { WHATSAPP_URL } from "@/lib/constants";

const CASE_STUDY_DETAIL_PATTERN = /^\/case-studies\/[^/]+$/;

export function WhatsAppFloat() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // Case study detail pages have a sticky mobile CTA bar at the bottom —
  // lift the float above it there so the two never overlap.
  const isCaseStudyDetail = CASE_STUDY_DETAIL_PATTERN.test(pathname ?? "");

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("cta.whatsapp")}
      className={`fab-glass no-print fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
        isCaseStudyDetail ? "bottom-[80px] lg:bottom-5" : "bottom-5"
      }`}
    >
      {/* WhatsApp brand green reads better than white on the frosted glass
          against this site's mostly light/cream backgrounds. */}
      <svg viewBox="0 0 24 24" fill="#25D366" className="h-7 w-7" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24Zm-3.2 4.4c-.15 0-.4.06-.6.29-.21.23-.8.78-.8 1.91 0 1.12.82 2.21.93 2.36.11.15 1.6 2.45 3.89 3.43.54.23.97.37 1.3.48.55.17 1.04.15 1.44.09.44-.07 1.35-.55 1.54-1.08.19-.53.19-.99.13-1.08-.06-.09-.21-.15-.44-.27-.23-.11-1.35-.67-1.56-.74-.21-.08-.36-.11-.51.11-.15.23-.59.74-.72.89-.13.15-.27.17-.5.06-.23-.12-.96-.36-1.84-1.13-.68-.61-1.14-1.36-1.27-1.59-.13-.23-.01-.35.1-.47.1-.1.23-.27.34-.4.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.5-1.25-.7-1.71-.18-.44-.37-.38-.51-.39-.13 0-.28-.01-.43-.01Z" />
      </svg>
    </a>
  );
}

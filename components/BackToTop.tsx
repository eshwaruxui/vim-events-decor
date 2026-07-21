"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CASE_STUDY_DETAIL_PATTERN = /^\/case-studies\/[^/]+$/;

export function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Coming soon page has no scroll depth worth a shortcut back to top.
  const isComingSoon = (pathname ?? "/") === "/";
  const isCaseStudyDetail = CASE_STUDY_DETAIL_PATTERN.test(pathname ?? "");

  useEffect(() => {
    if (isComingSoon) return;
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isComingSoon]);

  if (isComingSoon) return null;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Stacked directly above WhatsAppFloat (56px button + 12px gap) at
  // whatever bottom offset WhatsApp itself is using on this page, so the
  // two never collide even where WhatsApp shifts for the case-study
  // mobile CTA bar. safe-area-inset-bottom keeps it clear of the home
  // indicator / gesture bar on notched phones.
  const bottomClass = isCaseStudyDetail
    ? "bottom-[calc(148px+env(safe-area-inset-bottom))] lg:bottom-[calc(88px+env(safe-area-inset-bottom))]"
    : "bottom-[calc(88px+env(safe-area-inset-bottom))]";

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`no-print fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-maroon shadow-lg shadow-maroon/20 transition-opacity duration-200 hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${bottomClass} ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M6 15l6-6 6 6" />
      </svg>
    </button>
  );
}

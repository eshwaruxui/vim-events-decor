"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/localize";
import type { Service } from "@/lib/data/services";

interface CategoryNavProps {
  categories: Service[];
}

/**
 * Links are plain #anchors so navigation works even if JS never
 * loads (edge case: JS disabled). The IntersectionObserver below is
 * a progressive enhancement that highlights the active pill —
 * losing it just means no active-state styling, not broken nav.
 */
export function CategoryNav({ categories }: CategoryNavProps) {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);
  // Not state — this only needs to be read inside event handlers, and
  // making it state would re-run effects/re-render on every touch.
  const isTouchingRef = useRef(false);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          // Highlight-only — this must never trigger a programmatic
          // scroll. Confirmed on a real iPhone: it's not the "smooth"
          // animation that was the problem (switching to "auto" didn't
          // fix it either) — ANY scrollIntoView call fired on a nested
          // horizontal scroller inside this sticky nav, while the page
          // is mid-touch-scroll, steals the gesture from iOS Safari's
          // touch recognizer and snaps the page back. So this callback
          // now only ever sets state; it never touches scroll position.
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    function onTouchStart() {
      isTouchingRef.current = true;
    }
    function onTouchEnd() {
      // Small delay rather than clearing immediately: on mobile the
      // click event following a tap's touchend can still land within
      // the same gesture — this keeps the guard active through that
      // window rather than closing it a frame too early.
      window.setTimeout(() => {
        isTouchingRef.current = false;
      }, 100);
    }
    nav.addEventListener("touchstart", onTouchStart, { passive: true });
    nav.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      nav.removeEventListener("touchstart", onTouchStart);
      nav.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  function handlePillClick(id: string) {
    setActiveId(id);
    // The only place this component ever calls scrollIntoView now: a
    // direct, deliberate pill tap — never scroll-driven. Still guarded
    // and deferred a frame so it can't collide with an in-flight native
    // scroll/touch gesture either.
    window.requestAnimationFrame(() => {
      if (isTouchingRef.current) return;
      const link = navRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${id}"]`);
      link?.scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" });
    });
  }

  return (
    <nav
      ref={navRef}
      aria-label="Service categories"
      className="no-print scrollbar-hide sticky top-[57px] z-20 -mx-4 flex max-h-14 touch-pan-x gap-2 overflow-x-auto bg-cream/95 px-4 py-3 backdrop-blur sm:top-[65px] lg:sticky lg:top-24 lg:mx-0 lg:max-h-none lg:flex-col lg:touch-auto lg:overflow-visible lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {categories.map((category) => {
        const isActive = category.id === activeId;
        return (
          <a
            key={category.id}
            href={`#${category.id}`}
            onClick={() => handlePillClick(category.id)}
            // VIM standard: ease-in-out var(--ease-vim)
            className={`flex flex-none items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 font-body text-sm transition-colors duration-fast ease-vim lg:flex-none lg:rounded-lg ${
              isActive
                ? "border-maroon bg-maroon text-cream"
                : "border-maroon/30 text-ink hover:border-maroon"
            }`}
            style={{ scrollSnapAlign: "center" }}
          >
            <span aria-hidden="true">{category.category_icon}</span>
            <span>{localize(language, category.category, category.category_ta)}</span>
          </a>
        );
      })}
    </nav>
  );
}

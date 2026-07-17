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
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector<HTMLAnchorElement>(
      `a[href="#${activeId}"]`
    );
    activeLink?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [activeId]);

  return (
    <nav
      ref={navRef}
      aria-label="Service categories"
      className="no-print scrollbar-hide sticky top-[57px] z-20 -mx-4 flex max-h-14 gap-2 overflow-x-auto bg-cream/95 px-4 py-3 backdrop-blur sm:top-[65px] lg:sticky lg:top-24 lg:mx-0 lg:max-h-none lg:flex-col lg:overflow-visible lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
    >
      {categories.map((category) => {
        const isActive = category.id === activeId;
        return (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={`flex flex-none items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 font-body text-sm transition-colors lg:flex-none lg:rounded-lg ${
              isActive
                ? "border-maroon bg-maroon text-cream"
                : "border-maroon/30 text-ink hover:border-maroon"
            }`}
          >
            <span aria-hidden="true">{category.category_icon}</span>
            <span>{localize(language, category.category, category.category_ta)}</span>
          </a>
        );
      })}
    </nav>
  );
}

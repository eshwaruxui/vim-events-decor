"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/localize";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { Lightbox, type LightboxItem } from "@/components/gallery/Lightbox";
import type { GalleryItem } from "@/lib/data/gallery";
import type { TranslationKey } from "@/lib/translations";

const PAGE_SIZE = 12;

type FilterValue = GalleryItem["event_type"] | "all";

const FILTERS: { value: FilterValue; key: TranslationKey }[] = [
  { value: "all", key: "gallery.filterAll" },
  { value: "wedding", key: "gallery.filterWedding" },
  { value: "corporate", key: "gallery.filterCorporate" },
  { value: "temple", key: "gallery.filterTemple" },
  { value: "reception", key: "gallery.filterReception" },
];

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [fading, setFading] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    const filtered =
      activeFilter === "all"
        ? items
        : items.filter((item) => item.event_type === activeFilter);
    return [...filtered].sort((a, b) => a.sort_order - b.sort_order);
  }, [items, activeFilter]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      visibleItems.map((item) => ({
        id: item.id,
        src: item.image_url,
        width: item.width,
        height: item.height,
        title: localize(language, item.title, item.title_ta),
        description: localize(language, item.description, item.description_ta),
      })),
    [visibleItems, language]
  );

  function handleFilterChange(next: FilterValue) {
    if (next === activeFilter) return;
    setFading(true);
    window.setTimeout(() => {
      setActiveFilter(next);
      setVisibleCount(PAGE_SIZE);
      setFading(false);
    }, 150);
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery">
        {FILTERS.map((filter) => {
          const isActive = filter.value === activeFilter;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => handleFilterChange(filter.value)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${
                isActive
                  ? "bg-maroon text-cream"
                  : "border border-maroon/30 text-maroon hover:border-maroon"
              }`}
            >
              {t(filter.key)}
            </button>
          );
        })}
      </div>

      {filteredItems.length === 0 ? (
        <GalleryEmptyState />
      ) : (
        <div
          className="transition-opacity duration-200 ease-out"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
            {visibleItems.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                priority={i < 4}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="rounded-full border border-maroon px-6 py-2 font-body text-sm text-maroon transition-colors hover:bg-maroon hover:text-cream"
              >
                {t("gallery.loadMore")}
              </button>
            </div>
          )}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

function GalleryEmptyState() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        aria-hidden="true"
      >
        <path d="M24 4c3 6 3 10 0 14-3-4-3-8 0-14Z" />
        <path d="M24 44c3-6 3-10 0-14-3 4-3 8 0 14Z" />
        <path d="M4 24c6-3 10-3 14 0-4 3-8 3-14 0Z" />
        <path d="M44 24c-6-3-10-3-14 0 4 3 8 3 14 0Z" />
        <circle cx="24" cy="24" r="4" />
      </svg>
      <p className="font-display text-lg italic text-maroon">
        {t("gallery.noResults")}
      </p>
    </div>
  );
}

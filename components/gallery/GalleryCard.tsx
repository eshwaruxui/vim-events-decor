"use client";

import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/localize";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import type { GalleryItem } from "@/lib/data/gallery";
import type { TranslationKey } from "@/lib/translations";

const EVENT_TYPE_KEY: Record<GalleryItem["event_type"], TranslationKey> = {
  wedding: "gallery.filterWedding",
  corporate: "gallery.filterCorporate",
  temple: "gallery.filterTemple",
  reception: "gallery.filterReception",
};

interface GalleryCardProps {
  item: GalleryItem;
  priority?: boolean;
  onClick: () => void;
}

export function GalleryCard({ item, priority = false, onClick }: GalleryCardProps) {
  const { language, t } = useLanguage();
  const title = localize(language, item.title, item.title_ta);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-lg text-left"
    >
      <span className="absolute right-2 top-2 z-10 rounded-full bg-cream/85 px-2.5 py-1 text-[11px] font-medium tracking-wide text-maroon">
        {t(EVENT_TYPE_KEY[item.event_type])}
      </span>

      <ImageWithFallback
        src={item.image_url}
        alt={title}
        width={item.width}
        height={item.height}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full transform-gpu transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />

      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
        aria-hidden="true"
      >
        <span className="font-body text-[13px] font-medium text-white">
          {title}
        </span>
      </span>
    </button>
  );
}

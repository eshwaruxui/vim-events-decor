"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getGalleryItems } from "@/lib/data/gallery";

const items = getGalleryItems();

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl italic text-ink sm:text-5xl">
          {t("gallery.title")}
        </h1>
        <p className="mt-3 font-body text-muted">{t("gallery.subtitle")}</p>
      </div>

      <GalleryGrid items={items} />
    </section>
  );
}

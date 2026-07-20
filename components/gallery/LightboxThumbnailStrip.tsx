"use client";

import { useEffect, useRef } from "react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import type { LightboxItem } from "@/components/gallery/Lightbox";

interface LightboxThumbnailStripProps {
  items: LightboxItem[];
  index: number;
  onSelect: (index: number) => void;
}

// Tiny cream rect + gold diamond motif, no text — the existing site-wide
// placeholder.svg is designed for full-size cards and has text that would
// be illegible at thumbnail scale.
const THUMBNAIL_FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">' +
      '<rect width="56" height="56" fill="#FAF8F5"/>' +
      '<path d="M28 20 L33 28 L28 36 L23 28 Z" fill="#C9A96E"/>' +
      "</svg>"
  );

// Buckets an image's real aspect ratio into one of the three thumbnail
// shapes the design calls for, rather than trusting a filename-derived
// "type" — matches whatever the photo actually is.
function getThumbSize(width: number, height: number): { w: number; h: number } {
  const ratio = width / height;
  if (ratio > 1.15) return { w: 56, h: 42 }; // landscape
  if (ratio < 0.87) return { w: 42, h: 56 }; // portrait
  return { w: 48, h: 48 }; // square
}

export function LightboxThumbnailStrip({ items, index, onSelect }: LightboxThumbnailStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  }, [index]);

  return (
    <div
      className="shrink-0 backdrop-blur"
      style={{
        background: "rgba(0,0,0,0.6)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div
        ref={stripRef}
        role="listbox"
        aria-label="Photo thumbnails"
        // Isolated from the dialog's own swipe-to-navigate handler (which
        // listens on touchstart/touchend at the dialog root) so dragging
        // across thumbnails to scroll the strip can't also fire a main
        // image swipe navigation.
        onTouchStart={(event) => event.stopPropagation()}
        onTouchEnd={(event) => event.stopPropagation()}
        className="scrollbar-hide flex touch-pan-x gap-2 overflow-x-auto"
        style={{
          padding: "12px 16px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, i) => {
          const isActive = i === index;
          const { w, h } = getThumbSize(item.width, item.height);
          return (
            <button
              key={item.id}
              ref={isActive ? activeRef : undefined}
              type="button"
              role="option"
              aria-selected={isActive}
              aria-label={item.title}
              onClick={() => onSelect(i)}
              className="flex shrink-0 flex-col items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              style={{
                minWidth: 44,
                minHeight: 44,
                scrollSnapAlign: "center",
              }}
            >
              <span
                className="block overflow-hidden rounded-md"
                style={{
                  width: w,
                  height: h,
                  opacity: isActive ? 1 : 0.45,
                  border: isActive ? "2px solid #C9A96E" : "2px solid transparent",
                  transition: "opacity 150ms ease-out, border-color 150ms ease-out",
                }}
              >
                <ImageWithFallback
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  width={w}
                  height={h}
                  fallbackSrc={THUMBNAIL_FALLBACK}
                  className="h-full w-full object-cover"
                />
              </span>
              <span
                aria-hidden="true"
                className="block h-1 w-1 rounded-full"
                style={{
                  background: isActive ? "#C9A96E" : "transparent",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useSwipe } from "@/hooks/useSwipe";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { LightboxThumbnailStrip } from "@/components/gallery/LightboxThumbnailStrip";

export interface LightboxItem {
  id: string;
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  title: string;
  description?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;
  // Single-image events have nothing to browse — the strip/counter would
  // just be dead weight, so they're skipped entirely rather than rendered
  // empty or with one inert dot. Driven by the actual array length, not
  // any per-event/category special-casing, so it applies uniformly.
  const showStrip = items.length > 1;

  const goPrev = () => hasPrev && onNavigate(index - 1);
  const goNext = () => hasNext && onNavigate(index + 1);

  const swipeHandlers = useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    // Compensate for the disappearing scrollbar so locking scroll doesn't
    // shift the page content horizontally (a common layout-shift bug).
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items.length]);

  useEffect(() => {
    // Preload only the immediate neighbors, not the whole event's photo
    // set — keeps navigation snappy without fetching images the visitor
    // may never scroll to.
    const neighbors = [items[index - 1], items[index + 1]].filter(
      (neighbor): neighbor is LightboxItem => Boolean(neighbor)
    );
    const preloaded = neighbors.map((neighbor) => {
      const img = new window.Image();
      img.src = neighbor.src;
      return img;
    });
    return () => {
      preloaded.forEach((img) => {
        img.src = "";
      });
    };
  }, [items, index]);

  if (!item) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      // VIM standard: ease-in-out var(--ease-vim). Entrance-only — no exit
      // fade, since the images/index this dialog renders are cleared by
      // the parent the instant it closes and there's nothing to hold a
      // stale frame with (see docs/MOTION.md for the tier rationale).
      className="animate-vim-in-slow fixed inset-0 z-50 flex flex-col bg-black/90"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      onTouchStart={swipeHandlers.onTouchStart}
      onTouchEnd={swipeHandlers.onTouchEnd}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label={t("gallery.lightboxClose")}
        // VIM standard: ease-in-out var(--ease-vim)
        className="absolute right-4 top-[calc(env(safe-area-inset-top)+1rem)] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-fast ease-vim hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* Arrows always render — never disappear — but go visually inert at
          either end of the sequence, per spec: disappearing controls are
          disorienting. */}
      <button
        type="button"
        onClick={goPrev}
        aria-label={t("gallery.lightboxPrev")}
        aria-disabled={!hasPrev}
        disabled={!hasPrev}
        // VIM standard: ease-in-out var(--ease-vim)
        className={`absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-fast ease-vim sm:left-4 ${
          hasPrev ? "hover:bg-white/20" : "cursor-default opacity-30"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label={t("gallery.lightboxNext")}
        aria-disabled={!hasNext}
        disabled={!hasNext}
        // VIM standard: ease-in-out var(--ease-vim)
        className={`absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-fast ease-vim sm:right-4 ${
          hasNext ? "hover:bg-white/20" : "cursor-default opacity-30"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Main image area: grows to fill available space but is never
          crushed below 200px, even if the caption/counter/strip below it
          are tall (e.g. a cramped landscape phone viewport). */}
      <div className="flex min-h-[200px] flex-1 items-center justify-center overflow-hidden px-4 pt-4">
        {/* Wrapper fills 100% of whatever height flexbox actually gives
            the area above (which already accounts for the caption/
            counter/strip below, and the 200px floor) — no hardcoded
            pixel guess needed, and it's automatically correct whether
            those siblings are present or not (e.g. single-image events
            with no strip). Not a clip boundary itself: clipping lives on
            the <img>, since a replaced element's own border-radius
            always clips its own painted content, so there's no
            wrapper-vs-image size mismatch possible (that mismatch was
            the real bug behind an earlier "works small, vanishes large"
            corner-radius inconsistency, not a clipping failure). */}
        <div className="relative flex h-full max-w-[90vw] items-center justify-center">
          <ImageWithFallback
            key={item.id}
            src={item.src}
            alt={item.title}
            width={item.width}
            height={item.height}
            blurDataURL={item.blurDataURL}
            sizes="90vw"
            className="max-h-full max-w-[90vw] rounded-2xl object-contain"
          />
        </div>
      </div>

      {item.title && (
        <div className="shrink-0 px-4 pb-3 pt-4 text-center">
          <p className="font-display text-lg italic text-white">{item.title}</p>
          {item.description && (
            <p className="mt-1 font-body text-sm text-white/70">{item.description}</p>
          )}
        </div>
      )}

      {showStrip && (
        <>
          <p className="shrink-0 pb-2 text-center font-body text-sm font-light text-gold">
            {index + 1} / {items.length}
          </p>
          <LightboxThumbnailStrip items={items} index={index} onSelect={onNavigate} />
        </>
      )}
    </div>
  );
}

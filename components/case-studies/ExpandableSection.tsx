"use client";

import { useId, useState, type ReactNode } from "react";

interface ExpandableSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function ExpandableSection({
  title,
  defaultOpen = false,
  children,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="border-b border-gold-light/30 py-4">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-display text-lg font-semibold text-ink">
          {title}
        </span>
        <span
          aria-hidden="true"
          className="flex h-6 w-6 flex-none items-center justify-center text-xl text-maroon"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* VIM standard: ease-in-out var(--ease-vim) */}
      <div
        id={panelId}
        className="cs-section-panel overflow-hidden transition-[max-height] duration-base ease-vim"
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <div className="pt-3 font-body text-sm leading-[1.8] text-muted">
          {children}
        </div>
      </div>
    </div>
  );
}

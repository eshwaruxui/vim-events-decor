"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { BRAND } from "@/lib/constants";

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// VIM standard: ease-in-out var(--ease-vim) — open/close differ only in
// duration (close reads snappier), never in curve. See docs/MOTION.md.
const OPEN_TRANSITION = {
  transitionDuration: "250ms",
  transitionTimingFunction: "var(--ease-vim)",
};
const CLOSE_TRANSITION = {
  transitionDuration: "200ms",
  transitionTimingFunction: "var(--ease-vim)",
};
const CLOSE_DURATION_MS = 200;

export function Nav() {
  const { t } = useLanguage();
  const pathname = usePathname() ?? "/";
  // `mounted` keeps the drawer in the DOM through its closing transition;
  // `open` drives which end-state (and which duration) it's animating
  // toward. Closing = mounted && !open.
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const unmountTimeoutRef = useRef<number>();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/case-studies", label: t("nav.caseStudies") },
    { href: "/services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
  ];

  function openMenu() {
    if (unmountTimeoutRef.current) window.clearTimeout(unmountTimeoutRef.current);
    setMounted(true);
  }

  function closeMenu() {
    setOpen(false);
    unmountTimeoutRef.current = window.setTimeout(() => {
      setMounted(false);
    }, CLOSE_DURATION_MS + 20);
  }

  // Measures the header's real rendered height (not a hardcoded guess —
  // that previously drifted from actual font-rendering/line-height across
  // browsers and caused the drawer to overlap the logo/close button) and
  // publishes it as --nav-height so the portaled drawer can start exactly
  // at its bottom edge. Re-measures on resize, font load, and language
  // switches (which can reflow the nav to a different height).
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    function setNavHeightVar(height: number) {
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    }
    setNavHeightVar(header.getBoundingClientRect().height);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setNavHeightVar(entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height);
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Runs after the just-mounted drawer has committed at its closed
  // (translateY(-100%), opacity 0) styles. Reading offsetHeight forces the
  // browser to lock those in as the transition's starting point before we
  // flip to the open styles on the next line — without it, mounting
  // "closed" and "open" in the same tick would just paint straight at the
  // open state with no visible transition. Deliberately not
  // requestAnimationFrame here: rAF only fires on an actual compositor
  // frame, which can stall indefinitely for a backgrounded/throttled tab;
  // this needs to fire reliably even then.
  useEffect(() => {
    if (!mounted) return;
    if (panelRef.current) void panelRef.current.offsetHeight;
    setOpen(true);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenu();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  useEffect(() => {
    return () => {
      if (unmountTimeoutRef.current) window.clearTimeout(unmountTimeoutRef.current);
    };
  }, []);

  // Backdrop-filter (the header's `backdrop-blur`) creates a new
  // containing block for any position:fixed descendant, which would
  // resolve this drawer's fixed offsets against the header's own box
  // instead of the viewport. Portaling to <body> keeps it a true
  // viewport-fixed overlay, positioned via --nav-height above.
  const drawer = mounted
    ? createPortal(
        <>
          {/* VIM standard: ease-in-out var(--ease-vim) */}
          <div
            aria-hidden="true"
            onClick={closeMenu}
            className={`fixed inset-x-0 bottom-0 z-20 bg-black transition-opacity md:hidden ${
              open ? "opacity-50" : "opacity-0"
            }`}
            style={{ top: "var(--nav-height)", ...(open ? OPEN_TRANSITION : CLOSE_TRANSITION) }}
          />
          {/* VIM standard: ease-in-out var(--ease-vim) */}
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={`fixed inset-x-0 bottom-0 z-30 flex flex-col gap-3 border-t border-gold-light/30 bg-cream px-4 py-4 shadow-lg transition-[transform,opacity] md:hidden ${
              open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
            style={{ top: "var(--nav-height)", ...(open ? OPEN_TRANSITION : CLOSE_TRANSITION) }}
          >
            <ul className="flex flex-col gap-1 font-body text-sm text-ink">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    {/* VIM standard: ease-in-out var(--ease-vim) */}
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block py-1.5 transition-colors duration-fast ease-vim hover:text-maroon ${
                        active ? "font-medium text-maroon underline underline-offset-4" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <LanguageToggle />
          </div>
        </>,
        document.body
      )
    : null;

  return (
    <header
      ref={headerRef}
      className="no-print sticky top-0 z-30 border-b border-gold-light/30 bg-cream/90 backdrop-blur"
    >
      <nav className="mx-auto max-w-5xl px-4 py-3 sm:px-6">
        {/* 3-zone layout: left (logo) and right (language/menu toggle) are
            fixed-content zones that never resize; the center zone alone
            absorbs space via flex-1, so text-length changes there (e.g.
            switching language) can't shift the logo or toggle position. */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/vim-logo-wo-signature.svg"
                alt={BRAND.name}
                width={405}
                height={180}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <ul className="flex items-center gap-x-4 font-body text-sm text-ink lg:gap-x-5">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href} className="shrink-0 whitespace-nowrap">
                    {/* VIM standard: ease-in-out var(--ease-vim) */}
                    <Link
                      href={link.href}
                      className={`transition-colors duration-fast ease-vim hover:text-maroon ${
                        active ? "font-medium text-maroon underline underline-offset-4" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <button
              type="button"
              onClick={() => (open ? closeMenu() : openMenu())}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="-m-2.5 flex h-11 w-11 items-center justify-center text-maroon md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-6 w-6">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {drawer}
    </header>
  );
}

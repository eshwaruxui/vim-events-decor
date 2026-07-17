"use client";

import { useState } from "react";
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

export function Nav() {
  const { t } = useLanguage();
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/case-studies", label: t("nav.caseStudies") },
    { href: "/#services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="no-print sticky top-0 z-30 border-b border-gold-light/30 bg-cream/90 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Image
              src="/vim-logo.svg"
              alt={BRAND.name}
              width={40}
              height={22}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center text-maroon sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-6 w-6">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>

          <div className="hidden items-center gap-5 sm:flex">
            <ul className="flex items-center gap-x-5 font-body text-sm text-ink">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`transition-colors hover:text-maroon ${
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
        </div>

        {menuOpen && (
          <div className="mt-3 flex flex-col gap-3 pb-3 sm:hidden">
            <ul className="flex flex-col gap-1 font-body text-sm text-ink">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-1.5 transition-colors hover:text-maroon ${
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
        )}
      </nav>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { BRAND } from "@/lib/constants";

export function Nav() {
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/case-studies", label: t("nav.caseStudies") },
    { href: "/#services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-gold-light/30 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/vim-logo.svg"
            alt={BRAND.name}
            width={40}
            height={22}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <ul className="flex w-full flex-wrap items-center gap-x-5 gap-y-1 font-body text-sm text-ink sm:w-auto">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-maroon">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full sm:w-auto">
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}

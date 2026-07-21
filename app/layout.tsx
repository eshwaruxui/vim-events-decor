import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BackToTop } from "@/components/BackToTop";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vimeventsdecor.com"),
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description:
    "For over 30 years, VIM Events & Décor has crafted weddings across Tamil Nadu that are beautiful, personal and unforgettable.",
  openGraph: {
    type: "website",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "For over 30 years, VIM Events & Décor has crafted weddings across Tamil Nadu that are beautiful, personal and unforgettable.",
    images: ["/vim-logo.svg"],
    url: "https://www.vimeventsdecor.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "For over 30 years, VIM Events & Décor has crafted weddings across Tamil Nadu. Our new website is on its way.",
    images: ["/vim-logo.svg"],
  },
  icons: {
    icon: "/vim-logo.svg",
  },
};

export const viewport = {
  themeColor: BRAND.colors.maroon,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable} ${jost.variable}`}>
      <body className="flex min-h-screen flex-col font-body">
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}

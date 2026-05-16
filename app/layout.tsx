import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import JsonLd from "@/components/layout/JsonLd";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Agence Web France | Sites, Shopify & SaaS`,
    template: `%s | ${SITE_NAME} — Agence Web`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "agence web france",
    "création site web",
    "agence shopify france",
    "développeur next.js",
    "création site vitrine",
    "boutique shopify sur-mesure",
    "agence seo france",
    "développement saas",
    "webdesign sur-mesure",
    "agence web professionnelle",
    "refonte site internet",
    "agence web Romans-sur-Isère",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Agence web",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Agence Web France | Sites, Shopify & SaaS`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Agence Web France`,
    description: SITE_DESCRIPTION,
    creator: "@nexivo_fr",
    site: "@nexivo_fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "fr-FR": SITE_URL },
  },
  verification: {
    google: "nexivo-google-verify",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={`${geist.variable} antialiased`}>
        <Providers>
          <LenisProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}

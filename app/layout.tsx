import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import JsonLd from "@/components/layout/JsonLd";
import Background from "@/components/layout/Background";
import PageTransition from "@/components/layout/PageTransition";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const syne = Syne({
  variable: "--font-syne-var",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Agence Web France | Sites, Shopify & SaaS`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Kama Agency, agence web française. Création de sites vitrine, boutiques Shopify et SaaS sur-mesure qui convertissent vos visiteurs en clients. SEO inclus, livrés 3× plus vite que la concurrence.",
  keywords: [
    "agence web france",
    "création site web professionnel",
    "agence shopify france",
    "création boutique shopify",
    "développeur next.js france",
    "création site vitrine professionnel",
    "boutique shopify sur-mesure",
    "agence seo france",
    "référencement naturel",
    "développement saas sur-mesure",
    "webdesign sur-mesure",
    "agence web professionnelle",
    "refonte site internet",
    "agence web Romans-sur-Isère",
    "agence web Drôme",
    "agence web Auvergne Rhône-Alpes",
    "création site e-commerce",
    "développement web react",
    "intégration intelligence artificielle",
    "chatbot ia site web",
    "core web vitals optimisation",
    "ux ui design agence",
    "identité visuelle",
    "agence digitale france",
    "création application web",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Agence web",
  classification: "Business",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Agence Web France | Sites, Shopify & SaaS`,
    description:
      "Kama Agency crée des sites vitrine, boutiques Shopify et SaaS sur-mesure qui convertissent vos visiteurs en clients. SEO inclus, livraison 3× plus rapide.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Agence Web France | Sites, Shopify & SaaS`,
    description:
      "Création de sites vitrine, Shopify et SaaS sur-mesure qui convertissent. SEO inclus, livraison 3× plus rapide.",
    creator: "@kamaagency_fr",
    site: "@kamaagency_fr",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "fr-FR": `${SITE_URL}/`,
      "x-default": `${SITE_URL}/`,
    },
  },
  verification: {
    google: "kamaagency-google-verify",
  },
  other: {
    "msapplication-TileColor": "#111111",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": SITE_NAME,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLd />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
<meta name="theme-color" content="#111111" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geist.variable} ${syne.variable} antialiased`}>
        <Providers>
          <LenisProvider>
            <ScrollProgress />
            <Background />
            <Header />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}

import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/constants";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT.email,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    sameAs: [CONTACT.linkedin, CONTACT.twitter],
    description:
      "Nexivo est une agence web française spécialisée en création de sites vitrine, boutiques Shopify, SaaS sur-mesure et référencement SEO. Nous transformons votre business en machine à vendre.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romans-sur-Isère",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    knowsAbout: [
      "Création de site web",
      "Shopify",
      "Next.js",
      "React",
      "SEO",
      "UX/UI Design",
      "SaaS",
      "E-commerce",
      "WordPress",
    ],
    priceRange: "€€",
    founder: {
      "@type": "Person",
      name: "Nexivo",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: "Agence web française — sites vitrine, Shopify, SaaS, SEO",
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([organization, website]) }}
    />
  );
}

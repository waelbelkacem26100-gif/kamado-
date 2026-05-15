import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT.email,
    sameAs: [CONTACT.linkedin, CONTACT.twitter],
    description: "Agence web spécialisée en sites vitrine, boutiques Shopify et SaaS sur-mesure.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "France",
      addressCountry: "FR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

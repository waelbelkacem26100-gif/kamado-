import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT.email,
    sameAs: [CONTACT.linkedin, CONTACT.twitter],
    jobTitle: "Créateur de sites web & SaaS",
    description:
      "Je conçois des sites qui transforment les visiteurs en clients. Shopify, WordPress, Next.js, SaaS sur-mesure.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romans-sur-Isère",
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

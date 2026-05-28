import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/constants";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "WebDesign"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: `${SITE_NAME} Agence Web`,
    url: SITE_URL,
    email: CONTACT.email,
    telephone: "+33-XXXXXXXXX",
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/logo.png`,
      width: 200,
      height: 60,
      caption: `${SITE_NAME} — Agence Web France`,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og.jpg`,
      width: 1200,
      height: 630,
    },
    sameAs: [CONTACT.linkedin, CONTACT.twitter],
    description:
      "Kama Agency est une agence web française spécialisée en création de sites vitrine, boutiques Shopify, SaaS sur-mesure, SEO et intelligence artificielle. Nous transformons votre business en machine à vendre — livrés 3× plus vite que la concurrence.",
    slogan: "Transformez votre business en machine à vendre",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romans-sur-Isère",
      addressRegion: "Auvergne-Rhône-Alpes",
      postalCode: "26100",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.0481,
      longitude: 5.0519,
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "City", name: "Romans-sur-Isère" },
      { "@type": "City", name: "Valence" },
      { "@type": "City", name: "Grenoble" },
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Paris" },
      { "@type": "City", name: "Bordeaux" },
      { "@type": "City", name: "Marseille" },
      { "@type": "City", name: "Toulouse" },
      { "@type": "City", name: "Nantes" },
      { "@type": "City", name: "Strasbourg" },
      { "@type": "City", name: "Montélimar" },
      { "@type": "City", name: "Chambéry" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "Création de site web",
      "Shopify",
      "Next.js",
      "React",
      "TypeScript",
      "SEO",
      "UX/UI Design",
      "SaaS",
      "E-commerce",
      "WordPress",
      "Intelligence artificielle",
      "Core Web Vitals",
      "Webdesign sur-mesure",
      "Refonte de site internet",
      "Automatisation IA",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services web Kama Agency",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Création site vitrine",
            url: `${SITE_URL}/services/creation-site-vitrine/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Boutique Shopify",
            url: `${SITE_URL}/services/boutique-shopify/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS sur-mesure",
            url: `${SITE_URL}/services/saas-sur-mesure/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Référencement SEO",
            url: `${SITE_URL}/services/referencement-seo/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Webdesign sur-mesure",
            url: `${SITE_URL}/services/webdesign-sur-mesure/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chatbot & IA",
            url: `${SITE_URL}/services/chatbot-ia/`,
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Marie Dupont" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Kama Agency a transformé notre boutique Shopify en machine à vendre. Notre taux de conversion a doublé en 3 mois. Je recommande les yeux fermés.",
        datePublished: "2025-03-01",
        publisher: { "@type": "Organization", name: SITE_NAME },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Thomas Bernard" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Notre SaaS est passé de maquette à production en 8 semaines. Code propre, design premium, zéro compromis sur la qualité.",
        datePublished: "2025-02-15",
        publisher: { "@type": "Organization", name: SITE_NAME },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sophie Laurent" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Site livré en 3 semaines, référencé en première page Google en 2 mois. L'équipe est réactive, professionnelle et obtient des résultats.",
        datePublished: "2025-04-10",
        publisher: { "@type": "Organization", name: SITE_NAME },
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT.email,
      availableLanguage: "French",
      areaServed: "FR",
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Virement bancaire, Chèque",
    foundingDate: "2022",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Agence web française — création de sites vitrine, boutiques Shopify, SaaS sur-mesure, SEO et intelligence artificielle",
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE_NAME} — Agence Web France | Sites, Shopify & SaaS`,
    description:
      "Kama Agency crée des sites vitrine, boutiques Shopify et SaaS sur-mesure qui convertissent vos visiteurs en clients. SEO inclus, livrés 3× plus vite.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    datePublished: "2022-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "fr-FR",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${SITE_URL}/`,
        },
      ],
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "Wael Belkacem",
    jobTitle: "Fondateur & Développeur Lead",
    url: `${SITE_URL}/a-propos/`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: [
      "Next.js", "React", "TypeScript", "Shopify", "Supabase",
      "SEO technique", "Intelligence artificielle", "UX/UI Design",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Romans-sur-Isère",
      postalCode: "26100",
      addressCountry: "FR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website, webPage, person]),
      }}
    />
  );
}

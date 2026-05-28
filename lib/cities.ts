import { SITE_URL } from "@/lib/constants";

export interface CityData {
  slug: string;
  name: string;
  region: string;
  postalCode: string;
  lat: number;
  lng: number;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  context: string;
  faq: { q: string; a: string }[];
}

export const cities: CityData[] = [
  {
    slug: "romans-sur-isere",
    name: "Romans-sur-Isère",
    region: "Drôme",
    postalCode: "26100",
    lat: 45.0481,
    lng: 5.0519,
    metaTitle: "Agence Web Romans-sur-Isère — Création de Site Internet | Kama Agency",
    metaDescription: "Agence web à Romans-sur-Isère : création de sites vitrine, boutiques Shopify, SaaS et référencement SEO. Kama Agency, votre partenaire digital local en Drôme.",
    h1: "Agence web à Romans-sur-Isère",
    intro: "Vous cherchez une agence web à Romans-sur-Isère ? Kama Agency est basée en Drôme et accompagne les entreprises locales dans leur transformation digitale — site vitrine, e-commerce, SaaS sur-mesure et référencement SEO.",
    context: "Romans-sur-Isère est une ville dynamique de la Drôme, au cœur de la région Auvergne-Rhône-Alpes. Sa communauté d'artisans, de commerçants et de PME mérite un outil digital à la hauteur de leur ambition. Kama Agency, installée à Romans, connaît le tissu économique local et vous accompagne avec une approche personnalisée, des délais courts et une vraie proximité.",
    faq: [
      {
        q: "Kama Agency est-elle vraiment basée à Romans-sur-Isère ?",
        a: "Oui, Kama Agency est une agence web fondée et domiciliée à Romans-sur-Isère (Drôme 26100). Nous travaillons avec des clients locaux et dans toute la France.",
      },
      {
        q: "Proposez-vous des rencontres physiques à Romans-sur-Isère ?",
        a: "Absolument. Nous proposons des rendez-vous en présentiel à Romans-sur-Isère ou en visioconférence pour les clients à distance. Un premier appel de découverte de 30 minutes est toujours offert.",
      },
      {
        q: "Quels types de projets web réalisez-vous à Romans-sur-Isère ?",
        a: "Sites vitrine professionnels, boutiques en ligne Shopify, applications SaaS sur-mesure, refonte de site, référencement SEO local et national, chatbots IA. Nous intervenons pour artisans, PME, startups et professionnels libéraux.",
      },
      {
        q: "Quel est le délai pour créer un site web à Romans-sur-Isère ?",
        a: "Un site vitrine est livré en 3 à 5 semaines. Une boutique e-commerce en 4 à 7 semaines. Un SaaS sur-mesure est planifié après un cahier des charges détaillé. Nous respectons toujours les délais annoncés.",
      },
    ],
  },
  {
    slug: "valence",
    name: "Valence",
    region: "Drôme",
    postalCode: "26000",
    lat: 44.9334,
    lng: 4.8924,
    metaTitle: "Agence Web Valence — Création de Site Internet Drôme | Kama Agency",
    metaDescription: "Agence web à Valence (Drôme) : sites vitrine, boutiques Shopify, SEO. Kama Agency crée des sites professionnels qui convertissent, livrés en 3-5 semaines.",
    h1: "Agence web à Valence, Drôme",
    intro: "Vous êtes à Valence et cherchez une agence web capable de créer un site professionnel qui génère vraiment des clients ? Kama Agency intervient à Valence et dans toute la Drôme pour des projets web sur-mesure : sites vitrine, e-commerce, SEO et solutions IA.",
    context: "Valence, préfecture de la Drôme, est l'un des pôles économiques majeurs de la région Auvergne-Rhône-Alpes. Avec un tissu commercial et industriel dense, les entreprises valentioises ont besoin d'une présence digitale solide pour se démarquer. Kama Agency, basée à 20 km à Romans-sur-Isère, intervient régulièrement sur Valence avec la réactivité d'un prestataire local et l'expertise d'une agence digitale professionnelle.",
    faq: [
      {
        q: "Kama Agency intervient-elle à Valence ?",
        a: "Oui, nous intervenons à Valence et dans toute la Drôme. Notre agence est basée à Romans-sur-Isère, à 20 km de Valence. Rendez-vous en présentiel à Valence ou en visioconférence selon votre préférence.",
      },
      {
        q: "Quel est le coût d'un site web professionnel à Valence ?",
        a: "Nos sites vitrine démarrent à partir de 1 000 €. Une boutique Shopify de 500 à 3 000 €. Un SaaS sur-mesure est devisé selon les fonctionnalités. Devis gratuit sous 48h après votre appel de découverte.",
      },
      {
        q: "Faites-vous du référencement SEO local pour les entreprises de Valence ?",
        a: "Oui, nous proposons du SEO local ciblé sur Valence et la Drôme : optimisation Google Business Profile, contenu géolocalisé, netlinking local. Objectif : apparaître en tête des résultats quand vos clients cherchent vos services dans la région.",
      },
      {
        q: "Combien de temps pour créer un site internet à Valence ?",
        a: "Un site vitrine est livré en 3 à 5 semaines, une boutique e-commerce en 4 à 7 semaines. Nous gérons tout le projet de A à Z : design, développement, mise en ligne et formation.",
      },
    ],
  },
  {
    slug: "grenoble",
    name: "Grenoble",
    region: "Isère",
    postalCode: "38000",
    lat: 45.1885,
    lng: 5.7245,
    metaTitle: "Agence Web Grenoble — Création Site Internet Isère | Kama Agency",
    metaDescription: "Agence web à Grenoble : création de sites vitrine, boutiques Shopify, SaaS et SEO. Kama Agency livre des sites performants et référencés en 3-5 semaines.",
    h1: "Agence web à Grenoble, Isère",
    intro: "Vous cherchez une agence web à Grenoble ? Kama Agency accompagne les entreprises grenobloises et isèroises dans la création de sites professionnels, boutiques e-commerce et solutions digitales sur-mesure. Design premium, SEO intégré, livrés rapidement.",
    context: "Grenoble, capitale des Alpes, est un écosystème dynamique mêlant startups technologiques, PME industrielles et commerces de proximité. Dans cette ville résolument tournée vers l'innovation, votre présence digitale se doit d'être à la hauteur de votre ambition. Kama Agency apporte à Grenoble son expertise en développement web Next.js, Shopify et solutions IA — avec la rapidité et l'exigence qualité que les entreprises grenobloises méritent.",
    faq: [
      {
        q: "Kama Agency travaille-t-elle avec des entreprises à Grenoble ?",
        a: "Oui, nous accompagnons des entreprises grenobloises et isèroises depuis notre agence de Romans-sur-Isère. Nous organisons des visioconférences régulières et des déplacements à Grenoble pour les projets importants.",
      },
      {
        q: "Quelles technologies utilisez-vous pour créer des sites web à Grenoble ?",
        a: "Nous développons principalement en Next.js (React), TypeScript et Tailwind CSS pour des sites ultra-performants. Pour les boutiques, nous utilisons Shopify. Pour les applications métier complexes, Supabase comme backend. Tous nos sites obtiennent 95+ sur Lighthouse.",
      },
      {
        q: "Proposez-vous du SEO pour se référencer à Grenoble ?",
        a: "Oui, nous proposons une stratégie SEO locale ciblée Grenoble et Isère : recherche de mots-clés locaux, optimisation technique, contenu géolocalisé et suivi mensuel de votre positionnement sur Google.",
      },
      {
        q: "Comment démarrer un projet web avec Kama Agency depuis Grenoble ?",
        a: "Envoyez-nous votre projet via notre formulaire de contact ou appelez-nous directement. Un appel de découverte de 30 minutes est offert. Nous vous envoyons ensuite un devis détaillé sous 48h, sans engagement.",
      },
    ],
  },
];

export function getCity(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function cityJsonLd(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/agence-web/${city.slug}/#organization`,
    name: "Kama Agency",
    url: SITE_URL,
    telephone: "+33-XXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.region,
      postalCode: city.postalCode,
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
    areaServed: [
      { "@type": "City", name: city.name },
      { "@type": "AdministrativeArea", name: city.region },
    ],
    description: city.metaDescription,
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

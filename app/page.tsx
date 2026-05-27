import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import LogoCarousel from "@/components/sections/LogoCarousel";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ChiffresKeys from "@/components/sections/ChiffresKeys";
import ValueProp from "@/components/sections/ValueProp";
import Offers from "@/components/sections/Offers";
import Projects from "@/components/sections/Projects";
import TerminalSection from "@/components/sections/TerminalSection";
import Reviews from "@/components/sections/Reviews";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABand from "@/components/sections/CTABand";
import ZoneIntervention from "@/components/sections/ZoneIntervention";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: `${SITE_NAME} — Agence Web France | Sites, Shopify & SaaS`,
    description:
      "Kama Agency crée des sites vitrine, boutiques Shopify et SaaS sur-mesure qui convertissent vos visiteurs en clients. SEO inclus, livrés 3× plus vite.",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Agence Web France`,
      },
    ],
  },
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte la création d'un site web avec Kama Agency ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos projets démarrent à partir de 1 000 € pour un site vitrine et peuvent aller jusqu'à 50 000 € pour un SaaS sur-mesure complexe. Chaque projet est devisé précisément après un appel de découverte gratuit — pas de forfaits génériques.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour livrer mon projet ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un site vitrine est livré en 3 à 5 semaines. Une boutique Shopify en 4 à 8 semaines. Un SaaS sur-mesure en 8 à 16 semaines selon la complexité. Nous respectons les délais convenus.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec des clients partout en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, 100% de nos projets sont menés à distance. Nous avons des clients à Paris, Lyon, Bordeaux, Marseille et dans toutes les régions françaises.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous un suivi et une maintenance après la livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous proposons des forfaits de maintenance mensuelle incluant mises à jour de sécurité, sauvegardes automatiques, monitoring des performances et un quota d'heures pour les évolutions.",
      },
    },
    {
      "@type": "Question",
      name: "Intégrez-vous l'intelligence artificielle dans les projets web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, c'est l'une de nos spécialités. Nous intégrons des chatbots IA, des automatisations et des recommandations personnalisées via les APIs OpenAI et Anthropic Claude.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je modifier mon site moi-même après la livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Nous configurons un CMS adapté qui vous permet de modifier textes et images sans compétence technique. Nous vous formons également à son utilisation.",
      },
    },
  ],
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services Kama Agency — Agence Web France",
  description: "Sites vitrine, Shopify, SaaS, SEO, design et intelligence artificielle.",
  url: `${SITE_URL}/#services`,
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Création site vitrine",
      url: `${SITE_URL}/services/creation-site-vitrine/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Boutique Shopify",
      url: `${SITE_URL}/services/boutique-shopify/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SaaS sur-mesure",
      url: `${SITE_URL}/services/saas-sur-mesure/`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Référencement SEO",
      url: `${SITE_URL}/services/referencement-seo/`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Webdesign sur-mesure",
      url: `${SITE_URL}/services/webdesign-sur-mesure/`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Chatbot & IA",
      url: `${SITE_URL}/services/chatbot-ia/`,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <Hero />
      <div className="section-divider" />
      <div className="section-fade-in"><LogoCarousel /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><ProblemSolution /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><ServicesGrid /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><ChiffresKeys /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><ValueProp /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><Projects /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><TerminalSection /></div>
      <div className="section-fade-in"><Reviews /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><BlogPreview /></div>
      <div className="section-fade-in"><CTABand /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><ZoneIntervention /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><Process /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><Offers /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><FAQ /></div>
      <div className="section-divider" />
      <div className="section-fade-in"><ContactForm /></div>
    </>
  );
}

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
  {
    slug: "lyon",
    name: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    postalCode: "69000",
    lat: 45.7640,
    lng: 4.8357,
    metaTitle: "Agence Web Lyon — Création Site Internet Rhône | Kama Agency",
    metaDescription: "Agence web à Lyon : création de sites vitrine, boutiques Shopify, SaaS sur-mesure et SEO. Kama Agency livre des sites performants à Lyon et en Auvergne-Rhône-Alpes.",
    h1: "Agence web à Lyon, Auvergne-Rhône-Alpes",
    intro: "Vous cherchez une agence web à Lyon pour créer ou refondre votre site ? Kama Agency accompagne les entreprises lyonnaises dans leur transformation digitale : sites vitrine performants, boutiques e-commerce, SaaS sur-mesure et référencement SEO. Design premium, livrés en 3-5 semaines.",
    context: "Lyon, deuxième métropole économique de France, concentre un tissu dense de startups, PME, agences et grands comptes. Dans cet environnement compétitif, votre présence digitale est un levier stratégique incontournable. Kama Agency, basée en Auvergne-Rhône-Alpes à Romans-sur-Isère, intervient à Lyon et dans toute la région pour des projets web ambitieux, livrés avec la rigueur technique et la rapidité que les entreprises lyonnaises exigent.",
    faq: [
      { q: "Kama Agency intervient-elle à Lyon ?", a: "Oui, nous accompagnons des entreprises lyonnaises depuis notre agence d'Auvergne-Rhône-Alpes. Nous organisons des visioconférences régulières et pouvons nous déplacer à Lyon pour les projets importants. La distance ne change rien à la qualité du suivi." },
      { q: "Quel est le délai pour créer un site internet à Lyon ?", a: "Un site vitrine est livré en 3 à 5 semaines. Une boutique Shopify en 4 à 7 semaines. Un SaaS sur-mesure est planifié après cahier des charges. Nous respectons scrupuleusement les délais annoncés." },
      { q: "Proposez-vous du SEO local pour les entreprises de Lyon ?", a: "Oui, nous proposons une stratégie SEO locale ciblée Lyon et Rhône : mots-clés géolocalisés, optimisation Google Business Profile, contenu local. Objectif : dominer les résultats pour vos requêtes locales dans la métropole lyonnaise." },
      { q: "Comment obtenir un devis pour un projet web à Lyon ?", a: "Remplissez notre formulaire de contact ou envoyez-nous un email. Un premier appel de 30 minutes est offert. Devis détaillé sous 48h, sans engagement." },
    ],
  },
  {
    slug: "paris",
    name: "Paris",
    region: "Île-de-France",
    postalCode: "75000",
    lat: 48.8566,
    lng: 2.3522,
    metaTitle: "Agence Web Paris — Création Site Internet | Kama Agency",
    metaDescription: "Agence web pour entreprises parisiennes : sites vitrine, Shopify, SaaS et SEO. Kama Agency livre des projets web premium à Paris, 3× plus vite que la concurrence.",
    h1: "Agence web pour entreprises parisiennes",
    intro: "Vous êtes à Paris et cherchez une agence web capable de livrer un site professionnel rapidement, sans compromis sur la qualité ? Kama Agency travaille avec des entreprises parisiennes en full remote : communication fluide, suivi rigoureux, résultats mesurables.",
    context: "Paris concentre des milliers d'entreprises ambitieuses qui cherchent des prestataires digitaux performants. Kama Agency apporte à ses clients parisiens la réactivité d'une équipe dédiée, l'expertise technique d'un développeur senior Next.js, et des tarifs compétitifs par rapport aux agences parisiennes traditionnelles — sans sacrifier un gramme de qualité. 100% en remote, avec des points vidéo réguliers et une disponibilité totale.",
    faq: [
      { q: "Travaillez-vous avec des entreprises à Paris ?", a: "Oui, plusieurs de nos clients sont basés à Paris. Nous travaillons 100% en remote avec des points vidéo hebdomadaires. La distance ne pose aucun problème pour la qualité du suivi et de la communication." },
      { q: "Vos tarifs sont-ils adaptés au marché parisien ?", a: "Nos tarifs sont compétitifs par rapport aux agences parisiennes, tout en offrant le même niveau de qualité technique (Next.js, Lighthouse 95+). Les sites vitrine démarrent à partir de 1 000 €, les boutiques Shopify à partir de 1 500 €." },
      { q: "Comment se déroule un projet à distance avec une équipe à Paris ?", a: "Kickoff en visio, maquettes partagées sur Figma, suivis hebdomadaires, livraison sur staging URL. Nous utilisons Slack, Notion ou l'outil de communication de votre choix. Nos clients parisiens apprécient notre réactivité — réponse sous 4h en heures ouvrées." },
      { q: "Pouvez-vous créer un site vitrine urgent pour une entreprise parisienne ?", a: "Oui, nous pouvons accélérer les délais pour les projets urgents. Un site vitrine peut être livré en 2 à 3 semaines pour les projets simples. Contactez-nous en mentionnant votre deadline." },
    ],
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    postalCode: "33000",
    lat: 44.8378,
    lng: -0.5792,
    metaTitle: "Agence Web Bordeaux — Création Site Internet | Kama Agency",
    metaDescription: "Agence web à Bordeaux : sites vitrine, boutiques Shopify, SEO et SaaS. Kama Agency crée des sites professionnels pour les entreprises bordelaises. Devis gratuit sous 48h.",
    h1: "Agence web à Bordeaux, Nouvelle-Aquitaine",
    intro: "Votre entreprise est à Bordeaux et vous cherchez une agence web capable de créer un site qui génère vraiment des clients ? Kama Agency accompagne les entrepreneurs et PME bordelais : sites vitrine sur-mesure, e-commerce, SEO et solutions IA, livrés en 3-5 semaines.",
    context: "Bordeaux, métropole dynamique de Nouvelle-Aquitaine, est connue pour son dynamisme entrepreneurial et son tissu de PME innovantes. Kama Agency travaille avec des entreprises bordelaises en full remote, avec la même rigueur et la même qualité que pour ses clients locaux. Des rendez-vous en visioconférence réguliers garantissent un suivi parfait, de la maquette à la mise en ligne.",
    faq: [
      { q: "Kama Agency peut-elle créer un site web pour mon entreprise à Bordeaux ?", a: "Oui, nous travaillons avec des entreprises bordelaises en full remote. Appel de découverte, maquettes Figma, développement et livraison — tout se passe en ligne avec des points réguliers. Résultat identique à celui d'une agence locale." },
      { q: "Quel est le coût d'un site vitrine à Bordeaux ?", a: "Nos sites vitrine démarrent à partir de 1 000 €, boutiques e-commerce à partir de 1 500 €. Le devis final dépend du nombre de pages et des fonctionnalités. Premier appel offert, devis sous 48h." },
      { q: "Combien de temps pour créer un site internet à Bordeaux ?", a: "3 à 5 semaines pour un site vitrine, 4 à 7 semaines pour une boutique Shopify. Nous respectons toujours les délais annoncés. En cas d'urgence, des délais raccourcis sont possibles." },
      { q: "Faites-vous du référencement local pour les entreprises de Bordeaux ?", a: "Oui, nous proposons du SEO local ciblé sur Bordeaux et la Nouvelle-Aquitaine : Google Business Profile, mots-clés locaux, contenu géolocalisé. Pour que vous apparaissiez quand vos clients cherchent vos services à Bordeaux." },
    ],
  },
  {
    slug: "marseille",
    name: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    postalCode: "13000",
    lat: 43.2965,
    lng: 5.3698,
    metaTitle: "Agence Web Marseille — Création Site Internet PACA | Kama Agency",
    metaDescription: "Agence web à Marseille : création de sites vitrine, boutiques e-commerce, SEO. Kama Agency crée des sites professionnels pour les entreprises marseillaises en PACA.",
    h1: "Agence web à Marseille, PACA",
    intro: "Vous cherchez une agence web à Marseille pour créer un site professionnel qui attire et convertit vos clients ? Kama Agency accompagne les entreprises marseillaises et provençales : design sur-mesure, SEO technique, e-commerce Shopify, solutions IA. Livrés en 3-5 semaines.",
    context: "Marseille, deuxième ville de France et capitale économique de la région PACA, est un écosystème entrepreneurial en plein essor. Entre startups tech, PME industrielles et commerces de la région, les besoins en présence digitale sont immenses. Kama Agency apporte son expertise Next.js et Shopify aux entreprises marseillaises qui veulent un site à la hauteur de leur ambition — performant, référencé et livré rapidement.",
    faq: [
      { q: "Kama Agency travaille-t-elle avec des entreprises à Marseille ?", a: "Oui, nous accompagnons des entreprises marseillaises et de toute la région PACA en full remote. Visioconférences, partage de maquettes, suivi rigoureux — la distance ne change rien à la qualité du résultat." },
      { q: "Quel est le délai pour créer un site web à Marseille ?", a: "Un site vitrine est livré en 3 à 5 semaines. Une boutique Shopify en 4 à 7 semaines. Nous pouvons accélérer pour les projets urgents. Devis gratuit sous 48h après votre appel de découverte." },
      { q: "Proposez-vous du SEO local pour se référencer à Marseille ?", a: "Oui, nous proposons du SEO local ciblé Marseille et PACA : optimisation Google Business Profile, mots-clés géolocalisés, contenu local. Pour dominer les résultats Google quand vos clients cherchent votre activité à Marseille." },
      { q: "Quels types de projets réalisez-vous pour les entreprises marseillaises ?", a: "Sites vitrine, boutiques Shopify, refonte de site, référencement SEO, SaaS sur-mesure, chatbots IA. Nous intervenons pour tous types d'entreprises : artisans, PME, startups, professionnels libéraux." },
    ],
  },
  {
    slug: "toulouse",
    name: "Toulouse",
    region: "Occitanie",
    postalCode: "31000",
    lat: 43.6047,
    lng: 1.4442,
    metaTitle: "Agence Web Toulouse — Création Site Internet Occitanie | Kama Agency",
    metaDescription: "Agence web à Toulouse : sites vitrine, boutiques Shopify, SaaS et SEO. Kama Agency crée des sites professionnels pour les entreprises toulousaines. Devis gratuit.",
    h1: "Agence web à Toulouse, Occitanie",
    intro: "Vous êtes à Toulouse et cherchez une agence web sérieuse, capable de créer un site qui génère réellement des prospects ? Kama Agency accompagne les entreprises toulousaines : sites vitrine optimisés SEO, boutiques e-commerce, SaaS et chatbots IA. Résultats mesurables, délais respectés.",
    context: "Toulouse, capitale de l'Occitanie et troisième ville de France, est l'un des pôles technologiques les plus dynamiques du pays. Entre l'aéronautique, les startups deeptech et un commerce local florissant, les entreprises toulousaines ont des besoins digitaux variés et exigeants. Kama Agency apporte son expertise full-stack Next.js et Shopify aux projets toulousains, avec la réactivité d'une équipe digitale native et le pragmatisme d'un partenaire orienté résultats.",
    faq: [
      { q: "Kama Agency intervient-elle à Toulouse ?", a: "Oui, nous travaillons avec des entreprises toulousaines en full remote. La distance ne pose aucun problème : appels vidéo, maquettes Figma partagées, livraison sur URL de staging. Vous validez chaque étape à votre rythme." },
      { q: "Quels sont les prix d'une agence web à Toulouse ?", a: "Nos tarifs sont compétitifs : sites vitrine à partir de 1 000 €, boutiques Shopify à partir de 1 500 €, SaaS sur-mesure à partir de 5 000 €. Devis détaillé gratuit sous 48h après votre appel de découverte." },
      { q: "Créez-vous des sites pour les startups et scale-ups toulousaines ?", a: "Oui, c'est l'un de nos profils clients privilégiés. Nous avons l'habitude des cycles courts, des pivots et des besoins techniques avancés des startups. Next.js, Supabase, Stripe, API IA — notre stack est parfaitement adaptée aux projets tech ambitieux." },
      { q: "Combien de temps pour livrer un site internet à Toulouse ?", a: "3 à 5 semaines pour un site vitrine, 4 à 7 semaines pour une boutique e-commerce. Nous travaillons en itérations avec des points de validation réguliers pour rester alignés sur votre vision." },
    ],
  },
  {
    slug: "nantes",
    name: "Nantes",
    region: "Pays de la Loire",
    postalCode: "44000",
    lat: 47.2184,
    lng: -1.5536,
    metaTitle: "Agence Web Nantes — Création Site Internet Pays de la Loire | Kama Agency",
    metaDescription: "Agence web à Nantes : sites vitrine, boutiques Shopify, SEO et SaaS sur-mesure. Kama Agency accompagne les entreprises nantaises dans leur transformation digitale.",
    h1: "Agence web à Nantes, Pays de la Loire",
    intro: "Vous cherchez une agence web à Nantes pour créer un site professionnel qui attire et convertit ? Kama Agency accompagne les entreprises nantaises et ligériennes : sites vitrine sur-mesure, boutiques Shopify, SEO et solutions IA. Design premium, code propre, livraison en 3-5 semaines.",
    context: "Nantes, métropole des Pays de la Loire, s'est imposée comme l'une des villes les plus attractives de France pour les entrepreneurs et les entreprises innovantes. Son tissu de startups, PME et ETI est en pleine croissance. Kama Agency accompagne les entreprises nantaises avec la même rigueur et la même exigence technique que pour ses clients locaux — en full remote, avec des outils de collaboration modernes et une communication irréprochable.",
    faq: [
      { q: "Kama Agency crée-t-elle des sites web pour les entreprises de Nantes ?", a: "Oui, nous accompagnons des entreprises nantaises en full remote. Appel de découverte, maquettes validées ensemble, développement et livraison — tout est fluide à distance grâce à nos outils de collaboration." },
      { q: "Quel est le tarif d'un site web professionnel à Nantes ?", a: "Sites vitrine à partir de 1 000 €, boutiques Shopify à partir de 1 500 €, SaaS sur-mesure à partir de 5 000 €. Nos prix sont compétitifs par rapport aux agences nantaises, pour un niveau de qualité technique supérieur. Devis gratuit sous 48h." },
      { q: "Proposez-vous du SEO pour les entreprises nantaises ?", a: "Oui, nous proposons du SEO local ciblé Nantes et Pays de la Loire. Optimisation technique, contenu géolocalisé, Google Business Profile — pour dominer les résultats Google sur votre marché local." },
      { q: "Comment démarrer un projet web avec Kama Agency depuis Nantes ?", a: "Remplissez notre formulaire de contact ou appelez-nous directement. Un premier appel de 30 minutes est offert. Nous vous proposons ensuite un devis détaillé sous 48h, sans aucun engagement de votre part." },
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

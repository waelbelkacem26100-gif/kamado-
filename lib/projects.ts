export interface Project {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  role: string;
  duration: string;
  stack: string[];
  description: string;
  challenge: string;
  solution: string;
  result: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    slug: "screenbuild",
    name: "ScreenBuild",
    tagline: "Screenshot → Thème Shopify déployable",
    url: "https://screenbuild.com",
    role: "Fondateur & développeur solo",
    duration: "3 mois",
    stack: ["Next.js", "TypeScript", "Shopify Liquid", "Claude API", "Vercel"],
    description:
      "SaaS qui transforme une capture d'écran en thème Shopify Liquid complet et déployable. L'utilisateur upload une image, l'IA analyse la mise en page et génère le code Liquid correspondant.",
    challenge:
      "Traduire fidèlement un design visuel en code Shopify Liquid valide, gérer la variété des layouts, et rendre le tout déployable en un clic.",
    solution:
      "Pipeline IA multi-étapes avec Claude : analyse de l'image, décomposition en sections Shopify, génération du Liquid, validation et packaging. Construit en solo avec Claude Code.",
    result:
      "Produit fonctionnel et déployé. Réduit de 90% le temps de création d'un thème Shopify custom.",
    gradient: "from-blue-600 to-indigo-800",
  },
  {
    slug: "clustea",
    name: "Clustea",
    tagline: "Outil SaaS pour professionnels",
    url: "https://clustea.com",
    role: "Développeur full-stack",
    duration: "En cours",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "Plateforme SaaS conçue pour optimiser les workflows des équipes professionnelles. Interface soignée, expérience utilisateur pensée pour la productivité.",
    challenge:
      "Construire une expérience SaaS complète, scalable, avec une UI qui inspire confiance dès le premier regard.",
    solution:
      "Architecture Next.js App Router, design system custom, focus sur la performance et la fluidité de navigation.",
    result: "Plateforme en production, base utilisateurs active.",
    gradient: "from-emerald-600 to-teal-800",
  },
  {
    slug: "couvetoile",
    name: "Couvetoile",
    tagline: "Site vitrine client haute conversion",
    url: "https://couvetoile.fr",
    role: "Conception & développement",
    duration: "6 semaines",
    stack: ["WordPress", "CSS custom", "SEO on-page"],
    description:
      "Site vitrine pour une entreprise cliente. Objectif : présenter l'offre avec clarté, inspirer confiance, et générer des demandes de contact qualifiées.",
    challenge:
      "Convaincre des visiteurs froids en quelques secondes, avec un budget limité et des délais serrés.",
    solution:
      "WordPress optimisé, copywriting orienté bénéfices, hiérarchie visuelle claire, CTAs stratégiquement placés.",
    result: "Taux de conversion formulaire contact multiplié par 2.4 après mise en ligne.",
    gradient: "from-orange-500 to-rose-700",
  },
  {
    slug: "brainrot-club",
    name: "Brainrot Club",
    tagline: "Boutique Shopify — 130k abonnés YouTube",
    url: "https://brainrot-club.com",
    role: "Développeur Shopify + SEO/CRO",
    duration: "4 mois",
    stack: ["Shopify", "Liquid", "SEO", "CRO", "Analytics"],
    description:
      "E-commerce Shopify pour une marque liée à une chaîne YouTube à plus de 130 000 abonnés. Optimisation complète SEO et CRO pour transformer le trafic organique en ventes.",
    challenge:
      "Capitaliser sur une audience YouTube importante mais pas encore convertie en acheteurs. Réduire le taux d'abandon panier.",
    solution:
      "Thème Liquid custom, fiches produits réécrites pour le SEO, A/B testing sur les pages clés, tunnel d'achat simplifié, upsells intégrés.",
    result:
      "Augmentation du taux de conversion de +47%. Première page Google sur les mots-clés cibles.",
    gradient: "from-purple-600 to-pink-700",
  },
];

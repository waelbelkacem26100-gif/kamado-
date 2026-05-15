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
    role: "Conception & développement SaaS",
    duration: "3 mois",
    stack: ["Next.js", "TypeScript", "Shopify Liquid", "Claude API", "Vercel"],
    description:
      "SaaS qui transforme une capture d'écran en thème Shopify Liquid complet et déployable. L'utilisateur upload une image, l'IA analyse la mise en page et génère le code correspondant.",
    challenge:
      "Traduire fidèlement un design visuel en code Shopify Liquid valide et déployable en un clic.",
    solution:
      "Pipeline IA multi-étapes avec Claude : analyse image, décomposition en sections Shopify, génération Liquid, validation et packaging.",
    result: "Réduit de 90% le temps de création d'un thème Shopify custom.",
    gradient: "from-blue-600 to-indigo-800",
  },
  {
    slug: "clustea",
    name: "Clustea",
    tagline: "Plateforme SaaS B2B",
    url: "https://clustea.com",
    role: "Développement full-stack",
    duration: "En cours",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description:
      "Plateforme SaaS conçue pour optimiser les workflows des équipes professionnelles. Interface soignée, UX pensée pour la productivité.",
    challenge:
      "Construire une expérience SaaS complète, scalable, avec une UI qui inspire confiance.",
    solution:
      "Architecture Next.js App Router, design system custom, focus sur performance et fluidité.",
    result: "Plateforme en production, base utilisateurs active.",
    gradient: "from-emerald-600 to-teal-800",
  },
  {
    slug: "couvetoile",
    name: "Couvetoile",
    tagline: "Site vitrine haute conversion",
    url: "https://couvetoile.fr",
    role: "Conception & développement",
    duration: "6 semaines",
    stack: ["WordPress", "CSS custom", "SEO on-page"],
    description:
      "Site vitrine client conçu pour convertir les visiteurs en prospects qualifiés. Hiérarchie visuelle claire, CTAs stratégiques.",
    challenge:
      "Convaincre des visiteurs froids en quelques secondes avec un budget maîtrisé.",
    solution:
      "WordPress optimisé, copywriting orienté bénéfices, structure de conversion éprouvée.",
    result: "Taux de conversion formulaire multiplié par 2,4 après mise en ligne.",
    gradient: "from-orange-500 to-rose-700",
  },
  {
    slug: "brainrot-club",
    name: "Brainrot Club",
    tagline: "E-commerce Shopify — 130k abonnés",
    url: "https://brainrot-club.com",
    role: "Développement Shopify + SEO/CRO",
    duration: "4 mois",
    stack: ["Shopify", "Liquid", "SEO", "CRO", "Analytics"],
    description:
      "E-commerce pour une marque liée à une chaîne YouTube à 130k abonnés. Optimisation complète SEO et CRO pour convertir le trafic en ventes.",
    challenge:
      "Transformer une audience YouTube en acheteurs. Réduire le taux d'abandon panier.",
    solution:
      "Thème Liquid custom, fiches produits SEO, A/B testing, tunnel d'achat simplifié, upsells intégrés.",
    result: "Taux de conversion +47%. Première page Google sur les mots-clés cibles.",
    gradient: "from-purple-600 to-pink-700",
  },
];

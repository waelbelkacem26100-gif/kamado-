export interface ProjectPhase {
  phase: string;
  duration: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  image: string;
  role: string;
  duration: string;
  stack: string[];
  description: string;
  challenge: string;
  solution: string;
  result: string;
  gradient: string;
  metrics?: { value: string; label: string }[];
  features?: string[];
  timeline?: ProjectPhase[];
}

export const projects: Project[] = [
  {
    slug: "screenbuild",
    name: "ScreenBuild",
    tagline: "Screenshot → Thème Shopify déployable en un clic",
    url: "https://screenbuild.com",
    role: "Conception, architecture & développement SaaS complet",
    duration: "3 mois",
    stack: ["Next.js 14", "TypeScript", "Shopify Liquid", "Claude API", "Stripe", "Supabase", "Vercel"],
    description:
      "ScreenBuild est un SaaS pionnier qui transforme n'importe quelle capture d'écran en thème Shopify Liquid complet et déployable directement en boutique. L'utilisateur upload une image — maquette Figma, capture d'un site concurrent, wireframe papier photographié — et le pipeline IA analyse la mise en page, décompose les sections, génère le code Liquid valide et produit un fichier .zip prêt à uploader sur Shopify. Ce qui prenait des jours à un développeur Liquid se fait en 2 minutes.",
    challenge:
      "Le défi principal était double : d'abord, obtenir une analyse visuelle suffisamment précise pour identifier les composants (header, hero, cards, footer) avec leurs proportions et hiérarchies. Ensuite, générer du Liquid valide conforme aux standards Shopify OS 2.0 — avec les bons schémas de sections, les blocks JSON corrects et la gestion des variables Liquid — sans hallucinations ou code non fonctionnel.",
    solution:
      "Nous avons construit un pipeline IA multi-étapes avec Claude 3.5 Sonnet : première passe d'analyse visuelle qui identifie et nomme les composants avec leur structure, deuxième passe de génération Liquid par composant avec validation syntaxique automatique, troisième passe d'assemblage et vérification de la cohérence globale. Un système de fallback gère les cas ambigus en remplaçant les sections incertaines par des placeholders documentés. L'architecture Next.js App Router avec API Routes serverless permet de gérer les appels IA longs sans timeout.",
    result:
      "ScreenBuild réduit de 90% le temps de création d'un thème Shopify custom. Un thème qui demandait 3 à 5 jours de développement Liquid sort en 2 minutes. En beta privée, les 50 premiers utilisateurs ont généré plus de 300 thèmes. Le taux de satisfaction sur la qualité du code généré atteint 84%, avec seulement 16% nécessitant des ajustements manuels mineurs.",
    gradient: "from-blue-600 to-indigo-800",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=800&q=80&auto=format&fit=crop",
    metrics: [
      { value: "−90%", label: "Temps de développement" },
      { value: "2 min", label: "Génération d'un thème" },
      { value: "300+", label: "Thèmes générés en beta" },
      { value: "84%", label: "Code prêt sans retouche" },
    ],
    features: [
      "Upload d'image avec prévisualisation immédiate",
      "Pipeline IA multi-étapes (analyse → génération → validation)",
      "Téléchargement du thème .zip prêt pour Shopify",
      "Authentification et gestion des crédits (Stripe)",
      "Historique des thèmes générés par utilisateur",
      "Dashboard admin avec métriques d'usage",
    ],
    timeline: [
      { phase: "Discovery & Architecture", duration: "Semaines 1-2", description: "Définition du MVP, architecture du pipeline IA multi-étapes et conception de l'API Shopify Liquid." },
      { phase: "Pipeline IA core", duration: "Semaines 3-6", description: "Développement du pipeline Claude API (analyse visuelle → génération Liquid → validation syntaxique)." },
      { phase: "Intégrations SaaS", duration: "Semaines 7-10", description: "Stripe (crédits), authentification, historique des générations et dashboard admin." },
      { phase: "Beta & optimisation", duration: "Semaines 11-12", description: "Tests avec les 50 premiers utilisateurs, corrections et optimisation du taux de succès à 84%." },
    ],
  },
  {
    slug: "clustea",
    name: "Clustea",
    tagline: "SaaS B2B — plateforme de gestion d'équipes et de workflows",
    url: "https://clustea.com",
    role: "Architecture, développement full-stack & design system",
    duration: "En cours (8 semaines pour MVP)",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Prisma", "Vercel", "Resend"],
    description:
      "Clustea est une plateforme SaaS B2B conçue pour optimiser les workflows des équipes professionnelles. Elle centralise la gestion de projets, l'attribution des tâches, le suivi de la performance et la communication inter-équipes dans une interface unifiée qui priorise la clarté et l'efficacité. L'objectif : éliminer la fragmentation des outils et réduire les frictions dans la coordination quotidienne.",
    challenge:
      "Construire une expérience SaaS complète avec une qualité d'interface digne des meilleurs outils du marché (Notion, Linear) en 8 semaines, avec authentification multi-tenant robuste, permissions granulaires par rôle, gestion des workspaces, et une UI assez intuitive pour ne nécessiter aucune formation. Le tout sur une architecture scalable qui peut passer de 10 à 10 000 utilisateurs sans refactoring.",
    solution:
      "Architecture Next.js App Router avec Server Components pour la performance, Supabase pour la base de données et l'authentification (Row Level Security pour l'isolation des tenants), Prisma comme ORM type-safe, et Resend pour les emails transactionnels. Le design system custom a été construit avec des composants Tailwind encapsulés, garantissant la cohérence visuelle à mesure que le produit grandit. Les permissions sont gérées via un système de middleware centralisé.",
    result:
      "Le MVP a été mis en production en 8 semaines. La plateforme compte aujourd'hui une base d'utilisateurs actifs croissante. Les retours utilisateurs soulignent la fluidité de l'interface et l'absence de courbe d'apprentissage. Le score Lighthouse est systématiquement au-dessus de 92/100. Des nouvelles fonctionnalités sont déployées en continu en mode Agile.",
    gradient: "from-emerald-600 to-teal-800",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&auto=format&fit=crop",
    metrics: [
      { value: "8 sem", label: "MVP en production" },
      { value: "92+", label: "Score Lighthouse" },
      { value: "0", label: "Formation requise" },
      { value: "∞", label: "Scalabilité tenant" },
    ],
    features: [
      "Multi-tenant avec isolation Row Level Security",
      "Gestion des rôles et permissions granulaires",
      "Tableaux de bord en temps réel (Supabase Realtime)",
      "Notifications email transactionnelles (Resend)",
      "Design system custom avec 40+ composants",
      "CI/CD automatisé via Vercel avec previews par PR",
    ],
    timeline: [
      { phase: "Discovery & Design système", duration: "Semaine 1", description: "Architecture multi-tenant, conception du schéma de données Prisma et design system custom." },
      { phase: "Authentification & permissions", duration: "Semaines 2-3", description: "Auth Supabase avec Row Level Security, système de rôles (admin, membre, viewer) et workspaces." },
      { phase: "Fonctionnalités métier", duration: "Semaines 4-6", description: "Gestion de projets, attribution de tâches, tableaux de bord temps réel et notifications email." },
      { phase: "Tests & lancement MVP", duration: "Semaines 7-8", description: "Tests de charge, CI/CD Vercel avec previews automatiques et mise en production en 8 semaines." },
    ],
  },
  {
    slug: "couvetoile",
    name: "Couvetoile",
    tagline: "Site vitrine haute conversion — ×2,4 leads qualifiés",
    url: "https://couvetoile.fr",
    role: "Stratégie UX, conception & développement complet",
    duration: "6 semaines",
    stack: ["WordPress", "CSS custom", "JavaScript", "SEO on-page", "Google Analytics 4"],
    description:
      "Couvetoile est un artisan couvreur installé en Auvergne-Rhône-Alpes qui manquait de présence digitale professionnelle. Son ancien site, créé il y a 8 ans, ne répondait plus aux standards mobiles, chargeait lentement et ne généraient que 3 à 4 contacts par mois. La mission : créer un site vitrine qui positionne Couvetoile comme une référence locale de confiance, visible sur Google pour les requêtes clés, et qui convertit les visiteurs en prospects qualifiés.",
    challenge:
      "Le défi de la couverture artisanale en ligne : les visiteurs sont des particuliers en situation d'urgence (infiltration, rénovation de toiture) ou qui comparent des devis. Ils décident en moins de 30 secondes si l'artisan inspire confiance. Un design générique fait fuir immédiatement. Il fallait créer une première impression premium avec un budget maîtrisé, des preuves sociales crédibles, et un formulaire de contact ultra-simple pour réduire la friction.",
    solution:
      "Nous avons développé un thème WordPress entièrement sur-mesure (sans constructeur de page pour la performance). La stratégie UX s'est articulée autour de trois principes : réassurance immédiate (photos de chantiers réels, années d'expérience, zone d'intervention), preuve sociale visible dès le hero (avis Google intégrés), et CTA persistant (numéro de téléphone always-visible sur mobile). Le SEO local a été travaillé dès la conception : balisage hreflang, schema LocalBusiness, optimisation des requêtes \"couvreur [ville]\".",
    result:
      "Après mise en ligne, le formulaire de contact a généré 2,4 fois plus de leads qualifiés par rapport à l'ancien site, dès le premier mois. Le site s'est positionné en première page Google sur 8 requêtes locales clés dans les 10 semaines. Le taux de rebond a chuté de 74% à 41%. Couvetoile a dû recruter un apprenti pour absorber le surplus de demandes.",
    gradient: "from-orange-500 to-rose-700",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    metrics: [
      { value: "×2,4", label: "Leads qualifiés" },
      { value: "−45%", label: "Taux de rebond" },
      { value: "6 sem", label: "Livraison" },
      { value: "#1", label: "Google local" },
    ],
    features: [
      "Thème WordPress 100% custom (sans Elementor)",
      "Galerie de réalisations avec filtrage par type de toiture",
      "Formulaire de devis en 3 étapes avec notification email",
      "Intégration des avis Google (schema Review)",
      "Page par zone géographique pour le SEO local",
      "Score Lighthouse : 91/100 Performance",
    ],
    timeline: [
      { phase: "Audit & stratégie UX", duration: "Semaine 1", description: "Analyse du site existant, recherche des mots-clés locaux et définition de l'architecture de conversion." },
      { phase: "Développement WordPress", duration: "Semaines 2-4", description: "Thème enfant custom sans Elementor, galerie réalisations, formulaire 3 étapes et CTA mobile persistant." },
      { phase: "SEO local & contenu", duration: "Semaine 5", description: "Pages par zone géographique, schema LocalBusiness, optimisation on-page et Google Search Console." },
      { phase: "Lancement & monitoring", duration: "Semaine 6", description: "Mise en ligne, suivi des positions sur 8 mots-clés cibles et premières optimisations post-lancement." },
    ],
  },
  {
    slug: "brainrot-club",
    name: "Brainrot Club",
    tagline: "E-commerce Shopify — +47% conversion pour 130k abonnés YouTube",
    url: "https://brainrot-club.com",
    role: "Développement Shopify Liquid + stratégie SEO/CRO complète",
    duration: "4 mois",
    stack: ["Shopify", "Liquid", "JavaScript", "SEO", "CRO", "Google Analytics 4", "Meta Pixel", "Klaviyo"],
    description:
      "Brainrot Club est la boutique e-commerce d'une marque liée à une chaîne YouTube à 130 000 abonnés dans la niche gaming/humour. La boutique existait depuis 2 ans sur un thème Shopify standard mais sous-performait dramatiquement : taux de conversion de 1,2% (la moyenne e-commerce est 2-3%), taux d'abandon panier de 78%, aucune présence SEO. L'audience YouTube existait, le potentiel aussi — mais la boutique ne convertissait pas.",
    challenge:
      "Transformer une audience jeune, habituée au contenu gratuit YouTube, en acheteurs réguliers. Ce public est particulièrement méfiant vis-à-vis des marques commerciales et très sensible à l'authenticité. Le thème générique existant ne reflétait pas l'identité de la chaîne. Le tunnel d'achat avait trop d'étapes. Les fiches produits n'étaient pas optimisées pour la conversion ni le SEO. Et l'abandon panier n'était suivi par aucune automation email.",
    solution:
      "Nous avons refait intégralement le thème Shopify en Liquid custom, en s'inspirant de l'univers visuel de la chaîne YouTube (couleurs, terminologie, ton humoristique). La fiche produit a été repensée avec des éléments de CRO prouvés : urgence (stock limité), preuve sociale (nombre de vendus), FAQ anti-objections, upsell intelligent. Le tunnel de paiement a été simplifié (suppression de 2 étapes inutiles). Les flows Klaviyo ont été configurés : abandon panier (3 emails), post-achat, winback. Et une stratégie SEO a positionné la boutique sur des mots-clés niche à fort intent.",
    result:
      "Le taux de conversion est passé de 1,2% à 1,8% — une augmentation de 47% — en 6 semaines après le lancement du nouveau thème. La boutique s'est positionnée en première page Google sur ses 12 mots-clés cibles principaux en 8 semaines. Les flows Klaviyo récupèrent désormais 18% des paniers abandonnés. Le CA mensuel a progressé de 340% sur les 4 premiers mois post-refonte.",
    gradient: "from-purple-600 to-pink-700",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
    metrics: [
      { value: "+47%", label: "Taux de conversion" },
      { value: "+340%", label: "CA mensuel" },
      { value: "18%", label: "Paniers récupérés" },
      { value: "#1", label: "Google sur 12 mots-clés" },
    ],
    features: [
      "Thème Liquid 100% custom dans l'univers de la chaîne",
      "Fiche produit CRO avec urgence, social proof & upsell",
      "Tunnel d'achat simplifié (−2 étapes = +23% completion)",
      "Flows Klaviyo : abandon panier, post-achat, winback",
      "SEO : maillage interne, fiches produits optimisées, schema",
      "Tracking GA4 + Meta Pixel avec événements e-commerce complets",
    ],
    timeline: [
      { phase: "Audit CRO & heatmaps", duration: "Semaines 1-2", description: "Analyse Hotjar du tunnel existant, identification des 5 points de friction majeurs et stratégie de refonte." },
      { phase: "Redesign Liquid", duration: "Semaines 3-5", description: "Nouveau thème Shopify Liquid custom dans l'univers gaming/humour de la chaîne, avec CRO intégré." },
      { phase: "SEO & automatisations", duration: "Semaines 6-8", description: "Fiches produits optimisées, flows Klaviyo (abandon panier à 18% de récupération) et tracking complet." },
      { phase: "Scaling & A/B tests", duration: "Semaines 9-16", description: "Tests A/B, analyse des données GA4 et optimisation continue ayant conduit au +340% de CA." },
    ],
  },
];

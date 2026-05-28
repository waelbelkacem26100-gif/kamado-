export interface ServiceSection {
  h2: string;
  body: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceStep {
  num: string;
  title: string;
  desc: string;
  duration?: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ServiceSection[];
  faq: ServiceFAQ[];
  gradient: string;
  highlights?: string[];
  steps?: ServiceStep[];
  targetProfiles?: string[];
}

export const services: Service[] = [
  {
    slug: "creation-site-vitrine",
    name: "Création de site vitrine",
    shortDesc: "Un site professionnel qui transforme vos visiteurs en clients dès la première visite.",
    metaTitle: "Création site vitrine professionnel",
    metaDescription: "Kama Agency crée votre site vitrine sur-mesure : design premium, SEO optimisé, chargement rapide. Obtenez un site qui convertit vos visiteurs en clients.",
    intro: "Votre site vitrine est votre commercial le plus performant — il travaille 24h/24, 7j/7, sans jamais prendre de vacances. Chez Kama Agency, nous créons des sites vitrine qui ne se contentent pas d'être beaux : ils sont conçus pour convertir, pour rassurer et pour vendre.",
    sections: [
      {
        h2: "Pourquoi un site vitrine de qualité fait toute la différence",
        body: "Dans un marché où chaque secteur est concurrentiel, votre site vitrine est souvent le premier contact qu'un prospect a avec votre entreprise. En moins de 3 secondes, il décide de rester ou de partir. Un design daté, un chargement lent ou un message flou coûte des clients chaque jour. Notre approche consiste à créer des sites qui captent l'attention immédiatement, communiquent clairement votre valeur ajoutée et guident naturellement le visiteur vers une prise de contact ou un achat.",
      },
      {
        h2: "Notre méthode : du brief à la mise en ligne",
        body: "Nous commençons par une phase de découverte approfondie : comprendre votre activité, vos clients cibles, vos concurrents et vos objectifs business. Ensuite, notre designer crée une maquette sur-mesure — pas de template générique. Chaque section est pensée pour répondre à une objection ou renforcer la confiance du visiteur. Une fois la maquette validée, notre équipe développe le site en Next.js ou WordPress selon vos besoins, avec une attention particulière aux performances (Core Web Vitals), à l'accessibilité et au référencement naturel.",
      },
      {
        h2: "Des sites pensés pour le SEO dès la conception",
        body: "Un beau site invisible sur Google ne sert à rien. C'est pourquoi chaque site vitrine que nous créons intègre les meilleures pratiques SEO dès le départ : structure HTML sémantique, balises meta optimisées, temps de chargement inférieur à 2 secondes, images compressées au format WebP, et balisage Schema.org pour les extraits enrichis. Nous configurons également Google Analytics et Google Search Console pour que vous puissiez suivre votre trafic et vos performances dès le lancement.",
      },
      {
        h2: "Ce que vous obtenez avec Kama Agency",
        body: "Un site vitrine Kama Agency comprend : design sur-mesure responsive (mobile, tablette, desktop), optimisation SEO technique complète, formulaire de contact avec notification email, intégration Google Maps si besoin, certificat SSL, hébergement performant ou transfert vers votre hébergeur, et une formation complète pour que vous puissiez mettre à jour votre contenu en toute autonomie. Nous restons disponibles après la livraison pour toute question ou évolution.",
      },
    ],
    faq: [
      {
        q: "Combien coûte la création d'un site vitrine avec Kama Agency ?",
        a: "Nos sites vitrine démarrent à partir de 1 000 €. Le prix final dépend du nombre de pages, du niveau de personnalisation et des fonctionnalités souhaitées. Nous fournissons un devis détaillé et transparent après notre appel de découverte.",
      },
      {
        q: "Combien de temps faut-il pour créer mon site vitrine ?",
        a: "La plupart de nos sites vitrine sont livrés en 3 à 5 semaines. Ce délai inclut la phase de découverte, la création de la maquette, le développement et les révisions. Nous pouvons accélérer ce délai en cas d'urgence.",
      },
      {
        q: "Est-ce que je pourrai modifier mon site moi-même après la livraison ?",
        a: "Absolument. Nous intégrons toujours un CMS (système de gestion de contenu) qui vous permet de modifier vos textes, images et actualités sans aucune connaissance technique. Nous vous formons également à son utilisation.",
      },
      {
        q: "Quelle technologie utilisez-vous pour créer des sites vitrine ?",
        a: "Nous utilisons Next.js (React) pour les sites nécessitant des performances maximales et un SEO technique irréprochable — score Lighthouse 95+ garanti. Pour les clients qui souhaitent gérer leur contenu facilement, nous proposons aussi WordPress avec un thème enfant sur-mesure. Nous choisissons la technologie la plus adaptée à votre projet et à vos besoins.",
      },
      {
        q: "Mon site vitrine sera-t-il bien référencé sur Google dès le départ ?",
        a: "Oui, le SEO technique est intégré dès la conception : structure HTML sémantique, balises title et meta optimisées, données structurées Schema.org, sitemap XML, images en WebP, temps de chargement sous 2 secondes. Nous configurons également Google Search Console pour indexer votre site rapidement après la mise en ligne.",
      },
      {
        q: "Travaillez-vous avec des artisans, PME et indépendants partout en France ?",
        a: "Oui, nous accompagnons des clients partout en France — Paris, Lyon, Bordeaux, Marseille, Toulouse, Nantes, et bien sûr en Drôme et en Auvergne-Rhône-Alpes. 100% de nos projets se déroulent en remote avec des visioconférences régulières.",
      },
    ],
    gradient: "from-cyan-500 to-blue-600",
    highlights: [
      "Design 100% sur-mesure — aucun template revendu",
      "Responsive parfait mobile, tablette et desktop",
      "SEO on-page complet (balises, schema.org, sitemap)",
      "Score Lighthouse > 90/100 garanti",
      "Formulaire de contact avec notification email instantanée",
      "Certificat SSL, HTTPS et headers de sécurité",
      "CMS intégré — modifiez votre contenu sans développeur",
      "Google Analytics 4 + Search Console configurés",
      "Vitesse de chargement < 2 secondes (LCP optimisé)",
      "Support et révisions pendant 30 jours post-livraison",
    ],
    steps: [
      { num: "01", title: "Découverte", duration: "Jour 1 — Appel 30 min", desc: "Comprendre votre business, votre cible, vos concurrents et vos objectifs de conversion." },
      { num: "02", title: "Stratégie UX", duration: "Jours 2-3 — Architecture", desc: "Définition des pages, des messages clés et du parcours utilisateur optimal pour convertir." },
      { num: "03", title: "Maquette Figma", duration: "Jours 4-7 — Design", desc: "Création des designs haute-fidélité de toutes les pages, validés avec vous avant développement." },
      { num: "04", title: "Développement", duration: "Semaines 2-4 — Code", desc: "Intégration pixel-perfect en Next.js ou WordPress avec optimisations SEO et Core Web Vitals." },
      { num: "05", title: "Mise en ligne", duration: "Semaine 5 — Lancement", desc: "Déploiement, configuration analytics, formation à la gestion et support 30 jours inclus." },
    ],
    targetProfiles: [
      "Artisans et indépendants sans présence digitale professionnelle qui perdent des clients au profit de concurrents mieux référencés",
      "PME qui veulent générer des leads qualifiés en ligne sans dépendre de la publicité payante",
      "Prestataires de services (architectes, avocats, consultants, thérapeutes) qui ont besoin de crédibilité en ligne",
      "Startups qui veulent un site marketing performant dès le lancement pour attirer investisseurs et clients",
    ],
  },
  {
    slug: "boutique-shopify",
    name: "Boutique Shopify",
    shortDesc: "Une boutique Shopify haute performance qui maximise votre chiffre d'affaires en ligne.",
    metaTitle: "Création boutique Shopify sur-mesure",
    metaDescription: "Kama Agency développe votre boutique Shopify sur-mesure : design premium, tunnel de vente optimisé, intégrations avancées. Multipliez vos ventes dès le lancement.",
    intro: "Shopify est la plateforme e-commerce la plus puissante du marché. Mais une boutique Shopify générique, c'est comme une belle voiture sans carburant. Chez Kama Agency, nous construisons des boutiques Shopify sur-mesure qui sont des machines à vendre : design unique, parcours d'achat optimisé, et intégrations pensées pour maximiser chaque commande.",
    sections: [
      {
        h2: "Pourquoi choisir Shopify pour votre e-commerce ?",
        body: "Shopify héberge plus d'un million de boutiques dans le monde et traite des milliards de dollars de transactions chaque année. Sa robustesse, sa sécurité et son écosystème d'applications en font le choix numéro un pour les entrepreneurs sérieux. Contrairement aux solutions open-source qui nécessitent une maintenance constante, Shopify gère les mises à jour, la sécurité et l'hébergement à votre place — vous vous concentrez sur votre business, pas sur la technique.",
      },
      {
        h2: "Notre approche pour votre boutique Shopify",
        body: "Nous ne nous contentons pas d'installer un thème et de le personnaliser. Nous concevons votre boutique de A à Z : architecture du catalogue, arborescence des collections, fiches produit optimisées pour la conversion, page d'accueil qui inspire confiance, tunnel de paiement simplifié et pages de politique transparentes. Chaque décision est prise en fonction d'un seul objectif : augmenter votre taux de conversion et la valeur moyenne des commandes.",
      },
      {
        h2: "Intégrations et fonctionnalités avancées",
        body: "Nos boutiques Shopify intègrent les outils indispensables à votre succès : Klaviyo ou Mailchimp pour l'email marketing, Google Analytics 4 et Meta Pixel pour le tracking publicitaire, des applications de vente incitative (upsell, cross-sell), la gestion multi-devises pour vendre à l'international, et l'optimisation des images pour des performances maximales. Nous configurons également votre catalogue produit et importons vos données existantes.",
      },
      {
        h2: "Support et évolution de votre boutique",
        body: "Le e-commerce est un domaine en constante évolution. Après le lancement de votre boutique, nous restons disponibles pour ajouter de nouvelles fonctionnalités, optimiser vos campagnes, analyser vos données de vente et améliorer continuellement votre taux de conversion. Vous bénéficiez d'un partenaire technique de confiance pour faire grandir votre business.",
      },
    ],
    faq: [
      {
        q: "Quelle est la différence entre un thème Shopify standard et une boutique sur-mesure ?",
        a: "Un thème standard est générique et identique à des milliers d'autres boutiques. Chez Kama Agency, nous créons un design unique qui reflète votre marque, optimisé pour vos produits spécifiques et votre clientèle cible. Résultat : une boutique mémorable qui se démarque de la concurrence.",
      },
      {
        q: "Combien de temps faut-il pour lancer ma boutique Shopify ?",
        a: "Une boutique Shopify sur-mesure prend généralement 4 à 8 semaines selon la complexité du catalogue et les fonctionnalités requises. Nous pouvons lancer une version MVP plus rapidement si vous avez un deadline serré.",
      },
      {
        q: "Prenez-vous en charge la migration depuis une autre plateforme ?",
        a: "Oui, nous gérons les migrations depuis WooCommerce, PrestaShop, Wix ou toute autre plateforme. Nous transférons vos produits, clients, commandes et contenus en préservant votre référencement SEO existant.",
      },
      {
        q: "Peut-on vendre en France et à l'international avec une boutique Shopify ?",
        a: "Oui, Shopify est nativement conçu pour le commerce international : gestion multi-devises, multi-langues, taxes par pays, modes de paiement locaux (CB, PayPal, Klarna). Nous configurons votre boutique pour vendre en France et à l'étranger dès le lancement.",
      },
      {
        q: "Comment améliorer le taux de conversion de ma boutique Shopify ?",
        a: "Nous optimisons votre boutique pour la conversion (CRO) : tunnel d'achat simplifié, preuve sociale visible, urgence et rareté, upsell et cross-sell au panier, fiches produit persuasives. Nos clients constatent en moyenne +30 à +50% de taux de conversion après optimisation.",
      },
      {
        q: "Combien coûte la création d'une boutique Shopify sur-mesure ?",
        a: "Nos boutiques Shopify sur-mesure démarrent à partir de 1 500 € pour une boutique simple, et de 3 000 à 8 000 € pour un projet avec intégrations avancées (email marketing, CRM, multi-devises). Devis détaillé après appel de découverte.",
      },
    ],
    gradient: "from-green-500 to-emerald-600",
    highlights: [
      "Thème Shopify Liquid 100% sur-mesure (aucun thème Standard)",
      "Tunnel d'achat CRO optimisé — jusqu'à +47% de conversion",
      "Intégration Stripe, PayPal et modes de paiement locaux",
      "Klaviyo ou Mailchimp — flows email automatisés configurés",
      "Google Analytics 4 et Meta Pixel avec tracking e-commerce complet",
      "Fiches produit SEO avec schema Product et rich snippets",
      "Modules upsell et cross-sell pour augmenter le panier moyen",
      "Gestion des stocks, variantes et collections avancées",
      "Pages légales (CGV, politique de retour, confidentialité)",
      "Formation complète à la gestion Shopify post-livraison",
    ],
    steps: [
      { num: "01", title: "Audit & Brief", duration: "Jour 1 — Analyse", desc: "Analyse de votre niche, de vos concurrents et définition de la stratégie produit et CRO." },
      { num: "02", title: "Architecture", duration: "Jours 2-4 — Structure", desc: "Structure du catalogue, des collections et du parcours d'achat optimal pour la conversion." },
      { num: "03", title: "Design Liquid", duration: "Semaine 2 — Création", desc: "Création du thème sur-mesure en Liquid avec chaque section pensée pour maximiser les ventes." },
      { num: "04", title: "Intégrations", duration: "Semaine 3 — Config", desc: "Configuration paiement, email marketing, tracking GA4+Pixel et toutes les apps nécessaires." },
      { num: "05", title: "Lancement", duration: "Semaine 4-5 — Live", desc: "Mise en ligne, tests de commandes réelles, formation et optimisation des 30 premiers jours." },
    ],
    targetProfiles: [
      "Marques DTC (Direct-to-Consumer) qui veulent vendre en ligne avec un site à l'image de leur marque",
      "Créateurs de produits physiques (mode, beauté, décoration, alimentaire) qui veulent maximiser leurs ventes",
      "Boutiques physiques qui veulent étendre leur présence en ligne sans sacrifier leur identité de marque",
      "Entrepreneurs e-commerce déjà sur Shopify dont le taux de conversion est inférieur à 2% et qui veulent l'améliorer",
    ],
  },
  {
    slug: "refonte-de-site",
    name: "Refonte de site",
    shortDesc: "Modernisez votre site existant pour booster vos performances et vos conversions.",
    metaTitle: "Refonte de site web professionnel",
    metaDescription: "Refonte de site par Kama Agency : nouveau design, meilleures performances, SEO préservé. Transformez votre site vieillissant en outil de vente puissant.",
    intro: "Votre site web a peut-être été créé il y a 5 ou 10 ans — à une époque où les attentes des utilisateurs et les standards du web étaient très différents. Une refonte n'est pas un luxe, c'est souvent une nécessité business. Chez Kama Agency, nous transformons votre site vieillissant en un outil performant, moderne et aligné avec vos objectifs actuels.",
    sections: [
      {
        h2: "Les signes qu'il est temps de refondre votre site",
        body: "Votre site prend plus de 3 secondes à charger ? Il n'est pas adapté aux mobiles ? Son design fait daté ? Votre taux de rebond est élevé ? Ces signaux indiquent que votre site vous coûte des clients chaque jour. Une refonte bien menée peut doubler votre taux de conversion et diviser votre taux de rebond par deux. C'est un investissement qui se rentabilise rapidement.",
      },
      {
        h2: "Notre processus de refonte sans prise de risque",
        body: "La refonte d'un site existant comporte un risque majeur souvent négligé : la perte de positionnement SEO. Nous cartographions soigneusement votre site actuel, analysons vos pages les mieux classées sur Google, et planifions les redirections 301 nécessaires pour préserver votre autorité de domaine. Votre nouveau site hérite de tout le travail SEO accumulé — sans repartir de zéro.",
      },
      {
        h2: "Une refonte globale ou partielle selon vos besoins",
        body: "Toutes les refontes ne sont pas identiques. Parfois, il suffit de moderniser le design en conservant la technologie existante. Dans d'autres cas, un changement de CMS ou de framework s'impose. Nous analysons votre situation et vous recommandons l'approche la plus adaptée à votre budget et vos objectifs, qu'il s'agisse d'une refonte légère ou d'une reconstruction complète.",
      },
      {
        h2: "Résultats mesurables et amélioration continue",
        body: "Chaque refonte que nous livrons inclut une mise en place complète du tracking : Google Analytics 4, Google Search Console, et des tableaux de bord personnalisés pour suivre vos KPIs. Nous mesurons l'impact de la refonte sur votre trafic, vos conversions et votre chiffre d'affaires, et nous identifions les opportunités d'amélioration continue pour les mois suivants.",
      },
    ],
    faq: [
      {
        q: "Vais-je perdre mon référencement Google lors de la refonte ?",
        a: "Non, si la refonte est bien préparée. Nous cartographions toutes vos URLs existantes, configurons les redirections 301 appropriées et préservons les éléments SEO clés. Dans la plupart des cas, la refonte améliore même votre référencement grâce à de meilleures performances techniques.",
      },
      {
        q: "Mon site actuel sera-t-il accessible pendant la refonte ?",
        a: "Absolument. Nous travaillons sur une version de développement séparée. Votre site actuel reste en ligne et fonctionnel jusqu'à la bascule finale, qui se fait en quelques minutes avec un temps d'interruption minimal.",
      },
      {
        q: "Puis-je garder mon contenu existant ?",
        a: "Oui. Nous migrons votre contenu existant vers le nouveau site. Nous en profitons généralement pour l'optimiser : réécriture des balises meta, amélioration de la structure des titres et optimisation des images.",
      },
      {
        q: "Une refonte de site améliore-t-elle le positionnement Google ?",
        a: "Oui, si elle est bien préparée. Amélioration des performances techniques, contenu optimisé, meilleure structure HTML — tous ces éléments contribuent à un meilleur SEO. Nos refontes incluent un audit SEO avant/après pour mesurer l'impact réel sur les positions.",
      },
      {
        q: "Combien de temps dure une refonte de site en moyenne ?",
        a: "Une refonte complète prend généralement 4 à 8 semaines selon la taille du site. Refonte légère (design seul) : 2 à 4 semaines. Refonte complète avec migration CMS : 6 à 10 semaines. Votre site reste en ligne pendant toute la durée des travaux.",
      },
      {
        q: "Peut-on refaire uniquement le design sans toucher au code back-end ?",
        a: "Oui, c'est possible selon votre technologie actuelle. Nous pouvons refaire l'habillage visuel en conservant votre base de données et votre logique métier. Cette approche est plus rapide et moins risquée pour les sites avec des fonctionnalités complexes.",
      },
    ],
    gradient: "from-orange-500 to-amber-600",
    highlights: [
      "Audit complet de l'existant — SEO, performance et UX analysés",
      "Cartographie de toutes vos URLs et plan de redirections 301",
      "Préservation intégrale du référencement Google acquis",
      "Nouveau design moderne sur-mesure adapté à votre marque actuelle",
      "Migration et optimisation de tout le contenu existant",
      "Score Lighthouse > 90/100 sur le nouveau site",
      "Configuration GA4 et Search Console avec comparaison avant/après",
      "Tests cross-browser et cross-device sur 20+ appareils",
      "Formation de votre équipe à la gestion du nouveau site",
      "Monitoring des positions Google pendant 30 jours post-lancement",
    ],
    steps: [
      { num: "01", title: "Audit", duration: "Jours 1-2 — Analyse", desc: "Analyse technique, SEO et UX du site existant pour identifier tous les points d'amélioration prioritaires." },
      { num: "02", title: "Cartographie", duration: "Jours 3-4 — Inventaire", desc: "Inventaire des URLs, des contenus à migrer et planification précise des redirections 301." },
      { num: "03", title: "Nouveau design", duration: "Semaines 2-3 — Création", desc: "Création de la nouvelle interface en parallèle du site live — aucune interruption de service." },
      { num: "04", title: "Migration", duration: "Semaine 4 — Transfert", desc: "Transfert du contenu, configuration des redirections et tests de validation complets en environnement staging." },
      { num: "05", title: "Bascule & suivi", duration: "Semaine 5 — Live", desc: "Mise en ligne contrôlée, monitoring des positions Google et ajustements pendant 30 jours." },
    ],
    targetProfiles: [
      "Entreprises avec un site de plus de 3 ans dont le design ne reflète plus leur positionnement actuel",
      "Sites avec un taux de rebond supérieur à 65% ou un temps de chargement supérieur à 3 secondes",
      "Marques qui ont évolué (nouveau logo, nouveau positionnement) et dont le site est resté dans le passé",
      "Entreprises qui perdent des clients sur mobile à cause d'une expérience non optimisée",
    ],
  },
  {
    slug: "dropshipping",
    name: "Dropshipping",
    shortDesc: "Une boutique dropshipping clé en main, prête à générer des revenus sans gestion de stock.",
    metaTitle: "Création boutique dropshipping clé en main",
    metaDescription: "Kama Agency crée votre boutique dropshipping sur Shopify : sélection de niche, design professionnel, automatisation des commandes. Lancez votre business sans stock.",
    intro: "Le dropshipping permet de vendre des produits physiques sans jamais les stocker ni les expédier. C'est un modèle business attractif, mais qui nécessite une exécution irréprochable pour réussir. Chez Kama Agency, nous créons des boutiques dropshipping qui inspirent confiance, convertissent efficacement et s'appuient sur les meilleurs fournisseurs.",
    sections: [
      {
        h2: "Le dropshipping bien fait : au-delà du template basique",
        body: "La majorité des boutiques dropshipping échouent parce qu'elles utilisent des templates génériques facilement reconnaissables, une copie produit copiée-collée des fournisseurs et aucun travail de marque. Nous construisons de véritables marques autour de votre niche, avec un design premium qui inspire confiance et une copie produit persuasive rédigée spécifiquement pour votre clientèle cible.",
      },
      {
        h2: "Sélection de niche et analyse de marché",
        body: "Avant de créer votre boutique, nous analysons ensemble votre marché : volume de recherche des produits, niveau de concurrence, marges potentielles, saisonnalité et tendances. Nous vous aidons à choisir une niche avec un bon potentiel de rentabilité et à identifier les fournisseurs fiables via DSers, Spocket, ou directement sur AliExpress. Une bonne niche bien exécutée vaut mieux qu'un marché porteur mal traité.",
      },
      {
        h2: "Automatisation et gestion des commandes",
        body: "L'un des avantages du dropshipping est l'automatisation. Nous configurons votre boutique pour que les commandes soient transmises automatiquement à vos fournisseurs, que les numéros de suivi soient envoyés à vos clients et que vos stocks soient synchronisés en temps réel. Vous gérez votre business depuis un tableau de bord centralisé sans manipulation manuelle pour chaque commande.",
      },
      {
        h2: "Stratégie de lancement et premières ventes",
        body: "Une boutique sans trafic ne génère aucun revenu. Nous vous conseillons sur votre stratégie de lancement : publicités Facebook et Instagram, campagnes TikTok Ads, contenu organique pour construire votre audience, et optimisation de vos fiches produit pour le SEO. Nous vous aidons à obtenir vos premières ventes rapidement et à identifier les produits gagnants à scaler.",
      },
    ],
    faq: [
      {
        q: "Combien peut-on gagner avec une boutique dropshipping ?",
        a: "Les revenus varient énormément selon la niche, le marketing et l'exécution. Des boutiques bien construites génèrent entre 1 000 et 10 000 € par mois de profit net. Le dropshipping demande du travail et de l'investissement marketing, mais les marges peuvent être excellentes sur les bons produits.",
      },
      {
        q: "Quelle est la différence entre une boutique généraliste et une boutique de niche ?",
        a: "Une boutique de niche (ex: accessoires pour chiens, équipement yoga) permet de cibler précisément votre clientèle, de construire une marque forte et de fidéliser vos clients. C'est notre approche recommandée car elle génère de meilleures conversions et des coûts d'acquisition plus faibles.",
      },
      {
        q: "Ai-je besoin d'un budget publicité pour commencer ?",
        a: "Pas nécessairement. Nous pouvons vous montrer des stratégies organiques (contenu, réseaux sociaux, SEO) pour générer du trafic sans budget pub. Cependant, un budget initial de 300 à 500 € en publicité payante accélère significativement l'acquisition des premières ventes.",
      },
      {
        q: "Le dropshipping est-il encore rentable en 2026 ?",
        a: "Oui, avec la bonne approche. Le dropshipping générique low-cost est saturé, mais les boutiques de niche bien construites avec une vraie marque et un marketing ciblé continuent de générer d'excellentes marges. La clé est de choisir la bonne niche et d'investir dans un site professionnel qui inspire confiance.",
      },
      {
        q: "Comment gérer les retours produits en dropshipping ?",
        a: "Nous vous aidons à rédiger une politique de retour claire et rassurante. Selon votre fournisseur, les retours peuvent être gérés directement ou via vous. Nous configurons les emails automatiques de gestion des retours dans votre boutique Shopify pour minimiser la charge manuelle.",
      },
      {
        q: "Combien coûte la création d'une boutique dropshipping clé en main ?",
        a: "Une boutique dropshipping sur-mesure chez Kama Agency démarre à partir de 1 200 €, incluant le design Shopify, la configuration des fournisseurs, l'automatisation des commandes et la formation. Devis précis après un appel de 30 minutes.",
      },
    ],
    gradient: "from-purple-500 to-violet-600",
    highlights: [
      "Étude de niche et validation du potentiel de marché avant tout investissement",
      "Sélection des meilleurs fournisseurs — DSers, Spocket ou AliExpress selon votre niche",
      "Design de boutique Shopify sur-mesure qui inspire confiance (pas un template générique)",
      "Fiches produit persuasives rédigées pour votre clientèle cible, pas copiées du fournisseur",
      "Automatisation complète de la transmission des commandes aux fournisseurs",
      "Synchronisation des stocks en temps réel — ruptures gérées automatiquement",
      "Numéros de suivi automatiquement envoyés à vos clients à l'expédition",
      "Configuration Meta Ads et TikTok Ads pour les premières ventes rentables",
      "Pages légales conformes (CGV, politique de retour, mentions légales)",
      "Formation complète à la gestion quotidienne et aux stratégies de scaling",
    ],
    steps: [
      { num: "01", title: "Validation niche", duration: "Jours 1-2 — Analyse", desc: "Étude du volume de recherche, des marges potentielles et de la concurrence pour sécuriser votre choix de niche." },
      { num: "02", title: "Fournisseurs", duration: "Jours 3-4 — Sélection", desc: "Identification et test des meilleurs fournisseurs pour vos produits phares avant la mise en ligne." },
      { num: "03", title: "Design boutique", duration: "Semaines 1-2 — Création", desc: "Création du design Shopify sur-mesure qui inspire confiance et guide naturellement vers l'achat." },
      { num: "04", title: "Automatisation", duration: "Semaine 3 — Configuration", desc: "Automatisation des commandes, paiements, tracking et politique de retour client." },
      { num: "05", title: "Premières ventes", duration: "Semaine 4 — Lancement", desc: "Mise en ligne, configuration publicitaire et accompagnement à l'acquisition des premières commandes." },
    ],
    targetProfiles: [
      "Entrepreneurs qui veulent lancer un business en ligne avec peu de capital initial et sans gérer de stock physique",
      "Salariés qui cherchent un revenu complémentaire scalable grâce à un side project e-commerce automatisé",
      "Marques en construction qui veulent tester des produits sur le marché avant d'investir dans leur propre stock",
      "Entrepreneurs déjà en dropshipping avec un faible taux de conversion qui veulent upgrader leur boutique",
    ],
  },
  {
    slug: "webdesign-sur-mesure",
    name: "Webdesign sur-mesure",
    shortDesc: "Des designs uniques qui marquent les esprits et renforcent l'identité de votre marque.",
    metaTitle: "Webdesign sur-mesure premium",
    metaDescription: "Kama Agency crée des designs web sur-mesure qui marquent les esprits. Chaque pixel est pensé pour votre marque, vos utilisateurs et vos objectifs de conversion.",
    intro: "Un design générique, c'est une occasion manquée. Votre site web est le reflet de votre marque — et les meilleures marques investissent dans des designs qui leur appartiennent entièrement. Chez Kama Agency, nous créons des expériences visuelles sur-mesure qui captivent, inspirent confiance et se démarquent instantanément de la concurrence.",
    sections: [
      {
        h2: "Design et stratégie : les deux sont inséparables",
        body: "Un beau design sans stratégie, c'est de l'art. Un design stratégique, c'est un outil business. Chez Kama Agency, chaque décision visuelle est motivée par un objectif concret : guider l'œil vers le call-to-action, rassurer via les éléments de preuve sociale, hiérarchiser l'information pour faciliter la décision. Nous créons des designs qui plaisent et qui convertissent — les deux ne sont pas contradictoires.",
      },
      {
        h2: "Notre processus de création en 4 étapes",
        body: "D'abord, nous analysons votre secteur, vos concurrents et vos utilisateurs cibles pour identifier les opportunités de différenciation. Ensuite, nous définissons votre direction artistique : palette de couleurs, typographie, style photographique. Puis nous créons les maquettes Figma de toutes les pages et variantes. Enfin, nous intégrons le design en code avec une fidélité pixel-perfect, enrichi d'animations subtiles qui donnent vie à l'interface.",
      },
      {
        h2: "Responsive design : parfait sur tous les écrans",
        body: "Plus de 60% du trafic web provient des mobiles. Nous concevons vos interfaces mobile-first, puis nous les adaptons pour les tablettes et desktops. Chaque breakpoint est soigneusement pensé pour offrir la meilleure expérience possible, quel que soit l'appareil. Nos designs ne sont pas simplement rédimensionnés — ils sont repensés pour chaque contexte d'utilisation.",
      },
      {
        h2: "Animations et micro-interactions",
        body: "Les animations subtiles sont ce qui sépare un site ordinaire d'une expérience mémorable. Nous intégrons des micro-interactions soignées : transitions de page fluides, effets de survol expressifs, animations d'apparition au scroll. Ces détails renforcent la qualité perçue de votre marque et rendent la navigation intuitivement agréable.",
      },
    ],
    faq: [
      {
        q: "Travaillez-vous uniquement avec Figma ou acceptez-vous d'autres formats de maquettes ?",
        a: "Nous travaillons principalement avec Figma car c'est l'outil de référence actuel. Cependant, nous pouvons travailler à partir de maquettes Adobe XD, Sketch ou même de wireframes papier. Nous nous adaptons à votre workflow.",
      },
      {
        q: "Combien de révisions sont incluses dans le processus de design ?",
        a: "Nous incluons 2 cycles de révisions majeurs dans notre processus standard. Les révisions mineurs (couleurs, textes, espacements) sont illimitées. Notre objectif est que vous soyez 100% satisfait du résultat avant le passage au développement.",
      },
      {
        q: "Pouvez-vous créer uniquement les maquettes sans le développement ?",
        a: "Oui, nous proposons des prestations de design seul si vous avez déjà une équipe de développement. Nous livrons les maquettes Figma avec un guide de style complet et des notes pour les développeurs.",
      },
      {
        q: "Quel est le prix d'un webdesign sur-mesure ?",
        a: "Le webdesign sur-mesure (maquettes Figma uniquement) démarre à partir de 800 € pour un site simple. Pour un projet complet avec design et développement intégré, nos sites vitrine sont à partir de 1 500 €. Devis précis après appel de découverte.",
      },
      {
        q: "Combien de temps faut-il pour créer une maquette Figma complète ?",
        a: "Pour un site vitrine de 5 à 8 pages, la maquette est livrée en 1 à 2 semaines. Un projet plus complexe (10+ pages, design system complet) peut nécessiter 2 à 3 semaines. Nous incluons 2 cycles de révisions majeures.",
      },
      {
        q: "Proposez-vous des animations et des micro-interactions dans les designs ?",
        a: "Oui, les animations sont intégrées nativement dans nos développements (Framer Motion sur Next.js). Nous créons des transitions fluides, des effets de scroll et des micro-interactions qui rendent l'expérience mémorable sans jamais pénaliser les performances.",
      },
    ],
    gradient: "from-pink-500 to-rose-600",
    highlights: [
      "Direction artistique unique développée spécifiquement pour votre marque et votre secteur",
      "Maquettes Figma haute-fidélité de toutes les pages avant tout développement",
      "Design responsive mobile-first adapté à chaque breakpoint (mobile, tablette, desktop)",
      "Palette de couleurs, typographie et système d'icônes cohérents et documentés",
      "Animations et micro-interactions soignées pour une expérience mémorable",
      "Guide de style complet livré avec les maquettes pour votre équipe",
      "2 cycles de révisions majeures inclus dans le processus standard",
      "Intégration pixel-perfect du design en code (Next.js, React ou autre)",
      "Composants réutilisables pour faciliter les futures évolutions du site",
      "Tests visuels cross-browser et cross-device avant toute livraison",
    ],
    steps: [
      { num: "01", title: "Brief visuel", duration: "Jour 1 — Analyse", desc: "Analyse de votre secteur, de vos concurrents et définition précise de votre direction artistique." },
      { num: "02", title: "Moodboard", duration: "Jours 2-3 — Exploration", desc: "Présentation de 3 directions créatives avec palette, typographie et références visuelles." },
      { num: "03", title: "Maquettes Figma", duration: "Semaine 2 — Design", desc: "Design haute-fidélité de toutes les pages dans la direction validée avec vous." },
      { num: "04", title: "Révisions", duration: "Semaine 3 — Affinage", desc: "2 cycles de retours et affinage des détails visuels jusqu'à validation complète." },
      { num: "05", title: "Intégration", duration: "Semaines 4-5 — Code", desc: "Développement pixel-perfect du design avec animations et tests multi-devices." },
    ],
    targetProfiles: [
      "Entrepreneurs ambitieux qui veulent se différencier avec un site unique qui n'existe nulle part ailleurs dans leur secteur",
      "Marques établies dont le design date et ne reflète plus leur positionnement premium actuel",
      "Startups qui cherchent un design professionnel dès le premier jour pour convaincre investisseurs et premiers clients",
      "Agences et freelances qui externalisent la partie design à une équipe spécialisée",
    ],
  },
  {
    slug: "ux-ui-design",
    name: "UX/UI Design",
    shortDesc: "Des interfaces intuitives qui améliorent l'expérience utilisateur et boostent les conversions.",
    metaTitle: "UX/UI Design professionnel",
    metaDescription: "Kama Agency conçoit des interfaces UX/UI centrées utilisateur. Audit d'expérience, wireframes, prototypes interactifs et tests utilisateurs pour des interfaces qui convertissent.",
    intro: "L'UX/UI Design va bien au-delà de l'esthétique. C'est la science de créer des interfaces que les utilisateurs comprennent intuitivement, qui les guident naturellement vers leurs objectifs — et vers les vôtres. Chez Kama Agency, nous combinons recherche utilisateur, psychologie comportementale et expertise technique pour créer des expériences digitales exceptionnelles.",
    sections: [
      {
        h2: "UX vs UI : deux disciplines complémentaires",
        body: "L'UX (User Experience) concerne la logique, le parcours et l'efficacité de votre produit : comment l'utilisateur navigue, trouve l'information et accomplit ses tâches. L'UI (User Interface) concerne le style visuel : couleurs, typographie, iconographie. Une interface réussie excelle dans les deux dimensions. Nous maîtrisons l'une et l'autre, et c'est cette combinaison qui produit des produits digitaux véritablement performants.",
      },
      {
        h2: "Notre méthode centrée sur l'utilisateur",
        body: "Nous commençons par comprendre vos utilisateurs : qui sont-ils, quels sont leurs objectifs, leurs frustrations, leurs habitudes ? Nous créons des personas et des user flows pour cartographier les parcours idéaux. Ensuite, nous prototypons et testons nos hypothèses avant de passer au design final. Cette approche itérative permet d'éviter les erreurs coûteuses et de construire des interfaces véritablement adaptées aux besoins réels.",
      },
      {
        h2: "Audit UX de votre produit existant",
        body: "Si vous avez déjà un produit en ligne, un audit UX peut révéler des opportunités d'amélioration significatives. Nous analysons vos heatmaps, vos enregistrements de sessions, vos entonnoirs de conversion et vos retours utilisateurs pour identifier les points de friction. Souvent, quelques ajustements bien ciblés permettent d'augmenter le taux de conversion de 20 à 50% sans refonte complète.",
      },
      {
        h2: "Systèmes de design et composants réutilisables",
        body: "Pour les projets d'envergure (SaaS, applications), nous créons des systèmes de design complets : une bibliothèque de composants UI cohérents et réutilisables qui garantissent la consistance visuelle et accélèrent les futures évolutions du produit. Ce système est documenté et directement exploitable par votre équipe de développement.",
      },
    ],
    faq: [
      {
        q: "À quel moment du projet faut-il impliquer un UX designer ?",
        a: "Le plus tôt possible. L'UX design intervient idéalement avant même le développement. Des erreurs de conception découvertes en phase de design coûtent 10 fois moins cher à corriger qu'en phase de développement, et 100 fois moins qu'après le lancement.",
      },
      {
        q: "Réalisez-vous des tests utilisateurs ?",
        a: "Oui. Nous proposons des sessions de tests utilisateurs modérées (en présentiel ou en ligne) avec des profils correspondant à votre audience cible. Ces tests valident nos hypothèses de design et permettent d'identifier des problèmes invisibles aux yeux de l'équipe projet.",
      },
      {
        q: "Pouvez-vous améliorer mon SaaS existant ?",
        a: "Absolument. L'audit UX d'un SaaS existant est souvent l'un des investissements les plus rentables. Nous identifions les points de friction qui causent du churn et les opportunités d'amélioration qui augmentent l'engagement et la rétention.",
      },
      {
        q: "Quel est le coût d'un audit UX complet ?",
        a: "Un audit UX complet démarre à partir de 800 € pour un site vitrine ou une boutique. Pour un SaaS ou une application complexe, comptez 1 500 à 3 000 € selon la profondeur de l'analyse. L'audit inclut un rapport priorisé avec des recommandations actionnables.",
      },
      {
        q: "Quelle est la différence entre UX design et UX research ?",
        a: "L'UX research consiste à comprendre les utilisateurs : entretiens, tests, analytics, heatmaps. L'UX design consiste à créer des solutions basées sur ces recherches : wireframes, prototypes, interfaces. Chez Kama Agency, nous pratiquons les deux pour des interfaces vraiment centrées sur vos utilisateurs.",
      },
      {
        q: "Peut-on améliorer seulement une partie de notre interface sans tout refaire ?",
        a: "Oui, c'est souvent la meilleure approche. Nous ciblons les pages ou les flux qui ont le plus fort impact sur la conversion (page produit, tunnel de paiement, onboarding). Des interventions ciblées et bien exécutées peuvent améliorer les conversions de 20 à 50% sans refonte complète.",
      },
    ],
    gradient: "from-blue-500 to-indigo-600",
    highlights: [
      "Audit UX complet du produit existant avec analyse heatmaps et sessions enregistrées",
      "Création de personas et de user journeys cartographiant les parcours utilisateur réels",
      "Wireframes basse-fidélité validés avec l'équipe avant le passage au design final",
      "Prototype interactif testable avant tout engagement de développement",
      "Sessions de tests utilisateurs avec des profils correspondant à votre cible réelle",
      "Design system complet avec bibliothèque de composants UI réutilisables",
      "Rapport d'audit priorisé par impact business avec recommandations actionnables",
      "Handoff développeur complet — annotations, specs et guide d'implémentation",
      "Suivi des métriques UX (conversion, NPS, temps sur tâche) avant et après",
      "Itérations rapides basées sur les retours utilisateurs et les données réelles",
    ],
    steps: [
      { num: "01", title: "Recherche", duration: "Jours 1-3 — Analyse", desc: "Entretiens utilisateurs, analyse des données existantes et création des personas et user journeys." },
      { num: "02", title: "Audit UX", duration: "Jours 4-5 — Diagnostic", desc: "Analyse du produit existant et identification des points de friction les plus critiques." },
      { num: "03", title: "Wireframes", duration: "Semaine 2 — Prototypage", desc: "Prototypage basse-fidélité des nouveaux parcours, validé avec votre équipe produit." },
      { num: "04", title: "Design UI", duration: "Semaines 3-4 — Création", desc: "Interface haute-fidélité avec le design system complet et tous les composants." },
      { num: "05", title: "Tests & itérations", duration: "Semaine 5 — Validation", desc: "Sessions de tests utilisateurs, analyse des résultats et ajustements finaux." },
    ],
    targetProfiles: [
      "Startups SaaS dont le taux de churn est élevé à cause d'une interface trop complexe ou frustrante",
      "Équipes produit qui veulent valider leurs hypothèses de design avec de vrais utilisateurs avant de développer",
      "Applications mobiles et web dont le taux d'adoption est décevant malgré un concept solide",
      "Entreprises qui lancent un nouveau produit digital et veulent éviter les erreurs de conception dès le départ",
    ],
  },
  {
    slug: "identite-visuelle",
    name: "Identité visuelle",
    shortDesc: "Une charte graphique complète pour une marque cohérente, mémorable et professionnelle.",
    metaTitle: "Création identité visuelle marque",
    metaDescription: "Kama Agency crée votre identité visuelle complète : logo, charte graphique, palette de couleurs, typographie. Une marque cohérente qui marque les esprits.",
    intro: "Votre identité visuelle, c'est la première impression que vous faites — et elle se forme en moins d'une seconde. Un logo professionnel, une palette de couleurs cohérente et une typographie bien choisie communiquent immédiatement votre positionnement, vos valeurs et votre niveau de qualité. Chez Kama Agency, nous créons des identités visuelles qui vous différencient et vous représentent fidèlement.",
    sections: [
      {
        h2: "Pourquoi une identité visuelle forte est un actif business",
        body: "Une identité visuelle cohérente augmente la reconnaissance de marque de 80% selon les études. Les consommateurs font 72% de leurs décisions d'achat basées sur la couleur seule. Ces chiffres illustrent à quel point votre identité visuelle influence directement vos ventes. Investir dans une identité professionnelle, c'est investir dans la confiance que vous inspirez à vos clients potentiels.",
      },
      {
        h2: "Notre processus de création de marque",
        body: "Nous commençons par un brief approfondi pour comprendre vos valeurs, votre positionnement et votre cible. Nous analysons votre secteur et vos concurrents pour identifier les conventions du marché — et les opportunités de vous en distinguer. Puis nous créons plusieurs directions créatives que vous pouvez explorer, avant de raffiner la direction choisie jusqu'au résultat final.",
      },
      {
        h2: "Ce qu'inclut votre identité visuelle complète",
        body: "Une identité visuelle Kama Agency comprend : logo principal et ses variations (version sombre, claire, simplifiée), palette de couleurs primaire et secondaire avec codes hex/RGB/CMJN, sélection typographique (titres et corps de texte), guide d'utilisation complet, et fichiers sources en formats vectoriels (AI, SVG) et raster (PNG, JPG) pour tous les usages web et print.",
      },
      {
        h2: "Déclinaison sur vos supports",
        body: "Nous proposons également de décliner votre identité sur vos supports de communication : templates de réseaux sociaux, signature email, présentation PowerPoint, carte de visite et papier à en-tête. Une identité bien déclinée renforce considérablement votre crédibilité professionnelle et la cohérence de votre communication.",
      },
    ],
    faq: [
      {
        q: "Combien de propositions de logo fournissez-vous ?",
        a: "Nous créons généralement 2 à 3 directions créatives distinctes. Vous choisissez la direction qui vous convient le mieux, puis nous l'affinons ensemble jusqu'à obtenir un résultat qui vous satisfait pleinement.",
      },
      {
        q: "Aurai-je les droits complets sur mon logo et mon identité visuelle ?",
        a: "Absolument. À la livraison finale, vous obtenez la propriété intellectuelle complète de votre identité visuelle. Vous pouvez l'utiliser librement sur tous vos supports sans aucune restriction.",
      },
      {
        q: "Pouvez-vous moderniser mon logo existant sans tout changer ?",
        a: "Oui, c'est ce qu'on appelle le restyling ou le rebranding partiel. Nous pouvons moderniser votre logo en conservant son essence et sa reconnaissance tout en lui donnant un look contemporain. Cette approche est souvent recommandée pour les marques établies.",
      },
      {
        q: "Combien coûte la création d'une identité visuelle complète ?",
        a: "Une identité visuelle complète (logo + charte graphique + fichiers sources + guide d'utilisation) démarre à partir de 800 €. Pour un projet incluant les déclinaisons print et digital, les templates réseaux sociaux et la signature email, comptez 1 200 à 2 500 €.",
      },
      {
        q: "Faut-il créer son identité visuelle avant ou après son site web ?",
        a: "Idéalement avant. Votre identité visuelle définit les couleurs, la typographie et l'univers graphique du site. Construire un site sans charte préalable oblige souvent à des corrections coûteuses. Si vous n'avez pas encore d'identité, nous pouvons les créer ensemble en parallèle.",
      },
      {
        q: "Livrez-vous les fichiers sources en vectoriel ?",
        a: "Oui, nous livrons tous les fichiers sources en formats vectoriels (SVG, AI/EPS) pour un usage illimité en impression haute résolution, et en formats raster (PNG transparent, JPG) pour le web. Vous avez la propriété intellectuelle complète de tous les éléments créés.",
      },
    ],
    gradient: "from-amber-500 to-orange-600",
    highlights: [
      "Brief stratégique approfondi pour aligner votre identité sur vos valeurs et votre positionnement",
      "2 à 3 directions créatives distinctes présentées, expliquées et comparées",
      "Logo principal et toutes ses variations — horizontal, vertical, icône seule",
      "Versions claires, sombres et monochromes pour tous vos supports",
      "Palette de couleurs primaire et secondaire avec codes hex, RGB et CMJN",
      "Sélection typographique (titres et corps de texte) avec guide d'utilisation",
      "Charte graphique complète de 20 à 30 pages documentant tous les usages",
      "Fichiers sources vectoriels (AI, SVG) et raster (PNG, JPG) livrés",
      "Templates réseaux sociaux (LinkedIn, Instagram, Facebook) inclus",
      "Propriété intellectuelle intégrale transférée à la livraison finale",
    ],
    steps: [
      { num: "01", title: "Brief & stratégie", duration: "Jour 1 — Immersion", desc: "Analyse approfondie de vos valeurs, de votre cible et de votre positionnement face à la concurrence." },
      { num: "02", title: "Directions créatives", duration: "Semaine 1 — Exploration", desc: "Présentation de 2-3 univers visuels distincts avec moodboard, palette et typographie." },
      { num: "03", title: "Développement logo", duration: "Semaine 2 — Design", desc: "Création du logo et de toutes ses variations dans la direction choisie et validée." },
      { num: "04", title: "Charte graphique", duration: "Semaine 3 — Production", desc: "Production du brand book complet et de tous les fichiers livrables en haute résolution." },
      { num: "05", title: "Déclinaisons", duration: "Semaine 4 — Supports", desc: "Templates réseaux sociaux, signature email et déclinaisons sur les supports définis ensemble." },
    ],
    targetProfiles: [
      "Entrepreneurs qui lancent leur activité et veulent une image professionnelle pour convaincre dès le premier contact",
      "PME qui ont grandi et dont l'identité visuelle faite maison ne reflète plus leur niveau d'ambition",
      "Startups qui lèvent des fonds et ont besoin d'une marque crédible pour leurs pitchs et leurs communications",
      "Marques qui se repositionnent sur un segment premium et dont l'identité actuelle ne correspond plus à ce nouveau niveau",
    ],
  },
  {
    slug: "referencement-seo",
    name: "Référencement SEO",
    shortDesc: "Dominez les premiers résultats Google et générez un trafic qualifié sur le long terme.",
    metaTitle: "Référencement SEO naturel",
    metaDescription: "Kama Agency optimise votre référencement naturel : audit SEO, optimisation technique, création de contenu, netlinking. Apparaissez en première page Google durablement.",
    intro: "Le référencement naturel (SEO) est l'un des canaux d'acquisition les plus rentables à long terme. Contrairement à la publicité payante qui s'arrête dès que vous coupez le budget, un bon positionnement SEO génère un flux constant de trafic qualifié. Chez Kama Agency, nous déployons des stratégies SEO complètes et durables pour vous positionner en tête de Google sur vos mots-clés stratégiques.",
    sections: [
      {
        h2: "Les trois piliers du SEO selon Kama Agency",
        body: "Un référencement efficace repose sur trois piliers indissociables. Le SEO technique : vitesse de chargement, structure des URLs, balisage HTML, données structurées, crawlabilité. Le SEO de contenu : articles optimisés, pages services, structure des titres, réponse aux intentions de recherche. Le netlinking : acquisition de liens entrants de qualité depuis des sites d'autorité. Négliger l'un de ces piliers compromet les deux autres.",
      },
      {
        h2: "Audit SEO complet de votre site",
        body: "Notre intervention commence toujours par un audit SEO exhaustif de votre site : analyse technique (erreurs 404, redirections, vitesse, mobile-friendliness), analyse de votre positionnement actuel sur vos mots-clés cibles, étude de vos concurrents et de leur stratégie SEO, et identification des opportunités à fort potentiel. Cet audit nous permet de prioriser les actions les plus impactantes.",
      },
      {
        h2: "Stratégie de contenu et création éditoriale",
        body: "Le contenu est le carburant du SEO. Nous définissons votre stratégie éditoriale en identifiant les mots-clés à fort potentiel que vos concurrents ne couvrent pas encore. Nous rédigeons des articles de blog, des pages services et des guides pratiques optimisés qui répondent précisément aux questions de vos prospects — et qui vous positionnent comme l'expert de référence dans votre domaine.",
      },
      {
        h2: "Reporting mensuel et amélioration continue",
        body: "Chaque mois, vous recevez un rapport détaillé sur l'évolution de votre positionnement, votre trafic organique et les conversions générées. Nous analysons les données pour affiner notre stratégie et capitaliser sur ce qui fonctionne. Le SEO est un marathon, pas un sprint — mais avec la bonne stratégie, les résultats sont durables et compoundent dans le temps.",
      },
    ],
    faq: [
      {
        q: "Combien de temps faut-il pour voir des résultats SEO ?",
        a: "Les premières améliorations techniques sont visibles en quelques semaines. Pour des positions significatives sur des mots-clés compétitifs, comptez 3 à 6 mois. Les résultats s'améliorent progressivement avec le temps, et les positions acquises sont durables.",
      },
      {
        q: "Proposez-vous des garanties de positionnement ?",
        a: "Aucune agence sérieuse ne peut garantir des positions spécifiques sur Google, car les algorithmes changent continuellement. En revanche, nous pouvons vous montrer nos résultats clients passés et garantir la qualité et la conformité de notre travail avec les guidelines officielles de Google.",
      },
      {
        q: "Quelle est la différence entre le SEO et le SEA (publicité Google Ads) ?",
        a: "Le SEA (Google Ads) génère du trafic immédiat mais s'arrête dès que vous coupez votre budget. Le SEO génère un trafic organique gratuit qui persiste dans le temps. Les deux sont complémentaires : le SEA pour des résultats rapides, le SEO pour une présence durable et rentable.",
      },
      {
        q: "Quel est le tarif mensuel d'une prestation SEO chez Kama Agency ?",
        a: "Nos prestations SEO mensuelles démarrent à partir de 400 € par mois pour un suivi de base (optimisation on-page, rapport mensuel, 1 article). Un accompagnement complet avec création de contenu et netlinking est entre 800 et 1 500 €/mois selon la compétitivité de votre secteur.",
      },
      {
        q: "Faites-vous du SEO local pour les entreprises en Drôme, Isère et Rhône-Alpes ?",
        a: "Oui, c'est notre zone de prédilection. Nous connaissons le tissu économique local et optimisons votre présence pour les recherches géolocalisées en Drôme, Isère, Ardèche, Savoie et dans toute la région Auvergne-Rhône-Alpes.",
      },
      {
        q: "Un site Next.js est-il mieux référencé qu'un site WordPress ?",
        a: "Next.js peut atteindre de meilleures performances techniques (Lighthouse 95+, LCP sous 1 seconde) qui impactent positivement le SEO. WordPress, bien optimisé, peut aussi très bien se référencer. La différence réside surtout dans la vitesse de chargement et la qualité du code — deux facteurs que Google valorise en 2026.",
      },
    ],
    gradient: "from-teal-500 to-cyan-600",
    highlights: [
      "Audit SEO technique complet — crawl, erreurs 404, redirections, mobile et performance",
      "Recherche de mots-clés avec analyse de l'intention de recherche derrière chaque requête",
      "Analyse concurrentielle et identification des gaps de contenu exploitables rapidement",
      "Optimisation on-page de toutes vos pages prioritaires (titres, metas, structure Hn)",
      "Création de contenu SEO optimisé — articles, pages services, guides pratiques",
      "Données structurées schema.org pour les extraits enrichis Google (FAQ, produits, avis)",
      "Stratégie de netlinking et acquisition de liens depuis des sites d'autorité de votre secteur",
      "Configuration et suivi Google Search Console et Analytics 4 correctement reliés",
      "Rapport mensuel avec suivi de 30 à 100 mots-clés et évolution des positions",
      "Recommandations d'amélioration continue basées sur les données réelles chaque mois",
    ],
    steps: [
      { num: "01", title: "Audit SEO", duration: "Semaine 1 — Analyse", desc: "Analyse technique complète, état des lieux des positions actuelles et étude concurrentielle approfondie." },
      { num: "02", title: "Stratégie", duration: "Semaine 2 — Plan", desc: "Définition des mots-clés prioritaires, du plan de contenu et des axes d'amélioration technique." },
      { num: "03", title: "Optimisation", duration: "Semaines 3-4 — Exécution", desc: "Corrections techniques, optimisation on-page et implémentation des données structurées." },
      { num: "04", title: "Contenu", duration: "Mois 2-3 — Création", desc: "Création et publication des contenus SEO optimisés selon le calendrier éditorial défini ensemble." },
      { num: "05", title: "Netlinking & suivi", duration: "Mois 3+ — Continue", desc: "Monitoring des positions, acquisition de liens entrants et ajustements stratégiques mensuels." },
    ],
    targetProfiles: [
      "PME et e-commerces qui dépendent de la publicité payante et veulent développer un trafic organique pérenne",
      "Sites avec un bon contenu mais qui n'apparaissent jamais sur Google faute d'optimisation technique",
      "Nouvelles boutiques qui veulent investir dès le départ dans le canal le plus rentable à long terme",
      "Marques locales qui veulent dominer les recherches géolocalisées de leur secteur d'activité",
    ],
  },
  {
    slug: "optimisation-core-web-vitals",
    name: "Optimisation Core Web Vitals",
    shortDesc: "Performances techniques optimales pour un meilleur classement Google et une UX excellente.",
    metaTitle: "Optimisation Core Web Vitals",
    metaDescription: "Kama Agency optimise vos Core Web Vitals : LCP, FID, CLS. Améliorez vos performances techniques pour un meilleur classement Google et une expérience utilisateur optimale.",
    intro: "Depuis 2021, Google intègre les Core Web Vitals dans son algorithme de classement. Un site lent ou instable est pénalisé dans les résultats de recherche — et perd des clients avant même qu'ils aient lu une ligne. Chez Kama Agency, nous optimisons vos performances techniques pour atteindre les scores verts sur tous les indicateurs Google et offrir une expérience utilisateur irréprochable.",
    sections: [
      {
        h2: "Comprendre les Core Web Vitals",
        body: "Les Core Web Vitals sont trois métriques créées par Google pour mesurer l'expérience utilisateur réelle : le LCP (Largest Contentful Paint) mesure la vitesse de chargement du contenu principal, le FID (First Input Delay) mesure la réactivité aux interactions, et le CLS (Cumulative Layout Shift) mesure la stabilité visuelle de la page. Un bon score sur ces trois métriques améliore à la fois votre SEO et la satisfaction de vos utilisateurs.",
      },
      {
        h2: "Notre processus d'optimisation des performances",
        body: "Nous commençons par un audit complet avec les outils Google Lighthouse, PageSpeed Insights et WebPageTest pour identifier précisément les sources de ralentissement. Puis nous intervenons sur les leviers les plus impactants : optimisation et conversion des images en format WebP/AVIF, mise en place du lazy loading, compression et minification du code, élimination des ressources bloquantes, configuration du cache navigateur et serveur, et mise en place d'un CDN.",
      },
      {
        h2: "Optimisation spécifique selon votre plateforme",
        body: "Les optimisations varient selon votre technologie. Sur WordPress, nous configurons des plugins de cache performants, optimisons votre base de données et réduisons les requêtes inutiles. Sur Shopify, nous optimisons le thème et les scripts d'applications. Sur Next.js, nous exploitons l'optimisation automatique des images, le code splitting et le prefetching intelligent. Chaque plateforme a ses leviers spécifiques.",
      },
      {
        h2: "Impact mesurable sur votre business",
        body: "Les études montrent qu'une amélioration de 1 seconde du temps de chargement augmente les conversions de 7% en moyenne. Amazon a calculé que chaque 100ms de ralentissement lui coûtait 1% de ventes. Ces chiffres illustrent l'enjeu réel des performances web. Nous vous fournissons des rapports avant/après pour mesurer l'impact concret de nos optimisations.",
      },
    ],
    faq: [
      {
        q: "Mon site a un score PageSpeed de 40/100 — est-ce réparable ?",
        a: "Oui, dans la grande majorité des cas. Même les sites très lents peuvent atteindre des scores de 80-90/100 après optimisation. Le potentiel d'amélioration dépend de votre plateforme, de votre hébergement et des ressources chargées. Nous faisons un audit préalable gratuit pour évaluer le potentiel.",
      },
      {
        q: "L'optimisation des performances risque-t-elle de casser mon site ?",
        a: "Non, si elle est menée méthodiquement. Nous travaillons toujours sur un environnement de test avant d'appliquer les modifications en production. Chaque optimisation est testée et validée avant déploiement.",
      },
      {
        q: "Faut-il changer d'hébergeur pour améliorer les performances ?",
        a: "Pas forcément, mais l'hébergement est un facteur important. Si votre hébergeur est sous-dimensionné, nous vous conseillerons des alternatives performantes. Un bon hébergement peut à lui seul améliorer vos scores de 20 à 30 points.",
      },
      {
        q: "Quel est le coût d'une optimisation Core Web Vitals ?",
        a: "L'optimisation démarre à partir de 500 € pour un audit complet avec rapport de recommandations. La mise en œuvre des correctifs est facturée selon les heures nécessaires, généralement entre 300 et 1 500 € selon la complexité technique de votre site.",
      },
      {
        q: "Quelle est la différence entre PageSpeed Insights et Lighthouse ?",
        a: "Lighthouse est l'outil de mesure en laboratoire (conditions contrôlées). PageSpeed Insights affiche à la fois les données de laboratoire et les données de terrain réelles (CrUX) collectées depuis de vrais utilisateurs Chrome. Les données de terrain sont les plus importantes pour le SEO.",
      },
      {
        q: "Combien de temps faut-il pour améliorer les Core Web Vitals ?",
        a: "Les corrections rapides (images non optimisées, ressources bloquantes) peuvent être appliquées en 1 à 3 jours. Un audit + correctifs complets prennent en général 2 à 3 semaines. Vous recevez un rapport avant/après avec les scores Lighthouse comparatifs.",
      },
    ],
    gradient: "from-lime-500 to-green-600",
    highlights: [
      "Audit Lighthouse et PageSpeed Insights avec rapport détaillé des axes d'amélioration prioritaires",
      "Optimisation et conversion automatique des images en WebP et AVIF",
      "Mise en place du lazy loading pour les images et les composants hors écran",
      "Compression et minification complète du HTML, CSS et JavaScript",
      "Élimination des ressources bloquant le rendu (render-blocking resources)",
      "Configuration du cache navigateur et du cache serveur pour les assets statiques",
      "Mise en place ou optimisation du CDN pour la livraison mondiale des assets",
      "Réduction du Cumulative Layout Shift (CLS) à < 0.1 (seuil Google)",
      "Optimisation du Largest Contentful Paint (LCP) à < 2.5 secondes",
      "Rapport comparatif avant/après avec mesure de l'impact réel sur les conversions",
    ],
    steps: [
      { num: "01", title: "Mesure initiale", duration: "Jour 1 — Audit", desc: "Audit complet Lighthouse, CrUX et WebPageTest pour établir la baseline et prioriser les optimisations." },
      { num: "02", title: "Quick wins", duration: "Jours 2-3 — Gains rapides", desc: "Images, cache, compression — les optimisations qui apportent le plus de points le plus vite." },
      { num: "03", title: "Optimisation avancée", duration: "Semaine 2 — Technique", desc: "Ressources bloquantes, code splitting, Critical CSS et lazy loading des composants non critiques." },
      { num: "04", title: "CDN & hébergement", duration: "Semaine 2 — Infrastructure", desc: "Configuration ou optimisation du CDN et recommandations d'hébergement si nécessaire." },
      { num: "05", title: "Validation & monitoring", duration: "Semaine 3 — Suivi", desc: "Tests de validation cross-device, rapport final et mise en place du monitoring continu." },
    ],
    targetProfiles: [
      "Sites avec un score PageSpeed inférieur à 60 qui perdent des positions Google à cause de leurs performances",
      "E-commerces dont le taux d'abandon est élevé sur mobile à cause de temps de chargement trop longs",
      "Projets Next.js ou React qui n'exploitent pas les optimisations natives disponibles (ISR, image optimization)",
      "Sites WordPress ou Shopify ralentis par trop de plugins ou un thème mal codé",
    ],
  },
  {
    slug: "analytics-et-suivi",
    name: "Analytics & Suivi",
    shortDesc: "Des tableaux de bord clairs pour prendre des décisions basées sur les données réelles.",
    metaTitle: "Analytics et suivi web professionnel",
    metaDescription: "Kama Agency configure votre tracking analytique complet : Google Analytics 4, tableaux de bord personnalisés, suivi des conversions. Prenez des décisions basées sur des données fiables.",
    intro: "Sans données fiables, vous pilotez votre business à l'aveugle. Combien de visiteurs viennent sur votre site ? D'où viennent-ils ? Quelle page les fait partir ? Quels canaux génèrent le plus de ventes ? Ces questions fondamentales méritent des réponses précises. Chez Kama Agency, nous configurons votre infrastructure analytique pour que chaque décision soit éclairée par des données réelles.",
    sections: [
      {
        h2: "Google Analytics 4 : le nouveau standard",
        body: "La transition vers Google Analytics 4 (GA4) est obligatoire depuis la fin d'Universal Analytics. GA4 représente un changement de paradigme : mesure basée sur les événements plutôt que les sessions, meilleure gestion de la confidentialité, suivi cross-device amélioré et intégration native avec Google Ads. Nous configurons GA4 correctement dès le départ, avec les événements personnalisés adaptés à votre business.",
      },
      {
        h2: "Configuration du tracking avancé",
        body: "Un tracking basique ne suffit pas pour prendre de bonnes décisions. Nous configurons le suivi complet de vos événements clés : clics sur les boutons d'appel à l'action, soumissions de formulaires, défilement de page, lectures de vidéos, téléchargements, ajouts au panier, et conversions. Chaque interaction importante est tracée avec ses dimensions personnalisées pour un niveau d'analyse granulaire.",
      },
      {
        h2: "Tableaux de bord personnalisés et rapports automatisés",
        body: "Les données brutes sont inutiles sans visualisation. Nous créons des tableaux de bord Looker Studio (Google Data Studio) personnalisés qui condensent les métriques qui comptent vraiment pour votre business : trafic par source, taux de conversion par canal, performance des pages, et ROI de vos actions marketing. Ces rapports peuvent être envoyés automatiquement par email chaque semaine ou chaque mois.",
      },
      {
        h2: "Confidentialité et conformité RGPD",
        body: "Le tracking doit être conforme au RGPD et respecter la vie privée de vos utilisateurs. Nous configurons votre consentement aux cookies (banière RGPD), la collecte des données de manière anonymisée, et le respect des préférences utilisateurs. Une configuration conforme vous protège juridiquement et maintient la confiance de vos visiteurs.",
      },
    ],
    faq: [
      {
        q: "Quelle est la différence entre Google Analytics et Google Search Console ?",
        a: "Google Analytics mesure le comportement des visiteurs sur votre site (d'où ils viennent, quelles pages ils visitent, combien de temps ils restent). Google Search Console mesure votre visibilité dans les résultats de recherche Google (positions, impressions, clics). Les deux outils sont complémentaires et indispensables.",
      },
      {
        q: "Mon suivi e-commerce est-il correctement configuré ?",
        a: "C'est souvent là que les configurations sont défaillantes. Nous auditons votre tracking e-commerce actuel pour vérifier que toutes les transactions sont bien comptabilisées, les revenus correctement attribués et les entonnoirs de conversion bien définis. Beaucoup de boutiques perdent des données précieuses à cause d'une mauvaise configuration.",
      },
      {
        q: "Proposez-vous de la formation à l'analyse de données ?",
        a: "Oui. Nous vous formons à lire et interpréter vos données, à utiliser les rapports personnalisés que nous avons créés pour vous, et à prendre des décisions basées sur vos analytics. Notre objectif est de vous rendre autonome dans le pilotage de votre business.",
      },
      {
        q: "Quel est le coût de mise en place d'un tracking analytique complet ?",
        a: "La configuration d'un tracking GA4 complet (événements clés, conversions, tableaux de bord Looker Studio) démarre à partir de 500 €. Pour un tracking e-commerce avancé avec Meta Pixel et GTM, comptez 800 à 1 500 € selon la complexité.",
      },
      {
        q: "GA4 est-il conforme au RGPD ?",
        a: "GA4 peut être rendu conforme au RGPD avec la bonne configuration : anonymisation des IPs, durée de conservation des données réduite, désactivation des signaux Google si nécessaire, et bannière de consentement correctement implémentée. Nous configurons tout cela dans nos prestations analytics.",
      },
      {
        q: "Peut-on récupérer les données historiques d'Universal Analytics dans GA4 ?",
        a: "Non, GA4 ne peut pas importer les données historiques d'Universal Analytics (désactivé en juillet 2023). En revanche, si vous avez exporté vos données UA dans BigQuery ou Google Sheets, nous pouvons les connecter à Looker Studio pour avoir une vue historique complète.",
      },
    ],
    gradient: "from-violet-500 to-purple-600",
    highlights: [
      "Configuration complète de Google Analytics 4 avec toutes les propriétés nécessaires",
      "Tracking des événements clés personnalisés selon vos objectifs business réels",
      "Suivi e-commerce amélioré (GA4 Enhanced Ecommerce) pour les boutiques en ligne",
      "Mise en place de Google Tag Manager pour une gestion centralisée de tous vos tags",
      "Intégration Google Search Console et liaison avec GA4 pour une vue complète",
      "Tableaux de bord Looker Studio personnalisés avec vos KPIs prioritaires",
      "Configuration Meta Pixel et conversions API pour un tracking publicitaire précis",
      "Mise en conformité RGPD — bannière de consentement et collecte anonymisée",
      "Rapports automatiques hebdomadaires ou mensuels envoyés directement par email",
      "Formation à l'interprétation des données et à la prise de décision data-driven",
    ],
    steps: [
      { num: "01", title: "Audit tracking", duration: "Jour 1 — Vérification", desc: "Vérification de l'installation existante et identification des données manquantes ou incorrectes." },
      { num: "02", title: "Configuration GA4", duration: "Jours 2-3 — Setup", desc: "Mise en place des propriétés, flux de données, events et conversions personnalisés selon vos objectifs." },
      { num: "03", title: "Tag Manager", duration: "Semaine 1 — Centralisation", desc: "Configuration du container GTM avec tous les tags marketing et d'analyse nécessaires." },
      { num: "04", title: "Looker Studio", duration: "Semaine 2 — Dashboards", desc: "Création des tableaux de bord personnalisés avec vos métriques prioritaires et les rapports automatiques." },
      { num: "05", title: "Formation & RGPD", duration: "Semaine 2 — Livraison", desc: "Formation à l'utilisation des dashboards et configuration de la conformité RGPD." },
    ],
    targetProfiles: [
      "PME qui prennent des décisions marketing à l'intuition faute de données fiables et structurées",
      "E-commerces dont le tracking est cassé ou incomplet et qui ne peuvent pas mesurer leur ROI réel",
      "Responsables marketing qui doivent justifier leurs budgets avec des données et des rapports clairs",
      "Entreprises en croissance qui veulent mettre en place une culture data-driven à tous les niveaux",
    ],
  },
  {
    slug: "saas-sur-mesure",
    name: "SaaS sur-mesure",
    shortDesc: "Votre application SaaS de A à Z, de l'idée à la production avec les meilleures technologies.",
    metaTitle: "Développement SaaS sur-mesure",
    metaDescription: "Kama Agency développe votre SaaS sur-mesure : authentification, abonnements, tableau de bord, API. Transformez votre idée en produit SaaS avec les meilleures technologies.",
    intro: "Transformer une idée en produit SaaS fonctionnel est l'un des défis techniques les plus complexes du développement web. Il faut maîtriser l'authentification, la facturation récurrente, l'architecture évolutive, la gestion des rôles et permissions, les APIs, et bien plus. Chez Kama Agency, nous avons l'expertise pour prendre votre idée de la maquette à la production en un temps record.",
    sections: [
      {
        h2: "De l'idée au MVP en 8 semaines",
        body: "Notre approche SaaS est orientée MVP (Minimum Viable Product) : nous construisons rapidement la version la plus simple de votre produit qui délivre de la valeur à vos premiers utilisateurs. Cela vous permet de valider votre hypothèse business, de collecter des retours réels et d'itérer rapidement avant d'investir dans des fonctionnalités avancées. Un MVP bien construit est préférable à un produit complet qui met 2 ans à sortir.",
      },
      {
        h2: "Stack technique éprouvé pour les SaaS",
        body: "Nous utilisons une stack technique moderne et éprouvée : Next.js pour le frontend (performance et SEO), Supabase ou Prisma/PostgreSQL pour la base de données, Stripe pour la facturation et les abonnements, Clerk ou NextAuth pour l'authentification, et Vercel ou Railway pour le déploiement. Ces technologies permettent un développement rapide tout en garantissant la scalabilité pour des milliers d'utilisateurs.",
      },
      {
        h2: "Fonctionnalités essentielles d'un SaaS",
        body: "Un SaaS complet comprend de nombreux modules techniques : inscription et authentification (email, OAuth Google/GitHub), gestion des abonnements et des plans (mensuel, annuel, freemium), tableau de bord utilisateur personnalisé, gestion des équipes et des rôles, système de notifications (email, in-app), API REST ou GraphQL documentée, et panel d'administration. Nous gérons chacun de ces modules avec soin.",
      },
      {
        h2: "Scalabilité et fiabilité de production",
        body: "Votre SaaS doit tenir la charge quand vous avez 100 utilisateurs — et quand vous en avez 100 000. Nous concevons l'architecture pour qu'elle soit horizontalement scalable : séparation des services, gestion des files d'attente pour les tâches lourdes, mise en cache intelligente et optimisation des requêtes base de données. Nous configurons également le monitoring et les alertes pour détecter les problèmes avant vos utilisateurs.",
      },
    ],
    faq: [
      {
        q: "Combien coûte le développement d'un SaaS sur-mesure ?",
        a: "Le coût dépend de la complexité du produit. Un MVP simple démarre autour de 5 000 €, un SaaS avec des fonctionnalités avancées peut aller de 15 000 à 50 000 €. Nous définissons ensemble le scope et le budget lors d'un premier appel de découverte.",
      },
      {
        q: "M'aidez-vous à définir les fonctionnalités à prioriser ?",
        a: "Oui, c'est une partie essentielle de notre processus. Nous vous aidons à définir votre MVP en appliquant le principe de Pareto : 20% des fonctionnalités qui délivrent 80% de la valeur. Cela vous permet de lancer plus vite et de valider votre marché avant d'investir davantage.",
      },
      {
        q: "Qui sera propriétaire du code source ?",
        a: "Vous. Le code source est entièrement le vôtre à la livraison. Nous vous le remettons sur un repository Git privé (GitHub ou GitLab) que vous contrôlez. Aucun lock-in technologique ni dépendance envers Kama Agency.",
      },
      {
        q: "Quelle est la différence entre un SaaS et une application web classique ?",
        a: "Un SaaS est une application web hébergée dans le cloud, accessible via abonnement, conçue pour plusieurs clients (multi-tenant). Elle inclut la gestion des abonnements (Stripe), des rôles et permissions, un tableau de bord par client, et une architecture scalable. Une application web classique est généralement mono-client ou sans modèle d'abonnement.",
      },
      {
        q: "Comment gérez-vous les abonnements et la facturation dans un SaaS ?",
        a: "Nous intégrons Stripe comme moteur de facturation : abonnements mensuels ou annuels, plans multiples (freemium, pro, enterprise), upgrades/downgrades automatiques, portail client self-service, facturation par siège ou à l'usage. Stripe est le standard de l'industrie et gère la conformité PCI automatiquement.",
      },
      {
        q: "Pouvez-vous héberger notre SaaS sur nos propres serveurs ?",
        a: "Oui. Bien que nous recommandions Vercel + Supabase pour leur rapidité et scalabilité, nous pouvons déployer votre SaaS sur VPS (Hetzner, OVH, AWS) ou dans votre infrastructure on-premise si vos contraintes réglementaires l'exigent (RGPD, données sensibles).",
      },
    ],
    gradient: "from-sky-500 to-blue-600",
    highlights: [
      "Architecture Next.js App Router avec Server Components et streaming pour des performances maximales",
      "TypeScript strict — zéro any, typage complet de bout en bout de l'application",
      "Score Lighthouse > 95/100 sur toutes les pages publiques garanti à la livraison",
      "SSR, SSG et ISR choisis intelligemment selon les besoins de chaque route",
      "Optimisation automatique des images (WebP, AVIF, lazy loading natif Next.js)",
      "API Routes serverless avec validation Zod et gestion exhaustive des erreurs",
      "CI/CD automatisé via GitHub Actions avec previews Vercel sur chaque Pull Request",
      "Tests unitaires (Jest) et end-to-end (Playwright) sur tous les flux critiques",
      "Déploiement Vercel avec edge functions et cache CDN mondial",
      "Code source livré sur votre repository Git — propriété totale, zéro lock-in",
    ],
    steps: [
      { num: "01", title: "Discovery", duration: "Semaine 1 — Architecture", desc: "Définition du MVP, architecture des données, user stories et priorisation des fonctionnalités." },
      { num: "02", title: "Design système", duration: "Semaine 2 — UX/UI", desc: "Maquettes des écrans clés et design system complet validés avant tout développement." },
      { num: "03", title: "Développement core", duration: "Semaines 3-6 — Code", desc: "Auth, base de données, API et fonctionnalités métier principales du SaaS." },
      { num: "04", title: "Intégrations", duration: "Semaines 7-8 — Config", desc: "Stripe, emails transactionnels, notifications, API tierces et panel d'administration." },
      { num: "05", title: "Tests & déploiement", duration: "Semaines 9-10 — Live", desc: "Tests de charge, CI/CD, déploiement Vercel/Railway et formation de votre équipe." },
    ],
    targetProfiles: [
      "Entrepreneurs avec une idée SaaS validée qui cherchent un partenaire technique pour concrétiser leur MVP rapidement",
      "Fondateurs non-techniques qui ont besoin d'une équipe expérimentée pour prendre les bonnes décisions d'architecture",
      "Startups qui veulent externaliser le développement de leur V1 avant de recruter leur CTO",
      "PME qui veulent digitaliser un processus métier interne en le transformant en outil SaaS pour leur équipe",
    ],
  },
  {
    slug: "shopify-liquid",
    name: "Shopify Liquid",
    shortDesc: "Développement Shopify Liquid avancé pour personaliser votre boutique au-delà des limites des thèmes.",
    metaTitle: "Développement Shopify Liquid avancé",
    metaDescription: "Kama Agency maîtrise Shopify Liquid : développement de thèmes sur-mesure, sections personnalisées, apps Shopify, Storefront API. Poussez Shopify au-delà de ses limites.",
    intro: "Shopify est puissant, mais les thèmes standard ont leurs limites. Liquid, le langage de templating de Shopify, permet de créer des expériences e-commerce entièrement sur-mesure : sections personnalisées, logiques d'affichage complexes, intégrations avancées et apps Shopify. Chez Kama Agency, nous maîtrisons Liquid à un niveau expert pour construire exactement ce dont vous avez besoin.",
    sections: [
      {
        h2: "Qu'est-ce que Shopify Liquid et pourquoi c'est important ?",
        body: "Liquid est le langage créé par Shopify pour personnaliser les thèmes. Il permet d'accéder aux données de votre boutique (produits, collections, clients, commandes) et de les afficher de manière dynamique. Maîtriser Liquid, c'est avoir le contrôle total sur l'apparence et le comportement de votre boutique — sans être limité par les options de thème standard ni payer pour des apps tierces pour chaque petite personnalisation.",
      },
      {
        h2: "Développement de sections personnalisées",
        body: "Shopify OS 2.0 a introduit l'architecture de sections qui permet aux marchands de personnaliser leur boutique via un éditeur drag-and-drop. Nous développons des sections Liquid personnalisées qui apparaissent dans cet éditeur et donnent à votre équipe marketing la liberté de créer des mises en page uniques sans toucher au code. Des sections bien conçues accélèrent considérablement la création de campagnes et de landing pages.",
      },
      {
        h2: "Intégrations et modifications avancées",
        body: "Certaines fonctionnalités métier ne peuvent pas être réalisées avec des apps standard : affichage conditionnel de prix selon le client, configuration produit complexe multi-étapes, règles promotionnelles avancées, affichage de stocks en temps réel depuis votre ERP. Nous développons ces fonctionnalités sur mesure en Liquid, JavaScript et via l'API Shopify Admin ou Storefront API.",
      },
      {
        h2: "Performance et bonnes pratiques Shopify",
        body: "Un thème Shopify lourd ralentit votre boutique et pénalise vos ventes. Nous optimisons le code Liquid pour minimiser les requêtes DOM, charger les ressources de manière asynchrone et éviter les scripts bloquants. Nous suivons les recommandations officielles de Shopify pour les thèmes et nous nous assurons que votre boutique passe les tests de performance de l'App Store.",
      },
    ],
    faq: [
      {
        q: "Pouvez-vous modifier un thème Shopify acheté sur le Thème Store ?",
        a: "Oui, absolument. Nous pouvons personnaliser n'importe quel thème Shopify, qu'il soit gratuit ou payant. Nous travaillons directement dans le code du thème pour réaliser vos modifications tout en préservant la possibilité de recevoir les mises à jour du thème original.",
      },
      {
        q: "Développez-vous des applications Shopify ?",
        a: "Oui. Pour des fonctionnalités très avancées ou si vous souhaitez commercialiser une app sur l'App Store Shopify, nous développons des applications complètes utilisant l'API Shopify et les meilleures pratiques de développement Shopify Partners.",
      },
      {
        q: "Ma boutique Shopify peut-elle être migrée vers un thème sur-mesure ?",
        a: "Oui. Nous développons des thèmes Shopify entièrement sur-mesure à partir de zéro, en utilisant le système de sections OS 2.0. Votre boutique gagne en performance, en différenciation et en flexibilité de gestion.",
      },
      {
        q: "Shopify Liquid est-il difficile à apprendre pour modifier soi-même son thème ?",
        a: "Liquid a une courbe d'apprentissage modérée. Pour des modifications simples (textes, couleurs, sections), votre équipe peut s'en charger rapidement. Pour des modifications structurelles ou des fonctionnalités avancées, faire appel à un développeur Liquid certifié comme Kama Agency reste recommandé.",
      },
      {
        q: "Combien coûte le développement d'un thème Shopify Liquid entièrement sur-mesure ?",
        a: "Un thème Shopify OS 2.0 sur-mesure complet démarre à partir de 2 500 €. Ce tarif inclut toutes les sections configurables, les templates de pages et les tests cross-navigateurs. La personnalisation d'un thème existant (modifications ciblées) est facturée à partir de 300 € selon le scope.",
      },
      {
        q: "Les personnalisations Liquid affectent-elles les mises à jour Shopify ?",
        a: "Si vous travaillez sur un thème enfant ou sur un thème entièrement sur-mesure (notre approche), les mises à jour Shopify n'affectent pas vos personnalisations. Nous documentons tout le code pour faciliter les évolutions futures.",
      },
    ],
    gradient: "from-emerald-500 to-teal-600",
    highlights: [
      "Thème Shopify OS 2.0 entièrement en Liquid — aucune dépendance app tierce fragile",
      "Sections personnalisées éditables via l'éditeur drag-and-drop de Shopify",
      "Blocs configurables par votre équipe marketing sans toucher une ligne de code",
      "Performances optimisées — scripts chargés en asynchrone, JavaScript minimal",
      "Intégration Storefront API pour des expériences headless si nécessaire",
      "Apps Shopify sur-mesure pour les fonctionnalités hors scope des thèmes standards",
      "Migration depuis n'importe quel thème existant sans perte de données ni de SEO",
      "Respect des guidelines officielles Shopify Partners et Theme Store",
      "Tests sur l'ensemble des navigateurs et appareils pris en charge par Shopify",
      "Documentation technique complète pour votre équipe ou vos futurs développeurs",
    ],
    steps: [
      { num: "01", title: "Analyse du thème", duration: "Jours 1-2 — Audit", desc: "Audit du code existant, identification des problèmes de performance et définition du scope exact." },
      { num: "02", title: "Architecture Liquid", duration: "Jours 3-5 — Structure", desc: "Structure des sections, schémas de données et plan des templates avant tout développement." },
      { num: "03", title: "Sections personnalisées", duration: "Semaines 2-3 — Dev", desc: "Création des sections Liquid sur-mesure et de la logique métier spécifique à votre boutique." },
      { num: "04", title: "Intégrations & scripts", duration: "Semaine 4 — Configuration", desc: "Configuration des apps, scripts asynchrones et Storefront API si nécessaire." },
      { num: "05", title: "Tests & documentation", duration: "Semaine 5 — Livraison", desc: "Tests cross-browser, optimisation des performances et documentation technique complète." },
    ],
    targetProfiles: [
      "Marchands Shopify avec un thème acheté qui ne répond plus à leurs besoins spécifiques",
      "Marques qui veulent une boutique Shopify entièrement unique sans passer par un thème du Store",
      "Équipes marketing qui veulent créer des landing pages et promotions sans dépendre des développeurs",
      "Boutiques à fort volume dont le thème actuel montre des signes de ralentissement ou d'instabilité",
    ],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    shortDesc: "Sites WordPress sur-mesure, performants et faciles à gérer sans connaissances techniques.",
    metaTitle: "Création site WordPress sur-mesure",
    metaDescription: "Kama Agency développe votre site WordPress sur-mesure : thème custom, ACF, Gutenberg, optimisation performance. Un site rapide, sécurisé et facile à gérer.",
    intro: "WordPress alimente 43% des sites web dans le monde — et pour de bonnes raisons. Sa flexibilité, son écosystème et sa facilité de gestion en font le CMS de référence pour les sites vitrine, blogs et sites institutionnels. Chez Kama Agency, nous développons des sites WordPress sur-mesure qui vont bien au-delà des thèmes standard : performants, sécurisés et entièrement maîtrisés par vous.",
    sections: [
      {
        h2: "WordPress bien fait : thème sur-mesure vs thème standard",
        body: "La majorité des sites WordPress souffrent des mêmes problèmes : thèmes génériques avec trop de fonctionnalités inutiles, plugins en excès qui ralentissent le site, design reconnaissable et peu différenciant. Chez Kama Agency, nous développons des thèmes WordPress sur-mesure : code épuré, uniquement les fonctionnalités dont vous avez besoin, design unique qui reflète votre identité. Résultat : un site rapide, sécurisé et distinctif.",
      },
      {
        h2: "Gutenberg et ACF pour une gestion simplifiée",
        body: "Nous construisons vos sites WordPress avec l'éditeur Gutenberg (blocks natifs) et Advanced Custom Fields (ACF) pour créer des interfaces de gestion de contenu intuitive adaptées à votre structure. Vos équipes peuvent modifier le contenu facilement, créer de nouvelles pages en assemblant des blocs prédéfinis, et maintenir la cohérence visuelle du site sans risque de casser le design.",
      },
      {
        h2: "Sécurité et maintenance WordPress",
        body: "WordPress est la cible principale des hackers en raison de sa popularité. Nous sécurisons votre installation dès le départ : configuration du serveur, hardening WordPress, authentification à deux facteurs, backups automatiques quotidiens, et monitoring des tentatives d'intrusion. Nous proposons également des forfaits de maintenance mensuelle pour maintenir votre site à jour et sécurisé en permanence.",
      },
      {
        h2: "WooCommerce pour votre e-commerce WordPress",
        body: "Si vous souhaitez une boutique e-commerce sur WordPress, WooCommerce est la solution. Nous développons des boutiques WooCommerce sur-mesure avec des thèmes enfants personnalisés, des extensions de paiement (Stripe, PayPal), la gestion des stocks, les emails transactionnels personnalisés et l'intégration des outils marketing essentiels. WooCommerce offre une flexibilité maximale pour des boutiques à besoins spécifiques.",
      },
    ],
    faq: [
      {
        q: "WordPress est-il adapté à tous types de sites ?",
        a: "WordPress excelle pour les sites vitrine, blogs, sites institutionnels, portfolios et e-commerces de taille moyenne. Pour des applications web complexes ou des e-commerces à très fort volume, d'autres solutions (Next.js, Shopify) peuvent être plus adaptées. Nous vous conseillons sur la meilleure option selon votre projet.",
      },
      {
        q: "Utilisez-vous des constructeurs de pages comme Elementor ou Divi ?",
        a: "Non. Nous développons en Gutenberg natif et code PHP/CSS pour des raisons de performance et de maintenabilité. Les page builders comme Elementor génèrent beaucoup de code superflu qui ralentit les sites et les rend difficiles à maintenir sur le long terme.",
      },
      {
        q: "Proposez-vous des formations à WordPress pour mon équipe ?",
        a: "Oui. Nous incluons une formation à la gestion du contenu dans toutes nos livraisons WordPress. Nous pouvons également proposer des formations approfondies pour vos équipes marketing afin qu'elles soient totalement autonomes dans la gestion quotidienne du site.",
      },
      {
        q: "Quel hébergeur recommandez-vous pour un site WordPress en France ?",
        a: "Pour les performances et le support en français, nous recommandons O2Switch (100% FR, prix imbattable), WP Engine (performances premium, backup quotidien) ou Kinsta (hébergement géré haut de gamme). Nous gérons la migration et la configuration de l'hébergement dans nos prestations.",
      },
      {
        q: "Combien coûte un site WordPress sur-mesure chez Kama Agency ?",
        a: "Un site WordPress sur-mesure avec thème enfant Gutenberg démarre à partir de 1 200 €. Pour un site plus complexe avec des types de contenu avancés (ACF), e-commerce WooCommerce ou fonctionnalités sur-mesure, comptez entre 2 000 et 5 000 €. Devis gratuit sous 48h.",
      },
      {
        q: "WordPress ou Next.js : quelle technologie pour mon site ?",
        a: "WordPress est idéal si vous avez besoin de gérer beaucoup de contenu facilement et que votre équipe n'est pas technique. Next.js est préférable pour des performances maximales (Lighthouse 95+), un SEO technique supérieur et des fonctionnalités interactives avancées. Nous vous conseillons après avoir compris votre projet.",
      },
    ],
    gradient: "from-blue-600 to-indigo-700",
    highlights: [
      "Thème WordPress enfant sur-mesure — zéro Elementor, zéro Divi, code propre et maintenable",
      "Architecture Gutenberg avec blocs personnalisés éditables par votre équipe en toute autonomie",
      "Advanced Custom Fields (ACF) pour des structures de contenu complexes et flexibles",
      "Performances optimisées — cache, images WebP, minification CSS/JS sans plugin lourd",
      "Sécurisation complète — 2FA, hardening WordPress, headers de sécurité, fichiers protégés",
      "Backups automatiques quotidiens vers votre stockage distant (S3, Google Drive)",
      "Score Lighthouse > 85/100 garanti sur le thème livré sans plugin de cache",
      "WooCommerce sur-mesure avec thème enfant pour les boutiques e-commerce WordPress",
      "WordPress Multisite disponible pour les groupes avec plusieurs entités ou marques",
      "Contrat de maintenance mensuelle disponible pour les mises à jour et la sécurité continue",
    ],
    steps: [
      { num: "01", title: "Brief & architecture", duration: "Jours 1-2 — Conception", desc: "Définition des types de contenu, des templates de pages et de la structure des champs ACF." },
      { num: "02", title: "Thème enfant", duration: "Semaine 1 — Dev", desc: "Développement du thème sur-mesure avec Gutenberg natif et les blocs personnalisés." },
      { num: "03", title: "Contenu & plugins", duration: "Semaine 2 — Intégration", desc: "Migration du contenu, configuration des plugins essentiels et des formulaires de contact." },
      { num: "04", title: "Optimisation", duration: "Semaine 3 — Performance", desc: "Performance (cache, images, minification) et sécurisation complète de l'installation WordPress." },
      { num: "05", title: "Formation & livraison", duration: "Semaine 4 — Lancement", desc: "Formation à la gestion du contenu, documentation de l'interface et mise en ligne." },
    ],
    targetProfiles: [
      "PME qui veulent un site WordPress performant sans dépendre d'un page builder fragile comme Elementor",
      "Associations, institutions et organisations qui ont besoin d'un CMS simple à gérer en interne",
      "Blogs et médias qui ont besoin de flexibilité éditoriale avec des types de contenu personnalisés",
      "E-commerces de taille moyenne qui préfèrent WooCommerce pour sa flexibilité face aux solutions SaaS",
    ],
  },
  {
    slug: "nextjs-et-react",
    name: "Next.js & React",
    shortDesc: "Applications web ultra-rapides avec les technologies les plus modernes du marché.",
    metaTitle: "Développement Next.js & React sur-mesure",
    metaDescription: "Kama Agency développe vos applications Next.js et React : SSR, SSG, API Routes, App Router. Des applications ultra-performantes qui passent Google Lighthouse avec 100/100.",
    intro: "Next.js est devenu la référence absolue pour construire des applications web modernes. Alliant la puissance de React avec des fonctionnalités de production avancées (Server Side Rendering, génération statique, API Routes), Next.js permet de créer des applications ultra-rapides, SEO-friendly et évolutives. Chez Kama Agency, Next.js est notre framework de prédilection pour les projets ambitieux.",
    sections: [
      {
        h2: "Pourquoi Next.js domine le développement web moderne",
        body: "Next.js offre le meilleur des deux mondes : la réactivité et la richesse des interfaces React côté client, combinées aux avantages du rendu serveur pour le SEO et les performances. L'App Router de Next.js 13+ révolutionne la façon de construire des applications en permettant un rendu hybride intelligent : chaque composant peut choisir entre rendu serveur, rendu client, ou génération statique selon ses besoins.",
      },
      {
        h2: "Nos cas d'usage Next.js",
        body: "Nous utilisons Next.js pour une grande variété de projets : sites marketing haute performance (scores Lighthouse 95-100), applications SaaS avec authentification et tableaux de bord complexes, plateformes e-commerce headless connectées à Shopify ou Stripe, blogs et sites de contenu avec génération statique à grande échelle, et APIs serverless qui scalent automatiquement. La flexibilité de Next.js s'adapte à presque tous les besoins.",
      },
      {
        h2: "Performance et expérience développeur au top",
        body: "Next.js intègre nativement les optimisations les plus importantes : optimisation automatique des images (WebP, AVIF, lazy loading, redimensionnement), code splitting automatique, prefetching intelligent des pages, streaming et Suspense pour les interfaces réactives, et intégration native avec les polices Google et les fonts locales. Ces optimisations sont actives dès le départ sans configuration supplémentaire.",
      },
      {
        h2: "Déploiement et infrastructure moderne",
        body: "Nous déployons vos applications Next.js sur les plateformes les plus performantes : Vercel (créateur de Next.js) pour les déploiements previews automatiques et les edge functions, ou Netlify pour les sites statiques. Nous configurons les pipelines CI/CD, les variables d'environnement, les domaines personnalisés et les certificats SSL. Votre application est opérationnelle et sécurisée dès le premier jour.",
      },
    ],
    faq: [
      {
        q: "Quelle est la différence entre Next.js et React seul ?",
        a: "React est une bibliothèque UI côté client. Next.js est un framework full-stack construit sur React qui ajoute le rendu serveur, le routage, les API Routes, l'optimisation des images, et bien d'autres fonctionnalités de production. Pour la quasi-totalité des projets web sérieux, Next.js est le meilleur choix.",
      },
      {
        q: "Peut-on migrer une application Create React App vers Next.js ?",
        a: "Oui, et c'est souvent une bonne décision. La migration améliore le SEO (le contenu est indexable par Google), les performances (SSR/SSG) et simplifie l'architecture. Nous gérons ces migrations en préservant toute la logique métier existante.",
      },
      {
        q: "Utilisez-vous TypeScript systématiquement ?",
        a: "Oui. Tous nos projets Next.js sont développés en TypeScript strict. TypeScript détecte les erreurs à la compilation plutôt qu'en production, améliore la maintenabilité du code et facilite la collaboration sur des projets de longue durée. C'est un standard non négociable pour nous.",
      },
      {
        q: "Next.js convient-il aux petits sites vitrine ou uniquement aux grandes applications ?",
        a: "Next.js s'adapte à tous les projets, des simples sites vitrine aux applications complexes. Pour un site vitrine, il offre des performances Lighthouse 95+ et un SEO technique excellent. Pour une application SaaS, il gère l'authentification, les APIs et le rendu hybride. C'est notre framework par défaut pour tout nouveau projet.",
      },
      {
        q: "Quel est le coût moyen d'un développement Next.js ?",
        a: "Un site marketing Next.js complet démarre à partir de 1 500 €. Une application avec authentification et tableau de bord est entre 3 000 et 8 000 €. Un SaaS complet à partir de 5 000 €. Tous nos projets Next.js incluent TypeScript strict, tests et déploiement Vercel.",
      },
      {
        q: "Vercel est-il obligatoire pour déployer un site Next.js ?",
        a: "Non, Next.js peut être déployé sur n'importe quel hébergeur Node.js : Railway, Netlify, DigitalOcean, Hetzner, ou même un VPS OVH. Vercel reste notre recommandation principale pour sa facilité, sa performance et son intégration native avec Next.js. Nous choisissons avec vous selon votre budget et vos contraintes.",
      },
    ],
    gradient: "from-slate-500 to-gray-700",
    highlights: [
      "Architecture Next.js App Router avec Server Components et streaming pour des performances maximales",
      "TypeScript strict — zéro any, typage complet de bout en bout de l'application",
      "Score Lighthouse > 95/100 sur toutes les pages publiques garanti à la livraison",
      "SSR, SSG et ISR choisis intelligemment selon les besoins de chaque route",
      "Optimisation automatique des images (WebP, AVIF, lazy loading natif Next.js)",
      "API Routes serverless avec validation Zod et gestion exhaustive des erreurs",
      "CI/CD automatisé via GitHub Actions avec previews Vercel sur chaque Pull Request",
      "Tests unitaires (Jest) et end-to-end (Playwright) sur tous les flux critiques",
      "Déploiement Vercel avec edge functions et cache CDN mondial",
      "Code source livré sur votre repository Git — propriété totale, zéro lock-in",
    ],
    steps: [
      { num: "01", title: "Architecture", duration: "Jours 1-3 — Conception", desc: "Définition de la structure App Router, des routes, du schéma de données et des composants clés." },
      { num: "02", title: "Setup & CI/CD", duration: "Jours 4-5 — Infrastructure", desc: "Configuration TypeScript strict, ESLint, Prettier, Jest et pipeline GitHub Actions." },
      { num: "03", title: "Frontend", duration: "Semaines 2-4 — UI", desc: "Composants, pages et logique UI avec Server Components et Client Components." },
      { num: "04", title: "Backend & API", duration: "Semaines 3-5 — Fullstack", desc: "API Routes, base de données, authentification et intégrations avec les services tiers." },
      { num: "05", title: "Tests & déploiement", duration: "Semaine 6 — Live", desc: "Tests end-to-end Playwright, optimisation finale et mise en production sur Vercel." },
    ],
    targetProfiles: [
      "Startups qui veulent construire leur produit sur le framework le plus moderne et le plus performant du marché",
      "Équipes qui migrent depuis Create React App ou un CMS headless et cherchent un partenaire pour la transition",
      "Entreprises avec un site statique qui veulent des fonctionnalités dynamiques sans sacrifier les performances",
      "Projets ambitieux qui ont besoin d'une architecture prête pour des centaines de milliers d'utilisateurs",
    ],
  },
  {
    slug: "chatbot-ia",
    name: "Chatbot & IA conversationnelle",
    shortDesc: "Un assistant IA sur votre site qui répond, qualifie et convertit vos visiteurs 24h/24.",
    metaTitle: "Chatbot IA pour site web",
    metaDescription: "Kama Agency intègre un chatbot IA sur votre site : assistant conversationnel, qualification de leads, support client automatisé. Propulsé par GPT-4 ou Claude.",
    intro: "Un visiteur qui n'obtient pas de réponse immédiate part chez la concurrence. Un chatbot IA bien conçu répond instantanément, qualifie vos prospects, prend des rendez-vous et réduit votre charge de support — tout ça sans aucune intervention humaine. Chez Kama Agency, nous intégrons des assistants IA personnalisés qui connaissent votre business sur le bout des doigts.",
    sections: [
      {
        h2: "Un chatbot IA qui connaît vraiment votre business",
        body: "Contrairement aux chatbots basiques avec des réponses préprogrammées, nos assistants IA sont entraînés sur vos données : catalogue produit, FAQ, tarifs, processus de vente. Ils comprennent le langage naturel, gèrent les questions complexes et savent quand escalader vers un humain. Le résultat : une expérience conversationnelle fluide qui donne l'impression de parler à un vrai membre de votre équipe.",
      },
      {
        h2: "Qualification de leads et prise de rendez-vous automatisée",
        body: "Le chatbot ne se contente pas de répondre — il travaille pour vous. Il pose les bonnes questions pour qualifier chaque lead (budget, timing, besoin), collecte les coordonnées et peut directement intégrer les données dans votre CRM (HubSpot, Salesforce, Notion). Il peut aussi proposer des créneaux de rendez-vous en temps réel via Cal.com ou Calendly, éliminant les allers-retours par email.",
      },
      {
        h2: "Intégration avec vos outils existants",
        body: "Notre chatbot IA s'intègre nativement à vos outils : Slack pour notifier votre équipe des leads chauds, votre CRM pour créer des contacts automatiquement, votre base de connaissance pour répondre avec précision, et votre boutique Shopify pour renseigner sur le statut des commandes. Chaque interaction est tracée et analysable pour améliorer continuellement les réponses.",
      },
      {
        h2: "Déploiement en quelques jours, ROI immédiat",
        body: "Un chatbot IA Kama Agency est opérationnel en 5 à 10 jours. Nous gérons l'entraînement sur vos données, la configuration des flux conversationnels, l'intégration sur votre site et les tests qualité. Après le lancement, nous affinons continuellement les réponses grâce aux conversations réelles. La plupart de nos clients constatent une réduction de 40 à 60% des emails de support et une augmentation mesurable du taux de conversion.",
      },
    ],
    faq: [
      {
        q: "Quelle IA utilisez-vous pour le chatbot ?",
        a: "Nous utilisons les meilleurs modèles du marché selon vos besoins : GPT-4o d'OpenAI ou Claude 3.5 d'Anthropic. Ces modèles comprennent le français parfaitement et offrent des réponses naturelles et précises. Nous choisissons le modèle le plus adapté à votre cas d'usage.",
      },
      {
        q: "Le chatbot peut-il parler en français ?",
        a: "Absolument, et c'est sa langue principale. Nos chatbots sont configurés et entraînés en français, avec le ton et le vocabulaire propres à votre marque. Ils peuvent aussi gérer des conversations multilingues si vous avez une clientèle internationale.",
      },
      {
        q: "Que se passe-t-il quand le chatbot ne sait pas répondre ?",
        a: "Le chatbot est configuré pour reconnaître ses limites et transférer proprement la conversation à votre équipe. Il peut envoyer une notification à vos commerciaux, créer un ticket de support ou proposer au visiteur de laisser ses coordonnées pour un rappel humain.",
      },
      {
        q: "Combien coûte l'intégration d'un chatbot IA sur mon site web ?",
        a: "Un chatbot IA sur-mesure démarre à partir de 1 500 €, incluant la configuration du modèle, l'entraînement sur vos données, l'intégration sur votre site et les tests qualité. Les frais d'API mensuels (OpenAI ou Anthropic) sont en supplément, généralement entre 20 et 100 €/mois selon votre volume.",
      },
      {
        q: "Le chatbot IA peut-il être intégré sur une boutique Shopify ou un site WordPress ?",
        a: "Oui, nous intégrons nos chatbots IA sur n'importe quelle plateforme : Shopify (via script ou app), WordPress, Next.js, ou n'importe quel site avec accès au HTML. L'intégration prend généralement 1 à 2 jours une fois le chatbot configuré.",
      },
      {
        q: "Faut-il un abonnement mensuel pour maintenir le chatbot ?",
        a: "Il y a deux coûts récurrents : les frais d'API du modèle IA (proportionnels à votre volume de conversations, généralement 20 à 100 €/mois) et optionnellement un forfait de maintenance Kama Agency pour les mises à jour de la base de connaissance et les optimisations (à partir de 150 €/mois).",
      },
    ],
    gradient: "from-violet-500 to-indigo-600",
    highlights: [
      "Entraînement sur votre contenu (FAQ, catalogue, docs) pour des réponses précises à votre domaine",
      "Compréhension du langage naturel en français avec le ton et le style de votre marque",
      "Qualification automatique des leads avec collecte structurée des coordonnées",
      "Prise de rendez-vous intégrée via Cal.com ou Calendly — fini les allers-retours email",
      "Synchronisation CRM automatique — HubSpot, Notion, Salesforce ou votre outil",
      "Notifications Slack ou email en temps réel pour les leads chauds détectés",
      "Escalade intelligente vers un humain quand le chatbot atteint ses limites",
      "Tableau de bord des conversations avec analytics de performance et taux de résolution",
      "Base de connaissance mise à jour facilement sans redéploiement technique",
      "Conforme RGPD — données hébergées en Europe sur demande, consentement géré",
    ],
    steps: [
      { num: "01", title: "Audit des besoins", duration: "Jour 1 — Analyse", desc: "Analyse des questions fréquentes, des flux de qualification et des outils à connecter." },
      { num: "02", title: "Base de connaissance", duration: "Jours 2-4 — RAG", desc: "Structuration et vectorisation de vos contenus pour un retrieval précis (RAG pipeline)." },
      { num: "03", title: "Configuration IA", duration: "Semaine 1 — Paramétrage", desc: "Paramétrage du modèle (GPT-4o ou Claude), du ton et des règles de comportement." },
      { num: "04", title: "Intégrations", duration: "Semaine 2 — Connexions", desc: "Connexion CRM, calendrier, Slack et tests des flux de qualification complets." },
      { num: "05", title: "Lancement & optimisation", duration: "Semaines 2-3 — Live", desc: "Déploiement sur votre site, tests qualité et affinage continu des réponses." },
    ],
    targetProfiles: [
      "E-commerces qui reçoivent des dizaines de questions répétitives par jour sur les délais, retours et produits",
      "Agences et prestataires de services qui veulent qualifier leurs leads 24h/24 sans recruter un commercial",
      "SaaS qui veulent un support client de niveau 1 automatisé pour soulager leur équipe de support",
      "Professionnels libéraux (avocats, consultants, experts) qui veulent capturer et qualifier les demandes en dehors des heures de bureau",
    ],
  },
  {
    slug: "automatisation-ia",
    name: "Automatisation IA & Workflows",
    shortDesc: "Automatisez vos tâches répétitives avec l'IA et libérez votre équipe pour ce qui compte vraiment.",
    metaTitle: "Automatisation IA et workflows",
    metaDescription: "Kama Agency automatise vos processus métier avec l'IA : génération de contenu, traitement de données, emails automatisés, workflows intelligents. Gagnez des heures chaque semaine.",
    intro: "Combien d'heures votre équipe passe-t-elle sur des tâches répétitives qui pourraient être automatisées ? Rédaction d'emails, traitement de formulaires, génération de rapports, mise à jour de bases de données… L'IA peut prendre en charge tout ça, avec une précision et une vitesse impossible à atteindre manuellement. Chez Kama Agency, nous construisons des pipelines d'automatisation IA qui font travailler votre business pendant que vous dormez.",
    sections: [
      {
        h2: "L'automatisation IA : bien plus que des simples scripts",
        body: "Les automatisations classiques (Zapier, Make) déplacent des données d'un outil à l'autre. L'automatisation IA va plus loin : elle comprend le contenu, prend des décisions contextuelles, génère du texte et s'adapte aux situations imprévues. Par exemple, un pipeline IA peut lire un email entrant, comprendre la demande, créer la fiche client dans votre CRM, générer une réponse personnalisée et l'envoyer — le tout en secondes.",
      },
      {
        h2: "Cas d'usage concrets pour votre business",
        body: "Nous avons automatisé des dizaines de processus métier différents : génération automatique de fiches produit SEO depuis un catalogue Excel, traitement et réponse aux avis clients Google, création de propositions commerciales personnalisées, analyse de candidatures pour le recrutement, génération de rapports de performance hebdomadaires, et mise à jour automatique des stocks et des prix selon les règles business.",
      },
      {
        h2: "Notre stack d'automatisation IA",
        body: "Nous utilisons les meilleurs outils selon votre contexte : n8n pour les workflows complexes on-premise, Make (ex-Integromat) pour les intégrations SaaS, des scripts Python custom pour les traitements data avancés, et les APIs d'OpenAI, Claude ou Mistral pour l'intelligence. Tout est hébergé de manière sécurisée et documenté pour que votre équipe puisse comprendre et modifier les flux.",
      },
      {
        h2: "Démarrage rapide et retour sur investissement mesurable",
        body: "Nous commençons toujours par identifier les 3 processus les plus chronophages dans votre équipe et calculons le temps économisé. Puis nous automatisons le premier flux en 1 à 2 semaines pour valider l'approche avant de scaler. Nos clients économisent en moyenne 15 à 30 heures de travail manuel par semaine dès le premier mois — un ROI souvent inférieur à 3 mois.",
      },
    ],
    faq: [
      {
        q: "Faut-il avoir des compétences techniques pour gérer les automatisations après livraison ?",
        a: "Non. Nous concevons les automatisations pour qu'elles soient gérables par votre équipe sans coder. Nous vous formons à les modifier, à ajouter des règles et à monitorer leur bon fonctionnement via des tableaux de bord simples.",
      },
      {
        q: "Mes données sont-elles en sécurité avec l'IA ?",
        a: "Oui. Nous configurons les automatisations pour respecter votre politique de confidentialité. Les données sensibles ne sont jamais envoyées à des APIs tierces non nécessaires. Nous pouvons également déployer des modèles IA on-premise pour les cas où la confidentialité des données est critique.",
      },
      {
        q: "Peut-on automatiser des processus spécifiques à notre secteur ?",
        a: "Absolument. Nous avons automatisé des processus dans l'e-commerce, l'immobilier, les services B2B, la restauration et les cabinets de conseil. Chaque secteur a ses spécificités — nous les prenons en compte pour créer des automatisations vraiment adaptées.",
      },
      {
        q: "Quelle est la différence entre n8n et Make (Integromat) ?",
        a: "n8n est open-source et peut être hébergé sur vos propres serveurs (idéal pour les données sensibles), avec des coûts prévisibles. Make est une solution SaaS cloud plus accessible pour les équipes non-techniques, avec un catalogue d'intégrations très large. Nous recommandons n8n pour les entreprises qui ont des contraintes RGPD strictes.",
      },
      {
        q: "Combien d'heures peut-on économiser avec des automatisations IA ?",
        a: "Nos clients économisent en moyenne 15 à 30 heures de travail manuel par semaine dès le premier mois, selon les processus automatisés. L'automatisation des réponses emails, de la gestion des leads et de la génération de rapports représente souvent les gains les plus rapides.",
      },
      {
        q: "Les automatisations fonctionnent-elles si on change d'outils métier ?",
        a: "Oui, elles sont conçues pour être adaptables. Si vous changez de CRM ou d'outil de communication, nous mettons à jour les connecteurs correspondants. C'est pour cette raison que nous documentons toutes les automatisations et formons votre équipe à les comprendre.",
      },
    ],
    gradient: "from-fuchsia-500 to-pink-600",
    highlights: [
      "Audit des processus métier chronophages et calcul précis du temps économisable",
      "Workflows n8n ou Make configurés, documentés et maintenables sans compétences techniques",
      "Intégration des APIs IA (OpenAI, Claude, Mistral) dans vos automatisations métier",
      "Connexion à vos outils existants — CRM, email, Slack, Google Sheets, Notion",
      "Génération automatique de contenu (fiches produit, emails, rapports, réponses clients)",
      "Traitement intelligent des formulaires entrants et des emails selon leur contenu",
      "Synchronisation automatique entre vos bases de données et vos outils",
      "Monitoring des automatisations avec alertes email en cas d'erreur ou d'anomalie",
      "Formation de votre équipe à la gestion et à la modification des workflows",
      "Documentation technique complète de chaque automatisation livrée",
    ],
    steps: [
      { num: "01", title: "Audit processus", duration: "Jours 1-2 — Cartographie", desc: "Cartographie des tâches répétitives, quantification du temps perdu et priorisation du ROI." },
      { num: "02", title: "Conception", duration: "Jours 3-5 — Architecture", desc: "Architecture des automatisations et choix des outils adaptés (n8n, Make, scripts Python)." },
      { num: "03", title: "Développement", duration: "Semaines 2-3 — Création", desc: "Construction des workflows, intégration des APIs IA et connexion à vos outils existants." },
      { num: "04", title: "Tests & validation", duration: "Semaine 3 — Validation", desc: "Tests en conditions réelles avec des données de production contrôlées." },
      { num: "05", title: "Formation & livraison", duration: "Semaine 4 — Go live", desc: "Formation à la gestion des workflows, documentation complète et mise en production." },
    ],
    targetProfiles: [
      "PME dont les équipes passent plus de 5 heures par semaine sur des tâches manuelles sans valeur ajoutée",
      "E-commerces qui gèrent manuellement des centaines de fiches produit, commandes ou réponses clients",
      "Cabinets de conseil et agences qui veulent automatiser reportings, propositions et onboarding clients",
      "Fondateurs solos qui veulent faire travailler l'IA pour eux afin de scaler sans recruter immédiatement",
    ],
  },
  {
    slug: "integration-api-ia",
    name: "Intégration API IA",
    shortDesc: "Intégrez GPT-4, Claude ou Mistral dans votre produit pour des fonctionnalités IA sur-mesure.",
    metaTitle: "Intégration API IA GPT-4 & Claude dans votre site",
    metaDescription: "Kama Agency intègre les APIs IA (OpenAI GPT-4, Claude, Mistral) dans vos applications web. Génération de contenu, analyse de données, recommandations personnalisées.",
    intro: "Les grandes entreprises intègrent l'IA dans leurs produits et prennent une longueur d'avance considérable. Mais accéder aux APIs d'OpenAI, d'Anthropic ou de Mistral et les intégrer correctement dans une application web nécessite une expertise technique pointue. Chez Kama Agency, nous maîtrisons ces APIs et nous les intégrons dans vos produits existants ou vos nouveaux projets pour créer des fonctionnalités IA différenciantes.",
    sections: [
      {
        h2: "Quelles fonctionnalités IA peut-on intégrer dans votre produit ?",
        body: "Les possibilités sont vastes. Génération de contenu : descriptions produit, articles de blog, emails marketing. Analyse et extraction : résumé de documents, extraction d'informations structurées depuis des PDFs. Personnalisation : recommandations basées sur le comportement utilisateur, réponses contextuelles. Traitement d'images : analyse de photos, génération d'images via DALL-E ou Stable Diffusion. Reconnaissance vocale : transcription et analyse de réunions ou appels.",
      },
      {
        h2: "Notre expertise des modèles du marché",
        body: "Nous travaillons avec tous les grands modèles : GPT-4o et GPT-4 Turbo d'OpenAI pour les tâches de compréhension et génération complexes, Claude 3.5 Sonnet et Opus d'Anthropic pour les analyses longues et le code, Mistral Large pour les cas nécessitant un hébergement européen, et les modèles open-source comme Llama pour les déploiements on-premise. Chaque modèle a ses forces — nous choisissons le bon pour chaque tâche.",
      },
      {
        h2: "Gestion des coûts et optimisation des prompts",
        body: "Les APIs IA peuvent devenir coûteuses si elles sont mal utilisées. Nous optimisons chaque appel API : caching intelligent des réponses similaires, chunking optimal des documents, sélection du modèle le moins coûteux pour chaque tâche, et monitoring des coûts en temps réel. Nos intégrations sont conçues pour être économiquement viables à grande échelle.",
      },
      {
        h2: "Sécurité, fiabilité et gestion des erreurs",
        body: "Les APIs IA peuvent être imprévisibles : temps de réponse variables, erreurs aléatoires, hallucinations. Nous implémentons des mécanismes de retry automatique, des fallbacks en cas d'indisponibilité, de la validation des outputs avant affichage et des guardrails pour éviter les réponses inappropriées. Vos utilisateurs ne voient jamais les coulisses techniques — juste une fonctionnalité qui marche.",
      },
    ],
    faq: [
      {
        q: "Combien coûte l'utilisation des APIs IA en production ?",
        a: "Les coûts dépendent du volume d'utilisation. À titre indicatif, GPT-4o coûte environ 0,005$ par 1 000 tokens en input. Pour un chatbot traitant 1 000 conversations par mois, le coût API est généralement entre 20 et 100€. Nous vous fournissons une estimation précise basée sur vos volumes projetés.",
      },
      {
        q: "Peut-on entraîner un modèle sur nos données propriétaires ?",
        a: "Oui, via deux approches : le fine-tuning (entraîner le modèle sur vos données pour l'adapter à votre domaine) ou le RAG (Retrieval Augmented Generation, qui donne accès à votre base de connaissance en temps réel). Le RAG est souvent la meilleure option car moins coûteux et plus facile à mettre à jour.",
      },
      {
        q: "Nos données sont-elles utilisées pour entraîner les modèles d'OpenAI ou Anthropic ?",
        a: "Non, si vous utilisez l'API (et non les interfaces web). Les données envoyées via l'API ne sont pas utilisées pour entraîner les modèles par défaut. Nous configurons vos appels API pour respecter les accords de confidentialité d'OpenAI et Anthropic.",
      },
      {
        q: "Quelle est la différence entre GPT-4 et Claude pour les intégrations professionnelles ?",
        a: "GPT-4o (OpenAI) excelle en génération créative, code et multimodal (images + texte). Claude 3.5 Sonnet (Anthropic) est supérieur pour l'analyse de longs documents, le suivi d'instructions complexes et la sécurité. Nous choisissons le modèle le plus adapté à votre cas d'usage et combinons les deux si nécessaire.",
      },
      {
        q: "Peut-on intégrer une API IA sur un site WordPress ou Shopify existant ?",
        a: "Oui, via des plugins personnalisés (WordPress) ou des apps Shopify sur-mesure, nous connectons les APIs IA à n'importe quelle plateforme. Génération de descriptions produit, réponses automatiques aux commentaires, suggestions personnalisées — tout est possible sans refonte complète du site.",
      },
      {
        q: "Comment calculer le ROI d'une intégration IA dans notre produit ?",
        a: "Nous définissons avec vous des KPIs avant le lancement : heures économisées, coût par lead, taux de conversion, volume de contenu généré. Après 30 jours de production, nous comparons les métriques avant/après. La plupart de nos intégrations IA atteignent le ROI en moins de 3 mois.",
      },
    ],
    gradient: "from-cyan-500 to-violet-600",
    highlights: [
      "Intégration des APIs OpenAI (GPT-4o), Anthropic (Claude) ou Mistral selon votre cas d'usage",
      "RAG (Retrieval Augmented Generation) sur votre base de connaissance propriétaire",
      "Streaming des réponses IA en temps réel pour une UX fluide sans attente",
      "Caching intelligent des réponses similaires pour réduire les coûts API de 40 à 70%",
      "Validation et sanitisation des outputs IA avant affichage aux utilisateurs finaux",
      "Guardrails et filtres de contenu pour éviter les réponses inappropriées",
      "Monitoring des coûts API en temps réel avec alertes de dépassement de budget",
      "Fine-tuning de modèle disponible pour les cas d'usage spécialisés et répétitifs",
      "Infrastructure serverless scalable pour absorber les pics de charge sans intervention",
      "Documentation complète de l'API et des endpoints pour votre équipe technique",
    ],
    steps: [
      { num: "01", title: "Analyse des besoins", duration: "Jour 1 — Cadrage", desc: "Définition des fonctionnalités IA, choix du modèle optimal et estimation des coûts mensuels." },
      { num: "02", title: "Architecture", duration: "Jours 2-3 — Conception", desc: "Conception du pipeline IA (prompts, RAG, streaming) et de la gestion des erreurs et fallbacks." },
      { num: "03", title: "Développement", duration: "Semaines 2-3 — Intégration", desc: "Intégration de l'API, développement du RAG si nécessaire et interface utilisateur." },
      { num: "04", title: "Optimisation", duration: "Semaine 4 — Affinage", desc: "Caching, réduction des coûts, tests de charge et ajustement des prompts pour la précision." },
      { num: "05", title: "Déploiement & monitoring", duration: "Semaines 4-5 — Live", desc: "Mise en production, configuration du monitoring des coûts API et support post-lancement." },
    ],
    targetProfiles: [
      "SaaS qui veulent ajouter des fonctionnalités IA (génération, analyse, suggestions) à leur produit existant",
      "Entreprises qui ont une base de documents propriétaires à rendre interrogeable par leur équipe via RAG",
      "E-commerces qui veulent automatiser la génération de descriptions produit et de contenu à grande échelle",
      "Startups qui construisent un produit IA-first et ont besoin d'une intégration robuste et économiquement viable",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

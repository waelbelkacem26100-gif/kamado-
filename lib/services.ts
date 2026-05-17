export interface ServiceSection {
  h2: string;
  body: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
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
}

export const services: Service[] = [
  {
    slug: "creation-site-vitrine",
    name: "Création de site vitrine",
    shortDesc: "Un site professionnel qui transforme vos visiteurs en clients dès la première visite.",
    metaTitle: "Création site vitrine professionnel — Kama Agency",
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
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    slug: "boutique-shopify",
    name: "Boutique Shopify",
    shortDesc: "Une boutique Shopify haute performance qui maximise votre chiffre d'affaires en ligne.",
    metaTitle: "Création boutique Shopify sur-mesure — Kama Agency",
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
    ],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    slug: "refonte-de-site",
    name: "Refonte de site",
    shortDesc: "Modernisez votre site existant pour booster vos performances et vos conversions.",
    metaTitle: "Refonte de site web professionnel — Kama Agency",
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
    ],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    slug: "dropshipping",
    name: "Dropshipping",
    shortDesc: "Une boutique dropshipping clé en main, prête à générer des revenus sans gestion de stock.",
    metaTitle: "Création boutique dropshipping clé en main — Kama Agency",
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
    ],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    slug: "webdesign-sur-mesure",
    name: "Webdesign sur-mesure",
    shortDesc: "Des designs uniques qui marquent les esprits et renforcent l'identité de votre marque.",
    metaTitle: "Webdesign sur-mesure premium — Kama Agency",
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
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    slug: "ux-ui-design",
    name: "UX/UI Design",
    shortDesc: "Des interfaces intuitives qui améliorent l'expérience utilisateur et boostent les conversions.",
    metaTitle: "UX/UI Design professionnel — Kama Agency",
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
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    slug: "identite-visuelle",
    name: "Identité visuelle",
    shortDesc: "Une charte graphique complète pour une marque cohérente, mémorable et professionnelle.",
    metaTitle: "Création identité visuelle marque — Kama Agency",
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
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    slug: "referencement-seo",
    name: "Référencement SEO",
    shortDesc: "Dominez les premiers résultats Google et générez un trafic qualifié sur le long terme.",
    metaTitle: "Référencement SEO naturel — Kama Agency",
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
    ],
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    slug: "optimisation-core-web-vitals",
    name: "Optimisation Core Web Vitals",
    shortDesc: "Performances techniques optimales pour un meilleur classement Google et une UX excellente.",
    metaTitle: "Optimisation Core Web Vitals — Kama Agency",
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
    ],
    gradient: "from-lime-500 to-green-600",
  },
  {
    slug: "analytics-et-suivi",
    name: "Analytics & Suivi",
    shortDesc: "Des tableaux de bord clairs pour prendre des décisions basées sur les données réelles.",
    metaTitle: "Analytics et suivi web professionnel — Kama Agency",
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
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    slug: "saas-sur-mesure",
    name: "SaaS sur-mesure",
    shortDesc: "Votre application SaaS de A à Z, de l'idée à la production avec les meilleures technologies.",
    metaTitle: "Développement SaaS sur-mesure — Kama Agency",
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
    ],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    slug: "shopify-liquid",
    name: "Shopify Liquid",
    shortDesc: "Développement Shopify Liquid avancé pour personaliser votre boutique au-delà des limites des thèmes.",
    metaTitle: "Développement Shopify Liquid avancé — Kama Agency",
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
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    slug: "wordpress",
    name: "WordPress",
    shortDesc: "Sites WordPress sur-mesure, performants et faciles à gérer sans connaissances techniques.",
    metaTitle: "Création site WordPress sur-mesure — Kama Agency",
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
    ],
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    slug: "nextjs-et-react",
    name: "Next.js & React",
    shortDesc: "Applications web ultra-rapides avec les technologies les plus modernes du marché.",
    metaTitle: "Développement Next.js & React sur-mesure — Kama Agency",
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
    ],
    gradient: "from-slate-500 to-gray-700",
  },
  {
    slug: "chatbot-ia",
    name: "Chatbot & IA conversationnelle",
    shortDesc: "Un assistant IA sur votre site qui répond, qualifie et convertit vos visiteurs 24h/24.",
    metaTitle: "Chatbot IA pour site web — Kama Agency",
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
    ],
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    slug: "automatisation-ia",
    name: "Automatisation IA & Workflows",
    shortDesc: "Automatisez vos tâches répétitives avec l'IA et libérez votre équipe pour ce qui compte vraiment.",
    metaTitle: "Automatisation IA et workflows — Kama Agency",
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
    ],
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    slug: "integration-api-ia",
    name: "Intégration API IA",
    shortDesc: "Intégrez GPT-4, Claude ou Mistral dans votre produit pour des fonctionnalités IA sur-mesure.",
    metaTitle: "Intégration API IA GPT Claude dans votre site — Kama Agency",
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
    ],
    gradient: "from-cyan-500 to-violet-600",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

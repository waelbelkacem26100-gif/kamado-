# Monitoring SEO — kamaagency.com

## Outils à configurer (1 seule fois)

| Outil | Usage | Fréquence |
|-------|-------|-----------|
| Google Search Console | Positions, clics, indexation, erreurs | Hebdo |
| Google Analytics 4 | Trafic, conversions, comportement | Hebdo |
| Ahrefs Webmaster Tools | Backlinks, Core Web Vitals | Mensuel |
| Google PageSpeed Insights | LCP, INP, CLS par page | Mensuel |
| Screaming Frog (gratuit, 500 URLs) | Audit technique complet | Trimestriel |

---

## Checklist hebdomadaire (15 min)

### Google Search Console
- [ ] Onglet Performances > comparer avec la semaine précédente
  - Clics totaux en hausse ?
  - CTR moyen en hausse ?
  - Nouvelles requêtes apparues ?
- [ ] Onglet Couverture > nouvelles erreurs d'indexation ?
- [ ] Onglet Expérience sur la page > nouvelles pages "Médiocre" ?

### Google Analytics 4
- [ ] Sessions organiques vs semaine précédente
- [ ] Pages les plus visitées cette semaine
- [ ] Taux de conversion formulaire contact (objectif : > 2%)

---

## Checklist mensuelle (1h)

### Positions et trafic
- [ ] Export des 50 requêtes principales depuis Search Console (filtre : > 10 impressions)
- [ ] Identifier les requêtes en positions 4-10 (opportunités de monter page 1)
- [ ] Identifier les pages qui ont perdu des clics (contenu à mettre à jour)

### Tableau de bord positions — requêtes cibles à suivre

| Requête | Objectif | Position actuelle | Évolution |
|---------|---------|------------------|-----------|
| agence web Romans-sur-Isère | Top 3 | - | - |
| agence web Drôme | Top 3 | - | - |
| création site internet Valence | Top 5 | - | - |
| agence SEO France | Top 10 | - | - |
| créer site vitrine professionnel | Top 10 | - | - |
| prix site web 2026 | Top 10 | - | - |
| Shopify vs WooCommerce | Top 20 | - | - |
| Core Web Vitals guide | Top 20 | - | - |
| création boutique en ligne guide | Top 20 | - | - |
| audit SEO checklist | Top 20 | - | - |

### Backlinks
- [ ] Vérifier nouveaux backlinks dans Search Console > Liens > Liens externes récents
- [ ] Vérifier les backlinks perdus (pages supprimées chez des sites tiers)
- [ ] Avancement plan netlinking (doc backlinks-strategy.md)

### Contenu
- [ ] Articles de blog publiés ce mois : objectif 2 minimum
- [ ] Mettre à jour la date `dateModified` dans lib/blog.ts pour les articles mis à jour
- [ ] Vérifier que les nouveaux articles sont bien indexés dans Search Console

### Technique
- [ ] PageSpeed Insights sur les 5 pages principales (homepage, blog, services, contact, tarifs)
- [ ] Vérifier les Core Web Vitals mobiles dans Search Console > Expérience sur la page
- [ ] Tester le sitemap.xml : kamaagency.com/sitemap.xml — toutes les pages présentes ?

---

## Checklist trimestrielle (3h)

- [ ] Audit Screaming Frog complet : erreurs 404, balises manquantes, pages orphelines
- [ ] Mise à jour des articles publiés il y a plus de 6 mois avec données 2026
- [ ] Analyse concurrentielle : vérifier les positions des 3 concurrents principaux sur nos mots-clés cibles
- [ ] Revue de la stratégie de backlinks : objectifs atteints ? ajuster le plan
- [ ] Test de toutes les pages dans Rich Results Test (Schema.org valide ?)
- [ ] Vérification des URLs en erreur dans robots.ts / sitemap.ts
- [ ] Mise à jour du document backlinks-strategy.md avec les résultats obtenus

---

## Signaux d'alerte à traiter en urgence (< 48h)

- Chute du trafic organique > 20% en 7 jours → vérifier Search Console pour pénalité ou erreur technique
- Apparition de nombreux 404 → crawler avec Screaming Frog
- Score Core Web Vitals "Médiocre" sur la homepage → audit PageSpeed immédiat
- Pénalité manuelle Google dans Search Console → traiter en priorité absolue
- Erreur dans le fichier robots.ts qui bloque l'indexation → vérifier robots.txt sur kamaagency.com/robots.txt

---

## Objectifs SEO à 6 mois (depuis lancement de la stratégie)

| Métrique | Baseline | Objectif 3 mois | Objectif 6 mois |
|---------|---------|----------------|----------------|
| Trafic organique mensuel | - | +50% | +150% |
| Pages indexées | - | 30+ | 50+ |
| Domaines référents | - | 20+ | 50+ |
| Domain Rating (Ahrefs) | - | 15+ | 25+ |
| Requêtes top 10 | - | 10+ | 30+ |
| Leads via organic | - | +30% | +100% |

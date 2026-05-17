"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const faqs = [
  {
    q: "Combien coûte la création d'un site internet en France ?",
    a: "Nos projets démarrent à partir de 1 000 € pour un site vitrine professionnel et peuvent aller jusqu'à 50 000 € pour un SaaS sur-mesure complexe. Une boutique Shopify se situe généralement entre 2 000 € et 8 000 €. Chaque projet est devisé précisément après un appel de découverte gratuit — pas de forfaits génériques, un prix juste basé sur vos vrais besoins.",
  },
  {
    q: "Pourquoi choisir Kama Agency plutôt qu'une autre agence web en France ?",
    a: "Trois raisons principales : la vitesse (livraison 3× plus rapide que la moyenne des agences), la performance technique (sites optimisés pour les Core Web Vitals de Google — score 90+ sur PageSpeed), et un focus obsessionnel sur la conversion. Nous ne créons pas des sites beaux à regarder — nous créons des sites qui vendent.",
  },
  {
    q: "Combien de temps faut-il pour créer un site web professionnel ?",
    a: "Un site vitrine est livré en 3 à 5 semaines. Une boutique Shopify en 4 à 8 semaines. Un SaaS sur-mesure en 8 à 16 semaines selon la complexité. Nous respectons les délais convenus — c'est une priorité absolue. Vous recevez des mises à jour hebdomadaires tout au long du projet.",
  },
  {
    q: "Créez-vous des sites web à Paris, Lyon, Marseille et dans toute la France ?",
    a: "Oui, 100% de nos projets sont menés à distance via des outils collaboratifs (Figma, Notion, Loom). Nous intervenons partout en France : Paris, Lyon, Marseille, Bordeaux, Toulouse, Lille, Nantes, Strasbourg, et dans toutes les régions dont la Drôme et la région Auvergne-Rhône-Alpes. La distance n'a aucun impact sur la qualité du résultat.",
  },
  {
    q: "Combien de temps faut-il pour être premier sur Google ?",
    a: "Le référencement naturel (SEO) prend généralement 3 à 6 mois pour obtenir des premières positions sur des mots-clés locaux ou de niche, et 6 à 12 mois sur des requêtes concurrentielles nationales. Nous intégrons le SEO technique dès la conception du site : structure de données, vitesse de chargement, balises méta et maillage interne optimisés.",
  },
  {
    q: "Puis-je modifier mon site moi-même après la livraison ?",
    a: "Absolument. Nous configurons un CMS (système de gestion de contenu) adapté à votre profil technique : Sanity, Notion, ou une interface d'administration sur-mesure. Vous pouvez modifier vos textes, images et actualités sans aucune compétence en code. Une formation complète est incluse à la livraison.",
  },
  {
    q: "Proposez-vous un suivi et une maintenance après la livraison ?",
    a: "Oui. Nos forfaits de maintenance mensuelle incluent : mises à jour de sécurité, sauvegardes automatiques quotidiennes, monitoring des performances 24/7, et un quota d'heures pour les petites évolutions. Nous restons disponibles par email et visio — pas de ticket support impersonnel.",
  },
  {
    q: "Intégrez-vous l'intelligence artificielle dans les sites web ?",
    a: "Oui, c'est l'une de nos spécialités. Nous intégrons des chatbots IA personnalisés, des systèmes de recommandations, des automations de contenu et des assistants virtuels en utilisant les APIs OpenAI (GPT-4o) et Anthropic (Claude). L'IA permet d'améliorer l'expérience utilisateur et d'automatiser des tâches chronophages.",
  },
  {
    q: "Quelle différence entre un site vitrine, une boutique e-commerce et un SaaS ?",
    a: "Un site vitrine présente votre activité et génère des prospects (idéal pour artisans, professions libérales, PME). Une boutique e-commerce (Shopify ou sur-mesure) permet de vendre des produits en ligne directement. Un SaaS est une application web accessible par abonnement, comme un logiciel en ligne. Nous développons les trois.",
  },
  {
    q: "Le SEO est-il inclus dans la création du site ?",
    a: "Le SEO technique est systématiquement intégré : vitesse de chargement optimisée (Core Web Vitals), balisage sémantique HTML5, métadonnées Open Graph, sitemap XML, robots.txt, données structurées Schema.org et URLs propres. Le SEO éditorial (création de contenu et netlinking) fait l'objet d'une prestation dédiée.",
  },
  {
    q: "Quelle est votre politique en cas d'insatisfaction ?",
    a: "Nous travaillons de façon itérative avec des validations à chaque étape — vous ne découvrez jamais le résultat final sans l'avoir vu évoluer. Si quelque chose ne vous convient pas dans le scope initial validé, nous le corrigeons sans frais supplémentaires. Votre satisfaction est notre priorité absolue.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Vos questions, nos réponses
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Tout ce que vous vouliez savoir avant de démarrer un projet avec nous.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i ? "border-[var(--accent)]/40 bg-[var(--surface)]" : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`text-sm font-semibold transition-colors ${open === i ? "text-[var(--accent)]" : "text-[var(--fg)]"}`}>
                  {faq.q}
                </span>
                <motion.svg
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 transition-colors ${open === i ? "text-[var(--accent)]" : "text-[var(--fg-muted)]"}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-[var(--border)] mb-4" />
                      <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[var(--fg-muted)]">
            Une autre question ?{" "}
            <Link href="/#contact" className="text-[var(--accent)] hover:underline font-medium">
              Écrivez-nous directement
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const faqs = [
  {
    q: "Combien coûte la création d'un site internet ?",
    a: "Nos projets démarrent à partir de 1 000 € pour un site vitrine et peuvent aller jusqu'à 50 000 € pour un SaaS sur-mesure. Chaque projet est devisé précisément après un appel de découverte gratuit — pas de forfaits génériques.",
  },
  {
    q: "Combien de temps faut-il pour livrer mon projet ?",
    a: "Un site vitrine est livré en 3 à 5 semaines. Une boutique Shopify en 4 à 8 semaines. Un SaaS sur-mesure en 8 à 16 semaines. Nous respectons les délais convenus et vous envoyons des mises à jour hebdomadaires.",
  },
  {
    q: "Puis-je modifier mon site moi-même après la livraison ?",
    a: "Oui. Nous intégrons un CMS adapté à votre profil pour modifier textes et images sans aucune compétence technique. Une formation complète est incluse à la livraison.",
  },
  {
    q: "Le SEO est-il inclus dans la création du site ?",
    a: "Le SEO technique est systématiquement intégré : Core Web Vitals, balisage sémantique, métadonnées, sitemap et données structurées Schema.org. Le SEO éditorial fait l'objet d'une prestation dédiée.",
  },
  {
    q: "Travaillez-vous avec des clients partout en France ?",
    a: "Oui, 100% de nos projets sont menés à distance. Nous avons des clients à Paris, Lyon, Bordeaux, Marseille et dans toutes les régions françaises. La distance n'a aucun impact sur la qualité.",
  },
  {
    q: "Proposez-vous de la maintenance après la livraison ?",
    a: "Oui. Nous proposons des forfaits de maintenance mensuelle : mises à jour de sécurité, sauvegardes automatiques, monitoring des performances et un quota d'heures pour les évolutions. Devis sur demande selon votre projet.",
  },
  {
    q: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
    a: "Nous travaillons en itérations courtes avec votre validation à chaque étape. Des révisions sont incluses dans chaque prestation. Notre objectif est votre satisfaction totale — et nos 100% de clients satisfaits en attestent.",
  },
  {
    q: "Utilisez-vous des templates ou tout est créé sur-mesure ?",
    a: "Tout est créé sur-mesure. Nous ne revendons jamais de templates. Chaque ligne de design et de code est conçue spécifiquement pour votre projet, votre marque et vos objectifs business.",
  },
  {
    q: "Intégrez-vous l'intelligence artificielle dans les projets web ?",
    a: "Oui, c'est l'une de nos spécialités. Chatbots IA, automatisations, recommandations personnalisées, génération de contenu — nous intégrons les APIs OpenAI et Anthropic Claude selon vos besoins.",
  },
  {
    q: "Comment se déroule le premier contact avec Kama Agency ?",
    a: "Envoyez-nous votre projet via le formulaire de contact. Nous vous répondons sous 48h avec un appel de découverte de 30 minutes pour cerner vos besoins, puis nous vous envoyons un devis détaillé et un planning. Aucun engagement à cette étape.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-6">
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
            <Link href="/contact/" className="text-[var(--accent)] hover:underline font-medium">
              Écrivez-nous directement
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

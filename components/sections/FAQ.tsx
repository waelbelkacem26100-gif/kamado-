"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";

const faqs = [
  {
    q: "Combien coûte la création d'un site web avec Nexivo ?",
    a: "Nos projets démarrent à partir de 1 000 € pour un site vitrine et peuvent aller jusqu'à 50 000 € pour un SaaS sur-mesure complexe. Chaque projet est devisé précisément après un appel de découverte gratuit — pas de forfaits génériques. Nous préférons vous donner un prix juste basé sur vos vrais besoins.",
  },
  {
    q: "Combien de temps faut-il pour livrer mon projet ?",
    a: "Un site vitrine est livré en 3 à 5 semaines. Une boutique Shopify en 4 à 8 semaines. Un SaaS sur-mesure en 8 à 16 semaines selon la complexité. Nous respectons les délais convenus — c'est une priorité absolue chez Nexivo. Vous recevez des updates hebdomadaires tout au long du projet.",
  },
  {
    q: "Travaillez-vous avec des clients partout en France ?",
    a: "Oui, 100% de nos projets sont menés à distance via des outils collaboratifs (Figma, Notion, Loom). Nous avons des clients à Paris, Lyon, Bordeaux, Marseille et dans toutes les régions. La distance n'a aucun impact sur la qualité de notre collaboration — nos processus sont rodés pour ça.",
  },
  {
    q: "Puis-je modifier mon site moi-même après la livraison ?",
    a: "Absolument. Nous configurons un CMS (système de gestion de contenu) adapté qui vous permet de modifier textes, images et actualités sans aucune compétence technique. Nous vous formons également à son utilisation. L'objectif : que vous soyez autonome sur votre contenu.",
  },
  {
    q: "Proposez-vous un suivi et une maintenance après la livraison ?",
    a: "Oui. Nous proposons des forfaits de maintenance mensuelle qui incluent les mises à jour de sécurité, les sauvegardes automatiques, le monitoring des performances et un quota d'heures pour les petites évolutions. Nous restons disponibles par email et visio pour toute question.",
  },
  {
    q: "Intégrez-vous l'intelligence artificielle dans les projets web ?",
    a: "Oui, c'est l'une de nos spécialités. Nous intégrons des chatbots IA, des systèmes de génération de contenu automatique, des recommandations personnalisées et des automatisations de workflows en utilisant les APIs d'OpenAI (GPT-4) et d'Anthropic (Claude). L'IA est un levier puissant pour gagner du temps et améliorer l'expérience utilisateur.",
  },
  {
    q: "Quelle est votre politique en cas d'insatisfaction ?",
    a: "Nous travaillons de façon itérative avec des validations à chaque étape — vous ne découvrez jamais le résultat final sans l'avoir vu évoluer. Si malgré tout quelque chose ne vous convient pas, nous le corrigeons sans frais supplémentaires tant que cela entre dans le scope initial validé. Votre satisfaction est notre priorité.",
  },
  {
    q: "Êtes-vous spécialisés dans un secteur d'activité particulier ?",
    a: "Nous travaillons avec des entrepreneurs et TPE/PME de tous secteurs : e-commerce, services B2B, SaaS, restauration, immobilier, santé, éducation... Notre expertise est dans la technologie web et la conversion, pas dans un secteur spécifique. Chaque projet est l'occasion d'apprendre votre marché.",
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

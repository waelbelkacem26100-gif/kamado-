"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  societe: string;
  poste: string;
  type: string;
  budget: string;
  delai: string;
  source: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  email?: string;
  telephone?: string;
  message?: string;
  rgpd?: string;
}

const typeOptions = [
  "Site vitrine professionnel",
  "Boutique e-commerce Shopify",
  "Application SaaS sur-mesure",
  "Refonte de site existant",
  "WordPress sur-mesure",
  "Intégration IA / Chatbot",
  "Référencement SEO",
  "Audit & Conseil web",
  "Autre",
];

const budgetOptions = [
  "< 1 000 €",
  "1 000 – 3 000 €",
  "3 000 – 7 000 €",
  "7 000 – 15 000 €",
  "15 000 – 30 000 €",
  "30 000 €+",
  "Je ne sais pas encore",
];

const delaiOptions = [
  "Dès que possible (urgent)",
  "Dans 1 mois",
  "Dans 2 à 3 mois",
  "Dans 4 à 6 mois",
  "Pas d'urgence",
];

const sourceOptions = [
  "Google",
  "LinkedIn",
  "Recommandation d'un client",
  "Réseaux sociaux",
  "Annuaire / Comparateur",
  "Salon ou événement professionnel",
  "Autre",
];

const trustItems = [
  { icon: "🔒", text: "Données sécurisées SSL" },
  { icon: "⚡", text: "Réponse sous 48h" },
  { icon: "🎁", text: "Devis 100% gratuit" },
  { icon: "⭐", text: "5/5 — 12 avis clients" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    prenom: "", nom: "", email: "", telephone: "", societe: "", poste: "",
    type: "", budget: "", delai: "", source: "", message: "",
  });
  const [rgpd, setRgpd] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.nom.trim()) e.nom = "Votre nom est requis.";
    if (!form.email.trim()) {
      e.email = "Votre email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Format d'email invalide.";
    }
    if (form.telephone && !/^(\+33|0)[1-9](\d{2}){4}$/.test(form.telephone.replace(/[\s\-.]/g, ""))) {
      e.telephone = "Format de téléphone invalide (ex: 06 12 34 56 78).";
    }
    if (!form.message.trim() || form.message.length < 50) {
      e.message = "Décrivez votre projet en au moins 50 caractères.";
    }
    if (!rgpd) e.rgpd = "Veuillez accepter la politique de confidentialité.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSendError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) setSubmitted(true);
      else setSendError(true);
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  const base = "w-full px-4 py-3 rounded-xl border bg-[var(--surface)] text-[var(--fg)] text-sm placeholder:text-[var(--fg-muted)] outline-none transition-all duration-200 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]";
  const inputClass = (field: keyof FormErrors) =>
    `${base} ${errors[field] ? "border-red-500/60" : "border-[var(--border)]"}`;
  const plain = `${base} border-[var(--border)]`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Contact
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-section font-bold text-[var(--fg)]">
            Démarrons votre projet
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Remplissez le formulaire — on vous répond sous 48h avec un devis détaillé et une proposition concrète.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {trustItems.map((item) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-1.5 text-xs text-[var(--fg-muted)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1.5 rounded-full"
              >
                <span>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-20 h-20 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/40 flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-10 h-10 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-3">Message envoyé !</h3>
              <p className="text-[var(--fg-muted)] mb-1">
                Merci <strong className="text-[var(--fg)]">{form.prenom || form.nom}</strong>, votre demande a bien été reçue.
              </p>
              <p className="text-[var(--fg-muted)]">Notre équipe vous contacte dans les 48h. À très vite !</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">

              {/* ─── Section 1 : Coordonnées ─── */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-5">
                  01 — Vos coordonnées
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">Prénom <span className="text-[var(--fg-muted)] font-normal">(optionnel)</span></label>
                    <input
                      type="text"
                      placeholder="Jean"
                      value={form.prenom}
                      onChange={(e) => handleChange("prenom", e.target.value)}
                      className={plain}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">Nom *</label>
                    <input
                      type="text"
                      placeholder="Dupont"
                      value={form.nom}
                      onChange={(e) => handleChange("nom", e.target.value)}
                      className={inputClass("nom")}
                    />
                    {errors.nom && <p className="text-xs text-red-400 mt-1.5">{errors.nom}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">Email professionnel *</label>
                    <input
                      type="email"
                      placeholder="jean@entreprise.fr"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">
                      Téléphone <span className="text-[var(--fg-muted)] font-normal">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={form.telephone}
                      onChange={(e) => handleChange("telephone", e.target.value)}
                      className={inputClass("telephone")}
                    />
                    {errors.telephone && <p className="text-xs text-red-400 mt-1.5">{errors.telephone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">
                      Société / Entreprise <span className="text-[var(--fg-muted)] font-normal">(optionnel)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Mon Entreprise SAS"
                      value={form.societe}
                      onChange={(e) => handleChange("societe", e.target.value)}
                      className={plain}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">
                      Votre poste <span className="text-[var(--fg-muted)] font-normal">(optionnel)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Dirigeant, Responsable marketing..."
                      value={form.poste}
                      onChange={(e) => handleChange("poste", e.target.value)}
                      className={plain}
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-[var(--border)]" />

              {/* ─── Section 2 : Projet ─── */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-5">
                  02 — Votre projet
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">Type de projet</label>
                    <select
                      value={form.type}
                      onChange={(e) => handleChange("type", e.target.value)}
                      className={`${plain} ${!form.type ? "text-[var(--fg-muted)]" : ""}`}
                    >
                      <option value="" disabled>Sélectionner...</option>
                      {typeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">Budget estimé</label>
                    <select
                      value={form.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      className={`${plain} ${!form.budget ? "text-[var(--fg-muted)]" : ""}`}
                    >
                      <option value="" disabled>Sélectionner...</option>
                      {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">Délai souhaité</label>
                    <select
                      value={form.delai}
                      onChange={(e) => handleChange("delai", e.target.value)}
                      className={`${plain} ${!form.delai ? "text-[var(--fg-muted)]" : ""}`}
                    >
                      <option value="" disabled>Sélectionner...</option>
                      {delaiOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">Comment nous avez-vous trouvé ?</label>
                    <select
                      value={form.source}
                      onChange={(e) => handleChange("source", e.target.value)}
                      className={`${plain} ${!form.source ? "text-[var(--fg-muted)]" : ""}`}
                    >
                      <option value="" disabled>Sélectionner...</option>
                      {sourceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[var(--border)]" />

              {/* ─── Section 3 : Description ─── */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-5">
                  03 — Description du projet
                </p>
                <div>
                  <label className="block text-sm font-medium text-[var(--fg)] mb-2">Décrivez votre projet *</label>
                  <textarea
                    rows={6}
                    placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, audience cible, concurrents de référence, contraintes techniques ou graphiques particulières, avez-vous déjà un site existant ?..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                  <div className="flex items-center justify-between mt-1.5">
                    <p className="text-xs text-[var(--fg-muted)]">Plus vous êtes précis, plus notre réponse sera pertinente.</p>
                    <p className={`text-xs font-medium ${form.message.length >= 50 ? "text-green-400" : "text-[var(--fg-muted)]"}`}>
                      {form.message.length} / 50 min
                    </p>
                  </div>
                </div>
              </div>

              {/* ─── RGPD ─── */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={rgpd}
                      onChange={(e) => {
                        setRgpd(e.target.checked);
                        if (errors.rgpd) setErrors((prev) => ({ ...prev, rgpd: undefined }));
                      }}
                    />
                    <div
                      className={`w-4 h-4 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                        rgpd
                          ? "bg-[var(--accent)] border-[var(--accent)]"
                          : errors.rgpd
                          ? "border-red-500/60"
                          : "border-[var(--border)]"
                      }`}
                    >
                      {rgpd && (
                        <svg className="w-2.5 h-2.5 text-[#050508]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-[var(--fg-muted)] leading-relaxed">
                    J&apos;accepte que mes données personnelles soient utilisées pour traiter ma demande et me recontacter.
                    Vos informations ne seront jamais partagées à des tiers. Conformément au RGPD, vous pouvez demander
                    leur suppression à tout moment en nous contactant.
                  </span>
                </label>
                {errors.rgpd && <p className="text-xs text-red-400 mt-1.5">{errors.rgpd}</p>}
              </div>

              {sendError && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-sm text-red-400">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                  Erreur d&apos;envoi. Réessayez ou écrivez-nous directement par email.
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? {} : { scale: 1.04 }}
                  whileTap={loading ? {} : { scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] disabled:opacity-60 shadow-[0_0_30px_var(--accent-glow)]"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande de devis
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </motion.button>
                <p className="text-xs text-[var(--fg-muted)]">
                  Ou contactez-nous à{" "}
                  <a href={`mailto:${CONTACT.email}`} className="text-[var(--accent)] hover:underline">
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

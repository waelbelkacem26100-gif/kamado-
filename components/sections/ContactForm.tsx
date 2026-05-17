"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import { CONTACT, WEB3FORMS_KEY } from "@/lib/constants";

interface FormData {
  nom: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  email?: string;
  message?: string;
}

const typeOptions = ["Site Vitrine", "Boutique Shopify", "SaaS Sur-mesure", "Refonte de site", "Autre"];
const budgetOptions = ["< 1 000 €", "1 000 – 3 000 €", "3 000 – 7 000 €", "7 000 – 15 000 €", "15 000 €+"];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ nom: "", email: "", type: "", budget: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nom.trim()) newErrors.nom = "Votre nom est requis.";
    if (!form.email.trim()) {
      newErrors.email = "Votre email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format d'email invalide.";
    }
    if (!form.message.trim() || form.message.length < 20) {
      newErrors.message = "Décrivez votre projet en au moins 20 caractères.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.nom,
          email: form.email,
          subject: `Nouveau projet — ${form.type || "Contact"} | Kama Agency`,
          message: `Type de projet : ${form.type || "Non précisé"}\nBudget estimé : ${form.budget || "Non précisé"}\n\n${form.message}`,
          from_name: "Kama Agency Contact Form",
          replyto: form.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border bg-[var(--surface)] text-[var(--fg)] text-sm placeholder:text-[var(--fg-muted)] outline-none transition-all duration-200 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)] ${
      errors[field] ? "border-red-500/60" : "border-[var(--border)]"
    }`;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
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
            Un projet en tête ?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead mt-4 max-w-xl mx-auto">
            Décrivez votre projet, on vous répond sous 48h avec une proposition concrète.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/40 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-3">Message envoyé !</h3>
              <p className="text-[var(--fg-muted)]">On vous répond dans les 48h. À très vite.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium text-[var(--fg)] mb-2">Nom *</label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    value={form.nom}
                    onChange={(e) => handleChange("nom", e.target.value)}
                    className={inputClass("nom")}
                  />
                  {errors.nom && <p className="text-xs text-red-400 mt-1.5">{errors.nom}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[var(--fg)] mb-2">Email *</label>
                  <input
                    type="email"
                    placeholder="jean@exemple.fr"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass("email")}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                </div>

                {/* Type de projet */}
                <div>
                  <label className="block text-sm font-medium text-[var(--fg)] mb-2">Type de projet</label>
                  <select
                    value={form.type}
                    onChange={(e) => handleChange("type", e.target.value)}
                    className={`${inputClass("nom")} ${!form.type ? "text-[var(--fg-muted)]" : ""}`}
                  >
                    <option value="" disabled>Sélectionner...</option>
                    {typeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-[var(--fg)] mb-2">Budget estimé</label>
                  <select
                    value={form.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    className={`${inputClass("nom")} ${!form.budget ? "text-[var(--fg-muted)]" : ""}`}
                  >
                    <option value="" disabled>Sélectionner...</option>
                    {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[var(--fg)] mb-2">Votre projet *</label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre projet, vos objectifs, votre audience cible..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                <p className="text-xs text-[var(--fg-muted)] mt-1.5">{form.message.length} / 20 caractères minimum</p>
              </div>

              {sendError && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-sm text-red-400">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
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
                      Envoi...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </motion.button>
                <p className="text-xs text-[var(--fg-muted)]">
                  Ou écrivez directement à{" "}
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

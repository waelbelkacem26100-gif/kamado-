"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.span variants={fadeUp} className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] block mb-8">
            Contact
          </motion.span>

          <motion.h2 variants={fadeUp} className="text-display font-bold text-[var(--fg)]">
            Un projet en tête&nbsp;?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-section font-bold text-[var(--fg-muted)] mt-2">
            Parlons-en.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-14 flex justify-center">
            <MagneticButton
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-lg transition-colors duration-200"
            >
              Démarrer un projet
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-8">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
            >
              {CONTACT.email}
            </a>
            <span className="w-px h-4 bg-[var(--border)]" aria-hidden="true" />
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <span className="w-px h-4 bg-[var(--border)]" aria-hidden="true" />
            <a
              href={CONTACT.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
            >
              Twitter/X
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const services = [
  { label: "Site vitrine", href: "/services/creation-site-vitrine/" },
  { label: "Boutique Shopify", href: "/services/boutique-shopify/" },
  { label: "SaaS sur-mesure", href: "/services/saas-sur-mesure/" },
  { label: "Référencement SEO", href: "/services/referencement-seo/" },
  { label: "Webdesign", href: "/services/webdesign-sur-mesure/" },
  { label: "Chatbot & IA", href: "/services/chatbot-ia/" },
];

const company = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services/" },
  { label: "Nos réalisations", href: "/projets/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
  { label: "Mentions légales", href: "/mentions-legales/" },
];

export default function Footer() {
  return (
    <footer
      className="border-t px-6 pt-16 pb-10"
      style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "#0a0a0a", color: "#f0f0f0" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-lg font-bold tracking-tight text-white">
                Kama<span className="font-normal" style={{ color: "rgba(240,240,240,0.4)" }}> Agency</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(240,240,240,0.4)" }}>
              Agence web française — sites vitrine, Shopify, SaaS et IA. Livrés vite, sans compromis.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-xs font-medium hover:underline transition-colors"
              style={{ color: "#00ff87" }}
            >
              {CONTACT.email}
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(240,240,240,0.3)" }}>
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(240,240,240,0.5)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(240,240,240,0.3)" }}>
              Entreprise
            </p>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(240,240,240,0.5)" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(240,240,240,0.3)" }}>
              Contact
            </p>
            <div className="space-y-3 text-sm" style={{ color: "rgba(240,240,240,0.5)" }}>
              <p>Romans-sur-Isère, Drôme</p>
              <p>Auvergne-Rhône-Alpes, France</p>
              <p>100% à distance</p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[#00ff87] hover:text-[#00ff87]"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(240,240,240,0.5)" }}
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <Link
                href="/contact/"
                className="h-9 px-4 rounded-lg border flex items-center text-xs font-semibold transition-all hover:border-[#00ff87] hover:text-[#00ff87]"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(240,240,240,0.5)" }}
              >
                Démarrer un projet →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(240,240,240,0.3)" }}
        >
          <span>© 2026 {SITE_NAME}. Tous droits réservés.</span>
          <div className="flex items-center gap-1.5">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full"
              style={{ background: "#00ff87" }}
            />
            <span>Disponible pour nouveaux projets</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

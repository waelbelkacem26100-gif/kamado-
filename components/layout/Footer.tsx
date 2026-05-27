import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import NewsletterForm from "@/components/ui/NewsletterForm";

const services = [
  { label: "Site vitrine",    href: "/services/creation-site-vitrine/" },
  { label: "Boutique Shopify", href: "/services/boutique-shopify/" },
  { label: "SaaS sur-mesure",  href: "/services/saas-sur-mesure/" },
  { label: "Référencement SEO", href: "/services/referencement-seo/" },
  { label: "Webdesign",        href: "/services/webdesign-sur-mesure/" },
  { label: "Chatbot & IA",     href: "/services/chatbot-ia/" },
];

const company = [
  { label: "Accueil",          href: "/" },
  { label: "Nos Services",     href: "/services/" },
  { label: "Nos réalisations", href: "/projets/" },
  { label: "Blog",             href: "/blog/" },
  { label: "Contact",          href: "/contact/" },
  { label: "Mentions légales", href: "/mentions-legales/" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t overflow-hidden px-6 pt-16 pb-10"
      style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "#0A0A0A", color: "#f0f0f0" }}
    >
      {/* Watermark KAMA */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontSize:         "clamp(120px, 20vw, 280px)",
          fontWeight:       800,
          letterSpacing:    "-0.05em",
          lineHeight:       1,
          opacity:          0.022,
          background:       "linear-gradient(135deg, #00D1FF 0%, #ffffff 50%, #5CE1FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor:  "transparent",
          backgroundClip:   "text",
          userSelect:       "none",
          whiteSpace:       "nowrap",
        }}
      >
        KAMA
      </div>

      {/* Top separator gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,209,255,0.15) 30%, rgba(0,209,255,0.3) 50%, rgba(0,209,255,0.15) 70%, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto">
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
              style={{ color: "#00D1FF" }}
            >
              {CONTACT.email}
            </a>
            <p className="text-xs mt-2" style={{ color: "rgba(240,240,240,0.3)" }}>
              Romans-sur-Isère · Drôme · France
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(240,240,240,0.3)" }}>
              Lun – Ven · 9h – 18h
            </p>
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
                    className="text-sm transition-colors hover:text-[#00D1FF]"
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
                    className="text-sm transition-colors hover:text-[#00D1FF]"
                    style={{ color: "rgba(240,240,240,0.5)" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(240,240,240,0.3)" }}>
              Newsletter
            </p>
            <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(240,240,240,0.4)" }}>
              Conseils web, SEO et IA — 1 email par mois, sans spam.
            </p>
            <NewsletterForm />
            <div className="flex gap-3 mt-4">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[#00D1FF] hover:text-[#00D1FF]"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(240,240,240,0.5)" }}
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={CONTACT.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border flex items-center justify-center transition-colors hover:border-[#00D1FF] hover:text-[#00D1FF]"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(240,240,240,0.5)" }}
                aria-label="Twitter / X"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <Link
                href="/contact/"
                className="h-9 px-4 rounded-lg border flex items-center text-xs font-semibold transition-all hover:border-[#00D1FF] hover:text-[#00D1FF]"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(240,240,240,0.5)" }}
              >
                Démarrer →
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
              className="inline-flex h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: "#00D1FF" }}
            />
            <span>Disponible pour nouveaux projets</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

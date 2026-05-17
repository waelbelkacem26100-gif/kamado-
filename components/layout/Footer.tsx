import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Création site vitrine", href: "/services/creation-site-vitrine/" },
      { label: "Boutique Shopify", href: "/services/boutique-shopify/" },
      { label: "Refonte de site", href: "/services/refonte-de-site/" },
      { label: "Dropshipping", href: "/services/dropshipping/" },
      { label: "SaaS sur-mesure", href: "/services/saas-sur-mesure/" },
    ],
  },
  {
    title: "Expertises",
    links: [
      { label: "Webdesign sur-mesure", href: "/services/webdesign-sur-mesure/" },
      { label: "UX/UI Design", href: "/services/ux-ui-design/" },
      { label: "Identité visuelle", href: "/services/identite-visuelle/" },
      { label: "Référencement SEO", href: "/services/referencement-seo/" },
      { label: "Core Web Vitals", href: "/services/optimisation-core-web-vitals/" },
      { label: "Analytics & Suivi", href: "/services/analytics-et-suivi/" },
    ],
  },
  {
    title: "Technologies",
    links: [
      { label: "Shopify Liquid", href: "/services/shopify-liquid/" },
      { label: "WordPress", href: "/services/wordpress/" },
      { label: "Next.js & React", href: "/services/nextjs-et-react/" },
      { label: "Chatbot & IA", href: "/services/chatbot-ia/" },
      { label: "Automatisation IA", href: "/services/automatisation-ia/" },
      { label: "Intégration API IA", href: "/services/integration-api-ia/" },
    ],
  },
  {
    title: "Nexivo",
    links: [
      { label: "Nos projets", href: "/#projets" },
      { label: "Notre méthode", href: "/#process" },
      { label: "Blog & Ressources", href: "/blog/" },
      { label: "Démarrer un projet", href: "/#contact" },
      { label: "LinkedIn", href: CONTACT.linkedin },
      { label: "Twitter / X", href: CONTACT.twitter },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top: logo + desc + columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block text-xl font-bold tracking-tight text-[var(--fg)] mb-4">
              Nex<span className="text-[var(--accent)]">ivo</span>
            </Link>
            <p className="text-xs text-[var(--fg-muted)] leading-relaxed mb-5 max-w-[200px]">
              Agence web française spécialisée en sites vitrine, Shopify, SaaS et IA.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-xs text-[var(--accent)] hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--fg)] mb-5">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--fg-muted)]">
          <span>© 2026 {SITE_NAME}. Tous droits réservés.</span>
          <div className="flex items-center gap-6">
            <span>Fait avec passion en France</span>
            <Link href="/#contact" className="hover:text-[var(--accent)] transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

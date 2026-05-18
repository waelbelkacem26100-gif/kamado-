import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const nav = [
  { label: "Services", href: "/services/" },
  { label: "Nos Réalisations", href: "/projets/" },
  { label: "Tarifs", href: "/tarifs/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

const legal = [
  { label: "Mentions légales", href: "/mentions-legales/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-3">
              <span className="text-lg font-bold tracking-tight text-[var(--fg)]">
                Kama<span className="font-normal text-[var(--fg-muted)]"> Agency</span>
              </span>
            </Link>
            <p className="text-xs text-[var(--fg-muted)] leading-relaxed mb-3">
              Agence web française — sites vitrine, Shopify, SaaS et IA.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-xs text-[var(--accent)] hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--fg-muted)]">
          <span>© 2026 {SITE_NAME}. Tous droits réservés.</span>
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[var(--accent)] transition-colors">
                {l.label}
              </Link>
            ))}
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

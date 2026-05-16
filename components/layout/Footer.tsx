import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Offres", href: "#offres" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-[var(--fg)]">
            Nex<span className="text-[var(--accent)]">ivo</span>
          </Link>

          {/* Liens rapides */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Réseaux */}
          <div className="flex items-center gap-4">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors">
              LinkedIn
            </a>
            <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors">
              Twitter/X
            </a>
            <a href={`mailto:${CONTACT.email}`} className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors">
              Email
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--fg-muted)]">
          <span>© 2026 {SITE_NAME}. Tous droits réservés.</span>
          <span>Fait avec ❤️ en France</span>
        </div>
      </div>
    </footer>
  );
}

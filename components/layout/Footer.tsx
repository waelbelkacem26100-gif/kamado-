import { CONTACT, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--fg-muted)]">
        <span>
          © 2026 {SITE_NAME} — Designed & built in France
        </span>
        <div className="flex items-center gap-6">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-[var(--fg)] transition-colors">
            Email
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">
            LinkedIn
          </a>
          <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">
            Twitter/X
          </a>
        </div>
      </div>
    </footer>
  );
}

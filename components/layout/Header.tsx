"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

const expertiseCategories = [
  { title: "Site internet",    tag: "4 services", accent: "#00e5ff", href: "/services/creation-site-vitrine/" },
  { title: "Design",           tag: "3 services", accent: "#a855f7", href: "/services/webdesign-sur-mesure/" },
  { title: "Performance",      tag: "3 services", accent: "#10b981", href: "/services/referencement-seo/" },
  { title: "Technologie",      tag: "4 services", accent: "#3b82f6", href: "/services/saas-sur-mesure/" },
  { title: "Intelligence IA",  tag: "3 services", accent: "#f97316", href: "/services/chatbot-ia/" },
];

const realisationsLinks = [
  { label: "ScreenBuild", tag: "SaaS", href: "/projets/screenbuild/" },
  { label: "Clustea", tag: "SaaS B2B", href: "/projets/clustea/" },
  { label: "Couvetoile", tag: "Site vitrine", href: "/projets/couvetoile/" },
  { label: "Brainrot Club", tag: "Shopify", href: "/projets/brainrot-club/" },
];

type DropdownId = "expertise" | "realisations";

const navItems: { id: string; label: string; href: string; dropdown?: DropdownId }[] = [
  { id: "accueil",      label: "Accueil",           href: "/" },
  { id: "expertise",    label: "Nos Services",       href: "/services/",  dropdown: "expertise" },
  { id: "realisations", label: "Nos Réalisations",  href: "/projets/",   dropdown: "realisations" },
  { id: "blog",         label: "Blog",              href: "/blog/" },
  { id: "contact",      label: "Contact",           href: "/contact/" },
];

export default function Header() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted]         = useState(false);
  const { theme, setTheme }           = useTheme();
  const pathname                      = usePathname();
  const closeTimer                    = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openMenu     = (id: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenDropdown(id); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpenDropdown(null), 120); };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-2xl border-b border-[var(--border)]" : "py-5"
      }`}
      style={{ backgroundColor: scrolled ? "var(--header-bg)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center transition-colors duration-300 ${
            scrolled ? "text-[var(--fg)]" : "text-white"
          }`}
        >
          <Logo size="md" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.dropdown && openMenu(item.id)}
              onMouseLeave={() => item.dropdown && scheduleClose()}
            >
              <Link
                href={item.href}
                className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group ${
                  openDropdown === item.id || pathname.startsWith(item.href)
                    ? "text-[var(--accent)]"
                    : scrolled
                    ? "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {item.dropdown ? (
                  <motion.svg
                    animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="11" height="11" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                ) : (
                  <span
                    className="absolute bottom-1 left-4 right-4 h-px rounded-full origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{
                      background: pathname === item.href
                        ? "var(--accent)"
                        : scrolled
                        ? "var(--fg)"
                        : "white",
                      opacity: pathname === item.href ? 1 : 0.4,
                      transform: pathname === item.href ? "scaleX(1)" : undefined,
                    }}
                    aria-hidden="true"
                  />
                )}
              </Link>

              <AnimatePresence>
                {openDropdown === item.id && item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-1"
                    onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
                    onMouseLeave={scheduleClose}
                  >
                    {item.dropdown === "expertise" && (
                      <div
                        className="rounded-2xl border border-[var(--border)] p-3 shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
                        style={{ width: 280, backgroundColor: "var(--dropdown-bg)", backdropFilter: "blur(24px)" }}
                      >
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--accent)] mb-2 px-2">
                          Nos expertises
                        </p>
                        <ul className="space-y-0.5">
                          {expertiseCategories.map((cat) => (
                            <li key={cat.href}>
                              <Link
                                href={cat.href}
                                className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-150"
                              >
                                <span className="text-sm font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                                  {cat.title}
                                </span>
                                <span
                                  className="text-[9px] font-semibold px-2 py-0.5 rounded-full border"
                                  style={{ color: cat.accent, background: `${cat.accent}15`, borderColor: `${cat.accent}30` }}
                                >
                                  {cat.tag}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 pt-2 border-t border-white/5">
                          <Link
                            href="/services/"
                            className="block text-[10px] font-semibold text-center text-[var(--accent)] hover:underline py-1"
                          >
                            Voir tous les services →
                          </Link>
                        </div>
                      </div>
                    )}

                    {item.dropdown === "realisations" && (
                      <div
                        className="rounded-2xl border border-[var(--border)] p-3 shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
                        style={{ width: 280, backgroundColor: "var(--dropdown-bg)", backdropFilter: "blur(24px)" }}
                      >
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--accent)] mb-2 px-2">
                          Nos réalisations
                        </p>
                        <ul className="space-y-0.5">
                          {realisationsLinks.map((proj) => (
                            <li key={proj.href}>
                              <Link
                                href={proj.href}
                                className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-150"
                              >
                                <span className="text-sm font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                                  {proj.label}
                                </span>
                                <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/20">
                                  {proj.tag}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 pt-2 border-t border-white/5">
                          <Link
                            href="/projets/"
                            className="block text-[10px] font-semibold text-center text-[var(--accent)] hover:underline py-1"
                          >
                            Toutes les réalisations →
                          </Link>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? "text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface-hover)]"
                  : "text-white/70 hover:text-white"
              }`}
              aria-label="Basculer le thème"
            >
              {theme === "dark" ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}

          <Link
            href="/contact/"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)] hover:opacity-90 transition-opacity duration-200 shadow-[0_0_20px_var(--accent-glow)]"
            style={{ boxShadow: "0 0 20px rgba(0,255,135,0.3)" }}
          >
            Démarrer un projet
          </Link>

          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? "bg-[var(--fg)]" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? "bg-[var(--fg)]" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-[var(--border)]"
            style={{ backgroundColor: "var(--dropdown-bg)", backdropFilter: "blur(24px)" }}
          >
            <nav className="flex flex-col px-6 py-5 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[var(--fg-muted)] hover:text-[var(--accent)] py-2.5 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-4 py-3 rounded-full text-sm font-semibold text-[#050508] bg-[var(--accent)]"
              >
                Démarrer un projet
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

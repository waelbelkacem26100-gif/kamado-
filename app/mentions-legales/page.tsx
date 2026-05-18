import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales — Kama Agency",
  description:
    "Mentions légales de Kama Agency : éditeur, hébergeur, propriété intellectuelle, protection des données personnelles (RGPD) et politique de cookies.",
  alternates: { canonical: `${SITE_URL}/mentions-legales/` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mentions légales — Kama Agency",
    description: "Mentions légales, RGPD et politique de confidentialité de Kama Agency.",
    url: `${SITE_URL}/mentions-legales/`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-xl font-bold text-[var(--fg)] mb-4 pb-3 border-b border-[var(--border)]">
      {title}
    </h2>
    <div className="space-y-3 text-sm text-[var(--fg-muted)] leading-relaxed">
      {children}
    </div>
  </section>
);

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--fg-muted)] mb-12">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-[var(--fg)]">Mentions légales</span>
        </nav>

        {/* Title */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] block mb-4">
            Informations légales
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-4">
            Mentions légales
          </h1>
          <p className="text-[var(--fg-muted)]">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique,
            il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
        </div>

        {/* 1. Éditeur */}
        <Section title="1. Éditeur du site">
          <p>
            Le site <strong className="text-[var(--fg)]">kamaagency.com</strong> est édité par :
          </p>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-2">
            <p><strong className="text-[var(--fg)]">Dénomination :</strong> Kama Agency</p>
            <p><strong className="text-[var(--fg)]">Responsables de publication :</strong> Bendou Wael & Salhi Idriss</p>
            <p><strong className="text-[var(--fg)]">Adresse :</strong> 2 rue Étienne Dolet, 26100 Romans-sur-Isère, France</p>
            <p>
              <strong className="text-[var(--fg)]">Email :</strong>{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-[var(--accent)] hover:underline">
                {CONTACT.email}
              </a>
            </p>
            <p><strong className="text-[var(--fg)]">Activité :</strong> Agence de création de sites web et services numériques</p>
          </div>
        </Section>

        {/* 2. Hébergement */}
        <Section title="2. Hébergement">
          <p>Le site est hébergé par :</p>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-2">
            <p><strong className="text-[var(--fg)]">Société :</strong> Vercel Inc.</p>
            <p><strong className="text-[var(--fg)]">Adresse :</strong> 340 Pine Street Suite 701, San Francisco, California 94104, États-Unis</p>
            <p>
              <strong className="text-[var(--fg)]">Site web :</strong>{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                vercel.com
              </a>
            </p>
          </div>
        </Section>

        {/* 3. Propriété intellectuelle */}
        <Section title="3. Propriété intellectuelle">
          <p>
            L'ensemble du contenu du site kamaagency.com — incluant, de façon non limitative, les textes, graphismes,
            images, photographies, vidéos, icônes, sons, logiciels et toute autre information — est protégé par le droit
            d'auteur et appartient à Kama Agency ou à ses partenaires.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments
            du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable
            de Kama Agency.
          </p>
          <p>
            Les marques et logos présents sur le site sont des marques déposées par Kama Agency ou par ses partenaires.
            Toute reproduction non autorisée de ces marques constitue une contrefaçon susceptible d'engager la
            responsabilité civile et pénale du contrefacteur.
          </p>
        </Section>

        {/* 4. Protection des données */}
        <Section title="4. Protection des données personnelles (RGPD)">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) — Règlement (UE) 2016/679 du
            27 avril 2016 — et à la loi Informatique et Libertés n° 78-17 du 6 janvier 1978 modifiée, vous disposez
            de droits relatifs à vos données personnelles.
          </p>
          <p><strong className="text-[var(--fg)]">Responsable du traitement :</strong> Kama Agency, Bendou Wael & Salhi Idriss, 2 rue Étienne Dolet, 26100 Romans-sur-Isère.</p>
          <p>
            <strong className="text-[var(--fg)]">Données collectées :</strong> Lors de l'utilisation du formulaire de contact, nous collectons les informations
            suivantes : nom, prénom, adresse email, numéro de téléphone (optionnel), société (optionnel),
            type de projet et message. Ces données sont nécessaires au traitement de votre demande.
          </p>
          <p>
            <strong className="text-[var(--fg)]">Finalité du traitement :</strong> Répondre à vos demandes de contact et de devis, établir des propositions
            commerciales, et assurer le suivi de la relation client.
          </p>
          <p>
            <strong className="text-[var(--fg)]">Durée de conservation :</strong> Vos données sont conservées pendant une durée maximale de 3 ans à compter
            de notre dernier échange.
          </p>
          <p>
            <strong className="text-[var(--fg)]">Vos droits :</strong> Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation
            du traitement, d'opposition et de portabilité de vos données. Pour exercer ces droits, contactez-nous à{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-[var(--accent)] hover:underline">
              {CONTACT.email}
            </a>.
          </p>
          <p>
            Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale
            de l'Informatique et des Libertés) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">www.cnil.fr</a>.
          </p>
          <p>
            <strong className="text-[var(--fg)]">Partage des données :</strong> Vos données personnelles ne sont jamais vendues ni partagées à des tiers
            à des fins commerciales. Elles peuvent être transmises à nos sous-traitants techniques (hébergeur Vercel,
            service d'envoi d'emails Web3Forms) dans le cadre strict de l'exécution du traitement.
          </p>
        </Section>

        {/* 5. Cookies */}
        <Section title="5. Politique relative aux cookies">
          <p>
            Un cookie est un fichier texte susceptible d'être déposé dans un terminal lors de la consultation d'un
            service en ligne avec un logiciel de navigation.
          </p>
          <p>
            Le site kamaagency.com utilise des cookies techniques nécessaires au bon fonctionnement du site
            (préférence de thème clair/sombre). Ces cookies ne collectent aucune donnée personnelle et sont
            exemptés de consentement au sens de la réglementation RGPD.
          </p>
          <p>
            Nous n'utilisons pas de cookies publicitaires ou de tracking tiers sans votre consentement explicite.
          </p>
          <p>
            Vous pouvez à tout moment paramétrer votre navigateur pour accepter ou refuser les cookies.
            Consultez l'aide de votre navigateur pour connaître la procédure à suivre.
          </p>
        </Section>

        {/* 6. Responsabilité */}
        <Section title="6. Limitation de responsabilité">
          <p>
            Kama Agency met tout en œuvre pour offrir aux utilisateurs des informations et des outils disponibles
            et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d'une absence de disponibilité
            des informations et/ou de la présence de virus sur son site.
          </p>
          <p>
            Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.
            Malgré des mises à jour régulières, la responsabilité du site ne peut être engagée en cas de modification
            des dispositions administratives et juridiques apparaissant après la publication.
          </p>
          <p>
            Kama Agency ne peut être tenu responsable de l'utilisation faite de ces informations,
            et de tout préjudice direct ou indirect pouvant en découler.
          </p>
        </Section>

        {/* 7. Loi applicable */}
        <Section title="7. Loi applicable et juridiction compétente">
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut de
            résolution amiable, les tribunaux français seront seuls compétents.
          </p>
          <p>
            Tout litige en relation avec l'utilisation du site kamaagency.com est soumis au droit français.
            Il est fait attribution exclusive de juridiction aux tribunaux compétents de Romans-sur-Isère (Drôme).
          </p>
        </Section>

        {/* 8. Liens externes */}
        <Section title="8. Liens hypertextes">
          <p>
            Le site kamaagency.com peut contenir des liens hypertextes vers d'autres sites Internet.
            Ces sites ne sont pas sous le contrôle de Kama Agency, qui ne peut être tenu responsable
            de leur contenu. L'insertion de liens vers ces sites ne constitue pas une approbation de ces sites.
          </p>
        </Section>

        {/* Mise à jour */}
        <p className="text-xs text-[var(--fg-muted)] border-t border-[var(--border)] pt-8">
          Dernière mise à jour : mai 2026 — Pour toute question relative à ces mentions légales,
          contactez-nous à{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-[var(--accent)] hover:underline">
            {CONTACT.email}
          </a>.
        </p>

      </div>
    </main>
  );
}

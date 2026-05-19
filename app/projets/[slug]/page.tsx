import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import ProjectPageClient from "./ProjectPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} — Réalisation | ${SITE_NAME}`;
  const description = `${project.tagline}. ${project.result} — Projet réalisé par Kama Agency.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/projets/${project.slug}/` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/projets/${project.slug}/`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [{ url: project.image, width: 800, height: 533, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Nos Réalisations", item: `${SITE_URL}/projets/` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${SITE_URL}/projets/${project.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProjectPageClient project={project} prevProject={prevProject} nextProject={nextProject} />
    </>
  );
}

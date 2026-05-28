import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projets/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p.isPilier ? 0.85 : 0.75,
  }));

  return [
    { url: `${SITE_URL}/`,               lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/services/`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/tarifs/`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/projets/`,       lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/blog/`,          lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE_URL}/contact/`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/a-propos/`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/mentions-legales/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...serviceUrls,
    ...blogUrls,
    ...projectUrls,
  ];
}

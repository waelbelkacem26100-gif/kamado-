export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/blog";

const TODAY = "2026-05-17";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}/`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projets/${p.slug}/`,
    lastModified: TODAY,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}/`,
    lastModified: TODAY,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: TODAY,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...serviceUrls,
    ...blogUrls,
    ...projectUrls,
  ];
}

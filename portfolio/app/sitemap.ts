import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `*[_type == "work" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`;

  const projects = await client.fetch(query);

  const projectUrls: MetadataRoute.Sitemap = projects.map(
    (project: { slug: string; _updatedAt: string }) => ({
      url: `https://www.durgeshdev.in/vault/${project.slug}`,
      lastModified: new Date(project._updatedAt),
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: "https://www.durgeshdev.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://www.durgeshdev.in/inventory",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...projectUrls];
}

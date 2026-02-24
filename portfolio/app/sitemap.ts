import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://durgeshdev.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, 
    },
    {
      url: 'https://durgeshdev.in/inventory',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5, 
    },
  ]
} 
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://asaa.dev',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
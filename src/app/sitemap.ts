import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = { lastModified: new Date(), changeFrequency: 'monthly' as const }
  return [
    { url: SITE_URL, priority: 1, ...base },
    { url: `${SITE_URL}/about`, priority: 0.8, ...base },
    { url: `${SITE_URL}/services`, priority: 0.8, ...base },
    { url: `${SITE_URL}/contact`, priority: 0.7, ...base },
  ]
}

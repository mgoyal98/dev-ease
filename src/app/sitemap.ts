import { navCategories, navItems } from '@/common/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devease.app';

  const categories = Object.values(navCategories).map((category) => ({
    url: `${baseUrl}${category.route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const tools = Object.values(navItems)
    .filter((tool) => tool.route)
    .map((tool) => ({
      url: `${baseUrl}${tool.route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...tools,
    ...categories,
  ];
}

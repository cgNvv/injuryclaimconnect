import { MetadataRoute } from 'next';

/*
 * ROBOTS.TXT GENERATION
 *
 * Tells search engines which pages to crawl.
 * Access at: https://yourdomain.com/robots.txt
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://injuryclaimconnect.com'; // Replace with your domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Block API routes and admin if exists
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

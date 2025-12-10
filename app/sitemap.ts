import { MetadataRoute } from 'next';

/*
 * SITEMAP GENERATION
 *
 * Automatically generates a sitemap.xml for search engines.
 * Includes all 50 state pages + homepage.
 *
 * Access at: https://yourdomain.com/sitemap.xml
 */

const states = [
  'alabama',
  'alaska',
  'arizona',
  'arkansas',
  'california',
  'colorado',
  'connecticut',
  'delaware',
  'florida',
  'georgia',
  'hawaii',
  'idaho',
  'illinois',
  'indiana',
  'iowa',
  'kansas',
  'kentucky',
  'louisiana',
  'maine',
  'maryland',
  'massachusetts',
  'michigan',
  'minnesota',
  'mississippi',
  'missouri',
  'montana',
  'nebraska',
  'nevada',
  'new-hampshire',
  'new-jersey',
  'new-mexico',
  'new-york',
  'north-carolina',
  'north-dakota',
  'ohio',
  'oklahoma',
  'oregon',
  'pennsylvania',
  'rhode-island',
  'south-carolina',
  'south-dakota',
  'tennessee',
  'texas',
  'utah',
  'vermont',
  'virginia',
  'washington',
  'west-virginia',
  'wisconsin',
  'wyoming',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://injuryclaimconnect.com'; // Replace with your domain

  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  };

  // State pages
  const statePages = states.map((state) => ({
    url: `${baseUrl}/mva-leads-${state}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [homepage, ...statePages];
}

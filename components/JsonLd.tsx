/*
 * JSON-LD SCHEMA MARKUP
 *
 * Provides structured data for search engines to better understand
 * the page content and improve rich snippet display in SERPs.
 *
 * Includes:
 * - Organization schema
 * - Service schema
 * - Breadcrumb schema (for state pages)
 */

interface JsonLdProps {
  state?: string;
}

export default function JsonLd({ state }: JsonLdProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Injury Claim Connect',
    description: 'Performance-based motor vehicle accident lead generation for personal injury law firms. Pay only when leads sign with your firm.',
    url: 'https://injuryclaimconnect.com',
    logo: 'https://injuryclaimconnect.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Legal Lead Generation',
    name: state
      ? `Motor Vehicle Accident Leads in ${state}`
      : 'Motor Vehicle Accident Lead Generation for Law Firms',
    description: state
      ? `Exclusive MVA leads with warm live transfers for personal injury law firms in ${state}. Pay only when the lead signs with your firm.`
      : 'Exclusive motor vehicle accident leads with warm live transfers. Nationwide coverage for personal injury law firms. Pay-per-signed-case pricing model.',
    provider: {
      '@type': 'Organization',
      name: 'Injury Claim Connect',
    },
    areaServed: state
      ? {
          '@type': 'State',
          name: state,
        }
      : {
          '@type': 'Country',
          name: 'United States',
        },
    audience: {
      '@type': 'Audience',
      audienceType: 'Personal Injury Law Firms',
    },
  };

  const breadcrumbSchema = state
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://injuryclaimconnect.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `MVA Leads ${state}`,
            item: `https://injuryclaimconnect.com/mva-leads-${state.toLowerCase().replace(/\s+/g, '-')}`,
          },
        ],
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}

# Injury Claim Connect

Production-ready, SEO-optimized marketing page for a legal lead generation company.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## Key Features

- ✅ **Pay-Per-Signed-Case Model**: Clearly communicated value proposition
- ✅ **SEO-Optimized**: Nationwide + 50 state-specific pages
- ✅ **Dynamic Routes**: `/mva-leads-{state}` for all 50 states
- ✅ **Schema Markup**: JSON-LD for better search visibility
- ✅ **Mobile Responsive**: Professional design across all devices
- ✅ **Type Safe**: Built with TypeScript
- ✅ **Performance**: Static generation at build time

## Target Keywords

- MVA leads
- Motor vehicle accident leads
- Car accident leads for law firms
- Exclusive MVA leads
- Pay per signed case MVA leads

## Project Structure

```
app/
├── [state]/page.tsx      # Dynamic state pages
├── layout.tsx            # Root layout
├── page.tsx              # Homepage
└── globals.css           # Styles

components/
├── Hero.tsx              # Hero section
├── HowItWorks.tsx        # Process steps
├── WhyChooseUs.tsx       # Benefits
├── PayPerSignedCase.tsx  # Comparison table
├── StatesCoverage.tsx    # State SEO module
├── Compliance.tsx        # Compliance section
├── FinalCTA.tsx          # Contact form
└── JsonLd.tsx            # Schema markup
```

## State-Specific Pages

The site automatically generates SEO-optimized pages for all 50 states:

- `/mva-leads-california`
- `/mva-leads-texas`
- `/mva-leads-florida`
- ... (47 more)

Each page includes:
- State-specific H2/H3 headings
- Localized content
- Unique meta tags
- Schema markup

## SEO Implementation

### Metadata
- Optimized titles and descriptions
- Open Graph tags
- Canonical URLs
- Keywords meta tags

### Schema Markup
- Organization schema
- Service schema
- Breadcrumb schema (state pages)

### Content Structure
- Proper H1 → H2 → H3 hierarchy
- Semantic HTML
- Internal linking (state grid)
- Natural keyword usage

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Self-hosted Node.js

## Customization

### Update Business Info
Edit metadata in:
- `app/page.tsx`
- `app/[state]/page.tsx`
- `components/JsonLd.tsx`

### Change Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --color-primary: #1e3a8a;
  --color-secondary: #059669;
}
```

### Form Submission
Implement `app/api/submit/route.ts` or integrate with:
- Formspree
- SendGrid
- HubSpot
- Salesforce

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility classes
- **Custom CSS** - Component styling

## Documentation

See [IMPLEMENTATION.md](./IMPLEMENTATION.md) for:
- Detailed setup instructions
- SEO strategy breakdown
- Content guidelines
- Customization guide
- Deployment instructions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

**Ready for production deployment.**

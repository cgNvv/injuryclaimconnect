/*
 * STATE-SPECIFIC SEO MODULE
 *
 * This component is designed to support dynamic state-level pages.
 *
 * For state-specific pages (e.g., /mva-leads-california, /mva-leads-texas):
 * 1. Pass state prop: <StatesCoverage state="California" stateCode="CA" />
 * 2. Component will render optimized H2/H3 headings with state name
 * 3. URLs will follow pattern: /mva-leads-{state-slug}
 *
 * For national page (home):
 * - No state prop needed
 * - Displays all 50 states grid
 */

interface StatesCoverageProps {
  state?: string;
  stateCode?: string;
}

export default function StatesCoverage({ state, stateCode }: StatesCoverageProps) {
  const states = [
    { name: 'Alabama', code: 'AL' },
    { name: 'Alaska', code: 'AK' },
    { name: 'Arizona', code: 'AZ' },
    { name: 'Arkansas', code: 'AR' },
    { name: 'California', code: 'CA' },
    { name: 'Colorado', code: 'CO' },
    { name: 'Connecticut', code: 'CT' },
    { name: 'Delaware', code: 'DE' },
    { name: 'Florida', code: 'FL' },
    { name: 'Georgia', code: 'GA' },
    { name: 'Hawaii', code: 'HI' },
    { name: 'Idaho', code: 'ID' },
    { name: 'Illinois', code: 'IL' },
    { name: 'Indiana', code: 'IN' },
    { name: 'Iowa', code: 'IA' },
    { name: 'Kansas', code: 'KS' },
    { name: 'Kentucky', code: 'KY' },
    { name: 'Louisiana', code: 'LA' },
    { name: 'Maine', code: 'ME' },
    { name: 'Maryland', code: 'MD' },
    { name: 'Massachusetts', code: 'MA' },
    { name: 'Michigan', code: 'MI' },
    { name: 'Minnesota', code: 'MN' },
    { name: 'Mississippi', code: 'MS' },
    { name: 'Missouri', code: 'MO' },
    { name: 'Montana', code: 'MT' },
    { name: 'Nebraska', code: 'NE' },
    { name: 'Nevada', code: 'NV' },
    { name: 'New Hampshire', code: 'NH' },
    { name: 'New Jersey', code: 'NJ' },
    { name: 'New Mexico', code: 'NM' },
    { name: 'New York', code: 'NY' },
    { name: 'North Carolina', code: 'NC' },
    { name: 'North Dakota', code: 'ND' },
    { name: 'Ohio', code: 'OH' },
    { name: 'Oklahoma', code: 'OK' },
    { name: 'Oregon', code: 'OR' },
    { name: 'Pennsylvania', code: 'PA' },
    { name: 'Rhode Island', code: 'RI' },
    { name: 'South Carolina', code: 'SC' },
    { name: 'South Dakota', code: 'SD' },
    { name: 'Tennessee', code: 'TN' },
    { name: 'Texas', code: 'TX' },
    { name: 'Utah', code: 'UT' },
    { name: 'Vermont', code: 'VT' },
    { name: 'Virginia', code: 'VA' },
    { name: 'Washington', code: 'WA' },
    { name: 'West Virginia', code: 'WV' },
    { name: 'Wisconsin', code: 'WI' },
    { name: 'Wyoming', code: 'WY' },
  ];

  const toSlug = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

  if (state && stateCode) {
    // STATE-SPECIFIC PAGE VERSION
    return (
      <section className="section-state-specific" id="state-coverage">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Motor Vehicle Accident Leads in {state}</h2>
            <p className="section-subtitle">
              Exclusive MVA lead generation for personal injury law firms in {state}
            </p>
          </div>

          <div className="state-content">
            <h3 className="state-content-title">MVA Lead Generation for {state} Law Firms</h3>
            <p className="state-content-text">
              Injury Claim Connect provides qualified motor vehicle accident leads to personal injury attorneys throughout {state}. Our warm transfer model ensures you receive pre-screened MVA leads who are actively seeking legal representation for their car accident injuries.
            </p>

            <div className="state-features">
              <div className="state-feature">
                <h4 className="state-feature-title">Localized Competition Management</h4>
                <p className="state-feature-text">
                  We carefully control the number of law firms we partner with in {state}, ensuring your leads are exclusive or distributed to a limited number of attorneys. This reduces competition and improves your conversion rates for {state} MVA cases.
                </p>
              </div>

              <div className="state-feature">
                <h4 className="state-feature-title">Exclusive {stateCode} Lead Distribution</h4>
                <p className="state-feature-text">
                  Unlike national lead aggregators who sell the same lead to dozens of firms, Injury Claim Connect offers capped or exclusive distribution for {state} motor vehicle accident leads. You compete with fewer attorneys, allowing your intake team to focus on case evaluation rather than speed-to-contact races.
                </p>
              </div>

              <div className="state-feature">
                <h4 className="state-feature-title">TCPA and {state} Compliance</h4>
                <p className="state-feature-text">
                  All leads generated for {state} law firms comply with federal TCPA regulations and relevant state advertising guidelines. Our intake process includes proper consent documentation and disclosure requirements. While we maintain high compliance standards, each firm remains responsible for their own legal compliance review.
                </p>
              </div>
            </div>

            <div className="state-cta-box">
              <h3 className="state-cta-title">Ready to Grow Your {state} Personal Injury Practice?</h3>
              <p className="state-cta-text">
                Join {state} law firms who are already receiving qualified MVA leads through Injury Claim Connect. Pay only when leads sign with your firm.
              </p>
              <a href="#contact" className="cta-button cta-button-primary">
                Get {stateCode} MVA Leads
                <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // NATIONAL PAGE VERSION - All 50 States
  return (
    <section className="section-dark" id="nationwide-coverage">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nationwide MVA Lead Coverage</h2>
          <p className="section-subtitle">
            We connect personal injury law firms with qualified motor vehicle accident leads across all 50 states
          </p>
        </div>

        <div className="states-intro">
          <p className="states-intro-text">
            Injury Claim Connect operates a nationwide network for MVA lead generation. Whether your firm practices in high-volume metro areas or serves smaller regional markets, we deliver pre-screened car accident leads with warm live transfers.
          </p>
          <p className="states-intro-text">
            Each state page includes localized information about lead distribution, competition management, and compliance considerations specific to that jurisdiction.
          </p>
        </div>

        <div className="states-grid">
          {states.map((s) => (
            <a
              key={s.code}
              href={`/mva-leads-${toSlug(s.name)}`}
              className="state-card"
              aria-label={`Motor Vehicle Accident Leads in ${s.name}`}
            >
              <span className="state-code">{s.code}</span>
              <span className="state-name">{s.name}</span>
              <svg className="state-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        <div className="states-footer">
          <h3 className="states-footer-title">Limited Firm Slots Per State</h3>
          <p className="states-footer-text">
            To maintain lead quality and exclusivity, Injury Claim Connect limits the number of law firms we partner with in each state. If your state reaches capacity, you'll be placed on a priority waitlist.
          </p>
        </div>
      </div>
    </section>
  );
}

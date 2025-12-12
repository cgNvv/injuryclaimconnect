import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo-wrapper">
            <Image
              src="/header.png"
              alt="Injury Claim Connect"
              width={400}
              height={100}
              priority
              className="hero-logo"
            />
          </div>

          <h1 className="hero-headline">
            Exclusive Motor Vehicle Accident Leads for Personal Injury Law Firms
          </h1>

          <p className="hero-subheadline">
            Warm live transfers from qualified MVA victims. Nationwide coverage.
            <strong> Pay only when the lead signs with your firm.</strong>
          </p>

          <div className="hero-features">
            <div className="feature-badge">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Warm Live Transfers</span>
            </div>
            <div className="feature-badge">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Signed-Case-Only Pricing</span>
            </div>
            <div className="feature-badge">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Nationwide Coverage</span>
            </div>
            <div className="feature-badge">
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Zero Upfront Risk</span>
            </div>
          </div>

          <a href="#contact" className="cta-button cta-button-primary">
            Get Qualified MVA Leads
            <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="hero-trust-line">
            Trusted by personal injury law firms across all 50 states
          </p>
        </div>
      </div>
    </section>
  );
}

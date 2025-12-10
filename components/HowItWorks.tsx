export default function HowItWorks() {
  return (
    <section className="section-light" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How Injury Claim Connect Works</h2>
          <p className="section-subtitle">
            A transparent, performance-based lead generation process designed for personal injury law firms
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon-wrapper">
              <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="step-title">Accident Victim Submits Inquiry</h3>
            <p className="step-description">
              Motor vehicle accident victims complete our intake form or call our dedicated hotline seeking legal representation.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon-wrapper">
              <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="step-title">Lead is Screened and Qualified</h3>
            <p className="step-description">
              Our experienced intake specialists verify injury details, liability indicators, insurance coverage, and statute of limitations compliance.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon-wrapper">
              <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="step-title">Lead is Warm Transferred Live</h3>
            <p className="step-description">
              Once qualified, the lead is immediately connected to your intake team via live phone transfer while they're ready to speak.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-icon-wrapper">
              <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="step-title">You Only Pay if the Case Signs</h3>
            <p className="step-description">
              No payment required unless the lead officially retains your firm. No wasted spend on leads that don't convert.
            </p>
          </div>
        </div>

        <div className="value-prop-box">
          <h3 className="value-prop-title">The Bottom Line</h3>
          <p className="value-prop-text">
            Injury Claim Connect eliminates the inefficiencies of traditional lead generation. You receive pre-screened, motivated MVA leads who are actively seeking representation—and you only invest when they become paying clients.
          </p>
        </div>
      </div>
    </section>
  );
}

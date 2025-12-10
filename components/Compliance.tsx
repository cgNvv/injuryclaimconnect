export default function Compliance() {
  return (
    <section className="section-light" id="compliance">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Compliance & Quality Assurance</h2>
          <p className="section-subtitle">
            Ethical lead generation built on regulatory compliance and quality standards
          </p>
        </div>

        <div className="compliance-grid">
          <div className="compliance-card">
            <div className="compliance-icon-wrapper">
              <svg className="compliance-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="compliance-title">TCPA-Aware Intake Process</h3>
            <p className="compliance-description">
              All lead generation activities follow Telephone Consumer Protection Act (TCPA) guidelines. We document express written consent before initiating contact, maintain do-not-call list compliance, and implement proper identification protocols during all interactions.
            </p>
          </div>

          <div className="compliance-card">
            <div className="compliance-icon-wrapper">
              <svg className="compliance-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="compliance-title">Ethical Advertising Compliance</h3>
            <p className="compliance-description">
              Our marketing materials and intake scripts adhere to state bar advertising rules and Model Rules of Professional Conduct. We do not make guarantees about case outcomes, settlement amounts, or attorney performance.
            </p>
          </div>

          <div className="compliance-card">
            <div className="compliance-icon-wrapper">
              <svg className="compliance-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="compliance-title">Verified Lead Information</h3>
            <p className="compliance-description">
              Our intake specialists verify key case details before transfer: date of accident, injury type, medical treatment status, insurance information, and statute of limitations compliance. This reduces time wasted on unqualified or expired claims.
            </p>
          </div>

          <div className="compliance-card">
            <div className="compliance-icon-wrapper">
              <svg className="compliance-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="compliance-title">Data Privacy and Security</h3>
            <p className="compliance-description">
              Lead data is transmitted securely and stored in compliance with applicable privacy regulations. We maintain reasonable security measures to protect personally identifiable information (PII) and case details from unauthorized access.
            </p>
          </div>
        </div>

        <div className="compliance-disclaimer">
          <h3 className="disclaimer-title">No Case Outcome Guarantees</h3>
          <p className="disclaimer-text">
            Injury Claim Connect provides lead generation services only. We do not guarantee case acceptance, settlement values, trial outcomes, or attorney-client relationship formation. Each law firm is responsible for conducting its own case evaluation, conflict checks, and compliance review.
          </p>
          <p className="disclaimer-text">
            Lead quality and conversion rates depend on multiple factors including firm reputation, intake processes, geographic market, and case selection criteria. Past performance of other firms is not indicative of future results for your practice.
          </p>
        </div>
      </div>
    </section>
  );
}

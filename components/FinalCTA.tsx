export default function FinalCTA() {
  return (
    <section className="section-cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text-block">
            <h2 className="cta-headline">Start Receiving Qualified MVA Leads with Zero Upfront Risk</h2>
            <p className="cta-subtext">
              Join personal injury law firms across the country who have eliminated wasted marketing spend and now only pay for signed cases.
            </p>

            <div className="cta-benefits-list">
              <div className="cta-benefit-item">
                <svg className="cta-benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No pay-per-call or pay-per-lead fees</span>
              </div>
              <div className="cta-benefit-item">
                <svg className="cta-benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Warm transfers from pre-screened MVA victims</span>
              </div>
              <div className="cta-benefit-item">
                <svg className="cta-benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Exclusive or capped lead distribution</span>
              </div>
              <div className="cta-benefit-item">
                <svg className="cta-benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Limited firm slots per state</span>
              </div>
            </div>

            <div className="cta-urgency-banner-inline">
              <svg className="urgency-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="urgency-text">
                <strong>Limited availability:</strong> We cap the number of partner firms per state to maintain lead quality and exclusivity. Slots fill quickly in competitive markets.
              </p>
            </div>
          </div>

          <div className="cta-form-block">
            <div className="cta-form-wrapper">
              <h3 className="cta-form-title">Get Started Today</h3>
              <p className="cta-form-subtitle">Fill out the form below and our team will contact you within 24 hours to discuss your firm's needs.</p>

              <form className="cta-form" action="/api/submit" method="POST">
                <div className="form-group">
                  <label htmlFor="firm-name" className="form-label">Law Firm Name</label>
                  <input
                    type="text"
                    id="firm-name"
                    name="firm-name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contact-name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="multi-state" className="form-label">Is your firm multi-state?</label>
                  <select id="multi-state" name="multi-state" className="form-select" required>
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="state" className="form-label">State(s) of Practice</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="form-input"
                    placeholder="e.g., California, Texas, Florida, New York"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="monthly-volume" className="form-label">Desired Monthly Case Volume</label>
                  <select id="monthly-volume" name="monthly-volume" className="form-select" required>
                    <option value="">Select an option</option>
                    <option value="1-5">1-5 signed cases per month</option>
                    <option value="6-10">6-10 signed cases per month</option>
                    <option value="11-20">11-20 signed cases per month</option>
                    <option value="20+">20+ signed cases per month</option>
                  </select>
                </div>

                <button type="submit" className="cta-button cta-button-primary">
                  Request MVA Leads
                  <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>

              <p className="cta-privacy-note">
                By submitting this form, you agree to be contacted by Injury Claim Connect regarding our lead generation services. We respect your privacy and will not share your information with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

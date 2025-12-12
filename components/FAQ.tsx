'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What are motor vehicle accident (MVA) leads?',
    answer: 'MVA leads are pre-qualified contacts from individuals who have been involved in motor vehicle accidents and are seeking legal representation. These leads are warm transfers from people actively looking for a personal injury attorney to help with their case. Each lead is screened to ensure they meet basic criteria before being connected to your firm.',
  },
  {
    question: 'How does pay-per-signed-case pricing work?',
    answer: 'With our pay-per-signed-case model, you only pay when a lead officially signs a retainer agreement with your firm. There are no upfront costs, no pay-per-call fees, and no charges for leads that don\'t convert. This eliminates all financial risk and ensures you only invest in cases that actually join your firm.',
  },
  {
    question: 'What makes your MVA leads exclusive?',
    answer: 'We offer exclusive or capped lead distribution, meaning each lead is only sent to one firm or a very limited number of firms in your area. This dramatically increases your conversion rates compared to shared leads that go to dozens of competing firms. We also limit the number of partner firms per state to maintain lead quality and exclusivity.',
  },
  {
    question: 'What states do you cover?',
    answer: 'We provide nationwide coverage across all 50 states. Whether your firm practices in major metropolitan areas or smaller markets, we can deliver qualified MVA leads in your jurisdiction. Our extensive marketing reach ensures consistent lead flow regardless of your location.',
  },
  {
    question: 'How are leads qualified before transfer?',
    answer: 'Every lead goes through our pre-screening process before being transferred to your firm. We verify that the individual was involved in a motor vehicle accident, is seeking legal representation, has not yet retained another attorney, and meets basic case criteria such as injury severity and liability factors. This ensures you receive high-quality leads with genuine legal needs.',
  },
  {
    question: 'How quickly will I receive leads after signing up?',
    answer: 'Most firms begin receiving leads within 7-14 days of completing the onboarding process. Our team will work with you to understand your firm\'s capacity, practice areas, and geographic coverage. Once your account is active, leads matching your criteria will be transferred to you in real-time as they become available.',
  },
  {
    question: 'Can I choose the volume of leads I receive?',
    answer: 'Yes, absolutely. During onboarding, you\'ll specify your desired monthly case volume, and we\'ll calibrate our lead delivery to match your firm\'s capacity. You can choose anywhere from 1-5 signed cases per month for smaller practices up to 20+ for larger firms. You can also adjust your volume preferences as your needs change.',
  },
  {
    question: 'What information is provided with each lead?',
    answer: 'Each lead transfer includes comprehensive details about the potential client and their case, including: contact information (name, phone, email), accident details (date, location, type of collision), injury information, insurance details, and any other relevant case facts gathered during our intake process. This allows your team to quickly assess the case and provide informed initial consultation.',
  },
  {
    question: 'Is there a minimum contract term?',
    answer: 'We offer flexible partnership arrangements designed to accommodate different firm sizes and needs. During your consultation, our team will discuss contract terms, commitment periods, and any minimum case requirements. We focus on building long-term relationships with law firms, not locking you into rigid agreements that don\'t serve your practice.',
  },
  {
    question: 'How do I track signed cases for billing?',
    answer: 'We provide a dedicated portal where you can report signed cases and track your billing. Once a lead signs with your firm, you simply log into the portal and mark the case as signed. Our team verifies the signature and processes billing accordingly. You\'ll receive detailed monthly reports showing all leads received, conversion rates, and billing summaries.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // JSON-LD structured data for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section-light" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about our exclusive MVA lead generation service for law firms.
            </p>
          </div>

          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <svg
                    className={`faq-icon ${openIndex === index ? 'faq-icon-open' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#contact" className="cta-button cta-button-primary">
              Get Started with Exclusive Leads
              <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

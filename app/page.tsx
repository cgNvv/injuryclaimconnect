import { Metadata } from 'next';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import PayPerSignedCase from '@/components/PayPerSignedCase';
import StatesCoverage from '@/components/StatesCoverage';
import Compliance from '@/components/Compliance';
import FinalCTA from '@/components/FinalCTA';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Motor Vehicle Accident Leads for Law Firms | Injury Claim Connect',
  description: 'Exclusive MVA leads with warm live transfers. Pay only when the lead signs with your firm. No upfront risk. Nationwide coverage for personal injury law firms.',
  keywords: 'MVA leads, motor vehicle accident leads, car accident leads for law firms, exclusive MVA leads, pay per signed case MVA leads, personal injury leads',
  openGraph: {
    title: 'Motor Vehicle Accident Leads for Law Firms | Injury Claim Connect',
    description: 'Exclusive MVA leads with warm live transfers. Pay only when the lead signs with your firm.',
    type: 'website',
    url: 'https://injuryclaimconnect.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motor Vehicle Accident Leads for Law Firms | Injury Claim Connect',
    description: 'Exclusive MVA leads with warm live transfers. Pay only when the lead signs with your firm.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <PayPerSignedCase />
        <WhyChooseUs />
        <StatesCoverage />
        <Compliance />
        <FinalCTA />
      </main>
    </>
  );
}

'use client';

import Hero from '@/components/sections/Hero';
import TargetAudience from '@/components/sections/TargetAudience';
import PricingTiers from '@/components/sections/PricingTiers';
import Templates from '@/components/sections/Templates';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TargetAudience />
        <PricingTiers />
        <Templates />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

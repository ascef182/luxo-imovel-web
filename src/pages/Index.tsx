
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProperties from '@/components/FeaturedProperties';
import BenefitsSection from '@/components/BenefitsSection';
import VirtualTourSection from '@/components/VirtualTourSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <BenefitsSection />
      <VirtualTourSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;

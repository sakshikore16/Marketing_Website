import React from 'react';
import Layout from '../layouts/Layout';
import HeroSection from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Cases from '../components/Case';
import Testimonials from '../components/Testimonials';

const PositivusPage = () => {
  return (
    <Layout title="Positivus">
      <main className="space-y-20">
        <HeroSection />
        <Services />
        <Cases />
        <Team />
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  );
};

export default PositivusPage;

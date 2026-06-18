import React from 'react';
import Hero from '../components/homepage/Hero';
import StatsBar from '../components/homepage/StatsBar';
import Services from '../components/homepage/Services';
import Testimonials from '../components/homepage/Testimonials';
import CallToAction from '../components/homepage/CallToAction';
import PatientTestimonials from '../components/homepage/PatientTestimonials';

const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <StatsBar />
      <Services />
      <PatientTestimonials/>
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default HomePage;
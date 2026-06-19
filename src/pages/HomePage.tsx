import React from 'react';
import Hero from '../components/homepage/Hero';
import StatsBar from '../components/homepage/StatsBar';
import Services from '../components/homepage/Services';
import CallToAction from '../components/homepage/CallToAction';
import PatientTestimonials from '../components/homepage/PatientTestimonials';
import AboutSection from '../components/homepage/AboutUs';
import TestimonialsSection from '../components/homepage/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <StatsBar />
      <Services />
      <PatientTestimonials/>
      <AboutSection/>
      <TestimonialsSection/>
      <CallToAction />
    </main>
  );
};

export default HomePage;
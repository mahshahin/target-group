import React from 'react';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import SomafixSection from '../components/SomafixSection';
import AboutSection from '../components/AboutSection';
import Statistics from '../components/Statistics';
import ContactCTA from '../components/ContactCTA';
import ExhibitionsSection from '../components/ExhibitionsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <SomafixSection />
      <ProductCategories />
      <ExhibitionsSection />
      <AboutSection />
      <Statistics />
      <ContactCTA />
    </>
  );
};

export default Home;

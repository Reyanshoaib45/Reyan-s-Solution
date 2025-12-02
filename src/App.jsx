import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import UAETarget from './components/UAETarget';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <Services />
      <UAETarget />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;

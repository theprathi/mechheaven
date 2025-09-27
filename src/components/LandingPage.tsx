import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WhatsAppOffer from './WhatsAppOffer';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatsAppOffer />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
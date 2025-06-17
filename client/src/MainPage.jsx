import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Whychooseus from './components/Whychooseus';
import Testimonials from './components/Testimonials';
import DemoAndBook_Cards from './components/DemoAndBook_Cards';
import Candly from './components/Candly';
import Faq from './components/Faq';
import Footer from './components/Footer';
import './assets/Css/Mainpage.css';

function MainPage() {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (location.hash === '#faq') {
      const faqElement = document.getElementById('faq');
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  

  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Whychooseus />
      <Testimonials />
      <DemoAndBook_Cards />
      <Candly />
      <Faq />
      <Footer />

    
    </>
  );
}

export default MainPage;

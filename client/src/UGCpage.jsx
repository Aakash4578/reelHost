import React from 'react'
import UGCHero from './components/UGCHero'
import Testimonials from './components/Testimonials';
import Candly from './components/Candly';
import Faq from './components/Faq';
import Footer from './components/Footer';
import UGCShortPagePortfolio from './components/UGCShortPagePortfolio';
import DemoAndBook_Cards from './components/DemoAndBook_Cards'
import PricingCard from './components/PricingCard';
import Heading from './components/Heading';




function UGCpage() {
  return (
  <>
    <UGCHero/>
    <UGCShortPagePortfolio/>
    {/* <PricingCard/> */}
     <DemoAndBook_Cards />
    <Testimonials/>
    <Candly/>
    <Faq/>
    <Footer/>

  </>
  )
}

export default UGCpage
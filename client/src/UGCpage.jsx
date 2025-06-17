import React from 'react'
import UGCHero from './components/UGCHero'
import Heading from './components/Heading';
import PricingCard from './components/PricingCard';
import Testimonials from './components/Testimonials';
import Candly from './components/Candly';
import Faq from './components/Faq';
import Footer from './components/Footer';
import UGCShortPagePortfolio from './components/UGCShortPagePortfolio';
// import './assets/Css/Shortpage.css';
  


function UGCpage() {
  return (
  <>
  <UGCHero></UGCHero>
  <UGCShortPagePortfolio></UGCShortPagePortfolio>
  <Heading></Heading>
  <PricingCard></PricingCard>
    <Testimonials></Testimonials>
    <Candly></Candly>
    <Faq></Faq>
    <Footer></Footer>

  </>
  )
}

export default UGCpage
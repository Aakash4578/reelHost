import React from 'react'
import ShortpageHero from './components/ShortpageHero'
import ShortPagePortfolio from './components/ShortPagePortfolio';
import Heading from './components/Heading';
import PricingCard from './components/PricingCard';
import Testimonials from './components/Testimonials';
import Candly from './components/Candly';
import Faq from './components/Faq';
import Footer from './components/Footer';
// import './assets/Css/Shortpage.css';


function ShortPage() {
  return (
    <>
    <ShortpageHero></ShortpageHero>  
    <ShortPagePortfolio></ShortPagePortfolio>
    <Heading></Heading>
    <PricingCard></PricingCard>
    <Testimonials></Testimonials>
    <Candly></Candly>
    <Faq></Faq>
    <Footer></Footer>
    </>
)
}

export default ShortPage
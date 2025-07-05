import React from 'react'
import LongpageHero from './components/LongpageHero'
import LongpagePortfolio from './components/LongpagePortfolio'
import DemoAndBook_Cards from './components/DemoAndBook_Cards'
import Testimonials from './components/Testimonials';
import Candly from './components/Candly';
import Faq from './components/Faq';
import Footer from './components/Footer';
import PricingCard from './components/PricingCard';
import Heading from './components/Heading';
import './assets/Css/Mainpage.css';



function LongPage() {
  return (

    <>
    <LongpageHero/>
    <LongpagePortfolio/>
    <DemoAndBook_Cards/>
    {/* <PricingCard/> */}
    <Testimonials/>
    <DemoAndBook_Cards />
    <Candly/>
    <Faq/>
    <Footer/>
    
         </>
)
}

export default LongPage
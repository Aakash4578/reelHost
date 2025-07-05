import React from 'react'
import ShortpageHero from './components/ShortpageHero'
import ShortPagePortfolio from './components/ShortPagePortfolio';
import Heading from './components/Heading';
import PricingCard from './components/PricingCard';
import Testimonials from './components/Testimonials';
import Candly from './components/Candly';
import DemoAndBook_Cards from './components/DemoAndBook_Cards'
import Faq from './components/Faq';
import Footer from './components/Footer';
import './assets/Css/Mainpage.css';

function ShortPage() {
  return (
    <>
    <ShortpageHero/>
    <ShortPagePortfolio/>
    <DemoAndBook_Cards/>
    {/* <PricingCard/> */}
    <Testimonials/>
    <Candly/>
    <Faq/>
    <Footer/>
    </>
)
}
export default ShortPage
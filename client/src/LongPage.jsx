import React from 'react'
import LongpageHero from './components/LongpageHero'
import LongpagePortfolio from './components/LongpagePortfolio'
import DemoAndBook_Cards from './components/DemoAndBook_Cards'
import Testimonials from './components/Testimonials';
import Candly from './components/Candly';
import Faq from './components/Faq';
import Footer from './components/Footer';


function LongPage() {
  return (

    <>
    
      <LongpageHero></LongpageHero>
      <LongpagePortfolio></LongpagePortfolio>
    <DemoAndBook_Cards></DemoAndBook_Cards>
    <Testimonials></Testimonials>
    <Candly></Candly>
    <Faq></Faq>
    <Footer></Footer>
    
         </>
)
}

export default LongPage
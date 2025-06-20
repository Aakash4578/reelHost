import React from 'react'
import UGCHero from './components/UGCHero'
import Testimonials from './components/Testimonials';
import Candly from './components/Candly';
import Faq from './components/Faq';
import Footer from './components/Footer';
import UGCShortPagePortfolio from './components/UGCShortPagePortfolio';
// import './assets/Css/Shortpage.css';
  import DemoAndBook_Cards from './components/DemoAndBook_Cards'
import './assets/Css/Mainpage.css';


function UGCpage() {
  return (
  <>
  <UGCHero></UGCHero>
  <UGCShortPagePortfolio></UGCShortPagePortfolio>
  <DemoAndBook_Cards></DemoAndBook_Cards>
    <Testimonials></Testimonials>
    <Candly></Candly>
    <Faq></Faq>
    <Footer></Footer>

  </>
  )
}

export default UGCpage
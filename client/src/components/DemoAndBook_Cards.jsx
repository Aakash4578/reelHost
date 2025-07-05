import React from 'react';
import Callicon from '/assets/img/Call_iCons/Callicon.webp';
import Heading from './Heading';
import style from '../assets/Css/Longpagecards.module.css';

function DemoAndBook_Cards() {
  return (
    <>
      <Heading />
      <div className="container-fluid py-3 d-flex justify-content-center" data-aos="fade-up">
        <div className={`row w-100 ${style['card-container']}`} >
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
            <div className={style.card}>
              <div className={style.icon}>
                <img src={Callicon} alt="Call Icon" />
              </div>
              <h3>1min Demo (free)</h3>
              <p>
                Not sure about the subscription? <br />
                Try our free demo video of 30sec-1min
              </p>
              <div className={style.vediobtn}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScZgvSwBW9wdgA77TNyCRn5LuK3Wwpdiggh1MmMFQmGqIBezQ/viewform?usp=sharing&ouid=112910023168989807147 " target='black_page'>
                  <button>Get your first edit</button> 
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
            <div className={style.card}>
              <div className={style.icon}>
                <img src={Callicon} alt="Call Icon" />
              </div>
              <h3>Book a call</h3>
              <p>
                Want to work with <br />
                Reelox media?
              </p>
              <div className={style.vediobtn2}>
                <a href="#candly">
                  <button className="Getbtn">Book a call</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DemoAndBook_Cards;

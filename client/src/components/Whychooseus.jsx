import React from 'react';
import logo from '/assets/img/logo/navlogo.png'; // Importing the image and giving it a name


function Whychooseus() {
  return (
    <>
      <section>
        {/* whysection */}
        <div className="whysection" >
          <div className="title mb-4"  data-aos="fade-up">Why Clients Trust Us</div>
          <div className="comparison"   >
            <div className="box left-box" data-aos="fade-up">
              <div className="subtitle">Others</div>
              <ul>
                <li>Generic, basic edits</li>
                <li>Slow delivery, limited changes</li>
                <li>No focus on style</li>
                <li>Fixed, rigid plans</li>
              </ul>
            </div>
            <div className="box right-box" data-aos="fade-up">
              <div className="subtitle">
                <img
                  src={logo}
                  alt="Reelox Media"
                  style={{ height: '20px', verticalAlign: 'middle' }}
                />{' '}
                Reelox Media
              </div>
              <ul>
                <li>Expert, creative editors</li>
                <li>Fast delivery, unlimited changes</li>
                <li>Videos match your style</li>
                <li>Use credits anytime</li>
              </ul>
            </div>
          </div>
        </div>
        {/* end */}
      </section>
    </>
  );
}

export default Whychooseus;

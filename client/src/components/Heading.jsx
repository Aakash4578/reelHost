import React, { useEffect } from 'react';
import AOS from 'aos'; // import AOS
import 'aos/dist/aos.css'; // import AOS CSS

function Heading() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section>
      <div className="containerheading" >
        <span className="emoji">🚀</span>
        <h2 className="text">
          Fuel your <span className="highlight-green">growth</span> with <br /> high-quality
          <span className="highlight-purple">video content.</span>
        </h2>
        <span className="emoji">🚀</span>
      </div>
      {/* end */}
    </section>
  );
}

export default Heading;

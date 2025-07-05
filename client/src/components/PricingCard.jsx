import React, { useState } from 'react';
import style from '../assets/Css/Shortpage.module.css';

function PricingCard() {
  const [shapesPosition, setShapesPosition] = useState({
    shape1: { left: '0px', top: '0px' },
    shape2: { left: '0px', top: '0px' },
    shape3: { left: '0px', top: '0px' },
    shape4: { left: '0px', top: '0px' }
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  function moveShapes(event) {
    const hoverArea = event.currentTarget;
    const areaRect = hoverArea.getBoundingClientRect();
    const mouseX = event.clientX - areaRect.left;
    const mouseY = event.clientY - areaRect.top;

    const newPositions = {
      shape1: {
        left: (mouseX + (Math.random() - 0.5) * 200 - 50) + 'px',
        top: (mouseY + (Math.random() - 0.5) * 200 - 50) + 'px'
      },
      shape2: {
        left: (mouseX + (Math.random() - 0.5) * 200 - 50) + 'px',
        top: (mouseY + (Math.random() - 0.5) * 200 - 50) + 'px'
      },
      shape3: {
        left: (mouseX + (Math.random() - 0.5) * 200 - 50) + 'px',
        top: (mouseY + (Math.random() - 0.5) * 200 - 50) + 'px'
      },
      shape4: {
        left: (mouseX + (Math.random() - 0.5) * 200 - 50) + 'px',
        top: (mouseY + (Math.random() - 0.5) * 200 - 50) + 'px'
      }
    };

    setShapesPosition(newPositions);
  }

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);
const [isMonthly, setIsMonthly] = useState(true); // true = per month, false = per hour

  return (
    <>
    <div className="text-center mb-4">
  <button onClick={() => setIsMonthly(!isMonthly)} className="btn btn-danger">
    Switch to {isMonthly ? 'Hourly' : 'Monthly'}
  </button>
</div>

    <div className={`container ${style.prisec}`} id="pri">
      <div className="row g-4" data-aos="fade-up">
        {/* Starter Pack */}
        <div className="col-md-4 col-sm-12">
          <div
            className={`${style.card} ${hoveredIndex !== null && hoveredIndex !== 0 ? style.blur : ''}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <h2>Starter Pack</h2>
            <div className={style.price}>
            {isMonthly ? '$699' : '$799'}
            <div className={style.hourlyrate}>
           {isMonthly ? '10videos' : '20$'}
            <span>{isMonthly ? '/month' : '/hour'}</span>
        </div>
        </div>
            <div className={`${style.borderwrapper} ${style.clinkbtn}`}>
              <a href="#candly"><button className={style.styledbutton}>Get Started</button></a>
            </div>
            <p className={`text-md-start ${style.inclu}`}>What's included:</p>
            <ul>
              <li className={style.lii}>{isMonthly ? 'Up to 30 hours' : 'hours'}</li>
              <li>Editor with 6+ years of experience</li>
              <li>Managed by Project Manager</li>
              <li>Motion Graphics included</li>
              <li>Social Media Management</li>
              <li>Same-day delivery (Mon–Fri)</li>
              <li>1 active request/project at a time</li>
              <li>Real-time support on Slack</li>
              <li>No Contract – Cancel Anytime</li>
            </ul>
          </div>
        </div>

        {/* Pro Pack */}
        <div className="col-md-4 col-sm-12">
          <div
            className={`${style.card} ${style.highlight} ${hoveredIndex !== null && hoveredIndex !== 1 ? style.blur : ''}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <h2>Pro Pack</h2>
            <div className={style.price} style={{ color: '#ab67ff' }}>
              $1,299
              <div className={style.hourlyrate}>16$ <span>/hour</span></div>
            </div>
            <div
              className={`${style.borderwrapperheightlight} ${style.hover1area}`}
              onMouseMove={moveShapes}
            >
              <a href="#candly"><button className={style.hielite}>Get Started</button></a>
              <div className="shapeswrapper">
                <div className={`${style.shape} ${style.shape1}`} style={shapesPosition.shape1}></div>
                <div className={`${style.shape} ${style.shape2}`} style={shapesPosition.shape2}></div>
                <div className={`${style.shape} ${style.shape3}`} style={shapesPosition.shape3}></div>
                <div className={`${style.shape} ${style.shape4}`} style={shapesPosition.shape4}></div>
              </div>
            </div>
            <p className={`text-md-start ${style.inclu}`}>What's included:</p>
            <ul>
              <li className={style.lii}>Up to 60 hours/month</li>
              <li>Editor with 6+ years of experience</li>
              <li>Managed by Project Manager</li>
              <li>Motion Graphics included</li>
              <li>Social Media Management</li>
              <li>Same-day delivery (Mon–Fri)</li>
              <li>1 active request/project at a time</li>
              <li>Real-time support on Slack</li>
              <li>No Contract – Cancel Anytime</li>
            </ul>
          </div>
        </div>

        {/* Enterprise Pack */}
        <div className="col-md-4 col-sm-12">
          <div
            className={`${style.card} ${hoveredIndex !== null && hoveredIndex !== 2 ? style.blur : ''}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <h2>Enterprise Pack</h2>
            <div className={style.price}>
              $2,499
              <div className={style.hourlyrate}>18$ <span>/hour</span></div>
            </div>
            <div className={`${style.borderwrapper} ${style.clinkbtn}`}>
              <a href="#candly"><button className={style.styledbutton}>Get Started</button></a>
            </div>
            <p className={`text-md-start ${style.inclu}`}>What's included:</p>
            <ul>
              <li className={style.lii}>Up to 120 hours/month</li>
              <li>Editor with 6+ years of experience</li>
              <li>Managed by Project Manager</li>
              <li>Motion Graphics included</li>
              <li>Social Media Management</li>
              <li>Same-day delivery (Mon–Fri)</li>
              <li>Multiple active requests at a time</li>
              <li>Real-time support on Slack</li>
              <li>No Contract – Cancel Anytime</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<div className="container mt-2" data-aos="fade-up">
  <div className="row justify-content-center text-white">
    <div className="col-md-7 col-sm-12 ">
      <div className="p-3">
        <p className={style.noteplan}>
          <strong>Note:</strong> Short-form content is billed at approximately 5 hours per video. Long-form YouTube content is billed at 1.5 to 2 hours per minute, depending on complexity.
        </p>
      </div>
    </div>
  </div>
</div>



    </>
  );
}

export default PricingCard;

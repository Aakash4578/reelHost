import React, { useState } from 'react';
import style from '../assets/Css/Shortpage.module.css';

function PricingCard() {

  const [shapesPosition, setShapesPosition] = useState({
    shape1: { left: '0px', top: '0px' },
    shape2: { left: '0px', top: '0px' },
    shape3: { left: '0px', top: '0px' },
    shape4: { left: '0px', top: '0px' }
  });

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

  return (
    <div className={`container ${style.prisec}`} id="pri">
      <div className="row g-4">
        {/* Starter Pack */}
        <div className="col-md-4 col-sm-12">
          <div className={style.card}>
            <h2>Starter Pack</h2>
            <div className={style.price}>
              $599
              <div className={style.hourlyrate}>20$ <span>/hour</span></div>
            </div>
            <div className={`${style.borderwrapper} ${style.clinkbtn}`}>
              <a href="#candly"><button className={style.styledbutton}>Get Started</button></a>
            </div>
            <p className={`text-md-start ${style.inclu}`}>What's included:</p>
            <ul>
              <li>30 hours per month</li>
              <li>Editor with 6+ years of experience</li>
              <li>Real-time on Slack</li>
              <li>Managed by Project Manager</li>
              <li>1 active request /project at a time</li>
              <li>Same-day delivery</li>
              <li>Fast (Mon-Fri)</li>
              <li>No contract</li>
            </ul>
          </div>
        </div>

        {/* Agency Elite */}
        <div className="col-md-4 col-sm-12">
          <div className={`${style.card} ${style.highlight}`}>
            <h2>Agency Elite</h2>
            <div className={style.price} style={{ color: '#ab67ff' }}>
              $2500
              <div className={style.hourlyrate}>16$ <span>/hour</span></div>
            </div>
            <div
              className={`${style.borderwrapperheightlight} ${style.hover1area}`}
              onMouseMove={moveShapes}
            >
              <a href="#candly"><button className={style.hielite}>Get Started</button></a>
              <div className="shapeswrapper">
                <div
                  className={`${style.shape} ${style.shape1}`}
                  style={{ left: shapesPosition.shape1.left, top: shapesPosition.shape1.top }}
                ></div>
                <div
                  className={`${style.shape} ${style.shape2}`}
                  style={{ left: shapesPosition.shape2.left, top: shapesPosition.shape2.top }}
                ></div>
                <div
                  className={`${style.shape} ${style.shape3}`}
                  style={{ left: shapesPosition.shape3.left, top: shapesPosition.shape3.top }}
                ></div>
                <div
                  className={`${style.shape} ${style.shape4}`}
                  style={{ left: shapesPosition.shape4.left, top: shapesPosition.shape4.top }}
                ></div>
              </div>
            </div>
            <p className={`text-md-start ${style.inclu}`}>What's included:</p>
            <ul>
              <li>160 hours per month</li>
              <li>Editor with 6+ years of experience</li>
              <li>Real-time on Slack</li>
              <li>Managed by Project Manager</li>
              <li>4 active request/project at a time</li>
              <li>Same-day delivery</li>
              <li>Fast (Mon-Fri)</li>
              <li>No contract</li>
            </ul>
          </div>
        </div>

        {/* Marketers Pro */}
        <div className="col-md-4 col-sm-12">
          <div className={style.card}>
            <h2>Marketers Pro</h2>
            <div className={style.price}>
              $1500
              <div className={style.hourlyrate}>18$ <span>/hour</span></div>
            </div>
            <div className={`${style.borderwrapper} ${style.clinkbtn}`}>
              <a href="#candly"><button className={style.styledbutton}>Get Started</button></a>
            </div>
            <p className={`text-md-start ${style.inclu}`}>What's included:</p>
            <ul>
              <li>85 hours per month</li>
              <li>Editor with 6+years of experience</li>
              <li>Real-time on Slack</li>
              <li>Managed by Project Manager</li>
              <li>2 active request/project at a time</li>
              <li>Same-day delivery</li>
              <li>Fast (Mon-Fri)</li>
              <li>No contract</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;

import React, { useState } from 'react';
import axios from 'axios';
import logo from '/assets/img/logo/logo.png';
import API from '../api';
function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubscribe = async () => {
    if (!email) return setMsg('Email is required');
    try {
      const res = await axios.post(`${API}/api/newsletter/subscribe`, { email });
      setMsg(res.data.message);
      setEmail('');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Subscription failed');
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-7 col-md-7">
              <div className="d-flex justify-content-center justify-content-md-start mb-2">
                <img src={logo} alt="Logo" className="logo-img" loading="lazy" />
              </div>
              <h5 className="description-h text-center text-md-start">Join our newsletter</h5>
              <p className="description text-center text-md-start mb-3">
                Sign up to our mailing list below and be the first to know <br />
                about new updates. Don't worry, we hate spam too.
              </p>
              <div className="d-flex flex-md-row justify-content-center justify-content-md-start gap-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="newbtn" onClick={handleSubscribe}>Get Notified</button>
              </div>
              {msg && <p className="text-success mt-2">{msg}</p>}
            </div>

            {/* Right Column */}
            <div className="col-lg-5 col-md-5 mt-4">
              <div className="row">
                <div className="col-6">
                  <h5 className="footer-title">Information</h5>
                  <ul className="list-unstyled">
                    <li><a href="#port">Portfolio</a></li>
                    <li><a href="#tes">Testimonials</a></li>
                    <li><a href="#pri">Pricing</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#candly">Contact Us</a></li>
                    <li><a href="/trems">Terms & Conditions</a></li>
                  </ul>
                </div>
                <div className="col-6">
                  <h5 className="footer-title">Follow Us</h5>
                  <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/company/reeloxmedia/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/reeloxmedia/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/@ReeloxMedia" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

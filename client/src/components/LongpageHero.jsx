import React, { useEffect } from 'react'; // ✅ Import useEffect
import logo from '/assets/img/logo/logo.png';
import style from '../assets/Css/Shortpage.module.css';
import { NavbarBrand } from 'react-bootstrap';

function LongpageHero() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.textAlign = "center";
    document.body.style.scrollBehavior = "smooth";

    // Optional cleanup if you want to reset styles later
    return () => {
      document.body.style = null;
    };
  }, []);

  return (
    <>
      <nav className={`${style.navbar} navbar-expand-lg d-flex align-items-center justify-content-center mt-5`}>
        <a className={`${style.NavbarBrand}`} href="#">
          <img src={logo} alt="Logo" className="img-fluid" loading="lazy" />
        </a>
      </nav>
      <div className={`${style.banercon} text-center container`}>
        <h1 className="fw-bold">Supercharge your brand with</h1>
        <h2 className="highlight">viral long-form content</h2>
        <p>
If you're a busy creator looking to grow your brand, we craft long-form
          <br className="br" />
          viral content that grabs attention and drives results
        </p>
        <a href="https://calendly.com/reeloxmedia/30min" className={style.button}>
  Book a 30-min call to Learn more
  <i className={`fas fa-arrow-right ${style.arrowIcon}`}></i>
</a>


      </div>
    </>
  );
}

export default LongpageHero;;

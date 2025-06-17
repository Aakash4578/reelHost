import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/img/logo/navlogo.png';

function Navbar() {
  const sidebarRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const toggleSidebar = () => {
      if (sidebarRef.current) {
        sidebarRef.current.classList.toggle("active");
      }
    };
  
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        sidebarRef.current.classList.remove("active");
      }
    };
  
    const toggleBtn = toggleBtnRef.current;
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleSidebar);
    }
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener("click", toggleSidebar);
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbarinner">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Reelox Media Logo" />
          </Link>

          {/* Sidebar Toggle Button */}
          <span className="menu-toggle d-lg-none" ref={toggleBtnRef}>
            <i className="fas fa-bars"></i>
          </span>

          <div className="collapse navbar-collapse nav-menu">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/short-page">Short Page</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/long-page">Long-From</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/UGCpage">UGC</Link>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link" href="#" style={{ fontSize: '16px', opacity: '50%' }}>|</a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Process">Process</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#faq">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trems">Policies</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar" id="sidebar" ref={sidebarRef}>
        <div className="sidebar-header">
          <a className="navbar-brand" href="#">
            {/* <img src={logo} alt="Reelox Media Logo" className="sidebar-logo" /> */}
          </a>
          <span className="close-btn" onClick={() => {
            sidebarRef.current?.classList.toggle("active");
          }}>&times;</span>
        </div>
        <Link to="/short-page">Short Page</Link>
        <Link to="/long-page">Long-From</Link>
        <Link to="/UGCpage">UGC</Link>
        <Link to="/#proces">Process</Link>
        <Link to="/#faq">FAQs</Link>
      </div>
    </>
  );
}

export default Navbar;

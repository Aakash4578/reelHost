import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import AdminUpdateForm from './AdminUpdateForm';
import AdminRegister from './AdminRegister';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from '../../api'; //✅ import your base API URL//


function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [admin, setAdmin] = useState(null); // 🟢 Store admin info
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // 🟡 Fetch admin info on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${API}/api/admin`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setAdmin(res.data)) // set full data
        .catch(() => {
          setAdmin(null);
        });
    }
  }, []);

  return (
    <>
      <div>
        {/* Sidebar */}
        <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
          <h4><i className="fas fa-video"></i> <span className="d-none d-md-inline">Admin</span></h4>
          <ul className="nav nav-pills flex-column mb-auto">
            <li><Link to="/dashboard" className="nav-link"><i className="fas fa-home"></i> Dashboard</Link></li>
            <li><Link to="/dashboard/main" className="nav-link"><i className="fas fa-upload"></i> Main Page</Link></li>
            <li><Link to="/dashboard/shortpagemanage" className="nav-link"><i className="fas fa-list"></i> Shortpage</Link></li>
            <li><Link to="/dashboard/LongFormManage" className="nav-link"><i className="fas fa-users"></i> LongForm</Link></li>
            <li><Link to="/dashboard/ugcpage" className="nav-link"><i className="fas fa-cog"></i> UGC Page</Link></li>
            <li><Link to="/dashboard/Newslettersubscribers" className="nav-link"><i className="fas fa-cog"></i>Newsletter</Link></li>
          </ul>
        </div>

        {/* Header */}
        <div className={`${styles.header} ${collapsed ? styles.collapsed : ''}`}>
          <div className={styles.dFlex}>
            <i className={`fas fa-bars ${styles.toggleBtn} ${styles.me3}`} onClick={toggleSidebar}></i>
            {/* ✅ Show Admin Email in Welcome */}
            <h5 className="mb-0">Welcome, {admin ? admin.email : "Admin"}</h5>
          </div>
          <div className={`dropdown ${styles.profileDropdown}`}>
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user-circle fa-lg me-2"></i>
              <span>{admin ? admin.email : "Admin"}</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#updateProfileModal"
                >
                  Profile
                </a>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setShowRegisterModal(true)}>
                  Register
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className={`${styles.mainContent} ${collapsed ? styles.collapsed : ''}`}>
          <Outlet />
        </div>
      </div>

      {/* Modals */}
      <AdminUpdateForm />
      <AdminRegister show={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
    </>
  );
}

export default DashboardLayout;

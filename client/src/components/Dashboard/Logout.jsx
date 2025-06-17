import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove token on logout
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return <div>Logging out...</div>; // Optional message while redirecting
}

export default Logout;

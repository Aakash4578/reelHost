import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    // Agar token nahi hai, toh login page pe bhej do
    return <Navigate to="/login" replace />;
  }

  // Agar token hai, toh original component dikhayein
  return children;
}

export default PrivateRoute;

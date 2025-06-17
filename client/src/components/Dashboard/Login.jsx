import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API from '../../api'; //✅ import your base API URL//
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Auto redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const validateEmail = (email) => {
    // Simple email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!validateEmail(email)) {
      setMsg('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setMsg('Password must be at least 6 characters.');
      return;
    }

    try {
      setLoading(true);
      setMsg('');
      const res = await axios.post(`${API}/api/login`, { email, password });
      setMsg(res.data.message);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setMsg(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html {
          height: 100%;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f06, #f79);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        form {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(240, 6, 135, 0.4);
          width: 350px;
          max-width: 90vw;
          text-align: center;
          animation: fadeIn 0.8s ease forwards;
        }
        h2 {
          margin-bottom: 25px;
          color: #d91e63;
          letter-spacing: 2px;
          font-weight: 700;
        }
        input {
          width: 100%;
          padding: 12px 15px;
          margin: 10px 0 20px 0;
          border-radius: 8px;
          border: 1.5px solid #ddd;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }
        input:focus {
          border-color: #d91e63;
          outline: none;
          box-shadow: 0 0 8px rgba(217, 30, 99, 0.5);
        }
        button {
          background-color: #d91e63;
          color: white;
          border: none;
          padding: 12px;
          width: 100%;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #b71c54;
        }
        p.message {
          margin-top: 15px;
          color: #d91e63;
          font-weight: 600;
          min-height: 20px;
          min-height: 24px;
        }
        p.loading {
          color: #555;
          font-style: italic;
          min-height: 20px;
        }
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(-20px);}
          to {opacity: 1; transform: translateY(0);}
        }
      `}</style>

      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
          autoComplete="username"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
          autoComplete="current-password"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {msg && <p className="message">{msg}</p>}
      </form>
    </>
  );
}

export default Login;

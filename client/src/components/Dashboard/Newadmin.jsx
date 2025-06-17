import React, { useState } from 'react'; 
import axios from 'axios';
import API from '../../api'; //✅ import your base API URL//

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}http://localhost:5000/api/register`, { email, password });
      setMsg(res.data.message);
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      setMsg(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: 'red', color: 'white', border: 'none' }}>
        Register
      </button>
      {msg && <p style={{ color: 'red' }}>{msg}</p>}
    </form>
  );
}

export default Register;

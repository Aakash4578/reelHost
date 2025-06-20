import React, { useState } from "react";

function RegisterModal({ show, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setMsg(`Registered successfully with email: ${email}`);
    setEmail('');
    setPassword('');  
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" onClick={onClose} >
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white rounded-top-4">
            <h5 className="modal-title">Register</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {msg && <div className="alert alert-success">{msg}</div>}
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold text-black">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold text-black">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;

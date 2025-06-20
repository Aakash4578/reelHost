import React, { useState } from "react";
import axios from "axios";
import API from "../../api"; // ✅ Make sure this is the correct path

function RegisterModal({ show, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false); // 👁️ state to toggle password

  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    try {
      const res = await axios.post(`${API}/api/admin/register`, {
        email,
        password,
      });

      setMsg(res.data.message || "Registered successfully!");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed.");
    }
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header bg-primary text-white rounded-top-4">
            <h5 className="modal-title">Register</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {msg && <div className="alert alert-success">{msg}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-semibold text-black"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* ✅ Password with Eye Icon */}
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label fw-semibold text-black"
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPass ? "text" : "password"}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPass(!showPass)}
                  >
                    <i
                      className={`fa-solid ${
                        showPass ? "fa-eye-slash" : "fa-eye"
                      }`}
                    ></i>
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
